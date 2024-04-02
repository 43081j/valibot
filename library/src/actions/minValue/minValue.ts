import type {
  BaseIssue,
  BaseValidation,
  ErrorMessage,
} from '../../types/index.ts';
import { _addIssue, _stringify } from '../../utils/index.ts';
import type { ValueInput } from '../types.ts';

/**
 * Min value issue type.
 */
export interface MinValueIssue<
  TInput extends ValueInput,
  TRequirement extends ValueInput,
> extends BaseIssue<TInput> {
  /**
   * The issue kind.
   */
  readonly kind: 'validation';
  /**
   * The issue type.
   */
  readonly type: 'min_value';
  /**
   * The expected input.
   */
  readonly expected: `>=${string}`;
  /**
   * The minimum value.
   */
  readonly requirement: TRequirement;
}

/**
 * Min value validation type.
 */
export interface MinValueValidation<
  TInput extends ValueInput,
  TRequirement extends TInput,
  TMessage extends
    | ErrorMessage<MinValueIssue<TInput, TRequirement>>
    | undefined,
> extends BaseValidation<TInput, TInput, MinValueIssue<TInput, TRequirement>> {
  /**
   * The validation type.
   */
  readonly type: 'min_value';
  /**
   * The expected property.
   */
  readonly expects: `>=${string}`;
  /**
   * The minimum value.
   */
  readonly requirement: TRequirement;
  /**
   * The error message.
   */
  readonly message: TMessage;
}

/**
 * Creates a pipeline validation action that validates the value of a string,
 * number, boolean or date.
 *
 * @param requirement The minimum value.
 *
 * @returns A validation action.
 */
export function minValue<
  TInput extends ValueInput,
  const TRequirement extends TInput,
>(
  requirement: TRequirement
): MinValueValidation<TInput, TRequirement, undefined>;

/**
 * Creates a pipeline validation action that validates the value of a string,
 * number, boolean or date.
 *
 * @param requirement The minimum value.
 * @param message The error message.
 *
 * @returns A validation action.
 */
export function minValue<
  TInput extends ValueInput,
  const TRequirement extends TInput,
  const TMessage extends
    | ErrorMessage<MinValueIssue<TInput, TRequirement>>
    | undefined,
>(
  requirement: TRequirement,
  message: TMessage
): MinValueValidation<TInput, TRequirement, TMessage>;

export function minValue(
  requirement: ValueInput,
  message?: ErrorMessage<MinValueIssue<ValueInput, ValueInput>>
): MinValueValidation<
  ValueInput,
  ValueInput,
  ErrorMessage<MinValueIssue<ValueInput, ValueInput>> | undefined
> {
  return {
    kind: 'validation',
    type: 'min_value',
    expects: `>=${
      requirement instanceof Date
        ? requirement.toJSON()
        : _stringify(requirement)
    }`,
    async: false,
    message,
    requirement,
    _run(dataset, config) {
      if (dataset.typed && dataset.value < this.requirement) {
        _addIssue(this, minValue, 'value', dataset, config, {
          received:
            dataset.value instanceof Date
              ? dataset.value.toJSON()
              : _stringify(dataset.value),
        });
      }
      return dataset;
    },
  };
}
