import { DECIMAL_REGEX } from '../../regex.ts';
import type {
  BaseIssue,
  BaseValidation,
  ErrorMessage,
} from '../../types/index.ts';
import { _validationDataset } from '../../utils/index.ts';

/**
 * Decimal issue type.
 */
export interface DecimalIssue<TInput extends string> extends BaseIssue<TInput> {
  /**
   * The issue kind.
   */
  readonly kind: 'validation';
  /**
   * The issue type.
   */
  readonly type: 'decimal';
  /**
   * The expected input.
   */
  readonly expected: null;
  /**
   * The received input.
   */
  readonly received: `"${string}"`;
  /**
   * The decimal regex.
   */
  readonly requirement: RegExp;
}

/**
 * Decimal action type.
 */
export interface DecimalAction<
  TInput extends string,
  TMessage extends ErrorMessage<DecimalIssue<TInput>> | undefined,
> extends BaseValidation<TInput, TInput, DecimalIssue<TInput>> {
  /**
   * The action type.
   */
  readonly type: 'decimal';
  /**
   * The expected property.
   */
  readonly expects: null;
  /**
   * The decimal regex.
   */
  readonly requirement: RegExp;
  /**
   * The error message.
   */
  readonly message: TMessage;
}

/**
 * Creates a [decimal](https://en.wikipedia.org/wiki/Decimal) validation action.
 *
 * @returns An decimal action.
 */
export function decimal<TInput extends string>(): DecimalAction<
  TInput,
  undefined
>;

/**
 * Creates a [decimal](https://en.wikipedia.org/wiki/Decimal) validation action.
 *
 * @param message The error message.
 *
 * @returns An decimal action.
 */
export function decimal<
  TInput extends string,
  const TMessage extends ErrorMessage<DecimalIssue<TInput>> | undefined,
>(message: TMessage): DecimalAction<TInput, TMessage>;

export function decimal(
  message?: ErrorMessage<DecimalIssue<string>>
): DecimalAction<string, ErrorMessage<DecimalIssue<string>> | undefined> {
  return {
    kind: 'validation',
    type: 'decimal',
    expects: null,
    message,
    requirement: DECIMAL_REGEX,
    async: false,
    _run(dataset, config) {
      return _validationDataset(
        this,
        decimal,
        'decimal',
        dataset.typed && !this.requirement.test(dataset.value),
        dataset,
        config
      );
    },
  };
}
