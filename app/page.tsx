'use client';

import { useEffect, useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, CircleHelp, CloudRain, RotateCcw, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  ADAPTATIONS, CONTEXT_FIT_RUBRIC, CONTEXT_QUESTIONS, FEEDBACK_SECTIONS, ORIGINAL_FEEDBACK,
  PERSONALIZED_FEEDBACK, QUALITY_CRITERIA, QUESTION_OPTIONS, SAFETY_QUESTIONS, SLIDE_TITLES,
  STRUCTURED_QUESTIONS,
} from '@/lib/presentation';

type Reaction = 'relevant' | 'missed' | 'uncomfortable' | null;
const QUESTION_ICONS = [CircleHelp, Utensils, CloudRain, Activity] as const;
const EXAMPLE_GRADES = [3, 3, 4, 4, 4, 3, 4] as const;
const EXAMPLE_CONFIDENCES = [0.61, 0.52, 0.46, 0.68, 0.74, 0.81, 0.57] as const;

function Message({ paragraphs, label }: { paragraphs: readonly string[]; label: string }) {
  return <>
    <p className="feedback-provenance">Illustrative classroom feedback · unapproved for use</p>
    <div className="message-sheet" aria-label={label}>
      {paragraphs.map((paragraph, index) => <div className="message-section" key={index}>
        <span className="message-section-label">{FEEDBACK_SECTIONS[index]}</span>
        <p>{paragraph}</p>
      </div>)}
    </div>
  </>;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [structured, setStructured] = useState<string[]>(STRUCTURED_QUESTIONS.map((item) => item.current));
  const [context, setContext] = useState<string[]>(CONTEXT_QUESTIONS.map((item) => item.answer));
  const [reaction, setReaction] = useState<Reaction>(null);
  const [useStandard, setUseStandard] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const edited = structured.some((value, index) => value !== STRUCTURED_QUESTIONS[index].current) ||
    context.some((value, index) => value !== CONTEXT_QUESTIONS[index].answer);
  const question = STRUCTURED_QUESTIONS[questionIndex];
  const QuestionIcon = QUESTION_ICONS[questionIndex];

  useEffect(() => {
    document.querySelector('.slide-scroll')?.scrollTo({ top: 0 });
  }, [slide, questionIndex]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement) return;
      if (event.key === 'ArrowRight') {
        if (slide === 1 && questionIndex < STRUCTURED_QUESTIONS.length - 1) setQuestionIndex((value) => value + 1);
        else setSlide((value) => Math.min(SLIDE_TITLES.length - 1, value + 1));
      }
      if (event.key === 'ArrowLeft') {
        if (slide === 1 && questionIndex > 0) setQuestionIndex((value) => value - 1);
        else setSlide((value) => Math.max(0, value - 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [slide, questionIndex]);

  function nextStep() {
    if (slide === 1 && questionIndex < STRUCTURED_QUESTIONS.length - 1) setQuestionIndex(questionIndex + 1);
    else setSlide(Math.min(SLIDE_TITLES.length - 1, slide + 1));
  }

  function previousStep() {
    if (slide === 1 && questionIndex > 0) setQuestionIndex(questionIndex - 1);
    else setSlide(Math.max(0, slide - 1));
  }

  function resetAlex() {
    setStructured(STRUCTURED_QUESTIONS.map((item) => item.current));
    setContext(CONTEXT_QUESTIONS.map((item) => item.answer));
    setQuestionIndex(0);
    setReaction(null);
    setUseStandard(false);
    setShowDetails(false);
    setSlide(0);
  }

  const displayOriginal = useStandard;

  return <div className="presentation-shell">
    <header className="presentation-header">
      <div className="header-inner">
        <button type="button" className="wordmark" onClick={() => setSlide(0)} aria-label="Return to first slide">f<span>EAT</span>BACK</button>
        <span className="header-purpose">Contextual feedback concept</span>
        <span className="fiction-label">Fictional classroom demonstration</span>
      </div>
      <div className="progress-track" aria-label={`Slide ${slide + 1} of ${SLIDE_TITLES.length}`}><span style={{ width: `${((slide + 1) / SLIDE_TITLES.length) * 100}%` }} /></div>
    </header>

    <main className="slide-scroll" id="slide-content">
      <div className="slide-stage">
        {slide === 0 && <section className="hero-slide" aria-labelledby="slide-title">
          <div className="hero-copy">
            <span className="eyebrow">An extension of the weekly check-in</span>
            <h1 id="slide-title">FEATBACK, with<br />more context</h1>
            <p className="hero-lead">Follow fictional Alex through the weekly questions, three optional reflections, the original feedback and a proposed personalized response.</p>
            <p className="hero-detail">Intended setting: FEATBACK’s existing eight-week web programme. The extra questions would appear after its four weekly multiple-choice questions, and feedback would appear in the same user flow.</p>
            <Button className="coral-button start-button" onClick={() => setSlide(1)}>Start Alex’s check-in <ArrowRight size={19} /></Button>
            <p className="source-line">Visual reference: <a href="https://featback.nl/online-hulp/" target="_blank" rel="noopener noreferrer">FEATBACK’s public website</a> and four questionnaire screenshots supplied by the group. Alex’s answers and all added content are fictional.</p>
          </div>
          <div className="hero-art"><img src="/featback-online-hulp.svg" alt="FEATBACK illustration of supportive hands" /><span>Fictional example for design review</span></div>
        </section>}

        {slide === 1 && <section className="content-slide" aria-labelledby="slide-title">
          <div className="slide-intro"><span className="eyebrow">01 / Existing weekly step</span><h1 id="slide-title">The four weekly questions</h1><p>Alex answers one question at a time. The wording and four answer bands come from screenshots of the actual questionnaire; the English has been lightly edited from Google Translate.</p></div>
          <div className="questionnaire-frame">
            <div className="questionnaire-top"><span>FEATBACK weekly check-in</span><span>Question {questionIndex + 1} of 4</span></div>
            <QuestionIcon className="questionnaire-illustration" size={96} strokeWidth={1.15} aria-hidden="true" />
            <fieldset className="questionnaire-fieldset"><legend>{question.question}</legend>
              <div className="questionnaire-options">{QUESTION_OPTIONS.map((option) => <label key={option} className="questionnaire-option">
                <input type="radio" name={`question-${questionIndex}`} value={option} checked={structured[questionIndex] === option} onChange={() => setStructured((previous) => previous.map((value, index) => index === questionIndex ? option : value))} />
                <span className="choice-circle" aria-hidden="true" /><span>{option}</span>
              </label>)}</div>
            </fieldset>
            <div className="questionnaire-actions"><Button variant="outline" onClick={previousStep}>{questionIndex === 0 ? 'Back to start' : 'Previous'}</Button><Button className="coral-button" onClick={nextStep}>{questionIndex === 3 ? 'Continue' : 'Next'}</Button></div>
            <div className="questionnaire-dots" aria-label={`Question ${questionIndex + 1} of 4`}>{STRUCTURED_QUESTIONS.map((item, index) => <button key={item.question} type="button" onClick={() => setQuestionIndex(index)} className={index === questionIndex ? 'active' : index < questionIndex ? 'visited' : ''} aria-label={`Show question ${index + 1}`} aria-current={index === questionIndex ? 'step' : undefined} />)}</div>
          </div>
          <p className="questionnaire-source">Presenter note: Alex’s selected answer is fictional; last week’s answer was <strong>{question.previous}</strong>. The source example labels this domain <strong>{question.classification}</strong>. The demo does not recreate FEATBACK’s scoring rules.</p>
          {edited && <p className="stale-note">You changed Alex’s answers. The scripted feedback on later slides will no longer match. Reset Alex to restore the demonstration.</p>}
        </section>}

        {slide === 2 && <section className="content-slide" aria-labelledby="slide-title">
          <div className="slide-intro"><span className="eyebrow">02 / Proposed optional step</span><h1 id="slide-title">What Alex shares</h1><p>Three short open-ended questions add context that the four weekly answers cannot show. Alex may skip any of them.</p></div>
          <div className="context-list">{CONTEXT_QUESTIONS.map((item, index) => <div className="context-row" key={item.question}><div className="context-label"><span className="question-number">0{index + 1}</span><label htmlFor={`context-${index}`}>{item.question}</label></div><div className="context-answer"><Textarea id={`context-${index}`} value={context[index]} onChange={(event) => setContext((previous) => previous.map((value, position) => position === index ? event.target.value : value))} className="feat-textarea" /><button type="button" className="text-action" onClick={() => setContext((previous) => previous.map((value, position) => position === index ? '' : value))}>Skip this question</button></div></div>)}</div>
          <p className="quiet-note">The AI role proposed by the group is to extract only relevant context from optional answers, then use it to draft feedback for review. No answer is sent to a model in this demonstration.</p>
          {edited && <p className="stale-note">This is now an edited scenario. Later scripted feedback is still Alex’s original example and will be marked as unmatched.</p>}
        </section>}

        {slide === 3 && <section className="content-slide message-slide" aria-labelledby="slide-title">
          <div className="slide-intro"><span className="eyebrow">03 / Supplied example</span><h1 id="slide-title">Original FEATBACK feedback</h1><p>This message is transcribed from the example your group supplied. Its wording is unchanged; the section labels are presenter annotations.</p></div>
          {edited && <p className="stale-note">The message below belongs to Alex’s original fixture and no longer matches the edited answers. Reset Alex for the planned comparison.</p>}
          <Message paragraphs={ORIGINAL_FEEDBACK} label="Complete original FEATBACK example feedback" />
          <p className="quiet-note">Scroll within this slide to read the complete message. It includes a symptom summary, explanation, suggested task and closing.</p>
        </section>}

        {slide === 4 && <section className="content-slide message-slide" aria-labelledby="slide-title">
          <div className="slide-intro"><span className="eyebrow">04 / Intended output example</span><h1 id="slide-title">Proposed personalized feedback</h1><p>The same four sections remain: summary, explanation, task and closing. This scripted example adds Alex’s context and adjusts generic advice where her answers suggest a mismatch. It is not a recorded model run.</p></div>
          <p className="review-warning">For clinical review: the short pause remains, but it must not mean delaying a meal or ignoring hunger. A reviewer must approve this wording and decide whether the task is suitable before anyone uses it.</p>
          {edited && <p className="stale-note">The script below belongs to Alex’s original answers and no longer matches the edited scenario. Reset Alex for the planned comparison.</p>}
          <Message paragraphs={PERSONALIZED_FEEDBACK} label="Complete scripted personalized feedback for Alex" />
        </section>}

        {slide === 5 && <section className="content-slide comparison-slide" aria-labelledby="slide-title">
          <div className="slide-intro"><span className="eyebrow">05 / User agency</span><h1 id="slide-title">Alex can push back</h1><p>The side-by-side view is for this classroom discussion. In the intended interface, Alex sees the reviewed feedback, can flag wording that feels wrong, and can choose the standard message. A reaction is a review signal, not a model grade or automatic retraining.</p></div>
          <p className="comparison-disclosure">Presenter comparison · both feedback examples are illustrative and unapproved for use</p>
          <div className="comparison-columns"><div className="comparison-column"><span className="column-label">Standard example</span>{!edited && displayOriginal && <span className="display-badge">Alex chose this version</span>}<p>{ORIGINAL_FEEDBACK[0]}</p><button type="button" className="text-action" onClick={() => setSlide(3)}>Read full message</button></div><div className="comparison-column"><span className="column-label">Contextual draft</span>{!edited && !displayOriginal && <span className="display-badge">Shown in this mock-up</span>}<p>{PERSONALIZED_FEEDBACK[0]}</p><button type="button" className="text-action" onClick={() => setSlide(4)}>Read full message</button></div></div>
          <button type="button" className="details-toggle" onClick={() => setShowDetails(!showDetails)} aria-expanded={showDetails}>{showDetails ? 'Hide' : 'Show'} which answers shaped the draft <span>{showDetails ? '−' : '+'}</span></button>
          {showDetails && <div className="adaptation-list">{ADAPTATIONS.map(([input, use]) => <div key={input}><strong>{input}</strong><span>{use}</span></div>)}</div>}
          <div className="reaction-zone"><h2>Does this response fit Alex’s experience?</h2><div className="reaction-buttons">{([['relevant', 'Feels relevant'], ['missed', 'Misses my situation'], ['uncomfortable', 'Feels uncomfortable']] as const).map(([value, label]) => <Button key={value} variant="outline" className={`reaction-button ${reaction === value ? 'selected' : ''}`} onClick={() => setReaction(value)} disabled={edited}>{label}</Button>)}<Button variant="outline" className={`reaction-button ${useStandard ? 'selected' : ''}`} onClick={() => setUseStandard(!useStandard)} disabled={edited}>{useStandard ? 'Show contextual draft' : 'Use standard feedback'}</Button></div>{edited ? <p className="stale-note">Reset Alex before judging the scripted response against her original answers.</p> : (reaction || useStandard) && <p className="reaction-result" role="status">{useStandard ? `Alex chose the standard message. ${reaction === 'missed' || reaction === 'uncomfortable' ? 'Her concern is also retained for human review.' : 'The choice is recorded for human review.'}` : reaction === 'relevant' ? 'Alex found this relevant. Her reaction is recorded for review; it does not establish that the advice is safe.' : 'Alex’s concern is flagged for human review. She can also choose the standard feedback; the draft is not automatically rewritten.'}</p>}</div>
        </section>}

        {slide === 6 && <section className="content-slide evaluation-slide" aria-labelledby="slide-title">
          <div className="slide-intro"><span className="eyebrow">06 / Evaluation plan</span><h1 id="slide-title">How could we evaluate this feedback?</h1><p>We need to check whether added context improves the message while its core advice and clinical boundaries remain intact. These are proposed prototype checks, not evidence of clinical effectiveness.</p></div>
          <div className="jev-definition"><strong>What is Jev?</strong><span>Jev is a separate AI evaluator: it answers specific questions about a draft. It does not write the feedback or decide whether it can be shown. For each quality, it can return a rubric-based score and confidence. <a href="https://docs.typesafe.ai/primitives/score" target="_blank" rel="noopener noreferrer">How Jev Score works</a>.</span></div>
          <div className="jev-steps"><div><strong>1 · Supply the evidence</strong><span>The candidate feedback, Alex’s visible answers and a predefined rubric.</span></div><div><strong>2 · Ask narrow questions</strong><span>Score: “How well does this fit Alex’s context?” Choice: “Does it assign an unsupported diagnosis?”</span></div><div><strong>3 · Inspect and test</strong><span>Review concerning or uncertain results, test varied examples and ask users how the wording feels.</span></div></div>
          <div className="jev-report"><div className="jev-report-header"><div><span className="eyebrow">Proposed feedback · example scorecard</span><h2>Seven quality attributes</h2></div><span className="example-label">Illustrative mock values · Jev has not been run</span></div>
            <p className="confidence-callout">Grade shows the rubric position. Confidence shows how concentrated Jev’s rating would be, not whether it is correct.</p>
            <div className="result-table-wrap"><table><thead><tr><th>Quality attribute</th><th>What Jev would grade</th><th>Mock grade</th><th>Mock confidence</th></tr></thead><tbody>{QUALITY_CRITERIA.map(([name, description], index) => <tr key={name}><td><strong>{name}</strong></td><td>{description}</td><td><span className="grade-meter"><span style={{ width: `${EXAMPLE_GRADES[index] * 20}%` }} /></span><strong>{EXAMPLE_GRADES[index]} / 5</strong></td><td>{EXAMPLE_CONFIDENCES[index].toFixed(2)}</td></tr>)}</tbody></table></div>
            <p className="report-caveat">Every number above is hand-authored for the mock-up, not Jev output or a clinical rating. A real Jev Score uses descriptive levels and may be fractional; this display maps its 0–4 position to 1–5. Confidence (0–1) describes how concentrated its level probabilities are, <strong>not</strong> the chance that the grade is correct or that advice is safe. Core-advice fidelity cannot be checked for real until approved FEATBACK content is available. <a href="https://docs.typesafe.ai/confidence" target="_blank" rel="noopener noreferrer">Confidence documentation</a>.</p>
          </div>
          <div className="eval-bottom"><details className="rubric-details"><summary>Open one concrete quality question and its five levels</summary><p><strong>{CONTEXT_FIT_RUBRIC.question}</strong></p><ol>{CONTEXT_FIT_RUBRIC.levels.map((level) => <li key={level}>{level}</li>)}</ol></details><div className="safety-panel"><h3>Separate clinical-boundary checks</h3><ul>{SAFETY_QUESTIONS.map(([name, question]) => <li key={name}><strong>{name}:</strong> {question}</li>)}</ul><p>Jev Choice could answer <em>concern present</em>, <em>no concern identified</em>, or <em>cannot assess</em>. It flags possible problems; it cannot certify safety or diagnose Alex. <strong>Status: not run.</strong></p></div></div>
          <div className="evaluation-footer">Prototype checks: compare grounding with manually labeled synthetic answers; count missed clinical concerns; inspect results across supported languages and writing styles; collect user ratings of relevance, comfort, clarity and question burden. FEATBACK experts would need to review the rubric and advice before use.</div>
        </section>}
      </div>
    </main>

    <footer className="presentation-footer"><div className="footer-inner"><div className="slide-position"><span>{String(slide + 1).padStart(2, '0')}</span><span>/</span><span>{String(SLIDE_TITLES.length).padStart(2, '0')}</span><span className="footer-title">{SLIDE_TITLES[slide]}{slide === 1 ? ` · ${questionIndex + 1}/4` : ''}</span></div><div className="footer-actions"><Button variant="ghost" className="reset-button" onClick={resetAlex}><RotateCcw size={15} /> Reset Alex</Button>{slide !== 1 && <><Button variant="outline" className="nav-button" onClick={previousStep} disabled={slide === 0}><ArrowLeft size={17} /> Back</Button>{slide < SLIDE_TITLES.length - 1 && <Button className="nav-button next-button" onClick={nextStep}>Next step <ArrowRight size={17} /></Button>}</>}</div></div></footer>
  </div>;
}
