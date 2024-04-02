import { describe, expect, test } from 'vitest';
import { expectNoSchemaIssue, expectSchemaIssue } from '../../vitest/index.ts';
import { string, type StringIssue, type StringSchema } from './string.ts';

describe('string', () => {
  describe('should return schema object', () => {
    const baseSchema: Omit<StringSchema<never>, 'message'> = {
      kind: 'schema',
      type: 'string',
      expects: 'string',
      async: false,
      _run: expect.any(Function),
    };

    test('with undefined message', () => {
      const schema: StringSchema<undefined> = {
        ...baseSchema,
        message: undefined,
      };
      expect(string()).toStrictEqual(schema);
      expect(string(undefined)).toStrictEqual(schema);
    });

    test('with string message', () => {
      expect(string('message')).toStrictEqual({
        ...baseSchema,
        message: 'message',
      } satisfies StringSchema<string>);
    });

    test('with function message', () => {
      const message = () => 'message';
      expect(string(message)).toStrictEqual({
        ...baseSchema,
        message,
      } satisfies StringSchema<typeof message>);
    });
  });

  describe('should return no issue', () => {
    const schema = string();

    test('for empty strings', () => {
      expectNoSchemaIssue(schema, ['', ' ']);
    });

    test('for single char', () => {
      expectNoSchemaIssue(schema, ['a', 'A', '0']);
    });

    test('for multiple chars', () => {
      expectNoSchemaIssue(schema, ['abc', 'ABC', '123']);
    });

    test('for special chars', () => {
      expectNoSchemaIssue(schema, ['-', '+', '#', '$', '%']);
    });
  });

  describe('should return an issue', () => {
    const schema = string('message');
    const baseIssue: Omit<StringIssue, 'input' | 'received'> = {
      kind: 'schema',
      type: 'string',
      expected: 'string',
      message: 'message',
    };

    // Primitive types

    test('for bigints', () => {
      expectSchemaIssue(schema, baseIssue, [-1n, 0n, 123n]);
    });

    test('for booleans', () => {
      expectSchemaIssue(schema, baseIssue, [true, false]);
    });

    test('for null', () => {
      expectSchemaIssue(schema, baseIssue, [null]);
    });

    test('for numbers', () => {
      expectSchemaIssue(schema, baseIssue, [-1, 0, 123, 45.67]);
    });

    test('for undefined', () => {
      expectSchemaIssue(schema, baseIssue, [undefined]);
    });

    test('for symbols', () => {
      expectSchemaIssue(schema, baseIssue, [Symbol(), Symbol('foo')]);
    });

    // Complex types

    test('for arrays', () => {
      expectSchemaIssue(schema, baseIssue, [[], ['value']]);
    });

    test('for functions', () => {
      expectSchemaIssue(schema, baseIssue, [() => {}, function () {}]);
    });

    test('for objects', () => {
      expectSchemaIssue(schema, baseIssue, [{}, { key: 'value' }]);
    });
  });
});
