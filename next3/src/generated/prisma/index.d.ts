
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
 * Model University
 * 
 */
export type University = $Result.DefaultSelection<Prisma.$UniversityPayload>
/**
 * Model ProgramStudi
 * 
 */
export type ProgramStudi = $Result.DefaultSelection<Prisma.$ProgramStudiPayload>
/**
 * Model Matkul
 * 
 */
export type Matkul = $Result.DefaultSelection<Prisma.$MatkulPayload>
/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model AmbilMatkul
 * 
 */
export type AmbilMatkul = $Result.DefaultSelection<Prisma.$AmbilMatkulPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Grade: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
};

export type Grade = (typeof Grade)[keyof typeof Grade]

}

export type Grade = $Enums.Grade

export const Grade: typeof $Enums.Grade

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Universities
 * const universities = await prisma.university.findMany()
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
   * // Fetch zero or more Universities
   * const universities = await prisma.university.findMany()
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
   * `prisma.university`: Exposes CRUD operations for the **University** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universities
    * const universities = await prisma.university.findMany()
    * ```
    */
  get university(): Prisma.UniversityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programStudi`: Exposes CRUD operations for the **ProgramStudi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramStudis
    * const programStudis = await prisma.programStudi.findMany()
    * ```
    */
  get programStudi(): Prisma.ProgramStudiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matkul`: Exposes CRUD operations for the **Matkul** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matkuls
    * const matkuls = await prisma.matkul.findMany()
    * ```
    */
  get matkul(): Prisma.MatkulDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ambilMatkul`: Exposes CRUD operations for the **AmbilMatkul** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AmbilMatkuls
    * const ambilMatkuls = await prisma.ambilMatkul.findMany()
    * ```
    */
  get ambilMatkul(): Prisma.AmbilMatkulDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    University: 'University',
    ProgramStudi: 'ProgramStudi',
    Matkul: 'Matkul',
    Mahasiswa: 'Mahasiswa',
    AmbilMatkul: 'AmbilMatkul'
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
      modelProps: "university" | "programStudi" | "matkul" | "mahasiswa" | "ambilMatkul"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      University: {
        payload: Prisma.$UniversityPayload<ExtArgs>
        fields: Prisma.UniversityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findFirst: {
            args: Prisma.UniversityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findMany: {
            args: Prisma.UniversityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          create: {
            args: Prisma.UniversityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          createMany: {
            args: Prisma.UniversityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UniversityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          update: {
            args: Prisma.UniversityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          deleteMany: {
            args: Prisma.UniversityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UniversityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          aggregate: {
            args: Prisma.UniversityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversity>
          }
          groupBy: {
            args: Prisma.UniversityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityCountAggregateOutputType> | number
          }
        }
      }
      ProgramStudi: {
        payload: Prisma.$ProgramStudiPayload<ExtArgs>
        fields: Prisma.ProgramStudiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramStudiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramStudiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          findFirst: {
            args: Prisma.ProgramStudiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramStudiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          findMany: {
            args: Prisma.ProgramStudiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>[]
          }
          create: {
            args: Prisma.ProgramStudiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          createMany: {
            args: Prisma.ProgramStudiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramStudiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          update: {
            args: Prisma.ProgramStudiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          deleteMany: {
            args: Prisma.ProgramStudiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramStudiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramStudiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramStudiPayload>
          }
          aggregate: {
            args: Prisma.ProgramStudiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramStudi>
          }
          groupBy: {
            args: Prisma.ProgramStudiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramStudiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramStudiCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramStudiCountAggregateOutputType> | number
          }
        }
      }
      Matkul: {
        payload: Prisma.$MatkulPayload<ExtArgs>
        fields: Prisma.MatkulFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatkulFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatkulFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>
          }
          findFirst: {
            args: Prisma.MatkulFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatkulFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>
          }
          findMany: {
            args: Prisma.MatkulFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>[]
          }
          create: {
            args: Prisma.MatkulCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>
          }
          createMany: {
            args: Prisma.MatkulCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatkulDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>
          }
          update: {
            args: Prisma.MatkulUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>
          }
          deleteMany: {
            args: Prisma.MatkulDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatkulUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatkulUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatkulPayload>
          }
          aggregate: {
            args: Prisma.MatkulAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatkul>
          }
          groupBy: {
            args: Prisma.MatkulGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatkulGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatkulCountArgs<ExtArgs>
            result: $Utils.Optional<MatkulCountAggregateOutputType> | number
          }
        }
      }
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      AmbilMatkul: {
        payload: Prisma.$AmbilMatkulPayload<ExtArgs>
        fields: Prisma.AmbilMatkulFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmbilMatkulFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmbilMatkulFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>
          }
          findFirst: {
            args: Prisma.AmbilMatkulFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmbilMatkulFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>
          }
          findMany: {
            args: Prisma.AmbilMatkulFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>[]
          }
          create: {
            args: Prisma.AmbilMatkulCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>
          }
          createMany: {
            args: Prisma.AmbilMatkulCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AmbilMatkulDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>
          }
          update: {
            args: Prisma.AmbilMatkulUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>
          }
          deleteMany: {
            args: Prisma.AmbilMatkulDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmbilMatkulUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AmbilMatkulUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbilMatkulPayload>
          }
          aggregate: {
            args: Prisma.AmbilMatkulAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmbilMatkul>
          }
          groupBy: {
            args: Prisma.AmbilMatkulGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmbilMatkulGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmbilMatkulCountArgs<ExtArgs>
            result: $Utils.Optional<AmbilMatkulCountAggregateOutputType> | number
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
    university?: UniversityOmit
    programStudi?: ProgramStudiOmit
    matkul?: MatkulOmit
    mahasiswa?: MahasiswaOmit
    ambilMatkul?: AmbilMatkulOmit
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
   * Count Type UniversityCountOutputType
   */

  export type UniversityCountOutputType = {
    mahasiswa: number
  }

  export type UniversityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | UniversityCountOutputTypeCountMahasiswaArgs
  }

  // Custom InputTypes
  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityCountOutputType
     */
    select?: UniversityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
  }


  /**
   * Count Type ProgramStudiCountOutputType
   */

  export type ProgramStudiCountOutputType = {
    mahasiswa: number
  }

  export type ProgramStudiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | ProgramStudiCountOutputTypeCountMahasiswaArgs
  }

  // Custom InputTypes
  /**
   * ProgramStudiCountOutputType without action
   */
  export type ProgramStudiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudiCountOutputType
     */
    select?: ProgramStudiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramStudiCountOutputType without action
   */
  export type ProgramStudiCountOutputTypeCountMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
  }


  /**
   * Count Type MatkulCountOutputType
   */

  export type MatkulCountOutputType = {
    ambil_matkul: number
  }

  export type MatkulCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambil_matkul?: boolean | MatkulCountOutputTypeCountAmbil_matkulArgs
  }

  // Custom InputTypes
  /**
   * MatkulCountOutputType without action
   */
  export type MatkulCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatkulCountOutputType
     */
    select?: MatkulCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatkulCountOutputType without action
   */
  export type MatkulCountOutputTypeCountAmbil_matkulArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbilMatkulWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    ambil_matkul: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambil_matkul?: boolean | MahasiswaCountOutputTypeCountAmbil_matkulArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountAmbil_matkulArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbilMatkulWhereInput
  }


  /**
   * Models
   */

  /**
   * Model University
   */

  export type AggregateUniversity = {
    _count: UniversityCountAggregateOutputType | null
    _avg: UniversityAvgAggregateOutputType | null
    _sum: UniversitySumAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  export type UniversityAvgAggregateOutputType = {
    no_univ: number | null
  }

  export type UniversitySumAggregateOutputType = {
    no_univ: number | null
  }

  export type UniversityMinAggregateOutputType = {
    no_univ: number | null
    nama_aniv: string | null
    grade: $Enums.Grade | null
  }

  export type UniversityMaxAggregateOutputType = {
    no_univ: number | null
    nama_aniv: string | null
    grade: $Enums.Grade | null
  }

  export type UniversityCountAggregateOutputType = {
    no_univ: number
    nama_aniv: number
    grade: number
    _all: number
  }


  export type UniversityAvgAggregateInputType = {
    no_univ?: true
  }

  export type UniversitySumAggregateInputType = {
    no_univ?: true
  }

  export type UniversityMinAggregateInputType = {
    no_univ?: true
    nama_aniv?: true
    grade?: true
  }

  export type UniversityMaxAggregateInputType = {
    no_univ?: true
    nama_aniv?: true
    grade?: true
  }

  export type UniversityCountAggregateInputType = {
    no_univ?: true
    nama_aniv?: true
    grade?: true
    _all?: true
  }

  export type UniversityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which University to aggregate.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universities
    **/
    _count?: true | UniversityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniversityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniversitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityMaxAggregateInputType
  }

  export type GetUniversityAggregateType<T extends UniversityAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversity[P]>
      : GetScalarType<T[P], AggregateUniversity[P]>
  }




  export type UniversityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityWhereInput
    orderBy?: UniversityOrderByWithAggregationInput | UniversityOrderByWithAggregationInput[]
    by: UniversityScalarFieldEnum[] | UniversityScalarFieldEnum
    having?: UniversityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityCountAggregateInputType | true
    _avg?: UniversityAvgAggregateInputType
    _sum?: UniversitySumAggregateInputType
    _min?: UniversityMinAggregateInputType
    _max?: UniversityMaxAggregateInputType
  }

  export type UniversityGroupByOutputType = {
    no_univ: number
    nama_aniv: string
    grade: $Enums.Grade
    _count: UniversityCountAggregateOutputType | null
    _avg: UniversityAvgAggregateOutputType | null
    _sum: UniversitySumAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  type GetUniversityGroupByPayload<T extends UniversityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityGroupByOutputType[P]>
        }
      >
    >


  export type UniversitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_univ?: boolean
    nama_aniv?: boolean
    grade?: boolean
    mahasiswa?: boolean | University$mahasiswaArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["university"]>



  export type UniversitySelectScalar = {
    no_univ?: boolean
    nama_aniv?: boolean
    grade?: boolean
  }

  export type UniversityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_univ" | "nama_aniv" | "grade", ExtArgs["result"]["university"]>
  export type UniversityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | University$mahasiswaArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UniversityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "University"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no_univ: number
      nama_aniv: string
      grade: $Enums.Grade
    }, ExtArgs["result"]["university"]>
    composites: {}
  }

  type UniversityGetPayload<S extends boolean | null | undefined | UniversityDefaultArgs> = $Result.GetResult<Prisma.$UniversityPayload, S>

  type UniversityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityCountAggregateInputType | true
    }

  export interface UniversityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['University'], meta: { name: 'University' } }
    /**
     * Find zero or one University that matches the filter.
     * @param {UniversityFindUniqueArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityFindUniqueArgs>(args: SelectSubset<T, UniversityFindUniqueArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one University that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityFindUniqueOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityFindFirstArgs>(args?: SelectSubset<T, UniversityFindFirstArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universities
     * const universities = await prisma.university.findMany()
     * 
     * // Get first 10 Universities
     * const universities = await prisma.university.findMany({ take: 10 })
     * 
     * // Only select the `no_univ`
     * const universityWithNo_univOnly = await prisma.university.findMany({ select: { no_univ: true } })
     * 
     */
    findMany<T extends UniversityFindManyArgs>(args?: SelectSubset<T, UniversityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a University.
     * @param {UniversityCreateArgs} args - Arguments to create a University.
     * @example
     * // Create one University
     * const University = await prisma.university.create({
     *   data: {
     *     // ... data to create a University
     *   }
     * })
     * 
     */
    create<T extends UniversityCreateArgs>(args: SelectSubset<T, UniversityCreateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universities.
     * @param {UniversityCreateManyArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityCreateManyArgs>(args?: SelectSubset<T, UniversityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a University.
     * @param {UniversityDeleteArgs} args - Arguments to delete one University.
     * @example
     * // Delete one University
     * const University = await prisma.university.delete({
     *   where: {
     *     // ... filter to delete one University
     *   }
     * })
     * 
     */
    delete<T extends UniversityDeleteArgs>(args: SelectSubset<T, UniversityDeleteArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one University.
     * @param {UniversityUpdateArgs} args - Arguments to update one University.
     * @example
     * // Update one University
     * const university = await prisma.university.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityUpdateArgs>(args: SelectSubset<T, UniversityUpdateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universities.
     * @param {UniversityDeleteManyArgs} args - Arguments to filter Universities to delete.
     * @example
     * // Delete a few Universities
     * const { count } = await prisma.university.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityDeleteManyArgs>(args?: SelectSubset<T, UniversityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityUpdateManyArgs>(args: SelectSubset<T, UniversityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one University.
     * @param {UniversityUpsertArgs} args - Arguments to update or create a University.
     * @example
     * // Update or create a University
     * const university = await prisma.university.upsert({
     *   create: {
     *     // ... data to create a University
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the University we want to update
     *   }
     * })
     */
    upsert<T extends UniversityUpsertArgs>(args: SelectSubset<T, UniversityUpsertArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityCountArgs} args - Arguments to filter Universities to count.
     * @example
     * // Count the number of Universities
     * const count = await prisma.university.count({
     *   where: {
     *     // ... the filter for the Universities we want to count
     *   }
     * })
    **/
    count<T extends UniversityCountArgs>(
      args?: Subset<T, UniversityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniversityAggregateArgs>(args: Subset<T, UniversityAggregateArgs>): Prisma.PrismaPromise<GetUniversityAggregateType<T>>

    /**
     * Group by University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityGroupByArgs} args - Group by arguments.
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
      T extends UniversityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityGroupByArgs['orderBy'] }
        : { orderBy?: UniversityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniversityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the University model
   */
  readonly fields: UniversityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for University.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends University$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, University$mahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the University model
   */
  interface UniversityFieldRefs {
    readonly no_univ: FieldRef<"University", 'Int'>
    readonly nama_aniv: FieldRef<"University", 'String'>
    readonly grade: FieldRef<"University", 'Grade'>
  }
    

  // Custom InputTypes
  /**
   * University findUnique
   */
  export type UniversityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findUniqueOrThrow
   */
  export type UniversityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findFirst
   */
  export type UniversityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findFirstOrThrow
   */
  export type UniversityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findMany
   */
  export type UniversityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which Universities to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University create
   */
  export type UniversityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to create a University.
     */
    data: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
  }

  /**
   * University createMany
   */
  export type UniversityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University update
   */
  export type UniversityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to update a University.
     */
    data: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
    /**
     * Choose, which University to update.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University updateMany
   */
  export type UniversityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University upsert
   */
  export type UniversityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The filter to search for the University to update in case it exists.
     */
    where: UniversityWhereUniqueInput
    /**
     * In case the University found by the `where` argument doesn't exist, create a new University with this data.
     */
    create: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
    /**
     * In case the University was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
  }

  /**
   * University delete
   */
  export type UniversityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter which University to delete.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University deleteMany
   */
  export type UniversityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universities to delete
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to delete.
     */
    limit?: number
  }

  /**
   * University.mahasiswa
   */
  export type University$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    cursor?: MahasiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * University without action
   */
  export type UniversityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
  }


  /**
   * Model ProgramStudi
   */

  export type AggregateProgramStudi = {
    _count: ProgramStudiCountAggregateOutputType | null
    _avg: ProgramStudiAvgAggregateOutputType | null
    _sum: ProgramStudiSumAggregateOutputType | null
    _min: ProgramStudiMinAggregateOutputType | null
    _max: ProgramStudiMaxAggregateOutputType | null
  }

  export type ProgramStudiAvgAggregateOutputType = {
    no_prodi: number | null
  }

  export type ProgramStudiSumAggregateOutputType = {
    no_prodi: number | null
  }

  export type ProgramStudiMinAggregateOutputType = {
    no_prodi: number | null
    nama_prodi: string | null
    grade: $Enums.Grade | null
  }

  export type ProgramStudiMaxAggregateOutputType = {
    no_prodi: number | null
    nama_prodi: string | null
    grade: $Enums.Grade | null
  }

  export type ProgramStudiCountAggregateOutputType = {
    no_prodi: number
    nama_prodi: number
    grade: number
    _all: number
  }


  export type ProgramStudiAvgAggregateInputType = {
    no_prodi?: true
  }

  export type ProgramStudiSumAggregateInputType = {
    no_prodi?: true
  }

  export type ProgramStudiMinAggregateInputType = {
    no_prodi?: true
    nama_prodi?: true
    grade?: true
  }

  export type ProgramStudiMaxAggregateInputType = {
    no_prodi?: true
    nama_prodi?: true
    grade?: true
  }

  export type ProgramStudiCountAggregateInputType = {
    no_prodi?: true
    nama_prodi?: true
    grade?: true
    _all?: true
  }

  export type ProgramStudiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramStudi to aggregate.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramStudis
    **/
    _count?: true | ProgramStudiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramStudiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramStudiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramStudiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramStudiMaxAggregateInputType
  }

  export type GetProgramStudiAggregateType<T extends ProgramStudiAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramStudi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramStudi[P]>
      : GetScalarType<T[P], AggregateProgramStudi[P]>
  }




  export type ProgramStudiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramStudiWhereInput
    orderBy?: ProgramStudiOrderByWithAggregationInput | ProgramStudiOrderByWithAggregationInput[]
    by: ProgramStudiScalarFieldEnum[] | ProgramStudiScalarFieldEnum
    having?: ProgramStudiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramStudiCountAggregateInputType | true
    _avg?: ProgramStudiAvgAggregateInputType
    _sum?: ProgramStudiSumAggregateInputType
    _min?: ProgramStudiMinAggregateInputType
    _max?: ProgramStudiMaxAggregateInputType
  }

  export type ProgramStudiGroupByOutputType = {
    no_prodi: number
    nama_prodi: string
    grade: $Enums.Grade
    _count: ProgramStudiCountAggregateOutputType | null
    _avg: ProgramStudiAvgAggregateOutputType | null
    _sum: ProgramStudiSumAggregateOutputType | null
    _min: ProgramStudiMinAggregateOutputType | null
    _max: ProgramStudiMaxAggregateOutputType | null
  }

  type GetProgramStudiGroupByPayload<T extends ProgramStudiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramStudiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramStudiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramStudiGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramStudiGroupByOutputType[P]>
        }
      >
    >


  export type ProgramStudiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_prodi?: boolean
    nama_prodi?: boolean
    grade?: boolean
    mahasiswa?: boolean | ProgramStudi$mahasiswaArgs<ExtArgs>
    _count?: boolean | ProgramStudiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programStudi"]>



  export type ProgramStudiSelectScalar = {
    no_prodi?: boolean
    nama_prodi?: boolean
    grade?: boolean
  }

  export type ProgramStudiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_prodi" | "nama_prodi" | "grade", ExtArgs["result"]["programStudi"]>
  export type ProgramStudiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | ProgramStudi$mahasiswaArgs<ExtArgs>
    _count?: boolean | ProgramStudiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProgramStudiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramStudi"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no_prodi: number
      nama_prodi: string
      grade: $Enums.Grade
    }, ExtArgs["result"]["programStudi"]>
    composites: {}
  }

  type ProgramStudiGetPayload<S extends boolean | null | undefined | ProgramStudiDefaultArgs> = $Result.GetResult<Prisma.$ProgramStudiPayload, S>

  type ProgramStudiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramStudiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramStudiCountAggregateInputType | true
    }

  export interface ProgramStudiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramStudi'], meta: { name: 'ProgramStudi' } }
    /**
     * Find zero or one ProgramStudi that matches the filter.
     * @param {ProgramStudiFindUniqueArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramStudiFindUniqueArgs>(args: SelectSubset<T, ProgramStudiFindUniqueArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramStudi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramStudiFindUniqueOrThrowArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramStudiFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramStudiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramStudi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFindFirstArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramStudiFindFirstArgs>(args?: SelectSubset<T, ProgramStudiFindFirstArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramStudi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFindFirstOrThrowArgs} args - Arguments to find a ProgramStudi
     * @example
     * // Get one ProgramStudi
     * const programStudi = await prisma.programStudi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramStudiFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramStudiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramStudis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramStudis
     * const programStudis = await prisma.programStudi.findMany()
     * 
     * // Get first 10 ProgramStudis
     * const programStudis = await prisma.programStudi.findMany({ take: 10 })
     * 
     * // Only select the `no_prodi`
     * const programStudiWithNo_prodiOnly = await prisma.programStudi.findMany({ select: { no_prodi: true } })
     * 
     */
    findMany<T extends ProgramStudiFindManyArgs>(args?: SelectSubset<T, ProgramStudiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramStudi.
     * @param {ProgramStudiCreateArgs} args - Arguments to create a ProgramStudi.
     * @example
     * // Create one ProgramStudi
     * const ProgramStudi = await prisma.programStudi.create({
     *   data: {
     *     // ... data to create a ProgramStudi
     *   }
     * })
     * 
     */
    create<T extends ProgramStudiCreateArgs>(args: SelectSubset<T, ProgramStudiCreateArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramStudis.
     * @param {ProgramStudiCreateManyArgs} args - Arguments to create many ProgramStudis.
     * @example
     * // Create many ProgramStudis
     * const programStudi = await prisma.programStudi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramStudiCreateManyArgs>(args?: SelectSubset<T, ProgramStudiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgramStudi.
     * @param {ProgramStudiDeleteArgs} args - Arguments to delete one ProgramStudi.
     * @example
     * // Delete one ProgramStudi
     * const ProgramStudi = await prisma.programStudi.delete({
     *   where: {
     *     // ... filter to delete one ProgramStudi
     *   }
     * })
     * 
     */
    delete<T extends ProgramStudiDeleteArgs>(args: SelectSubset<T, ProgramStudiDeleteArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramStudi.
     * @param {ProgramStudiUpdateArgs} args - Arguments to update one ProgramStudi.
     * @example
     * // Update one ProgramStudi
     * const programStudi = await prisma.programStudi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramStudiUpdateArgs>(args: SelectSubset<T, ProgramStudiUpdateArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramStudis.
     * @param {ProgramStudiDeleteManyArgs} args - Arguments to filter ProgramStudis to delete.
     * @example
     * // Delete a few ProgramStudis
     * const { count } = await prisma.programStudi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramStudiDeleteManyArgs>(args?: SelectSubset<T, ProgramStudiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramStudis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramStudis
     * const programStudi = await prisma.programStudi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramStudiUpdateManyArgs>(args: SelectSubset<T, ProgramStudiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramStudi.
     * @param {ProgramStudiUpsertArgs} args - Arguments to update or create a ProgramStudi.
     * @example
     * // Update or create a ProgramStudi
     * const programStudi = await prisma.programStudi.upsert({
     *   create: {
     *     // ... data to create a ProgramStudi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramStudi we want to update
     *   }
     * })
     */
    upsert<T extends ProgramStudiUpsertArgs>(args: SelectSubset<T, ProgramStudiUpsertArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramStudis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiCountArgs} args - Arguments to filter ProgramStudis to count.
     * @example
     * // Count the number of ProgramStudis
     * const count = await prisma.programStudi.count({
     *   where: {
     *     // ... the filter for the ProgramStudis we want to count
     *   }
     * })
    **/
    count<T extends ProgramStudiCountArgs>(
      args?: Subset<T, ProgramStudiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramStudiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramStudi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramStudiAggregateArgs>(args: Subset<T, ProgramStudiAggregateArgs>): Prisma.PrismaPromise<GetProgramStudiAggregateType<T>>

    /**
     * Group by ProgramStudi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramStudiGroupByArgs} args - Group by arguments.
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
      T extends ProgramStudiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramStudiGroupByArgs['orderBy'] }
        : { orderBy?: ProgramStudiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramStudiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramStudiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramStudi model
   */
  readonly fields: ProgramStudiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramStudi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramStudiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends ProgramStudi$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudi$mahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProgramStudi model
   */
  interface ProgramStudiFieldRefs {
    readonly no_prodi: FieldRef<"ProgramStudi", 'Int'>
    readonly nama_prodi: FieldRef<"ProgramStudi", 'String'>
    readonly grade: FieldRef<"ProgramStudi", 'Grade'>
  }
    

  // Custom InputTypes
  /**
   * ProgramStudi findUnique
   */
  export type ProgramStudiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi findUniqueOrThrow
   */
  export type ProgramStudiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi findFirst
   */
  export type ProgramStudiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramStudis.
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramStudis.
     */
    distinct?: ProgramStudiScalarFieldEnum | ProgramStudiScalarFieldEnum[]
  }

  /**
   * ProgramStudi findFirstOrThrow
   */
  export type ProgramStudiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudi to fetch.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramStudis.
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramStudis.
     */
    distinct?: ProgramStudiScalarFieldEnum | ProgramStudiScalarFieldEnum[]
  }

  /**
   * ProgramStudi findMany
   */
  export type ProgramStudiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter, which ProgramStudis to fetch.
     */
    where?: ProgramStudiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramStudis to fetch.
     */
    orderBy?: ProgramStudiOrderByWithRelationInput | ProgramStudiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramStudis.
     */
    cursor?: ProgramStudiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramStudis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramStudis.
     */
    skip?: number
    distinct?: ProgramStudiScalarFieldEnum | ProgramStudiScalarFieldEnum[]
  }

  /**
   * ProgramStudi create
   */
  export type ProgramStudiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramStudi.
     */
    data: XOR<ProgramStudiCreateInput, ProgramStudiUncheckedCreateInput>
  }

  /**
   * ProgramStudi createMany
   */
  export type ProgramStudiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramStudis.
     */
    data: ProgramStudiCreateManyInput | ProgramStudiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramStudi update
   */
  export type ProgramStudiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramStudi.
     */
    data: XOR<ProgramStudiUpdateInput, ProgramStudiUncheckedUpdateInput>
    /**
     * Choose, which ProgramStudi to update.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi updateMany
   */
  export type ProgramStudiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramStudis.
     */
    data: XOR<ProgramStudiUpdateManyMutationInput, ProgramStudiUncheckedUpdateManyInput>
    /**
     * Filter which ProgramStudis to update
     */
    where?: ProgramStudiWhereInput
    /**
     * Limit how many ProgramStudis to update.
     */
    limit?: number
  }

  /**
   * ProgramStudi upsert
   */
  export type ProgramStudiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramStudi to update in case it exists.
     */
    where: ProgramStudiWhereUniqueInput
    /**
     * In case the ProgramStudi found by the `where` argument doesn't exist, create a new ProgramStudi with this data.
     */
    create: XOR<ProgramStudiCreateInput, ProgramStudiUncheckedCreateInput>
    /**
     * In case the ProgramStudi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramStudiUpdateInput, ProgramStudiUncheckedUpdateInput>
  }

  /**
   * ProgramStudi delete
   */
  export type ProgramStudiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
    /**
     * Filter which ProgramStudi to delete.
     */
    where: ProgramStudiWhereUniqueInput
  }

  /**
   * ProgramStudi deleteMany
   */
  export type ProgramStudiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramStudis to delete
     */
    where?: ProgramStudiWhereInput
    /**
     * Limit how many ProgramStudis to delete.
     */
    limit?: number
  }

  /**
   * ProgramStudi.mahasiswa
   */
  export type ProgramStudi$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    cursor?: MahasiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * ProgramStudi without action
   */
  export type ProgramStudiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramStudi
     */
    select?: ProgramStudiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramStudi
     */
    omit?: ProgramStudiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramStudiInclude<ExtArgs> | null
  }


  /**
   * Model Matkul
   */

  export type AggregateMatkul = {
    _count: MatkulCountAggregateOutputType | null
    _avg: MatkulAvgAggregateOutputType | null
    _sum: MatkulSumAggregateOutputType | null
    _min: MatkulMinAggregateOutputType | null
    _max: MatkulMaxAggregateOutputType | null
  }

  export type MatkulAvgAggregateOutputType = {
    no_matkul: number | null
  }

  export type MatkulSumAggregateOutputType = {
    no_matkul: number | null
  }

  export type MatkulMinAggregateOutputType = {
    no_matkul: number | null
    nama_matkul: string | null
    dosen: string | null
  }

  export type MatkulMaxAggregateOutputType = {
    no_matkul: number | null
    nama_matkul: string | null
    dosen: string | null
  }

  export type MatkulCountAggregateOutputType = {
    no_matkul: number
    nama_matkul: number
    dosen: number
    _all: number
  }


  export type MatkulAvgAggregateInputType = {
    no_matkul?: true
  }

  export type MatkulSumAggregateInputType = {
    no_matkul?: true
  }

  export type MatkulMinAggregateInputType = {
    no_matkul?: true
    nama_matkul?: true
    dosen?: true
  }

  export type MatkulMaxAggregateInputType = {
    no_matkul?: true
    nama_matkul?: true
    dosen?: true
  }

  export type MatkulCountAggregateInputType = {
    no_matkul?: true
    nama_matkul?: true
    dosen?: true
    _all?: true
  }

  export type MatkulAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matkul to aggregate.
     */
    where?: MatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matkuls to fetch.
     */
    orderBy?: MatkulOrderByWithRelationInput | MatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matkuls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matkuls
    **/
    _count?: true | MatkulCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatkulAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatkulSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatkulMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatkulMaxAggregateInputType
  }

  export type GetMatkulAggregateType<T extends MatkulAggregateArgs> = {
        [P in keyof T & keyof AggregateMatkul]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatkul[P]>
      : GetScalarType<T[P], AggregateMatkul[P]>
  }




  export type MatkulGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatkulWhereInput
    orderBy?: MatkulOrderByWithAggregationInput | MatkulOrderByWithAggregationInput[]
    by: MatkulScalarFieldEnum[] | MatkulScalarFieldEnum
    having?: MatkulScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatkulCountAggregateInputType | true
    _avg?: MatkulAvgAggregateInputType
    _sum?: MatkulSumAggregateInputType
    _min?: MatkulMinAggregateInputType
    _max?: MatkulMaxAggregateInputType
  }

  export type MatkulGroupByOutputType = {
    no_matkul: number
    nama_matkul: string
    dosen: string
    _count: MatkulCountAggregateOutputType | null
    _avg: MatkulAvgAggregateOutputType | null
    _sum: MatkulSumAggregateOutputType | null
    _min: MatkulMinAggregateOutputType | null
    _max: MatkulMaxAggregateOutputType | null
  }

  type GetMatkulGroupByPayload<T extends MatkulGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatkulGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatkulGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatkulGroupByOutputType[P]>
            : GetScalarType<T[P], MatkulGroupByOutputType[P]>
        }
      >
    >


  export type MatkulSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_matkul?: boolean
    nama_matkul?: boolean
    dosen?: boolean
    ambil_matkul?: boolean | Matkul$ambil_matkulArgs<ExtArgs>
    _count?: boolean | MatkulCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matkul"]>



  export type MatkulSelectScalar = {
    no_matkul?: boolean
    nama_matkul?: boolean
    dosen?: boolean
  }

  export type MatkulOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_matkul" | "nama_matkul" | "dosen", ExtArgs["result"]["matkul"]>
  export type MatkulInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambil_matkul?: boolean | Matkul$ambil_matkulArgs<ExtArgs>
    _count?: boolean | MatkulCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MatkulPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matkul"
    objects: {
      ambil_matkul: Prisma.$AmbilMatkulPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no_matkul: number
      nama_matkul: string
      dosen: string
    }, ExtArgs["result"]["matkul"]>
    composites: {}
  }

  type MatkulGetPayload<S extends boolean | null | undefined | MatkulDefaultArgs> = $Result.GetResult<Prisma.$MatkulPayload, S>

  type MatkulCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatkulFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatkulCountAggregateInputType | true
    }

  export interface MatkulDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matkul'], meta: { name: 'Matkul' } }
    /**
     * Find zero or one Matkul that matches the filter.
     * @param {MatkulFindUniqueArgs} args - Arguments to find a Matkul
     * @example
     * // Get one Matkul
     * const matkul = await prisma.matkul.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatkulFindUniqueArgs>(args: SelectSubset<T, MatkulFindUniqueArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matkul that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatkulFindUniqueOrThrowArgs} args - Arguments to find a Matkul
     * @example
     * // Get one Matkul
     * const matkul = await prisma.matkul.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatkulFindUniqueOrThrowArgs>(args: SelectSubset<T, MatkulFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matkul that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulFindFirstArgs} args - Arguments to find a Matkul
     * @example
     * // Get one Matkul
     * const matkul = await prisma.matkul.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatkulFindFirstArgs>(args?: SelectSubset<T, MatkulFindFirstArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matkul that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulFindFirstOrThrowArgs} args - Arguments to find a Matkul
     * @example
     * // Get one Matkul
     * const matkul = await prisma.matkul.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatkulFindFirstOrThrowArgs>(args?: SelectSubset<T, MatkulFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matkuls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matkuls
     * const matkuls = await prisma.matkul.findMany()
     * 
     * // Get first 10 Matkuls
     * const matkuls = await prisma.matkul.findMany({ take: 10 })
     * 
     * // Only select the `no_matkul`
     * const matkulWithNo_matkulOnly = await prisma.matkul.findMany({ select: { no_matkul: true } })
     * 
     */
    findMany<T extends MatkulFindManyArgs>(args?: SelectSubset<T, MatkulFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matkul.
     * @param {MatkulCreateArgs} args - Arguments to create a Matkul.
     * @example
     * // Create one Matkul
     * const Matkul = await prisma.matkul.create({
     *   data: {
     *     // ... data to create a Matkul
     *   }
     * })
     * 
     */
    create<T extends MatkulCreateArgs>(args: SelectSubset<T, MatkulCreateArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matkuls.
     * @param {MatkulCreateManyArgs} args - Arguments to create many Matkuls.
     * @example
     * // Create many Matkuls
     * const matkul = await prisma.matkul.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatkulCreateManyArgs>(args?: SelectSubset<T, MatkulCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matkul.
     * @param {MatkulDeleteArgs} args - Arguments to delete one Matkul.
     * @example
     * // Delete one Matkul
     * const Matkul = await prisma.matkul.delete({
     *   where: {
     *     // ... filter to delete one Matkul
     *   }
     * })
     * 
     */
    delete<T extends MatkulDeleteArgs>(args: SelectSubset<T, MatkulDeleteArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matkul.
     * @param {MatkulUpdateArgs} args - Arguments to update one Matkul.
     * @example
     * // Update one Matkul
     * const matkul = await prisma.matkul.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatkulUpdateArgs>(args: SelectSubset<T, MatkulUpdateArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matkuls.
     * @param {MatkulDeleteManyArgs} args - Arguments to filter Matkuls to delete.
     * @example
     * // Delete a few Matkuls
     * const { count } = await prisma.matkul.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatkulDeleteManyArgs>(args?: SelectSubset<T, MatkulDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matkuls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matkuls
     * const matkul = await prisma.matkul.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatkulUpdateManyArgs>(args: SelectSubset<T, MatkulUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matkul.
     * @param {MatkulUpsertArgs} args - Arguments to update or create a Matkul.
     * @example
     * // Update or create a Matkul
     * const matkul = await prisma.matkul.upsert({
     *   create: {
     *     // ... data to create a Matkul
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matkul we want to update
     *   }
     * })
     */
    upsert<T extends MatkulUpsertArgs>(args: SelectSubset<T, MatkulUpsertArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matkuls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulCountArgs} args - Arguments to filter Matkuls to count.
     * @example
     * // Count the number of Matkuls
     * const count = await prisma.matkul.count({
     *   where: {
     *     // ... the filter for the Matkuls we want to count
     *   }
     * })
    **/
    count<T extends MatkulCountArgs>(
      args?: Subset<T, MatkulCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatkulCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matkul.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatkulAggregateArgs>(args: Subset<T, MatkulAggregateArgs>): Prisma.PrismaPromise<GetMatkulAggregateType<T>>

    /**
     * Group by Matkul.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatkulGroupByArgs} args - Group by arguments.
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
      T extends MatkulGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatkulGroupByArgs['orderBy'] }
        : { orderBy?: MatkulGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatkulGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatkulGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matkul model
   */
  readonly fields: MatkulFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matkul.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatkulClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ambil_matkul<T extends Matkul$ambil_matkulArgs<ExtArgs> = {}>(args?: Subset<T, Matkul$ambil_matkulArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Matkul model
   */
  interface MatkulFieldRefs {
    readonly no_matkul: FieldRef<"Matkul", 'Int'>
    readonly nama_matkul: FieldRef<"Matkul", 'String'>
    readonly dosen: FieldRef<"Matkul", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Matkul findUnique
   */
  export type MatkulFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * Filter, which Matkul to fetch.
     */
    where: MatkulWhereUniqueInput
  }

  /**
   * Matkul findUniqueOrThrow
   */
  export type MatkulFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * Filter, which Matkul to fetch.
     */
    where: MatkulWhereUniqueInput
  }

  /**
   * Matkul findFirst
   */
  export type MatkulFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * Filter, which Matkul to fetch.
     */
    where?: MatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matkuls to fetch.
     */
    orderBy?: MatkulOrderByWithRelationInput | MatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matkuls.
     */
    cursor?: MatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matkuls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matkuls.
     */
    distinct?: MatkulScalarFieldEnum | MatkulScalarFieldEnum[]
  }

  /**
   * Matkul findFirstOrThrow
   */
  export type MatkulFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * Filter, which Matkul to fetch.
     */
    where?: MatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matkuls to fetch.
     */
    orderBy?: MatkulOrderByWithRelationInput | MatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matkuls.
     */
    cursor?: MatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matkuls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matkuls.
     */
    distinct?: MatkulScalarFieldEnum | MatkulScalarFieldEnum[]
  }

  /**
   * Matkul findMany
   */
  export type MatkulFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * Filter, which Matkuls to fetch.
     */
    where?: MatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matkuls to fetch.
     */
    orderBy?: MatkulOrderByWithRelationInput | MatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matkuls.
     */
    cursor?: MatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matkuls.
     */
    skip?: number
    distinct?: MatkulScalarFieldEnum | MatkulScalarFieldEnum[]
  }

  /**
   * Matkul create
   */
  export type MatkulCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * The data needed to create a Matkul.
     */
    data: XOR<MatkulCreateInput, MatkulUncheckedCreateInput>
  }

  /**
   * Matkul createMany
   */
  export type MatkulCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matkuls.
     */
    data: MatkulCreateManyInput | MatkulCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matkul update
   */
  export type MatkulUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * The data needed to update a Matkul.
     */
    data: XOR<MatkulUpdateInput, MatkulUncheckedUpdateInput>
    /**
     * Choose, which Matkul to update.
     */
    where: MatkulWhereUniqueInput
  }

  /**
   * Matkul updateMany
   */
  export type MatkulUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matkuls.
     */
    data: XOR<MatkulUpdateManyMutationInput, MatkulUncheckedUpdateManyInput>
    /**
     * Filter which Matkuls to update
     */
    where?: MatkulWhereInput
    /**
     * Limit how many Matkuls to update.
     */
    limit?: number
  }

  /**
   * Matkul upsert
   */
  export type MatkulUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * The filter to search for the Matkul to update in case it exists.
     */
    where: MatkulWhereUniqueInput
    /**
     * In case the Matkul found by the `where` argument doesn't exist, create a new Matkul with this data.
     */
    create: XOR<MatkulCreateInput, MatkulUncheckedCreateInput>
    /**
     * In case the Matkul was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatkulUpdateInput, MatkulUncheckedUpdateInput>
  }

  /**
   * Matkul delete
   */
  export type MatkulDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
    /**
     * Filter which Matkul to delete.
     */
    where: MatkulWhereUniqueInput
  }

  /**
   * Matkul deleteMany
   */
  export type MatkulDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matkuls to delete
     */
    where?: MatkulWhereInput
    /**
     * Limit how many Matkuls to delete.
     */
    limit?: number
  }

  /**
   * Matkul.ambil_matkul
   */
  export type Matkul$ambil_matkulArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    where?: AmbilMatkulWhereInput
    orderBy?: AmbilMatkulOrderByWithRelationInput | AmbilMatkulOrderByWithRelationInput[]
    cursor?: AmbilMatkulWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmbilMatkulScalarFieldEnum | AmbilMatkulScalarFieldEnum[]
  }

  /**
   * Matkul without action
   */
  export type MatkulDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matkul
     */
    select?: MatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matkul
     */
    omit?: MatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatkulInclude<ExtArgs> | null
  }


  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaAvgAggregateOutputType = {
    no_mahasiswa: number | null
    no_prodi: number | null
    no_univ: number | null
  }

  export type MahasiswaSumAggregateOutputType = {
    no_mahasiswa: number | null
    no_prodi: number | null
    no_univ: number | null
  }

  export type MahasiswaMinAggregateOutputType = {
    no_mahasiswa: number | null
    no_prodi: number | null
    no_univ: number | null
    nama_mahasiswa: string | null
    tanggal_lahir: Date | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    no_mahasiswa: number | null
    no_prodi: number | null
    no_univ: number | null
    nama_mahasiswa: string | null
    tanggal_lahir: Date | null
  }

  export type MahasiswaCountAggregateOutputType = {
    no_mahasiswa: number
    no_prodi: number
    no_univ: number
    nama_mahasiswa: number
    tanggal_lahir: number
    _all: number
  }


  export type MahasiswaAvgAggregateInputType = {
    no_mahasiswa?: true
    no_prodi?: true
    no_univ?: true
  }

  export type MahasiswaSumAggregateInputType = {
    no_mahasiswa?: true
    no_prodi?: true
    no_univ?: true
  }

  export type MahasiswaMinAggregateInputType = {
    no_mahasiswa?: true
    no_prodi?: true
    no_univ?: true
    nama_mahasiswa?: true
    tanggal_lahir?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    no_mahasiswa?: true
    no_prodi?: true
    no_univ?: true
    nama_mahasiswa?: true
    tanggal_lahir?: true
  }

  export type MahasiswaCountAggregateInputType = {
    no_mahasiswa?: true
    no_prodi?: true
    no_univ?: true
    nama_mahasiswa?: true
    tanggal_lahir?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MahasiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MahasiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _avg?: MahasiswaAvgAggregateInputType
    _sum?: MahasiswaSumAggregateInputType
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    no_mahasiswa: number
    no_prodi: number
    no_univ: number
    nama_mahasiswa: string
    tanggal_lahir: Date
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_mahasiswa?: boolean
    no_prodi?: boolean
    no_univ?: boolean
    nama_mahasiswa?: boolean
    tanggal_lahir?: boolean
    prodi?: boolean | ProgramStudiDefaultArgs<ExtArgs>
    universitas?: boolean | UniversityDefaultArgs<ExtArgs>
    ambil_matkul?: boolean | Mahasiswa$ambil_matkulArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>



  export type MahasiswaSelectScalar = {
    no_mahasiswa?: boolean
    no_prodi?: boolean
    no_univ?: boolean
    nama_mahasiswa?: boolean
    tanggal_lahir?: boolean
  }

  export type MahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_mahasiswa" | "no_prodi" | "no_univ" | "nama_mahasiswa" | "tanggal_lahir", ExtArgs["result"]["mahasiswa"]>
  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prodi?: boolean | ProgramStudiDefaultArgs<ExtArgs>
    universitas?: boolean | UniversityDefaultArgs<ExtArgs>
    ambil_matkul?: boolean | Mahasiswa$ambil_matkulArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      prodi: Prisma.$ProgramStudiPayload<ExtArgs>
      universitas: Prisma.$UniversityPayload<ExtArgs>
      ambil_matkul: Prisma.$AmbilMatkulPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no_mahasiswa: number
      no_prodi: number
      no_univ: number
      nama_mahasiswa: string
      tanggal_lahir: Date
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `no_mahasiswa`
     * const mahasiswaWithNo_mahasiswaOnly = await prisma.mahasiswa.findMany({ select: { no_mahasiswa: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
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
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prodi<T extends ProgramStudiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramStudiDefaultArgs<ExtArgs>>): Prisma__ProgramStudiClient<$Result.GetResult<Prisma.$ProgramStudiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    universitas<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ambil_matkul<T extends Mahasiswa$ambil_matkulArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$ambil_matkulArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mahasiswa model
   */
  interface MahasiswaFieldRefs {
    readonly no_mahasiswa: FieldRef<"Mahasiswa", 'Int'>
    readonly no_prodi: FieldRef<"Mahasiswa", 'Int'>
    readonly no_univ: FieldRef<"Mahasiswa", 'Int'>
    readonly nama_mahasiswa: FieldRef<"Mahasiswa", 'String'>
    readonly tanggal_lahir: FieldRef<"Mahasiswa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * Mahasiswa.ambil_matkul
   */
  export type Mahasiswa$ambil_matkulArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    where?: AmbilMatkulWhereInput
    orderBy?: AmbilMatkulOrderByWithRelationInput | AmbilMatkulOrderByWithRelationInput[]
    cursor?: AmbilMatkulWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmbilMatkulScalarFieldEnum | AmbilMatkulScalarFieldEnum[]
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model AmbilMatkul
   */

  export type AggregateAmbilMatkul = {
    _count: AmbilMatkulCountAggregateOutputType | null
    _avg: AmbilMatkulAvgAggregateOutputType | null
    _sum: AmbilMatkulSumAggregateOutputType | null
    _min: AmbilMatkulMinAggregateOutputType | null
    _max: AmbilMatkulMaxAggregateOutputType | null
  }

  export type AmbilMatkulAvgAggregateOutputType = {
    id: number | null
    no_mahasiswa: number | null
    no_matkul: number | null
  }

  export type AmbilMatkulSumAggregateOutputType = {
    id: number | null
    no_mahasiswa: number | null
    no_matkul: number | null
  }

  export type AmbilMatkulMinAggregateOutputType = {
    id: number | null
    no_mahasiswa: number | null
    no_matkul: number | null
  }

  export type AmbilMatkulMaxAggregateOutputType = {
    id: number | null
    no_mahasiswa: number | null
    no_matkul: number | null
  }

  export type AmbilMatkulCountAggregateOutputType = {
    id: number
    no_mahasiswa: number
    no_matkul: number
    _all: number
  }


  export type AmbilMatkulAvgAggregateInputType = {
    id?: true
    no_mahasiswa?: true
    no_matkul?: true
  }

  export type AmbilMatkulSumAggregateInputType = {
    id?: true
    no_mahasiswa?: true
    no_matkul?: true
  }

  export type AmbilMatkulMinAggregateInputType = {
    id?: true
    no_mahasiswa?: true
    no_matkul?: true
  }

  export type AmbilMatkulMaxAggregateInputType = {
    id?: true
    no_mahasiswa?: true
    no_matkul?: true
  }

  export type AmbilMatkulCountAggregateInputType = {
    id?: true
    no_mahasiswa?: true
    no_matkul?: true
    _all?: true
  }

  export type AmbilMatkulAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmbilMatkul to aggregate.
     */
    where?: AmbilMatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbilMatkuls to fetch.
     */
    orderBy?: AmbilMatkulOrderByWithRelationInput | AmbilMatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmbilMatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbilMatkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbilMatkuls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AmbilMatkuls
    **/
    _count?: true | AmbilMatkulCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmbilMatkulAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmbilMatkulSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmbilMatkulMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmbilMatkulMaxAggregateInputType
  }

  export type GetAmbilMatkulAggregateType<T extends AmbilMatkulAggregateArgs> = {
        [P in keyof T & keyof AggregateAmbilMatkul]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmbilMatkul[P]>
      : GetScalarType<T[P], AggregateAmbilMatkul[P]>
  }




  export type AmbilMatkulGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbilMatkulWhereInput
    orderBy?: AmbilMatkulOrderByWithAggregationInput | AmbilMatkulOrderByWithAggregationInput[]
    by: AmbilMatkulScalarFieldEnum[] | AmbilMatkulScalarFieldEnum
    having?: AmbilMatkulScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmbilMatkulCountAggregateInputType | true
    _avg?: AmbilMatkulAvgAggregateInputType
    _sum?: AmbilMatkulSumAggregateInputType
    _min?: AmbilMatkulMinAggregateInputType
    _max?: AmbilMatkulMaxAggregateInputType
  }

  export type AmbilMatkulGroupByOutputType = {
    id: number
    no_mahasiswa: number
    no_matkul: number
    _count: AmbilMatkulCountAggregateOutputType | null
    _avg: AmbilMatkulAvgAggregateOutputType | null
    _sum: AmbilMatkulSumAggregateOutputType | null
    _min: AmbilMatkulMinAggregateOutputType | null
    _max: AmbilMatkulMaxAggregateOutputType | null
  }

  type GetAmbilMatkulGroupByPayload<T extends AmbilMatkulGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmbilMatkulGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmbilMatkulGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmbilMatkulGroupByOutputType[P]>
            : GetScalarType<T[P], AmbilMatkulGroupByOutputType[P]>
        }
      >
    >


  export type AmbilMatkulSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    no_mahasiswa?: boolean
    no_matkul?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    matkul?: boolean | MatkulDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambilMatkul"]>



  export type AmbilMatkulSelectScalar = {
    id?: boolean
    no_mahasiswa?: boolean
    no_matkul?: boolean
  }

  export type AmbilMatkulOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "no_mahasiswa" | "no_matkul", ExtArgs["result"]["ambilMatkul"]>
  export type AmbilMatkulInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    matkul?: boolean | MatkulDefaultArgs<ExtArgs>
  }

  export type $AmbilMatkulPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AmbilMatkul"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      matkul: Prisma.$MatkulPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      no_mahasiswa: number
      no_matkul: number
    }, ExtArgs["result"]["ambilMatkul"]>
    composites: {}
  }

  type AmbilMatkulGetPayload<S extends boolean | null | undefined | AmbilMatkulDefaultArgs> = $Result.GetResult<Prisma.$AmbilMatkulPayload, S>

  type AmbilMatkulCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmbilMatkulFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmbilMatkulCountAggregateInputType | true
    }

  export interface AmbilMatkulDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AmbilMatkul'], meta: { name: 'AmbilMatkul' } }
    /**
     * Find zero or one AmbilMatkul that matches the filter.
     * @param {AmbilMatkulFindUniqueArgs} args - Arguments to find a AmbilMatkul
     * @example
     * // Get one AmbilMatkul
     * const ambilMatkul = await prisma.ambilMatkul.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbilMatkulFindUniqueArgs>(args: SelectSubset<T, AmbilMatkulFindUniqueArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AmbilMatkul that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbilMatkulFindUniqueOrThrowArgs} args - Arguments to find a AmbilMatkul
     * @example
     * // Get one AmbilMatkul
     * const ambilMatkul = await prisma.ambilMatkul.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbilMatkulFindUniqueOrThrowArgs>(args: SelectSubset<T, AmbilMatkulFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmbilMatkul that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulFindFirstArgs} args - Arguments to find a AmbilMatkul
     * @example
     * // Get one AmbilMatkul
     * const ambilMatkul = await prisma.ambilMatkul.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbilMatkulFindFirstArgs>(args?: SelectSubset<T, AmbilMatkulFindFirstArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmbilMatkul that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulFindFirstOrThrowArgs} args - Arguments to find a AmbilMatkul
     * @example
     * // Get one AmbilMatkul
     * const ambilMatkul = await prisma.ambilMatkul.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbilMatkulFindFirstOrThrowArgs>(args?: SelectSubset<T, AmbilMatkulFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AmbilMatkuls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AmbilMatkuls
     * const ambilMatkuls = await prisma.ambilMatkul.findMany()
     * 
     * // Get first 10 AmbilMatkuls
     * const ambilMatkuls = await prisma.ambilMatkul.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ambilMatkulWithIdOnly = await prisma.ambilMatkul.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmbilMatkulFindManyArgs>(args?: SelectSubset<T, AmbilMatkulFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AmbilMatkul.
     * @param {AmbilMatkulCreateArgs} args - Arguments to create a AmbilMatkul.
     * @example
     * // Create one AmbilMatkul
     * const AmbilMatkul = await prisma.ambilMatkul.create({
     *   data: {
     *     // ... data to create a AmbilMatkul
     *   }
     * })
     * 
     */
    create<T extends AmbilMatkulCreateArgs>(args: SelectSubset<T, AmbilMatkulCreateArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AmbilMatkuls.
     * @param {AmbilMatkulCreateManyArgs} args - Arguments to create many AmbilMatkuls.
     * @example
     * // Create many AmbilMatkuls
     * const ambilMatkul = await prisma.ambilMatkul.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmbilMatkulCreateManyArgs>(args?: SelectSubset<T, AmbilMatkulCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AmbilMatkul.
     * @param {AmbilMatkulDeleteArgs} args - Arguments to delete one AmbilMatkul.
     * @example
     * // Delete one AmbilMatkul
     * const AmbilMatkul = await prisma.ambilMatkul.delete({
     *   where: {
     *     // ... filter to delete one AmbilMatkul
     *   }
     * })
     * 
     */
    delete<T extends AmbilMatkulDeleteArgs>(args: SelectSubset<T, AmbilMatkulDeleteArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AmbilMatkul.
     * @param {AmbilMatkulUpdateArgs} args - Arguments to update one AmbilMatkul.
     * @example
     * // Update one AmbilMatkul
     * const ambilMatkul = await prisma.ambilMatkul.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmbilMatkulUpdateArgs>(args: SelectSubset<T, AmbilMatkulUpdateArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AmbilMatkuls.
     * @param {AmbilMatkulDeleteManyArgs} args - Arguments to filter AmbilMatkuls to delete.
     * @example
     * // Delete a few AmbilMatkuls
     * const { count } = await prisma.ambilMatkul.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmbilMatkulDeleteManyArgs>(args?: SelectSubset<T, AmbilMatkulDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmbilMatkuls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AmbilMatkuls
     * const ambilMatkul = await prisma.ambilMatkul.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmbilMatkulUpdateManyArgs>(args: SelectSubset<T, AmbilMatkulUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AmbilMatkul.
     * @param {AmbilMatkulUpsertArgs} args - Arguments to update or create a AmbilMatkul.
     * @example
     * // Update or create a AmbilMatkul
     * const ambilMatkul = await prisma.ambilMatkul.upsert({
     *   create: {
     *     // ... data to create a AmbilMatkul
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AmbilMatkul we want to update
     *   }
     * })
     */
    upsert<T extends AmbilMatkulUpsertArgs>(args: SelectSubset<T, AmbilMatkulUpsertArgs<ExtArgs>>): Prisma__AmbilMatkulClient<$Result.GetResult<Prisma.$AmbilMatkulPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AmbilMatkuls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulCountArgs} args - Arguments to filter AmbilMatkuls to count.
     * @example
     * // Count the number of AmbilMatkuls
     * const count = await prisma.ambilMatkul.count({
     *   where: {
     *     // ... the filter for the AmbilMatkuls we want to count
     *   }
     * })
    **/
    count<T extends AmbilMatkulCountArgs>(
      args?: Subset<T, AmbilMatkulCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmbilMatkulCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AmbilMatkul.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmbilMatkulAggregateArgs>(args: Subset<T, AmbilMatkulAggregateArgs>): Prisma.PrismaPromise<GetAmbilMatkulAggregateType<T>>

    /**
     * Group by AmbilMatkul.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbilMatkulGroupByArgs} args - Group by arguments.
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
      T extends AmbilMatkulGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmbilMatkulGroupByArgs['orderBy'] }
        : { orderBy?: AmbilMatkulGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmbilMatkulGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbilMatkulGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AmbilMatkul model
   */
  readonly fields: AmbilMatkulFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AmbilMatkul.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmbilMatkulClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matkul<T extends MatkulDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatkulDefaultArgs<ExtArgs>>): Prisma__MatkulClient<$Result.GetResult<Prisma.$MatkulPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AmbilMatkul model
   */
  interface AmbilMatkulFieldRefs {
    readonly id: FieldRef<"AmbilMatkul", 'Int'>
    readonly no_mahasiswa: FieldRef<"AmbilMatkul", 'Int'>
    readonly no_matkul: FieldRef<"AmbilMatkul", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AmbilMatkul findUnique
   */
  export type AmbilMatkulFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * Filter, which AmbilMatkul to fetch.
     */
    where: AmbilMatkulWhereUniqueInput
  }

  /**
   * AmbilMatkul findUniqueOrThrow
   */
  export type AmbilMatkulFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * Filter, which AmbilMatkul to fetch.
     */
    where: AmbilMatkulWhereUniqueInput
  }

  /**
   * AmbilMatkul findFirst
   */
  export type AmbilMatkulFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * Filter, which AmbilMatkul to fetch.
     */
    where?: AmbilMatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbilMatkuls to fetch.
     */
    orderBy?: AmbilMatkulOrderByWithRelationInput | AmbilMatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmbilMatkuls.
     */
    cursor?: AmbilMatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbilMatkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbilMatkuls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmbilMatkuls.
     */
    distinct?: AmbilMatkulScalarFieldEnum | AmbilMatkulScalarFieldEnum[]
  }

  /**
   * AmbilMatkul findFirstOrThrow
   */
  export type AmbilMatkulFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * Filter, which AmbilMatkul to fetch.
     */
    where?: AmbilMatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbilMatkuls to fetch.
     */
    orderBy?: AmbilMatkulOrderByWithRelationInput | AmbilMatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmbilMatkuls.
     */
    cursor?: AmbilMatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbilMatkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbilMatkuls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmbilMatkuls.
     */
    distinct?: AmbilMatkulScalarFieldEnum | AmbilMatkulScalarFieldEnum[]
  }

  /**
   * AmbilMatkul findMany
   */
  export type AmbilMatkulFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * Filter, which AmbilMatkuls to fetch.
     */
    where?: AmbilMatkulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbilMatkuls to fetch.
     */
    orderBy?: AmbilMatkulOrderByWithRelationInput | AmbilMatkulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AmbilMatkuls.
     */
    cursor?: AmbilMatkulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbilMatkuls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbilMatkuls.
     */
    skip?: number
    distinct?: AmbilMatkulScalarFieldEnum | AmbilMatkulScalarFieldEnum[]
  }

  /**
   * AmbilMatkul create
   */
  export type AmbilMatkulCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * The data needed to create a AmbilMatkul.
     */
    data: XOR<AmbilMatkulCreateInput, AmbilMatkulUncheckedCreateInput>
  }

  /**
   * AmbilMatkul createMany
   */
  export type AmbilMatkulCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AmbilMatkuls.
     */
    data: AmbilMatkulCreateManyInput | AmbilMatkulCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AmbilMatkul update
   */
  export type AmbilMatkulUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * The data needed to update a AmbilMatkul.
     */
    data: XOR<AmbilMatkulUpdateInput, AmbilMatkulUncheckedUpdateInput>
    /**
     * Choose, which AmbilMatkul to update.
     */
    where: AmbilMatkulWhereUniqueInput
  }

  /**
   * AmbilMatkul updateMany
   */
  export type AmbilMatkulUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AmbilMatkuls.
     */
    data: XOR<AmbilMatkulUpdateManyMutationInput, AmbilMatkulUncheckedUpdateManyInput>
    /**
     * Filter which AmbilMatkuls to update
     */
    where?: AmbilMatkulWhereInput
    /**
     * Limit how many AmbilMatkuls to update.
     */
    limit?: number
  }

  /**
   * AmbilMatkul upsert
   */
  export type AmbilMatkulUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * The filter to search for the AmbilMatkul to update in case it exists.
     */
    where: AmbilMatkulWhereUniqueInput
    /**
     * In case the AmbilMatkul found by the `where` argument doesn't exist, create a new AmbilMatkul with this data.
     */
    create: XOR<AmbilMatkulCreateInput, AmbilMatkulUncheckedCreateInput>
    /**
     * In case the AmbilMatkul was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmbilMatkulUpdateInput, AmbilMatkulUncheckedUpdateInput>
  }

  /**
   * AmbilMatkul delete
   */
  export type AmbilMatkulDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
    /**
     * Filter which AmbilMatkul to delete.
     */
    where: AmbilMatkulWhereUniqueInput
  }

  /**
   * AmbilMatkul deleteMany
   */
  export type AmbilMatkulDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmbilMatkuls to delete
     */
    where?: AmbilMatkulWhereInput
    /**
     * Limit how many AmbilMatkuls to delete.
     */
    limit?: number
  }

  /**
   * AmbilMatkul without action
   */
  export type AmbilMatkulDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbilMatkul
     */
    select?: AmbilMatkulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbilMatkul
     */
    omit?: AmbilMatkulOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbilMatkulInclude<ExtArgs> | null
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


  export const UniversityScalarFieldEnum: {
    no_univ: 'no_univ',
    nama_aniv: 'nama_aniv',
    grade: 'grade'
  };

  export type UniversityScalarFieldEnum = (typeof UniversityScalarFieldEnum)[keyof typeof UniversityScalarFieldEnum]


  export const ProgramStudiScalarFieldEnum: {
    no_prodi: 'no_prodi',
    nama_prodi: 'nama_prodi',
    grade: 'grade'
  };

  export type ProgramStudiScalarFieldEnum = (typeof ProgramStudiScalarFieldEnum)[keyof typeof ProgramStudiScalarFieldEnum]


  export const MatkulScalarFieldEnum: {
    no_matkul: 'no_matkul',
    nama_matkul: 'nama_matkul',
    dosen: 'dosen'
  };

  export type MatkulScalarFieldEnum = (typeof MatkulScalarFieldEnum)[keyof typeof MatkulScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    no_mahasiswa: 'no_mahasiswa',
    no_prodi: 'no_prodi',
    no_univ: 'no_univ',
    nama_mahasiswa: 'nama_mahasiswa',
    tanggal_lahir: 'tanggal_lahir'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const AmbilMatkulScalarFieldEnum: {
    id: 'id',
    no_mahasiswa: 'no_mahasiswa',
    no_matkul: 'no_matkul'
  };

  export type AmbilMatkulScalarFieldEnum = (typeof AmbilMatkulScalarFieldEnum)[keyof typeof AmbilMatkulScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UniversityOrderByRelevanceFieldEnum: {
    nama_aniv: 'nama_aniv'
  };

  export type UniversityOrderByRelevanceFieldEnum = (typeof UniversityOrderByRelevanceFieldEnum)[keyof typeof UniversityOrderByRelevanceFieldEnum]


  export const ProgramStudiOrderByRelevanceFieldEnum: {
    nama_prodi: 'nama_prodi'
  };

  export type ProgramStudiOrderByRelevanceFieldEnum = (typeof ProgramStudiOrderByRelevanceFieldEnum)[keyof typeof ProgramStudiOrderByRelevanceFieldEnum]


  export const MatkulOrderByRelevanceFieldEnum: {
    nama_matkul: 'nama_matkul',
    dosen: 'dosen'
  };

  export type MatkulOrderByRelevanceFieldEnum = (typeof MatkulOrderByRelevanceFieldEnum)[keyof typeof MatkulOrderByRelevanceFieldEnum]


  export const MahasiswaOrderByRelevanceFieldEnum: {
    nama_mahasiswa: 'nama_mahasiswa'
  };

  export type MahasiswaOrderByRelevanceFieldEnum = (typeof MahasiswaOrderByRelevanceFieldEnum)[keyof typeof MahasiswaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Grade'
   */
  export type EnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UniversityWhereInput = {
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    no_univ?: IntFilter<"University"> | number
    nama_aniv?: StringFilter<"University"> | string
    grade?: EnumGradeFilter<"University"> | $Enums.Grade
    mahasiswa?: MahasiswaListRelationFilter
  }

  export type UniversityOrderByWithRelationInput = {
    no_univ?: SortOrder
    nama_aniv?: SortOrder
    grade?: SortOrder
    mahasiswa?: MahasiswaOrderByRelationAggregateInput
    _relevance?: UniversityOrderByRelevanceInput
  }

  export type UniversityWhereUniqueInput = Prisma.AtLeast<{
    no_univ?: number
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    nama_aniv?: StringFilter<"University"> | string
    grade?: EnumGradeFilter<"University"> | $Enums.Grade
    mahasiswa?: MahasiswaListRelationFilter
  }, "no_univ">

  export type UniversityOrderByWithAggregationInput = {
    no_univ?: SortOrder
    nama_aniv?: SortOrder
    grade?: SortOrder
    _count?: UniversityCountOrderByAggregateInput
    _avg?: UniversityAvgOrderByAggregateInput
    _max?: UniversityMaxOrderByAggregateInput
    _min?: UniversityMinOrderByAggregateInput
    _sum?: UniversitySumOrderByAggregateInput
  }

  export type UniversityScalarWhereWithAggregatesInput = {
    AND?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    OR?: UniversityScalarWhereWithAggregatesInput[]
    NOT?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    no_univ?: IntWithAggregatesFilter<"University"> | number
    nama_aniv?: StringWithAggregatesFilter<"University"> | string
    grade?: EnumGradeWithAggregatesFilter<"University"> | $Enums.Grade
  }

  export type ProgramStudiWhereInput = {
    AND?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    OR?: ProgramStudiWhereInput[]
    NOT?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    no_prodi?: IntFilter<"ProgramStudi"> | number
    nama_prodi?: StringFilter<"ProgramStudi"> | string
    grade?: EnumGradeFilter<"ProgramStudi"> | $Enums.Grade
    mahasiswa?: MahasiswaListRelationFilter
  }

  export type ProgramStudiOrderByWithRelationInput = {
    no_prodi?: SortOrder
    nama_prodi?: SortOrder
    grade?: SortOrder
    mahasiswa?: MahasiswaOrderByRelationAggregateInput
    _relevance?: ProgramStudiOrderByRelevanceInput
  }

  export type ProgramStudiWhereUniqueInput = Prisma.AtLeast<{
    no_prodi?: number
    AND?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    OR?: ProgramStudiWhereInput[]
    NOT?: ProgramStudiWhereInput | ProgramStudiWhereInput[]
    nama_prodi?: StringFilter<"ProgramStudi"> | string
    grade?: EnumGradeFilter<"ProgramStudi"> | $Enums.Grade
    mahasiswa?: MahasiswaListRelationFilter
  }, "no_prodi">

  export type ProgramStudiOrderByWithAggregationInput = {
    no_prodi?: SortOrder
    nama_prodi?: SortOrder
    grade?: SortOrder
    _count?: ProgramStudiCountOrderByAggregateInput
    _avg?: ProgramStudiAvgOrderByAggregateInput
    _max?: ProgramStudiMaxOrderByAggregateInput
    _min?: ProgramStudiMinOrderByAggregateInput
    _sum?: ProgramStudiSumOrderByAggregateInput
  }

  export type ProgramStudiScalarWhereWithAggregatesInput = {
    AND?: ProgramStudiScalarWhereWithAggregatesInput | ProgramStudiScalarWhereWithAggregatesInput[]
    OR?: ProgramStudiScalarWhereWithAggregatesInput[]
    NOT?: ProgramStudiScalarWhereWithAggregatesInput | ProgramStudiScalarWhereWithAggregatesInput[]
    no_prodi?: IntWithAggregatesFilter<"ProgramStudi"> | number
    nama_prodi?: StringWithAggregatesFilter<"ProgramStudi"> | string
    grade?: EnumGradeWithAggregatesFilter<"ProgramStudi"> | $Enums.Grade
  }

  export type MatkulWhereInput = {
    AND?: MatkulWhereInput | MatkulWhereInput[]
    OR?: MatkulWhereInput[]
    NOT?: MatkulWhereInput | MatkulWhereInput[]
    no_matkul?: IntFilter<"Matkul"> | number
    nama_matkul?: StringFilter<"Matkul"> | string
    dosen?: StringFilter<"Matkul"> | string
    ambil_matkul?: AmbilMatkulListRelationFilter
  }

  export type MatkulOrderByWithRelationInput = {
    no_matkul?: SortOrder
    nama_matkul?: SortOrder
    dosen?: SortOrder
    ambil_matkul?: AmbilMatkulOrderByRelationAggregateInput
    _relevance?: MatkulOrderByRelevanceInput
  }

  export type MatkulWhereUniqueInput = Prisma.AtLeast<{
    no_matkul?: number
    AND?: MatkulWhereInput | MatkulWhereInput[]
    OR?: MatkulWhereInput[]
    NOT?: MatkulWhereInput | MatkulWhereInput[]
    nama_matkul?: StringFilter<"Matkul"> | string
    dosen?: StringFilter<"Matkul"> | string
    ambil_matkul?: AmbilMatkulListRelationFilter
  }, "no_matkul">

  export type MatkulOrderByWithAggregationInput = {
    no_matkul?: SortOrder
    nama_matkul?: SortOrder
    dosen?: SortOrder
    _count?: MatkulCountOrderByAggregateInput
    _avg?: MatkulAvgOrderByAggregateInput
    _max?: MatkulMaxOrderByAggregateInput
    _min?: MatkulMinOrderByAggregateInput
    _sum?: MatkulSumOrderByAggregateInput
  }

  export type MatkulScalarWhereWithAggregatesInput = {
    AND?: MatkulScalarWhereWithAggregatesInput | MatkulScalarWhereWithAggregatesInput[]
    OR?: MatkulScalarWhereWithAggregatesInput[]
    NOT?: MatkulScalarWhereWithAggregatesInput | MatkulScalarWhereWithAggregatesInput[]
    no_matkul?: IntWithAggregatesFilter<"Matkul"> | number
    nama_matkul?: StringWithAggregatesFilter<"Matkul"> | string
    dosen?: StringWithAggregatesFilter<"Matkul"> | string
  }

  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    no_mahasiswa?: IntFilter<"Mahasiswa"> | number
    no_prodi?: IntFilter<"Mahasiswa"> | number
    no_univ?: IntFilter<"Mahasiswa"> | number
    nama_mahasiswa?: StringFilter<"Mahasiswa"> | string
    tanggal_lahir?: DateTimeFilter<"Mahasiswa"> | Date | string
    prodi?: XOR<ProgramStudiScalarRelationFilter, ProgramStudiWhereInput>
    universitas?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    ambil_matkul?: AmbilMatkulListRelationFilter
  }

  export type MahasiswaOrderByWithRelationInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
    nama_mahasiswa?: SortOrder
    tanggal_lahir?: SortOrder
    prodi?: ProgramStudiOrderByWithRelationInput
    universitas?: UniversityOrderByWithRelationInput
    ambil_matkul?: AmbilMatkulOrderByRelationAggregateInput
    _relevance?: MahasiswaOrderByRelevanceInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    no_mahasiswa?: number
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    no_prodi?: IntFilter<"Mahasiswa"> | number
    no_univ?: IntFilter<"Mahasiswa"> | number
    nama_mahasiswa?: StringFilter<"Mahasiswa"> | string
    tanggal_lahir?: DateTimeFilter<"Mahasiswa"> | Date | string
    prodi?: XOR<ProgramStudiScalarRelationFilter, ProgramStudiWhereInput>
    universitas?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    ambil_matkul?: AmbilMatkulListRelationFilter
  }, "no_mahasiswa">

  export type MahasiswaOrderByWithAggregationInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
    nama_mahasiswa?: SortOrder
    tanggal_lahir?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _avg?: MahasiswaAvgOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
    _sum?: MahasiswaSumOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    no_mahasiswa?: IntWithAggregatesFilter<"Mahasiswa"> | number
    no_prodi?: IntWithAggregatesFilter<"Mahasiswa"> | number
    no_univ?: IntWithAggregatesFilter<"Mahasiswa"> | number
    nama_mahasiswa?: StringWithAggregatesFilter<"Mahasiswa"> | string
    tanggal_lahir?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
  }

  export type AmbilMatkulWhereInput = {
    AND?: AmbilMatkulWhereInput | AmbilMatkulWhereInput[]
    OR?: AmbilMatkulWhereInput[]
    NOT?: AmbilMatkulWhereInput | AmbilMatkulWhereInput[]
    id?: IntFilter<"AmbilMatkul"> | number
    no_mahasiswa?: IntFilter<"AmbilMatkul"> | number
    no_matkul?: IntFilter<"AmbilMatkul"> | number
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    matkul?: XOR<MatkulScalarRelationFilter, MatkulWhereInput>
  }

  export type AmbilMatkulOrderByWithRelationInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    matkul?: MatkulOrderByWithRelationInput
  }

  export type AmbilMatkulWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AmbilMatkulWhereInput | AmbilMatkulWhereInput[]
    OR?: AmbilMatkulWhereInput[]
    NOT?: AmbilMatkulWhereInput | AmbilMatkulWhereInput[]
    no_mahasiswa?: IntFilter<"AmbilMatkul"> | number
    no_matkul?: IntFilter<"AmbilMatkul"> | number
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    matkul?: XOR<MatkulScalarRelationFilter, MatkulWhereInput>
  }, "id">

  export type AmbilMatkulOrderByWithAggregationInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
    _count?: AmbilMatkulCountOrderByAggregateInput
    _avg?: AmbilMatkulAvgOrderByAggregateInput
    _max?: AmbilMatkulMaxOrderByAggregateInput
    _min?: AmbilMatkulMinOrderByAggregateInput
    _sum?: AmbilMatkulSumOrderByAggregateInput
  }

  export type AmbilMatkulScalarWhereWithAggregatesInput = {
    AND?: AmbilMatkulScalarWhereWithAggregatesInput | AmbilMatkulScalarWhereWithAggregatesInput[]
    OR?: AmbilMatkulScalarWhereWithAggregatesInput[]
    NOT?: AmbilMatkulScalarWhereWithAggregatesInput | AmbilMatkulScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AmbilMatkul"> | number
    no_mahasiswa?: IntWithAggregatesFilter<"AmbilMatkul"> | number
    no_matkul?: IntWithAggregatesFilter<"AmbilMatkul"> | number
  }

  export type UniversityCreateInput = {
    nama_aniv: string
    grade: $Enums.Grade
    mahasiswa?: MahasiswaCreateNestedManyWithoutUniversitasInput
  }

  export type UniversityUncheckedCreateInput = {
    no_univ?: number
    nama_aniv: string
    grade: $Enums.Grade
    mahasiswa?: MahasiswaUncheckedCreateNestedManyWithoutUniversitasInput
  }

  export type UniversityUpdateInput = {
    nama_aniv?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    mahasiswa?: MahasiswaUpdateManyWithoutUniversitasNestedInput
  }

  export type UniversityUncheckedUpdateInput = {
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_aniv?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    mahasiswa?: MahasiswaUncheckedUpdateManyWithoutUniversitasNestedInput
  }

  export type UniversityCreateManyInput = {
    no_univ?: number
    nama_aniv: string
    grade: $Enums.Grade
  }

  export type UniversityUpdateManyMutationInput = {
    nama_aniv?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type UniversityUncheckedUpdateManyInput = {
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_aniv?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type ProgramStudiCreateInput = {
    nama_prodi: string
    grade: $Enums.Grade
    mahasiswa?: MahasiswaCreateNestedManyWithoutProdiInput
  }

  export type ProgramStudiUncheckedCreateInput = {
    no_prodi?: number
    nama_prodi: string
    grade: $Enums.Grade
    mahasiswa?: MahasiswaUncheckedCreateNestedManyWithoutProdiInput
  }

  export type ProgramStudiUpdateInput = {
    nama_prodi?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    mahasiswa?: MahasiswaUpdateManyWithoutProdiNestedInput
  }

  export type ProgramStudiUncheckedUpdateInput = {
    no_prodi?: IntFieldUpdateOperationsInput | number
    nama_prodi?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    mahasiswa?: MahasiswaUncheckedUpdateManyWithoutProdiNestedInput
  }

  export type ProgramStudiCreateManyInput = {
    no_prodi?: number
    nama_prodi: string
    grade: $Enums.Grade
  }

  export type ProgramStudiUpdateManyMutationInput = {
    nama_prodi?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type ProgramStudiUncheckedUpdateManyInput = {
    no_prodi?: IntFieldUpdateOperationsInput | number
    nama_prodi?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type MatkulCreateInput = {
    nama_matkul: string
    dosen: string
    ambil_matkul?: AmbilMatkulCreateNestedManyWithoutMatkulInput
  }

  export type MatkulUncheckedCreateInput = {
    no_matkul?: number
    nama_matkul: string
    dosen: string
    ambil_matkul?: AmbilMatkulUncheckedCreateNestedManyWithoutMatkulInput
  }

  export type MatkulUpdateInput = {
    nama_matkul?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    ambil_matkul?: AmbilMatkulUpdateManyWithoutMatkulNestedInput
  }

  export type MatkulUncheckedUpdateInput = {
    no_matkul?: IntFieldUpdateOperationsInput | number
    nama_matkul?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
    ambil_matkul?: AmbilMatkulUncheckedUpdateManyWithoutMatkulNestedInput
  }

  export type MatkulCreateManyInput = {
    no_matkul?: number
    nama_matkul: string
    dosen: string
  }

  export type MatkulUpdateManyMutationInput = {
    nama_matkul?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
  }

  export type MatkulUncheckedUpdateManyInput = {
    no_matkul?: IntFieldUpdateOperationsInput | number
    nama_matkul?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaCreateInput = {
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    prodi: ProgramStudiCreateNestedOneWithoutMahasiswaInput
    universitas: UniversityCreateNestedOneWithoutMahasiswaInput
    ambil_matkul?: AmbilMatkulCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    no_mahasiswa?: number
    no_prodi: number
    no_univ: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    ambil_matkul?: AmbilMatkulUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    prodi?: ProgramStudiUpdateOneRequiredWithoutMahasiswaNestedInput
    universitas?: UniversityUpdateOneRequiredWithoutMahasiswaNestedInput
    ambil_matkul?: AmbilMatkulUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_prodi?: IntFieldUpdateOperationsInput | number
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    ambil_matkul?: AmbilMatkulUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    no_mahasiswa?: number
    no_prodi: number
    no_univ: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
  }

  export type MahasiswaUpdateManyMutationInput = {
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_prodi?: IntFieldUpdateOperationsInput | number
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbilMatkulCreateInput = {
    mahasiswa: MahasiswaCreateNestedOneWithoutAmbil_matkulInput
    matkul: MatkulCreateNestedOneWithoutAmbil_matkulInput
  }

  export type AmbilMatkulUncheckedCreateInput = {
    id?: number
    no_mahasiswa: number
    no_matkul: number
  }

  export type AmbilMatkulUpdateInput = {
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutAmbil_matkulNestedInput
    matkul?: MatkulUpdateOneRequiredWithoutAmbil_matkulNestedInput
  }

  export type AmbilMatkulUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_matkul?: IntFieldUpdateOperationsInput | number
  }

  export type AmbilMatkulCreateManyInput = {
    id?: number
    no_mahasiswa: number
    no_matkul: number
  }

  export type AmbilMatkulUpdateManyMutationInput = {

  }

  export type AmbilMatkulUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_matkul?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGradeFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeFilter<$PrismaModel> | $Enums.Grade
  }

  export type MahasiswaListRelationFilter = {
    every?: MahasiswaWhereInput
    some?: MahasiswaWhereInput
    none?: MahasiswaWhereInput
  }

  export type MahasiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversityOrderByRelevanceInput = {
    fields: UniversityOrderByRelevanceFieldEnum | UniversityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UniversityCountOrderByAggregateInput = {
    no_univ?: SortOrder
    nama_aniv?: SortOrder
    grade?: SortOrder
  }

  export type UniversityAvgOrderByAggregateInput = {
    no_univ?: SortOrder
  }

  export type UniversityMaxOrderByAggregateInput = {
    no_univ?: SortOrder
    nama_aniv?: SortOrder
    grade?: SortOrder
  }

  export type UniversityMinOrderByAggregateInput = {
    no_univ?: SortOrder
    nama_aniv?: SortOrder
    grade?: SortOrder
  }

  export type UniversitySumOrderByAggregateInput = {
    no_univ?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGradeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeWithAggregatesFilter<$PrismaModel> | $Enums.Grade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeFilter<$PrismaModel>
    _max?: NestedEnumGradeFilter<$PrismaModel>
  }

  export type ProgramStudiOrderByRelevanceInput = {
    fields: ProgramStudiOrderByRelevanceFieldEnum | ProgramStudiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramStudiCountOrderByAggregateInput = {
    no_prodi?: SortOrder
    nama_prodi?: SortOrder
    grade?: SortOrder
  }

  export type ProgramStudiAvgOrderByAggregateInput = {
    no_prodi?: SortOrder
  }

  export type ProgramStudiMaxOrderByAggregateInput = {
    no_prodi?: SortOrder
    nama_prodi?: SortOrder
    grade?: SortOrder
  }

  export type ProgramStudiMinOrderByAggregateInput = {
    no_prodi?: SortOrder
    nama_prodi?: SortOrder
    grade?: SortOrder
  }

  export type ProgramStudiSumOrderByAggregateInput = {
    no_prodi?: SortOrder
  }

  export type AmbilMatkulListRelationFilter = {
    every?: AmbilMatkulWhereInput
    some?: AmbilMatkulWhereInput
    none?: AmbilMatkulWhereInput
  }

  export type AmbilMatkulOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatkulOrderByRelevanceInput = {
    fields: MatkulOrderByRelevanceFieldEnum | MatkulOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MatkulCountOrderByAggregateInput = {
    no_matkul?: SortOrder
    nama_matkul?: SortOrder
    dosen?: SortOrder
  }

  export type MatkulAvgOrderByAggregateInput = {
    no_matkul?: SortOrder
  }

  export type MatkulMaxOrderByAggregateInput = {
    no_matkul?: SortOrder
    nama_matkul?: SortOrder
    dosen?: SortOrder
  }

  export type MatkulMinOrderByAggregateInput = {
    no_matkul?: SortOrder
    nama_matkul?: SortOrder
    dosen?: SortOrder
  }

  export type MatkulSumOrderByAggregateInput = {
    no_matkul?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProgramStudiScalarRelationFilter = {
    is?: ProgramStudiWhereInput
    isNot?: ProgramStudiWhereInput
  }

  export type UniversityScalarRelationFilter = {
    is?: UniversityWhereInput
    isNot?: UniversityWhereInput
  }

  export type MahasiswaOrderByRelevanceInput = {
    fields: MahasiswaOrderByRelevanceFieldEnum | MahasiswaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MahasiswaCountOrderByAggregateInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
    nama_mahasiswa?: SortOrder
    tanggal_lahir?: SortOrder
  }

  export type MahasiswaAvgOrderByAggregateInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
    nama_mahasiswa?: SortOrder
    tanggal_lahir?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
    nama_mahasiswa?: SortOrder
    tanggal_lahir?: SortOrder
  }

  export type MahasiswaSumOrderByAggregateInput = {
    no_mahasiswa?: SortOrder
    no_prodi?: SortOrder
    no_univ?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MahasiswaScalarRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type MatkulScalarRelationFilter = {
    is?: MatkulWhereInput
    isNot?: MatkulWhereInput
  }

  export type AmbilMatkulCountOrderByAggregateInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
  }

  export type AmbilMatkulAvgOrderByAggregateInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
  }

  export type AmbilMatkulMaxOrderByAggregateInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
  }

  export type AmbilMatkulMinOrderByAggregateInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
  }

  export type AmbilMatkulSumOrderByAggregateInput = {
    id?: SortOrder
    no_mahasiswa?: SortOrder
    no_matkul?: SortOrder
  }

  export type MahasiswaCreateNestedManyWithoutUniversitasInput = {
    create?: XOR<MahasiswaCreateWithoutUniversitasInput, MahasiswaUncheckedCreateWithoutUniversitasInput> | MahasiswaCreateWithoutUniversitasInput[] | MahasiswaUncheckedCreateWithoutUniversitasInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutUniversitasInput | MahasiswaCreateOrConnectWithoutUniversitasInput[]
    createMany?: MahasiswaCreateManyUniversitasInputEnvelope
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type MahasiswaUncheckedCreateNestedManyWithoutUniversitasInput = {
    create?: XOR<MahasiswaCreateWithoutUniversitasInput, MahasiswaUncheckedCreateWithoutUniversitasInput> | MahasiswaCreateWithoutUniversitasInput[] | MahasiswaUncheckedCreateWithoutUniversitasInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutUniversitasInput | MahasiswaCreateOrConnectWithoutUniversitasInput[]
    createMany?: MahasiswaCreateManyUniversitasInputEnvelope
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGradeFieldUpdateOperationsInput = {
    set?: $Enums.Grade
  }

  export type MahasiswaUpdateManyWithoutUniversitasNestedInput = {
    create?: XOR<MahasiswaCreateWithoutUniversitasInput, MahasiswaUncheckedCreateWithoutUniversitasInput> | MahasiswaCreateWithoutUniversitasInput[] | MahasiswaUncheckedCreateWithoutUniversitasInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutUniversitasInput | MahasiswaCreateOrConnectWithoutUniversitasInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutUniversitasInput | MahasiswaUpsertWithWhereUniqueWithoutUniversitasInput[]
    createMany?: MahasiswaCreateManyUniversitasInputEnvelope
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutUniversitasInput | MahasiswaUpdateWithWhereUniqueWithoutUniversitasInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutUniversitasInput | MahasiswaUpdateManyWithWhereWithoutUniversitasInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MahasiswaUncheckedUpdateManyWithoutUniversitasNestedInput = {
    create?: XOR<MahasiswaCreateWithoutUniversitasInput, MahasiswaUncheckedCreateWithoutUniversitasInput> | MahasiswaCreateWithoutUniversitasInput[] | MahasiswaUncheckedCreateWithoutUniversitasInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutUniversitasInput | MahasiswaCreateOrConnectWithoutUniversitasInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutUniversitasInput | MahasiswaUpsertWithWhereUniqueWithoutUniversitasInput[]
    createMany?: MahasiswaCreateManyUniversitasInputEnvelope
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutUniversitasInput | MahasiswaUpdateWithWhereUniqueWithoutUniversitasInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutUniversitasInput | MahasiswaUpdateManyWithWhereWithoutUniversitasInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type MahasiswaCreateNestedManyWithoutProdiInput = {
    create?: XOR<MahasiswaCreateWithoutProdiInput, MahasiswaUncheckedCreateWithoutProdiInput> | MahasiswaCreateWithoutProdiInput[] | MahasiswaUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutProdiInput | MahasiswaCreateOrConnectWithoutProdiInput[]
    createMany?: MahasiswaCreateManyProdiInputEnvelope
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type MahasiswaUncheckedCreateNestedManyWithoutProdiInput = {
    create?: XOR<MahasiswaCreateWithoutProdiInput, MahasiswaUncheckedCreateWithoutProdiInput> | MahasiswaCreateWithoutProdiInput[] | MahasiswaUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutProdiInput | MahasiswaCreateOrConnectWithoutProdiInput[]
    createMany?: MahasiswaCreateManyProdiInputEnvelope
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type MahasiswaUpdateManyWithoutProdiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutProdiInput, MahasiswaUncheckedCreateWithoutProdiInput> | MahasiswaCreateWithoutProdiInput[] | MahasiswaUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutProdiInput | MahasiswaCreateOrConnectWithoutProdiInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutProdiInput | MahasiswaUpsertWithWhereUniqueWithoutProdiInput[]
    createMany?: MahasiswaCreateManyProdiInputEnvelope
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutProdiInput | MahasiswaUpdateWithWhereUniqueWithoutProdiInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutProdiInput | MahasiswaUpdateManyWithWhereWithoutProdiInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type MahasiswaUncheckedUpdateManyWithoutProdiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutProdiInput, MahasiswaUncheckedCreateWithoutProdiInput> | MahasiswaCreateWithoutProdiInput[] | MahasiswaUncheckedCreateWithoutProdiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutProdiInput | MahasiswaCreateOrConnectWithoutProdiInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutProdiInput | MahasiswaUpsertWithWhereUniqueWithoutProdiInput[]
    createMany?: MahasiswaCreateManyProdiInputEnvelope
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutProdiInput | MahasiswaUpdateWithWhereUniqueWithoutProdiInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutProdiInput | MahasiswaUpdateManyWithWhereWithoutProdiInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type AmbilMatkulCreateNestedManyWithoutMatkulInput = {
    create?: XOR<AmbilMatkulCreateWithoutMatkulInput, AmbilMatkulUncheckedCreateWithoutMatkulInput> | AmbilMatkulCreateWithoutMatkulInput[] | AmbilMatkulUncheckedCreateWithoutMatkulInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMatkulInput | AmbilMatkulCreateOrConnectWithoutMatkulInput[]
    createMany?: AmbilMatkulCreateManyMatkulInputEnvelope
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
  }

  export type AmbilMatkulUncheckedCreateNestedManyWithoutMatkulInput = {
    create?: XOR<AmbilMatkulCreateWithoutMatkulInput, AmbilMatkulUncheckedCreateWithoutMatkulInput> | AmbilMatkulCreateWithoutMatkulInput[] | AmbilMatkulUncheckedCreateWithoutMatkulInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMatkulInput | AmbilMatkulCreateOrConnectWithoutMatkulInput[]
    createMany?: AmbilMatkulCreateManyMatkulInputEnvelope
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
  }

  export type AmbilMatkulUpdateManyWithoutMatkulNestedInput = {
    create?: XOR<AmbilMatkulCreateWithoutMatkulInput, AmbilMatkulUncheckedCreateWithoutMatkulInput> | AmbilMatkulCreateWithoutMatkulInput[] | AmbilMatkulUncheckedCreateWithoutMatkulInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMatkulInput | AmbilMatkulCreateOrConnectWithoutMatkulInput[]
    upsert?: AmbilMatkulUpsertWithWhereUniqueWithoutMatkulInput | AmbilMatkulUpsertWithWhereUniqueWithoutMatkulInput[]
    createMany?: AmbilMatkulCreateManyMatkulInputEnvelope
    set?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    disconnect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    delete?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    update?: AmbilMatkulUpdateWithWhereUniqueWithoutMatkulInput | AmbilMatkulUpdateWithWhereUniqueWithoutMatkulInput[]
    updateMany?: AmbilMatkulUpdateManyWithWhereWithoutMatkulInput | AmbilMatkulUpdateManyWithWhereWithoutMatkulInput[]
    deleteMany?: AmbilMatkulScalarWhereInput | AmbilMatkulScalarWhereInput[]
  }

  export type AmbilMatkulUncheckedUpdateManyWithoutMatkulNestedInput = {
    create?: XOR<AmbilMatkulCreateWithoutMatkulInput, AmbilMatkulUncheckedCreateWithoutMatkulInput> | AmbilMatkulCreateWithoutMatkulInput[] | AmbilMatkulUncheckedCreateWithoutMatkulInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMatkulInput | AmbilMatkulCreateOrConnectWithoutMatkulInput[]
    upsert?: AmbilMatkulUpsertWithWhereUniqueWithoutMatkulInput | AmbilMatkulUpsertWithWhereUniqueWithoutMatkulInput[]
    createMany?: AmbilMatkulCreateManyMatkulInputEnvelope
    set?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    disconnect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    delete?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    update?: AmbilMatkulUpdateWithWhereUniqueWithoutMatkulInput | AmbilMatkulUpdateWithWhereUniqueWithoutMatkulInput[]
    updateMany?: AmbilMatkulUpdateManyWithWhereWithoutMatkulInput | AmbilMatkulUpdateManyWithWhereWithoutMatkulInput[]
    deleteMany?: AmbilMatkulScalarWhereInput | AmbilMatkulScalarWhereInput[]
  }

  export type ProgramStudiCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<ProgramStudiCreateWithoutMahasiswaInput, ProgramStudiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutMahasiswaInput
    connect?: ProgramStudiWhereUniqueInput
  }

  export type UniversityCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<UniversityCreateWithoutMahasiswaInput, UniversityUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutMahasiswaInput
    connect?: UniversityWhereUniqueInput
  }

  export type AmbilMatkulCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<AmbilMatkulCreateWithoutMahasiswaInput, AmbilMatkulUncheckedCreateWithoutMahasiswaInput> | AmbilMatkulCreateWithoutMahasiswaInput[] | AmbilMatkulUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMahasiswaInput | AmbilMatkulCreateOrConnectWithoutMahasiswaInput[]
    createMany?: AmbilMatkulCreateManyMahasiswaInputEnvelope
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
  }

  export type AmbilMatkulUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<AmbilMatkulCreateWithoutMahasiswaInput, AmbilMatkulUncheckedCreateWithoutMahasiswaInput> | AmbilMatkulCreateWithoutMahasiswaInput[] | AmbilMatkulUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMahasiswaInput | AmbilMatkulCreateOrConnectWithoutMahasiswaInput[]
    createMany?: AmbilMatkulCreateManyMahasiswaInputEnvelope
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgramStudiUpdateOneRequiredWithoutMahasiswaNestedInput = {
    create?: XOR<ProgramStudiCreateWithoutMahasiswaInput, ProgramStudiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: ProgramStudiCreateOrConnectWithoutMahasiswaInput
    upsert?: ProgramStudiUpsertWithoutMahasiswaInput
    connect?: ProgramStudiWhereUniqueInput
    update?: XOR<XOR<ProgramStudiUpdateToOneWithWhereWithoutMahasiswaInput, ProgramStudiUpdateWithoutMahasiswaInput>, ProgramStudiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type UniversityUpdateOneRequiredWithoutMahasiswaNestedInput = {
    create?: XOR<UniversityCreateWithoutMahasiswaInput, UniversityUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutMahasiswaInput
    upsert?: UniversityUpsertWithoutMahasiswaInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutMahasiswaInput, UniversityUpdateWithoutMahasiswaInput>, UniversityUncheckedUpdateWithoutMahasiswaInput>
  }

  export type AmbilMatkulUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<AmbilMatkulCreateWithoutMahasiswaInput, AmbilMatkulUncheckedCreateWithoutMahasiswaInput> | AmbilMatkulCreateWithoutMahasiswaInput[] | AmbilMatkulUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMahasiswaInput | AmbilMatkulCreateOrConnectWithoutMahasiswaInput[]
    upsert?: AmbilMatkulUpsertWithWhereUniqueWithoutMahasiswaInput | AmbilMatkulUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: AmbilMatkulCreateManyMahasiswaInputEnvelope
    set?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    disconnect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    delete?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    update?: AmbilMatkulUpdateWithWhereUniqueWithoutMahasiswaInput | AmbilMatkulUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: AmbilMatkulUpdateManyWithWhereWithoutMahasiswaInput | AmbilMatkulUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: AmbilMatkulScalarWhereInput | AmbilMatkulScalarWhereInput[]
  }

  export type AmbilMatkulUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<AmbilMatkulCreateWithoutMahasiswaInput, AmbilMatkulUncheckedCreateWithoutMahasiswaInput> | AmbilMatkulCreateWithoutMahasiswaInput[] | AmbilMatkulUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AmbilMatkulCreateOrConnectWithoutMahasiswaInput | AmbilMatkulCreateOrConnectWithoutMahasiswaInput[]
    upsert?: AmbilMatkulUpsertWithWhereUniqueWithoutMahasiswaInput | AmbilMatkulUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: AmbilMatkulCreateManyMahasiswaInputEnvelope
    set?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    disconnect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    delete?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    connect?: AmbilMatkulWhereUniqueInput | AmbilMatkulWhereUniqueInput[]
    update?: AmbilMatkulUpdateWithWhereUniqueWithoutMahasiswaInput | AmbilMatkulUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: AmbilMatkulUpdateManyWithWhereWithoutMahasiswaInput | AmbilMatkulUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: AmbilMatkulScalarWhereInput | AmbilMatkulScalarWhereInput[]
  }

  export type MahasiswaCreateNestedOneWithoutAmbil_matkulInput = {
    create?: XOR<MahasiswaCreateWithoutAmbil_matkulInput, MahasiswaUncheckedCreateWithoutAmbil_matkulInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutAmbil_matkulInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MatkulCreateNestedOneWithoutAmbil_matkulInput = {
    create?: XOR<MatkulCreateWithoutAmbil_matkulInput, MatkulUncheckedCreateWithoutAmbil_matkulInput>
    connectOrCreate?: MatkulCreateOrConnectWithoutAmbil_matkulInput
    connect?: MatkulWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutAmbil_matkulNestedInput = {
    create?: XOR<MahasiswaCreateWithoutAmbil_matkulInput, MahasiswaUncheckedCreateWithoutAmbil_matkulInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutAmbil_matkulInput
    upsert?: MahasiswaUpsertWithoutAmbil_matkulInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutAmbil_matkulInput, MahasiswaUpdateWithoutAmbil_matkulInput>, MahasiswaUncheckedUpdateWithoutAmbil_matkulInput>
  }

  export type MatkulUpdateOneRequiredWithoutAmbil_matkulNestedInput = {
    create?: XOR<MatkulCreateWithoutAmbil_matkulInput, MatkulUncheckedCreateWithoutAmbil_matkulInput>
    connectOrCreate?: MatkulCreateOrConnectWithoutAmbil_matkulInput
    upsert?: MatkulUpsertWithoutAmbil_matkulInput
    connect?: MatkulWhereUniqueInput
    update?: XOR<XOR<MatkulUpdateToOneWithWhereWithoutAmbil_matkulInput, MatkulUpdateWithoutAmbil_matkulInput>, MatkulUncheckedUpdateWithoutAmbil_matkulInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGradeFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeFilter<$PrismaModel> | $Enums.Grade
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGradeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeWithAggregatesFilter<$PrismaModel> | $Enums.Grade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeFilter<$PrismaModel>
    _max?: NestedEnumGradeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MahasiswaCreateWithoutUniversitasInput = {
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    prodi: ProgramStudiCreateNestedOneWithoutMahasiswaInput
    ambil_matkul?: AmbilMatkulCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutUniversitasInput = {
    no_mahasiswa?: number
    no_prodi: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    ambil_matkul?: AmbilMatkulUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutUniversitasInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutUniversitasInput, MahasiswaUncheckedCreateWithoutUniversitasInput>
  }

  export type MahasiswaCreateManyUniversitasInputEnvelope = {
    data: MahasiswaCreateManyUniversitasInput | MahasiswaCreateManyUniversitasInput[]
    skipDuplicates?: boolean
  }

  export type MahasiswaUpsertWithWhereUniqueWithoutUniversitasInput = {
    where: MahasiswaWhereUniqueInput
    update: XOR<MahasiswaUpdateWithoutUniversitasInput, MahasiswaUncheckedUpdateWithoutUniversitasInput>
    create: XOR<MahasiswaCreateWithoutUniversitasInput, MahasiswaUncheckedCreateWithoutUniversitasInput>
  }

  export type MahasiswaUpdateWithWhereUniqueWithoutUniversitasInput = {
    where: MahasiswaWhereUniqueInput
    data: XOR<MahasiswaUpdateWithoutUniversitasInput, MahasiswaUncheckedUpdateWithoutUniversitasInput>
  }

  export type MahasiswaUpdateManyWithWhereWithoutUniversitasInput = {
    where: MahasiswaScalarWhereInput
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyWithoutUniversitasInput>
  }

  export type MahasiswaScalarWhereInput = {
    AND?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
    OR?: MahasiswaScalarWhereInput[]
    NOT?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
    no_mahasiswa?: IntFilter<"Mahasiswa"> | number
    no_prodi?: IntFilter<"Mahasiswa"> | number
    no_univ?: IntFilter<"Mahasiswa"> | number
    nama_mahasiswa?: StringFilter<"Mahasiswa"> | string
    tanggal_lahir?: DateTimeFilter<"Mahasiswa"> | Date | string
  }

  export type MahasiswaCreateWithoutProdiInput = {
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    universitas: UniversityCreateNestedOneWithoutMahasiswaInput
    ambil_matkul?: AmbilMatkulCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutProdiInput = {
    no_mahasiswa?: number
    no_univ: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    ambil_matkul?: AmbilMatkulUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutProdiInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutProdiInput, MahasiswaUncheckedCreateWithoutProdiInput>
  }

  export type MahasiswaCreateManyProdiInputEnvelope = {
    data: MahasiswaCreateManyProdiInput | MahasiswaCreateManyProdiInput[]
    skipDuplicates?: boolean
  }

  export type MahasiswaUpsertWithWhereUniqueWithoutProdiInput = {
    where: MahasiswaWhereUniqueInput
    update: XOR<MahasiswaUpdateWithoutProdiInput, MahasiswaUncheckedUpdateWithoutProdiInput>
    create: XOR<MahasiswaCreateWithoutProdiInput, MahasiswaUncheckedCreateWithoutProdiInput>
  }

  export type MahasiswaUpdateWithWhereUniqueWithoutProdiInput = {
    where: MahasiswaWhereUniqueInput
    data: XOR<MahasiswaUpdateWithoutProdiInput, MahasiswaUncheckedUpdateWithoutProdiInput>
  }

  export type MahasiswaUpdateManyWithWhereWithoutProdiInput = {
    where: MahasiswaScalarWhereInput
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyWithoutProdiInput>
  }

  export type AmbilMatkulCreateWithoutMatkulInput = {
    mahasiswa: MahasiswaCreateNestedOneWithoutAmbil_matkulInput
  }

  export type AmbilMatkulUncheckedCreateWithoutMatkulInput = {
    id?: number
    no_mahasiswa: number
  }

  export type AmbilMatkulCreateOrConnectWithoutMatkulInput = {
    where: AmbilMatkulWhereUniqueInput
    create: XOR<AmbilMatkulCreateWithoutMatkulInput, AmbilMatkulUncheckedCreateWithoutMatkulInput>
  }

  export type AmbilMatkulCreateManyMatkulInputEnvelope = {
    data: AmbilMatkulCreateManyMatkulInput | AmbilMatkulCreateManyMatkulInput[]
    skipDuplicates?: boolean
  }

  export type AmbilMatkulUpsertWithWhereUniqueWithoutMatkulInput = {
    where: AmbilMatkulWhereUniqueInput
    update: XOR<AmbilMatkulUpdateWithoutMatkulInput, AmbilMatkulUncheckedUpdateWithoutMatkulInput>
    create: XOR<AmbilMatkulCreateWithoutMatkulInput, AmbilMatkulUncheckedCreateWithoutMatkulInput>
  }

  export type AmbilMatkulUpdateWithWhereUniqueWithoutMatkulInput = {
    where: AmbilMatkulWhereUniqueInput
    data: XOR<AmbilMatkulUpdateWithoutMatkulInput, AmbilMatkulUncheckedUpdateWithoutMatkulInput>
  }

  export type AmbilMatkulUpdateManyWithWhereWithoutMatkulInput = {
    where: AmbilMatkulScalarWhereInput
    data: XOR<AmbilMatkulUpdateManyMutationInput, AmbilMatkulUncheckedUpdateManyWithoutMatkulInput>
  }

  export type AmbilMatkulScalarWhereInput = {
    AND?: AmbilMatkulScalarWhereInput | AmbilMatkulScalarWhereInput[]
    OR?: AmbilMatkulScalarWhereInput[]
    NOT?: AmbilMatkulScalarWhereInput | AmbilMatkulScalarWhereInput[]
    id?: IntFilter<"AmbilMatkul"> | number
    no_mahasiswa?: IntFilter<"AmbilMatkul"> | number
    no_matkul?: IntFilter<"AmbilMatkul"> | number
  }

  export type ProgramStudiCreateWithoutMahasiswaInput = {
    nama_prodi: string
    grade: $Enums.Grade
  }

  export type ProgramStudiUncheckedCreateWithoutMahasiswaInput = {
    no_prodi?: number
    nama_prodi: string
    grade: $Enums.Grade
  }

  export type ProgramStudiCreateOrConnectWithoutMahasiswaInput = {
    where: ProgramStudiWhereUniqueInput
    create: XOR<ProgramStudiCreateWithoutMahasiswaInput, ProgramStudiUncheckedCreateWithoutMahasiswaInput>
  }

  export type UniversityCreateWithoutMahasiswaInput = {
    nama_aniv: string
    grade: $Enums.Grade
  }

  export type UniversityUncheckedCreateWithoutMahasiswaInput = {
    no_univ?: number
    nama_aniv: string
    grade: $Enums.Grade
  }

  export type UniversityCreateOrConnectWithoutMahasiswaInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutMahasiswaInput, UniversityUncheckedCreateWithoutMahasiswaInput>
  }

  export type AmbilMatkulCreateWithoutMahasiswaInput = {
    matkul: MatkulCreateNestedOneWithoutAmbil_matkulInput
  }

  export type AmbilMatkulUncheckedCreateWithoutMahasiswaInput = {
    id?: number
    no_matkul: number
  }

  export type AmbilMatkulCreateOrConnectWithoutMahasiswaInput = {
    where: AmbilMatkulWhereUniqueInput
    create: XOR<AmbilMatkulCreateWithoutMahasiswaInput, AmbilMatkulUncheckedCreateWithoutMahasiswaInput>
  }

  export type AmbilMatkulCreateManyMahasiswaInputEnvelope = {
    data: AmbilMatkulCreateManyMahasiswaInput | AmbilMatkulCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type ProgramStudiUpsertWithoutMahasiswaInput = {
    update: XOR<ProgramStudiUpdateWithoutMahasiswaInput, ProgramStudiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<ProgramStudiCreateWithoutMahasiswaInput, ProgramStudiUncheckedCreateWithoutMahasiswaInput>
    where?: ProgramStudiWhereInput
  }

  export type ProgramStudiUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: ProgramStudiWhereInput
    data: XOR<ProgramStudiUpdateWithoutMahasiswaInput, ProgramStudiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type ProgramStudiUpdateWithoutMahasiswaInput = {
    nama_prodi?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type ProgramStudiUncheckedUpdateWithoutMahasiswaInput = {
    no_prodi?: IntFieldUpdateOperationsInput | number
    nama_prodi?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type UniversityUpsertWithoutMahasiswaInput = {
    update: XOR<UniversityUpdateWithoutMahasiswaInput, UniversityUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<UniversityCreateWithoutMahasiswaInput, UniversityUncheckedCreateWithoutMahasiswaInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutMahasiswaInput, UniversityUncheckedUpdateWithoutMahasiswaInput>
  }

  export type UniversityUpdateWithoutMahasiswaInput = {
    nama_aniv?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type UniversityUncheckedUpdateWithoutMahasiswaInput = {
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_aniv?: StringFieldUpdateOperationsInput | string
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
  }

  export type AmbilMatkulUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: AmbilMatkulWhereUniqueInput
    update: XOR<AmbilMatkulUpdateWithoutMahasiswaInput, AmbilMatkulUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<AmbilMatkulCreateWithoutMahasiswaInput, AmbilMatkulUncheckedCreateWithoutMahasiswaInput>
  }

  export type AmbilMatkulUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: AmbilMatkulWhereUniqueInput
    data: XOR<AmbilMatkulUpdateWithoutMahasiswaInput, AmbilMatkulUncheckedUpdateWithoutMahasiswaInput>
  }

  export type AmbilMatkulUpdateManyWithWhereWithoutMahasiswaInput = {
    where: AmbilMatkulScalarWhereInput
    data: XOR<AmbilMatkulUpdateManyMutationInput, AmbilMatkulUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type MahasiswaCreateWithoutAmbil_matkulInput = {
    nama_mahasiswa: string
    tanggal_lahir: Date | string
    prodi: ProgramStudiCreateNestedOneWithoutMahasiswaInput
    universitas: UniversityCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutAmbil_matkulInput = {
    no_mahasiswa?: number
    no_prodi: number
    no_univ: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
  }

  export type MahasiswaCreateOrConnectWithoutAmbil_matkulInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutAmbil_matkulInput, MahasiswaUncheckedCreateWithoutAmbil_matkulInput>
  }

  export type MatkulCreateWithoutAmbil_matkulInput = {
    nama_matkul: string
    dosen: string
  }

  export type MatkulUncheckedCreateWithoutAmbil_matkulInput = {
    no_matkul?: number
    nama_matkul: string
    dosen: string
  }

  export type MatkulCreateOrConnectWithoutAmbil_matkulInput = {
    where: MatkulWhereUniqueInput
    create: XOR<MatkulCreateWithoutAmbil_matkulInput, MatkulUncheckedCreateWithoutAmbil_matkulInput>
  }

  export type MahasiswaUpsertWithoutAmbil_matkulInput = {
    update: XOR<MahasiswaUpdateWithoutAmbil_matkulInput, MahasiswaUncheckedUpdateWithoutAmbil_matkulInput>
    create: XOR<MahasiswaCreateWithoutAmbil_matkulInput, MahasiswaUncheckedCreateWithoutAmbil_matkulInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutAmbil_matkulInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutAmbil_matkulInput, MahasiswaUncheckedUpdateWithoutAmbil_matkulInput>
  }

  export type MahasiswaUpdateWithoutAmbil_matkulInput = {
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    prodi?: ProgramStudiUpdateOneRequiredWithoutMahasiswaNestedInput
    universitas?: UniversityUpdateOneRequiredWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutAmbil_matkulInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_prodi?: IntFieldUpdateOperationsInput | number
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatkulUpsertWithoutAmbil_matkulInput = {
    update: XOR<MatkulUpdateWithoutAmbil_matkulInput, MatkulUncheckedUpdateWithoutAmbil_matkulInput>
    create: XOR<MatkulCreateWithoutAmbil_matkulInput, MatkulUncheckedCreateWithoutAmbil_matkulInput>
    where?: MatkulWhereInput
  }

  export type MatkulUpdateToOneWithWhereWithoutAmbil_matkulInput = {
    where?: MatkulWhereInput
    data: XOR<MatkulUpdateWithoutAmbil_matkulInput, MatkulUncheckedUpdateWithoutAmbil_matkulInput>
  }

  export type MatkulUpdateWithoutAmbil_matkulInput = {
    nama_matkul?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
  }

  export type MatkulUncheckedUpdateWithoutAmbil_matkulInput = {
    no_matkul?: IntFieldUpdateOperationsInput | number
    nama_matkul?: StringFieldUpdateOperationsInput | string
    dosen?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaCreateManyUniversitasInput = {
    no_mahasiswa?: number
    no_prodi: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
  }

  export type MahasiswaUpdateWithoutUniversitasInput = {
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    prodi?: ProgramStudiUpdateOneRequiredWithoutMahasiswaNestedInput
    ambil_matkul?: AmbilMatkulUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutUniversitasInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_prodi?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    ambil_matkul?: AmbilMatkulUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateManyWithoutUniversitasInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_prodi?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateManyProdiInput = {
    no_mahasiswa?: number
    no_univ: number
    nama_mahasiswa: string
    tanggal_lahir: Date | string
  }

  export type MahasiswaUpdateWithoutProdiInput = {
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    universitas?: UniversityUpdateOneRequiredWithoutMahasiswaNestedInput
    ambil_matkul?: AmbilMatkulUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutProdiInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    ambil_matkul?: AmbilMatkulUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateManyWithoutProdiInput = {
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
    no_univ?: IntFieldUpdateOperationsInput | number
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbilMatkulCreateManyMatkulInput = {
    id?: number
    no_mahasiswa: number
  }

  export type AmbilMatkulUpdateWithoutMatkulInput = {
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutAmbil_matkulNestedInput
  }

  export type AmbilMatkulUncheckedUpdateWithoutMatkulInput = {
    id?: IntFieldUpdateOperationsInput | number
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
  }

  export type AmbilMatkulUncheckedUpdateManyWithoutMatkulInput = {
    id?: IntFieldUpdateOperationsInput | number
    no_mahasiswa?: IntFieldUpdateOperationsInput | number
  }

  export type AmbilMatkulCreateManyMahasiswaInput = {
    id?: number
    no_matkul: number
  }

  export type AmbilMatkulUpdateWithoutMahasiswaInput = {
    matkul?: MatkulUpdateOneRequiredWithoutAmbil_matkulNestedInput
  }

  export type AmbilMatkulUncheckedUpdateWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    no_matkul?: IntFieldUpdateOperationsInput | number
  }

  export type AmbilMatkulUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    no_matkul?: IntFieldUpdateOperationsInput | number
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