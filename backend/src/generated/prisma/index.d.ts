
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model HealthMetric
 * 
 */
export type HealthMetric = $Result.DefaultSelection<Prisma.$HealthMetricPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model SleepRecord
 * 
 */
export type SleepRecord = $Result.DefaultSelection<Prisma.$SleepRecordPayload>
/**
 * Model MoodEntry
 * 
 */
export type MoodEntry = $Result.DefaultSelection<Prisma.$MoodEntryPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MetricType: {
  WEIGHT: 'WEIGHT',
  HEIGHT: 'HEIGHT',
  BLOOD_PRESSURE: 'BLOOD_PRESSURE',
  HEART_RATE: 'HEART_RATE',
  BODY_FAT: 'BODY_FAT',
  MUSCLE_MASS: 'MUSCLE_MASS',
  WATER_INTAKE: 'WATER_INTAKE',
  STEPS: 'STEPS'
};

export type MetricType = (typeof MetricType)[keyof typeof MetricType]


export const WorkoutType: {
  CARDIO: 'CARDIO',
  STRENGTH: 'STRENGTH',
  FLEXIBILITY: 'FLEXIBILITY',
  YOGA: 'YOGA',
  PILATES: 'PILATES',
  SWIMMING: 'SWIMMING',
  RUNNING: 'RUNNING',
  CYCLING: 'CYCLING',
  WALKING: 'WALKING',
  OTHER: 'OTHER'
};

export type WorkoutType = (typeof WorkoutType)[keyof typeof WorkoutType]


export const SleepQuality: {
  POOR: 'POOR',
  FAIR: 'FAIR',
  GOOD: 'GOOD',
  EXCELLENT: 'EXCELLENT'
};

export type SleepQuality = (typeof SleepQuality)[keyof typeof SleepQuality]


export const MoodLevel: {
  VERY_LOW: 'VERY_LOW',
  LOW: 'LOW',
  NEUTRAL: 'NEUTRAL',
  GOOD: 'GOOD',
  VERY_GOOD: 'VERY_GOOD'
};

export type MoodLevel = (typeof MoodLevel)[keyof typeof MoodLevel]


export const EnergyLevel: {
  VERY_LOW: 'VERY_LOW',
  LOW: 'LOW',
  MODERATE: 'MODERATE',
  HIGH: 'HIGH',
  VERY_HIGH: 'VERY_HIGH'
};

export type EnergyLevel = (typeof EnergyLevel)[keyof typeof EnergyLevel]


export const StressLevel: {
  VERY_LOW: 'VERY_LOW',
  LOW: 'LOW',
  MODERATE: 'MODERATE',
  HIGH: 'HIGH',
  VERY_HIGH: 'VERY_HIGH'
};

export type StressLevel = (typeof StressLevel)[keyof typeof StressLevel]


export const GoalType: {
  WEIGHT_LOSS: 'WEIGHT_LOSS',
  WEIGHT_GAIN: 'WEIGHT_GAIN',
  FITNESS: 'FITNESS',
  NUTRITION: 'NUTRITION',
  SLEEP: 'SLEEP',
  MINDFULNESS: 'MINDFULNESS',
  OTHER: 'OTHER'
};

export type GoalType = (typeof GoalType)[keyof typeof GoalType]


export const GoalStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  PAUSED: 'PAUSED',
  CANCELLED: 'CANCELLED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]

}

export type MetricType = $Enums.MetricType

export const MetricType: typeof $Enums.MetricType

export type WorkoutType = $Enums.WorkoutType

export const WorkoutType: typeof $Enums.WorkoutType

export type SleepQuality = $Enums.SleepQuality

export const SleepQuality: typeof $Enums.SleepQuality

export type MoodLevel = $Enums.MoodLevel

export const MoodLevel: typeof $Enums.MoodLevel

export type EnergyLevel = $Enums.EnergyLevel

export const EnergyLevel: typeof $Enums.EnergyLevel

export type StressLevel = $Enums.StressLevel

export const StressLevel: typeof $Enums.StressLevel

export type GoalType = $Enums.GoalType

