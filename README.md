# FEATBACK contextual feedback walkthrough

A seven-slide, clickable classroom mock-up. It follows fictional Alex through the four weekly FEATBACK questions, optional context questions, the supplied original message, a **scripted proposed** adaptation, user feedback, and an evaluation plan centered on Jev. It does not call an AI service or store responses.

## Run it locally

Requires Node.js 22.13 or later. No API key or FEATBACK account is needed: every screen uses fictional, scripted content and works offline after dependencies are installed.

```bash
npm ci
npm run dev
```

If you cloned the repository, run these commands from its root. Open the address printed by the server, normally `http://localhost:3000/`. Use **Next step** and **Back**, or the left and right arrow keys. On the weekly-question slide, use its **Next** and **Previous** buttons to move through the four photographed questions. The text of both feedback messages is selectable and can be scrolled. **Reset Alex** restores the provided scenario.

This is a classroom mock-up, not a live FEATBACK service. Do not enter real participant responses. The answer fields are prefilled with the fictional Alex scenario, and nothing is sent to a model or saved by the app.

Suggested narration:

1. FEATBACK publicly describes four multiple-choice questions each week across eight weeks. The group proposes three optional context questions immediately after them.
2. The four question topics, order, answer bands and one-question-per-screen flow come from the group’s September 2026 photographs. Their English was produced with Google Translate, so this mock-up lightly edits awkward wording and renders “Not” as “0 days.” Alex’s selections and prior-week bands are fictional. The classification labels come from the separate group example and are fixed fixtures, not calculated by this app.
3. The original message comes from the group’s example screenshot. The revised personalized message is a **scripted proposal**, not a recorded model output. The section labels are presenter annotations; the original message text is unchanged.
4. The comparison slide has two purposes: show the coach precisely what changed, and show how Alex could push back on an AI-assisted response. In an intended participant view, Alex would see reviewed feedback and an option to flag it or open the standard version. The side-by-side presentation is for the classroom. A concern is retained for human review; no reaction retrains a model. Editing Alex’s answers marks the script as unmatched.
5. The final slide first explains Jev as a separate evaluator, then shows seven distinct quality attributes: contextual fit, grounding, core advice fidelity, actionability, respectful tone, clarity and autonomy. The grades **and confidence values are hand-authored layout placeholders**, not Jev output or clinical ratings. Two concrete Choice questions flag potentially harmful advice and unsupported diagnosis. Prototype checks would track grounding errors, missed clinical concerns, differences across language/writing styles, and user reactions. FEATBACK expert review of the rubric and advice is still needed; no protocol to compare numeric grades with clinicians has been agreed.

## Important review point

The revised script preserves the original four sections and short-pause idea, but narrows its meaning: it does not suggest delaying a meal or ignoring hunger and it removes exercise as a distraction for Alex. These are design choices for a clinical collaborator to review, not approved treatment advice. [NICE NG69](https://www.nice.org.uk/guidance/ng69/chapter/recommendations) discusses regular eating in treatment for binge eating and bulimia nervosa; that guidance does not validate this draft or establish what FEATBACK should tell a particular participant. Neither the message nor the mock Jev grades establish clinical safety, benefit, or adherence.

## Source and visual reference

- Public FEATBACK page: <https://featback.nl/online-hulp/>. The mock-up uses its peach background, navy and coral colors, Calistoga headings, Raleway text, wordmark styling, and one illustration.
- Four questionnaire photographs supplied by the group, which are not included in this repository. The mock-up reproduces their question sequence and answer controls; its line icons are approximations.
- Example feedback and Alex scenario supplied by the group, which are not included as separate source documents in this repository. The personalized message in the app was revised after the original handoff.
- The group's Stage 1 design requires adapted wording to preserve FEATBACK’s underlying clinical content, avoid diagnosis and express uncertainty. The Stage 1 PDF is not included here. It does not prescribe Jev or a numeric expert-grading protocol; the scorecard is a discussion proposal for this mock-up.
- Jev Score and confidence interpretation: <https://docs.typesafe.ai/primitives/score> and <https://docs.typesafe.ai/confidence>.

Run `npm run build`, `npx tsc --noEmit`, and `npm test` before presenting after edits.
