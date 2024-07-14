import type {
  BaseIssue,
  BaseSchema,
  Config,
  Dataset,
  FirstTupleItem,
  InferInput,
  InferIssue,
  InferOutput,
  LastTupleItem,
  PipeAction,
  PipeItem,
} from '../../types/index.ts';

/**
 * Schema with pipe type.
 */
export type SchemaWithPipe<
  TPipe extends [
    BaseSchema<unknown, unknown, BaseIssue<unknown>>,
    ...PipeItem<unknown, unknown, BaseIssue<unknown>>[],
  ],
> = Omit<FirstTupleItem<TPipe>, '_run' | '_types'> & {
  /**
   * The pipe items.
   */
  readonly pipe: TPipe;
  /**
   * Parses unknown input.
   *
   * @param dataset The input dataset.
   * @param config The configuration.
   *
   * @returns The output dataset.
   *
   * @internal
   */
  _run(
    dataset: Dataset<unknown, never>,
    config: Config<InferIssue<FirstTupleItem<TPipe>>>
  ): Dataset<InferOutput<LastTupleItem<TPipe>>, InferIssue<TPipe[number]>>;
  /**
   * Input, output and issue type.
   *
   * @internal
   */
  readonly _types?: {
    readonly input: InferInput<FirstTupleItem<TPipe>>;
    readonly output: InferOutput<LastTupleItem<TPipe>>;
    readonly issue: InferIssue<TPipe[number]>;
  };
};

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>
): SchemaWithPipe<[TSchema, TItem1]>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>
): SchemaWithPipe<[TSchema, TItem1, TItem2]>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>
): SchemaWithPipe<[TSchema, TItem1, TItem2, TItem3]>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>
): SchemaWithPipe<[TSchema, TItem1, TItem2, TItem3, TItem4]>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>
): SchemaWithPipe<[TSchema, TItem1, TItem2, TItem3, TItem4, TItem5]>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>
): SchemaWithPipe<[TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6]>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>
): SchemaWithPipe<
  [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>
): SchemaWithPipe<
  [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 * @param item15 The fifteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem15 extends PipeItem<
    InferOutput<TItem14>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >,
  item15:
    | TItem15
    | PipeAction<
        InferOutput<TItem14>,
        InferOutput<TItem15>,
        InferIssue<TItem15>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
    TItem15,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 * @param item15 The fifteenth pipe item.
 * @param item16 The sixteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem15 extends PipeItem<
    InferOutput<TItem14>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem16 extends PipeItem<
    InferOutput<TItem15>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >,
  item15:
    | TItem15
    | PipeAction<
        InferOutput<TItem14>,
        InferOutput<TItem15>,
        InferIssue<TItem15>
      >,
  item16:
    | TItem16
    | PipeAction<
        InferOutput<TItem15>,
        InferOutput<TItem16>,
        InferIssue<TItem16>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
    TItem15,
    TItem16,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 * @param item15 The fifteenth pipe item.
 * @param item16 The sixteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem15 extends PipeItem<
    InferOutput<TItem14>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem16 extends PipeItem<
    InferOutput<TItem15>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >,
  item15:
    | TItem15
    | PipeAction<
        InferOutput<TItem14>,
        InferOutput<TItem15>,
        InferIssue<TItem15>
      >,
  item16:
    | TItem16
    | PipeAction<
        InferOutput<TItem15>,
        InferOutput<TItem16>,
        InferIssue<TItem16>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
    TItem15,
    TItem16,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 * @param item15 The fifteenth pipe item.
 * @param item16 The sixteenth pipe item.
 * @param item17 The seventeenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem15 extends PipeItem<
    InferOutput<TItem14>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem16 extends PipeItem<
    InferOutput<TItem15>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem17 extends PipeItem<
    InferOutput<TItem16>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >,
  item15:
    | TItem15
    | PipeAction<
        InferOutput<TItem14>,
        InferOutput<TItem15>,
        InferIssue<TItem15>
      >,
  item16:
    | TItem16
    | PipeAction<
        InferOutput<TItem15>,
        InferOutput<TItem16>,
        InferIssue<TItem16>
      >,
  item17:
    | TItem17
    | PipeAction<
        InferOutput<TItem16>,
        InferOutput<TItem17>,
        InferIssue<TItem17>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
    TItem15,
    TItem16,
    TItem17,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 * @param item15 The fifteenth pipe item.
 * @param item16 The sixteenth pipe item.
 * @param item17 The seventeenth pipe item.
 * @param item18 The eighteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem15 extends PipeItem<
    InferOutput<TItem14>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem16 extends PipeItem<
    InferOutput<TItem15>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem17 extends PipeItem<
    InferOutput<TItem16>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem18 extends PipeItem<
    InferOutput<TItem17>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >,
  item15:
    | TItem15
    | PipeAction<
        InferOutput<TItem14>,
        InferOutput<TItem15>,
        InferIssue<TItem15>
      >,
  item16:
    | TItem16
    | PipeAction<
        InferOutput<TItem15>,
        InferOutput<TItem16>,
        InferIssue<TItem16>
      >,
  item17:
    | TItem17
    | PipeAction<
        InferOutput<TItem16>,
        InferOutput<TItem17>,
        InferIssue<TItem17>
      >,
  item18:
    | TItem18
    | PipeAction<
        InferOutput<TItem17>,
        InferOutput<TItem18>,
        InferIssue<TItem18>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
    TItem15,
    TItem16,
    TItem17,
    TItem18,
  ]
>;

