import { expect } from 'vitest';
import type { BaseIssue, BaseValidation, InferInput } from '../types';

/**
 * Expect no action issue to be returned.
 *
 * @param action The action to test.
 * @param values The values to test.
 */
export function expectNoActionIssue<
  TAction extends BaseValidation<unknown, unknown, BaseIssue<unknown>>,
>(action: TAction, values: InferInput<TAction>[]): void {
  for (const value of values) {
    expect(action._run({ typed: true, value }, {})).toStrictEqual({
      typed: true,
      value,
    });
  }
}
