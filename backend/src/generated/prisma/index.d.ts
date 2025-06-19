
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuthUser
 * 
 */
export type AuthUser = $Result.DefaultSelection<Prisma.$AuthUserPayload>
/**
 * Model MentalState
 * 
 */
export type MentalState = $Result.DefaultSelection<Prisma.$MentalStatePayload>
/**
 * Model PhysicalHabit
 * 
 */
export type PhysicalHabit = $Result.DefaultSelection<Prisma.$PhysicalHabitPayload>
/**
 * Model ExerciseRecord
 * 
 */
export type ExerciseRecord = $Result.DefaultSelection<Prisma.$ExerciseRecordPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Mood: {
  HAPPY: 'HAPPY',
  EXCITED: 'EXCITED',
  ENERGETIC: 'ENERGETIC',
  PROUD: 'PROUD',
  MOTIVATED: 'MOTIVATED',
  LOVED: 'LOVED',
  GRATEFUL: 'GRATEFUL',
  CALM: 'CALM',
  HOPEFUL: 'HOPEFUL',
  CONFIDENT: 'CONFIDENT',
  NEUTRAL: 'NEUTRAL',
  TIRED: 'TIRED',
  BORED: 'BORED',
  DISTRACTED: 'DISTRACTED',
  INDIFFERENT: 'INDIFFERENT',
  REFLECTIVE: 'REFLECTIVE',
  SAD: 'SAD',
  ANGRY: 'ANGRY',
  ANXIOUS: 'ANXIOUS',
  WORRIED: 'WORRIED',
  FRUSTRATED: 'FRUSTRATED',
  OVERWHELMED: 'OVERWHELMED',
  LONELY: 'LONELY',
  EMBARRASSED: 'EMBARRASSED',
  STRESSED: 'STRESSED',
  GUILTY: 'GUILTY',
  HOPELESS: 'HOPELESS'
};

export type Mood = (typeof Mood)[keyof typeof Mood]


export const EnergyLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type EnergyLevel = (typeof EnergyLevel)[keyof typeof EnergyLevel]


export const ExerciseType: {
  RUN: 'RUN',
  BIKE: 'BIKE',
  GYM: 'GYM',
  SWIM: 'SWIM',
  YOGA: 'YOGA',
  WALK: 'WALK'
};

export type ExerciseType = (typeof ExerciseType)[keyof typeof ExerciseType]


export const IntensityLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type IntensityLevel = (typeof IntensityLevel)[keyof typeof IntensityLevel]

}

export type Mood = $Enums.Mood

export const Mood: typeof $Enums.Mood

export type EnergyLevel = $Enums.EnergyLevel

export const EnergyLevel: typeof $Enums.EnergyLevel

export type ExerciseType = $Enums.ExerciseType

export const ExerciseType: typeof $Enums.ExerciseType

export type IntensityLevel = $Enums.IntensityLevel