/**
 * Adds a pipeline to a schema, that can validate and transform its input.
 *
 * @param schema The root schema.
 * @param item1 The first pipe item.
 * @param item2 The second pipe item.
 * @param item3 The third pipe item.
 * @param item4 The fourth pipe item.
 * @param item5 The fifth pipe item.
 * @param item6 The sixth pipe item.
 * @param item7 The seventh pipe item.
 * @param item8 The eighth pipe item.
 * @param item9 The ninth pipe item.
 * @param item10 The tenth pipe item.
 * @param item11 The eleventh pipe item.
 * @param item12 The twelfth pipe item.
 * @param item13 The thirteenth pipe item.
 * @param item14 The fourteenth pipe item.
 * @param item15 The fifteenth pipe item.
 * @param item16 The sixteenth pipe item.
 * @param item17 The seventeenth pipe item.
 * @param item18 The eighteenth pipe item.
 * @param item19 The nineteenth pipe item.
 *
 * @returns A schema with a pipeline.
 */
export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItem1 extends PipeItem<
    InferOutput<TSchema>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem2 extends PipeItem<
    InferOutput<TItem1>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem3 extends PipeItem<
    InferOutput<TItem2>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem4 extends PipeItem<
    InferOutput<TItem3>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem5 extends PipeItem<
    InferOutput<TItem4>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem6 extends PipeItem<
    InferOutput<TItem5>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem7 extends PipeItem<
    InferOutput<TItem6>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem8 extends PipeItem<
    InferOutput<TItem7>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem9 extends PipeItem<
    InferOutput<TItem8>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem10 extends PipeItem<
    InferOutput<TItem9>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem11 extends PipeItem<
    InferOutput<TItem10>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem12 extends PipeItem<
    InferOutput<TItem11>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem13 extends PipeItem<
    InferOutput<TItem12>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem14 extends PipeItem<
    InferOutput<TItem13>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem15 extends PipeItem<
    InferOutput<TItem14>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem16 extends PipeItem<
    InferOutput<TItem15>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem17 extends PipeItem<
    InferOutput<TItem16>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem18 extends PipeItem<
    InferOutput<TItem17>,
    unknown,
    BaseIssue<unknown>
  >,
  const TItem19 extends PipeItem<
    InferOutput<TItem18>,
    unknown,
    BaseIssue<unknown>
  >,
>(
  schema: TSchema,
  item1:
    | TItem1
    | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>,
  item2:
    | TItem2
    | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>,
  item3:
    | TItem3
    | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>,
  item4:
    | TItem4
    | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>,
  item5:
    | TItem5
    | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>,
  item6:
    | TItem6
    | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>,
  item7:
    | TItem7
    | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>,
  item8:
    | TItem8
    | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>,
  item9:
    | TItem9
    | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>,
  item10:
    | TItem10
    | PipeAction<
        InferOutput<TItem9>,
        InferOutput<TItem10>,
        InferIssue<TItem10>
      >,
  item11:
    | TItem11
    | PipeAction<
        InferOutput<TItem10>,
        InferOutput<TItem11>,
        InferIssue<TItem11>
      >,
  item12:
    | TItem12
    | PipeAction<
        InferOutput<TItem11>,
        InferOutput<TItem12>,
        InferIssue<TItem12>
      >,
  item13:
    | TItem13
    | PipeAction<
        InferOutput<TItem12>,
        InferOutput<TItem13>,
        InferIssue<TItem13>
      >,
  item14:
    | TItem14
    | PipeAction<
        InferOutput<TItem13>,
        InferOutput<TItem14>,
        InferIssue<TItem14>
      >,
  item15:
    | TItem15
    | PipeAction<
        InferOutput<TItem14>,
        InferOutput<TItem15>,
        InferIssue<TItem15>
      >,
  item16:
    | TItem16
    | PipeAction<
        InferOutput<TItem15>,
        InferOutput<TItem16>,
        InferIssue<TItem16>
      >,
  item17:
    | TItem17
    | PipeAction<
        InferOutput<TItem16>,
        InferOutput<TItem17>,
        InferIssue<TItem17>
      >,
  item18:
    | TItem18
    | PipeAction<
        InferOutput<TItem17>,
        InferOutput<TItem18>,
        InferIssue<TItem18>
      >,
  item19:
    | TItem19
    | PipeAction<
        InferOutput<TItem18>,
        InferOutput<TItem19>,
        InferIssue<TItem19>
      >
): SchemaWithPipe<
  [
    TSchema,
    TItem1,
    TItem2,
    TItem3,
    TItem4,
    TItem5,
    TItem6,
    TItem7,
    TItem8,
    TItem9,
    TItem10,
    TItem11,
    TItem12,
    TItem13,
    TItem14,
    TItem15,
    TItem16,
    TItem17,
    TItem18,
    TItem19,
  ]
>;

export function pipe<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
  const TItems extends PipeItem<unknown, unknown, BaseIssue<unknown>>[],
>(...pipe: [TSchema, ...TItems]): SchemaWithPipe<[TSchema, ...TItems]> {
  return {
    ...pipe[0],
    pipe,
    _run(dataset, config) {
      // Run actions of pipeline
      for (let index = 0; index < pipe.length; index++) {
        // Mark dataset as untyped and break pipe if there are issues and pipe
        // item is schema or transformation
        if (
          dataset.issues &&
          (pipe[index].kind === 'schema' ||
            pipe[index].kind === 'transformation')
        ) {
          // TODO: This behavior must be documented!
          dataset.typed = false;
          break;
        }

        // Continue pipe execution if there is no reason to abort early
        if (!dataset.issues || (!config.abortEarly && !config.abortPipeEarly)) {
          // @ts-expect-error
          dataset = pipe[index]._run(dataset, config);
        }
      }

      // Return output dataset
      return dataset;
    },
  };
}
