import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CONTEXT_QUESTIONS, ORIGINAL_FEEDBACK, PERSONALIZED_FEEDBACK,
  QUALITY_CRITERIA, QUESTION_OPTIONS, SLIDE_TITLES, STRUCTURED_QUESTIONS,
} from '../lib/presentation.ts';

test('walkthrough covers the supplied weekly and optional questions', () => {
  assert.equal(SLIDE_TITLES.length, 7);
  assert.equal(STRUCTURED_QUESTIONS.length, 4);
  assert.deepEqual(QUESTION_OPTIONS, ['0 days', '1–3 days', '4–6 days', 'Every day']);
  assert.ok(STRUCTURED_QUESTIONS.every(({ current, previous }) => QUESTION_OPTIONS.includes(current) && QUESTION_OPTIONS.includes(previous)));
  assert.equal(CONTEXT_QUESTIONS.length, 3);
  assert.ok(CONTEXT_QUESTIONS.every(({ answer }) => answer.length > 100));
});

test('preserves Alex’s original open answers rather than changing them to fit the advice', () => {
  assert.deepEqual(CONTEXT_QUESTIONS.map(({ answer }) => answer), [
    'I avoided lunch because the cafeteria was crowded and I felt people would watch me eat. When I got home, I was really hungry and overwhelmed. Eating felt out of control, and afterwards I felt guilty and exercised to make up for it.',
    'I had several deadlines and my housemate was away. Evenings were harder on my own. Last week we sometimes ate together, and that felt easier.',
    'Trying to wait before eating made me feel like I should keep ignoring my hunger. Texting my sister helps me feel less alone. I could ask my housemate to eat with me, but a big challenge would feel like another thing to fail.',
  ]);
});

test('both complete sample messages remain separate and the evaluation covers seven qualities', () => {
  assert.equal(ORIGINAL_FEEDBACK.length, 4);
  assert.equal(PERSONALIZED_FEEDBACK.length, 4);
  assert.match(ORIGINAL_FEEDBACK[2], /about 10 minutes/);
  assert.equal(QUALITY_CRITERIA.length, 7);
});
