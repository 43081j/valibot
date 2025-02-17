import { describe, expectTypeOf, test } from 'vitest';
import type { ReadonlyAction, TransformAction } from '../../actions/index.ts';
import type { SchemaWithPipe } from '../../methods/index.ts';
import type { InferInput, InferIssue, InferOutput } from '../../types/index.ts';
import type { NullishSchema } from '../nullish/index.ts';
import type { NumberIssue, NumberSchema } from '../number/index.ts';
import type { OptionalSchema } from '../optional/index.ts';
import {
  string,
  type StringIssue,
  type StringSchema,
} from '../string/index.ts';
import type { UndefinedableSchema } from '../undefinedable/index.ts';
import { objectAsync, type ObjectSchemaAsync } from './objectAsync.ts';
import type { ObjectIssue } from './types.ts';

describe('objectAsync', () => {
  describe('should return schema objectAsync', () => {
    const entries = { key: string() };
    type Entries = typeof entries;

    test('with undefined message', () => {
      type Schema = ObjectSchemaAsync<Entries, undefined>;
      expectTypeOf(objectAsync(entries)).toEqualTypeOf<Schema>();
      expectTypeOf(objectAsync(entries, undefined)).toEqualTypeOf<Schema>();
    });

    test('with string message', () => {
      expectTypeOf(objectAsync(entries, 'message')).toEqualTypeOf<
        ObjectSchemaAsync<Entries, 'message'>
      >();
    });

    test('with function message', () => {
      expectTypeOf(objectAsync(entries, () => 'message')).toEqualTypeOf<
        ObjectSchemaAsync<Entries, () => string>
      >();
    });
  });

  describe('should infer correct types', () => {
    type Schema = ObjectSchemaAsync<
      {
        key1: StringSchema<undefined>;
        key2: OptionalSchema<StringSchema<undefined>, 'foo'>;
        key3: NullishSchema<StringSchema<undefined>, undefined>;
        key4: ObjectSchemaAsync<{ key: NumberSchema<undefined> }, undefined>;
        key5: SchemaWithPipe<[StringSchema<undefined>, ReadonlyAction<string>]>;
        key6: UndefinedableSchema<StringSchema<undefined>, 'bar'>;
        key7: SchemaWithPipe<
          [
            OptionalSchema<StringSchema<undefined>, undefined>,
            TransformAction<undefined | string, string>,
          ]
        >;
      },
      undefined
    >;

    test('of input', () => {
      expectTypeOf<InferInput<Schema>>().toEqualTypeOf<{
        key1: string;
        key2?: string;
        key3?: string | null | undefined;
        key4: { key: number };
        key5: string;
        key6: string | undefined;
        key7?: string;
      }>();
    });

    test('of output', () => {
      expectTypeOf<InferOutput<Schema>>().toEqualTypeOf<{
        key1: string;
        key2: string;
        key3?: string | null | undefined;
        key4: { key: number };
        readonly key5: string;
        key6: string;
        key7: string;
      }>();
    });

    test('of issue', () => {
      expectTypeOf<InferIssue<Schema>>().toEqualTypeOf<
        ObjectIssue | StringIssue | NumberIssue
      >();
    });
  });
});