export const GoalType: typeof $Enums.GoalType

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthMetric`: Exposes CRUD operations for the **HealthMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthMetrics
    * const healthMetrics = await prisma.healthMetric.findMany()
    * ```
    */
  get healthMetric(): Prisma.HealthMetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sleepRecord`: Exposes CRUD operations for the **SleepRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SleepRecords
    * const sleepRecords = await prisma.sleepRecord.findMany()
    * ```
    */
  get sleepRecord(): Prisma.SleepRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodEntry`: Exposes CRUD operations for the **MoodEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodEntries
    * const moodEntries = await prisma.moodEntry.findMany()
    * ```
    */
  get moodEntry(): Prisma.MoodEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    HealthMetric: 'HealthMetric',
    Workout: 'Workout',
    SleepRecord: 'SleepRecord',
    MoodEntry: 'MoodEntry',
    Goal: 'Goal'
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
      modelProps: "authUser" | "user" | "healthMetric" | "workout" | "sleepRecord" | "moodEntry" | "goal"
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
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      HealthMetric: {
        payload: Prisma.$HealthMetricPayload<ExtArgs>
        fields: Prisma.HealthMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          findFirst: {
            args: Prisma.HealthMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          findMany: {
            args: Prisma.HealthMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>[]
          }
          create: {
            args: Prisma.HealthMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          createMany: {
            args: Prisma.HealthMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>[]
          }
          delete: {
            args: Prisma.HealthMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          update: {
            args: Prisma.HealthMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          deleteMany: {
            args: Prisma.HealthMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>[]
          }
          upsert: {
            args: Prisma.HealthMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthMetricPayload>
          }
          aggregate: {
            args: Prisma.HealthMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthMetric>
          }
          groupBy: {
            args: Prisma.HealthMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthMetricCountArgs<ExtArgs>
            result: $Utils.Optional<HealthMetricCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      SleepRecord: {
        payload: Prisma.$SleepRecordPayload<ExtArgs>
        fields: Prisma.SleepRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SleepRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SleepRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>
          }
          findFirst: {
            args: Prisma.SleepRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SleepRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>
          }
          findMany: {
            args: Prisma.SleepRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>[]
          }
          create: {
            args: Prisma.SleepRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>
          }
          createMany: {
            args: Prisma.SleepRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SleepRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>[]
          }
          delete: {
            args: Prisma.SleepRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>
          }
          update: {
            args: Prisma.SleepRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>
          }
          deleteMany: {
            args: Prisma.SleepRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SleepRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SleepRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>[]
          }
          upsert: {
            args: Prisma.SleepRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepRecordPayload>
          }
          aggregate: {
            args: Prisma.SleepRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSleepRecord>
          }
          groupBy: {
            args: Prisma.SleepRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SleepRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SleepRecordCountArgs<ExtArgs>
            result: $Utils.Optional<SleepRecordCountAggregateOutputType> | number
          }
        }
      }
      MoodEntry: {
        payload: Prisma.$MoodEntryPayload<ExtArgs>
        fields: Prisma.MoodEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          findFirst: {
            args: Prisma.MoodEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          findMany: {
            args: Prisma.MoodEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          create: {
            args: Prisma.MoodEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          createMany: {
            args: Prisma.MoodEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          delete: {
            args: Prisma.MoodEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          update: {
            args: Prisma.MoodEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          deleteMany: {
            args: Prisma.MoodEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          upsert: {
            args: Prisma.MoodEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          aggregate: {
            args: Prisma.MoodEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodEntry>
          }
          groupBy: {
            args: Prisma.MoodEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MoodEntryCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
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
    user?: UserOmit
    healthMetric?: HealthMetricOmit
    workout?: WorkoutOmit
    sleepRecord?: SleepRecordOmit
    moodEntry?: MoodEntryOmit
    goal?: GoalOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    healthMetrics: number
    workouts: number
    sleepRecords: number
    moodEntries: number
    goals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthMetrics?: boolean | UserCountOutputTypeCountHealthMetricsArgs
    workouts?: boolean | UserCountOutputTypeCountWorkoutsArgs
    sleepRecords?: boolean | UserCountOutputTypeCountSleepRecordsArgs
    moodEntries?: boolean | UserCountOutputTypeCountMoodEntriesArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthMetricWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSleepRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleepRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoodEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    healthMetrics?: boolean | User$healthMetricsArgs<ExtArgs>
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    sleepRecords?: boolean | User$sleepRecordsArgs<ExtArgs>
    moodEntries?: boolean | User$moodEntriesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthMetrics?: boolean | User$healthMetricsArgs<ExtArgs>
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    sleepRecords?: boolean | User$sleepRecordsArgs<ExtArgs>
    moodEntries?: boolean | User$moodEntriesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      healthMetrics: Prisma.$HealthMetricPayload<ExtArgs>[]
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      sleepRecords: Prisma.$SleepRecordPayload<ExtArgs>[]
      moodEntries: Prisma.$MoodEntryPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    healthMetrics<T extends User$healthMetricsArgs<ExtArgs> = {}>(args?: Subset<T, User$healthMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends User$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sleepRecords<T extends User$sleepRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$sleepRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moodEntries<T extends User$moodEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$moodEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.healthMetrics
   */
  export type User$healthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    where?: HealthMetricWhereInput
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    cursor?: HealthMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * User.workouts
   */
  export type User$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User.sleepRecords
   */
  export type User$sleepRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    where?: SleepRecordWhereInput
    orderBy?: SleepRecordOrderByWithRelationInput | SleepRecordOrderByWithRelationInput[]
    cursor?: SleepRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SleepRecordScalarFieldEnum | SleepRecordScalarFieldEnum[]
  }

  /**
   * User.moodEntries
   */
  export type User$moodEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    cursor?: MoodEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model HealthMetric
   */

  export type AggregateHealthMetric = {
    _count: HealthMetricCountAggregateOutputType | null
    _avg: HealthMetricAvgAggregateOutputType | null
    _sum: HealthMetricSumAggregateOutputType | null
    _min: HealthMetricMinAggregateOutputType | null
    _max: HealthMetricMaxAggregateOutputType | null
  }

  export type HealthMetricAvgAggregateOutputType = {
    value: number | null
  }

  export type HealthMetricSumAggregateOutputType = {
    value: number | null
  }

  export type HealthMetricMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.MetricType | null
    value: number | null
    unit: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type HealthMetricMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.MetricType | null
    value: number | null
    unit: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type HealthMetricCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    value: number
    unit: number
    date: number
    createdAt: number
    _all: number
  }


  export type HealthMetricAvgAggregateInputType = {
    value?: true
  }

  export type HealthMetricSumAggregateInputType = {
    value?: true
  }

  export type HealthMetricMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    unit?: true
    date?: true
    createdAt?: true
  }

  export type HealthMetricMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    unit?: true
    date?: true
    createdAt?: true
  }

  export type HealthMetricCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    unit?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type HealthMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthMetric to aggregate.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthMetrics
    **/
    _count?: true | HealthMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthMetricMaxAggregateInputType
  }

  export type GetHealthMetricAggregateType<T extends HealthMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthMetric[P]>
      : GetScalarType<T[P], AggregateHealthMetric[P]>
  }




  export type HealthMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthMetricWhereInput
    orderBy?: HealthMetricOrderByWithAggregationInput | HealthMetricOrderByWithAggregationInput[]
    by: HealthMetricScalarFieldEnum[] | HealthMetricScalarFieldEnum
    having?: HealthMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthMetricCountAggregateInputType | true
    _avg?: HealthMetricAvgAggregateInputType
    _sum?: HealthMetricSumAggregateInputType
    _min?: HealthMetricMinAggregateInputType
    _max?: HealthMetricMaxAggregateInputType
  }

  export type HealthMetricGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date
    createdAt: Date
    _count: HealthMetricCountAggregateOutputType | null
    _avg: HealthMetricAvgAggregateOutputType | null
    _sum: HealthMetricSumAggregateOutputType | null
    _min: HealthMetricMinAggregateOutputType | null
    _max: HealthMetricMaxAggregateOutputType | null
  }

  type GetHealthMetricGroupByPayload<T extends HealthMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthMetricGroupByOutputType[P]>
            : GetScalarType<T[P], HealthMetricGroupByOutputType[P]>
        }
      >
    >


  export type HealthMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthMetric"]>

  export type HealthMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthMetric"]>

  export type HealthMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthMetric"]>

  export type HealthMetricSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    unit?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type HealthMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "value" | "unit" | "date" | "createdAt", ExtArgs["result"]["healthMetric"]>
  export type HealthMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HealthMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthMetric"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.MetricType
      value: number
      unit: string
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["healthMetric"]>
    composites: {}
  }

  type HealthMetricGetPayload<S extends boolean | null | undefined | HealthMetricDefaultArgs> = $Result.GetResult<Prisma.$HealthMetricPayload, S>

  type HealthMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthMetricCountAggregateInputType | true
    }

  export interface HealthMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthMetric'], meta: { name: 'HealthMetric' } }
    /**
     * Find zero or one HealthMetric that matches the filter.
     * @param {HealthMetricFindUniqueArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthMetricFindUniqueArgs>(args: SelectSubset<T, HealthMetricFindUniqueArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthMetricFindUniqueOrThrowArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricFindFirstArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthMetricFindFirstArgs>(args?: SelectSubset<T, HealthMetricFindFirstArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricFindFirstOrThrowArgs} args - Arguments to find a HealthMetric
     * @example
     * // Get one HealthMetric
     * const healthMetric = await prisma.healthMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthMetrics
     * const healthMetrics = await prisma.healthMetric.findMany()
     * 
     * // Get first 10 HealthMetrics
     * const healthMetrics = await prisma.healthMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthMetricWithIdOnly = await prisma.healthMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthMetricFindManyArgs>(args?: SelectSubset<T, HealthMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthMetric.
     * @param {HealthMetricCreateArgs} args - Arguments to create a HealthMetric.
     * @example
     * // Create one HealthMetric
     * const HealthMetric = await prisma.healthMetric.create({
     *   data: {
     *     // ... data to create a HealthMetric
     *   }
     * })
     * 
     */
    create<T extends HealthMetricCreateArgs>(args: SelectSubset<T, HealthMetricCreateArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthMetrics.
     * @param {HealthMetricCreateManyArgs} args - Arguments to create many HealthMetrics.
     * @example
     * // Create many HealthMetrics
     * const healthMetric = await prisma.healthMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthMetricCreateManyArgs>(args?: SelectSubset<T, HealthMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthMetrics and returns the data saved in the database.
     * @param {HealthMetricCreateManyAndReturnArgs} args - Arguments to create many HealthMetrics.
     * @example
     * // Create many HealthMetrics
     * const healthMetric = await prisma.healthMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthMetrics and only return the `id`
     * const healthMetricWithIdOnly = await prisma.healthMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthMetric.
     * @param {HealthMetricDeleteArgs} args - Arguments to delete one HealthMetric.
     * @example
     * // Delete one HealthMetric
     * const HealthMetric = await prisma.healthMetric.delete({
     *   where: {
     *     // ... filter to delete one HealthMetric
     *   }
     * })
     * 
     */
    delete<T extends HealthMetricDeleteArgs>(args: SelectSubset<T, HealthMetricDeleteArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthMetric.
     * @param {HealthMetricUpdateArgs} args - Arguments to update one HealthMetric.
     * @example
     * // Update one HealthMetric
     * const healthMetric = await prisma.healthMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthMetricUpdateArgs>(args: SelectSubset<T, HealthMetricUpdateArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthMetrics.
     * @param {HealthMetricDeleteManyArgs} args - Arguments to filter HealthMetrics to delete.
     * @example
     * // Delete a few HealthMetrics
     * const { count } = await prisma.healthMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthMetricDeleteManyArgs>(args?: SelectSubset<T, HealthMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthMetrics
     * const healthMetric = await prisma.healthMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthMetricUpdateManyArgs>(args: SelectSubset<T, HealthMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthMetrics and returns the data updated in the database.
     * @param {HealthMetricUpdateManyAndReturnArgs} args - Arguments to update many HealthMetrics.
     * @example
     * // Update many HealthMetrics
     * const healthMetric = await prisma.healthMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthMetrics and only return the `id`
     * const healthMetricWithIdOnly = await prisma.healthMetric.updateManyAndReturn({
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
    updateManyAndReturn<T extends HealthMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthMetric.
     * @param {HealthMetricUpsertArgs} args - Arguments to update or create a HealthMetric.
     * @example
     * // Update or create a HealthMetric
     * const healthMetric = await prisma.healthMetric.upsert({
     *   create: {
     *     // ... data to create a HealthMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthMetric we want to update
     *   }
     * })
     */
    upsert<T extends HealthMetricUpsertArgs>(args: SelectSubset<T, HealthMetricUpsertArgs<ExtArgs>>): Prisma__HealthMetricClient<$Result.GetResult<Prisma.$HealthMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricCountArgs} args - Arguments to filter HealthMetrics to count.
     * @example
     * // Count the number of HealthMetrics
     * const count = await prisma.healthMetric.count({
     *   where: {
     *     // ... the filter for the HealthMetrics we want to count
     *   }
     * })
    **/
    count<T extends HealthMetricCountArgs>(
      args?: Subset<T, HealthMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthMetricAggregateArgs>(args: Subset<T, HealthMetricAggregateArgs>): Prisma.PrismaPromise<GetHealthMetricAggregateType<T>>

    /**
     * Group by HealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthMetricGroupByArgs} args - Group by arguments.
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
      T extends HealthMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthMetricGroupByArgs['orderBy'] }
        : { orderBy?: HealthMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthMetric model
   */
  readonly fields: HealthMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HealthMetric model
   */
  interface HealthMetricFieldRefs {
    readonly id: FieldRef<"HealthMetric", 'String'>
    readonly userId: FieldRef<"HealthMetric", 'String'>
    readonly type: FieldRef<"HealthMetric", 'MetricType'>
    readonly value: FieldRef<"HealthMetric", 'Float'>
    readonly unit: FieldRef<"HealthMetric", 'String'>
    readonly date: FieldRef<"HealthMetric", 'DateTime'>
    readonly createdAt: FieldRef<"HealthMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthMetric findUnique
   */
  export type HealthMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric findUniqueOrThrow
   */
  export type HealthMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric findFirst
   */
  export type HealthMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthMetrics.
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthMetrics.
     */
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * HealthMetric findFirstOrThrow
   */
  export type HealthMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetric to fetch.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthMetrics.
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthMetrics.
     */
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * HealthMetric findMany
   */
  export type HealthMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which HealthMetrics to fetch.
     */
    where?: HealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthMetrics to fetch.
     */
    orderBy?: HealthMetricOrderByWithRelationInput | HealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthMetrics.
     */
    cursor?: HealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthMetrics.
     */
    skip?: number
    distinct?: HealthMetricScalarFieldEnum | HealthMetricScalarFieldEnum[]
  }

  /**
   * HealthMetric create
   */
  export type HealthMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthMetric.
     */
    data: XOR<HealthMetricCreateInput, HealthMetricUncheckedCreateInput>
  }

  /**
   * HealthMetric createMany
   */
  export type HealthMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthMetrics.
     */
    data: HealthMetricCreateManyInput | HealthMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthMetric createManyAndReturn
   */
  export type HealthMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * The data used to create many HealthMetrics.
     */
    data: HealthMetricCreateManyInput | HealthMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthMetric update
   */
  export type HealthMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthMetric.
     */
    data: XOR<HealthMetricUpdateInput, HealthMetricUncheckedUpdateInput>
    /**
     * Choose, which HealthMetric to update.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric updateMany
   */
  export type HealthMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthMetrics.
     */
    data: XOR<HealthMetricUpdateManyMutationInput, HealthMetricUncheckedUpdateManyInput>
    /**
     * Filter which HealthMetrics to update
     */
    where?: HealthMetricWhereInput
    /**
     * Limit how many HealthMetrics to update.
     */
    limit?: number
  }

  /**
   * HealthMetric updateManyAndReturn
   */
  export type HealthMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * The data used to update HealthMetrics.
     */
    data: XOR<HealthMetricUpdateManyMutationInput, HealthMetricUncheckedUpdateManyInput>
    /**
     * Filter which HealthMetrics to update
     */
    where?: HealthMetricWhereInput
    /**
     * Limit how many HealthMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthMetric upsert
   */
  export type HealthMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthMetric to update in case it exists.
     */
    where: HealthMetricWhereUniqueInput
    /**
     * In case the HealthMetric found by the `where` argument doesn't exist, create a new HealthMetric with this data.
     */
    create: XOR<HealthMetricCreateInput, HealthMetricUncheckedCreateInput>
    /**
     * In case the HealthMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthMetricUpdateInput, HealthMetricUncheckedUpdateInput>
  }

  /**
   * HealthMetric delete
   */
  export type HealthMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
    /**
     * Filter which HealthMetric to delete.
     */
    where: HealthMetricWhereUniqueInput
  }

  /**
   * HealthMetric deleteMany
   */
  export type HealthMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthMetrics to delete
     */
    where?: HealthMetricWhereInput
    /**
     * Limit how many HealthMetrics to delete.
     */
    limit?: number
  }

  /**
   * HealthMetric without action
   */
  export type HealthMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthMetric
     */
    select?: HealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthMetric
     */
    omit?: HealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthMetricInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    duration: number | null
    calories: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    duration: number | null
    calories: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.WorkoutType | null
    duration: number | null
    calories: number | null
    notes: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.WorkoutType | null
    duration: number | null
    calories: number | null
    notes: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    duration: number
    calories: number
    notes: number
    date: number
    createdAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    duration?: true
    calories?: true
  }

  export type WorkoutSumAggregateInputType = {
    duration?: true
    calories?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    duration?: true
    calories?: true
    notes?: true
    date?: true
    createdAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    duration?: true
    calories?: true
    notes?: true
    date?: true
    createdAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    duration?: true
    calories?: true
    notes?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories: number | null
    notes: string | null
    date: Date
    createdAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    duration?: boolean
    calories?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    duration?: boolean
    calories?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    duration?: boolean
    calories?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    duration?: boolean
    calories?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "duration" | "calories" | "notes" | "date" | "createdAt", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: $Enums.WorkoutType
      duration: number
      calories: number | null
      notes: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly type: FieldRef<"Workout", 'WorkoutType'>
    readonly duration: FieldRef<"Workout", 'Int'>
    readonly calories: FieldRef<"Workout", 'Int'>
    readonly notes: FieldRef<"Workout", 'String'>
    readonly date: FieldRef<"Workout", 'DateTime'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model SleepRecord
   */

  export type AggregateSleepRecord = {
    _count: SleepRecordCountAggregateOutputType | null
    _avg: SleepRecordAvgAggregateOutputType | null
    _sum: SleepRecordSumAggregateOutputType | null
    _min: SleepRecordMinAggregateOutputType | null
    _max: SleepRecordMaxAggregateOutputType | null
  }

  export type SleepRecordAvgAggregateOutputType = {
    duration: number | null
  }

  export type SleepRecordSumAggregateOutputType = {
    duration: number | null
  }

  export type SleepRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bedtime: Date | null
    wakeTime: Date | null
    duration: number | null
    quality: $Enums.SleepQuality | null
    notes: string | null
    createdAt: Date | null
  }

  export type SleepRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bedtime: Date | null
    wakeTime: Date | null
    duration: number | null
    quality: $Enums.SleepQuality | null
    notes: string | null
    createdAt: Date | null
  }

  export type SleepRecordCountAggregateOutputType = {
    id: number
    userId: number
    bedtime: number
    wakeTime: number
    duration: number
    quality: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SleepRecordAvgAggregateInputType = {
    duration?: true
  }

  export type SleepRecordSumAggregateInputType = {
    duration?: true
  }

  export type SleepRecordMinAggregateInputType = {
    id?: true
    userId?: true
    bedtime?: true
    wakeTime?: true
    duration?: true
    quality?: true
    notes?: true
    createdAt?: true
  }

  export type SleepRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    bedtime?: true
    wakeTime?: true
    duration?: true
    quality?: true
    notes?: true
    createdAt?: true
  }

  export type SleepRecordCountAggregateInputType = {
    id?: true
    userId?: true
    bedtime?: true
    wakeTime?: true
    duration?: true
    quality?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SleepRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SleepRecord to aggregate.
     */
    where?: SleepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepRecords to fetch.
     */
    orderBy?: SleepRecordOrderByWithRelationInput | SleepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SleepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SleepRecords
    **/
    _count?: true | SleepRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SleepRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SleepRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SleepRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SleepRecordMaxAggregateInputType
  }

  export type GetSleepRecordAggregateType<T extends SleepRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSleepRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSleepRecord[P]>
      : GetScalarType<T[P], AggregateSleepRecord[P]>
  }




  export type SleepRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleepRecordWhereInput
    orderBy?: SleepRecordOrderByWithAggregationInput | SleepRecordOrderByWithAggregationInput[]
    by: SleepRecordScalarFieldEnum[] | SleepRecordScalarFieldEnum
    having?: SleepRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SleepRecordCountAggregateInputType | true
    _avg?: SleepRecordAvgAggregateInputType
    _sum?: SleepRecordSumAggregateInputType
    _min?: SleepRecordMinAggregateInputType
    _max?: SleepRecordMaxAggregateInputType
  }

  export type SleepRecordGroupByOutputType = {
    id: string
    userId: string
    bedtime: Date
    wakeTime: Date
    duration: number
    quality: $Enums.SleepQuality
    notes: string | null
    createdAt: Date
    _count: SleepRecordCountAggregateOutputType | null
    _avg: SleepRecordAvgAggregateOutputType | null
    _sum: SleepRecordSumAggregateOutputType | null
    _min: SleepRecordMinAggregateOutputType | null
    _max: SleepRecordMaxAggregateOutputType | null
  }

  type GetSleepRecordGroupByPayload<T extends SleepRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SleepRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SleepRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SleepRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SleepRecordGroupByOutputType[P]>
        }
      >
    >


  export type SleepRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bedtime?: boolean
    wakeTime?: boolean
    duration?: boolean
    quality?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sleepRecord"]>

  export type SleepRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bedtime?: boolean
    wakeTime?: boolean
    duration?: boolean
    quality?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sleepRecord"]>

  export type SleepRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bedtime?: boolean
    wakeTime?: boolean
    duration?: boolean
    quality?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sleepRecord"]>

  export type SleepRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    bedtime?: boolean
    wakeTime?: boolean
    duration?: boolean
    quality?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SleepRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bedtime" | "wakeTime" | "duration" | "quality" | "notes" | "createdAt", ExtArgs["result"]["sleepRecord"]>
  export type SleepRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SleepRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SleepRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SleepRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SleepRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bedtime: Date
      wakeTime: Date
      duration: number
      quality: $Enums.SleepQuality
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["sleepRecord"]>
    composites: {}
  }

  type SleepRecordGetPayload<S extends boolean | null | undefined | SleepRecordDefaultArgs> = $Result.GetResult<Prisma.$SleepRecordPayload, S>

  type SleepRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SleepRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SleepRecordCountAggregateInputType | true
    }

  export interface SleepRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SleepRecord'], meta: { name: 'SleepRecord' } }
    /**
     * Find zero or one SleepRecord that matches the filter.
     * @param {SleepRecordFindUniqueArgs} args - Arguments to find a SleepRecord
     * @example
     * // Get one SleepRecord
     * const sleepRecord = await prisma.sleepRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SleepRecordFindUniqueArgs>(args: SelectSubset<T, SleepRecordFindUniqueArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SleepRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SleepRecordFindUniqueOrThrowArgs} args - Arguments to find a SleepRecord
     * @example
     * // Get one SleepRecord
     * const sleepRecord = await prisma.sleepRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SleepRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, SleepRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SleepRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordFindFirstArgs} args - Arguments to find a SleepRecord
     * @example
     * // Get one SleepRecord
     * const sleepRecord = await prisma.sleepRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SleepRecordFindFirstArgs>(args?: SelectSubset<T, SleepRecordFindFirstArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SleepRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordFindFirstOrThrowArgs} args - Arguments to find a SleepRecord
     * @example
     * // Get one SleepRecord
     * const sleepRecord = await prisma.sleepRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SleepRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, SleepRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SleepRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SleepRecords
     * const sleepRecords = await prisma.sleepRecord.findMany()
     * 
     * // Get first 10 SleepRecords
     * const sleepRecords = await prisma.sleepRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sleepRecordWithIdOnly = await prisma.sleepRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SleepRecordFindManyArgs>(args?: SelectSubset<T, SleepRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SleepRecord.
     * @param {SleepRecordCreateArgs} args - Arguments to create a SleepRecord.
     * @example
     * // Create one SleepRecord
     * const SleepRecord = await prisma.sleepRecord.create({
     *   data: {
     *     // ... data to create a SleepRecord
     *   }
     * })
     * 
     */
    create<T extends SleepRecordCreateArgs>(args: SelectSubset<T, SleepRecordCreateArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SleepRecords.
     * @param {SleepRecordCreateManyArgs} args - Arguments to create many SleepRecords.
     * @example
     * // Create many SleepRecords
     * const sleepRecord = await prisma.sleepRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SleepRecordCreateManyArgs>(args?: SelectSubset<T, SleepRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SleepRecords and returns the data saved in the database.
     * @param {SleepRecordCreateManyAndReturnArgs} args - Arguments to create many SleepRecords.
     * @example
     * // Create many SleepRecords
     * const sleepRecord = await prisma.sleepRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SleepRecords and only return the `id`
     * const sleepRecordWithIdOnly = await prisma.sleepRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SleepRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, SleepRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SleepRecord.
     * @param {SleepRecordDeleteArgs} args - Arguments to delete one SleepRecord.
     * @example
     * // Delete one SleepRecord
     * const SleepRecord = await prisma.sleepRecord.delete({
     *   where: {
     *     // ... filter to delete one SleepRecord
     *   }
     * })
     * 
     */
    delete<T extends SleepRecordDeleteArgs>(args: SelectSubset<T, SleepRecordDeleteArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SleepRecord.
     * @param {SleepRecordUpdateArgs} args - Arguments to update one SleepRecord.
     * @example
     * // Update one SleepRecord
     * const sleepRecord = await prisma.sleepRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SleepRecordUpdateArgs>(args: SelectSubset<T, SleepRecordUpdateArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SleepRecords.
     * @param {SleepRecordDeleteManyArgs} args - Arguments to filter SleepRecords to delete.
     * @example
     * // Delete a few SleepRecords
     * const { count } = await prisma.sleepRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SleepRecordDeleteManyArgs>(args?: SelectSubset<T, SleepRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SleepRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SleepRecords
     * const sleepRecord = await prisma.sleepRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SleepRecordUpdateManyArgs>(args: SelectSubset<T, SleepRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SleepRecords and returns the data updated in the database.
     * @param {SleepRecordUpdateManyAndReturnArgs} args - Arguments to update many SleepRecords.
     * @example
     * // Update many SleepRecords
     * const sleepRecord = await prisma.sleepRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SleepRecords and only return the `id`
     * const sleepRecordWithIdOnly = await prisma.sleepRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends SleepRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, SleepRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SleepRecord.
     * @param {SleepRecordUpsertArgs} args - Arguments to update or create a SleepRecord.
     * @example
     * // Update or create a SleepRecord
     * const sleepRecord = await prisma.sleepRecord.upsert({
     *   create: {
     *     // ... data to create a SleepRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SleepRecord we want to update
     *   }
     * })
     */
    upsert<T extends SleepRecordUpsertArgs>(args: SelectSubset<T, SleepRecordUpsertArgs<ExtArgs>>): Prisma__SleepRecordClient<$Result.GetResult<Prisma.$SleepRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SleepRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordCountArgs} args - Arguments to filter SleepRecords to count.
     * @example
     * // Count the number of SleepRecords
     * const count = await prisma.sleepRecord.count({
     *   where: {
     *     // ... the filter for the SleepRecords we want to count
     *   }
     * })
    **/
    count<T extends SleepRecordCountArgs>(
      args?: Subset<T, SleepRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SleepRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SleepRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SleepRecordAggregateArgs>(args: Subset<T, SleepRecordAggregateArgs>): Prisma.PrismaPromise<GetSleepRecordAggregateType<T>>

    /**
     * Group by SleepRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepRecordGroupByArgs} args - Group by arguments.
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
      T extends SleepRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SleepRecordGroupByArgs['orderBy'] }
        : { orderBy?: SleepRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SleepRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSleepRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SleepRecord model
   */
  readonly fields: SleepRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SleepRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SleepRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SleepRecord model
   */
  interface SleepRecordFieldRefs {
    readonly id: FieldRef<"SleepRecord", 'String'>
    readonly userId: FieldRef<"SleepRecord", 'String'>
    readonly bedtime: FieldRef<"SleepRecord", 'DateTime'>
    readonly wakeTime: FieldRef<"SleepRecord", 'DateTime'>
    readonly duration: FieldRef<"SleepRecord", 'Float'>
    readonly quality: FieldRef<"SleepRecord", 'SleepQuality'>
    readonly notes: FieldRef<"SleepRecord", 'String'>
    readonly createdAt: FieldRef<"SleepRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SleepRecord findUnique
   */
  export type SleepRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * Filter, which SleepRecord to fetch.
     */
    where: SleepRecordWhereUniqueInput
  }

  /**
   * SleepRecord findUniqueOrThrow
   */
  export type SleepRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * Filter, which SleepRecord to fetch.
     */
    where: SleepRecordWhereUniqueInput
  }

  /**
   * SleepRecord findFirst
   */
  export type SleepRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * Filter, which SleepRecord to fetch.
     */
    where?: SleepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepRecords to fetch.
     */
    orderBy?: SleepRecordOrderByWithRelationInput | SleepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SleepRecords.
     */
    cursor?: SleepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SleepRecords.
     */
    distinct?: SleepRecordScalarFieldEnum | SleepRecordScalarFieldEnum[]
  }

  /**
   * SleepRecord findFirstOrThrow
   */
  export type SleepRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * Filter, which SleepRecord to fetch.
     */
    where?: SleepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepRecords to fetch.
     */
    orderBy?: SleepRecordOrderByWithRelationInput | SleepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SleepRecords.
     */
    cursor?: SleepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SleepRecords.
     */
    distinct?: SleepRecordScalarFieldEnum | SleepRecordScalarFieldEnum[]
  }

  /**
   * SleepRecord findMany
   */
  export type SleepRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * Filter, which SleepRecords to fetch.
     */
    where?: SleepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepRecords to fetch.
     */
    orderBy?: SleepRecordOrderByWithRelationInput | SleepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SleepRecords.
     */
    cursor?: SleepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepRecords.
     */
    skip?: number
    distinct?: SleepRecordScalarFieldEnum | SleepRecordScalarFieldEnum[]
  }

  /**
   * SleepRecord create
   */
  export type SleepRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a SleepRecord.
     */
    data: XOR<SleepRecordCreateInput, SleepRecordUncheckedCreateInput>
  }

  /**
   * SleepRecord createMany
   */
  export type SleepRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SleepRecords.
     */
    data: SleepRecordCreateManyInput | SleepRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SleepRecord createManyAndReturn
   */
  export type SleepRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * The data used to create many SleepRecords.
     */
    data: SleepRecordCreateManyInput | SleepRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SleepRecord update
   */
  export type SleepRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a SleepRecord.
     */
    data: XOR<SleepRecordUpdateInput, SleepRecordUncheckedUpdateInput>
    /**
     * Choose, which SleepRecord to update.
     */
    where: SleepRecordWhereUniqueInput
  }

  /**
   * SleepRecord updateMany
   */
  export type SleepRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SleepRecords.
     */
    data: XOR<SleepRecordUpdateManyMutationInput, SleepRecordUncheckedUpdateManyInput>
    /**
     * Filter which SleepRecords to update
     */
    where?: SleepRecordWhereInput
    /**
     * Limit how many SleepRecords to update.
     */
    limit?: number
  }

  /**
   * SleepRecord updateManyAndReturn
   */
  export type SleepRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * The data used to update SleepRecords.
     */
    data: XOR<SleepRecordUpdateManyMutationInput, SleepRecordUncheckedUpdateManyInput>
    /**
     * Filter which SleepRecords to update
     */
    where?: SleepRecordWhereInput
    /**
     * Limit how many SleepRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SleepRecord upsert
   */
  export type SleepRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the SleepRecord to update in case it exists.
     */
    where: SleepRecordWhereUniqueInput
    /**
     * In case the SleepRecord found by the `where` argument doesn't exist, create a new SleepRecord with this data.
     */
    create: XOR<SleepRecordCreateInput, SleepRecordUncheckedCreateInput>
    /**
     * In case the SleepRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SleepRecordUpdateInput, SleepRecordUncheckedUpdateInput>
  }

  /**
   * SleepRecord delete
   */
  export type SleepRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
    /**
     * Filter which SleepRecord to delete.
     */
    where: SleepRecordWhereUniqueInput
  }

  /**
   * SleepRecord deleteMany
   */
  export type SleepRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SleepRecords to delete
     */
    where?: SleepRecordWhereInput
    /**
     * Limit how many SleepRecords to delete.
     */
    limit?: number
  }

  /**
   * SleepRecord without action
   */
  export type SleepRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepRecord
     */
    select?: SleepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepRecord
     */
    omit?: SleepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepRecordInclude<ExtArgs> | null
  }


  /**
   * Model MoodEntry
   */

  export type AggregateMoodEntry = {
    _count: MoodEntryCountAggregateOutputType | null
    _min: MoodEntryMinAggregateOutputType | null
    _max: MoodEntryMaxAggregateOutputType | null
  }

  export type MoodEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mood: $Enums.MoodLevel | null
    energy: $Enums.EnergyLevel | null
    stress: $Enums.StressLevel | null
    notes: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type MoodEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mood: $Enums.MoodLevel | null
    energy: $Enums.EnergyLevel | null
    stress: $Enums.StressLevel | null
    notes: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type MoodEntryCountAggregateOutputType = {
    id: number
    userId: number
    mood: number
    energy: number
    stress: number
    notes: number
    date: number
    createdAt: number
    _all: number
  }


  export type MoodEntryMinAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    energy?: true
    stress?: true
    notes?: true
    date?: true
    createdAt?: true
  }

  export type MoodEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    energy?: true
    stress?: true
    notes?: true
    date?: true
    createdAt?: true
  }

  export type MoodEntryCountAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    energy?: true
    stress?: true
    notes?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type MoodEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEntry to aggregate.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodEntries
    **/
    _count?: true | MoodEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodEntryMaxAggregateInputType
  }

  export type GetMoodEntryAggregateType<T extends MoodEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodEntry[P]>
      : GetScalarType<T[P], AggregateMoodEntry[P]>
  }




  export type MoodEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithAggregationInput | MoodEntryOrderByWithAggregationInput[]
    by: MoodEntryScalarFieldEnum[] | MoodEntryScalarFieldEnum
    having?: MoodEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodEntryCountAggregateInputType | true
    _min?: MoodEntryMinAggregateInputType
    _max?: MoodEntryMaxAggregateInputType
  }

  export type MoodEntryGroupByOutputType = {
    id: string
    userId: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes: string | null
    date: Date
    createdAt: Date
    _count: MoodEntryCountAggregateOutputType | null
    _min: MoodEntryMinAggregateOutputType | null
    _max: MoodEntryMaxAggregateOutputType | null
  }

  type GetMoodEntryGroupByPayload<T extends MoodEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MoodEntryGroupByOutputType[P]>
        }
      >
    >


  export type MoodEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    energy?: boolean
    stress?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    energy?: boolean
    stress?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    energy?: boolean
    stress?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    mood?: boolean
    energy?: boolean
    stress?: boolean
    notes?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type MoodEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mood" | "energy" | "stress" | "notes" | "date" | "createdAt", ExtArgs["result"]["moodEntry"]>
  export type MoodEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mood: $Enums.MoodLevel
      energy: $Enums.EnergyLevel
      stress: $Enums.StressLevel
      notes: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["moodEntry"]>
    composites: {}
  }

  type MoodEntryGetPayload<S extends boolean | null | undefined | MoodEntryDefaultArgs> = $Result.GetResult<Prisma.$MoodEntryPayload, S>

  type MoodEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodEntryCountAggregateInputType | true
    }

  export interface MoodEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodEntry'], meta: { name: 'MoodEntry' } }
    /**
     * Find zero or one MoodEntry that matches the filter.
     * @param {MoodEntryFindUniqueArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodEntryFindUniqueArgs>(args: SelectSubset<T, MoodEntryFindUniqueArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodEntryFindUniqueOrThrowArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindFirstArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodEntryFindFirstArgs>(args?: SelectSubset<T, MoodEntryFindFirstArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindFirstOrThrowArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodEntries
     * const moodEntries = await prisma.moodEntry.findMany()
     * 
     * // Get first 10 MoodEntries
     * const moodEntries = await prisma.moodEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodEntryFindManyArgs>(args?: SelectSubset<T, MoodEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodEntry.
     * @param {MoodEntryCreateArgs} args - Arguments to create a MoodEntry.
     * @example
     * // Create one MoodEntry
     * const MoodEntry = await prisma.moodEntry.create({
     *   data: {
     *     // ... data to create a MoodEntry
     *   }
     * })
     * 
     */
    create<T extends MoodEntryCreateArgs>(args: SelectSubset<T, MoodEntryCreateArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodEntries.
     * @param {MoodEntryCreateManyArgs} args - Arguments to create many MoodEntries.
     * @example
     * // Create many MoodEntries
     * const moodEntry = await prisma.moodEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodEntryCreateManyArgs>(args?: SelectSubset<T, MoodEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodEntries and returns the data saved in the database.
     * @param {MoodEntryCreateManyAndReturnArgs} args - Arguments to create many MoodEntries.
     * @example
     * // Create many MoodEntries
     * const moodEntry = await prisma.moodEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodEntries and only return the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodEntry.
     * @param {MoodEntryDeleteArgs} args - Arguments to delete one MoodEntry.
     * @example
     * // Delete one MoodEntry
     * const MoodEntry = await prisma.moodEntry.delete({
     *   where: {
     *     // ... filter to delete one MoodEntry
     *   }
     * })
     * 
     */
    delete<T extends MoodEntryDeleteArgs>(args: SelectSubset<T, MoodEntryDeleteArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodEntry.
     * @param {MoodEntryUpdateArgs} args - Arguments to update one MoodEntry.
     * @example
     * // Update one MoodEntry
     * const moodEntry = await prisma.moodEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodEntryUpdateArgs>(args: SelectSubset<T, MoodEntryUpdateArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodEntries.
     * @param {MoodEntryDeleteManyArgs} args - Arguments to filter MoodEntries to delete.
     * @example
     * // Delete a few MoodEntries
     * const { count } = await prisma.moodEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodEntryDeleteManyArgs>(args?: SelectSubset<T, MoodEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodEntries
     * const moodEntry = await prisma.moodEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodEntryUpdateManyArgs>(args: SelectSubset<T, MoodEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEntries and returns the data updated in the database.
     * @param {MoodEntryUpdateManyAndReturnArgs} args - Arguments to update many MoodEntries.
     * @example
     * // Update many MoodEntries
     * const moodEntry = await prisma.moodEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodEntries and only return the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoodEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodEntry.
     * @param {MoodEntryUpsertArgs} args - Arguments to update or create a MoodEntry.
     * @example
     * // Update or create a MoodEntry
     * const moodEntry = await prisma.moodEntry.upsert({
     *   create: {
     *     // ... data to create a MoodEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodEntry we want to update
     *   }
     * })
     */
    upsert<T extends MoodEntryUpsertArgs>(args: SelectSubset<T, MoodEntryUpsertArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryCountArgs} args - Arguments to filter MoodEntries to count.
     * @example
     * // Count the number of MoodEntries
     * const count = await prisma.moodEntry.count({
     *   where: {
     *     // ... the filter for the MoodEntries we want to count
     *   }
     * })
    **/
    count<T extends MoodEntryCountArgs>(
      args?: Subset<T, MoodEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodEntryAggregateArgs>(args: Subset<T, MoodEntryAggregateArgs>): Prisma.PrismaPromise<GetMoodEntryAggregateType<T>>

    /**
     * Group by MoodEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryGroupByArgs} args - Group by arguments.
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
      T extends MoodEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodEntryGroupByArgs['orderBy'] }
        : { orderBy?: MoodEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoodEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodEntry model
   */
  readonly fields: MoodEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MoodEntry model
   */
  interface MoodEntryFieldRefs {
    readonly id: FieldRef<"MoodEntry", 'String'>
    readonly userId: FieldRef<"MoodEntry", 'String'>
    readonly mood: FieldRef<"MoodEntry", 'MoodLevel'>
    readonly energy: FieldRef<"MoodEntry", 'EnergyLevel'>
    readonly stress: FieldRef<"MoodEntry", 'StressLevel'>
    readonly notes: FieldRef<"MoodEntry", 'String'>
    readonly date: FieldRef<"MoodEntry", 'DateTime'>
    readonly createdAt: FieldRef<"MoodEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoodEntry findUnique
   */
  export type MoodEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry findUniqueOrThrow
   */
  export type MoodEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry findFirst
   */
  export type MoodEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEntries.
     */
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry findFirstOrThrow
   */
  export type MoodEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEntries.
     */
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry findMany
   */
  export type MoodEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntries to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry create
   */
  export type MoodEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodEntry.
     */
    data: XOR<MoodEntryCreateInput, MoodEntryUncheckedCreateInput>
  }

  /**
   * MoodEntry createMany
   */
  export type MoodEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodEntries.
     */
    data: MoodEntryCreateManyInput | MoodEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodEntry createManyAndReturn
   */
  export type MoodEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * The data used to create many MoodEntries.
     */
    data: MoodEntryCreateManyInput | MoodEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEntry update
   */
  export type MoodEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodEntry.
     */
    data: XOR<MoodEntryUpdateInput, MoodEntryUncheckedUpdateInput>
    /**
     * Choose, which MoodEntry to update.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry updateMany
   */
  export type MoodEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodEntries.
     */
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyInput>
    /**
     * Filter which MoodEntries to update
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to update.
     */
    limit?: number
  }

  /**
   * MoodEntry updateManyAndReturn
   */
  export type MoodEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * The data used to update MoodEntries.
     */
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyInput>
    /**
     * Filter which MoodEntries to update
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEntry upsert
   */
  export type MoodEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodEntry to update in case it exists.
     */
    where: MoodEntryWhereUniqueInput
    /**
     * In case the MoodEntry found by the `where` argument doesn't exist, create a new MoodEntry with this data.
     */
    create: XOR<MoodEntryCreateInput, MoodEntryUncheckedCreateInput>
    /**
     * In case the MoodEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodEntryUpdateInput, MoodEntryUncheckedUpdateInput>
  }

  /**
   * MoodEntry delete
   */
  export type MoodEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter which MoodEntry to delete.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry deleteMany
   */
  export type MoodEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEntries to delete
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to delete.
     */
    limit?: number
  }

  /**
   * MoodEntry without action
   */
  export type MoodEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    target: number | null
    current: number | null
  }

  export type GoalSumAggregateOutputType = {
    target: number | null
    current: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    type: $Enums.GoalType | null
    target: number | null
    current: number | null
    unit: string | null
    deadline: Date | null
    status: $Enums.GoalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    type: $Enums.GoalType | null
    target: number | null
    current: number | null
    unit: string | null
    deadline: Date | null
    status: $Enums.GoalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    type: number
    target: number
    current: number
    unit: number
    deadline: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    target?: true
    current?: true
  }

  export type GoalSumAggregateInputType = {
    target?: true
    current?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    target?: true
    current?: true
    unit?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    target?: true
    current?: true
    unit?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    target?: true
    current?: true
    unit?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    type: $Enums.GoalType
    target: number
    current: number
    unit: string
    deadline: Date | null
    status: $Enums.GoalStatus
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "type" | "target" | "current" | "unit" | "deadline" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      type: $Enums.GoalType
      target: number
      current: number
      unit: string
      deadline: Date | null
      status: $Enums.GoalStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly type: FieldRef<"Goal", 'GoalType'>
    readonly target: FieldRef<"Goal", 'Float'>
    readonly current: FieldRef<"Goal", 'Float'>
    readonly unit: FieldRef<"Goal", 'String'>
    readonly deadline: FieldRef<"Goal", 'DateTime'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HealthMetricScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    value: 'value',
    unit: 'unit',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type HealthMetricScalarFieldEnum = (typeof HealthMetricScalarFieldEnum)[keyof typeof HealthMetricScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    duration: 'duration',
    calories: 'calories',
    notes: 'notes',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const SleepRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bedtime: 'bedtime',
    wakeTime: 'wakeTime',
    duration: 'duration',
    quality: 'quality',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SleepRecordScalarFieldEnum = (typeof SleepRecordScalarFieldEnum)[keyof typeof SleepRecordScalarFieldEnum]


  export const MoodEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mood: 'mood',
    energy: 'energy',
    stress: 'stress',
    notes: 'notes',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type MoodEntryScalarFieldEnum = (typeof MoodEntryScalarFieldEnum)[keyof typeof MoodEntryScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    type: 'type',
    target: 'target',
    current: 'current',
    unit: 'unit',
    deadline: 'deadline',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MetricType'
   */
  export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>
    


  /**
   * Reference to a field of type 'MetricType[]'
   */
  export type ListEnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'WorkoutType'
   */
  export type EnumWorkoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutType'>
    


  /**
   * Reference to a field of type 'WorkoutType[]'
   */
  export type ListEnumWorkoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SleepQuality'
   */
  export type EnumSleepQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SleepQuality'>
    


  /**
   * Reference to a field of type 'SleepQuality[]'
   */
  export type ListEnumSleepQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SleepQuality[]'>
    


  /**
   * Reference to a field of type 'MoodLevel'
   */
  export type EnumMoodLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodLevel'>
    


  /**
   * Reference to a field of type 'MoodLevel[]'
   */
  export type ListEnumMoodLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodLevel[]'>
    


  /**
   * Reference to a field of type 'EnergyLevel'
   */
  export type EnumEnergyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyLevel'>
    


  /**
   * Reference to a field of type 'EnergyLevel[]'
   */
  export type ListEnumEnergyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyLevel[]'>
    


  /**
   * Reference to a field of type 'StressLevel'
   */
  export type EnumStressLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StressLevel'>
    


  /**
   * Reference to a field of type 'StressLevel[]'
   */
  export type ListEnumStressLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StressLevel[]'>
    


  /**
   * Reference to a field of type 'GoalType'
   */
  export type EnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType'>
    


  /**
   * Reference to a field of type 'GoalType[]'
   */
  export type ListEnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    
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

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    healthMetrics?: HealthMetricListRelationFilter
    workouts?: WorkoutListRelationFilter
    sleepRecords?: SleepRecordListRelationFilter
    moodEntries?: MoodEntryListRelationFilter
    goals?: GoalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    healthMetrics?: HealthMetricOrderByRelationAggregateInput
    workouts?: WorkoutOrderByRelationAggregateInput
    sleepRecords?: SleepRecordOrderByRelationAggregateInput
    moodEntries?: MoodEntryOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    healthMetrics?: HealthMetricListRelationFilter
    workouts?: WorkoutListRelationFilter
    sleepRecords?: SleepRecordListRelationFilter
    moodEntries?: MoodEntryListRelationFilter
    goals?: GoalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HealthMetricWhereInput = {
    AND?: HealthMetricWhereInput | HealthMetricWhereInput[]
    OR?: HealthMetricWhereInput[]
    NOT?: HealthMetricWhereInput | HealthMetricWhereInput[]
    id?: StringFilter<"HealthMetric"> | string
    userId?: StringFilter<"HealthMetric"> | string
    type?: EnumMetricTypeFilter<"HealthMetric"> | $Enums.MetricType
    value?: FloatFilter<"HealthMetric"> | number
    unit?: StringFilter<"HealthMetric"> | string
    date?: DateTimeFilter<"HealthMetric"> | Date | string
    createdAt?: DateTimeFilter<"HealthMetric"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HealthMetricOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HealthMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HealthMetricWhereInput | HealthMetricWhereInput[]
    OR?: HealthMetricWhereInput[]
    NOT?: HealthMetricWhereInput | HealthMetricWhereInput[]
    userId?: StringFilter<"HealthMetric"> | string
    type?: EnumMetricTypeFilter<"HealthMetric"> | $Enums.MetricType
    value?: FloatFilter<"HealthMetric"> | number
    unit?: StringFilter<"HealthMetric"> | string
    date?: DateTimeFilter<"HealthMetric"> | Date | string
    createdAt?: DateTimeFilter<"HealthMetric"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HealthMetricOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: HealthMetricCountOrderByAggregateInput
    _avg?: HealthMetricAvgOrderByAggregateInput
    _max?: HealthMetricMaxOrderByAggregateInput
    _min?: HealthMetricMinOrderByAggregateInput
    _sum?: HealthMetricSumOrderByAggregateInput
  }

  export type HealthMetricScalarWhereWithAggregatesInput = {
    AND?: HealthMetricScalarWhereWithAggregatesInput | HealthMetricScalarWhereWithAggregatesInput[]
    OR?: HealthMetricScalarWhereWithAggregatesInput[]
    NOT?: HealthMetricScalarWhereWithAggregatesInput | HealthMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HealthMetric"> | string
    userId?: StringWithAggregatesFilter<"HealthMetric"> | string
    type?: EnumMetricTypeWithAggregatesFilter<"HealthMetric"> | $Enums.MetricType
    value?: FloatWithAggregatesFilter<"HealthMetric"> | number
    unit?: StringWithAggregatesFilter<"HealthMetric"> | string
    date?: DateTimeWithAggregatesFilter<"HealthMetric"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"HealthMetric"> | Date | string
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    type?: EnumWorkoutTypeFilter<"Workout"> | $Enums.WorkoutType
    duration?: IntFilter<"Workout"> | number
    calories?: IntNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    date?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    calories?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    userId?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    type?: EnumWorkoutTypeFilter<"Workout"> | $Enums.WorkoutType
    duration?: IntFilter<"Workout"> | number
    calories?: IntNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    date?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    calories?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    userId?: StringWithAggregatesFilter<"Workout"> | string
    name?: StringWithAggregatesFilter<"Workout"> | string
    type?: EnumWorkoutTypeWithAggregatesFilter<"Workout"> | $Enums.WorkoutType
    duration?: IntWithAggregatesFilter<"Workout"> | number
    calories?: IntNullableWithAggregatesFilter<"Workout"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    date?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type SleepRecordWhereInput = {
    AND?: SleepRecordWhereInput | SleepRecordWhereInput[]
    OR?: SleepRecordWhereInput[]
    NOT?: SleepRecordWhereInput | SleepRecordWhereInput[]
    id?: StringFilter<"SleepRecord"> | string
    userId?: StringFilter<"SleepRecord"> | string
    bedtime?: DateTimeFilter<"SleepRecord"> | Date | string
    wakeTime?: DateTimeFilter<"SleepRecord"> | Date | string
    duration?: FloatFilter<"SleepRecord"> | number
    quality?: EnumSleepQualityFilter<"SleepRecord"> | $Enums.SleepQuality
    notes?: StringNullableFilter<"SleepRecord"> | string | null
    createdAt?: DateTimeFilter<"SleepRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SleepRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bedtime?: SortOrder
    wakeTime?: SortOrder
    duration?: SortOrder
    quality?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SleepRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SleepRecordWhereInput | SleepRecordWhereInput[]
    OR?: SleepRecordWhereInput[]
    NOT?: SleepRecordWhereInput | SleepRecordWhereInput[]
    userId?: StringFilter<"SleepRecord"> | string
    bedtime?: DateTimeFilter<"SleepRecord"> | Date | string
    wakeTime?: DateTimeFilter<"SleepRecord"> | Date | string
    duration?: FloatFilter<"SleepRecord"> | number
    quality?: EnumSleepQualityFilter<"SleepRecord"> | $Enums.SleepQuality
    notes?: StringNullableFilter<"SleepRecord"> | string | null
    createdAt?: DateTimeFilter<"SleepRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SleepRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bedtime?: SortOrder
    wakeTime?: SortOrder
    duration?: SortOrder
    quality?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SleepRecordCountOrderByAggregateInput
    _avg?: SleepRecordAvgOrderByAggregateInput
    _max?: SleepRecordMaxOrderByAggregateInput
    _min?: SleepRecordMinOrderByAggregateInput
    _sum?: SleepRecordSumOrderByAggregateInput
  }

  export type SleepRecordScalarWhereWithAggregatesInput = {
    AND?: SleepRecordScalarWhereWithAggregatesInput | SleepRecordScalarWhereWithAggregatesInput[]
    OR?: SleepRecordScalarWhereWithAggregatesInput[]
    NOT?: SleepRecordScalarWhereWithAggregatesInput | SleepRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SleepRecord"> | string
    userId?: StringWithAggregatesFilter<"SleepRecord"> | string
    bedtime?: DateTimeWithAggregatesFilter<"SleepRecord"> | Date | string
    wakeTime?: DateTimeWithAggregatesFilter<"SleepRecord"> | Date | string
    duration?: FloatWithAggregatesFilter<"SleepRecord"> | number
    quality?: EnumSleepQualityWithAggregatesFilter<"SleepRecord"> | $Enums.SleepQuality
    notes?: StringNullableWithAggregatesFilter<"SleepRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SleepRecord"> | Date | string
  }

  export type MoodEntryWhereInput = {
    AND?: MoodEntryWhereInput | MoodEntryWhereInput[]
    OR?: MoodEntryWhereInput[]
    NOT?: MoodEntryWhereInput | MoodEntryWhereInput[]
    id?: StringFilter<"MoodEntry"> | string
    userId?: StringFilter<"MoodEntry"> | string
    mood?: EnumMoodLevelFilter<"MoodEntry"> | $Enums.MoodLevel
    energy?: EnumEnergyLevelFilter<"MoodEntry"> | $Enums.EnergyLevel
    stress?: EnumStressLevelFilter<"MoodEntry"> | $Enums.StressLevel
    notes?: StringNullableFilter<"MoodEntry"> | string | null
    date?: DateTimeFilter<"MoodEntry"> | Date | string
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoodEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    energy?: SortOrder
    stress?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoodEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodEntryWhereInput | MoodEntryWhereInput[]
    OR?: MoodEntryWhereInput[]
    NOT?: MoodEntryWhereInput | MoodEntryWhereInput[]
    userId?: StringFilter<"MoodEntry"> | string
    mood?: EnumMoodLevelFilter<"MoodEntry"> | $Enums.MoodLevel
    energy?: EnumEnergyLevelFilter<"MoodEntry"> | $Enums.EnergyLevel
    stress?: EnumStressLevelFilter<"MoodEntry"> | $Enums.StressLevel
    notes?: StringNullableFilter<"MoodEntry"> | string | null
    date?: DateTimeFilter<"MoodEntry"> | Date | string
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MoodEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    energy?: SortOrder
    stress?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: MoodEntryCountOrderByAggregateInput
    _max?: MoodEntryMaxOrderByAggregateInput
    _min?: MoodEntryMinOrderByAggregateInput
  }

  export type MoodEntryScalarWhereWithAggregatesInput = {
    AND?: MoodEntryScalarWhereWithAggregatesInput | MoodEntryScalarWhereWithAggregatesInput[]
    OR?: MoodEntryScalarWhereWithAggregatesInput[]
    NOT?: MoodEntryScalarWhereWithAggregatesInput | MoodEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodEntry"> | string
    userId?: StringWithAggregatesFilter<"MoodEntry"> | string
    mood?: EnumMoodLevelWithAggregatesFilter<"MoodEntry"> | $Enums.MoodLevel
    energy?: EnumEnergyLevelWithAggregatesFilter<"MoodEntry"> | $Enums.EnergyLevel
    stress?: EnumStressLevelWithAggregatesFilter<"MoodEntry"> | $Enums.StressLevel
    notes?: StringNullableWithAggregatesFilter<"MoodEntry"> | string | null
    date?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    target?: FloatFilter<"Goal"> | number
    current?: FloatFilter<"Goal"> | number
    unit?: StringFilter<"Goal"> | string
    deadline?: DateTimeNullableFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    target?: FloatFilter<"Goal"> | number
    current?: FloatFilter<"Goal"> | number
    unit?: StringFilter<"Goal"> | string
    deadline?: DateTimeNullableFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    type?: EnumGoalTypeWithAggregatesFilter<"Goal"> | $Enums.GoalType
    target?: FloatWithAggregatesFilter<"Goal"> | number
    current?: FloatWithAggregatesFilter<"Goal"> | number
    unit?: StringWithAggregatesFilter<"Goal"> | string
    deadline?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
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

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordUncheckedCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUncheckedUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricCreateInput = {
    id?: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHealthMetricsInput
  }

  export type HealthMetricUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date | string
    createdAt?: Date | string
  }

  export type HealthMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHealthMetricsNestedInput
  }

  export type HealthMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date | string
    createdAt?: Date | string
  }

  export type HealthMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateInput = {
    id?: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories?: number | null
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories?: number | null
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories?: number | null
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepRecordCreateInput = {
    id?: string
    bedtime: Date | string
    wakeTime: Date | string
    duration: number
    quality: $Enums.SleepQuality
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSleepRecordsInput
  }

  export type SleepRecordUncheckedCreateInput = {
    id?: string
    userId: string
    bedtime: Date | string
    wakeTime: Date | string
    duration: number
    quality: $Enums.SleepQuality
    notes?: string | null
    createdAt?: Date | string
  }

  export type SleepRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSleepRecordsNestedInput
  }

  export type SleepRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepRecordCreateManyInput = {
    id?: string
    userId: string
    bedtime: Date | string
    wakeTime: Date | string
    duration: number
    quality: $Enums.SleepQuality
    notes?: string | null
    createdAt?: Date | string
  }

  export type SleepRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryCreateInput = {
    id?: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMoodEntriesInput
  }

  export type MoodEntryUncheckedCreateInput = {
    id?: string
    userId: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type MoodEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoodEntriesNestedInput
  }

  export type MoodEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryCreateManyInput = {
    id?: string
    userId: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type MoodEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.GoalType
    target: number
    current?: number
    unit: string
    deadline?: Date | string | null
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type: $Enums.GoalType
    target: number
    current?: number
    unit: string
    deadline?: Date | string | null
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type: $Enums.GoalType
    target: number
    current?: number
    unit: string
    deadline?: Date | string | null
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type HealthMetricListRelationFilter = {
    every?: HealthMetricWhereInput
    some?: HealthMetricWhereInput
    none?: HealthMetricWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type SleepRecordListRelationFilter = {
    every?: SleepRecordWhereInput
    some?: SleepRecordWhereInput
    none?: SleepRecordWhereInput
  }

  export type MoodEntryListRelationFilter = {
    every?: MoodEntryWhereInput
    some?: MoodEntryWhereInput
    none?: MoodEntryWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HealthMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SleepRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HealthMetricCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthMetricAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type HealthMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthMetricMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthMetricSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
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

  export type EnumWorkoutTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutTypeFilter<$PrismaModel> | $Enums.WorkoutType
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    calories?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    duration?: SortOrder
    calories?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    calories?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    calories?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    duration?: SortOrder
    calories?: SortOrder
  }

  export type EnumWorkoutTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutTypeWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutTypeFilter<$PrismaModel>
    _max?: NestedEnumWorkoutTypeFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSleepQualityFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepQuality | EnumSleepQualityFieldRefInput<$PrismaModel>
    in?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepQualityFilter<$PrismaModel> | $Enums.SleepQuality
  }

  export type SleepRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bedtime?: SortOrder
    wakeTime?: SortOrder
    duration?: SortOrder
    quality?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SleepRecordAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SleepRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bedtime?: SortOrder
    wakeTime?: SortOrder
    duration?: SortOrder
    quality?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SleepRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bedtime?: SortOrder
    wakeTime?: SortOrder
    duration?: SortOrder
    quality?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SleepRecordSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumSleepQualityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepQuality | EnumSleepQualityFieldRefInput<$PrismaModel>
    in?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepQualityWithAggregatesFilter<$PrismaModel> | $Enums.SleepQuality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSleepQualityFilter<$PrismaModel>
    _max?: NestedEnumSleepQualityFilter<$PrismaModel>
  }

  export type EnumMoodLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodLevel | EnumMoodLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodLevelFilter<$PrismaModel> | $Enums.MoodLevel
  }

  export type EnumEnergyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelFilter<$PrismaModel> | $Enums.EnergyLevel
  }

  export type EnumStressLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel>
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumStressLevelFilter<$PrismaModel> | $Enums.StressLevel
  }

  export type MoodEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    energy?: SortOrder
    stress?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    energy?: SortOrder
    stress?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    energy?: SortOrder
    stress?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMoodLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodLevel | EnumMoodLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodLevelWithAggregatesFilter<$PrismaModel> | $Enums.MoodLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodLevelFilter<$PrismaModel>
    _max?: NestedEnumMoodLevelFilter<$PrismaModel>
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

  export type EnumStressLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel>
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumStressLevelWithAggregatesFilter<$PrismaModel> | $Enums.StressLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStressLevelFilter<$PrismaModel>
    _max?: NestedEnumStressLevelFilter<$PrismaModel>
  }

  export type EnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
  }

  export type EnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type HealthMetricCreateNestedManyWithoutUserInput = {
    create?: XOR<HealthMetricCreateWithoutUserInput, HealthMetricUncheckedCreateWithoutUserInput> | HealthMetricCreateWithoutUserInput[] | HealthMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutUserInput | HealthMetricCreateOrConnectWithoutUserInput[]
    createMany?: HealthMetricCreateManyUserInputEnvelope
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type SleepRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<SleepRecordCreateWithoutUserInput, SleepRecordUncheckedCreateWithoutUserInput> | SleepRecordCreateWithoutUserInput[] | SleepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepRecordCreateOrConnectWithoutUserInput | SleepRecordCreateOrConnectWithoutUserInput[]
    createMany?: SleepRecordCreateManyUserInputEnvelope
    connect?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
  }

  export type MoodEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type HealthMetricUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HealthMetricCreateWithoutUserInput, HealthMetricUncheckedCreateWithoutUserInput> | HealthMetricCreateWithoutUserInput[] | HealthMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutUserInput | HealthMetricCreateOrConnectWithoutUserInput[]
    createMany?: HealthMetricCreateManyUserInputEnvelope
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type SleepRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SleepRecordCreateWithoutUserInput, SleepRecordUncheckedCreateWithoutUserInput> | SleepRecordCreateWithoutUserInput[] | SleepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepRecordCreateOrConnectWithoutUserInput | SleepRecordCreateOrConnectWithoutUserInput[]
    createMany?: SleepRecordCreateManyUserInputEnvelope
    connect?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
  }

  export type MoodEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HealthMetricUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealthMetricCreateWithoutUserInput, HealthMetricUncheckedCreateWithoutUserInput> | HealthMetricCreateWithoutUserInput[] | HealthMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutUserInput | HealthMetricCreateOrConnectWithoutUserInput[]
    upsert?: HealthMetricUpsertWithWhereUniqueWithoutUserInput | HealthMetricUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealthMetricCreateManyUserInputEnvelope
    set?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    disconnect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    delete?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    update?: HealthMetricUpdateWithWhereUniqueWithoutUserInput | HealthMetricUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealthMetricUpdateManyWithWhereWithoutUserInput | HealthMetricUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type SleepRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<SleepRecordCreateWithoutUserInput, SleepRecordUncheckedCreateWithoutUserInput> | SleepRecordCreateWithoutUserInput[] | SleepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepRecordCreateOrConnectWithoutUserInput | SleepRecordCreateOrConnectWithoutUserInput[]
    upsert?: SleepRecordUpsertWithWhereUniqueWithoutUserInput | SleepRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SleepRecordCreateManyUserInputEnvelope
    set?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    disconnect?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    delete?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    connect?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    update?: SleepRecordUpdateWithWhereUniqueWithoutUserInput | SleepRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SleepRecordUpdateManyWithWhereWithoutUserInput | SleepRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SleepRecordScalarWhereInput | SleepRecordScalarWhereInput[]
  }

  export type MoodEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutUserInput | MoodEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutUserInput | MoodEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutUserInput | MoodEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type HealthMetricUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealthMetricCreateWithoutUserInput, HealthMetricUncheckedCreateWithoutUserInput> | HealthMetricCreateWithoutUserInput[] | HealthMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthMetricCreateOrConnectWithoutUserInput | HealthMetricCreateOrConnectWithoutUserInput[]
    upsert?: HealthMetricUpsertWithWhereUniqueWithoutUserInput | HealthMetricUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealthMetricCreateManyUserInputEnvelope
    set?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    disconnect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    delete?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    connect?: HealthMetricWhereUniqueInput | HealthMetricWhereUniqueInput[]
    update?: HealthMetricUpdateWithWhereUniqueWithoutUserInput | HealthMetricUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealthMetricUpdateManyWithWhereWithoutUserInput | HealthMetricUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type SleepRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SleepRecordCreateWithoutUserInput, SleepRecordUncheckedCreateWithoutUserInput> | SleepRecordCreateWithoutUserInput[] | SleepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepRecordCreateOrConnectWithoutUserInput | SleepRecordCreateOrConnectWithoutUserInput[]
    upsert?: SleepRecordUpsertWithWhereUniqueWithoutUserInput | SleepRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SleepRecordCreateManyUserInputEnvelope
    set?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    disconnect?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    delete?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    connect?: SleepRecordWhereUniqueInput | SleepRecordWhereUniqueInput[]
    update?: SleepRecordUpdateWithWhereUniqueWithoutUserInput | SleepRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SleepRecordUpdateManyWithWhereWithoutUserInput | SleepRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SleepRecordScalarWhereInput | SleepRecordScalarWhereInput[]
  }

  export type MoodEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutUserInput | MoodEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutUserInput | MoodEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutUserInput | MoodEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHealthMetricsInput = {
    create?: XOR<UserCreateWithoutHealthMetricsInput, UserUncheckedCreateWithoutHealthMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthMetricsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutHealthMetricsNestedInput = {
    create?: XOR<UserCreateWithoutHealthMetricsInput, UserUncheckedCreateWithoutHealthMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthMetricsInput
    upsert?: UserUpsertWithoutHealthMetricsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHealthMetricsInput, UserUpdateWithoutHealthMetricsInput>, UserUncheckedUpdateWithoutHealthMetricsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWorkoutTypeFieldUpdateOperationsInput = {
    set?: $Enums.WorkoutType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    upsert?: UserUpsertWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutsInput, UserUpdateWithoutWorkoutsInput>, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type UserCreateNestedOneWithoutSleepRecordsInput = {
    create?: XOR<UserCreateWithoutSleepRecordsInput, UserUncheckedCreateWithoutSleepRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSleepRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSleepQualityFieldUpdateOperationsInput = {
    set?: $Enums.SleepQuality
  }

  export type UserUpdateOneRequiredWithoutSleepRecordsNestedInput = {
    create?: XOR<UserCreateWithoutSleepRecordsInput, UserUncheckedCreateWithoutSleepRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSleepRecordsInput
    upsert?: UserUpsertWithoutSleepRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSleepRecordsInput, UserUpdateWithoutSleepRecordsInput>, UserUncheckedUpdateWithoutSleepRecordsInput>
  }

  export type UserCreateNestedOneWithoutMoodEntriesInput = {
    create?: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMoodLevelFieldUpdateOperationsInput = {
    set?: $Enums.MoodLevel
  }

  export type EnumEnergyLevelFieldUpdateOperationsInput = {
    set?: $Enums.EnergyLevel
  }

  export type EnumStressLevelFieldUpdateOperationsInput = {
    set?: $Enums.StressLevel
  }

  export type UserUpdateOneRequiredWithoutMoodEntriesNestedInput = {
    create?: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodEntriesInput
    upsert?: UserUpsertWithoutMoodEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodEntriesInput, UserUpdateWithoutMoodEntriesInput>, UserUncheckedUpdateWithoutMoodEntriesInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoalType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
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

  export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
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

  export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
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

  export type NestedEnumWorkoutTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutTypeFilter<$PrismaModel> | $Enums.WorkoutType
  }

  export type NestedEnumWorkoutTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutType[] | ListEnumWorkoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutTypeWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutTypeFilter<$PrismaModel>
    _max?: NestedEnumWorkoutTypeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSleepQualityFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepQuality | EnumSleepQualityFieldRefInput<$PrismaModel>
    in?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepQualityFilter<$PrismaModel> | $Enums.SleepQuality
  }

  export type NestedEnumSleepQualityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepQuality | EnumSleepQualityFieldRefInput<$PrismaModel>
    in?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepQuality[] | ListEnumSleepQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepQualityWithAggregatesFilter<$PrismaModel> | $Enums.SleepQuality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSleepQualityFilter<$PrismaModel>
    _max?: NestedEnumSleepQualityFilter<$PrismaModel>
  }

  export type NestedEnumMoodLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodLevel | EnumMoodLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodLevelFilter<$PrismaModel> | $Enums.MoodLevel
  }

  export type NestedEnumEnergyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelFilter<$PrismaModel> | $Enums.EnergyLevel
  }

  export type NestedEnumStressLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel>
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumStressLevelFilter<$PrismaModel> | $Enums.StressLevel
  }

  export type NestedEnumMoodLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodLevel | EnumMoodLevelFieldRefInput<$PrismaModel>
    in?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoodLevel[] | ListEnumMoodLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodLevelWithAggregatesFilter<$PrismaModel> | $Enums.MoodLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodLevelFilter<$PrismaModel>
    _max?: NestedEnumMoodLevelFilter<$PrismaModel>
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

  export type NestedEnumStressLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel>
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumStressLevelWithAggregatesFilter<$PrismaModel> | $Enums.StressLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStressLevelFilter<$PrismaModel>
    _max?: NestedEnumStressLevelFilter<$PrismaModel>
  }

  export type NestedEnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type HealthMetricCreateWithoutUserInput = {
    id?: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date | string
    createdAt?: Date | string
  }

  export type HealthMetricUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date | string
    createdAt?: Date | string
  }

  export type HealthMetricCreateOrConnectWithoutUserInput = {
    where: HealthMetricWhereUniqueInput
    create: XOR<HealthMetricCreateWithoutUserInput, HealthMetricUncheckedCreateWithoutUserInput>
  }

  export type HealthMetricCreateManyUserInputEnvelope = {
    data: HealthMetricCreateManyUserInput | HealthMetricCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories?: number | null
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories?: number | null
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SleepRecordCreateWithoutUserInput = {
    id?: string
    bedtime: Date | string
    wakeTime: Date | string
    duration: number
    quality: $Enums.SleepQuality
    notes?: string | null
    createdAt?: Date | string
  }

  export type SleepRecordUncheckedCreateWithoutUserInput = {
    id?: string
    bedtime: Date | string
    wakeTime: Date | string
    duration: number
    quality: $Enums.SleepQuality
    notes?: string | null
    createdAt?: Date | string
  }

  export type SleepRecordCreateOrConnectWithoutUserInput = {
    where: SleepRecordWhereUniqueInput
    create: XOR<SleepRecordCreateWithoutUserInput, SleepRecordUncheckedCreateWithoutUserInput>
  }

  export type SleepRecordCreateManyUserInputEnvelope = {
    data: SleepRecordCreateManyUserInput | SleepRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoodEntryCreateWithoutUserInput = {
    id?: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type MoodEntryUncheckedCreateWithoutUserInput = {
    id?: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type MoodEntryCreateOrConnectWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    create: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput>
  }

  export type MoodEntryCreateManyUserInputEnvelope = {
    data: MoodEntryCreateManyUserInput | MoodEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.GoalType
    target: number
    current?: number
    unit: string
    deadline?: Date | string | null
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.GoalType
    target: number
    current?: number
    unit: string
    deadline?: Date | string | null
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HealthMetricUpsertWithWhereUniqueWithoutUserInput = {
    where: HealthMetricWhereUniqueInput
    update: XOR<HealthMetricUpdateWithoutUserInput, HealthMetricUncheckedUpdateWithoutUserInput>
    create: XOR<HealthMetricCreateWithoutUserInput, HealthMetricUncheckedCreateWithoutUserInput>
  }

  export type HealthMetricUpdateWithWhereUniqueWithoutUserInput = {
    where: HealthMetricWhereUniqueInput
    data: XOR<HealthMetricUpdateWithoutUserInput, HealthMetricUncheckedUpdateWithoutUserInput>
  }

  export type HealthMetricUpdateManyWithWhereWithoutUserInput = {
    where: HealthMetricScalarWhereInput
    data: XOR<HealthMetricUpdateManyMutationInput, HealthMetricUncheckedUpdateManyWithoutUserInput>
  }

  export type HealthMetricScalarWhereInput = {
    AND?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
    OR?: HealthMetricScalarWhereInput[]
    NOT?: HealthMetricScalarWhereInput | HealthMetricScalarWhereInput[]
    id?: StringFilter<"HealthMetric"> | string
    userId?: StringFilter<"HealthMetric"> | string
    type?: EnumMetricTypeFilter<"HealthMetric"> | $Enums.MetricType
    value?: FloatFilter<"HealthMetric"> | number
    unit?: StringFilter<"HealthMetric"> | string
    date?: DateTimeFilter<"HealthMetric"> | Date | string
    createdAt?: DateTimeFilter<"HealthMetric"> | Date | string
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    type?: EnumWorkoutTypeFilter<"Workout"> | $Enums.WorkoutType
    duration?: IntFilter<"Workout"> | number
    calories?: IntNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    date?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
  }

  export type SleepRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: SleepRecordWhereUniqueInput
    update: XOR<SleepRecordUpdateWithoutUserInput, SleepRecordUncheckedUpdateWithoutUserInput>
    create: XOR<SleepRecordCreateWithoutUserInput, SleepRecordUncheckedCreateWithoutUserInput>
  }

  export type SleepRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: SleepRecordWhereUniqueInput
    data: XOR<SleepRecordUpdateWithoutUserInput, SleepRecordUncheckedUpdateWithoutUserInput>
  }

  export type SleepRecordUpdateManyWithWhereWithoutUserInput = {
    where: SleepRecordScalarWhereInput
    data: XOR<SleepRecordUpdateManyMutationInput, SleepRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type SleepRecordScalarWhereInput = {
    AND?: SleepRecordScalarWhereInput | SleepRecordScalarWhereInput[]
    OR?: SleepRecordScalarWhereInput[]
    NOT?: SleepRecordScalarWhereInput | SleepRecordScalarWhereInput[]
    id?: StringFilter<"SleepRecord"> | string
    userId?: StringFilter<"SleepRecord"> | string
    bedtime?: DateTimeFilter<"SleepRecord"> | Date | string
    wakeTime?: DateTimeFilter<"SleepRecord"> | Date | string
    duration?: FloatFilter<"SleepRecord"> | number
    quality?: EnumSleepQualityFilter<"SleepRecord"> | $Enums.SleepQuality
    notes?: StringNullableFilter<"SleepRecord"> | string | null
    createdAt?: DateTimeFilter<"SleepRecord"> | Date | string
  }

  export type MoodEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    update: XOR<MoodEntryUpdateWithoutUserInput, MoodEntryUncheckedUpdateWithoutUserInput>
    create: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput>
  }

  export type MoodEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    data: XOR<MoodEntryUpdateWithoutUserInput, MoodEntryUncheckedUpdateWithoutUserInput>
  }

  export type MoodEntryUpdateManyWithWhereWithoutUserInput = {
    where: MoodEntryScalarWhereInput
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodEntryScalarWhereInput = {
    AND?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
    OR?: MoodEntryScalarWhereInput[]
    NOT?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
    id?: StringFilter<"MoodEntry"> | string
    userId?: StringFilter<"MoodEntry"> | string
    mood?: EnumMoodLevelFilter<"MoodEntry"> | $Enums.MoodLevel
    energy?: EnumEnergyLevelFilter<"MoodEntry"> | $Enums.EnergyLevel
    stress?: EnumStressLevelFilter<"MoodEntry"> | $Enums.StressLevel
    notes?: StringNullableFilter<"MoodEntry"> | string | null
    date?: DateTimeFilter<"MoodEntry"> | Date | string
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    target?: FloatFilter<"Goal"> | number
    current?: FloatFilter<"Goal"> | number
    unit?: StringFilter<"Goal"> | string
    deadline?: DateTimeNullableFilter<"Goal"> | Date | string | null
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type UserCreateWithoutHealthMetricsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHealthMetricsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordUncheckedCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHealthMetricsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHealthMetricsInput, UserUncheckedCreateWithoutHealthMetricsInput>
  }

  export type UserUpsertWithoutHealthMetricsInput = {
    update: XOR<UserUpdateWithoutHealthMetricsInput, UserUncheckedUpdateWithoutHealthMetricsInput>
    create: XOR<UserCreateWithoutHealthMetricsInput, UserUncheckedCreateWithoutHealthMetricsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHealthMetricsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHealthMetricsInput, UserUncheckedUpdateWithoutHealthMetricsInput>
  }

  export type UserUpdateWithoutHealthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHealthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUncheckedUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkoutsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordUncheckedCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
  }

  export type UserUpsertWithoutWorkoutsInput = {
    update: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type UserUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUncheckedUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSleepRecordsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSleepRecordsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSleepRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSleepRecordsInput, UserUncheckedCreateWithoutSleepRecordsInput>
  }

  export type UserUpsertWithoutSleepRecordsInput = {
    update: XOR<UserUpdateWithoutSleepRecordsInput, UserUncheckedUpdateWithoutSleepRecordsInput>
    create: XOR<UserCreateWithoutSleepRecordsInput, UserUncheckedCreateWithoutSleepRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSleepRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSleepRecordsInput, UserUncheckedUpdateWithoutSleepRecordsInput>
  }

  export type UserUpdateWithoutSleepRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSleepRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMoodEntriesInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoodEntriesInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoodEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
  }

  export type UserUpsertWithoutMoodEntriesInput = {
    update: XOR<UserUpdateWithoutMoodEntriesInput, UserUncheckedUpdateWithoutMoodEntriesInput>
    create: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodEntriesInput, UserUncheckedUpdateWithoutMoodEntriesInput>
  }

  export type UserUpdateWithoutMoodEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: HealthMetricUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    sleepRecords?: SleepRecordUncheckedCreateNestedManyWithoutUserInput
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: HealthMetricUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    sleepRecords?: SleepRecordUncheckedUpdateManyWithoutUserNestedInput
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HealthMetricCreateManyUserInput = {
    id?: string
    type: $Enums.MetricType
    value: number
    unit: string
    date: Date | string
    createdAt?: Date | string
  }

  export type WorkoutCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.WorkoutType
    duration: number
    calories?: number | null
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type SleepRecordCreateManyUserInput = {
    id?: string
    bedtime: Date | string
    wakeTime: Date | string
    duration: number
    quality: $Enums.SleepQuality
    notes?: string | null
    createdAt?: Date | string
  }

  export type MoodEntryCreateManyUserInput = {
    id?: string
    mood: $Enums.MoodLevel
    energy: $Enums.EnergyLevel
    stress: $Enums.StressLevel
    notes?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.GoalType
    target: number
    current?: number
    unit: string
    deadline?: Date | string | null
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HealthMetricUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthMetricUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType
    duration?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedtime?: DateTimeFieldUpdateOperationsInput | Date | string
    wakeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    quality?: EnumSleepQualityFieldUpdateOperationsInput | $Enums.SleepQuality
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodLevelFieldUpdateOperationsInput | $Enums.MoodLevel
    energy?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    stress?: EnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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