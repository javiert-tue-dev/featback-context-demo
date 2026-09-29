# FEATBACK contextual feedback walkthrough

A seven-slide, clickable classroom mock-up. It follows fictional Alex through the four weekly FEATBACK questions, optional context questions, the supplied original message, a **scripted proposed** adaptation, user feedback, and an evaluation plan centered on Jev. It does not call an AI service or store responses.

## Run it locally

1. Accept the invitation to this private GitHub repository. Install [Node.js](https://nodejs.org/en/download) version **22.13 or later** if needed. Node.js includes `npm`. You can check your installation in a terminal with `node --version` and `npm --version`.
2. Clone the repository, or download its ZIP from GitHub and open a terminal in the extracted folder.
3. From the repository folder, run `npm ci` once to download the packages listed in `package-lock.json`. Then run `npm run dev` to start the demo.

**No Python virtual environment (`venv`) or Python packages are needed.** The demo uses Node.js. Installing the npm packages requires an internet connection; the demo itself uses fictional, scripted content and needs no API key or FEATBACK account.

```bash
git clone https://github.com/javiert-tue-dev/featback-context-demo.git
cd featback-context-demo
npm ci
npm run dev
```

If you downloaded a ZIP, skip the `git clone` command and open a terminal in the extracted `featback-context-demo` folder before running `npm ci`. Open the address printed by the server, normally `http://localhost:3000/`. Stop the server with `Ctrl+C`. On later runs, start it again with `npm run dev`; you do not need to repeat `npm ci` unless the dependencies change.

Use **Next step** and **Back**, or the left and right arrow keys. On the weekly-question slide, use its **Next** and **Previous** buttons to move through the four photographed questions. The text of both feedback messages is selectable and can be scrolled. **Reset Alex** restores the provided scenario.

This is a classroom mock-up, not a live FEATBACK service. Do not enter real participant responses. The answer fields are prefilled with the fictional Alex scenario, and nothing is sent to a model or saved by the app.

Suggested narration:

1. FEATBACK publicly describes four multiple-choice questions each week across eight weeks. The group proposes three optional context questions immediately after them.
2. The four question topics, order, answer bands and one-question-per-screen flow come from the group’s September 2026 photographs. Their English was produced with Google Translate, so this mock-up lightly edits awkward wording and renders “Not” as “0 days.” Alex’s selections and prior-week bands are fictional. The classification labels come from the separate group example and are fixed fixtures, not calculated by this app.
3. The original message comes from the group’s example screenshot and is unchanged. The personalized message is an **AI-generated example prepared for the demo**, not a live model response. Alex’s three original open answers are restored verbatim. The draft acknowledges avoiding lunch, arriving home hungry, deadlines, evenings alone and the reported difficulty with waiting. It keeps the source’s general explanation of emotional coping, without assuming that explanation accounts for Alex’s experience. It uses texting the sister and asking the housemate to eat together as support options Alex named. The delay task and its progression are held for clinical review. The expandable panel explains this decision for the same scenario; there is no separate simplified Alex case.
4. The comparison slide has two purposes: show the coach precisely what changed, and show how Alex could push back on an AI-assisted response. In an intended participant view, Alex would see reviewed feedback and an option to flag it or open the standard version. The side-by-side presentation is for the classroom. A concern is retained for human review; no reaction retrains a model. Editing Alex’s answers marks the script as unmatched.
5. The final slide first explains Jev as a separate evaluator, then shows seven distinct quality attributes: contextual fit, grounding, core advice fidelity, actionability, respectful tone, clarity and autonomy. The grades **and confidence values are hand-authored layout placeholders**, not Jev output or clinical ratings. Two concrete Choice questions flag potentially harmful advice and unsupported diagnosis. Prototype checks would track grounding errors, missed clinical concerns, differences across language/writing styles, and user reactions. FEATBACK expert review of the rubric and advice is still needed; no protocol to compare numeric grades with clinicians has been agreed.

## Important review point

The message itself addresses Alex directly. Clinical-review reasoning belongs to the presenter warning and expandable explanation, rather than the participant-facing feedback.

Alex explicitly says that waiting before eating felt like ignoring hunger. Repeating the delay task with a short clarification would not resolve that conflict. The draft therefore holds that task and its progression for review, while acknowledging Alex’s experience and preferred support. It does not prescribe a replacement intervention, recommend exercise, or claim that Alex said music helped. This is a visible exception to preserving the source task, not a clinically approved alternative. Choosing to view the standard text on the comparison slide does not resolve the same concern in that text.

The mock-up does not implement detection, alerts or a review queue. [NICE NG69](https://www.nice.org.uk/guidance/ng69/chapter/recommendations) discusses regular eating in treatment for binge eating and bulimia nervosa; that guidance does not validate either draft or establish what FEATBACK should tell a particular participant. Neither the message nor the mock Jev grades establish clinical safety, benefit, or adherence.

## Source and visual reference

- Public FEATBACK page: <https://featback.nl/online-hulp/>. The mock-up uses its peach background, navy and coral colors, Calistoga headings, Raleway text, wordmark styling, and one illustration.
- Four questionnaire photographs supplied by the group, which are not included in this repository. The mock-up reproduces their question sequence and answer controls; its line icons are approximations.
- Example feedback and Alex scenario supplied by the group, which are not included as separate source documents in this repository. The personalized message in the app was revised after the original handoff.
- The group's Stage 1 design requires adapted wording to preserve FEATBACK’s underlying clinical content, avoid diagnosis and express uncertainty. The Stage 1 PDF is not included here. It does not prescribe Jev or a numeric expert-grading protocol; the scorecard is a discussion proposal for this mock-up.
- Jev Score and confidence interpretation: <https://docs.typesafe.ai/primitives/score> and <https://docs.typesafe.ai/confidence>.

Run `npm run build`, `npx tsc --noEmit`, and `npm test` before presenting after edits.
