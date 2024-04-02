import type {
  BaseIssue,
  BaseSchema,
  Dataset,
  ErrorMessage,
  InferInput,
  InferIssue,
  InferOutput,
} from '../../types/index.ts';
import { _addIssue } from '../../utils/index.ts';
import type { ArrayPathItem } from './types.ts';

/**
 * Array issue type.
 */
export interface ArrayIssue extends BaseIssue<unknown> {
  /**
   * The issue kind.
   */
  readonly kind: 'schema';
  /**
   * The issue type.
   */
  readonly type: 'array';
  /**
   * The expected input.
   */
  readonly expected: 'Array';
}

/**
 * Array schema type.
 */
export interface ArraySchema<
  TItem extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  TMessage extends ErrorMessage<ArrayIssue> | undefined,
> extends BaseSchema<
    InferInput<TItem>[],
    InferOutput<TItem>[],
    ArrayIssue | InferIssue<TItem>
  > {
  /**
   * The schema type.
   */
  readonly type: 'array';
  /**
   * The array item schema.
   */
  readonly item: TItem;
  /**
   * The error message.
   */
  readonly message: TMessage;
}

/**
 * Creates a array schema.
 *
 * @param item The item schema.
 *
 * @returns A array schema.
 */
export function array<
  const TItem extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
>(item: TItem): ArraySchema<TItem, undefined>;

/**
 * Creates a array schema.
 *
 * @param item The item schema.
 * @param message The error message.
 *
 * @returns A array schema.
 */
export function array<
  const TItem extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TMessage extends ErrorMessage<ArrayIssue> | undefined,
>(item: TItem, message: TMessage): ArraySchema<TItem, TMessage>;

export function array(
  item: BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  message?: ErrorMessage<ArrayIssue>
): ArraySchema<
  BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  ErrorMessage<ArrayIssue> | undefined
> {
  return {
    kind: 'schema',
    type: 'array',
    expects: 'Array',
    async: false,
    item,
    message,
    _run(dataset, config) {
      // Get input value from dataset
      const input = dataset.value;

      // If root type is valid, check nested types
      if (Array.isArray(input)) {
        // Set typed to true and value to empty array
        dataset.typed = true;
        dataset.value = [];

        // Parse schema of each array item
        for (let key = 0; key < input.length; key++) {
          const value = input[key];
          const itemDataset = this.item._run({ typed: false, value }, config);

          // If there are issues, capture them
          if (itemDataset.issues) {
            // Create array path item
            const pathItem: ArrayPathItem = {
              type: 'array',
              origin: 'value',
              input,
              key,
              value,
            };

            // Add modified item dataset issues to issues
            for (const issue of itemDataset.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                // @ts-expect-error
                issue.path = [pathItem];
              }
              // @ts-expect-error
              dataset.issues?.push(issue);
            }
            if (!dataset.issues) {
              // @ts-expect-error
              dataset.issues = itemDataset.issues;
            }

            // If necessary, abort early
            if (config.abortEarly) {
              dataset.typed = false;
              break;
            }
          }

          // If not typed, set typed to false
          if (!itemDataset.typed) {
            dataset.typed = false;
          }

          // Add item to dataset
          // @ts-expect-error
          dataset.value.push(itemDataset.value);
        }

        // Otherwise, add array issue
      } else {
        _addIssue(this, array, 'type', dataset, config);
      }

      // Return output dataset
      return dataset as Dataset<
        InferOutput<BaseSchema<unknown, unknown, BaseIssue<unknown>>>[],
        | ArrayIssue
        | InferIssue<BaseSchema<unknown, unknown, BaseIssue<unknown>>>
      >;
    },
  };
}