export const IntensityLevel: typeof $Enums.IntensityLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuthUsers
 * const authUsers = await prisma.authUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AuthUsers
   * const authUsers = await prisma.authUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authUser`: Exposes CRUD operations for the **AuthUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthUsers
    * const authUsers = await prisma.authUser.findMany()
    * ```
    */
  get authUser(): Prisma.AuthUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentalState`: Exposes CRUD operations for the **MentalState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentalStates
    * const mentalStates = await prisma.mentalState.findMany()
    * ```
    */
  get mentalState(): Prisma.MentalStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.physicalHabit`: Exposes CRUD operations for the **PhysicalHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalHabits
    * const physicalHabits = await prisma.physicalHabit.findMany()
    * ```
    */
  get physicalHabit(): Prisma.PhysicalHabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseRecord`: Exposes CRUD operations for the **ExerciseRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseRecords
    * const exerciseRecords = await prisma.exerciseRecord.findMany()
    * ```
    */
  get exerciseRecord(): Prisma.ExerciseRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AuthUser: 'AuthUser',
    MentalState: 'MentalState',
    PhysicalHabit: 'PhysicalHabit',
    ExerciseRecord: 'ExerciseRecord',
    Exercise: 'Exercise'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authUser" | "mentalState" | "physicalHabit" | "exerciseRecord" | "exercise"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuthUser: {
        payload: Prisma.$AuthUserPayload<ExtArgs>
        fields: Prisma.AuthUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          findFirst: {
            args: Prisma.AuthUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          findMany: {
            args: Prisma.AuthUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          create: {
            args: Prisma.AuthUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          createMany: {
            args: Prisma.AuthUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          delete: {
            args: Prisma.AuthUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          update: {
            args: Prisma.AuthUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          deleteMany: {
            args: Prisma.AuthUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          upsert: {
            args: Prisma.AuthUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          aggregate: {
            args: Prisma.AuthUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthUser>
          }
          groupBy: {
            args: Prisma.AuthUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthUserCountArgs<ExtArgs>
            result: $Utils.Optional<AuthUserCountAggregateOutputType> | number
          }
        }
      }
      MentalState: {
        payload: Prisma.$MentalStatePayload<ExtArgs>
        fields: Prisma.MentalStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentalStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentalStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>
          }
          findFirst: {
            args: Prisma.MentalStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentalStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>
          }
          findMany: {
            args: Prisma.MentalStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>[]
          }
          create: {
            args: Prisma.MentalStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>
          }
          createMany: {
            args: Prisma.MentalStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentalStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>[]
          }
          delete: {
            args: Prisma.MentalStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>
          }
          update: {
            args: Prisma.MentalStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>
          }
          deleteMany: {
            args: Prisma.MentalStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentalStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentalStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>[]
          }
          upsert: {
            args: Prisma.MentalStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalStatePayload>
          }
          aggregate: {
            args: Prisma.MentalStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentalState>
          }
          groupBy: {
            args: Prisma.MentalStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentalStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentalStateCountArgs<ExtArgs>
            result: $Utils.Optional<MentalStateCountAggregateOutputType> | number
          }
        }
      }
      PhysicalHabit: {
        payload: Prisma.$PhysicalHabitPayload<ExtArgs>
        fields: Prisma.PhysicalHabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalHabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalHabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>
          }
          findFirst: {
            args: Prisma.PhysicalHabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalHabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>
          }
          findMany: {
            args: Prisma.PhysicalHabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>[]
          }
          create: {
            args: Prisma.PhysicalHabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>
          }
          createMany: {
            args: Prisma.PhysicalHabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhysicalHabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>[]
          }
          delete: {
            args: Prisma.PhysicalHabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>
          }
          update: {
            args: Prisma.PhysicalHabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalHabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalHabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhysicalHabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>[]
          }
          upsert: {
            args: Prisma.PhysicalHabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalHabitPayload>
          }
          aggregate: {
            args: Prisma.PhysicalHabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhysicalHabit>
          }
          groupBy: {
            args: Prisma.PhysicalHabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhysicalHabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalHabitCountArgs<ExtArgs>
            result: $Utils.Optional<PhysicalHabitCountAggregateOutputType> | number
          }
        }
      }
      ExerciseRecord: {
        payload: Prisma.$ExerciseRecordPayload<ExtArgs>
        fields: Prisma.ExerciseRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          findFirst: {
            args: Prisma.ExerciseRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          findMany: {
            args: Prisma.ExerciseRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          create: {
            args: Prisma.ExerciseRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          createMany: {
            args: Prisma.ExerciseRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          delete: {
            args: Prisma.ExerciseRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          update: {
            args: Prisma.ExerciseRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseRecordPayload>
          }
          aggregate: {
            args: Prisma.ExerciseRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseRecord>
          }
          groupBy: {
            args: Prisma.ExerciseRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRecordCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    authUser?: AuthUserOmit
    mentalState?: MentalStateOmit
    physicalHabit?: PhysicalHabitOmit
    exerciseRecord?: ExerciseRecordOmit
    exercise?: ExerciseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExerciseRecordCountOutputType
   */

  export type ExerciseRecordCountOutputType = {
    exercises: number
  }

  export type ExerciseRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | ExerciseRecordCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseRecordCountOutputType without action
   */
  export type ExerciseRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecordCountOutputType
     */
    select?: ExerciseRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseRecordCountOutputType without action
   */
  export type ExerciseRecordCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuthUser
   */

  export type AggregateAuthUser = {
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  export type AuthUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    passwordHash: string | null
  }

  export type AuthUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    passwordHash: string | null
  }

  export type AuthUserCountAggregateOutputType = {
    id: number
    email: number
    firstname: number
    lastname: number
    passwordHash: number
    _all: number
  }


  export type AuthUserMinAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    passwordHash?: true
  }

  export type AuthUserMaxAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    passwordHash?: true
  }

  export type AuthUserCountAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    passwordHash?: true
    _all?: true
  }

  export type AuthUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUser to aggregate.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthUsers
    **/
    _count?: true | AuthUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthUserMaxAggregateInputType
  }

  export type GetAuthUserAggregateType<T extends AuthUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthUser[P]>
      : GetScalarType<T[P], AggregateAuthUser[P]>
  }




  export type AuthUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthUserWhereInput
    orderBy?: AuthUserOrderByWithAggregationInput | AuthUserOrderByWithAggregationInput[]
    by: AuthUserScalarFieldEnum[] | AuthUserScalarFieldEnum
    having?: AuthUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthUserCountAggregateInputType | true
    _min?: AuthUserMinAggregateInputType
    _max?: AuthUserMaxAggregateInputType
  }

  export type AuthUserGroupByOutputType = {
    id: string
    email: string
    firstname: string
    lastname: string
    passwordHash: string
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  type GetAuthUserGroupByPayload<T extends AuthUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
            : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
        }
      >
    >


  export type AuthUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectScalar = {
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    passwordHash?: boolean
  }

  export type AuthUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstname" | "lastname" | "passwordHash", ExtArgs["result"]["authUser"]>

  export type $AuthUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstname: string
      lastname: string
      passwordHash: string
    }, ExtArgs["result"]["authUser"]>
    composites: {}
  }

  type AuthUserGetPayload<S extends boolean | null | undefined | AuthUserDefaultArgs> = $Result.GetResult<Prisma.$AuthUserPayload, S>

  type AuthUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthUserCountAggregateInputType | true
    }

  export interface AuthUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthUser'], meta: { name: 'AuthUser' } }
    /**
     * Find zero or one AuthUser that matches the filter.
     * @param {AuthUserFindUniqueArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthUserFindUniqueArgs>(args: SelectSubset<T, AuthUserFindUniqueArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthUserFindUniqueOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthUserFindFirstArgs>(args?: SelectSubset<T, AuthUserFindFirstArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthUsers
     * const authUsers = await prisma.authUser.findMany()
     * 
     * // Get first 10 AuthUsers
     * const authUsers = await prisma.authUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authUserWithIdOnly = await prisma.authUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthUserFindManyArgs>(args?: SelectSubset<T, AuthUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthUser.
     * @param {AuthUserCreateArgs} args - Arguments to create a AuthUser.
     * @example
     * // Create one AuthUser
     * const AuthUser = await prisma.authUser.create({
     *   data: {
     *     // ... data to create a AuthUser
     *   }
     * })
     * 
     */
    create<T extends AuthUserCreateArgs>(args: SelectSubset<T, AuthUserCreateArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthUsers.
     * @param {AuthUserCreateManyArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthUserCreateManyArgs>(args?: SelectSubset<T, AuthUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthUsers and returns the data saved in the database.
     * @param {AuthUserCreateManyAndReturnArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthUser.
     * @param {AuthUserDeleteArgs} args - Arguments to delete one AuthUser.
     * @example
     * // Delete one AuthUser
     * const AuthUser = await prisma.authUser.delete({
     *   where: {
     *     // ... filter to delete one AuthUser
     *   }
     * })
     * 
     */
    delete<T extends AuthUserDeleteArgs>(args: SelectSubset<T, AuthUserDeleteArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthUser.
     * @param {AuthUserUpdateArgs} args - Arguments to update one AuthUser.
     * @example
     * // Update one AuthUser
     * const authUser = await prisma.authUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUserUpdateArgs>(args: SelectSubset<T, AuthUserUpdateArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthUsers.
     * @param {AuthUserDeleteManyArgs} args - Arguments to filter AuthUsers to delete.
     * @example
     * // Delete a few AuthUsers
     * const { count } = await prisma.authUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthUserDeleteManyArgs>(args?: SelectSubset<T, AuthUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUserUpdateManyArgs>(args: SelectSubset<T, AuthUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers and returns the data updated in the database.
     * @param {AuthUserUpdateManyAndReturnArgs} args - Arguments to update many AuthUsers.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthUser.
     * @param {AuthUserUpsertArgs} args - Arguments to update or create a AuthUser.
     * @example
     * // Update or create a AuthUser
     * const authUser = await prisma.authUser.upsert({
     *   create: {
     *     // ... data to create a AuthUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthUser we want to update
     *   }
     * })
     */
    upsert<T extends AuthUserUpsertArgs>(args: SelectSubset<T, AuthUserUpsertArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserCountArgs} args - Arguments to filter AuthUsers to count.
     * @example
     * // Count the number of AuthUsers
     * const count = await prisma.authUser.count({
     *   where: {
     *     // ... the filter for the AuthUsers we want to count
     *   }
     * })
    **/
    count<T extends AuthUserCountArgs>(
      args?: Subset<T, AuthUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthUserAggregateArgs>(args: Subset<T, AuthUserAggregateArgs>): Prisma.PrismaPromise<GetAuthUserAggregateType<T>>

    /**
     * Group by AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthUserGroupByArgs['orderBy'] }
        : { orderBy?: AuthUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthUser model
   */
  readonly fields: AuthUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthUser model
   */
  interface AuthUserFieldRefs {
    readonly id: FieldRef<"AuthUser", 'String'>
    readonly email: FieldRef<"AuthUser", 'String'>
    readonly firstname: FieldRef<"AuthUser", 'String'>
    readonly lastname: FieldRef<"AuthUser", 'String'>
    readonly passwordHash: FieldRef<"AuthUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthUser findUnique
   */
  export type AuthUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser findUniqueOrThrow
   */
  export type AuthUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser findFirst
   */
  export type AuthUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser findFirstOrThrow
   */
  export type AuthUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser findMany
   */
  export type AuthUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthUsers to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser create
   */
  export type AuthUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthUser.
     */
    data: XOR<AuthUserCreateInput, AuthUserUncheckedCreateInput>
  }

  /**
   * AuthUser createMany
   */
  export type AuthUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthUsers.
     */
    data: AuthUserCreateManyInput | AuthUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthUser createManyAndReturn
   */
  export type AuthUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data used to create many AuthUsers.
     */
    data: AuthUserCreateManyInput | AuthUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthUser update
   */
  export type AuthUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthUser.
     */
    data: XOR<AuthUserUpdateInput, AuthUserUncheckedUpdateInput>
    /**
     * Choose, which AuthUser to update.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser updateMany
   */
  export type AuthUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthUsers.
     */
    data: XOR<AuthUserUpdateManyMutationInput, AuthUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthUsers to update
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number
  }

  /**
   * AuthUser updateManyAndReturn
   */
  export type AuthUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data used to update AuthUsers.
     */
    data: XOR<AuthUserUpdateManyMutationInput, AuthUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthUsers to update
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number
  }

  /**
   * AuthUser upsert
   */
  export type AuthUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthUser to update in case it exists.
     */
    where: AuthUserWhereUniqueInput
    /**
     * In case the AuthUser found by the `where` argument doesn't exist, create a new AuthUser with this data.
     */
    create: XOR<AuthUserCreateInput, AuthUserUncheckedCreateInput>
    /**
     * In case the AuthUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUserUpdateInput, AuthUserUncheckedUpdateInput>
  }

  /**
   * AuthUser delete
   */
  export type AuthUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Filter which AuthUser to delete.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser deleteMany
   */
  export type AuthUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUsers to delete
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to delete.
     */
    limit?: number
  }

  /**
   * AuthUser without action
   */
  export type AuthUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
  }


  /**
   * Model MentalState
   */

  export type AggregateMentalState = {
    _count: MentalStateCountAggregateOutputType | null
    _min: MentalStateMinAggregateOutputType | null
    _max: MentalStateMaxAggregateOutputType | null
  }

  export type MentalStateMinAggregateOutputType = {
    id: string | null
    mood: $Enums.Mood | null
    note: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type MentalStateMaxAggregateOutputType = {
    id: string | null
    mood: $Enums.Mood | null
    note: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type MentalStateCountAggregateOutputType = {
    id: number
    mood: number
    note: number
    createdAt: number
    userId: number
    _all: number
  }


  export type MentalStateMinAggregateInputType = {
    id?: true
    mood?: true
    note?: true
    createdAt?: true
    userId?: true
  }

  export type MentalStateMaxAggregateInputType = {
    id?: true
    mood?: true
    note?: true
    createdAt?: true
    userId?: true
  }

  export type MentalStateCountAggregateInputType = {
    id?: true
    mood?: true
    note?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type MentalStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentalState to aggregate.
     */
    where?: MentalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalStates to fetch.
     */
    orderBy?: MentalStateOrderByWithRelationInput | MentalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentalStates
    **/
    _count?: true | MentalStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentalStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentalStateMaxAggregateInputType
  }

  export type GetMentalStateAggregateType<T extends MentalStateAggregateArgs> = {
        [P in keyof T & keyof AggregateMentalState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentalState[P]>
      : GetScalarType<T[P], AggregateMentalState[P]>
  }




  export type MentalStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentalStateWhereInput
    orderBy?: MentalStateOrderByWithAggregationInput | MentalStateOrderByWithAggregationInput[]
    by: MentalStateScalarFieldEnum[] | MentalStateScalarFieldEnum
    having?: MentalStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentalStateCountAggregateInputType | true
    _min?: MentalStateMinAggregateInputType
    _max?: MentalStateMaxAggregateInputType
  }

  export type MentalStateGroupByOutputType = {
    id: string
    mood: $Enums.Mood
    note: string | null
    createdAt: Date
    userId: string
    _count: MentalStateCountAggregateOutputType | null
    _min: MentalStateMinAggregateOutputType | null
    _max: MentalStateMaxAggregateOutputType | null
  }

  type GetMentalStateGroupByPayload<T extends MentalStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentalStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentalStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentalStateGroupByOutputType[P]>
            : GetScalarType<T[P], MentalStateGroupByOutputType[P]>
        }
      >
    >


  export type MentalStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["mentalState"]>

  export type MentalStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["mentalState"]>

  export type MentalStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["mentalState"]>

  export type MentalStateSelectScalar = {
    id?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type MentalStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mood" | "note" | "createdAt" | "userId", ExtArgs["result"]["mentalState"]>

  export type $MentalStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentalState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mood: $Enums.Mood
      note: string | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["mentalState"]>
    composites: {}
  }

  type MentalStateGetPayload<S extends boolean | null | undefined | MentalStateDefaultArgs> = $Result.GetResult<Prisma.$MentalStatePayload, S>

  type MentalStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentalStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentalStateCountAggregateInputType | true
    }

  export interface MentalStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentalState'], meta: { name: 'MentalState' } }
    /**
     * Find zero or one MentalState that matches the filter.
     * @param {MentalStateFindUniqueArgs} args - Arguments to find a MentalState
     * @example
     * // Get one MentalState
     * const mentalState = await prisma.mentalState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentalStateFindUniqueArgs>(args: SelectSubset<T, MentalStateFindUniqueArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentalState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentalStateFindUniqueOrThrowArgs} args - Arguments to find a MentalState
     * @example
     * // Get one MentalState
     * const mentalState = await prisma.mentalState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentalStateFindUniqueOrThrowArgs>(args: SelectSubset<T, MentalStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentalState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateFindFirstArgs} args - Arguments to find a MentalState
     * @example
     * // Get one MentalState
     * const mentalState = await prisma.mentalState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentalStateFindFirstArgs>(args?: SelectSubset<T, MentalStateFindFirstArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentalState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateFindFirstOrThrowArgs} args - Arguments to find a MentalState
     * @example
     * // Get one MentalState
     * const mentalState = await prisma.mentalState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentalStateFindFirstOrThrowArgs>(args?: SelectSubset<T, MentalStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentalStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentalStates
     * const mentalStates = await prisma.mentalState.findMany()
     * 
     * // Get first 10 MentalStates
     * const mentalStates = await prisma.mentalState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentalStateWithIdOnly = await prisma.mentalState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentalStateFindManyArgs>(args?: SelectSubset<T, MentalStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentalState.
     * @param {MentalStateCreateArgs} args - Arguments to create a MentalState.
     * @example
     * // Create one MentalState
     * const MentalState = await prisma.mentalState.create({
     *   data: {
     *     // ... data to create a MentalState
     *   }
     * })
     * 
     */
    create<T extends MentalStateCreateArgs>(args: SelectSubset<T, MentalStateCreateArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentalStates.
     * @param {MentalStateCreateManyArgs} args - Arguments to create many MentalStates.
     * @example
     * // Create many MentalStates
     * const mentalState = await prisma.mentalState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentalStateCreateManyArgs>(args?: SelectSubset<T, MentalStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentalStates and returns the data saved in the database.
     * @param {MentalStateCreateManyAndReturnArgs} args - Arguments to create many MentalStates.
     * @example
     * // Create many MentalStates
     * const mentalState = await prisma.mentalState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentalStates and only return the `id`
     * const mentalStateWithIdOnly = await prisma.mentalState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentalStateCreateManyAndReturnArgs>(args?: SelectSubset<T, MentalStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentalState.
     * @param {MentalStateDeleteArgs} args - Arguments to delete one MentalState.
     * @example
     * // Delete one MentalState
     * const MentalState = await prisma.mentalState.delete({
     *   where: {
     *     // ... filter to delete one MentalState
     *   }
     * })
     * 
     */
    delete<T extends MentalStateDeleteArgs>(args: SelectSubset<T, MentalStateDeleteArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentalState.
     * @param {MentalStateUpdateArgs} args - Arguments to update one MentalState.
     * @example
     * // Update one MentalState
     * const mentalState = await prisma.mentalState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentalStateUpdateArgs>(args: SelectSubset<T, MentalStateUpdateArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentalStates.
     * @param {MentalStateDeleteManyArgs} args - Arguments to filter MentalStates to delete.
     * @example
     * // Delete a few MentalStates
     * const { count } = await prisma.mentalState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentalStateDeleteManyArgs>(args?: SelectSubset<T, MentalStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentalStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentalStates
     * const mentalState = await prisma.mentalState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentalStateUpdateManyArgs>(args: SelectSubset<T, MentalStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentalStates and returns the data updated in the database.
     * @param {MentalStateUpdateManyAndReturnArgs} args - Arguments to update many MentalStates.
     * @example
     * // Update many MentalStates
     * const mentalState = await prisma.mentalState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentalStates and only return the `id`
     * const mentalStateWithIdOnly = await prisma.mentalState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentalStateUpdateManyAndReturnArgs>(args: SelectSubset<T, MentalStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentalState.
     * @param {MentalStateUpsertArgs} args - Arguments to update or create a MentalState.
     * @example
     * // Update or create a MentalState
     * const mentalState = await prisma.mentalState.upsert({
     *   create: {
     *     // ... data to create a MentalState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentalState we want to update
     *   }
     * })
     */
    upsert<T extends MentalStateUpsertArgs>(args: SelectSubset<T, MentalStateUpsertArgs<ExtArgs>>): Prisma__MentalStateClient<$Result.GetResult<Prisma.$MentalStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentalStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateCountArgs} args - Arguments to filter MentalStates to count.
     * @example
     * // Count the number of MentalStates
     * const count = await prisma.mentalState.count({
     *   where: {
     *     // ... the filter for the MentalStates we want to count
     *   }
     * })
    **/
    count<T extends MentalStateCountArgs>(
      args?: Subset<T, MentalStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentalStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentalState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentalStateAggregateArgs>(args: Subset<T, MentalStateAggregateArgs>): Prisma.PrismaPromise<GetMentalStateAggregateType<T>>

    /**
     * Group by MentalState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentalStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentalStateGroupByArgs['orderBy'] }
        : { orderBy?: MentalStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentalStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentalStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentalState model
   */
  readonly fields: MentalStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentalState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentalStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentalState model
   */
  interface MentalStateFieldRefs {
    readonly id: FieldRef<"MentalState", 'String'>
    readonly mood: FieldRef<"MentalState", 'Mood'>
    readonly note: FieldRef<"MentalState", 'String'>
    readonly createdAt: FieldRef<"MentalState", 'DateTime'>
    readonly userId: FieldRef<"MentalState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MentalState findUnique
   */
  export type MentalStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * Filter, which MentalState to fetch.
     */
    where: MentalStateWhereUniqueInput
  }

  /**
   * MentalState findUniqueOrThrow
   */
  export type MentalStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * Filter, which MentalState to fetch.
     */
    where: MentalStateWhereUniqueInput
  }

  /**
   * MentalState findFirst
   */
  export type MentalStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * Filter, which MentalState to fetch.
     */
    where?: MentalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalStates to fetch.
     */
    orderBy?: MentalStateOrderByWithRelationInput | MentalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentalStates.
     */
    cursor?: MentalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalStates.
     */
    distinct?: MentalStateScalarFieldEnum | MentalStateScalarFieldEnum[]
  }

  /**
   * MentalState findFirstOrThrow
   */
  export type MentalStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * Filter, which MentalState to fetch.
     */
    where?: MentalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalStates to fetch.
     */
    orderBy?: MentalStateOrderByWithRelationInput | MentalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentalStates.
     */
    cursor?: MentalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalStates.
     */
    distinct?: MentalStateScalarFieldEnum | MentalStateScalarFieldEnum[]
  }

  /**
   * MentalState findMany
   */
  export type MentalStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * Filter, which MentalStates to fetch.
     */
    where?: MentalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalStates to fetch.
     */
    orderBy?: MentalStateOrderByWithRelationInput | MentalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentalStates.
     */
    cursor?: MentalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalStates.
     */
    skip?: number
    distinct?: MentalStateScalarFieldEnum | MentalStateScalarFieldEnum[]
  }

  /**
   * MentalState create
   */
  export type MentalStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * The data needed to create a MentalState.
     */
    data: XOR<MentalStateCreateInput, MentalStateUncheckedCreateInput>
  }

  /**
   * MentalState createMany
   */
  export type MentalStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentalStates.
     */
    data: MentalStateCreateManyInput | MentalStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentalState createManyAndReturn
   */
  export type MentalStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * The data used to create many MentalStates.
     */
    data: MentalStateCreateManyInput | MentalStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentalState update
   */
  export type MentalStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * The data needed to update a MentalState.
     */
    data: XOR<MentalStateUpdateInput, MentalStateUncheckedUpdateInput>
    /**
     * Choose, which MentalState to update.
     */
    where: MentalStateWhereUniqueInput
  }

  /**
   * MentalState updateMany
   */
  export type MentalStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentalStates.
     */
    data: XOR<MentalStateUpdateManyMutationInput, MentalStateUncheckedUpdateManyInput>
    /**
     * Filter which MentalStates to update
     */
    where?: MentalStateWhereInput
    /**
     * Limit how many MentalStates to update.
     */
    limit?: number
  }

  /**
   * MentalState updateManyAndReturn
   */
  export type MentalStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * The data used to update MentalStates.
     */
    data: XOR<MentalStateUpdateManyMutationInput, MentalStateUncheckedUpdateManyInput>
    /**
     * Filter which MentalStates to update
     */
    where?: MentalStateWhereInput
    /**
     * Limit how many MentalStates to update.
     */
    limit?: number
  }

  /**
   * MentalState upsert
   */
  export type MentalStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * The filter to search for the MentalState to update in case it exists.
     */
    where: MentalStateWhereUniqueInput
    /**
     * In case the MentalState found by the `where` argument doesn't exist, create a new MentalState with this data.
     */
    create: XOR<MentalStateCreateInput, MentalStateUncheckedCreateInput>
    /**
     * In case the MentalState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentalStateUpdateInput, MentalStateUncheckedUpdateInput>
  }

  /**
   * MentalState delete
   */
  export type MentalStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
    /**
     * Filter which MentalState to delete.
     */
    where: MentalStateWhereUniqueInput
  }

  /**
   * MentalState deleteMany
   */
  export type MentalStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentalStates to delete
     */
    where?: MentalStateWhereInput
    /**
     * Limit how many MentalStates to delete.
     */
    limit?: number
  }

  /**
   * MentalState without action
   */
  export type MentalStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalState
     */
    select?: MentalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalState
     */
    omit?: MentalStateOmit<ExtArgs> | null
  }


  /**
   * Model PhysicalHabit
   */

  export type AggregatePhysicalHabit = {
    _count: PhysicalHabitCountAggregateOutputType | null
    _avg: PhysicalHabitAvgAggregateOutputType | null
    _sum: PhysicalHabitSumAggregateOutputType | null
    _min: PhysicalHabitMinAggregateOutputType | null
    _max: PhysicalHabitMaxAggregateOutputType | null
  }

  export type PhysicalHabitAvgAggregateOutputType = {
    sleepHours: number | null
    waterLiters: number | null
  }

  export type PhysicalHabitSumAggregateOutputType = {
    sleepHours: number | null
    waterLiters: number | null
  }

  export type PhysicalHabitMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    sleepHours: number | null
    waterLiters: number | null
    energyLevel: $Enums.EnergyLevel | null
    note: string | null
    createdAt: Date | null
  }

  export type PhysicalHabitMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    sleepHours: number | null
    waterLiters: number | null
    energyLevel: $Enums.EnergyLevel | null
    note: string | null
    createdAt: Date | null
  }

  export type PhysicalHabitCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    sleepHours: number
    waterLiters: number
    energyLevel: number
    note: number
    createdAt: number
    _all: number
  }


  export type PhysicalHabitAvgAggregateInputType = {
    sleepHours?: true
    waterLiters?: true
  }

  export type PhysicalHabitSumAggregateInputType = {
    sleepHours?: true
    waterLiters?: true
  }

  export type PhysicalHabitMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    sleepHours?: true
    waterLiters?: true
    energyLevel?: true
    note?: true
    createdAt?: true
  }

  export type PhysicalHabitMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    sleepHours?: true
    waterLiters?: true
    energyLevel?: true
    note?: true
    createdAt?: true
  }

  export type PhysicalHabitCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    sleepHours?: true
    waterLiters?: true
    energyLevel?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type PhysicalHabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalHabit to aggregate.
     */
    where?: PhysicalHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalHabits to fetch.
     */
    orderBy?: PhysicalHabitOrderByWithRelationInput | PhysicalHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalHabits
    **/
    _count?: true | PhysicalHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhysicalHabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhysicalHabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalHabitMaxAggregateInputType
  }

  export type GetPhysicalHabitAggregateType<T extends PhysicalHabitAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalHabit[P]>
      : GetScalarType<T[P], AggregatePhysicalHabit[P]>
  }




  export type PhysicalHabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalHabitWhereInput
    orderBy?: PhysicalHabitOrderByWithAggregationInput | PhysicalHabitOrderByWithAggregationInput[]
    by: PhysicalHabitScalarFieldEnum[] | PhysicalHabitScalarFieldEnum
    having?: PhysicalHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalHabitCountAggregateInputType | true
    _avg?: PhysicalHabitAvgAggregateInputType
    _sum?: PhysicalHabitSumAggregateInputType
    _min?: PhysicalHabitMinAggregateInputType
    _max?: PhysicalHabitMaxAggregateInputType
  }

  export type PhysicalHabitGroupByOutputType = {
    id: string
    userId: string
    date: Date
    sleepHours: number
    waterLiters: number
    energyLevel: $Enums.EnergyLevel
    note: string | null
    createdAt: Date
    _count: PhysicalHabitCountAggregateOutputType | null
    _avg: PhysicalHabitAvgAggregateOutputType | null
    _sum: PhysicalHabitSumAggregateOutputType | null
    _min: PhysicalHabitMinAggregateOutputType | null
    _max: PhysicalHabitMaxAggregateOutputType | null
  }

  type GetPhysicalHabitGroupByPayload<T extends PhysicalHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalHabitGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalHabitGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalHabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    sleepHours?: boolean
    waterLiters?: boolean
    energyLevel?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["physicalHabit"]>

  export type PhysicalHabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    sleepHours?: boolean
    waterLiters?: boolean
    energyLevel?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["physicalHabit"]>

  export type PhysicalHabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    sleepHours?: boolean
    waterLiters?: boolean
    energyLevel?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["physicalHabit"]>

  export type PhysicalHabitSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    sleepHours?: boolean
    waterLiters?: boolean
    energyLevel?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type PhysicalHabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "sleepHours" | "waterLiters" | "energyLevel" | "note" | "createdAt", ExtArgs["result"]["physicalHabit"]>

  export type $PhysicalHabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalHabit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      sleepHours: number
      waterLiters: number
      energyLevel: $Enums.EnergyLevel
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["physicalHabit"]>
    composites: {}
  }

  type PhysicalHabitGetPayload<S extends boolean | null | undefined | PhysicalHabitDefaultArgs> = $Result.GetResult<Prisma.$PhysicalHabitPayload, S>

  type PhysicalHabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhysicalHabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhysicalHabitCountAggregateInputType | true
    }

  export interface PhysicalHabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalHabit'], meta: { name: 'PhysicalHabit' } }
    /**
     * Find zero or one PhysicalHabit that matches the filter.
     * @param {PhysicalHabitFindUniqueArgs} args - Arguments to find a PhysicalHabit
     * @example
     * // Get one PhysicalHabit
     * const physicalHabit = await prisma.physicalHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhysicalHabitFindUniqueArgs>(args: SelectSubset<T, PhysicalHabitFindUniqueArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhysicalHabit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhysicalHabitFindUniqueOrThrowArgs} args - Arguments to find a PhysicalHabit
     * @example
     * // Get one PhysicalHabit
     * const physicalHabit = await prisma.physicalHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhysicalHabitFindUniqueOrThrowArgs>(args: SelectSubset<T, PhysicalHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitFindFirstArgs} args - Arguments to find a PhysicalHabit
     * @example
     * // Get one PhysicalHabit
     * const physicalHabit = await prisma.physicalHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhysicalHabitFindFirstArgs>(args?: SelectSubset<T, PhysicalHabitFindFirstArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalHabit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitFindFirstOrThrowArgs} args - Arguments to find a PhysicalHabit
     * @example
     * // Get one PhysicalHabit
     * const physicalHabit = await prisma.physicalHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhysicalHabitFindFirstOrThrowArgs>(args?: SelectSubset<T, PhysicalHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhysicalHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalHabits
     * const physicalHabits = await prisma.physicalHabit.findMany()
     * 
     * // Get first 10 PhysicalHabits
     * const physicalHabits = await prisma.physicalHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalHabitWithIdOnly = await prisma.physicalHabit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhysicalHabitFindManyArgs>(args?: SelectSubset<T, PhysicalHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhysicalHabit.
     * @param {PhysicalHabitCreateArgs} args - Arguments to create a PhysicalHabit.
     * @example
     * // Create one PhysicalHabit
     * const PhysicalHabit = await prisma.physicalHabit.create({
     *   data: {
     *     // ... data to create a PhysicalHabit
     *   }
     * })
     * 
     */
    create<T extends PhysicalHabitCreateArgs>(args: SelectSubset<T, PhysicalHabitCreateArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhysicalHabits.
     * @param {PhysicalHabitCreateManyArgs} args - Arguments to create many PhysicalHabits.
     * @example
     * // Create many PhysicalHabits
     * const physicalHabit = await prisma.physicalHabit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhysicalHabitCreateManyArgs>(args?: SelectSubset<T, PhysicalHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhysicalHabits and returns the data saved in the database.
     * @param {PhysicalHabitCreateManyAndReturnArgs} args - Arguments to create many PhysicalHabits.
     * @example
     * // Create many PhysicalHabits
     * const physicalHabit = await prisma.physicalHabit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhysicalHabits and only return the `id`
     * const physicalHabitWithIdOnly = await prisma.physicalHabit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhysicalHabitCreateManyAndReturnArgs>(args?: SelectSubset<T, PhysicalHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhysicalHabit.
     * @param {PhysicalHabitDeleteArgs} args - Arguments to delete one PhysicalHabit.
     * @example
     * // Delete one PhysicalHabit
     * const PhysicalHabit = await prisma.physicalHabit.delete({
     *   where: {
     *     // ... filter to delete one PhysicalHabit
     *   }
     * })
     * 
     */
    delete<T extends PhysicalHabitDeleteArgs>(args: SelectSubset<T, PhysicalHabitDeleteArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhysicalHabit.
     * @param {PhysicalHabitUpdateArgs} args - Arguments to update one PhysicalHabit.
     * @example
     * // Update one PhysicalHabit
     * const physicalHabit = await prisma.physicalHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhysicalHabitUpdateArgs>(args: SelectSubset<T, PhysicalHabitUpdateArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhysicalHabits.
     * @param {PhysicalHabitDeleteManyArgs} args - Arguments to filter PhysicalHabits to delete.
     * @example
     * // Delete a few PhysicalHabits
     * const { count } = await prisma.physicalHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhysicalHabitDeleteManyArgs>(args?: SelectSubset<T, PhysicalHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalHabits
     * const physicalHabit = await prisma.physicalHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhysicalHabitUpdateManyArgs>(args: SelectSubset<T, PhysicalHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalHabits and returns the data updated in the database.
     * @param {PhysicalHabitUpdateManyAndReturnArgs} args - Arguments to update many PhysicalHabits.
     * @example
     * // Update many PhysicalHabits
     * const physicalHabit = await prisma.physicalHabit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhysicalHabits and only return the `id`
     * const physicalHabitWithIdOnly = await prisma.physicalHabit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhysicalHabitUpdateManyAndReturnArgs>(args: SelectSubset<T, PhysicalHabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhysicalHabit.
     * @param {PhysicalHabitUpsertArgs} args - Arguments to update or create a PhysicalHabit.
     * @example
     * // Update or create a PhysicalHabit
     * const physicalHabit = await prisma.physicalHabit.upsert({
     *   create: {
     *     // ... data to create a PhysicalHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalHabit we want to update
     *   }
     * })
     */
    upsert<T extends PhysicalHabitUpsertArgs>(args: SelectSubset<T, PhysicalHabitUpsertArgs<ExtArgs>>): Prisma__PhysicalHabitClient<$Result.GetResult<Prisma.$PhysicalHabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhysicalHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitCountArgs} args - Arguments to filter PhysicalHabits to count.
     * @example
     * // Count the number of PhysicalHabits
     * const count = await prisma.physicalHabit.count({
     *   where: {
     *     // ... the filter for the PhysicalHabits we want to count
     *   }
     * })
    **/
    count<T extends PhysicalHabitCountArgs>(
      args?: Subset<T, PhysicalHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhysicalHabitAggregateArgs>(args: Subset<T, PhysicalHabitAggregateArgs>): Prisma.PrismaPromise<GetPhysicalHabitAggregateType<T>>

    /**
     * Group by PhysicalHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalHabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhysicalHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalHabitGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalHabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhysicalHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalHabit model
   */
  readonly fields: PhysicalHabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalHabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhysicalHabit model
   */
  interface PhysicalHabitFieldRefs {
    readonly id: FieldRef<"PhysicalHabit", 'String'>
    readonly userId: FieldRef<"PhysicalHabit", 'String'>
    readonly date: FieldRef<"PhysicalHabit", 'DateTime'>
    readonly sleepHours: FieldRef<"PhysicalHabit", 'Float'>
    readonly waterLiters: FieldRef<"PhysicalHabit", 'Float'>
    readonly energyLevel: FieldRef<"PhysicalHabit", 'EnergyLevel'>
    readonly note: FieldRef<"PhysicalHabit", 'String'>
    readonly createdAt: FieldRef<"PhysicalHabit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhysicalHabit findUnique
   */
  export type PhysicalHabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * Filter, which PhysicalHabit to fetch.
     */
    where: PhysicalHabitWhereUniqueInput
  }

  /**
   * PhysicalHabit findUniqueOrThrow
   */
  export type PhysicalHabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * Filter, which PhysicalHabit to fetch.
     */
    where: PhysicalHabitWhereUniqueInput
  }

  /**
   * PhysicalHabit findFirst
   */
  export type PhysicalHabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * Filter, which PhysicalHabit to fetch.
     */
    where?: PhysicalHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalHabits to fetch.
     */
    orderBy?: PhysicalHabitOrderByWithRelationInput | PhysicalHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalHabits.
     */
    cursor?: PhysicalHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalHabits.
     */
    distinct?: PhysicalHabitScalarFieldEnum | PhysicalHabitScalarFieldEnum[]
  }

  /**
   * PhysicalHabit findFirstOrThrow
   */
  export type PhysicalHabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * Filter, which PhysicalHabit to fetch.
     */
    where?: PhysicalHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalHabits to fetch.
     */
    orderBy?: PhysicalHabitOrderByWithRelationInput | PhysicalHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalHabits.
     */
    cursor?: PhysicalHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalHabits.
     */
    distinct?: PhysicalHabitScalarFieldEnum | PhysicalHabitScalarFieldEnum[]
  }

  /**
   * PhysicalHabit findMany
   */
  export type PhysicalHabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * Filter, which PhysicalHabits to fetch.
     */
    where?: PhysicalHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalHabits to fetch.
     */
    orderBy?: PhysicalHabitOrderByWithRelationInput | PhysicalHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalHabits.
     */
    cursor?: PhysicalHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalHabits.
     */
    skip?: number
    distinct?: PhysicalHabitScalarFieldEnum | PhysicalHabitScalarFieldEnum[]
  }

  /**
   * PhysicalHabit create
   */
  export type PhysicalHabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * The data needed to create a PhysicalHabit.
     */
    data: XOR<PhysicalHabitCreateInput, PhysicalHabitUncheckedCreateInput>
  }

  /**
   * PhysicalHabit createMany
   */
  export type PhysicalHabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalHabits.
     */
    data: PhysicalHabitCreateManyInput | PhysicalHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhysicalHabit createManyAndReturn
   */
  export type PhysicalHabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * The data used to create many PhysicalHabits.
     */
    data: PhysicalHabitCreateManyInput | PhysicalHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhysicalHabit update
   */
  export type PhysicalHabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * The data needed to update a PhysicalHabit.
     */
    data: XOR<PhysicalHabitUpdateInput, PhysicalHabitUncheckedUpdateInput>
    /**
     * Choose, which PhysicalHabit to update.
     */
    where: PhysicalHabitWhereUniqueInput
  }

  /**
   * PhysicalHabit updateMany
   */
  export type PhysicalHabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalHabits.
     */
    data: XOR<PhysicalHabitUpdateManyMutationInput, PhysicalHabitUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalHabits to update
     */
    where?: PhysicalHabitWhereInput
    /**
     * Limit how many PhysicalHabits to update.
     */
    limit?: number
  }

  /**
   * PhysicalHabit updateManyAndReturn
   */
  export type PhysicalHabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * The data used to update PhysicalHabits.
     */
    data: XOR<PhysicalHabitUpdateManyMutationInput, PhysicalHabitUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalHabits to update
     */
    where?: PhysicalHabitWhereInput
    /**
     * Limit how many PhysicalHabits to update.
     */
    limit?: number
  }

  /**
   * PhysicalHabit upsert
   */
  export type PhysicalHabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * The filter to search for the PhysicalHabit to update in case it exists.
     */
    where: PhysicalHabitWhereUniqueInput
    /**
     * In case the PhysicalHabit found by the `where` argument doesn't exist, create a new PhysicalHabit with this data.
     */
    create: XOR<PhysicalHabitCreateInput, PhysicalHabitUncheckedCreateInput>
    /**
     * In case the PhysicalHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalHabitUpdateInput, PhysicalHabitUncheckedUpdateInput>
  }

  /**
   * PhysicalHabit delete
   */
  export type PhysicalHabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
    /**
     * Filter which PhysicalHabit to delete.
     */
    where: PhysicalHabitWhereUniqueInput
  }

  /**
   * PhysicalHabit deleteMany
   */
  export type PhysicalHabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalHabits to delete
     */
    where?: PhysicalHabitWhereInput
    /**
     * Limit how many PhysicalHabits to delete.
     */
    limit?: number
  }

  /**
   * PhysicalHabit without action
   */
  export type PhysicalHabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalHabit
     */
    select?: PhysicalHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalHabit
     */
    omit?: PhysicalHabitOmit<ExtArgs> | null
  }


  /**
   * Model ExerciseRecord
   */

  export type AggregateExerciseRecord = {
    _count: ExerciseRecordCountAggregateOutputType | null
    _avg: ExerciseRecordAvgAggregateOutputType | null
    _sum: ExerciseRecordSumAggregateOutputType | null
    _min: ExerciseRecordMinAggregateOutputType | null
    _max: ExerciseRecordMaxAggregateOutputType | null
  }

  export type ExerciseRecordAvgAggregateOutputType = {
    caloriesBurned: number | null
  }

  export type ExerciseRecordSumAggregateOutputType = {
    caloriesBurned: number | null
  }

  export type ExerciseRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    caloriesBurned: number | null
    note: string | null
    createdAt: Date | null
  }

  export type ExerciseRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    caloriesBurned: number | null
    note: string | null
    createdAt: Date | null
  }

  export type ExerciseRecordCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    caloriesBurned: number
    note: number
    createdAt: number
    _all: number
  }


  export type ExerciseRecordAvgAggregateInputType = {
    caloriesBurned?: true
  }

  export type ExerciseRecordSumAggregateInputType = {
    caloriesBurned?: true
  }

  export type ExerciseRecordMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    caloriesBurned?: true
    note?: true
    createdAt?: true
  }

  export type ExerciseRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    caloriesBurned?: true
    note?: true
    createdAt?: true
  }

  export type ExerciseRecordCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    caloriesBurned?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseRecord to aggregate.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseRecords
    **/
    _count?: true | ExerciseRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseRecordMaxAggregateInputType
  }

  export type GetExerciseRecordAggregateType<T extends ExerciseRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseRecord[P]>
      : GetScalarType<T[P], AggregateExerciseRecord[P]>
  }




  export type ExerciseRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseRecordWhereInput
    orderBy?: ExerciseRecordOrderByWithAggregationInput | ExerciseRecordOrderByWithAggregationInput[]
    by: ExerciseRecordScalarFieldEnum[] | ExerciseRecordScalarFieldEnum
    having?: ExerciseRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseRecordCountAggregateInputType | true
    _avg?: ExerciseRecordAvgAggregateInputType
    _sum?: ExerciseRecordSumAggregateInputType
    _min?: ExerciseRecordMinAggregateInputType
    _max?: ExerciseRecordMaxAggregateInputType
  }

  export type ExerciseRecordGroupByOutputType = {
    id: string
    userId: string
    date: Date
    caloriesBurned: number
    note: string | null
    createdAt: Date
    _count: ExerciseRecordCountAggregateOutputType | null
    _avg: ExerciseRecordAvgAggregateOutputType | null
    _sum: ExerciseRecordSumAggregateOutputType | null
    _min: ExerciseRecordMinAggregateOutputType | null
    _max: ExerciseRecordMaxAggregateOutputType | null
  }

  type GetExerciseRecordGroupByPayload<T extends ExerciseRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseRecordGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesBurned?: boolean
    note?: boolean
    createdAt?: boolean
    exercises?: boolean | ExerciseRecord$exercisesArgs<ExtArgs>
    _count?: boolean | ExerciseRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesBurned?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesBurned?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exerciseRecord"]>

  export type ExerciseRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesBurned?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type ExerciseRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "caloriesBurned" | "note" | "createdAt", ExtArgs["result"]["exerciseRecord"]>
  export type ExerciseRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | ExerciseRecord$exercisesArgs<ExtArgs>
    _count?: boolean | ExerciseRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExerciseRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseRecord"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      caloriesBurned: number
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["exerciseRecord"]>
    composites: {}
  }

  type ExerciseRecordGetPayload<S extends boolean | null | undefined | ExerciseRecordDefaultArgs> = $Result.GetResult<Prisma.$ExerciseRecordPayload, S>

  type ExerciseRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseRecordCountAggregateInputType | true
    }

  export interface ExerciseRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseRecord'], meta: { name: 'ExerciseRecord' } }
    /**
     * Find zero or one ExerciseRecord that matches the filter.
     * @param {ExerciseRecordFindUniqueArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseRecordFindUniqueArgs>(args: SelectSubset<T, ExerciseRecordFindUniqueArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseRecordFindUniqueOrThrowArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindFirstArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseRecordFindFirstArgs>(args?: SelectSubset<T, ExerciseRecordFindFirstArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindFirstOrThrowArgs} args - Arguments to find a ExerciseRecord
     * @example
     * // Get one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseRecords
     * const exerciseRecords = await prisma.exerciseRecord.findMany()
     * 
     * // Get first 10 ExerciseRecords
     * const exerciseRecords = await prisma.exerciseRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseRecordFindManyArgs>(args?: SelectSubset<T, ExerciseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseRecord.
     * @param {ExerciseRecordCreateArgs} args - Arguments to create a ExerciseRecord.
     * @example
     * // Create one ExerciseRecord
     * const ExerciseRecord = await prisma.exerciseRecord.create({
     *   data: {
     *     // ... data to create a ExerciseRecord
     *   }
     * })
     * 
     */
    create<T extends ExerciseRecordCreateArgs>(args: SelectSubset<T, ExerciseRecordCreateArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseRecords.
     * @param {ExerciseRecordCreateManyArgs} args - Arguments to create many ExerciseRecords.
     * @example
     * // Create many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseRecordCreateManyArgs>(args?: SelectSubset<T, ExerciseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseRecords and returns the data saved in the database.
     * @param {ExerciseRecordCreateManyAndReturnArgs} args - Arguments to create many ExerciseRecords.
     * @example
     * // Create many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseRecords and only return the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseRecord.
     * @param {ExerciseRecordDeleteArgs} args - Arguments to delete one ExerciseRecord.
     * @example
     * // Delete one ExerciseRecord
     * const ExerciseRecord = await prisma.exerciseRecord.delete({
     *   where: {
     *     // ... filter to delete one ExerciseRecord
     *   }
     * })
     * 
     */
    delete<T extends ExerciseRecordDeleteArgs>(args: SelectSubset<T, ExerciseRecordDeleteArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseRecord.
     * @param {ExerciseRecordUpdateArgs} args - Arguments to update one ExerciseRecord.
     * @example
     * // Update one ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseRecordUpdateArgs>(args: SelectSubset<T, ExerciseRecordUpdateArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseRecords.
     * @param {ExerciseRecordDeleteManyArgs} args - Arguments to filter ExerciseRecords to delete.
     * @example
     * // Delete a few ExerciseRecords
     * const { count } = await prisma.exerciseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseRecordDeleteManyArgs>(args?: SelectSubset<T, ExerciseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseRecordUpdateManyArgs>(args: SelectSubset<T, ExerciseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRecords and returns the data updated in the database.
     * @param {ExerciseRecordUpdateManyAndReturnArgs} args - Arguments to update many ExerciseRecords.
     * @example
     * // Update many ExerciseRecords
     * const exerciseRecord = await prisma.exerciseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseRecords and only return the `id`
     * const exerciseRecordWithIdOnly = await prisma.exerciseRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseRecord.
     * @param {ExerciseRecordUpsertArgs} args - Arguments to update or create a ExerciseRecord.
     * @example
     * // Update or create a ExerciseRecord
     * const exerciseRecord = await prisma.exerciseRecord.upsert({
     *   create: {
     *     // ... data to create a ExerciseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseRecord we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseRecordUpsertArgs>(args: SelectSubset<T, ExerciseRecordUpsertArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordCountArgs} args - Arguments to filter ExerciseRecords to count.
     * @example
     * // Count the number of ExerciseRecords
     * const count = await prisma.exerciseRecord.count({
     *   where: {
     *     // ... the filter for the ExerciseRecords we want to count
     *   }
     * })
    **/
    count<T extends ExerciseRecordCountArgs>(
      args?: Subset<T, ExerciseRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseRecordAggregateArgs>(args: Subset<T, ExerciseRecordAggregateArgs>): Prisma.PrismaPromise<GetExerciseRecordAggregateType<T>>

    /**
     * Group by ExerciseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseRecordGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseRecord model
   */
  readonly fields: ExerciseRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends ExerciseRecord$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseRecord$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExerciseRecord model
   */
  interface ExerciseRecordFieldRefs {
    readonly id: FieldRef<"ExerciseRecord", 'String'>
    readonly userId: FieldRef<"ExerciseRecord", 'String'>
    readonly date: FieldRef<"ExerciseRecord", 'DateTime'>
    readonly caloriesBurned: FieldRef<"ExerciseRecord", 'Int'>
    readonly note: FieldRef<"ExerciseRecord", 'String'>
    readonly createdAt: FieldRef<"ExerciseRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseRecord findUnique
   */
  export type ExerciseRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord findUniqueOrThrow
   */
  export type ExerciseRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord findFirst
   */
  export type ExerciseRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseRecords.
     */
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord findFirstOrThrow
   */
  export type ExerciseRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecord to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseRecords.
     */
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord findMany
   */
  export type ExerciseRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseRecords to fetch.
     */
    where?: ExerciseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseRecords to fetch.
     */
    orderBy?: ExerciseRecordOrderByWithRelationInput | ExerciseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseRecords.
     */
    cursor?: ExerciseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseRecords.
     */
    skip?: number
    distinct?: ExerciseRecordScalarFieldEnum | ExerciseRecordScalarFieldEnum[]
  }

  /**
   * ExerciseRecord create
   */
  export type ExerciseRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseRecord.
     */
    data: XOR<ExerciseRecordCreateInput, ExerciseRecordUncheckedCreateInput>
  }

  /**
   * ExerciseRecord createMany
   */
  export type ExerciseRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseRecords.
     */
    data: ExerciseRecordCreateManyInput | ExerciseRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseRecord createManyAndReturn
   */
  export type ExerciseRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseRecords.
     */
    data: ExerciseRecordCreateManyInput | ExerciseRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseRecord update
   */
  export type ExerciseRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseRecord.
     */
    data: XOR<ExerciseRecordUpdateInput, ExerciseRecordUncheckedUpdateInput>
    /**
     * Choose, which ExerciseRecord to update.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord updateMany
   */
  export type ExerciseRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseRecords.
     */
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseRecords to update
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to update.
     */
    limit?: number
  }

  /**
   * ExerciseRecord updateManyAndReturn
   */
  export type ExerciseRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseRecords.
     */
    data: XOR<ExerciseRecordUpdateManyMutationInput, ExerciseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseRecords to update
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to update.
     */
    limit?: number
  }

  /**
   * ExerciseRecord upsert
   */
  export type ExerciseRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseRecord to update in case it exists.
     */
    where: ExerciseRecordWhereUniqueInput
    /**
     * In case the ExerciseRecord found by the `where` argument doesn't exist, create a new ExerciseRecord with this data.
     */
    create: XOR<ExerciseRecordCreateInput, ExerciseRecordUncheckedCreateInput>
    /**
     * In case the ExerciseRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseRecordUpdateInput, ExerciseRecordUncheckedUpdateInput>
  }

  /**
   * ExerciseRecord delete
   */
  export type ExerciseRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
    /**
     * Filter which ExerciseRecord to delete.
     */
    where: ExerciseRecordWhereUniqueInput
  }

  /**
   * ExerciseRecord deleteMany
   */
  export type ExerciseRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseRecords to delete
     */
    where?: ExerciseRecordWhereInput
    /**
     * Limit how many ExerciseRecords to delete.
     */
    limit?: number
  }

  /**
   * ExerciseRecord.exercises
   */
  export type ExerciseRecord$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * ExerciseRecord without action
   */
  export type ExerciseRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseRecord
     */
    select?: ExerciseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseRecord
     */
    omit?: ExerciseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseRecordInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    duration: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    duration: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    type: $Enums.ExerciseType | null
    duration: number | null
    intensity: $Enums.IntensityLevel | null
    exerciseRecordId: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ExerciseType | null
    duration: number | null
    intensity: $Enums.IntensityLevel | null
    exerciseRecordId: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    type: number
    duration: number
    intensity: number
    exerciseRecordId: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    duration?: true
  }

  export type ExerciseSumAggregateInputType = {
    duration?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    type?: true
    duration?: true
    intensity?: true
    exerciseRecordId?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    type?: true
    duration?: true
    intensity?: true
    exerciseRecordId?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    type?: true
    duration?: true
    intensity?: true
    exerciseRecordId?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
    exerciseRecordId: string
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    duration?: boolean
    intensity?: boolean
    exerciseRecordId?: boolean
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    duration?: boolean
    intensity?: boolean
    exerciseRecordId?: boolean
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    duration?: boolean
    intensity?: boolean
    exerciseRecordId?: boolean
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    type?: boolean
    duration?: boolean
    intensity?: boolean
    exerciseRecordId?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "duration" | "intensity" | "exerciseRecordId", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRecord?: boolean | ExerciseRecordDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      exerciseRecord: Prisma.$ExerciseRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ExerciseType
      duration: number
      intensity: $Enums.IntensityLevel
      exerciseRecordId: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exerciseRecord<T extends ExerciseRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseRecordDefaultArgs<ExtArgs>>): Prisma__ExerciseRecordClient<$Result.GetResult<Prisma.$ExerciseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly type: FieldRef<"Exercise", 'ExerciseType'>
    readonly duration: FieldRef<"Exercise", 'Int'>
    readonly intensity: FieldRef<"Exercise", 'IntensityLevel'>
    readonly exerciseRecordId: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    passwordHash: 'passwordHash'
  };

  export type AuthUserScalarFieldEnum = (typeof AuthUserScalarFieldEnum)[keyof typeof AuthUserScalarFieldEnum]


  export const MentalStateScalarFieldEnum: {
    id: 'id',
    mood: 'mood',
    note: 'note',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type MentalStateScalarFieldEnum = (typeof MentalStateScalarFieldEnum)[keyof typeof MentalStateScalarFieldEnum]


  export const PhysicalHabitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    sleepHours: 'sleepHours',
    waterLiters: 'waterLiters',
    energyLevel: 'energyLevel',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type PhysicalHabitScalarFieldEnum = (typeof PhysicalHabitScalarFieldEnum)[keyof typeof PhysicalHabitScalarFieldEnum]


  export const ExerciseRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    caloriesBurned: 'caloriesBurned',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type ExerciseRecordScalarFieldEnum = (typeof ExerciseRecordScalarFieldEnum)[keyof typeof ExerciseRecordScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    type: 'type',
    duration: 'duration',
    intensity: 'intensity',
    exerciseRecordId: 'exerciseRecordId'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Mood'
   */
  export type EnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood'>
    


  /**
   * Reference to a field of type 'Mood[]'
   */
  export type ListEnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EnergyLevel'
   */
  export type EnumEnergyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyLevel'>
    


  /**
   * Reference to a field of type 'EnergyLevel[]'
   */
  export type ListEnumEnergyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyLevel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ExerciseType'
   */
  export type EnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType'>
    


  /**
   * Reference to a field of type 'ExerciseType[]'
   */
  export type ListEnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType[]'>
    


  /**
   * Reference to a field of type 'IntensityLevel'
   */
  export type EnumIntensityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntensityLevel'>
    


  /**
   * Reference to a field of type 'IntensityLevel[]'
   */
  export type ListEnumIntensityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntensityLevel[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthUserWhereInput = {
    AND?: AuthUserWhereInput | AuthUserWhereInput[]
    OR?: AuthUserWhereInput[]
    NOT?: AuthUserWhereInput | AuthUserWhereInput[]
    id?: StringFilter<"AuthUser"> | string
    email?: StringFilter<"AuthUser"> | string
    firstname?: StringFilter<"AuthUser"> | string
    lastname?: StringFilter<"AuthUser"> | string
    passwordHash?: StringFilter<"AuthUser"> | string
  }

  export type AuthUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    passwordHash?: SortOrder
  }

  export type AuthUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AuthUserWhereInput | AuthUserWhereInput[]
    OR?: AuthUserWhereInput[]
    NOT?: AuthUserWhereInput | AuthUserWhereInput[]
    firstname?: StringFilter<"AuthUser"> | string
    lastname?: StringFilter<"AuthUser"> | string
    passwordHash?: StringFilter<"AuthUser"> | string
  }, "id" | "email">

  export type AuthUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    passwordHash?: SortOrder
    _count?: AuthUserCountOrderByAggregateInput
    _max?: AuthUserMaxOrderByAggregateInput
    _min?: AuthUserMinOrderByAggregateInput
  }

  export type AuthUserScalarWhereWithAggregatesInput = {
    AND?: AuthUserScalarWhereWithAggregatesInput | AuthUserScalarWhereWithAggregatesInput[]
    OR?: AuthUserScalarWhereWithAggregatesInput[]
    NOT?: AuthUserScalarWhereWithAggregatesInput | AuthUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthUser"> | string
    email?: StringWithAggregatesFilter<"AuthUser"> | string
    firstname?: StringWithAggregatesFilter<"AuthUser"> | string
    lastname?: StringWithAggregatesFilter<"AuthUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AuthUser"> | string
  }

  export type MentalStateWhereInput = {
    AND?: MentalStateWhereInput | MentalStateWhereInput[]
    OR?: MentalStateWhereInput[]
    NOT?: MentalStateWhereInput | MentalStateWhereInput[]
    id?: StringFilter<"MentalState"> | string
    mood?: EnumMoodFilter<"MentalState"> | $Enums.Mood
    note?: StringNullableFilter<"MentalState"> | string | null
    createdAt?: DateTimeFilter<"MentalState"> | Date | string
    userId?: StringFilter<"MentalState"> | string
  }

  export type MentalStateOrderByWithRelationInput = {
    id?: SortOrder
    mood?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MentalStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MentalStateWhereInput | MentalStateWhereInput[]
    OR?: MentalStateWhereInput[]
    NOT?: MentalStateWhereInput | MentalStateWhereInput[]
    mood?: EnumMoodFilter<"MentalState"> | $Enums.Mood
    note?: StringNullableFilter<"MentalState"> | string | null
    createdAt?: DateTimeFilter<"MentalState"> | Date | string
    userId?: StringFilter<"MentalState"> | string
  }, "id">

  export type MentalStateOrderByWithAggregationInput = {
    id?: SortOrder
    mood?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: MentalStateCountOrderByAggregateInput
    _max?: MentalStateMaxOrderByAggregateInput
    _min?: MentalStateMinOrderByAggregateInput
  }

  export type MentalStateScalarWhereWithAggregatesInput = {
    AND?: MentalStateScalarWhereWithAggregatesInput | MentalStateScalarWhereWithAggregatesInput[]
    OR?: MentalStateScalarWhereWithAggregatesInput[]
    NOT?: MentalStateScalarWhereWithAggregatesInput | MentalStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MentalState"> | string
    mood?: EnumMoodWithAggregatesFilter<"MentalState"> | $Enums.Mood
    note?: StringNullableWithAggregatesFilter<"MentalState"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MentalState"> | Date | string
    userId?: StringWithAggregatesFilter<"MentalState"> | string
  }

  export type PhysicalHabitWhereInput = {
    AND?: PhysicalHabitWhereInput | PhysicalHabitWhereInput[]
    OR?: PhysicalHabitWhereInput[]
    NOT?: PhysicalHabitWhereInput | PhysicalHabitWhereInput[]
    id?: StringFilter<"PhysicalHabit"> | string
    userId?: StringFilter<"PhysicalHabit"> | string
    date?: DateTimeFilter<"PhysicalHabit"> | Date | string
    sleepHours?: FloatFilter<"PhysicalHabit"> | number
    waterLiters?: FloatFilter<"PhysicalHabit"> | number
    energyLevel?: EnumEnergyLevelFilter<"PhysicalHabit"> | $Enums.EnergyLevel
    note?: StringNullableFilter<"PhysicalHabit"> | string | null
    createdAt?: DateTimeFilter<"PhysicalHabit"> | Date | string
  }

  export type PhysicalHabitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sleepHours?: SortOrder
    waterLiters?: SortOrder
    energyLevel?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhysicalHabitWhereInput | PhysicalHabitWhereInput[]
    OR?: PhysicalHabitWhereInput[]
    NOT?: PhysicalHabitWhereInput | PhysicalHabitWhereInput[]
    userId?: StringFilter<"PhysicalHabit"> | string
    date?: DateTimeFilter<"PhysicalHabit"> | Date | string
    sleepHours?: FloatFilter<"PhysicalHabit"> | number
    waterLiters?: FloatFilter<"PhysicalHabit"> | number
    energyLevel?: EnumEnergyLevelFilter<"PhysicalHabit"> | $Enums.EnergyLevel
    note?: StringNullableFilter<"PhysicalHabit"> | string | null
    createdAt?: DateTimeFilter<"PhysicalHabit"> | Date | string
  }, "id">

  export type PhysicalHabitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sleepHours?: SortOrder
    waterLiters?: SortOrder
    energyLevel?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PhysicalHabitCountOrderByAggregateInput
    _avg?: PhysicalHabitAvgOrderByAggregateInput
    _max?: PhysicalHabitMaxOrderByAggregateInput
    _min?: PhysicalHabitMinOrderByAggregateInput
    _sum?: PhysicalHabitSumOrderByAggregateInput
  }

  export type PhysicalHabitScalarWhereWithAggregatesInput = {
    AND?: PhysicalHabitScalarWhereWithAggregatesInput | PhysicalHabitScalarWhereWithAggregatesInput[]
    OR?: PhysicalHabitScalarWhereWithAggregatesInput[]
    NOT?: PhysicalHabitScalarWhereWithAggregatesInput | PhysicalHabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhysicalHabit"> | string
    userId?: StringWithAggregatesFilter<"PhysicalHabit"> | string
    date?: DateTimeWithAggregatesFilter<"PhysicalHabit"> | Date | string
    sleepHours?: FloatWithAggregatesFilter<"PhysicalHabit"> | number
    waterLiters?: FloatWithAggregatesFilter<"PhysicalHabit"> | number
    energyLevel?: EnumEnergyLevelWithAggregatesFilter<"PhysicalHabit"> | $Enums.EnergyLevel
    note?: StringNullableWithAggregatesFilter<"PhysicalHabit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PhysicalHabit"> | Date | string
  }

  export type ExerciseRecordWhereInput = {
    AND?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    OR?: ExerciseRecordWhereInput[]
    NOT?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    id?: StringFilter<"ExerciseRecord"> | string
    userId?: StringFilter<"ExerciseRecord"> | string
    date?: DateTimeFilter<"ExerciseRecord"> | Date | string
    caloriesBurned?: IntFilter<"ExerciseRecord"> | number
    note?: StringNullableFilter<"ExerciseRecord"> | string | null
    createdAt?: DateTimeFilter<"ExerciseRecord"> | Date | string
    exercises?: ExerciseListRelationFilter
  }

  export type ExerciseRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesBurned?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type ExerciseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    OR?: ExerciseRecordWhereInput[]
    NOT?: ExerciseRecordWhereInput | ExerciseRecordWhereInput[]
    userId?: StringFilter<"ExerciseRecord"> | string
    date?: DateTimeFilter<"ExerciseRecord"> | Date | string
    caloriesBurned?: IntFilter<"ExerciseRecord"> | number
    note?: StringNullableFilter<"ExerciseRecord"> | string | null
    createdAt?: DateTimeFilter<"ExerciseRecord"> | Date | string
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type ExerciseRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesBurned?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExerciseRecordCountOrderByAggregateInput
    _avg?: ExerciseRecordAvgOrderByAggregateInput
    _max?: ExerciseRecordMaxOrderByAggregateInput
    _min?: ExerciseRecordMinOrderByAggregateInput
    _sum?: ExerciseRecordSumOrderByAggregateInput
  }

  export type ExerciseRecordScalarWhereWithAggregatesInput = {
    AND?: ExerciseRecordScalarWhereWithAggregatesInput | ExerciseRecordScalarWhereWithAggregatesInput[]
    OR?: ExerciseRecordScalarWhereWithAggregatesInput[]
    NOT?: ExerciseRecordScalarWhereWithAggregatesInput | ExerciseRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseRecord"> | string
    userId?: StringWithAggregatesFilter<"ExerciseRecord"> | string
    date?: DateTimeWithAggregatesFilter<"ExerciseRecord"> | Date | string
    caloriesBurned?: IntWithAggregatesFilter<"ExerciseRecord"> | number
    note?: StringNullableWithAggregatesFilter<"ExerciseRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExerciseRecord"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    duration?: IntFilter<"Exercise"> | number
    intensity?: EnumIntensityLevelFilter<"Exercise"> | $Enums.IntensityLevel
    exerciseRecordId?: StringFilter<"Exercise"> | string
    exerciseRecord?: XOR<ExerciseRecordScalarRelationFilter, ExerciseRecordWhereInput>
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    exerciseRecordId?: SortOrder
    exerciseRecord?: ExerciseRecordOrderByWithRelationInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    duration?: IntFilter<"Exercise"> | number
    intensity?: EnumIntensityLevelFilter<"Exercise"> | $Enums.IntensityLevel
    exerciseRecordId?: StringFilter<"Exercise"> | string
    exerciseRecord?: XOR<ExerciseRecordScalarRelationFilter, ExerciseRecordWhereInput>
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    exerciseRecordId?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    type?: EnumExerciseTypeWithAggregatesFilter<"Exercise"> | $Enums.ExerciseType
    duration?: IntWithAggregatesFilter<"Exercise"> | number
    intensity?: EnumIntensityLevelWithAggregatesFilter<"Exercise"> | $Enums.IntensityLevel
    exerciseRecordId?: StringWithAggregatesFilter<"Exercise"> | string
  }

  export type AuthUserCreateInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    passwordHash: string
  }

  export type AuthUserUncheckedCreateInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    passwordHash: string
  }

  export type AuthUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUserCreateManyInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    passwordHash: string
  }

  export type AuthUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type MentalStateCreateInput = {
    id?: string
    mood: $Enums.Mood
    note?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type MentalStateUncheckedCreateInput = {
    id?: string
    mood: $Enums.Mood
    note?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type MentalStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MentalStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MentalStateCreateManyInput = {
    id?: string
    mood: $Enums.Mood
    note?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type MentalStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MentalStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PhysicalHabitCreateInput = {
    id?: string
    userId: string
    date: Date | string
    sleepHours: number
    waterLiters: number
    energyLevel: $Enums.EnergyLevel
    note?: string | null
    createdAt?: Date | string
  }

  export type PhysicalHabitUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    sleepHours: number
    waterLiters: number
    energyLevel: $Enums.EnergyLevel
    note?: string | null
    createdAt?: Date | string
  }

  export type PhysicalHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    waterLiters?: FloatFieldUpdateOperationsInput | number
    energyLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    waterLiters?: FloatFieldUpdateOperationsInput | number
    energyLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalHabitCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    sleepHours: number
    waterLiters: number
    energyLevel: $Enums.EnergyLevel
    note?: string | null
    createdAt?: Date | string
  }

  export type PhysicalHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    waterLiters?: FloatFieldUpdateOperationsInput | number
    energyLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepHours?: FloatFieldUpdateOperationsInput | number
    waterLiters?: FloatFieldUpdateOperationsInput | number
    energyLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseRecordCreateInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesBurned: number
    note?: string | null
    createdAt?: Date | string
    exercises?: ExerciseCreateNestedManyWithoutExerciseRecordInput
  }

  export type ExerciseRecordUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesBurned: number
    note?: string | null
    createdAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutExerciseRecordInput
  }

  export type ExerciseRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesBurned?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUpdateManyWithoutExerciseRecordNestedInput
  }

  export type ExerciseRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesBurned?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutExerciseRecordNestedInput
  }

  export type ExerciseRecordCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesBurned: number
    note?: string | null
    createdAt?: Date | string
  }

  export type ExerciseRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesBurned?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesBurned?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    id?: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
    exerciseRecord: ExerciseRecordCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
    exerciseRecordId: string
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
    exerciseRecord?: ExerciseRecordUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
    exerciseRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseCreateManyInput = {
    id?: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
    exerciseRecordId: string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
    exerciseRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AuthUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    passwordHash?: SortOrder
  }

  export type AuthUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    passwordHash?: SortOrder
  }

  export type AuthUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    passwordHash?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MentalStateCountOrderByAggregateInput = {
    id?: SortOrder
    mood?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MentalStateMaxOrderByAggregateInput = {
    id?: SortOrder
    mood?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type MentalStateMinOrderByAggregateInput = {
    id?: SortOrder
    mood?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumEnergyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelFilter<$PrismaModel> | $Enums.EnergyLevel
  }

  export type PhysicalHabitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sleepHours?: SortOrder
    waterLiters?: SortOrder
    energyLevel?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalHabitAvgOrderByAggregateInput = {
    sleepHours?: SortOrder
    waterLiters?: SortOrder
  }

  export type PhysicalHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sleepHours?: SortOrder
    waterLiters?: SortOrder
    energyLevel?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalHabitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    sleepHours?: SortOrder
    waterLiters?: SortOrder
    energyLevel?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalHabitSumOrderByAggregateInput = {
    sleepHours?: SortOrder
    waterLiters?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEnergyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelWithAggregatesFilter<$PrismaModel> | $Enums.EnergyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnergyLevelFilter<$PrismaModel>
    _max?: NestedEnumEnergyLevelFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesBurned?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseRecordAvgOrderByAggregateInput = {
    caloriesBurned?: SortOrder
  }

  export type ExerciseRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesBurned?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesBurned?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseRecordSumOrderByAggregateInput = {
    caloriesBurned?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type EnumIntensityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.IntensityLevel | EnumIntensityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityLevelFilter<$PrismaModel> | $Enums.IntensityLevel
  }

  export type ExerciseRecordScalarRelationFilter = {
    is?: ExerciseRecordWhereInput
    isNot?: ExerciseRecordWhereInput
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    exerciseRecordId?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    exerciseRecordId?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    exerciseRecordId?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type EnumIntensityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntensityLevel | EnumIntensityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityLevelWithAggregatesFilter<$PrismaModel> | $Enums.IntensityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntensityLevelFilter<$PrismaModel>
    _max?: NestedEnumIntensityLevelFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumMoodFieldUpdateOperationsInput = {
    set?: $Enums.Mood
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEnergyLevelFieldUpdateOperationsInput = {
    set?: $Enums.EnergyLevel
  }

  export type ExerciseCreateNestedManyWithoutExerciseRecordInput = {
    create?: XOR<ExerciseCreateWithoutExerciseRecordInput, ExerciseUncheckedCreateWithoutExerciseRecordInput> | ExerciseCreateWithoutExerciseRecordInput[] | ExerciseUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseRecordInput | ExerciseCreateOrConnectWithoutExerciseRecordInput[]
    createMany?: ExerciseCreateManyExerciseRecordInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutExerciseRecordInput = {
    create?: XOR<ExerciseCreateWithoutExerciseRecordInput, ExerciseUncheckedCreateWithoutExerciseRecordInput> | ExerciseCreateWithoutExerciseRecordInput[] | ExerciseUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseRecordInput | ExerciseCreateOrConnectWithoutExerciseRecordInput[]
    createMany?: ExerciseCreateManyExerciseRecordInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseUpdateManyWithoutExerciseRecordNestedInput = {
    create?: XOR<ExerciseCreateWithoutExerciseRecordInput, ExerciseUncheckedCreateWithoutExerciseRecordInput> | ExerciseCreateWithoutExerciseRecordInput[] | ExerciseUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseRecordInput | ExerciseCreateOrConnectWithoutExerciseRecordInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutExerciseRecordInput | ExerciseUpsertWithWhereUniqueWithoutExerciseRecordInput[]
    createMany?: ExerciseCreateManyExerciseRecordInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutExerciseRecordInput | ExerciseUpdateWithWhereUniqueWithoutExerciseRecordInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutExerciseRecordInput | ExerciseUpdateManyWithWhereWithoutExerciseRecordInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutExerciseRecordNestedInput = {
    create?: XOR<ExerciseCreateWithoutExerciseRecordInput, ExerciseUncheckedCreateWithoutExerciseRecordInput> | ExerciseCreateWithoutExerciseRecordInput[] | ExerciseUncheckedCreateWithoutExerciseRecordInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutExerciseRecordInput | ExerciseCreateOrConnectWithoutExerciseRecordInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutExerciseRecordInput | ExerciseUpsertWithWhereUniqueWithoutExerciseRecordInput[]
    createMany?: ExerciseCreateManyExerciseRecordInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutExerciseRecordInput | ExerciseUpdateWithWhereUniqueWithoutExerciseRecordInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutExerciseRecordInput | ExerciseUpdateManyWithWhereWithoutExerciseRecordInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseRecordCreateNestedOneWithoutExercisesInput = {
    create?: XOR<ExerciseRecordCreateWithoutExercisesInput, ExerciseRecordUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutExercisesInput
    connect?: ExerciseRecordWhereUniqueInput
  }

  export type EnumExerciseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExerciseType
  }

  export type EnumIntensityLevelFieldUpdateOperationsInput = {
    set?: $Enums.IntensityLevel
  }

  export type ExerciseRecordUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<ExerciseRecordCreateWithoutExercisesInput, ExerciseRecordUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseRecordCreateOrConnectWithoutExercisesInput
    upsert?: ExerciseRecordUpsertWithoutExercisesInput
    connect?: ExerciseRecordWhereUniqueInput
    update?: XOR<XOR<ExerciseRecordUpdateToOneWithWhereWithoutExercisesInput, ExerciseRecordUpdateWithoutExercisesInput>, ExerciseRecordUncheckedUpdateWithoutExercisesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEnergyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelFilter<$PrismaModel> | $Enums.EnergyLevel
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEnergyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelWithAggregatesFilter<$PrismaModel> | $Enums.EnergyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnergyLevelFilter<$PrismaModel>
    _max?: NestedEnumEnergyLevelFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
  }

  export type NestedEnumIntensityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.IntensityLevel | EnumIntensityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityLevelFilter<$PrismaModel> | $Enums.IntensityLevel
  }

  export type NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExerciseType[] | ListEnumExerciseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
  }

  export type NestedEnumIntensityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntensityLevel | EnumIntensityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntensityLevel[] | ListEnumIntensityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumIntensityLevelWithAggregatesFilter<$PrismaModel> | $Enums.IntensityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntensityLevelFilter<$PrismaModel>
    _max?: NestedEnumIntensityLevelFilter<$PrismaModel>
  }

  export type ExerciseCreateWithoutExerciseRecordInput = {
    id?: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
  }

  export type ExerciseUncheckedCreateWithoutExerciseRecordInput = {
    id?: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
  }

  export type ExerciseCreateOrConnectWithoutExerciseRecordInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutExerciseRecordInput, ExerciseUncheckedCreateWithoutExerciseRecordInput>
  }

  export type ExerciseCreateManyExerciseRecordInputEnvelope = {
    data: ExerciseCreateManyExerciseRecordInput | ExerciseCreateManyExerciseRecordInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutExerciseRecordInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutExerciseRecordInput, ExerciseUncheckedUpdateWithoutExerciseRecordInput>
    create: XOR<ExerciseCreateWithoutExerciseRecordInput, ExerciseUncheckedCreateWithoutExerciseRecordInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutExerciseRecordInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutExerciseRecordInput, ExerciseUncheckedUpdateWithoutExerciseRecordInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutExerciseRecordInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutExerciseRecordInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: StringFilter<"Exercise"> | string
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    duration?: IntFilter<"Exercise"> | number
    intensity?: EnumIntensityLevelFilter<"Exercise"> | $Enums.IntensityLevel
    exerciseRecordId?: StringFilter<"Exercise"> | string
  }

  export type ExerciseRecordCreateWithoutExercisesInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesBurned: number
    note?: string | null
    createdAt?: Date | string
  }

  export type ExerciseRecordUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesBurned: number
    note?: string | null
    createdAt?: Date | string
  }

  export type ExerciseRecordCreateOrConnectWithoutExercisesInput = {
    where: ExerciseRecordWhereUniqueInput
    create: XOR<ExerciseRecordCreateWithoutExercisesInput, ExerciseRecordUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseRecordUpsertWithoutExercisesInput = {
    update: XOR<ExerciseRecordUpdateWithoutExercisesInput, ExerciseRecordUncheckedUpdateWithoutExercisesInput>
    create: XOR<ExerciseRecordCreateWithoutExercisesInput, ExerciseRecordUncheckedCreateWithoutExercisesInput>
    where?: ExerciseRecordWhereInput
  }

  export type ExerciseRecordUpdateToOneWithWhereWithoutExercisesInput = {
    where?: ExerciseRecordWhereInput
    data: XOR<ExerciseRecordUpdateWithoutExercisesInput, ExerciseRecordUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseRecordUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesBurned?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseRecordUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesBurned?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateManyExerciseRecordInput = {
    id?: string
    type: $Enums.ExerciseType
    duration: number
    intensity: $Enums.IntensityLevel
  }

  export type ExerciseUpdateWithoutExerciseRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
  }

  export type ExerciseUncheckedUpdateWithoutExerciseRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
  }

  export type ExerciseUncheckedUpdateManyWithoutExerciseRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: EnumIntensityLevelFieldUpdateOperationsInput | $Enums.IntensityLevel
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}