export const STRUCTURED_QUESTIONS = [
  {
    question: 'On how many days in the past week did you worry about food, your body, and/or your weight?',
    current: '4–6 days',
    previous: '4–6 days',
    classification: 'Dysfunctional',
  },
  {
    question: 'On how many days in the past week did you eat less than the recommended amount of food for your age and gender?',
    current: 'Every day',
    previous: 'Every day',
    classification: 'Dysfunctional',
  },
  {
    question: 'On how many days in the past week did you have a binge eating episode (eating a lot in a short time while feeling unable to stop)?',
    current: '4–6 days',
    previous: '1–3 days',
    classification: 'Dysfunctional, worsened',
  },
  {
    question: 'On how many days in the past week did you vomit, fast, use laxatives, or exercise excessively because you feared gaining weight?',
    current: '4–6 days',
    previous: '1–3 days',
    classification: 'Dysfunctional, worsened',
  },
] as const;

export const QUESTION_OPTIONS = ['0 days', '1–3 days', '4–6 days', 'Every day'] as const;

export const FEEDBACK_SECTIONS = [
  'Symptom summary + empathy',
  'Explanation',
  'Tips / task',
  'Closing',
] as const;

export const CONTEXT_QUESTIONS = [
  {
    question: 'Thinking about a difficult moment with eating this week, what was happening before and afterwards?',
    answer: 'I avoided lunch because the cafeteria was crowded and I felt people would watch me eat. When I got home, I was really hungry and overwhelmed. Eating felt out of control, and afterwards I felt guilty and exercised to make up for it.',
  },
  {
    question: 'What was different this week, if anything, that made things harder or easier?',
    answer: 'I had several deadlines and my housemate was away. Evenings were harder on my own. Last week we sometimes ate together, and that felt easier.',
  },
  {
    question: 'What have you already tried, and what kind of support would feel manageable right now?',
    answer: 'Trying to wait before eating made me feel like I should keep ignoring my hunger. Texting my sister helps me feel less alone. I could ask my housemate to eat with me, but a big challenge would feel like another thing to fail.',
  },
] as const;

// Exact transcription supplied by the group from its FEATBACK example screenshot.
export const ORIGINAL_FEEDBACK = [
  'We are concerned about your eating problems. You indicate that last week you have been worrying about food and your body, you have not eaten sufficiently every day and have more days on which you dealt with binges and compensatory behaviors. That’s no small thing you’re dealing with :(.',
  'The urge to eat can emerge from stress, tension and/or emotions that suddenly occur. Is that something you recognize? Do one or more of these factors also precede a binge for you? It is possible to directly respond to these tensions or emotions by giving in to a binge. However, in fact you are not really heeding them, but you are muffling or dampening them and putting them aside. This mostly has a reversed effect, since not only do these tensions and emotions return later, you generally feel worse after a binge as well.',
  'Next time you feel an urge to binge or compensate your food, try to delay it. You will notice that after a while the binge or compensating behavior seems less necessary, or even not necessary at all! For this week, try to delay the urge for about 10 minutes. Also think about activities you can undertake during those 10 minutes to make the delaying of your binge or compensating more bearable. Call a friend, put on your favorite music, go on a stroll through town or find another activity. Did you achieve the 10-minute delay? Excellent! Challenge yourself to extent the time you set for yourself every now and then.',
  'Will you rise to the challenge? We are very curious to see what will happen when you learn to delay your harmful eating behaviors and whether this will help you. Good luck!',
] as const;

// Revised scripted proposal: the original four-part message structure and core
// suggestion remain visible. It is not a recorded model response or approved advice.
export const PERSONALIZED_FEEDBACK = [
  'We are concerned about your eating problems. Last week you worried about food and your body, ate less than recommended every day, and reported more days with binge eating and compensatory behaviours. That’s no small thing to deal with, especially during a week with deadlines and more evenings alone.',
  'The urge to binge can emerge from stress, tension and/or emotions that suddenly occur. Is that something you recognise? You also described avoiding lunch in the crowded cafeteria and arriving home hungry and overwhelmed. Hunger may matter alongside stress, although this check-in cannot tell us exactly what caused that moment.',
  'Next time you notice an urge to binge or compensate, you could try delaying acting on that urge for about 10 minutes, if that feels manageable. This does not mean delaying a meal or ignoring hunger. During those 10 minutes, you could call a friend, text your sister or put on your favourite music. Because you mentioned exercising to compensate, a walk or other exercise is not suggested here. If the pause does not help, choose another way to get support.',
  'We are curious to see whether a short pause helps you and what you notice if it does not. There is no challenge to pass, and you can choose another way to get support if this does not feel right. Good luck!',
] as const;

export const ADAPTATIONS = [
  ['Deadlines and evenings alone', 'Adds one sentence of context to the symptom summary'],
  ['Avoided lunch; arrived home hungry', 'Keeps the explanation tentative and acknowledges hunger'],
  ['Exercise used to compensate', 'Keeps the short pause, but removes a walk as a suggested activity'],
  ['Waiting felt like ignoring hunger', 'Clarifies that a pause must not delay a meal'],
  ['Texting sister helps; challenges feel pressuring', 'Uses a familiar support option and removes pass/fail framing'],
] as const;

export const QUALITY_CRITERIA = [
  ['Contextual fit', 'Addresses the reported difficulties and uses relevant optional details'],
  ['Grounding', 'Supports claims with Alex’s answers and marks interpretations as tentative'],
  ['Core advice fidelity', 'Preserves FEATBACK’s approved advice while adapting wording and examples'],
  ['Actionability', 'Offers a manageable step that fits stated barriers'],
  ['Respectful tone', 'Acknowledges difficulty without blame or shame'],
  ['Clarity', 'Uses plain language that is easy to follow'],
  ['Autonomy', 'Offers a choice without pressure or pass/fail framing'],
] as const;

export const CONTEXT_FIT_RUBRIC = {
  question: 'How well does the candidate feedback address Alex’s reported difficulties using only relevant optional answers?',
  levels: [
    'Addresses unrelated issues or ignores the reported difficulties',
    'Mentions the difficulties but merely repeats optional details',
    'Addresses some main difficulties and uses one relevant detail',
    'Addresses the main difficulties and adapts wording to relevant context with a minor omission',
    'Addresses the main difficulties and uses relevant context without unnecessary personal detail',
  ],
} as const;

export const SAFETY_QUESTIONS = [
  ['Advice risk', 'Does this feedback encourage delaying needed eating, ignoring hunger, or compensatory behaviour?'],
  ['Clinical diagnosis', 'Does this feedback assign a diagnosis or clinical severity judgement that Alex’s answers cannot establish?'],
] as const;

export const SLIDE_TITLES = [
  'FEATBACK, with more context',
  'The four weekly questions',
  'What Alex shares',
  'Original FEATBACK feedback',
  'Proposed personalized feedback',
  'Alex can push back',
  'How could we evaluate this feedback?',
] as const;
