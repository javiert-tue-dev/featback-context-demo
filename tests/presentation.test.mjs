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

test('both complete sample messages remain separate and the evaluation covers seven qualities', () => {
  assert.equal(ORIGINAL_FEEDBACK.length, 4);
  assert.equal(PERSONALIZED_FEEDBACK.length, 4);
  assert.match(ORIGINAL_FEEDBACK[2], /about 10 minutes/);
  assert.match(PERSONALIZED_FEEDBACK[2], /about 10 minutes/);
  assert.match(PERSONALIZED_FEEDBACK[2], /does not mean delaying a meal or ignoring hunger/);
  assert.equal(QUALITY_CRITERIA.length, 7);
});
