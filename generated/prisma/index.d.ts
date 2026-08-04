
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model ServiceCategory
 * 
 */
export type ServiceCategory = $Result.DefaultSelection<Prisma.$ServiceCategoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PaymentPart
 * 
 */
export type PaymentPart = $Result.DefaultSelection<Prisma.$PaymentPartPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Estimate
 * 
 */
export type Estimate = $Result.DefaultSelection<Prisma.$EstimatePayload>
/**
 * Model Settlement
 * 
 */
export type Settlement = $Result.DefaultSelection<Prisma.$SettlementPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model IntegrationLog
 * 
 */
export type IntegrationLog = $Result.DefaultSelection<Prisma.$IntegrationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TECHNICIAN: 'TECHNICIAN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ServiceStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  CLOSED: 'CLOSED'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
  CARD: 'CARD',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const EstimateStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

export type EstimateStatus = (typeof EstimateStatus)[keyof typeof EstimateStatus]


export const SettlementStatus: {
  PENDING: 'PENDING',
  SETTLED: 'SETTLED'
};

export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type EstimateStatus = $Enums.EstimateStatus

export const EstimateStatus: typeof $Enums.EstimateStatus

export type SettlementStatus = $Enums.SettlementStatus

export const SettlementStatus: typeof $Enums.SettlementStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceCategory`: Exposes CRUD operations for the **ServiceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCategories
    * const serviceCategories = await prisma.serviceCategory.findMany()
    * ```
    */
  get serviceCategory(): Prisma.ServiceCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPart`: Exposes CRUD operations for the **PaymentPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentParts
    * const paymentParts = await prisma.paymentPart.findMany()
    * ```
    */
  get paymentPart(): Prisma.PaymentPartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estimate`: Exposes CRUD operations for the **Estimate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estimates
    * const estimates = await prisma.estimate.findMany()
    * ```
    */
  get estimate(): Prisma.EstimateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settlement`: Exposes CRUD operations for the **Settlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settlements
    * const settlements = await prisma.settlement.findMany()
    * ```
    */
  get settlement(): Prisma.SettlementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrationLog`: Exposes CRUD operations for the **IntegrationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationLogs
    * const integrationLogs = await prisma.integrationLog.findMany()
    * ```
    */
  get integrationLog(): Prisma.IntegrationLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Client: 'Client',
    ServiceCategory: 'ServiceCategory',
    Service: 'Service',
    Payment: 'Payment',
    PaymentPart: 'PaymentPart',
    Supplier: 'Supplier',
    Estimate: 'Estimate',
    Settlement: 'Settlement',
    ActivityLog: 'ActivityLog',
    IntegrationLog: 'IntegrationLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "serviceCategory" | "service" | "payment" | "paymentPart" | "supplier" | "estimate" | "settlement" | "activityLog" | "integrationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      ServiceCategory: {
        payload: Prisma.$ServiceCategoryPayload<ExtArgs>
        fields: Prisma.ServiceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findMany: {
            args: Prisma.ServiceCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          create: {
            args: Prisma.ServiceCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          createMany: {
            args: Prisma.ServiceCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          delete: {
            args: Prisma.ServiceCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          update: {
            args: Prisma.ServiceCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ServiceCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCategory>
          }
          groupBy: {
            args: Prisma.ServiceCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentPart: {
        payload: Prisma.$PaymentPartPayload<ExtArgs>
        fields: Prisma.PaymentPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>
          }
          findFirst: {
            args: Prisma.PaymentPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>
          }
          findMany: {
            args: Prisma.PaymentPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>[]
          }
          create: {
            args: Prisma.PaymentPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>
          }
          createMany: {
            args: Prisma.PaymentPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>[]
          }
          delete: {
            args: Prisma.PaymentPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>
          }
          update: {
            args: Prisma.PaymentPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>
          }
          deleteMany: {
            args: Prisma.PaymentPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>[]
          }
          upsert: {
            args: Prisma.PaymentPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPartPayload>
          }
          aggregate: {
            args: Prisma.PaymentPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPart>
          }
          groupBy: {
            args: Prisma.PaymentPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPartCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPartCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Estimate: {
        payload: Prisma.$EstimatePayload<ExtArgs>
        fields: Prisma.EstimateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstimateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstimateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          findFirst: {
            args: Prisma.EstimateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstimateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          findMany: {
            args: Prisma.EstimateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>[]
          }
          create: {
            args: Prisma.EstimateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          createMany: {
            args: Prisma.EstimateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstimateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>[]
          }
          delete: {
            args: Prisma.EstimateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          update: {
            args: Prisma.EstimateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          deleteMany: {
            args: Prisma.EstimateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstimateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstimateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>[]
          }
          upsert: {
            args: Prisma.EstimateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstimatePayload>
          }
          aggregate: {
            args: Prisma.EstimateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstimate>
          }
          groupBy: {
            args: Prisma.EstimateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstimateGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstimateCountArgs<ExtArgs>
            result: $Utils.Optional<EstimateCountAggregateOutputType> | number
          }
        }
      }
      Settlement: {
        payload: Prisma.$SettlementPayload<ExtArgs>
        fields: Prisma.SettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findFirst: {
            args: Prisma.SettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findMany: {
            args: Prisma.SettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          create: {
            args: Prisma.SettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          createMany: {
            args: Prisma.SettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          delete: {
            args: Prisma.SettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          update: {
            args: Prisma.SettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          deleteMany: {
            args: Prisma.SettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettlementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          upsert: {
            args: Prisma.SettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          aggregate: {
            args: Prisma.SettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlement>
          }
          groupBy: {
            args: Prisma.SettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      IntegrationLog: {
        payload: Prisma.$IntegrationLogPayload<ExtArgs>
        fields: Prisma.IntegrationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>
          }
          findFirst: {
            args: Prisma.IntegrationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>
          }
          findMany: {
            args: Prisma.IntegrationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>[]
          }
          create: {
            args: Prisma.IntegrationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>
          }
          createMany: {
            args: Prisma.IntegrationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>[]
          }
          delete: {
            args: Prisma.IntegrationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>
          }
          update: {
            args: Prisma.IntegrationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationLogPayload>
          }
          aggregate: {
            args: Prisma.IntegrationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationLog>
          }
          groupBy: {
            args: Prisma.IntegrationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationLogCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    serviceCategory?: ServiceCategoryOmit
    service?: ServiceOmit
    payment?: PaymentOmit
    paymentPart?: PaymentPartOmit
    supplier?: SupplierOmit
    estimate?: EstimateOmit
    settlement?: SettlementOmit
    activityLog?: ActivityLogOmit
    integrationLog?: IntegrationLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    servicesAsTechnician: number
    servicesCreated: number
    servicesClosed: number
    payments: number
    estimates: number
    settlementsAsTechnician: number
    settlementsLiquidated: number
    activityLogs: number
    integrationLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicesAsTechnician?: boolean | UserCountOutputTypeCountServicesAsTechnicianArgs
    servicesCreated?: boolean | UserCountOutputTypeCountServicesCreatedArgs
    servicesClosed?: boolean | UserCountOutputTypeCountServicesClosedArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    estimates?: boolean | UserCountOutputTypeCountEstimatesArgs
    settlementsAsTechnician?: boolean | UserCountOutputTypeCountSettlementsAsTechnicianArgs
    settlementsLiquidated?: boolean | UserCountOutputTypeCountSettlementsLiquidatedArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    integrationLogs?: boolean | UserCountOutputTypeCountIntegrationLogsArgs
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
  export type UserCountOutputTypeCountServicesAsTechnicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesClosedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEstimatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsAsTechnicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsLiquidatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationLogWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    services: number
    estimates: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ClientCountOutputTypeCountServicesArgs
    estimates?: boolean | ClientCountOutputTypeCountEstimatesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEstimatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimateWhereInput
  }


  /**
   * Count Type ServiceCategoryCountOutputType
   */

  export type ServiceCategoryCountOutputType = {
    services: number
  }

  export type ServiceCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceCategoryCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategoryCountOutputType
     */
    select?: ServiceCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    activityLogs: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLogs?: boolean | ServiceCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    parts: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | PaymentCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPartWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    paymentParts: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentParts?: boolean | SupplierCountOutputTypeCountPaymentPartsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPaymentPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPartWhereInput
  }


  /**
   * Count Type SettlementCountOutputType
   */

  export type SettlementCountOutputType = {
    payments: number
  }

  export type SettlementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SettlementCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SettlementCountOutputType without action
   */
  export type SettlementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementCountOutputType
     */
    select?: SettlementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SettlementCountOutputType without action
   */
  export type SettlementCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

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
    role: $Enums.Role | null
    avatar: string | null
    passwordHash: string | null
    phone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    avatar: string | null
    passwordHash: string | null
    phone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    avatar: number
    passwordHash: number
    phone: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    avatar?: true
    passwordHash?: true
    phone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    avatar?: true
    passwordHash?: true
    phone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    avatar?: true
    passwordHash?: true
    phone?: true
    isActive?: true
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
    name: string
    role: $Enums.Role
    avatar: string | null
    passwordHash: string
    phone: string | null
    isActive: boolean
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
    role?: boolean
    avatar?: boolean
    passwordHash?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servicesAsTechnician?: boolean | User$servicesAsTechnicianArgs<ExtArgs>
    servicesCreated?: boolean | User$servicesCreatedArgs<ExtArgs>
    servicesClosed?: boolean | User$servicesClosedArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    estimates?: boolean | User$estimatesArgs<ExtArgs>
    settlementsAsTechnician?: boolean | User$settlementsAsTechnicianArgs<ExtArgs>
    settlementsLiquidated?: boolean | User$settlementsLiquidatedArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    integrationLogs?: boolean | User$integrationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    passwordHash?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    passwordHash?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    passwordHash?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "avatar" | "passwordHash" | "phone" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicesAsTechnician?: boolean | User$servicesAsTechnicianArgs<ExtArgs>
    servicesCreated?: boolean | User$servicesCreatedArgs<ExtArgs>
    servicesClosed?: boolean | User$servicesClosedArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    estimates?: boolean | User$estimatesArgs<ExtArgs>
    settlementsAsTechnician?: boolean | User$settlementsAsTechnicianArgs<ExtArgs>
    settlementsLiquidated?: boolean | User$settlementsLiquidatedArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    integrationLogs?: boolean | User$integrationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      servicesAsTechnician: Prisma.$ServicePayload<ExtArgs>[]
      servicesCreated: Prisma.$ServicePayload<ExtArgs>[]
      servicesClosed: Prisma.$ServicePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      estimates: Prisma.$EstimatePayload<ExtArgs>[]
      settlementsAsTechnician: Prisma.$SettlementPayload<ExtArgs>[]
      settlementsLiquidated: Prisma.$SettlementPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      integrationLogs: Prisma.$IntegrationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: $Enums.Role
      avatar: string | null
      passwordHash: string
      phone: string | null
      isActive: boolean
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
    servicesAsTechnician<T extends User$servicesAsTechnicianArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesAsTechnicianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicesCreated<T extends User$servicesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicesClosed<T extends User$servicesClosedArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesClosedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estimates<T extends User$estimatesArgs<ExtArgs> = {}>(args?: Subset<T, User$estimatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlementsAsTechnician<T extends User$settlementsAsTechnicianArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsAsTechnicianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlementsLiquidated<T extends User$settlementsLiquidatedArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsLiquidatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrationLogs<T extends User$integrationLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
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
   * User.servicesAsTechnician
   */
  export type User$servicesAsTechnicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.servicesCreated
   */
  export type User$servicesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.servicesClosed
   */
  export type User$servicesClosedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.estimates
   */
  export type User$estimatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    where?: EstimateWhereInput
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    cursor?: EstimateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * User.settlementsAsTechnician
   */
  export type User$settlementsAsTechnicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User.settlementsLiquidated
   */
  export type User$settlementsLiquidatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.integrationLogs
   */
  export type User$integrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    where?: IntegrationLogWhereInput
    orderBy?: IntegrationLogOrderByWithRelationInput | IntegrationLogOrderByWithRelationInput[]
    cursor?: IntegrationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationLogScalarFieldEnum | IntegrationLogScalarFieldEnum[]
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
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    city: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    address: string | null
    city: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Client$servicesArgs<ExtArgs>
    estimates?: boolean | Client$estimatesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "city" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Client$servicesArgs<ExtArgs>
    estimates?: boolean | Client$estimatesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      estimates: Prisma.$EstimatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      address: string | null
      city: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Client$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estimates<T extends Client$estimatesArgs<ExtArgs> = {}>(args?: Subset<T, Client$estimatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.services
   */
  export type Client$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Client.estimates
   */
  export type Client$estimatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    where?: EstimateWhereInput
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    cursor?: EstimateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model ServiceCategory
   */

  export type AggregateServiceCategory = {
    _count: ServiceCategoryCountAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  export type ServiceCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    icon: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    icon: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    icon: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategory to aggregate.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCategories
    **/
    _count?: true | ServiceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type GetServiceCategoryAggregateType<T extends ServiceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCategory[P]>
      : GetScalarType<T[P], AggregateServiceCategory[P]>
  }




  export type ServiceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCategoryWhereInput
    orderBy?: ServiceCategoryOrderByWithAggregationInput | ServiceCategoryOrderByWithAggregationInput[]
    by: ServiceCategoryScalarFieldEnum[] | ServiceCategoryScalarFieldEnum
    having?: ServiceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCategoryCountAggregateInputType | true
    _min?: ServiceCategoryMinAggregateInputType
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type ServiceCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string | null
    icon: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCategoryCountAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  type GetServiceCategoryGroupByPayload<T extends ServiceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | ServiceCategory$servicesArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "color" | "icon" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceCategory"]>
  export type ServiceCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceCategory$servicesArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCategory"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string | null
      icon: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceCategory"]>
    composites: {}
  }

  type ServiceCategoryGetPayload<S extends boolean | null | undefined | ServiceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceCategoryPayload, S>

  type ServiceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCategoryCountAggregateInputType | true
    }

  export interface ServiceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCategory'], meta: { name: 'ServiceCategory' } }
    /**
     * Find zero or one ServiceCategory that matches the filter.
     * @param {ServiceCategoryFindUniqueArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCategoryFindUniqueArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCategoryFindFirstArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany()
     * 
     * // Get first 10 ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCategoryFindManyArgs>(args?: SelectSubset<T, ServiceCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCategory.
     * @param {ServiceCategoryCreateArgs} args - Arguments to create a ServiceCategory.
     * @example
     * // Create one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.create({
     *   data: {
     *     // ... data to create a ServiceCategory
     *   }
     * })
     * 
     */
    create<T extends ServiceCategoryCreateArgs>(args: SelectSubset<T, ServiceCategoryCreateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCategories.
     * @param {ServiceCategoryCreateManyArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCategoryCreateManyArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceCategories and returns the data saved in the database.
     * @param {ServiceCategoryCreateManyAndReturnArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceCategory.
     * @param {ServiceCategoryDeleteArgs} args - Arguments to delete one ServiceCategory.
     * @example
     * // Delete one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.delete({
     *   where: {
     *     // ... filter to delete one ServiceCategory
     *   }
     * })
     * 
     */
    delete<T extends ServiceCategoryDeleteArgs>(args: SelectSubset<T, ServiceCategoryDeleteArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCategory.
     * @param {ServiceCategoryUpdateArgs} args - Arguments to update one ServiceCategory.
     * @example
     * // Update one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCategoryUpdateArgs>(args: SelectSubset<T, ServiceCategoryUpdateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCategories.
     * @param {ServiceCategoryDeleteManyArgs} args - Arguments to filter ServiceCategories to delete.
     * @example
     * // Delete a few ServiceCategories
     * const { count } = await prisma.serviceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCategoryDeleteManyArgs>(args?: SelectSubset<T, ServiceCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCategoryUpdateManyArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories and returns the data updated in the database.
     * @param {ServiceCategoryUpdateManyAndReturnArgs} args - Arguments to update many ServiceCategories.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceCategory.
     * @param {ServiceCategoryUpsertArgs} args - Arguments to update or create a ServiceCategory.
     * @example
     * // Update or create a ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.upsert({
     *   create: {
     *     // ... data to create a ServiceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCategoryUpsertArgs>(args: SelectSubset<T, ServiceCategoryUpsertArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryCountArgs} args - Arguments to filter ServiceCategories to count.
     * @example
     * // Count the number of ServiceCategories
     * const count = await prisma.serviceCategory.count({
     *   where: {
     *     // ... the filter for the ServiceCategories we want to count
     *   }
     * })
    **/
    count<T extends ServiceCategoryCountArgs>(
      args?: Subset<T, ServiceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceCategoryAggregateArgs>(args: Subset<T, ServiceCategoryAggregateArgs>): Prisma.PrismaPromise<GetServiceCategoryAggregateType<T>>

    /**
     * Group by ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryGroupByArgs} args - Group by arguments.
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
      T extends ServiceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCategory model
   */
  readonly fields: ServiceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends ServiceCategory$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategory$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceCategory model
   */
  interface ServiceCategoryFieldRefs {
    readonly id: FieldRef<"ServiceCategory", 'String'>
    readonly name: FieldRef<"ServiceCategory", 'String'>
    readonly description: FieldRef<"ServiceCategory", 'String'>
    readonly color: FieldRef<"ServiceCategory", 'String'>
    readonly icon: FieldRef<"ServiceCategory", 'String'>
    readonly isActive: FieldRef<"ServiceCategory", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCategory findUnique
   */
  export type ServiceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findUniqueOrThrow
   */
  export type ServiceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findFirst
   */
  export type ServiceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findFirstOrThrow
   */
  export type ServiceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findMany
   */
  export type ServiceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategories to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory create
   */
  export type ServiceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCategory.
     */
    data: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
  }

  /**
   * ServiceCategory createMany
   */
  export type ServiceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory createManyAndReturn
   */
  export type ServiceCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory update
   */
  export type ServiceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCategory.
     */
    data: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceCategory to update.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory updateMany
   */
  export type ServiceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory updateManyAndReturn
   */
  export type ServiceCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory upsert
   */
  export type ServiceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCategory to update in case it exists.
     */
    where: ServiceCategoryWhereUniqueInput
    /**
     * In case the ServiceCategory found by the `where` argument doesn't exist, create a new ServiceCategory with this data.
     */
    create: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
    /**
     * In case the ServiceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
  }

  /**
   * ServiceCategory delete
   */
  export type ServiceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter which ServiceCategory to delete.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory deleteMany
   */
  export type ServiceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategories to delete
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to delete.
     */
    limit?: number
  }

  /**
   * ServiceCategory.services
   */
  export type ServiceCategory$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ServiceCategory without action
   */
  export type ServiceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    expectedAmount: Decimal | null
  }

  export type ServiceSumAggregateOutputType = {
    expectedAmount: Decimal | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ServiceStatus | null
    scheduledDate: Date | null
    scheduledTime: string | null
    address: string | null
    completedAt: Date | null
    notes: string | null
    expectedAmount: Decimal | null
    closedAt: Date | null
    isLocked: boolean | null
    technicianId: string | null
    clientId: string | null
    createdById: string | null
    closedById: string | null
    categoryId: string | null
    completedPhotoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ServiceStatus | null
    scheduledDate: Date | null
    scheduledTime: string | null
    address: string | null
    completedAt: Date | null
    notes: string | null
    expectedAmount: Decimal | null
    closedAt: Date | null
    isLocked: boolean | null
    technicianId: string | null
    clientId: string | null
    createdById: string | null
    closedById: string | null
    categoryId: string | null
    completedPhotoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    scheduledDate: number
    scheduledTime: number
    address: number
    completedAt: number
    notes: number
    expectedAmount: number
    closedAt: number
    isLocked: number
    technicianId: number
    clientId: number
    createdById: number
    closedById: number
    categoryId: number
    completedPhotoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    expectedAmount?: true
  }

  export type ServiceSumAggregateInputType = {
    expectedAmount?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    scheduledDate?: true
    scheduledTime?: true
    address?: true
    completedAt?: true
    notes?: true
    expectedAmount?: true
    closedAt?: true
    isLocked?: true
    technicianId?: true
    clientId?: true
    createdById?: true
    closedById?: true
    categoryId?: true
    completedPhotoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    scheduledDate?: true
    scheduledTime?: true
    address?: true
    completedAt?: true
    notes?: true
    expectedAmount?: true
    closedAt?: true
    isLocked?: true
    technicianId?: true
    clientId?: true
    createdById?: true
    closedById?: true
    categoryId?: true
    completedPhotoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    scheduledDate?: true
    scheduledTime?: true
    address?: true
    completedAt?: true
    notes?: true
    expectedAmount?: true
    closedAt?: true
    isLocked?: true
    technicianId?: true
    clientId?: true
    createdById?: true
    closedById?: true
    categoryId?: true
    completedPhotoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.ServiceStatus
    scheduledDate: Date
    scheduledTime: string
    address: string | null
    completedAt: Date | null
    notes: string | null
    expectedAmount: Decimal | null
    closedAt: Date | null
    isLocked: boolean
    technicianId: string | null
    clientId: string | null
    createdById: string
    closedById: string | null
    categoryId: string | null
    completedPhotoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    completedAt?: boolean
    notes?: boolean
    expectedAmount?: boolean
    closedAt?: boolean
    isLocked?: boolean
    technicianId?: boolean
    clientId?: boolean
    createdById?: boolean
    closedById?: boolean
    categoryId?: boolean
    completedPhotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
    payment?: boolean | Service$paymentArgs<ExtArgs>
    estimate?: boolean | Service$estimateArgs<ExtArgs>
    activityLogs?: boolean | Service$activityLogsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    completedAt?: boolean
    notes?: boolean
    expectedAmount?: boolean
    closedAt?: boolean
    isLocked?: boolean
    technicianId?: boolean
    clientId?: boolean
    createdById?: boolean
    closedById?: boolean
    categoryId?: boolean
    completedPhotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    completedAt?: boolean
    notes?: boolean
    expectedAmount?: boolean
    closedAt?: boolean
    isLocked?: boolean
    technicianId?: boolean
    clientId?: boolean
    createdById?: boolean
    closedById?: boolean
    categoryId?: boolean
    completedPhotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    completedAt?: boolean
    notes?: boolean
    expectedAmount?: boolean
    closedAt?: boolean
    isLocked?: boolean
    technicianId?: boolean
    clientId?: boolean
    createdById?: boolean
    closedById?: boolean
    categoryId?: boolean
    completedPhotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "scheduledDate" | "scheduledTime" | "address" | "completedAt" | "notes" | "expectedAmount" | "closedAt" | "isLocked" | "technicianId" | "clientId" | "createdById" | "closedById" | "categoryId" | "completedPhotoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
    payment?: boolean | Service$paymentArgs<ExtArgs>
    estimate?: boolean | Service$estimateArgs<ExtArgs>
    activityLogs?: boolean | Service$activityLogsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      technician: Prisma.$UserPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs>
      closedBy: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$ServiceCategoryPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      estimate: Prisma.$EstimatePayload<ExtArgs> | null
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.ServiceStatus
      scheduledDate: Date
      scheduledTime: string
      address: string | null
      completedAt: Date | null
      notes: string | null
      expectedAmount: Prisma.Decimal | null
      closedAt: Date | null
      isLocked: boolean
      technicianId: string | null
      clientId: string | null
      createdById: string
      closedById: string | null
      categoryId: string | null
      completedPhotoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends Service$technicianArgs<ExtArgs> = {}>(args?: Subset<T, Service$technicianArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Service$clientArgs<ExtArgs> = {}>(args?: Subset<T, Service$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    closedBy<T extends Service$closedByArgs<ExtArgs> = {}>(args?: Subset<T, Service$closedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Service$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Service$categoryArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Service$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Service$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estimate<T extends Service$estimateArgs<ExtArgs> = {}>(args?: Subset<T, Service$estimateArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activityLogs<T extends Service$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Service$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly status: FieldRef<"Service", 'ServiceStatus'>
    readonly scheduledDate: FieldRef<"Service", 'DateTime'>
    readonly scheduledTime: FieldRef<"Service", 'String'>
    readonly address: FieldRef<"Service", 'String'>
    readonly completedAt: FieldRef<"Service", 'DateTime'>
    readonly notes: FieldRef<"Service", 'String'>
    readonly expectedAmount: FieldRef<"Service", 'Decimal'>
    readonly closedAt: FieldRef<"Service", 'DateTime'>
    readonly isLocked: FieldRef<"Service", 'Boolean'>
    readonly technicianId: FieldRef<"Service", 'String'>
    readonly clientId: FieldRef<"Service", 'String'>
    readonly createdById: FieldRef<"Service", 'String'>
    readonly closedById: FieldRef<"Service", 'String'>
    readonly categoryId: FieldRef<"Service", 'String'>
    readonly completedPhotoUrl: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.technician
   */
  export type Service$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Service.client
   */
  export type Service$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Service.closedBy
   */
  export type Service$closedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Service.category
   */
  export type Service$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    where?: ServiceCategoryWhereInput
  }

  /**
   * Service.payment
   */
  export type Service$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Service.estimate
   */
  export type Service$estimateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    where?: EstimateWhereInput
  }

  /**
   * Service.activityLogs
   */
  export type Service$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amountPaid: Decimal | null
    sparePartsCost: Decimal | null
    debtAmount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amountPaid: Decimal | null
    sparePartsCost: Decimal | null
    debtAmount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    method: $Enums.PaymentMethod | null
    amountPaid: Decimal | null
    sparePartsCost: Decimal | null
    debtAmount: Decimal | null
    hasDebt: boolean | null
    receiptPhotoUrl: string | null
    notes: string | null
    technicianId: string | null
    serviceId: string | null
    settlementId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    method: $Enums.PaymentMethod | null
    amountPaid: Decimal | null
    sparePartsCost: Decimal | null
    debtAmount: Decimal | null
    hasDebt: boolean | null
    receiptPhotoUrl: string | null
    notes: string | null
    technicianId: string | null
    serviceId: string | null
    settlementId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    method: number
    amountPaid: number
    sparePartsCost: number
    debtAmount: number
    hasDebt: number
    receiptPhotoUrl: number
    notes: number
    technicianId: number
    serviceId: number
    settlementId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amountPaid?: true
    sparePartsCost?: true
    debtAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amountPaid?: true
    sparePartsCost?: true
    debtAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    method?: true
    amountPaid?: true
    sparePartsCost?: true
    debtAmount?: true
    hasDebt?: true
    receiptPhotoUrl?: true
    notes?: true
    technicianId?: true
    serviceId?: true
    settlementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    method?: true
    amountPaid?: true
    sparePartsCost?: true
    debtAmount?: true
    hasDebt?: true
    receiptPhotoUrl?: true
    notes?: true
    technicianId?: true
    serviceId?: true
    settlementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    method?: true
    amountPaid?: true
    sparePartsCost?: true
    debtAmount?: true
    hasDebt?: true
    receiptPhotoUrl?: true
    notes?: true
    technicianId?: true
    serviceId?: true
    settlementId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal
    sparePartsCost: Decimal
    debtAmount: Decimal
    hasDebt: boolean
    receiptPhotoUrl: string | null
    notes: string | null
    technicianId: string
    serviceId: string
    settlementId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    receiptPhotoUrl?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    settlementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    settlement?: boolean | Payment$settlementArgs<ExtArgs>
    parts?: boolean | Payment$partsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    receiptPhotoUrl?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    settlementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    settlement?: boolean | Payment$settlementArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    receiptPhotoUrl?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    settlementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    settlement?: boolean | Payment$settlementArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    receiptPhotoUrl?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    settlementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "amountPaid" | "sparePartsCost" | "debtAmount" | "hasDebt" | "receiptPhotoUrl" | "notes" | "technicianId" | "serviceId" | "settlementId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    settlement?: boolean | Payment$settlementArgs<ExtArgs>
    parts?: boolean | Payment$partsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    settlement?: boolean | Payment$settlementArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    settlement?: boolean | Payment$settlementArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      technician: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      settlement: Prisma.$SettlementPayload<ExtArgs> | null
      parts: Prisma.$PaymentPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      method: $Enums.PaymentMethod
      amountPaid: Prisma.Decimal
      sparePartsCost: Prisma.Decimal
      debtAmount: Prisma.Decimal
      hasDebt: boolean
      receiptPhotoUrl: string | null
      notes: string | null
      technicianId: string
      serviceId: string
      settlementId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    settlement<T extends Payment$settlementArgs<ExtArgs> = {}>(args?: Subset<T, Payment$settlementArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parts<T extends Payment$partsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly amountPaid: FieldRef<"Payment", 'Decimal'>
    readonly sparePartsCost: FieldRef<"Payment", 'Decimal'>
    readonly debtAmount: FieldRef<"Payment", 'Decimal'>
    readonly hasDebt: FieldRef<"Payment", 'Boolean'>
    readonly receiptPhotoUrl: FieldRef<"Payment", 'String'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly technicianId: FieldRef<"Payment", 'String'>
    readonly serviceId: FieldRef<"Payment", 'String'>
    readonly settlementId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.settlement
   */
  export type Payment$settlementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
  }

  /**
   * Payment.parts
   */
  export type Payment$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    where?: PaymentPartWhereInput
    orderBy?: PaymentPartOrderByWithRelationInput | PaymentPartOrderByWithRelationInput[]
    cursor?: PaymentPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPartScalarFieldEnum | PaymentPartScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentPart
   */

  export type AggregatePaymentPart = {
    _count: PaymentPartCountAggregateOutputType | null
    _avg: PaymentPartAvgAggregateOutputType | null
    _sum: PaymentPartSumAggregateOutputType | null
    _min: PaymentPartMinAggregateOutputType | null
    _max: PaymentPartMaxAggregateOutputType | null
  }

  export type PaymentPartAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type PaymentPartSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type PaymentPartMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    supplierId: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPartMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    supplierId: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPartCountAggregateOutputType = {
    id: number
    paymentId: number
    supplierId: number
    description: number
    quantity: number
    unitPrice: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentPartAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type PaymentPartSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type PaymentPartMinAggregateInputType = {
    id?: true
    paymentId?: true
    supplierId?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPartMaxAggregateInputType = {
    id?: true
    paymentId?: true
    supplierId?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPartCountAggregateInputType = {
    id?: true
    paymentId?: true
    supplierId?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPart to aggregate.
     */
    where?: PaymentPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentParts to fetch.
     */
    orderBy?: PaymentPartOrderByWithRelationInput | PaymentPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentParts
    **/
    _count?: true | PaymentPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentPartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentPartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPartMaxAggregateInputType
  }

  export type GetPaymentPartAggregateType<T extends PaymentPartAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPart[P]>
      : GetScalarType<T[P], AggregatePaymentPart[P]>
  }




  export type PaymentPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPartWhereInput
    orderBy?: PaymentPartOrderByWithAggregationInput | PaymentPartOrderByWithAggregationInput[]
    by: PaymentPartScalarFieldEnum[] | PaymentPartScalarFieldEnum
    having?: PaymentPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPartCountAggregateInputType | true
    _avg?: PaymentPartAvgAggregateInputType
    _sum?: PaymentPartSumAggregateInputType
    _min?: PaymentPartMinAggregateInputType
    _max?: PaymentPartMaxAggregateInputType
  }

  export type PaymentPartGroupByOutputType = {
    id: string
    paymentId: string
    supplierId: string
    description: string
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    createdAt: Date
    updatedAt: Date
    _count: PaymentPartCountAggregateOutputType | null
    _avg: PaymentPartAvgAggregateOutputType | null
    _sum: PaymentPartSumAggregateOutputType | null
    _min: PaymentPartMinAggregateOutputType | null
    _max: PaymentPartMaxAggregateOutputType | null
  }

  type GetPaymentPartGroupByPayload<T extends PaymentPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPartGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPartGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    supplierId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPart"]>

  export type PaymentPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    supplierId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPart"]>

  export type PaymentPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    supplierId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPart"]>

  export type PaymentPartSelectScalar = {
    id?: boolean
    paymentId?: boolean
    supplierId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "supplierId" | "description" | "quantity" | "unitPrice" | "totalPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentPart"]>
  export type PaymentPartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type PaymentPartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type PaymentPartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $PaymentPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPart"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      supplierId: string
      description: string
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentPart"]>
    composites: {}
  }

  type PaymentPartGetPayload<S extends boolean | null | undefined | PaymentPartDefaultArgs> = $Result.GetResult<Prisma.$PaymentPartPayload, S>

  type PaymentPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPartCountAggregateInputType | true
    }

  export interface PaymentPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPart'], meta: { name: 'PaymentPart' } }
    /**
     * Find zero or one PaymentPart that matches the filter.
     * @param {PaymentPartFindUniqueArgs} args - Arguments to find a PaymentPart
     * @example
     * // Get one PaymentPart
     * const paymentPart = await prisma.paymentPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPartFindUniqueArgs>(args: SelectSubset<T, PaymentPartFindUniqueArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPartFindUniqueOrThrowArgs} args - Arguments to find a PaymentPart
     * @example
     * // Get one PaymentPart
     * const paymentPart = await prisma.paymentPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPartFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartFindFirstArgs} args - Arguments to find a PaymentPart
     * @example
     * // Get one PaymentPart
     * const paymentPart = await prisma.paymentPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPartFindFirstArgs>(args?: SelectSubset<T, PaymentPartFindFirstArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartFindFirstOrThrowArgs} args - Arguments to find a PaymentPart
     * @example
     * // Get one PaymentPart
     * const paymentPart = await prisma.paymentPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPartFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentParts
     * const paymentParts = await prisma.paymentPart.findMany()
     * 
     * // Get first 10 PaymentParts
     * const paymentParts = await prisma.paymentPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPartWithIdOnly = await prisma.paymentPart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPartFindManyArgs>(args?: SelectSubset<T, PaymentPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPart.
     * @param {PaymentPartCreateArgs} args - Arguments to create a PaymentPart.
     * @example
     * // Create one PaymentPart
     * const PaymentPart = await prisma.paymentPart.create({
     *   data: {
     *     // ... data to create a PaymentPart
     *   }
     * })
     * 
     */
    create<T extends PaymentPartCreateArgs>(args: SelectSubset<T, PaymentPartCreateArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentParts.
     * @param {PaymentPartCreateManyArgs} args - Arguments to create many PaymentParts.
     * @example
     * // Create many PaymentParts
     * const paymentPart = await prisma.paymentPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPartCreateManyArgs>(args?: SelectSubset<T, PaymentPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentParts and returns the data saved in the database.
     * @param {PaymentPartCreateManyAndReturnArgs} args - Arguments to create many PaymentParts.
     * @example
     * // Create many PaymentParts
     * const paymentPart = await prisma.paymentPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentParts and only return the `id`
     * const paymentPartWithIdOnly = await prisma.paymentPart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentPartCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentPart.
     * @param {PaymentPartDeleteArgs} args - Arguments to delete one PaymentPart.
     * @example
     * // Delete one PaymentPart
     * const PaymentPart = await prisma.paymentPart.delete({
     *   where: {
     *     // ... filter to delete one PaymentPart
     *   }
     * })
     * 
     */
    delete<T extends PaymentPartDeleteArgs>(args: SelectSubset<T, PaymentPartDeleteArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPart.
     * @param {PaymentPartUpdateArgs} args - Arguments to update one PaymentPart.
     * @example
     * // Update one PaymentPart
     * const paymentPart = await prisma.paymentPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPartUpdateArgs>(args: SelectSubset<T, PaymentPartUpdateArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentParts.
     * @param {PaymentPartDeleteManyArgs} args - Arguments to filter PaymentParts to delete.
     * @example
     * // Delete a few PaymentParts
     * const { count } = await prisma.paymentPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPartDeleteManyArgs>(args?: SelectSubset<T, PaymentPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentParts
     * const paymentPart = await prisma.paymentPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPartUpdateManyArgs>(args: SelectSubset<T, PaymentPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentParts and returns the data updated in the database.
     * @param {PaymentPartUpdateManyAndReturnArgs} args - Arguments to update many PaymentParts.
     * @example
     * // Update many PaymentParts
     * const paymentPart = await prisma.paymentPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentParts and only return the `id`
     * const paymentPartWithIdOnly = await prisma.paymentPart.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentPartUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentPart.
     * @param {PaymentPartUpsertArgs} args - Arguments to update or create a PaymentPart.
     * @example
     * // Update or create a PaymentPart
     * const paymentPart = await prisma.paymentPart.upsert({
     *   create: {
     *     // ... data to create a PaymentPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPart we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPartUpsertArgs>(args: SelectSubset<T, PaymentPartUpsertArgs<ExtArgs>>): Prisma__PaymentPartClient<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartCountArgs} args - Arguments to filter PaymentParts to count.
     * @example
     * // Count the number of PaymentParts
     * const count = await prisma.paymentPart.count({
     *   where: {
     *     // ... the filter for the PaymentParts we want to count
     *   }
     * })
    **/
    count<T extends PaymentPartCountArgs>(
      args?: Subset<T, PaymentPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentPartAggregateArgs>(args: Subset<T, PaymentPartAggregateArgs>): Prisma.PrismaPromise<GetPaymentPartAggregateType<T>>

    /**
     * Group by PaymentPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPartGroupByArgs} args - Group by arguments.
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
      T extends PaymentPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPartGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPart model
   */
  readonly fields: PaymentPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentPart model
   */
  interface PaymentPartFieldRefs {
    readonly id: FieldRef<"PaymentPart", 'String'>
    readonly paymentId: FieldRef<"PaymentPart", 'String'>
    readonly supplierId: FieldRef<"PaymentPart", 'String'>
    readonly description: FieldRef<"PaymentPart", 'String'>
    readonly quantity: FieldRef<"PaymentPart", 'Int'>
    readonly unitPrice: FieldRef<"PaymentPart", 'Decimal'>
    readonly totalPrice: FieldRef<"PaymentPart", 'Decimal'>
    readonly createdAt: FieldRef<"PaymentPart", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPart findUnique
   */
  export type PaymentPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPart to fetch.
     */
    where: PaymentPartWhereUniqueInput
  }

  /**
   * PaymentPart findUniqueOrThrow
   */
  export type PaymentPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPart to fetch.
     */
    where: PaymentPartWhereUniqueInput
  }

  /**
   * PaymentPart findFirst
   */
  export type PaymentPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPart to fetch.
     */
    where?: PaymentPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentParts to fetch.
     */
    orderBy?: PaymentPartOrderByWithRelationInput | PaymentPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentParts.
     */
    cursor?: PaymentPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentParts.
     */
    distinct?: PaymentPartScalarFieldEnum | PaymentPartScalarFieldEnum[]
  }

  /**
   * PaymentPart findFirstOrThrow
   */
  export type PaymentPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPart to fetch.
     */
    where?: PaymentPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentParts to fetch.
     */
    orderBy?: PaymentPartOrderByWithRelationInput | PaymentPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentParts.
     */
    cursor?: PaymentPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentParts.
     */
    distinct?: PaymentPartScalarFieldEnum | PaymentPartScalarFieldEnum[]
  }

  /**
   * PaymentPart findMany
   */
  export type PaymentPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * Filter, which PaymentParts to fetch.
     */
    where?: PaymentPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentParts to fetch.
     */
    orderBy?: PaymentPartOrderByWithRelationInput | PaymentPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentParts.
     */
    cursor?: PaymentPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentParts.
     */
    skip?: number
    distinct?: PaymentPartScalarFieldEnum | PaymentPartScalarFieldEnum[]
  }

  /**
   * PaymentPart create
   */
  export type PaymentPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentPart.
     */
    data: XOR<PaymentPartCreateInput, PaymentPartUncheckedCreateInput>
  }

  /**
   * PaymentPart createMany
   */
  export type PaymentPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentParts.
     */
    data: PaymentPartCreateManyInput | PaymentPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPart createManyAndReturn
   */
  export type PaymentPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentParts.
     */
    data: PaymentPartCreateManyInput | PaymentPartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPart update
   */
  export type PaymentPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentPart.
     */
    data: XOR<PaymentPartUpdateInput, PaymentPartUncheckedUpdateInput>
    /**
     * Choose, which PaymentPart to update.
     */
    where: PaymentPartWhereUniqueInput
  }

  /**
   * PaymentPart updateMany
   */
  export type PaymentPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentParts.
     */
    data: XOR<PaymentPartUpdateManyMutationInput, PaymentPartUncheckedUpdateManyInput>
    /**
     * Filter which PaymentParts to update
     */
    where?: PaymentPartWhereInput
    /**
     * Limit how many PaymentParts to update.
     */
    limit?: number
  }

  /**
   * PaymentPart updateManyAndReturn
   */
  export type PaymentPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * The data used to update PaymentParts.
     */
    data: XOR<PaymentPartUpdateManyMutationInput, PaymentPartUncheckedUpdateManyInput>
    /**
     * Filter which PaymentParts to update
     */
    where?: PaymentPartWhereInput
    /**
     * Limit how many PaymentParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentPart upsert
   */
  export type PaymentPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentPart to update in case it exists.
     */
    where: PaymentPartWhereUniqueInput
    /**
     * In case the PaymentPart found by the `where` argument doesn't exist, create a new PaymentPart with this data.
     */
    create: XOR<PaymentPartCreateInput, PaymentPartUncheckedCreateInput>
    /**
     * In case the PaymentPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPartUpdateInput, PaymentPartUncheckedUpdateInput>
  }

  /**
   * PaymentPart delete
   */
  export type PaymentPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    /**
     * Filter which PaymentPart to delete.
     */
    where: PaymentPartWhereUniqueInput
  }

  /**
   * PaymentPart deleteMany
   */
  export type PaymentPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentParts to delete
     */
    where?: PaymentPartWhereInput
    /**
     * Limit how many PaymentParts to delete.
     */
    limit?: number
  }

  /**
   * PaymentPart without action
   */
  export type PaymentPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    notes: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    email: string | null
    notes: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentParts?: boolean | Supplier$paymentPartsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "notes" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentParts?: boolean | Supplier$paymentPartsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      paymentParts: Prisma.$PaymentPartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      email: string | null
      notes: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentParts<T extends Supplier$paymentPartsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$paymentPartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly notes: FieldRef<"Supplier", 'String'>
    readonly isActive: FieldRef<"Supplier", 'Boolean'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.paymentParts
   */
  export type Supplier$paymentPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPart
     */
    select?: PaymentPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPart
     */
    omit?: PaymentPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPartInclude<ExtArgs> | null
    where?: PaymentPartWhereInput
    orderBy?: PaymentPartOrderByWithRelationInput | PaymentPartOrderByWithRelationInput[]
    cursor?: PaymentPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPartScalarFieldEnum | PaymentPartScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Estimate
   */

  export type AggregateEstimate = {
    _count: EstimateCountAggregateOutputType | null
    _avg: EstimateAvgAggregateOutputType | null
    _sum: EstimateSumAggregateOutputType | null
    _min: EstimateMinAggregateOutputType | null
    _max: EstimateMaxAggregateOutputType | null
  }

  export type EstimateAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type EstimateSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type EstimateMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    technicianId: string | null
    clientId: string | null
    amount: Decimal | null
    description: string | null
    notes: string | null
    status: $Enums.EstimateStatus | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstimateMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    technicianId: string | null
    clientId: string | null
    amount: Decimal | null
    description: string | null
    notes: string | null
    status: $Enums.EstimateStatus | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstimateCountAggregateOutputType = {
    id: number
    serviceId: number
    technicianId: number
    clientId: number
    amount: number
    description: number
    notes: number
    status: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstimateAvgAggregateInputType = {
    amount?: true
  }

  export type EstimateSumAggregateInputType = {
    amount?: true
  }

  export type EstimateMinAggregateInputType = {
    id?: true
    serviceId?: true
    technicianId?: true
    clientId?: true
    amount?: true
    description?: true
    notes?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstimateMaxAggregateInputType = {
    id?: true
    serviceId?: true
    technicianId?: true
    clientId?: true
    amount?: true
    description?: true
    notes?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstimateCountAggregateInputType = {
    id?: true
    serviceId?: true
    technicianId?: true
    clientId?: true
    amount?: true
    description?: true
    notes?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstimateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimate to aggregate.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estimates
    **/
    _count?: true | EstimateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstimateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstimateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstimateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstimateMaxAggregateInputType
  }

  export type GetEstimateAggregateType<T extends EstimateAggregateArgs> = {
        [P in keyof T & keyof AggregateEstimate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstimate[P]>
      : GetScalarType<T[P], AggregateEstimate[P]>
  }




  export type EstimateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstimateWhereInput
    orderBy?: EstimateOrderByWithAggregationInput | EstimateOrderByWithAggregationInput[]
    by: EstimateScalarFieldEnum[] | EstimateScalarFieldEnum
    having?: EstimateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstimateCountAggregateInputType | true
    _avg?: EstimateAvgAggregateInputType
    _sum?: EstimateSumAggregateInputType
    _min?: EstimateMinAggregateInputType
    _max?: EstimateMaxAggregateInputType
  }

  export type EstimateGroupByOutputType = {
    id: string
    serviceId: string
    technicianId: string
    clientId: string
    amount: Decimal
    description: string | null
    notes: string | null
    status: $Enums.EstimateStatus
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EstimateCountAggregateOutputType | null
    _avg: EstimateAvgAggregateOutputType | null
    _sum: EstimateSumAggregateOutputType | null
    _min: EstimateMinAggregateOutputType | null
    _max: EstimateMaxAggregateOutputType | null
  }

  type GetEstimateGroupByPayload<T extends EstimateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstimateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstimateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstimateGroupByOutputType[P]>
            : GetScalarType<T[P], EstimateGroupByOutputType[P]>
        }
      >
    >


  export type EstimateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    technicianId?: boolean
    clientId?: boolean
    amount?: boolean
    description?: boolean
    notes?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    technician?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estimate"]>

  export type EstimateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    technicianId?: boolean
    clientId?: boolean
    amount?: boolean
    description?: boolean
    notes?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    technician?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estimate"]>

  export type EstimateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    technicianId?: boolean
    clientId?: boolean
    amount?: boolean
    description?: boolean
    notes?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    technician?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estimate"]>

  export type EstimateSelectScalar = {
    id?: boolean
    serviceId?: boolean
    technicianId?: boolean
    clientId?: boolean
    amount?: boolean
    description?: boolean
    notes?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstimateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "technicianId" | "clientId" | "amount" | "description" | "notes" | "status" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["estimate"]>
  export type EstimateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    technician?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type EstimateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    technician?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type EstimateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    technician?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $EstimatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estimate"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      technician: Prisma.$UserPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      technicianId: string
      clientId: string
      amount: Prisma.Decimal
      description: string | null
      notes: string | null
      status: $Enums.EstimateStatus
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["estimate"]>
    composites: {}
  }

  type EstimateGetPayload<S extends boolean | null | undefined | EstimateDefaultArgs> = $Result.GetResult<Prisma.$EstimatePayload, S>

  type EstimateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstimateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstimateCountAggregateInputType | true
    }

  export interface EstimateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estimate'], meta: { name: 'Estimate' } }
    /**
     * Find zero or one Estimate that matches the filter.
     * @param {EstimateFindUniqueArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstimateFindUniqueArgs>(args: SelectSubset<T, EstimateFindUniqueArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estimate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstimateFindUniqueOrThrowArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstimateFindUniqueOrThrowArgs>(args: SelectSubset<T, EstimateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateFindFirstArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstimateFindFirstArgs>(args?: SelectSubset<T, EstimateFindFirstArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estimate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateFindFirstOrThrowArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstimateFindFirstOrThrowArgs>(args?: SelectSubset<T, EstimateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estimates
     * const estimates = await prisma.estimate.findMany()
     * 
     * // Get first 10 Estimates
     * const estimates = await prisma.estimate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estimateWithIdOnly = await prisma.estimate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstimateFindManyArgs>(args?: SelectSubset<T, EstimateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estimate.
     * @param {EstimateCreateArgs} args - Arguments to create a Estimate.
     * @example
     * // Create one Estimate
     * const Estimate = await prisma.estimate.create({
     *   data: {
     *     // ... data to create a Estimate
     *   }
     * })
     * 
     */
    create<T extends EstimateCreateArgs>(args: SelectSubset<T, EstimateCreateArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estimates.
     * @param {EstimateCreateManyArgs} args - Arguments to create many Estimates.
     * @example
     * // Create many Estimates
     * const estimate = await prisma.estimate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstimateCreateManyArgs>(args?: SelectSubset<T, EstimateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estimates and returns the data saved in the database.
     * @param {EstimateCreateManyAndReturnArgs} args - Arguments to create many Estimates.
     * @example
     * // Create many Estimates
     * const estimate = await prisma.estimate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estimates and only return the `id`
     * const estimateWithIdOnly = await prisma.estimate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstimateCreateManyAndReturnArgs>(args?: SelectSubset<T, EstimateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estimate.
     * @param {EstimateDeleteArgs} args - Arguments to delete one Estimate.
     * @example
     * // Delete one Estimate
     * const Estimate = await prisma.estimate.delete({
     *   where: {
     *     // ... filter to delete one Estimate
     *   }
     * })
     * 
     */
    delete<T extends EstimateDeleteArgs>(args: SelectSubset<T, EstimateDeleteArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estimate.
     * @param {EstimateUpdateArgs} args - Arguments to update one Estimate.
     * @example
     * // Update one Estimate
     * const estimate = await prisma.estimate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstimateUpdateArgs>(args: SelectSubset<T, EstimateUpdateArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estimates.
     * @param {EstimateDeleteManyArgs} args - Arguments to filter Estimates to delete.
     * @example
     * // Delete a few Estimates
     * const { count } = await prisma.estimate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstimateDeleteManyArgs>(args?: SelectSubset<T, EstimateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estimates
     * const estimate = await prisma.estimate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstimateUpdateManyArgs>(args: SelectSubset<T, EstimateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estimates and returns the data updated in the database.
     * @param {EstimateUpdateManyAndReturnArgs} args - Arguments to update many Estimates.
     * @example
     * // Update many Estimates
     * const estimate = await prisma.estimate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estimates and only return the `id`
     * const estimateWithIdOnly = await prisma.estimate.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstimateUpdateManyAndReturnArgs>(args: SelectSubset<T, EstimateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estimate.
     * @param {EstimateUpsertArgs} args - Arguments to update or create a Estimate.
     * @example
     * // Update or create a Estimate
     * const estimate = await prisma.estimate.upsert({
     *   create: {
     *     // ... data to create a Estimate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estimate we want to update
     *   }
     * })
     */
    upsert<T extends EstimateUpsertArgs>(args: SelectSubset<T, EstimateUpsertArgs<ExtArgs>>): Prisma__EstimateClient<$Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateCountArgs} args - Arguments to filter Estimates to count.
     * @example
     * // Count the number of Estimates
     * const count = await prisma.estimate.count({
     *   where: {
     *     // ... the filter for the Estimates we want to count
     *   }
     * })
    **/
    count<T extends EstimateCountArgs>(
      args?: Subset<T, EstimateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstimateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstimateAggregateArgs>(args: Subset<T, EstimateAggregateArgs>): Prisma.PrismaPromise<GetEstimateAggregateType<T>>

    /**
     * Group by Estimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateGroupByArgs} args - Group by arguments.
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
      T extends EstimateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstimateGroupByArgs['orderBy'] }
        : { orderBy?: EstimateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstimateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstimateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estimate model
   */
  readonly fields: EstimateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estimate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstimateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Estimate model
   */
  interface EstimateFieldRefs {
    readonly id: FieldRef<"Estimate", 'String'>
    readonly serviceId: FieldRef<"Estimate", 'String'>
    readonly technicianId: FieldRef<"Estimate", 'String'>
    readonly clientId: FieldRef<"Estimate", 'String'>
    readonly amount: FieldRef<"Estimate", 'Decimal'>
    readonly description: FieldRef<"Estimate", 'String'>
    readonly notes: FieldRef<"Estimate", 'String'>
    readonly status: FieldRef<"Estimate", 'EstimateStatus'>
    readonly completedAt: FieldRef<"Estimate", 'DateTime'>
    readonly createdAt: FieldRef<"Estimate", 'DateTime'>
    readonly updatedAt: FieldRef<"Estimate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estimate findUnique
   */
  export type EstimateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate findUniqueOrThrow
   */
  export type EstimateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate findFirst
   */
  export type EstimateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimates.
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimates.
     */
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Estimate findFirstOrThrow
   */
  export type EstimateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * Filter, which Estimate to fetch.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estimates.
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estimates.
     */
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Estimate findMany
   */
  export type EstimateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * Filter, which Estimates to fetch.
     */
    where?: EstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estimates to fetch.
     */
    orderBy?: EstimateOrderByWithRelationInput | EstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estimates.
     */
    cursor?: EstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estimates.
     */
    skip?: number
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[]
  }

  /**
   * Estimate create
   */
  export type EstimateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * The data needed to create a Estimate.
     */
    data: XOR<EstimateCreateInput, EstimateUncheckedCreateInput>
  }

  /**
   * Estimate createMany
   */
  export type EstimateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estimates.
     */
    data: EstimateCreateManyInput | EstimateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estimate createManyAndReturn
   */
  export type EstimateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * The data used to create many Estimates.
     */
    data: EstimateCreateManyInput | EstimateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estimate update
   */
  export type EstimateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * The data needed to update a Estimate.
     */
    data: XOR<EstimateUpdateInput, EstimateUncheckedUpdateInput>
    /**
     * Choose, which Estimate to update.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate updateMany
   */
  export type EstimateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estimates.
     */
    data: XOR<EstimateUpdateManyMutationInput, EstimateUncheckedUpdateManyInput>
    /**
     * Filter which Estimates to update
     */
    where?: EstimateWhereInput
    /**
     * Limit how many Estimates to update.
     */
    limit?: number
  }

  /**
   * Estimate updateManyAndReturn
   */
  export type EstimateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * The data used to update Estimates.
     */
    data: XOR<EstimateUpdateManyMutationInput, EstimateUncheckedUpdateManyInput>
    /**
     * Filter which Estimates to update
     */
    where?: EstimateWhereInput
    /**
     * Limit how many Estimates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estimate upsert
   */
  export type EstimateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * The filter to search for the Estimate to update in case it exists.
     */
    where: EstimateWhereUniqueInput
    /**
     * In case the Estimate found by the `where` argument doesn't exist, create a new Estimate with this data.
     */
    create: XOR<EstimateCreateInput, EstimateUncheckedCreateInput>
    /**
     * In case the Estimate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstimateUpdateInput, EstimateUncheckedUpdateInput>
  }

  /**
   * Estimate delete
   */
  export type EstimateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
    /**
     * Filter which Estimate to delete.
     */
    where: EstimateWhereUniqueInput
  }

  /**
   * Estimate deleteMany
   */
  export type EstimateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estimates to delete
     */
    where?: EstimateWhereInput
    /**
     * Limit how many Estimates to delete.
     */
    limit?: number
  }

  /**
   * Estimate without action
   */
  export type EstimateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estimate
     */
    select?: EstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estimate
     */
    omit?: EstimateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstimateInclude<ExtArgs> | null
  }


  /**
   * Model Settlement
   */

  export type AggregateSettlement = {
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  export type SettlementAvgAggregateOutputType = {
    weekNumber: number | null
    year: number | null
    ordersCount: number | null
    paymentsCount: number | null
    totalCollected: Decimal | null
    totalParts: Decimal | null
    netAmount: Decimal | null
    techCommission: Decimal | null
    compCommission: Decimal | null
  }

  export type SettlementSumAggregateOutputType = {
    weekNumber: number | null
    year: number | null
    ordersCount: number | null
    paymentsCount: number | null
    totalCollected: Decimal | null
    totalParts: Decimal | null
    netAmount: Decimal | null
    techCommission: Decimal | null
    compCommission: Decimal | null
  }

  export type SettlementMinAggregateOutputType = {
    id: string | null
    technicianId: string | null
    weekNumber: number | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
    ordersCount: number | null
    paymentsCount: number | null
    totalCollected: Decimal | null
    totalParts: Decimal | null
    netAmount: Decimal | null
    techCommission: Decimal | null
    compCommission: Decimal | null
    status: $Enums.SettlementStatus | null
    notes: string | null
    liquidatedAt: Date | null
    liquidatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettlementMaxAggregateOutputType = {
    id: string | null
    technicianId: string | null
    weekNumber: number | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
    ordersCount: number | null
    paymentsCount: number | null
    totalCollected: Decimal | null
    totalParts: Decimal | null
    netAmount: Decimal | null
    techCommission: Decimal | null
    compCommission: Decimal | null
    status: $Enums.SettlementStatus | null
    notes: string | null
    liquidatedAt: Date | null
    liquidatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettlementCountAggregateOutputType = {
    id: number
    technicianId: number
    weekNumber: number
    year: number
    startDate: number
    endDate: number
    ordersCount: number
    paymentsCount: number
    totalCollected: number
    totalParts: number
    netAmount: number
    techCommission: number
    compCommission: number
    status: number
    notes: number
    liquidatedAt: number
    liquidatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettlementAvgAggregateInputType = {
    weekNumber?: true
    year?: true
    ordersCount?: true
    paymentsCount?: true
    totalCollected?: true
    totalParts?: true
    netAmount?: true
    techCommission?: true
    compCommission?: true
  }

  export type SettlementSumAggregateInputType = {
    weekNumber?: true
    year?: true
    ordersCount?: true
    paymentsCount?: true
    totalCollected?: true
    totalParts?: true
    netAmount?: true
    techCommission?: true
    compCommission?: true
  }

  export type SettlementMinAggregateInputType = {
    id?: true
    technicianId?: true
    weekNumber?: true
    year?: true
    startDate?: true
    endDate?: true
    ordersCount?: true
    paymentsCount?: true
    totalCollected?: true
    totalParts?: true
    netAmount?: true
    techCommission?: true
    compCommission?: true
    status?: true
    notes?: true
    liquidatedAt?: true
    liquidatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettlementMaxAggregateInputType = {
    id?: true
    technicianId?: true
    weekNumber?: true
    year?: true
    startDate?: true
    endDate?: true
    ordersCount?: true
    paymentsCount?: true
    totalCollected?: true
    totalParts?: true
    netAmount?: true
    techCommission?: true
    compCommission?: true
    status?: true
    notes?: true
    liquidatedAt?: true
    liquidatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettlementCountAggregateInputType = {
    id?: true
    technicianId?: true
    weekNumber?: true
    year?: true
    startDate?: true
    endDate?: true
    ordersCount?: true
    paymentsCount?: true
    totalCollected?: true
    totalParts?: true
    netAmount?: true
    techCommission?: true
    compCommission?: true
    status?: true
    notes?: true
    liquidatedAt?: true
    liquidatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlement to aggregate.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settlements
    **/
    _count?: true | SettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementMaxAggregateInputType
  }

  export type GetSettlementAggregateType<T extends SettlementAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlement[P]>
      : GetScalarType<T[P], AggregateSettlement[P]>
  }




  export type SettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithAggregationInput | SettlementOrderByWithAggregationInput[]
    by: SettlementScalarFieldEnum[] | SettlementScalarFieldEnum
    having?: SettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementCountAggregateInputType | true
    _avg?: SettlementAvgAggregateInputType
    _sum?: SettlementSumAggregateInputType
    _min?: SettlementMinAggregateInputType
    _max?: SettlementMaxAggregateInputType
  }

  export type SettlementGroupByOutputType = {
    id: string
    technicianId: string
    weekNumber: number
    year: number
    startDate: Date
    endDate: Date
    ordersCount: number
    paymentsCount: number
    totalCollected: Decimal
    totalParts: Decimal
    netAmount: Decimal
    techCommission: Decimal
    compCommission: Decimal
    status: $Enums.SettlementStatus
    notes: string | null
    liquidatedAt: Date | null
    liquidatedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  type GetSettlementGroupByPayload<T extends SettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementGroupByOutputType[P]>
        }
      >
    >


  export type SettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technicianId?: boolean
    weekNumber?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    ordersCount?: boolean
    paymentsCount?: boolean
    totalCollected?: boolean
    totalParts?: boolean
    netAmount?: boolean
    techCommission?: boolean
    compCommission?: boolean
    status?: boolean
    notes?: boolean
    liquidatedAt?: boolean
    liquidatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    liquidatedBy?: boolean | Settlement$liquidatedByArgs<ExtArgs>
    payments?: boolean | Settlement$paymentsArgs<ExtArgs>
    _count?: boolean | SettlementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technicianId?: boolean
    weekNumber?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    ordersCount?: boolean
    paymentsCount?: boolean
    totalCollected?: boolean
    totalParts?: boolean
    netAmount?: boolean
    techCommission?: boolean
    compCommission?: boolean
    status?: boolean
    notes?: boolean
    liquidatedAt?: boolean
    liquidatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    liquidatedBy?: boolean | Settlement$liquidatedByArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technicianId?: boolean
    weekNumber?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    ordersCount?: boolean
    paymentsCount?: boolean
    totalCollected?: boolean
    totalParts?: boolean
    netAmount?: boolean
    techCommission?: boolean
    compCommission?: boolean
    status?: boolean
    notes?: boolean
    liquidatedAt?: boolean
    liquidatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    liquidatedBy?: boolean | Settlement$liquidatedByArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectScalar = {
    id?: boolean
    technicianId?: boolean
    weekNumber?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    ordersCount?: boolean
    paymentsCount?: boolean
    totalCollected?: boolean
    totalParts?: boolean
    netAmount?: boolean
    techCommission?: boolean
    compCommission?: boolean
    status?: boolean
    notes?: boolean
    liquidatedAt?: boolean
    liquidatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SettlementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "technicianId" | "weekNumber" | "year" | "startDate" | "endDate" | "ordersCount" | "paymentsCount" | "totalCollected" | "totalParts" | "netAmount" | "techCommission" | "compCommission" | "status" | "notes" | "liquidatedAt" | "liquidatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["settlement"]>
  export type SettlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    liquidatedBy?: boolean | Settlement$liquidatedByArgs<ExtArgs>
    payments?: boolean | Settlement$paymentsArgs<ExtArgs>
    _count?: boolean | SettlementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SettlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    liquidatedBy?: boolean | Settlement$liquidatedByArgs<ExtArgs>
  }
  export type SettlementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    liquidatedBy?: boolean | Settlement$liquidatedByArgs<ExtArgs>
  }

  export type $SettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settlement"
    objects: {
      technician: Prisma.$UserPayload<ExtArgs>
      liquidatedBy: Prisma.$UserPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      technicianId: string
      weekNumber: number
      year: number
      startDate: Date
      endDate: Date
      ordersCount: number
      paymentsCount: number
      totalCollected: Prisma.Decimal
      totalParts: Prisma.Decimal
      netAmount: Prisma.Decimal
      techCommission: Prisma.Decimal
      compCommission: Prisma.Decimal
      status: $Enums.SettlementStatus
      notes: string | null
      liquidatedAt: Date | null
      liquidatedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settlement"]>
    composites: {}
  }

  type SettlementGetPayload<S extends boolean | null | undefined | SettlementDefaultArgs> = $Result.GetResult<Prisma.$SettlementPayload, S>

  type SettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettlementCountAggregateInputType | true
    }

  export interface SettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settlement'], meta: { name: 'Settlement' } }
    /**
     * Find zero or one Settlement that matches the filter.
     * @param {SettlementFindUniqueArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementFindUniqueArgs>(args: SelectSubset<T, SettlementFindUniqueArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settlement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettlementFindUniqueOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementFindFirstArgs>(args?: SelectSubset<T, SettlementFindFirstArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settlements
     * const settlements = await prisma.settlement.findMany()
     * 
     * // Get first 10 Settlements
     * const settlements = await prisma.settlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementWithIdOnly = await prisma.settlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementFindManyArgs>(args?: SelectSubset<T, SettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settlement.
     * @param {SettlementCreateArgs} args - Arguments to create a Settlement.
     * @example
     * // Create one Settlement
     * const Settlement = await prisma.settlement.create({
     *   data: {
     *     // ... data to create a Settlement
     *   }
     * })
     * 
     */
    create<T extends SettlementCreateArgs>(args: SelectSubset<T, SettlementCreateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settlements.
     * @param {SettlementCreateManyArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementCreateManyArgs>(args?: SelectSubset<T, SettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settlements and returns the data saved in the database.
     * @param {SettlementCreateManyAndReturnArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settlement.
     * @param {SettlementDeleteArgs} args - Arguments to delete one Settlement.
     * @example
     * // Delete one Settlement
     * const Settlement = await prisma.settlement.delete({
     *   where: {
     *     // ... filter to delete one Settlement
     *   }
     * })
     * 
     */
    delete<T extends SettlementDeleteArgs>(args: SelectSubset<T, SettlementDeleteArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settlement.
     * @param {SettlementUpdateArgs} args - Arguments to update one Settlement.
     * @example
     * // Update one Settlement
     * const settlement = await prisma.settlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementUpdateArgs>(args: SelectSubset<T, SettlementUpdateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settlements.
     * @param {SettlementDeleteManyArgs} args - Arguments to filter Settlements to delete.
     * @example
     * // Delete a few Settlements
     * const { count } = await prisma.settlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementDeleteManyArgs>(args?: SelectSubset<T, SettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementUpdateManyArgs>(args: SelectSubset<T, SettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements and returns the data updated in the database.
     * @param {SettlementUpdateManyAndReturnArgs} args - Arguments to update many Settlements.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettlementUpdateManyAndReturnArgs>(args: SelectSubset<T, SettlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settlement.
     * @param {SettlementUpsertArgs} args - Arguments to update or create a Settlement.
     * @example
     * // Update or create a Settlement
     * const settlement = await prisma.settlement.upsert({
     *   create: {
     *     // ... data to create a Settlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settlement we want to update
     *   }
     * })
     */
    upsert<T extends SettlementUpsertArgs>(args: SelectSubset<T, SettlementUpsertArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementCountArgs} args - Arguments to filter Settlements to count.
     * @example
     * // Count the number of Settlements
     * const count = await prisma.settlement.count({
     *   where: {
     *     // ... the filter for the Settlements we want to count
     *   }
     * })
    **/
    count<T extends SettlementCountArgs>(
      args?: Subset<T, SettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettlementAggregateArgs>(args: Subset<T, SettlementAggregateArgs>): Prisma.PrismaPromise<GetSettlementAggregateType<T>>

    /**
     * Group by Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementGroupByArgs} args - Group by arguments.
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
      T extends SettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementGroupByArgs['orderBy'] }
        : { orderBy?: SettlementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settlement model
   */
  readonly fields: SettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    liquidatedBy<T extends Settlement$liquidatedByArgs<ExtArgs> = {}>(args?: Subset<T, Settlement$liquidatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Settlement$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Settlement$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Settlement model
   */
  interface SettlementFieldRefs {
    readonly id: FieldRef<"Settlement", 'String'>
    readonly technicianId: FieldRef<"Settlement", 'String'>
    readonly weekNumber: FieldRef<"Settlement", 'Int'>
    readonly year: FieldRef<"Settlement", 'Int'>
    readonly startDate: FieldRef<"Settlement", 'DateTime'>
    readonly endDate: FieldRef<"Settlement", 'DateTime'>
    readonly ordersCount: FieldRef<"Settlement", 'Int'>
    readonly paymentsCount: FieldRef<"Settlement", 'Int'>
    readonly totalCollected: FieldRef<"Settlement", 'Decimal'>
    readonly totalParts: FieldRef<"Settlement", 'Decimal'>
    readonly netAmount: FieldRef<"Settlement", 'Decimal'>
    readonly techCommission: FieldRef<"Settlement", 'Decimal'>
    readonly compCommission: FieldRef<"Settlement", 'Decimal'>
    readonly status: FieldRef<"Settlement", 'SettlementStatus'>
    readonly notes: FieldRef<"Settlement", 'String'>
    readonly liquidatedAt: FieldRef<"Settlement", 'DateTime'>
    readonly liquidatedById: FieldRef<"Settlement", 'String'>
    readonly createdAt: FieldRef<"Settlement", 'DateTime'>
    readonly updatedAt: FieldRef<"Settlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settlement findUnique
   */
  export type SettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findUniqueOrThrow
   */
  export type SettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findFirst
   */
  export type SettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findFirstOrThrow
   */
  export type SettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findMany
   */
  export type SettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlements to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement create
   */
  export type SettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to create a Settlement.
     */
    data: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
  }

  /**
   * Settlement createMany
   */
  export type SettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settlement createManyAndReturn
   */
  export type SettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement update
   */
  export type SettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to update a Settlement.
     */
    data: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
    /**
     * Choose, which Settlement to update.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement updateMany
   */
  export type SettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
  }

  /**
   * Settlement updateManyAndReturn
   */
  export type SettlementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement upsert
   */
  export type SettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The filter to search for the Settlement to update in case it exists.
     */
    where: SettlementWhereUniqueInput
    /**
     * In case the Settlement found by the `where` argument doesn't exist, create a new Settlement with this data.
     */
    create: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
    /**
     * In case the Settlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
  }

  /**
   * Settlement delete
   */
  export type SettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter which Settlement to delete.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement deleteMany
   */
  export type SettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlements to delete
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to delete.
     */
    limit?: number
  }

  /**
   * Settlement.liquidatedBy
   */
  export type Settlement$liquidatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Settlement.payments
   */
  export type Settlement$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Settlement without action
   */
  export type SettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    serviceId: number
    userId: number
    action: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    action?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    serviceId: string
    userId: string
    action: string
    description: string
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    serviceId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "userId" | "action" | "description" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      userId: string
      action: string
      description: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly serviceId: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model IntegrationLog
   */

  export type AggregateIntegrationLog = {
    _count: IntegrationLogCountAggregateOutputType | null
    _min: IntegrationLogMinAggregateOutputType | null
    _max: IntegrationLogMaxAggregateOutputType | null
  }

  export type IntegrationLogMinAggregateOutputType = {
    id: string | null
    type: string | null
    entity: string | null
    entityId: string | null
    result: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type IntegrationLogMaxAggregateOutputType = {
    id: string | null
    type: string | null
    entity: string | null
    entityId: string | null
    result: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type IntegrationLogCountAggregateOutputType = {
    id: number
    type: number
    entity: number
    entityId: number
    result: number
    message: number
    userId: number
    createdAt: number
    _all: number
  }


  export type IntegrationLogMinAggregateInputType = {
    id?: true
    type?: true
    entity?: true
    entityId?: true
    result?: true
    message?: true
    userId?: true
    createdAt?: true
  }

  export type IntegrationLogMaxAggregateInputType = {
    id?: true
    type?: true
    entity?: true
    entityId?: true
    result?: true
    message?: true
    userId?: true
    createdAt?: true
  }

  export type IntegrationLogCountAggregateInputType = {
    id?: true
    type?: true
    entity?: true
    entityId?: true
    result?: true
    message?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type IntegrationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationLog to aggregate.
     */
    where?: IntegrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationLogs to fetch.
     */
    orderBy?: IntegrationLogOrderByWithRelationInput | IntegrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationLogs
    **/
    _count?: true | IntegrationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationLogMaxAggregateInputType
  }

  export type GetIntegrationLogAggregateType<T extends IntegrationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationLog[P]>
      : GetScalarType<T[P], AggregateIntegrationLog[P]>
  }




  export type IntegrationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationLogWhereInput
    orderBy?: IntegrationLogOrderByWithAggregationInput | IntegrationLogOrderByWithAggregationInput[]
    by: IntegrationLogScalarFieldEnum[] | IntegrationLogScalarFieldEnum
    having?: IntegrationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationLogCountAggregateInputType | true
    _min?: IntegrationLogMinAggregateInputType
    _max?: IntegrationLogMaxAggregateInputType
  }

  export type IntegrationLogGroupByOutputType = {
    id: string
    type: string
    entity: string
    entityId: string
    result: string
    message: string | null
    userId: string | null
    createdAt: Date
    _count: IntegrationLogCountAggregateOutputType | null
    _min: IntegrationLogMinAggregateOutputType | null
    _max: IntegrationLogMaxAggregateOutputType | null
  }

  type GetIntegrationLogGroupByPayload<T extends IntegrationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationLogGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationLogGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    entity?: boolean
    entityId?: boolean
    result?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | IntegrationLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["integrationLog"]>

  export type IntegrationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    entity?: boolean
    entityId?: boolean
    result?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | IntegrationLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["integrationLog"]>

  export type IntegrationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    entity?: boolean
    entityId?: boolean
    result?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | IntegrationLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["integrationLog"]>

  export type IntegrationLogSelectScalar = {
    id?: boolean
    type?: boolean
    entity?: boolean
    entityId?: boolean
    result?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type IntegrationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "entity" | "entityId" | "result" | "message" | "userId" | "createdAt", ExtArgs["result"]["integrationLog"]>
  export type IntegrationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IntegrationLog$userArgs<ExtArgs>
  }
  export type IntegrationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IntegrationLog$userArgs<ExtArgs>
  }
  export type IntegrationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IntegrationLog$userArgs<ExtArgs>
  }

  export type $IntegrationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      entity: string
      entityId: string
      result: string
      message: string | null
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["integrationLog"]>
    composites: {}
  }

  type IntegrationLogGetPayload<S extends boolean | null | undefined | IntegrationLogDefaultArgs> = $Result.GetResult<Prisma.$IntegrationLogPayload, S>

  type IntegrationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationLogCountAggregateInputType | true
    }

  export interface IntegrationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationLog'], meta: { name: 'IntegrationLog' } }
    /**
     * Find zero or one IntegrationLog that matches the filter.
     * @param {IntegrationLogFindUniqueArgs} args - Arguments to find a IntegrationLog
     * @example
     * // Get one IntegrationLog
     * const integrationLog = await prisma.integrationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationLogFindUniqueArgs>(args: SelectSubset<T, IntegrationLogFindUniqueArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegrationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationLogFindUniqueOrThrowArgs} args - Arguments to find a IntegrationLog
     * @example
     * // Get one IntegrationLog
     * const integrationLog = await prisma.integrationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogFindFirstArgs} args - Arguments to find a IntegrationLog
     * @example
     * // Get one IntegrationLog
     * const integrationLog = await prisma.integrationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationLogFindFirstArgs>(args?: SelectSubset<T, IntegrationLogFindFirstArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogFindFirstOrThrowArgs} args - Arguments to find a IntegrationLog
     * @example
     * // Get one IntegrationLog
     * const integrationLog = await prisma.integrationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegrationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationLogs
     * const integrationLogs = await prisma.integrationLog.findMany()
     * 
     * // Get first 10 IntegrationLogs
     * const integrationLogs = await prisma.integrationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationLogWithIdOnly = await prisma.integrationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationLogFindManyArgs>(args?: SelectSubset<T, IntegrationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegrationLog.
     * @param {IntegrationLogCreateArgs} args - Arguments to create a IntegrationLog.
     * @example
     * // Create one IntegrationLog
     * const IntegrationLog = await prisma.integrationLog.create({
     *   data: {
     *     // ... data to create a IntegrationLog
     *   }
     * })
     * 
     */
    create<T extends IntegrationLogCreateArgs>(args: SelectSubset<T, IntegrationLogCreateArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegrationLogs.
     * @param {IntegrationLogCreateManyArgs} args - Arguments to create many IntegrationLogs.
     * @example
     * // Create many IntegrationLogs
     * const integrationLog = await prisma.integrationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationLogCreateManyArgs>(args?: SelectSubset<T, IntegrationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationLogs and returns the data saved in the database.
     * @param {IntegrationLogCreateManyAndReturnArgs} args - Arguments to create many IntegrationLogs.
     * @example
     * // Create many IntegrationLogs
     * const integrationLog = await prisma.integrationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationLogs and only return the `id`
     * const integrationLogWithIdOnly = await prisma.integrationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegrationLog.
     * @param {IntegrationLogDeleteArgs} args - Arguments to delete one IntegrationLog.
     * @example
     * // Delete one IntegrationLog
     * const IntegrationLog = await prisma.integrationLog.delete({
     *   where: {
     *     // ... filter to delete one IntegrationLog
     *   }
     * })
     * 
     */
    delete<T extends IntegrationLogDeleteArgs>(args: SelectSubset<T, IntegrationLogDeleteArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegrationLog.
     * @param {IntegrationLogUpdateArgs} args - Arguments to update one IntegrationLog.
     * @example
     * // Update one IntegrationLog
     * const integrationLog = await prisma.integrationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationLogUpdateArgs>(args: SelectSubset<T, IntegrationLogUpdateArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegrationLogs.
     * @param {IntegrationLogDeleteManyArgs} args - Arguments to filter IntegrationLogs to delete.
     * @example
     * // Delete a few IntegrationLogs
     * const { count } = await prisma.integrationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationLogDeleteManyArgs>(args?: SelectSubset<T, IntegrationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationLogs
     * const integrationLog = await prisma.integrationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationLogUpdateManyArgs>(args: SelectSubset<T, IntegrationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationLogs and returns the data updated in the database.
     * @param {IntegrationLogUpdateManyAndReturnArgs} args - Arguments to update many IntegrationLogs.
     * @example
     * // Update many IntegrationLogs
     * const integrationLog = await prisma.integrationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegrationLogs and only return the `id`
     * const integrationLogWithIdOnly = await prisma.integrationLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntegrationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegrationLog.
     * @param {IntegrationLogUpsertArgs} args - Arguments to update or create a IntegrationLog.
     * @example
     * // Update or create a IntegrationLog
     * const integrationLog = await prisma.integrationLog.upsert({
     *   create: {
     *     // ... data to create a IntegrationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationLog we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationLogUpsertArgs>(args: SelectSubset<T, IntegrationLogUpsertArgs<ExtArgs>>): Prisma__IntegrationLogClient<$Result.GetResult<Prisma.$IntegrationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogCountArgs} args - Arguments to filter IntegrationLogs to count.
     * @example
     * // Count the number of IntegrationLogs
     * const count = await prisma.integrationLog.count({
     *   where: {
     *     // ... the filter for the IntegrationLogs we want to count
     *   }
     * })
    **/
    count<T extends IntegrationLogCountArgs>(
      args?: Subset<T, IntegrationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationLogAggregateArgs>(args: Subset<T, IntegrationLogAggregateArgs>): Prisma.PrismaPromise<GetIntegrationLogAggregateType<T>>

    /**
     * Group by IntegrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationLogGroupByArgs} args - Group by arguments.
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
      T extends IntegrationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationLogGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntegrationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationLog model
   */
  readonly fields: IntegrationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends IntegrationLog$userArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IntegrationLog model
   */
  interface IntegrationLogFieldRefs {
    readonly id: FieldRef<"IntegrationLog", 'String'>
    readonly type: FieldRef<"IntegrationLog", 'String'>
    readonly entity: FieldRef<"IntegrationLog", 'String'>
    readonly entityId: FieldRef<"IntegrationLog", 'String'>
    readonly result: FieldRef<"IntegrationLog", 'String'>
    readonly message: FieldRef<"IntegrationLog", 'String'>
    readonly userId: FieldRef<"IntegrationLog", 'String'>
    readonly createdAt: FieldRef<"IntegrationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationLog findUnique
   */
  export type IntegrationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationLog to fetch.
     */
    where: IntegrationLogWhereUniqueInput
  }

  /**
   * IntegrationLog findUniqueOrThrow
   */
  export type IntegrationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationLog to fetch.
     */
    where: IntegrationLogWhereUniqueInput
  }

  /**
   * IntegrationLog findFirst
   */
  export type IntegrationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationLog to fetch.
     */
    where?: IntegrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationLogs to fetch.
     */
    orderBy?: IntegrationLogOrderByWithRelationInput | IntegrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationLogs.
     */
    cursor?: IntegrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationLogs.
     */
    distinct?: IntegrationLogScalarFieldEnum | IntegrationLogScalarFieldEnum[]
  }

  /**
   * IntegrationLog findFirstOrThrow
   */
  export type IntegrationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationLog to fetch.
     */
    where?: IntegrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationLogs to fetch.
     */
    orderBy?: IntegrationLogOrderByWithRelationInput | IntegrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationLogs.
     */
    cursor?: IntegrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationLogs.
     */
    distinct?: IntegrationLogScalarFieldEnum | IntegrationLogScalarFieldEnum[]
  }

  /**
   * IntegrationLog findMany
   */
  export type IntegrationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationLogs to fetch.
     */
    where?: IntegrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationLogs to fetch.
     */
    orderBy?: IntegrationLogOrderByWithRelationInput | IntegrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationLogs.
     */
    cursor?: IntegrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationLogs.
     */
    skip?: number
    distinct?: IntegrationLogScalarFieldEnum | IntegrationLogScalarFieldEnum[]
  }

  /**
   * IntegrationLog create
   */
  export type IntegrationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a IntegrationLog.
     */
    data: XOR<IntegrationLogCreateInput, IntegrationLogUncheckedCreateInput>
  }

  /**
   * IntegrationLog createMany
   */
  export type IntegrationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationLogs.
     */
    data: IntegrationLogCreateManyInput | IntegrationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationLog createManyAndReturn
   */
  export type IntegrationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * The data used to create many IntegrationLogs.
     */
    data: IntegrationLogCreateManyInput | IntegrationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationLog update
   */
  export type IntegrationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a IntegrationLog.
     */
    data: XOR<IntegrationLogUpdateInput, IntegrationLogUncheckedUpdateInput>
    /**
     * Choose, which IntegrationLog to update.
     */
    where: IntegrationLogWhereUniqueInput
  }

  /**
   * IntegrationLog updateMany
   */
  export type IntegrationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationLogs.
     */
    data: XOR<IntegrationLogUpdateManyMutationInput, IntegrationLogUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationLogs to update
     */
    where?: IntegrationLogWhereInput
    /**
     * Limit how many IntegrationLogs to update.
     */
    limit?: number
  }

  /**
   * IntegrationLog updateManyAndReturn
   */
  export type IntegrationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * The data used to update IntegrationLogs.
     */
    data: XOR<IntegrationLogUpdateManyMutationInput, IntegrationLogUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationLogs to update
     */
    where?: IntegrationLogWhereInput
    /**
     * Limit how many IntegrationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationLog upsert
   */
  export type IntegrationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the IntegrationLog to update in case it exists.
     */
    where: IntegrationLogWhereUniqueInput
    /**
     * In case the IntegrationLog found by the `where` argument doesn't exist, create a new IntegrationLog with this data.
     */
    create: XOR<IntegrationLogCreateInput, IntegrationLogUncheckedCreateInput>
    /**
     * In case the IntegrationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationLogUpdateInput, IntegrationLogUncheckedUpdateInput>
  }

  /**
   * IntegrationLog delete
   */
  export type IntegrationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
    /**
     * Filter which IntegrationLog to delete.
     */
    where: IntegrationLogWhereUniqueInput
  }

  /**
   * IntegrationLog deleteMany
   */
  export type IntegrationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationLogs to delete
     */
    where?: IntegrationLogWhereInput
    /**
     * Limit how many IntegrationLogs to delete.
     */
    limit?: number
  }

  /**
   * IntegrationLog.user
   */
  export type IntegrationLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * IntegrationLog without action
   */
  export type IntegrationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationLog
     */
    select?: IntegrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationLog
     */
    omit?: IntegrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    avatar: 'avatar',
    passwordHash: 'passwordHash',
    phone: 'phone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ServiceCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    icon: 'icon',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceCategoryScalarFieldEnum = (typeof ServiceCategoryScalarFieldEnum)[keyof typeof ServiceCategoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    scheduledDate: 'scheduledDate',
    scheduledTime: 'scheduledTime',
    address: 'address',
    completedAt: 'completedAt',
    notes: 'notes',
    expectedAmount: 'expectedAmount',
    closedAt: 'closedAt',
    isLocked: 'isLocked',
    technicianId: 'technicianId',
    clientId: 'clientId',
    createdById: 'createdById',
    closedById: 'closedById',
    categoryId: 'categoryId',
    completedPhotoUrl: 'completedPhotoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    method: 'method',
    amountPaid: 'amountPaid',
    sparePartsCost: 'sparePartsCost',
    debtAmount: 'debtAmount',
    hasDebt: 'hasDebt',
    receiptPhotoUrl: 'receiptPhotoUrl',
    notes: 'notes',
    technicianId: 'technicianId',
    serviceId: 'serviceId',
    settlementId: 'settlementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentPartScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    supplierId: 'supplierId',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentPartScalarFieldEnum = (typeof PaymentPartScalarFieldEnum)[keyof typeof PaymentPartScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    notes: 'notes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const EstimateScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    technicianId: 'technicianId',
    clientId: 'clientId',
    amount: 'amount',
    description: 'description',
    notes: 'notes',
    status: 'status',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstimateScalarFieldEnum = (typeof EstimateScalarFieldEnum)[keyof typeof EstimateScalarFieldEnum]


  export const SettlementScalarFieldEnum: {
    id: 'id',
    technicianId: 'technicianId',
    weekNumber: 'weekNumber',
    year: 'year',
    startDate: 'startDate',
    endDate: 'endDate',
    ordersCount: 'ordersCount',
    paymentsCount: 'paymentsCount',
    totalCollected: 'totalCollected',
    totalParts: 'totalParts',
    netAmount: 'netAmount',
    techCommission: 'techCommission',
    compCommission: 'compCommission',
    status: 'status',
    notes: 'notes',
    liquidatedAt: 'liquidatedAt',
    liquidatedById: 'liquidatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettlementScalarFieldEnum = (typeof SettlementScalarFieldEnum)[keyof typeof SettlementScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    userId: 'userId',
    action: 'action',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const IntegrationLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    entity: 'entity',
    entityId: 'entityId',
    result: 'result',
    message: 'message',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type IntegrationLogScalarFieldEnum = (typeof IntegrationLogScalarFieldEnum)[keyof typeof IntegrationLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'ServiceStatus[]'
   */
  export type ListEnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EstimateStatus'
   */
  export type EnumEstimateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstimateStatus'>
    


  /**
   * Reference to a field of type 'EstimateStatus[]'
   */
  export type ListEnumEstimateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstimateStatus[]'>
    


  /**
   * Reference to a field of type 'SettlementStatus'
   */
  export type EnumSettlementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementStatus'>
    


  /**
   * Reference to a field of type 'SettlementStatus[]'
   */
  export type ListEnumSettlementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    servicesAsTechnician?: ServiceListRelationFilter
    servicesCreated?: ServiceListRelationFilter
    servicesClosed?: ServiceListRelationFilter
    payments?: PaymentListRelationFilter
    estimates?: EstimateListRelationFilter
    settlementsAsTechnician?: SettlementListRelationFilter
    settlementsLiquidated?: SettlementListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    integrationLogs?: IntegrationLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servicesAsTechnician?: ServiceOrderByRelationAggregateInput
    servicesCreated?: ServiceOrderByRelationAggregateInput
    servicesClosed?: ServiceOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    estimates?: EstimateOrderByRelationAggregateInput
    settlementsAsTechnician?: SettlementOrderByRelationAggregateInput
    settlementsLiquidated?: SettlementOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    integrationLogs?: IntegrationLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    servicesAsTechnician?: ServiceListRelationFilter
    servicesCreated?: ServiceListRelationFilter
    servicesClosed?: ServiceListRelationFilter
    payments?: PaymentListRelationFilter
    estimates?: EstimateListRelationFilter
    settlementsAsTechnician?: SettlementListRelationFilter
    settlementsLiquidated?: SettlementListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    integrationLogs?: IntegrationLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    services?: ServiceListRelationFilter
    estimates?: EstimateListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    estimates?: EstimateOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    services?: ServiceListRelationFilter
    estimates?: EstimateListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    city?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type ServiceCategoryWhereInput = {
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    id?: StringFilter<"ServiceCategory"> | string
    name?: StringFilter<"ServiceCategory"> | string
    description?: StringNullableFilter<"ServiceCategory"> | string | null
    color?: StringNullableFilter<"ServiceCategory"> | string | null
    icon?: StringNullableFilter<"ServiceCategory"> | string | null
    isActive?: BoolFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    services?: ServiceListRelationFilter
  }

  export type ServiceCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    description?: StringNullableFilter<"ServiceCategory"> | string | null
    color?: StringNullableFilter<"ServiceCategory"> | string | null
    icon?: StringNullableFilter<"ServiceCategory"> | string | null
    isActive?: BoolFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    services?: ServiceListRelationFilter
  }, "id" | "name">

  export type ServiceCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCategoryCountOrderByAggregateInput
    _max?: ServiceCategoryMaxOrderByAggregateInput
    _min?: ServiceCategoryMinOrderByAggregateInput
  }

  export type ServiceCategoryScalarWhereWithAggregatesInput = {
    AND?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    OR?: ServiceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceCategory"> | string
    name?: StringWithAggregatesFilter<"ServiceCategory"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceCategory"> | string | null
    color?: StringNullableWithAggregatesFilter<"ServiceCategory"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ServiceCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceCategory"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    scheduledDate?: DateTimeFilter<"Service"> | Date | string
    scheduledTime?: StringFilter<"Service"> | string
    address?: StringNullableFilter<"Service"> | string | null
    completedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    notes?: StringNullableFilter<"Service"> | string | null
    expectedAmount?: DecimalNullableFilter<"Service"> | Decimal | DecimalJsLike | number | string | null
    closedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    isLocked?: BoolFilter<"Service"> | boolean
    technicianId?: StringNullableFilter<"Service"> | string | null
    clientId?: StringNullableFilter<"Service"> | string | null
    createdById?: StringFilter<"Service"> | string
    closedById?: StringNullableFilter<"Service"> | string | null
    categoryId?: StringNullableFilter<"Service"> | string | null
    completedPhotoUrl?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    closedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<ServiceCategoryNullableScalarRelationFilter, ServiceCategoryWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    estimate?: XOR<EstimateNullableScalarRelationFilter, EstimateWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    expectedAmount?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    isLocked?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    closedById?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    completedPhotoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technician?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    closedBy?: UserOrderByWithRelationInput
    category?: ServiceCategoryOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    estimate?: EstimateOrderByWithRelationInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    scheduledDate?: DateTimeFilter<"Service"> | Date | string
    scheduledTime?: StringFilter<"Service"> | string
    address?: StringNullableFilter<"Service"> | string | null
    completedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    notes?: StringNullableFilter<"Service"> | string | null
    expectedAmount?: DecimalNullableFilter<"Service"> | Decimal | DecimalJsLike | number | string | null
    closedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    isLocked?: BoolFilter<"Service"> | boolean
    technicianId?: StringNullableFilter<"Service"> | string | null
    clientId?: StringNullableFilter<"Service"> | string | null
    createdById?: StringFilter<"Service"> | string
    closedById?: StringNullableFilter<"Service"> | string | null
    categoryId?: StringNullableFilter<"Service"> | string | null
    completedPhotoUrl?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    closedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<ServiceCategoryNullableScalarRelationFilter, ServiceCategoryWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    estimate?: XOR<EstimateNullableScalarRelationFilter, EstimateWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    expectedAmount?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    isLocked?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    closedById?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    completedPhotoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    status?: EnumServiceStatusWithAggregatesFilter<"Service"> | $Enums.ServiceStatus
    scheduledDate?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    scheduledTime?: StringWithAggregatesFilter<"Service"> | string
    address?: StringNullableWithAggregatesFilter<"Service"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Service"> | string | null
    expectedAmount?: DecimalNullableWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
    isLocked?: BoolWithAggregatesFilter<"Service"> | boolean
    technicianId?: StringNullableWithAggregatesFilter<"Service"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdById?: StringWithAggregatesFilter<"Service"> | string
    closedById?: StringNullableWithAggregatesFilter<"Service"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Service"> | string | null
    completedPhotoUrl?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amountPaid?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFilter<"Payment"> | boolean
    receiptPhotoUrl?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    technicianId?: StringFilter<"Payment"> | string
    serviceId?: StringFilter<"Payment"> | string
    settlementId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    settlement?: XOR<SettlementNullableScalarRelationFilter, SettlementWhereInput> | null
    parts?: PaymentPartListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    receiptPhotoUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
    settlementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technician?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    settlement?: SettlementOrderByWithRelationInput
    parts?: PaymentPartOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amountPaid?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFilter<"Payment"> | boolean
    receiptPhotoUrl?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    technicianId?: StringFilter<"Payment"> | string
    settlementId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    settlement?: XOR<SettlementNullableScalarRelationFilter, SettlementWhereInput> | null
    parts?: PaymentPartListRelationFilter
  }, "id" | "serviceId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    receiptPhotoUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
    settlementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    amountPaid?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolWithAggregatesFilter<"Payment"> | boolean
    receiptPhotoUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    technicianId?: StringWithAggregatesFilter<"Payment"> | string
    serviceId?: StringWithAggregatesFilter<"Payment"> | string
    settlementId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PaymentPartWhereInput = {
    AND?: PaymentPartWhereInput | PaymentPartWhereInput[]
    OR?: PaymentPartWhereInput[]
    NOT?: PaymentPartWhereInput | PaymentPartWhereInput[]
    id?: StringFilter<"PaymentPart"> | string
    paymentId?: StringFilter<"PaymentPart"> | string
    supplierId?: StringFilter<"PaymentPart"> | string
    description?: StringFilter<"PaymentPart"> | string
    quantity?: IntFilter<"PaymentPart"> | number
    unitPrice?: DecimalFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PaymentPart"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPart"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type PaymentPartOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    supplierId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
  }

  export type PaymentPartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentPartWhereInput | PaymentPartWhereInput[]
    OR?: PaymentPartWhereInput[]
    NOT?: PaymentPartWhereInput | PaymentPartWhereInput[]
    paymentId?: StringFilter<"PaymentPart"> | string
    supplierId?: StringFilter<"PaymentPart"> | string
    description?: StringFilter<"PaymentPart"> | string
    quantity?: IntFilter<"PaymentPart"> | number
    unitPrice?: DecimalFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PaymentPart"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPart"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type PaymentPartOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    supplierId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentPartCountOrderByAggregateInput
    _avg?: PaymentPartAvgOrderByAggregateInput
    _max?: PaymentPartMaxOrderByAggregateInput
    _min?: PaymentPartMinOrderByAggregateInput
    _sum?: PaymentPartSumOrderByAggregateInput
  }

  export type PaymentPartScalarWhereWithAggregatesInput = {
    AND?: PaymentPartScalarWhereWithAggregatesInput | PaymentPartScalarWhereWithAggregatesInput[]
    OR?: PaymentPartScalarWhereWithAggregatesInput[]
    NOT?: PaymentPartScalarWhereWithAggregatesInput | PaymentPartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPart"> | string
    paymentId?: StringWithAggregatesFilter<"PaymentPart"> | string
    supplierId?: StringWithAggregatesFilter<"PaymentPart"> | string
    description?: StringWithAggregatesFilter<"PaymentPart"> | string
    quantity?: IntWithAggregatesFilter<"PaymentPart"> | number
    unitPrice?: DecimalWithAggregatesFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPart"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    notes?: StringNullableFilter<"Supplier"> | string | null
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    paymentParts?: PaymentPartListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentParts?: PaymentPartOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    notes?: StringNullableFilter<"Supplier"> | string | null
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    paymentParts?: PaymentPartListRelationFilter
  }, "id" | "name">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    isActive?: BoolWithAggregatesFilter<"Supplier"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type EstimateWhereInput = {
    AND?: EstimateWhereInput | EstimateWhereInput[]
    OR?: EstimateWhereInput[]
    NOT?: EstimateWhereInput | EstimateWhereInput[]
    id?: StringFilter<"Estimate"> | string
    serviceId?: StringFilter<"Estimate"> | string
    technicianId?: StringFilter<"Estimate"> | string
    clientId?: StringFilter<"Estimate"> | string
    amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Estimate"> | string | null
    notes?: StringNullableFilter<"Estimate"> | string | null
    status?: EnumEstimateStatusFilter<"Estimate"> | $Enums.EstimateStatus
    completedAt?: DateTimeNullableFilter<"Estimate"> | Date | string | null
    createdAt?: DateTimeFilter<"Estimate"> | Date | string
    updatedAt?: DateTimeFilter<"Estimate"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type EstimateOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    technician?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type EstimateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    AND?: EstimateWhereInput | EstimateWhereInput[]
    OR?: EstimateWhereInput[]
    NOT?: EstimateWhereInput | EstimateWhereInput[]
    technicianId?: StringFilter<"Estimate"> | string
    clientId?: StringFilter<"Estimate"> | string
    amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Estimate"> | string | null
    notes?: StringNullableFilter<"Estimate"> | string | null
    status?: EnumEstimateStatusFilter<"Estimate"> | $Enums.EstimateStatus
    completedAt?: DateTimeNullableFilter<"Estimate"> | Date | string | null
    createdAt?: DateTimeFilter<"Estimate"> | Date | string
    updatedAt?: DateTimeFilter<"Estimate"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "serviceId">

  export type EstimateOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstimateCountOrderByAggregateInput
    _avg?: EstimateAvgOrderByAggregateInput
    _max?: EstimateMaxOrderByAggregateInput
    _min?: EstimateMinOrderByAggregateInput
    _sum?: EstimateSumOrderByAggregateInput
  }

  export type EstimateScalarWhereWithAggregatesInput = {
    AND?: EstimateScalarWhereWithAggregatesInput | EstimateScalarWhereWithAggregatesInput[]
    OR?: EstimateScalarWhereWithAggregatesInput[]
    NOT?: EstimateScalarWhereWithAggregatesInput | EstimateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estimate"> | string
    serviceId?: StringWithAggregatesFilter<"Estimate"> | string
    technicianId?: StringWithAggregatesFilter<"Estimate"> | string
    clientId?: StringWithAggregatesFilter<"Estimate"> | string
    amount?: DecimalWithAggregatesFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Estimate"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Estimate"> | string | null
    status?: EnumEstimateStatusWithAggregatesFilter<"Estimate"> | $Enums.EstimateStatus
    completedAt?: DateTimeNullableWithAggregatesFilter<"Estimate"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Estimate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Estimate"> | Date | string
  }

  export type SettlementWhereInput = {
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    id?: StringFilter<"Settlement"> | string
    technicianId?: StringFilter<"Settlement"> | string
    weekNumber?: IntFilter<"Settlement"> | number
    year?: IntFilter<"Settlement"> | number
    startDate?: DateTimeFilter<"Settlement"> | Date | string
    endDate?: DateTimeFilter<"Settlement"> | Date | string
    ordersCount?: IntFilter<"Settlement"> | number
    paymentsCount?: IntFilter<"Settlement"> | number
    totalCollected?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFilter<"Settlement"> | $Enums.SettlementStatus
    notes?: StringNullableFilter<"Settlement"> | string | null
    liquidatedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    liquidatedById?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    updatedAt?: DateTimeFilter<"Settlement"> | Date | string
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    liquidatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type SettlementOrderByWithRelationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    weekNumber?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    liquidatedAt?: SortOrderInput | SortOrder
    liquidatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technician?: UserOrderByWithRelationInput
    liquidatedBy?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type SettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    technicianId_weekNumber_year?: SettlementTechnicianIdWeekNumberYearCompoundUniqueInput
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    technicianId?: StringFilter<"Settlement"> | string
    weekNumber?: IntFilter<"Settlement"> | number
    year?: IntFilter<"Settlement"> | number
    startDate?: DateTimeFilter<"Settlement"> | Date | string
    endDate?: DateTimeFilter<"Settlement"> | Date | string
    ordersCount?: IntFilter<"Settlement"> | number
    paymentsCount?: IntFilter<"Settlement"> | number
    totalCollected?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFilter<"Settlement"> | $Enums.SettlementStatus
    notes?: StringNullableFilter<"Settlement"> | string | null
    liquidatedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    liquidatedById?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    updatedAt?: DateTimeFilter<"Settlement"> | Date | string
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    liquidatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id" | "technicianId_weekNumber_year">

  export type SettlementOrderByWithAggregationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    weekNumber?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    liquidatedAt?: SortOrderInput | SortOrder
    liquidatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettlementCountOrderByAggregateInput
    _avg?: SettlementAvgOrderByAggregateInput
    _max?: SettlementMaxOrderByAggregateInput
    _min?: SettlementMinOrderByAggregateInput
    _sum?: SettlementSumOrderByAggregateInput
  }

  export type SettlementScalarWhereWithAggregatesInput = {
    AND?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    OR?: SettlementScalarWhereWithAggregatesInput[]
    NOT?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settlement"> | string
    technicianId?: StringWithAggregatesFilter<"Settlement"> | string
    weekNumber?: IntWithAggregatesFilter<"Settlement"> | number
    year?: IntWithAggregatesFilter<"Settlement"> | number
    startDate?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
    ordersCount?: IntWithAggregatesFilter<"Settlement"> | number
    paymentsCount?: IntWithAggregatesFilter<"Settlement"> | number
    totalCollected?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalWithAggregatesFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusWithAggregatesFilter<"Settlement"> | $Enums.SettlementStatus
    notes?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    liquidatedAt?: DateTimeNullableWithAggregatesFilter<"Settlement"> | Date | string | null
    liquidatedById?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    serviceId?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    serviceId?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    serviceId?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringWithAggregatesFilter<"ActivityLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type IntegrationLogWhereInput = {
    AND?: IntegrationLogWhereInput | IntegrationLogWhereInput[]
    OR?: IntegrationLogWhereInput[]
    NOT?: IntegrationLogWhereInput | IntegrationLogWhereInput[]
    id?: StringFilter<"IntegrationLog"> | string
    type?: StringFilter<"IntegrationLog"> | string
    entity?: StringFilter<"IntegrationLog"> | string
    entityId?: StringFilter<"IntegrationLog"> | string
    result?: StringFilter<"IntegrationLog"> | string
    message?: StringNullableFilter<"IntegrationLog"> | string | null
    userId?: StringNullableFilter<"IntegrationLog"> | string | null
    createdAt?: DateTimeFilter<"IntegrationLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IntegrationLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    result?: SortOrder
    message?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IntegrationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntegrationLogWhereInput | IntegrationLogWhereInput[]
    OR?: IntegrationLogWhereInput[]
    NOT?: IntegrationLogWhereInput | IntegrationLogWhereInput[]
    type?: StringFilter<"IntegrationLog"> | string
    entity?: StringFilter<"IntegrationLog"> | string
    entityId?: StringFilter<"IntegrationLog"> | string
    result?: StringFilter<"IntegrationLog"> | string
    message?: StringNullableFilter<"IntegrationLog"> | string | null
    userId?: StringNullableFilter<"IntegrationLog"> | string | null
    createdAt?: DateTimeFilter<"IntegrationLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type IntegrationLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    result?: SortOrder
    message?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IntegrationLogCountOrderByAggregateInput
    _max?: IntegrationLogMaxOrderByAggregateInput
    _min?: IntegrationLogMinOrderByAggregateInput
  }

  export type IntegrationLogScalarWhereWithAggregatesInput = {
    AND?: IntegrationLogScalarWhereWithAggregatesInput | IntegrationLogScalarWhereWithAggregatesInput[]
    OR?: IntegrationLogScalarWhereWithAggregatesInput[]
    NOT?: IntegrationLogScalarWhereWithAggregatesInput | IntegrationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntegrationLog"> | string
    type?: StringWithAggregatesFilter<"IntegrationLog"> | string
    entity?: StringWithAggregatesFilter<"IntegrationLog"> | string
    entityId?: StringWithAggregatesFilter<"IntegrationLog"> | string
    result?: StringWithAggregatesFilter<"IntegrationLog"> | string
    message?: StringNullableWithAggregatesFilter<"IntegrationLog"> | string | null
    userId?: StringNullableWithAggregatesFilter<"IntegrationLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IntegrationLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutClientInput
    estimates?: EstimateCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutClientInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutClientNestedInput
    estimates?: EstimateUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutClientNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutPaymentsInput
    service: ServiceCreateNestedOneWithoutPaymentInput
    settlement?: SettlementCreateNestedOneWithoutPaymentsInput
    parts?: PaymentPartCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    technicianId: string
    serviceId: string
    settlementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parts?: PaymentPartUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutPaymentNestedInput
    settlement?: SettlementUpdateOneWithoutPaymentsNestedInput
    parts?: PaymentPartUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parts?: PaymentPartUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    technicianId: string
    serviceId: string
    settlementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartCreateInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutPartsInput
    supplier: SupplierCreateNestedOneWithoutPaymentPartsInput
  }

  export type PaymentPartUncheckedCreateInput = {
    id?: string
    paymentId: string
    supplierId: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutPartsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutPaymentPartsNestedInput
  }

  export type PaymentPartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartCreateManyInput = {
    id?: string
    paymentId: string
    supplierId: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentParts?: PaymentPartCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentParts?: PaymentPartUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentParts?: PaymentPartUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentParts?: PaymentPartUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutEstimateInput
    technician: UserCreateNestedOneWithoutEstimatesInput
    client: ClientCreateNestedOneWithoutEstimatesInput
  }

  export type EstimateUncheckedCreateInput = {
    id?: string
    serviceId: string
    technicianId: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutEstimateNestedInput
    technician?: UserUpdateOneRequiredWithoutEstimatesNestedInput
    client?: ClientUpdateOneRequiredWithoutEstimatesNestedInput
  }

  export type EstimateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateCreateManyInput = {
    id?: string
    serviceId: string
    technicianId: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementCreateInput = {
    id?: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutSettlementsAsTechnicianInput
    liquidatedBy?: UserCreateNestedOneWithoutSettlementsLiquidatedInput
    payments?: PaymentCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUncheckedCreateInput = {
    id?: string
    technicianId: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    liquidatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutSettlementsAsTechnicianNestedInput
    liquidatedBy?: UserUpdateOneWithoutSettlementsLiquidatedNestedInput
    payments?: PaymentUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liquidatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementCreateManyInput = {
    id?: string
    technicianId: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    liquidatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liquidatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutActivityLogsInput
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    serviceId: string
    userId: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutActivityLogsNestedInput
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    serviceId: string
    userId: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationLogCreateInput = {
    id?: string
    type: string
    entity: string
    entityId: string
    result: string
    message?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutIntegrationLogsInput
  }

  export type IntegrationLogUncheckedCreateInput = {
    id?: string
    type: string
    entity: string
    entityId: string
    result: string
    message?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type IntegrationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutIntegrationLogsNestedInput
  }

  export type IntegrationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationLogCreateManyInput = {
    id?: string
    type: string
    entity: string
    entityId: string
    result: string
    message?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type IntegrationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type EstimateListRelationFilter = {
    every?: EstimateWhereInput
    some?: EstimateWhereInput
    none?: EstimateWhereInput
  }

  export type SettlementListRelationFilter = {
    every?: SettlementWhereInput
    some?: SettlementWhereInput
    none?: SettlementWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type IntegrationLogListRelationFilter = {
    every?: IntegrationLogWhereInput
    some?: IntegrationLogWhereInput
    none?: IntegrationLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstimateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceCategoryNullableScalarRelationFilter = {
    is?: ServiceCategoryWhereInput | null
    isNot?: ServiceCategoryWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type EstimateNullableScalarRelationFilter = {
    is?: EstimateWhereInput | null
    isNot?: EstimateWhereInput | null
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    completedAt?: SortOrder
    notes?: SortOrder
    expectedAmount?: SortOrder
    closedAt?: SortOrder
    isLocked?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    closedById?: SortOrder
    categoryId?: SortOrder
    completedPhotoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    expectedAmount?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    completedAt?: SortOrder
    notes?: SortOrder
    expectedAmount?: SortOrder
    closedAt?: SortOrder
    isLocked?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    closedById?: SortOrder
    categoryId?: SortOrder
    completedPhotoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    completedAt?: SortOrder
    notes?: SortOrder
    expectedAmount?: SortOrder
    closedAt?: SortOrder
    isLocked?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    createdById?: SortOrder
    closedById?: SortOrder
    categoryId?: SortOrder
    completedPhotoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    expectedAmount?: SortOrder
  }

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type SettlementNullableScalarRelationFilter = {
    is?: SettlementWhereInput | null
    isNot?: SettlementWhereInput | null
  }

  export type PaymentPartListRelationFilter = {
    every?: PaymentPartWhereInput
    some?: PaymentPartWhereInput
    none?: PaymentPartWhereInput
  }

  export type PaymentPartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    receiptPhotoUrl?: SortOrder
    notes?: SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
    settlementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    receiptPhotoUrl?: SortOrder
    notes?: SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
    settlementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    receiptPhotoUrl?: SortOrder
    notes?: SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
    settlementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type PaymentPartCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    supplierId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPartAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type PaymentPartMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    supplierId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPartMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    supplierId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPartSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
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

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEstimateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EstimateStatus | EnumEstimateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstimateStatusFilter<$PrismaModel> | $Enums.EstimateStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type EstimateCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstimateAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EstimateMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstimateMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    technicianId?: SortOrder
    clientId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstimateSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumEstimateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstimateStatus | EnumEstimateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstimateStatusWithAggregatesFilter<$PrismaModel> | $Enums.EstimateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstimateStatusFilter<$PrismaModel>
    _max?: NestedEnumEstimateStatusFilter<$PrismaModel>
  }

  export type EnumSettlementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusFilter<$PrismaModel> | $Enums.SettlementStatus
  }

  export type SettlementTechnicianIdWeekNumberYearCompoundUniqueInput = {
    technicianId: string
    weekNumber: number
    year: number
  }

  export type SettlementCountOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    weekNumber?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    liquidatedAt?: SortOrder
    liquidatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettlementAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
    year?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
  }

  export type SettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    weekNumber?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    liquidatedAt?: SortOrder
    liquidatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettlementMinOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    weekNumber?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    liquidatedAt?: SortOrder
    liquidatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettlementSumOrderByAggregateInput = {
    weekNumber?: SortOrder
    year?: SortOrder
    ordersCount?: SortOrder
    paymentsCount?: SortOrder
    totalCollected?: SortOrder
    totalParts?: SortOrder
    netAmount?: SortOrder
    techCommission?: SortOrder
    compCommission?: SortOrder
  }

  export type EnumSettlementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel> | $Enums.SettlementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementStatusFilter<$PrismaModel>
    _max?: NestedEnumSettlementStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntegrationLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    result?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntegrationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    result?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntegrationLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    result?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<ServiceCreateWithoutTechnicianInput, ServiceUncheckedCreateWithoutTechnicianInput> | ServiceCreateWithoutTechnicianInput[] | ServiceUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTechnicianInput | ServiceCreateOrConnectWithoutTechnicianInput[]
    createMany?: ServiceCreateManyTechnicianInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutClosedByInput = {
    create?: XOR<ServiceCreateWithoutClosedByInput, ServiceUncheckedCreateWithoutClosedByInput> | ServiceCreateWithoutClosedByInput[] | ServiceUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClosedByInput | ServiceCreateOrConnectWithoutClosedByInput[]
    createMany?: ServiceCreateManyClosedByInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput> | PaymentCreateWithoutTechnicianInput[] | PaymentUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTechnicianInput | PaymentCreateOrConnectWithoutTechnicianInput[]
    createMany?: PaymentCreateManyTechnicianInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EstimateCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<EstimateCreateWithoutTechnicianInput, EstimateUncheckedCreateWithoutTechnicianInput> | EstimateCreateWithoutTechnicianInput[] | EstimateUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutTechnicianInput | EstimateCreateOrConnectWithoutTechnicianInput[]
    createMany?: EstimateCreateManyTechnicianInputEnvelope
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<SettlementCreateWithoutTechnicianInput, SettlementUncheckedCreateWithoutTechnicianInput> | SettlementCreateWithoutTechnicianInput[] | SettlementUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutTechnicianInput | SettlementCreateOrConnectWithoutTechnicianInput[]
    createMany?: SettlementCreateManyTechnicianInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutLiquidatedByInput = {
    create?: XOR<SettlementCreateWithoutLiquidatedByInput, SettlementUncheckedCreateWithoutLiquidatedByInput> | SettlementCreateWithoutLiquidatedByInput[] | SettlementUncheckedCreateWithoutLiquidatedByInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLiquidatedByInput | SettlementCreateOrConnectWithoutLiquidatedByInput[]
    createMany?: SettlementCreateManyLiquidatedByInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type IntegrationLogCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationLogCreateWithoutUserInput, IntegrationLogUncheckedCreateWithoutUserInput> | IntegrationLogCreateWithoutUserInput[] | IntegrationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationLogCreateOrConnectWithoutUserInput | IntegrationLogCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationLogCreateManyUserInputEnvelope
    connect?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<ServiceCreateWithoutTechnicianInput, ServiceUncheckedCreateWithoutTechnicianInput> | ServiceCreateWithoutTechnicianInput[] | ServiceUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTechnicianInput | ServiceCreateOrConnectWithoutTechnicianInput[]
    createMany?: ServiceCreateManyTechnicianInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutClosedByInput = {
    create?: XOR<ServiceCreateWithoutClosedByInput, ServiceUncheckedCreateWithoutClosedByInput> | ServiceCreateWithoutClosedByInput[] | ServiceUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClosedByInput | ServiceCreateOrConnectWithoutClosedByInput[]
    createMany?: ServiceCreateManyClosedByInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput> | PaymentCreateWithoutTechnicianInput[] | PaymentUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTechnicianInput | PaymentCreateOrConnectWithoutTechnicianInput[]
    createMany?: PaymentCreateManyTechnicianInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EstimateUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<EstimateCreateWithoutTechnicianInput, EstimateUncheckedCreateWithoutTechnicianInput> | EstimateCreateWithoutTechnicianInput[] | EstimateUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutTechnicianInput | EstimateCreateOrConnectWithoutTechnicianInput[]
    createMany?: EstimateCreateManyTechnicianInputEnvelope
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<SettlementCreateWithoutTechnicianInput, SettlementUncheckedCreateWithoutTechnicianInput> | SettlementCreateWithoutTechnicianInput[] | SettlementUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutTechnicianInput | SettlementCreateOrConnectWithoutTechnicianInput[]
    createMany?: SettlementCreateManyTechnicianInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput = {
    create?: XOR<SettlementCreateWithoutLiquidatedByInput, SettlementUncheckedCreateWithoutLiquidatedByInput> | SettlementCreateWithoutLiquidatedByInput[] | SettlementUncheckedCreateWithoutLiquidatedByInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLiquidatedByInput | SettlementCreateOrConnectWithoutLiquidatedByInput[]
    createMany?: SettlementCreateManyLiquidatedByInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type IntegrationLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationLogCreateWithoutUserInput, IntegrationLogUncheckedCreateWithoutUserInput> | IntegrationLogCreateWithoutUserInput[] | IntegrationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationLogCreateOrConnectWithoutUserInput | IntegrationLogCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationLogCreateManyUserInputEnvelope
    connect?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<ServiceCreateWithoutTechnicianInput, ServiceUncheckedCreateWithoutTechnicianInput> | ServiceCreateWithoutTechnicianInput[] | ServiceUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTechnicianInput | ServiceCreateOrConnectWithoutTechnicianInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutTechnicianInput | ServiceUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: ServiceCreateManyTechnicianInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutTechnicianInput | ServiceUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutTechnicianInput | ServiceUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCreatedByInput | ServiceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCreatedByInput | ServiceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCreatedByInput | ServiceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutClosedByNestedInput = {
    create?: XOR<ServiceCreateWithoutClosedByInput, ServiceUncheckedCreateWithoutClosedByInput> | ServiceCreateWithoutClosedByInput[] | ServiceUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClosedByInput | ServiceCreateOrConnectWithoutClosedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutClosedByInput | ServiceUpsertWithWhereUniqueWithoutClosedByInput[]
    createMany?: ServiceCreateManyClosedByInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutClosedByInput | ServiceUpdateWithWhereUniqueWithoutClosedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutClosedByInput | ServiceUpdateManyWithWhereWithoutClosedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput> | PaymentCreateWithoutTechnicianInput[] | PaymentUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTechnicianInput | PaymentCreateOrConnectWithoutTechnicianInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTechnicianInput | PaymentUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: PaymentCreateManyTechnicianInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTechnicianInput | PaymentUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTechnicianInput | PaymentUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type EstimateUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<EstimateCreateWithoutTechnicianInput, EstimateUncheckedCreateWithoutTechnicianInput> | EstimateCreateWithoutTechnicianInput[] | EstimateUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutTechnicianInput | EstimateCreateOrConnectWithoutTechnicianInput[]
    upsert?: EstimateUpsertWithWhereUniqueWithoutTechnicianInput | EstimateUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: EstimateCreateManyTechnicianInputEnvelope
    set?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    disconnect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    delete?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    update?: EstimateUpdateWithWhereUniqueWithoutTechnicianInput | EstimateUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: EstimateUpdateManyWithWhereWithoutTechnicianInput | EstimateUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: EstimateScalarWhereInput | EstimateScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<SettlementCreateWithoutTechnicianInput, SettlementUncheckedCreateWithoutTechnicianInput> | SettlementCreateWithoutTechnicianInput[] | SettlementUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutTechnicianInput | SettlementCreateOrConnectWithoutTechnicianInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutTechnicianInput | SettlementUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: SettlementCreateManyTechnicianInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutTechnicianInput | SettlementUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutTechnicianInput | SettlementUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutLiquidatedByNestedInput = {
    create?: XOR<SettlementCreateWithoutLiquidatedByInput, SettlementUncheckedCreateWithoutLiquidatedByInput> | SettlementCreateWithoutLiquidatedByInput[] | SettlementUncheckedCreateWithoutLiquidatedByInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLiquidatedByInput | SettlementCreateOrConnectWithoutLiquidatedByInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutLiquidatedByInput | SettlementUpsertWithWhereUniqueWithoutLiquidatedByInput[]
    createMany?: SettlementCreateManyLiquidatedByInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutLiquidatedByInput | SettlementUpdateWithWhereUniqueWithoutLiquidatedByInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutLiquidatedByInput | SettlementUpdateManyWithWhereWithoutLiquidatedByInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntegrationLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationLogCreateWithoutUserInput, IntegrationLogUncheckedCreateWithoutUserInput> | IntegrationLogCreateWithoutUserInput[] | IntegrationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationLogCreateOrConnectWithoutUserInput | IntegrationLogCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationLogUpsertWithWhereUniqueWithoutUserInput | IntegrationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationLogCreateManyUserInputEnvelope
    set?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    disconnect?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    delete?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    connect?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    update?: IntegrationLogUpdateWithWhereUniqueWithoutUserInput | IntegrationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationLogUpdateManyWithWhereWithoutUserInput | IntegrationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationLogScalarWhereInput | IntegrationLogScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<ServiceCreateWithoutTechnicianInput, ServiceUncheckedCreateWithoutTechnicianInput> | ServiceCreateWithoutTechnicianInput[] | ServiceUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTechnicianInput | ServiceCreateOrConnectWithoutTechnicianInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutTechnicianInput | ServiceUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: ServiceCreateManyTechnicianInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutTechnicianInput | ServiceUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutTechnicianInput | ServiceUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput> | ServiceCreateWithoutCreatedByInput[] | ServiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCreatedByInput | ServiceCreateOrConnectWithoutCreatedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCreatedByInput | ServiceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ServiceCreateManyCreatedByInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCreatedByInput | ServiceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCreatedByInput | ServiceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutClosedByNestedInput = {
    create?: XOR<ServiceCreateWithoutClosedByInput, ServiceUncheckedCreateWithoutClosedByInput> | ServiceCreateWithoutClosedByInput[] | ServiceUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClosedByInput | ServiceCreateOrConnectWithoutClosedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutClosedByInput | ServiceUpsertWithWhereUniqueWithoutClosedByInput[]
    createMany?: ServiceCreateManyClosedByInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutClosedByInput | ServiceUpdateWithWhereUniqueWithoutClosedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutClosedByInput | ServiceUpdateManyWithWhereWithoutClosedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput> | PaymentCreateWithoutTechnicianInput[] | PaymentUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTechnicianInput | PaymentCreateOrConnectWithoutTechnicianInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTechnicianInput | PaymentUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: PaymentCreateManyTechnicianInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTechnicianInput | PaymentUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTechnicianInput | PaymentUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type EstimateUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<EstimateCreateWithoutTechnicianInput, EstimateUncheckedCreateWithoutTechnicianInput> | EstimateCreateWithoutTechnicianInput[] | EstimateUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutTechnicianInput | EstimateCreateOrConnectWithoutTechnicianInput[]
    upsert?: EstimateUpsertWithWhereUniqueWithoutTechnicianInput | EstimateUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: EstimateCreateManyTechnicianInputEnvelope
    set?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    disconnect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    delete?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    update?: EstimateUpdateWithWhereUniqueWithoutTechnicianInput | EstimateUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: EstimateUpdateManyWithWhereWithoutTechnicianInput | EstimateUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: EstimateScalarWhereInput | EstimateScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<SettlementCreateWithoutTechnicianInput, SettlementUncheckedCreateWithoutTechnicianInput> | SettlementCreateWithoutTechnicianInput[] | SettlementUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutTechnicianInput | SettlementCreateOrConnectWithoutTechnicianInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutTechnicianInput | SettlementUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: SettlementCreateManyTechnicianInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutTechnicianInput | SettlementUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutTechnicianInput | SettlementUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput = {
    create?: XOR<SettlementCreateWithoutLiquidatedByInput, SettlementUncheckedCreateWithoutLiquidatedByInput> | SettlementCreateWithoutLiquidatedByInput[] | SettlementUncheckedCreateWithoutLiquidatedByInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLiquidatedByInput | SettlementCreateOrConnectWithoutLiquidatedByInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutLiquidatedByInput | SettlementUpsertWithWhereUniqueWithoutLiquidatedByInput[]
    createMany?: SettlementCreateManyLiquidatedByInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutLiquidatedByInput | SettlementUpdateWithWhereUniqueWithoutLiquidatedByInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutLiquidatedByInput | SettlementUpdateManyWithWhereWithoutLiquidatedByInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntegrationLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationLogCreateWithoutUserInput, IntegrationLogUncheckedCreateWithoutUserInput> | IntegrationLogCreateWithoutUserInput[] | IntegrationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationLogCreateOrConnectWithoutUserInput | IntegrationLogCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationLogUpsertWithWhereUniqueWithoutUserInput | IntegrationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationLogCreateManyUserInputEnvelope
    set?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    disconnect?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    delete?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    connect?: IntegrationLogWhereUniqueInput | IntegrationLogWhereUniqueInput[]
    update?: IntegrationLogUpdateWithWhereUniqueWithoutUserInput | IntegrationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationLogUpdateManyWithWhereWithoutUserInput | IntegrationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationLogScalarWhereInput | IntegrationLogScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput> | ServiceCreateWithoutClientInput[] | ServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClientInput | ServiceCreateOrConnectWithoutClientInput[]
    createMany?: ServiceCreateManyClientInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type EstimateCreateNestedManyWithoutClientInput = {
    create?: XOR<EstimateCreateWithoutClientInput, EstimateUncheckedCreateWithoutClientInput> | EstimateCreateWithoutClientInput[] | EstimateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutClientInput | EstimateCreateOrConnectWithoutClientInput[]
    createMany?: EstimateCreateManyClientInputEnvelope
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput> | ServiceCreateWithoutClientInput[] | ServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClientInput | ServiceCreateOrConnectWithoutClientInput[]
    createMany?: ServiceCreateManyClientInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type EstimateUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<EstimateCreateWithoutClientInput, EstimateUncheckedCreateWithoutClientInput> | EstimateCreateWithoutClientInput[] | EstimateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutClientInput | EstimateCreateOrConnectWithoutClientInput[]
    createMany?: EstimateCreateManyClientInputEnvelope
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput> | ServiceCreateWithoutClientInput[] | ServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClientInput | ServiceCreateOrConnectWithoutClientInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutClientInput | ServiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServiceCreateManyClientInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutClientInput | ServiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutClientInput | ServiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type EstimateUpdateManyWithoutClientNestedInput = {
    create?: XOR<EstimateCreateWithoutClientInput, EstimateUncheckedCreateWithoutClientInput> | EstimateCreateWithoutClientInput[] | EstimateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutClientInput | EstimateCreateOrConnectWithoutClientInput[]
    upsert?: EstimateUpsertWithWhereUniqueWithoutClientInput | EstimateUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EstimateCreateManyClientInputEnvelope
    set?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    disconnect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    delete?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    update?: EstimateUpdateWithWhereUniqueWithoutClientInput | EstimateUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EstimateUpdateManyWithWhereWithoutClientInput | EstimateUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EstimateScalarWhereInput | EstimateScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput> | ServiceCreateWithoutClientInput[] | ServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClientInput | ServiceCreateOrConnectWithoutClientInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutClientInput | ServiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServiceCreateManyClientInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutClientInput | ServiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutClientInput | ServiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type EstimateUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<EstimateCreateWithoutClientInput, EstimateUncheckedCreateWithoutClientInput> | EstimateCreateWithoutClientInput[] | EstimateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EstimateCreateOrConnectWithoutClientInput | EstimateCreateOrConnectWithoutClientInput[]
    upsert?: EstimateUpsertWithWhereUniqueWithoutClientInput | EstimateUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EstimateCreateManyClientInputEnvelope
    set?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    disconnect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    delete?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    connect?: EstimateWhereUniqueInput | EstimateWhereUniqueInput[]
    update?: EstimateUpdateWithWhereUniqueWithoutClientInput | EstimateUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EstimateUpdateManyWithWhereWithoutClientInput | EstimateUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EstimateScalarWhereInput | EstimateScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesAsTechnicianInput = {
    create?: XOR<UserCreateWithoutServicesAsTechnicianInput, UserUncheckedCreateWithoutServicesAsTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesAsTechnicianInput
    connect?: UserWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutServicesInput = {
    create?: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutServicesInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutServicesCreatedInput = {
    create?: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutServicesClosedInput = {
    create?: XOR<UserCreateWithoutServicesClosedInput, UserUncheckedCreateWithoutServicesClosedInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesClosedInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutServicesInput
    connect?: ServiceCategoryWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutServiceInput = {
    create?: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutServiceInput
    connect?: PaymentWhereUniqueInput
  }

  export type EstimateCreateNestedOneWithoutServiceInput = {
    create?: XOR<EstimateCreateWithoutServiceInput, EstimateUncheckedCreateWithoutServiceInput>
    connectOrCreate?: EstimateCreateOrConnectWithoutServiceInput
    connect?: EstimateWhereUniqueInput
  }

  export type ActivityLogCreateNestedManyWithoutServiceInput = {
    create?: XOR<ActivityLogCreateWithoutServiceInput, ActivityLogUncheckedCreateWithoutServiceInput> | ActivityLogCreateWithoutServiceInput[] | ActivityLogUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutServiceInput | ActivityLogCreateOrConnectWithoutServiceInput[]
    createMany?: ActivityLogCreateManyServiceInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutServiceInput = {
    create?: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutServiceInput
    connect?: PaymentWhereUniqueInput
  }

  export type EstimateUncheckedCreateNestedOneWithoutServiceInput = {
    create?: XOR<EstimateCreateWithoutServiceInput, EstimateUncheckedCreateWithoutServiceInput>
    connectOrCreate?: EstimateCreateOrConnectWithoutServiceInput
    connect?: EstimateWhereUniqueInput
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ActivityLogCreateWithoutServiceInput, ActivityLogUncheckedCreateWithoutServiceInput> | ActivityLogCreateWithoutServiceInput[] | ActivityLogUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutServiceInput | ActivityLogCreateOrConnectWithoutServiceInput[]
    createMany?: ActivityLogCreateManyServiceInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneWithoutServicesAsTechnicianNestedInput = {
    create?: XOR<UserCreateWithoutServicesAsTechnicianInput, UserUncheckedCreateWithoutServicesAsTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesAsTechnicianInput
    upsert?: UserUpsertWithoutServicesAsTechnicianInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesAsTechnicianInput, UserUpdateWithoutServicesAsTechnicianInput>, UserUncheckedUpdateWithoutServicesAsTechnicianInput>
  }

  export type ClientUpdateOneWithoutServicesNestedInput = {
    create?: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutServicesInput
    upsert?: ClientUpsertWithoutServicesInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutServicesInput, ClientUpdateWithoutServicesInput>, ClientUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateOneRequiredWithoutServicesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesCreatedInput
    upsert?: UserUpsertWithoutServicesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesCreatedInput, UserUpdateWithoutServicesCreatedInput>, UserUncheckedUpdateWithoutServicesCreatedInput>
  }

  export type UserUpdateOneWithoutServicesClosedNestedInput = {
    create?: XOR<UserCreateWithoutServicesClosedInput, UserUncheckedCreateWithoutServicesClosedInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesClosedInput
    upsert?: UserUpsertWithoutServicesClosedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesClosedInput, UserUpdateWithoutServicesClosedInput>, UserUncheckedUpdateWithoutServicesClosedInput>
  }

  export type ServiceCategoryUpdateOneWithoutServicesNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutServicesInput
    upsert?: ServiceCategoryUpsertWithoutServicesInput
    disconnect?: ServiceCategoryWhereInput | boolean
    delete?: ServiceCategoryWhereInput | boolean
    connect?: ServiceCategoryWhereUniqueInput
    update?: XOR<XOR<ServiceCategoryUpdateToOneWithWhereWithoutServicesInput, ServiceCategoryUpdateWithoutServicesInput>, ServiceCategoryUncheckedUpdateWithoutServicesInput>
  }

  export type PaymentUpdateOneWithoutServiceNestedInput = {
    create?: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutServiceInput
    upsert?: PaymentUpsertWithoutServiceInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutServiceInput, PaymentUpdateWithoutServiceInput>, PaymentUncheckedUpdateWithoutServiceInput>
  }

  export type EstimateUpdateOneWithoutServiceNestedInput = {
    create?: XOR<EstimateCreateWithoutServiceInput, EstimateUncheckedCreateWithoutServiceInput>
    connectOrCreate?: EstimateCreateOrConnectWithoutServiceInput
    upsert?: EstimateUpsertWithoutServiceInput
    disconnect?: EstimateWhereInput | boolean
    delete?: EstimateWhereInput | boolean
    connect?: EstimateWhereUniqueInput
    update?: XOR<XOR<EstimateUpdateToOneWithWhereWithoutServiceInput, EstimateUpdateWithoutServiceInput>, EstimateUncheckedUpdateWithoutServiceInput>
  }

  export type ActivityLogUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ActivityLogCreateWithoutServiceInput, ActivityLogUncheckedCreateWithoutServiceInput> | ActivityLogCreateWithoutServiceInput[] | ActivityLogUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutServiceInput | ActivityLogCreateOrConnectWithoutServiceInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutServiceInput | ActivityLogUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ActivityLogCreateManyServiceInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutServiceInput | ActivityLogUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutServiceInput | ActivityLogUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutServiceNestedInput = {
    create?: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutServiceInput
    upsert?: PaymentUpsertWithoutServiceInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutServiceInput, PaymentUpdateWithoutServiceInput>, PaymentUncheckedUpdateWithoutServiceInput>
  }

  export type EstimateUncheckedUpdateOneWithoutServiceNestedInput = {
    create?: XOR<EstimateCreateWithoutServiceInput, EstimateUncheckedCreateWithoutServiceInput>
    connectOrCreate?: EstimateCreateOrConnectWithoutServiceInput
    upsert?: EstimateUpsertWithoutServiceInput
    disconnect?: EstimateWhereInput | boolean
    delete?: EstimateWhereInput | boolean
    connect?: EstimateWhereUniqueInput
    update?: XOR<XOR<EstimateUpdateToOneWithWhereWithoutServiceInput, EstimateUpdateWithoutServiceInput>, EstimateUncheckedUpdateWithoutServiceInput>
  }

  export type ActivityLogUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ActivityLogCreateWithoutServiceInput, ActivityLogUncheckedCreateWithoutServiceInput> | ActivityLogCreateWithoutServiceInput[] | ActivityLogUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutServiceInput | ActivityLogCreateOrConnectWithoutServiceInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutServiceInput | ActivityLogUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ActivityLogCreateManyServiceInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutServiceInput | ActivityLogUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutServiceInput | ActivityLogUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutPaymentInput = {
    create?: XOR<ServiceCreateWithoutPaymentInput, ServiceUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPaymentInput
    connect?: ServiceWhereUniqueInput
  }

  export type SettlementCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SettlementCreateWithoutPaymentsInput, SettlementUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SettlementCreateOrConnectWithoutPaymentsInput
    connect?: SettlementWhereUniqueInput
  }

  export type PaymentPartCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentPartCreateWithoutPaymentInput, PaymentPartUncheckedCreateWithoutPaymentInput> | PaymentPartCreateWithoutPaymentInput[] | PaymentPartUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutPaymentInput | PaymentPartCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentPartCreateManyPaymentInputEnvelope
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
  }

  export type PaymentPartUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentPartCreateWithoutPaymentInput, PaymentPartUncheckedCreateWithoutPaymentInput> | PaymentPartCreateWithoutPaymentInput[] | PaymentPartUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutPaymentInput | PaymentPartCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentPartCreateManyPaymentInputEnvelope
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type ServiceUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<ServiceCreateWithoutPaymentInput, ServiceUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPaymentInput
    upsert?: ServiceUpsertWithoutPaymentInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPaymentInput, ServiceUpdateWithoutPaymentInput>, ServiceUncheckedUpdateWithoutPaymentInput>
  }

  export type SettlementUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<SettlementCreateWithoutPaymentsInput, SettlementUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SettlementCreateOrConnectWithoutPaymentsInput
    upsert?: SettlementUpsertWithoutPaymentsInput
    disconnect?: SettlementWhereInput | boolean
    delete?: SettlementWhereInput | boolean
    connect?: SettlementWhereUniqueInput
    update?: XOR<XOR<SettlementUpdateToOneWithWhereWithoutPaymentsInput, SettlementUpdateWithoutPaymentsInput>, SettlementUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentPartUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentPartCreateWithoutPaymentInput, PaymentPartUncheckedCreateWithoutPaymentInput> | PaymentPartCreateWithoutPaymentInput[] | PaymentPartUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutPaymentInput | PaymentPartCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentPartUpsertWithWhereUniqueWithoutPaymentInput | PaymentPartUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentPartCreateManyPaymentInputEnvelope
    set?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    disconnect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    delete?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    update?: PaymentPartUpdateWithWhereUniqueWithoutPaymentInput | PaymentPartUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentPartUpdateManyWithWhereWithoutPaymentInput | PaymentPartUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentPartScalarWhereInput | PaymentPartScalarWhereInput[]
  }

  export type PaymentPartUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentPartCreateWithoutPaymentInput, PaymentPartUncheckedCreateWithoutPaymentInput> | PaymentPartCreateWithoutPaymentInput[] | PaymentPartUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutPaymentInput | PaymentPartCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentPartUpsertWithWhereUniqueWithoutPaymentInput | PaymentPartUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentPartCreateManyPaymentInputEnvelope
    set?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    disconnect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    delete?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    update?: PaymentPartUpdateWithWhereUniqueWithoutPaymentInput | PaymentPartUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentPartUpdateManyWithWhereWithoutPaymentInput | PaymentPartUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentPartScalarWhereInput | PaymentPartScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutPartsInput = {
    create?: XOR<PaymentCreateWithoutPartsInput, PaymentUncheckedCreateWithoutPartsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPartsInput
    connect?: PaymentWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutPaymentPartsInput = {
    create?: XOR<SupplierCreateWithoutPaymentPartsInput, SupplierUncheckedCreateWithoutPaymentPartsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPaymentPartsInput
    connect?: SupplierWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaymentUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<PaymentCreateWithoutPartsInput, PaymentUncheckedCreateWithoutPartsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPartsInput
    upsert?: PaymentUpsertWithoutPartsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPartsInput, PaymentUpdateWithoutPartsInput>, PaymentUncheckedUpdateWithoutPartsInput>
  }

  export type SupplierUpdateOneRequiredWithoutPaymentPartsNestedInput = {
    create?: XOR<SupplierCreateWithoutPaymentPartsInput, SupplierUncheckedCreateWithoutPaymentPartsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPaymentPartsInput
    upsert?: SupplierUpsertWithoutPaymentPartsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPaymentPartsInput, SupplierUpdateWithoutPaymentPartsInput>, SupplierUncheckedUpdateWithoutPaymentPartsInput>
  }

  export type PaymentPartCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PaymentPartCreateWithoutSupplierInput, PaymentPartUncheckedCreateWithoutSupplierInput> | PaymentPartCreateWithoutSupplierInput[] | PaymentPartUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutSupplierInput | PaymentPartCreateOrConnectWithoutSupplierInput[]
    createMany?: PaymentPartCreateManySupplierInputEnvelope
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
  }

  export type PaymentPartUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PaymentPartCreateWithoutSupplierInput, PaymentPartUncheckedCreateWithoutSupplierInput> | PaymentPartCreateWithoutSupplierInput[] | PaymentPartUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutSupplierInput | PaymentPartCreateOrConnectWithoutSupplierInput[]
    createMany?: PaymentPartCreateManySupplierInputEnvelope
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
  }

  export type PaymentPartUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PaymentPartCreateWithoutSupplierInput, PaymentPartUncheckedCreateWithoutSupplierInput> | PaymentPartCreateWithoutSupplierInput[] | PaymentPartUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutSupplierInput | PaymentPartCreateOrConnectWithoutSupplierInput[]
    upsert?: PaymentPartUpsertWithWhereUniqueWithoutSupplierInput | PaymentPartUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PaymentPartCreateManySupplierInputEnvelope
    set?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    disconnect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    delete?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    update?: PaymentPartUpdateWithWhereUniqueWithoutSupplierInput | PaymentPartUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PaymentPartUpdateManyWithWhereWithoutSupplierInput | PaymentPartUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PaymentPartScalarWhereInput | PaymentPartScalarWhereInput[]
  }

  export type PaymentPartUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PaymentPartCreateWithoutSupplierInput, PaymentPartUncheckedCreateWithoutSupplierInput> | PaymentPartCreateWithoutSupplierInput[] | PaymentPartUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PaymentPartCreateOrConnectWithoutSupplierInput | PaymentPartCreateOrConnectWithoutSupplierInput[]
    upsert?: PaymentPartUpsertWithWhereUniqueWithoutSupplierInput | PaymentPartUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PaymentPartCreateManySupplierInputEnvelope
    set?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    disconnect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    delete?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    connect?: PaymentPartWhereUniqueInput | PaymentPartWhereUniqueInput[]
    update?: PaymentPartUpdateWithWhereUniqueWithoutSupplierInput | PaymentPartUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PaymentPartUpdateManyWithWhereWithoutSupplierInput | PaymentPartUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PaymentPartScalarWhereInput | PaymentPartScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutEstimateInput = {
    create?: XOR<ServiceCreateWithoutEstimateInput, ServiceUncheckedCreateWithoutEstimateInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutEstimateInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEstimatesInput = {
    create?: XOR<UserCreateWithoutEstimatesInput, UserUncheckedCreateWithoutEstimatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEstimatesInput
    connect?: UserWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutEstimatesInput = {
    create?: XOR<ClientCreateWithoutEstimatesInput, ClientUncheckedCreateWithoutEstimatesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEstimatesInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumEstimateStatusFieldUpdateOperationsInput = {
    set?: $Enums.EstimateStatus
  }

  export type ServiceUpdateOneRequiredWithoutEstimateNestedInput = {
    create?: XOR<ServiceCreateWithoutEstimateInput, ServiceUncheckedCreateWithoutEstimateInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutEstimateInput
    upsert?: ServiceUpsertWithoutEstimateInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutEstimateInput, ServiceUpdateWithoutEstimateInput>, ServiceUncheckedUpdateWithoutEstimateInput>
  }

  export type UserUpdateOneRequiredWithoutEstimatesNestedInput = {
    create?: XOR<UserCreateWithoutEstimatesInput, UserUncheckedCreateWithoutEstimatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEstimatesInput
    upsert?: UserUpsertWithoutEstimatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEstimatesInput, UserUpdateWithoutEstimatesInput>, UserUncheckedUpdateWithoutEstimatesInput>
  }

  export type ClientUpdateOneRequiredWithoutEstimatesNestedInput = {
    create?: XOR<ClientCreateWithoutEstimatesInput, ClientUncheckedCreateWithoutEstimatesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEstimatesInput
    upsert?: ClientUpsertWithoutEstimatesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutEstimatesInput, ClientUpdateWithoutEstimatesInput>, ClientUncheckedUpdateWithoutEstimatesInput>
  }

  export type UserCreateNestedOneWithoutSettlementsAsTechnicianInput = {
    create?: XOR<UserCreateWithoutSettlementsAsTechnicianInput, UserUncheckedCreateWithoutSettlementsAsTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsAsTechnicianInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSettlementsLiquidatedInput = {
    create?: XOR<UserCreateWithoutSettlementsLiquidatedInput, UserUncheckedCreateWithoutSettlementsLiquidatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsLiquidatedInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSettlementInput = {
    create?: XOR<PaymentCreateWithoutSettlementInput, PaymentUncheckedCreateWithoutSettlementInput> | PaymentCreateWithoutSettlementInput[] | PaymentUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSettlementInput | PaymentCreateOrConnectWithoutSettlementInput[]
    createMany?: PaymentCreateManySettlementInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSettlementInput = {
    create?: XOR<PaymentCreateWithoutSettlementInput, PaymentUncheckedCreateWithoutSettlementInput> | PaymentCreateWithoutSettlementInput[] | PaymentUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSettlementInput | PaymentCreateOrConnectWithoutSettlementInput[]
    createMany?: PaymentCreateManySettlementInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSettlementStatusFieldUpdateOperationsInput = {
    set?: $Enums.SettlementStatus
  }

  export type UserUpdateOneRequiredWithoutSettlementsAsTechnicianNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsAsTechnicianInput, UserUncheckedCreateWithoutSettlementsAsTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsAsTechnicianInput
    upsert?: UserUpsertWithoutSettlementsAsTechnicianInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsAsTechnicianInput, UserUpdateWithoutSettlementsAsTechnicianInput>, UserUncheckedUpdateWithoutSettlementsAsTechnicianInput>
  }

  export type UserUpdateOneWithoutSettlementsLiquidatedNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsLiquidatedInput, UserUncheckedCreateWithoutSettlementsLiquidatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsLiquidatedInput
    upsert?: UserUpsertWithoutSettlementsLiquidatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsLiquidatedInput, UserUpdateWithoutSettlementsLiquidatedInput>, UserUncheckedUpdateWithoutSettlementsLiquidatedInput>
  }

  export type PaymentUpdateManyWithoutSettlementNestedInput = {
    create?: XOR<PaymentCreateWithoutSettlementInput, PaymentUncheckedCreateWithoutSettlementInput> | PaymentCreateWithoutSettlementInput[] | PaymentUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSettlementInput | PaymentCreateOrConnectWithoutSettlementInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSettlementInput | PaymentUpsertWithWhereUniqueWithoutSettlementInput[]
    createMany?: PaymentCreateManySettlementInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSettlementInput | PaymentUpdateWithWhereUniqueWithoutSettlementInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSettlementInput | PaymentUpdateManyWithWhereWithoutSettlementInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSettlementNestedInput = {
    create?: XOR<PaymentCreateWithoutSettlementInput, PaymentUncheckedCreateWithoutSettlementInput> | PaymentCreateWithoutSettlementInput[] | PaymentUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSettlementInput | PaymentCreateOrConnectWithoutSettlementInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSettlementInput | PaymentUpsertWithWhereUniqueWithoutSettlementInput[]
    createMany?: PaymentCreateManySettlementInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSettlementInput | PaymentUpdateWithWhereUniqueWithoutSettlementInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSettlementInput | PaymentUpdateManyWithWhereWithoutSettlementInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<ServiceCreateWithoutActivityLogsInput, ServiceUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutActivityLogsInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<ServiceCreateWithoutActivityLogsInput, ServiceUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutActivityLogsInput
    upsert?: ServiceUpsertWithoutActivityLogsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutActivityLogsInput, ServiceUpdateWithoutActivityLogsInput>, ServiceUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserCreateNestedOneWithoutIntegrationLogsInput = {
    create?: XOR<UserCreateWithoutIntegrationLogsInput, UserUncheckedCreateWithoutIntegrationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutIntegrationLogsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationLogsInput, UserUncheckedCreateWithoutIntegrationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationLogsInput
    upsert?: UserUpsertWithoutIntegrationLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationLogsInput, UserUpdateWithoutIntegrationLogsInput>, UserUncheckedUpdateWithoutIntegrationLogsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumEstimateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EstimateStatus | EnumEstimateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstimateStatusFilter<$PrismaModel> | $Enums.EstimateStatus
  }

  export type NestedEnumEstimateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstimateStatus | EnumEstimateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstimateStatus[] | ListEnumEstimateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstimateStatusWithAggregatesFilter<$PrismaModel> | $Enums.EstimateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstimateStatusFilter<$PrismaModel>
    _max?: NestedEnumEstimateStatusFilter<$PrismaModel>
  }

  export type NestedEnumSettlementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusFilter<$PrismaModel> | $Enums.SettlementStatus
  }

  export type NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel> | $Enums.SettlementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementStatusFilter<$PrismaModel>
    _max?: NestedEnumSettlementStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ServiceCreateWithoutTechnicianInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutTechnicianInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutTechnicianInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutTechnicianInput, ServiceUncheckedCreateWithoutTechnicianInput>
  }

  export type ServiceCreateManyTechnicianInputEnvelope = {
    data: ServiceCreateManyTechnicianInput | ServiceCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCreatedByInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput>
  }

  export type ServiceCreateManyCreatedByInputEnvelope = {
    data: ServiceCreateManyCreatedByInput | ServiceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutClosedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutClosedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutClosedByInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutClosedByInput, ServiceUncheckedCreateWithoutClosedByInput>
  }

  export type ServiceCreateManyClosedByInputEnvelope = {
    data: ServiceCreateManyClosedByInput | ServiceCreateManyClosedByInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTechnicianInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutPaymentInput
    settlement?: SettlementCreateNestedOneWithoutPaymentsInput
    parts?: PaymentPartCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutTechnicianInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    serviceId: string
    settlementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parts?: PaymentPartUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutTechnicianInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput>
  }

  export type PaymentCreateManyTechnicianInputEnvelope = {
    data: PaymentCreateManyTechnicianInput | PaymentCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type EstimateCreateWithoutTechnicianInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutEstimateInput
    client: ClientCreateNestedOneWithoutEstimatesInput
  }

  export type EstimateUncheckedCreateWithoutTechnicianInput = {
    id?: string
    serviceId: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateCreateOrConnectWithoutTechnicianInput = {
    where: EstimateWhereUniqueInput
    create: XOR<EstimateCreateWithoutTechnicianInput, EstimateUncheckedCreateWithoutTechnicianInput>
  }

  export type EstimateCreateManyTechnicianInputEnvelope = {
    data: EstimateCreateManyTechnicianInput | EstimateCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutTechnicianInput = {
    id?: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liquidatedBy?: UserCreateNestedOneWithoutSettlementsLiquidatedInput
    payments?: PaymentCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUncheckedCreateWithoutTechnicianInput = {
    id?: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    liquidatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSettlementInput
  }

  export type SettlementCreateOrConnectWithoutTechnicianInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutTechnicianInput, SettlementUncheckedCreateWithoutTechnicianInput>
  }

  export type SettlementCreateManyTechnicianInputEnvelope = {
    data: SettlementCreateManyTechnicianInput | SettlementCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutLiquidatedByInput = {
    id?: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutSettlementsAsTechnicianInput
    payments?: PaymentCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUncheckedCreateWithoutLiquidatedByInput = {
    id?: string
    technicianId: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSettlementInput
  }

  export type SettlementCreateOrConnectWithoutLiquidatedByInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutLiquidatedByInput, SettlementUncheckedCreateWithoutLiquidatedByInput>
  }

  export type SettlementCreateManyLiquidatedByInputEnvelope = {
    data: SettlementCreateManyLiquidatedByInput | SettlementCreateManyLiquidatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    serviceId: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationLogCreateWithoutUserInput = {
    id?: string
    type: string
    entity: string
    entityId: string
    result: string
    message?: string | null
    createdAt?: Date | string
  }

  export type IntegrationLogUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    entity: string
    entityId: string
    result: string
    message?: string | null
    createdAt?: Date | string
  }

  export type IntegrationLogCreateOrConnectWithoutUserInput = {
    where: IntegrationLogWhereUniqueInput
    create: XOR<IntegrationLogCreateWithoutUserInput, IntegrationLogUncheckedCreateWithoutUserInput>
  }

  export type IntegrationLogCreateManyUserInputEnvelope = {
    data: IntegrationLogCreateManyUserInput | IntegrationLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutTechnicianInput, ServiceUncheckedUpdateWithoutTechnicianInput>
    create: XOR<ServiceCreateWithoutTechnicianInput, ServiceUncheckedCreateWithoutTechnicianInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutTechnicianInput, ServiceUncheckedUpdateWithoutTechnicianInput>
  }

  export type ServiceUpdateManyWithWhereWithoutTechnicianInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    scheduledDate?: DateTimeFilter<"Service"> | Date | string
    scheduledTime?: StringFilter<"Service"> | string
    address?: StringNullableFilter<"Service"> | string | null
    completedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    notes?: StringNullableFilter<"Service"> | string | null
    expectedAmount?: DecimalNullableFilter<"Service"> | Decimal | DecimalJsLike | number | string | null
    closedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    isLocked?: BoolFilter<"Service"> | boolean
    technicianId?: StringNullableFilter<"Service"> | string | null
    clientId?: StringNullableFilter<"Service"> | string | null
    createdById?: StringFilter<"Service"> | string
    closedById?: StringNullableFilter<"Service"> | string | null
    categoryId?: StringNullableFilter<"Service"> | string | null
    completedPhotoUrl?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCreatedByInput, ServiceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ServiceCreateWithoutCreatedByInput, ServiceUncheckedCreateWithoutCreatedByInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCreatedByInput, ServiceUncheckedUpdateWithoutCreatedByInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCreatedByInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ServiceUpsertWithWhereUniqueWithoutClosedByInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutClosedByInput, ServiceUncheckedUpdateWithoutClosedByInput>
    create: XOR<ServiceCreateWithoutClosedByInput, ServiceUncheckedCreateWithoutClosedByInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutClosedByInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutClosedByInput, ServiceUncheckedUpdateWithoutClosedByInput>
  }

  export type ServiceUpdateManyWithWhereWithoutClosedByInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutClosedByInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTechnicianInput, PaymentUncheckedUpdateWithoutTechnicianInput>
    create: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTechnicianInput, PaymentUncheckedUpdateWithoutTechnicianInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTechnicianInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amountPaid?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFilter<"Payment"> | boolean
    receiptPhotoUrl?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    technicianId?: StringFilter<"Payment"> | string
    serviceId?: StringFilter<"Payment"> | string
    settlementId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type EstimateUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: EstimateWhereUniqueInput
    update: XOR<EstimateUpdateWithoutTechnicianInput, EstimateUncheckedUpdateWithoutTechnicianInput>
    create: XOR<EstimateCreateWithoutTechnicianInput, EstimateUncheckedCreateWithoutTechnicianInput>
  }

  export type EstimateUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: EstimateWhereUniqueInput
    data: XOR<EstimateUpdateWithoutTechnicianInput, EstimateUncheckedUpdateWithoutTechnicianInput>
  }

  export type EstimateUpdateManyWithWhereWithoutTechnicianInput = {
    where: EstimateScalarWhereInput
    data: XOR<EstimateUpdateManyMutationInput, EstimateUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type EstimateScalarWhereInput = {
    AND?: EstimateScalarWhereInput | EstimateScalarWhereInput[]
    OR?: EstimateScalarWhereInput[]
    NOT?: EstimateScalarWhereInput | EstimateScalarWhereInput[]
    id?: StringFilter<"Estimate"> | string
    serviceId?: StringFilter<"Estimate"> | string
    technicianId?: StringFilter<"Estimate"> | string
    clientId?: StringFilter<"Estimate"> | string
    amount?: DecimalFilter<"Estimate"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Estimate"> | string | null
    notes?: StringNullableFilter<"Estimate"> | string | null
    status?: EnumEstimateStatusFilter<"Estimate"> | $Enums.EstimateStatus
    completedAt?: DateTimeNullableFilter<"Estimate"> | Date | string | null
    createdAt?: DateTimeFilter<"Estimate"> | Date | string
    updatedAt?: DateTimeFilter<"Estimate"> | Date | string
  }

  export type SettlementUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutTechnicianInput, SettlementUncheckedUpdateWithoutTechnicianInput>
    create: XOR<SettlementCreateWithoutTechnicianInput, SettlementUncheckedCreateWithoutTechnicianInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutTechnicianInput, SettlementUncheckedUpdateWithoutTechnicianInput>
  }

  export type SettlementUpdateManyWithWhereWithoutTechnicianInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type SettlementScalarWhereInput = {
    AND?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    OR?: SettlementScalarWhereInput[]
    NOT?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    id?: StringFilter<"Settlement"> | string
    technicianId?: StringFilter<"Settlement"> | string
    weekNumber?: IntFilter<"Settlement"> | number
    year?: IntFilter<"Settlement"> | number
    startDate?: DateTimeFilter<"Settlement"> | Date | string
    endDate?: DateTimeFilter<"Settlement"> | Date | string
    ordersCount?: IntFilter<"Settlement"> | number
    paymentsCount?: IntFilter<"Settlement"> | number
    totalCollected?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFilter<"Settlement"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFilter<"Settlement"> | $Enums.SettlementStatus
    notes?: StringNullableFilter<"Settlement"> | string | null
    liquidatedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    liquidatedById?: StringNullableFilter<"Settlement"> | string | null
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    updatedAt?: DateTimeFilter<"Settlement"> | Date | string
  }

  export type SettlementUpsertWithWhereUniqueWithoutLiquidatedByInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutLiquidatedByInput, SettlementUncheckedUpdateWithoutLiquidatedByInput>
    create: XOR<SettlementCreateWithoutLiquidatedByInput, SettlementUncheckedCreateWithoutLiquidatedByInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutLiquidatedByInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutLiquidatedByInput, SettlementUncheckedUpdateWithoutLiquidatedByInput>
  }

  export type SettlementUpdateManyWithWhereWithoutLiquidatedByInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutLiquidatedByInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    serviceId?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type IntegrationLogUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationLogWhereUniqueInput
    update: XOR<IntegrationLogUpdateWithoutUserInput, IntegrationLogUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationLogCreateWithoutUserInput, IntegrationLogUncheckedCreateWithoutUserInput>
  }

  export type IntegrationLogUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationLogWhereUniqueInput
    data: XOR<IntegrationLogUpdateWithoutUserInput, IntegrationLogUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationLogUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationLogScalarWhereInput
    data: XOR<IntegrationLogUpdateManyMutationInput, IntegrationLogUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationLogScalarWhereInput = {
    AND?: IntegrationLogScalarWhereInput | IntegrationLogScalarWhereInput[]
    OR?: IntegrationLogScalarWhereInput[]
    NOT?: IntegrationLogScalarWhereInput | IntegrationLogScalarWhereInput[]
    id?: StringFilter<"IntegrationLog"> | string
    type?: StringFilter<"IntegrationLog"> | string
    entity?: StringFilter<"IntegrationLog"> | string
    entityId?: StringFilter<"IntegrationLog"> | string
    result?: StringFilter<"IntegrationLog"> | string
    message?: StringNullableFilter<"IntegrationLog"> | string | null
    userId?: StringNullableFilter<"IntegrationLog"> | string | null
    createdAt?: DateTimeFilter<"IntegrationLog"> | Date | string
  }

  export type ServiceCreateWithoutClientInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutClientInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput>
  }

  export type ServiceCreateManyClientInputEnvelope = {
    data: ServiceCreateManyClientInput | ServiceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type EstimateCreateWithoutClientInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutEstimateInput
    technician: UserCreateNestedOneWithoutEstimatesInput
  }

  export type EstimateUncheckedCreateWithoutClientInput = {
    id?: string
    serviceId: string
    technicianId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateCreateOrConnectWithoutClientInput = {
    where: EstimateWhereUniqueInput
    create: XOR<EstimateCreateWithoutClientInput, EstimateUncheckedCreateWithoutClientInput>
  }

  export type EstimateCreateManyClientInputEnvelope = {
    data: EstimateCreateManyClientInput | EstimateCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutClientInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutClientInput, ServiceUncheckedUpdateWithoutClientInput>
    create: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutClientInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutClientInput, ServiceUncheckedUpdateWithoutClientInput>
  }

  export type ServiceUpdateManyWithWhereWithoutClientInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutClientInput>
  }

  export type EstimateUpsertWithWhereUniqueWithoutClientInput = {
    where: EstimateWhereUniqueInput
    update: XOR<EstimateUpdateWithoutClientInput, EstimateUncheckedUpdateWithoutClientInput>
    create: XOR<EstimateCreateWithoutClientInput, EstimateUncheckedCreateWithoutClientInput>
  }

  export type EstimateUpdateWithWhereUniqueWithoutClientInput = {
    where: EstimateWhereUniqueInput
    data: XOR<EstimateUpdateWithoutClientInput, EstimateUncheckedUpdateWithoutClientInput>
  }

  export type EstimateUpdateManyWithWhereWithoutClientInput = {
    where: EstimateScalarWhereInput
    data: XOR<EstimateUpdateManyMutationInput, EstimateUncheckedUpdateManyWithoutClientInput>
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutServicesAsTechnicianInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesAsTechnicianInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesAsTechnicianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesAsTechnicianInput, UserUncheckedCreateWithoutServicesAsTechnicianInput>
  }

  export type ClientCreateWithoutServicesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estimates?: EstimateCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estimates?: EstimateUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutServicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
  }

  export type UserCreateWithoutServicesCreatedInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesCreatedInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
  }

  export type UserCreateWithoutServicesClosedInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesClosedInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesClosedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesClosedInput, UserUncheckedCreateWithoutServicesClosedInput>
  }

  export type ServiceCategoryCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    icon?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryCreateOrConnectWithoutServicesInput = {
    where: ServiceCategoryWhereUniqueInput
    create: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
  }

  export type PaymentCreateWithoutServiceInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutPaymentsInput
    settlement?: SettlementCreateNestedOneWithoutPaymentsInput
    parts?: PaymentPartCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutServiceInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    technicianId: string
    settlementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parts?: PaymentPartUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutServiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
  }

  export type EstimateCreateWithoutServiceInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutEstimatesInput
    client: ClientCreateNestedOneWithoutEstimatesInput
  }

  export type EstimateUncheckedCreateWithoutServiceInput = {
    id?: string
    technicianId: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateCreateOrConnectWithoutServiceInput = {
    where: EstimateWhereUniqueInput
    create: XOR<EstimateCreateWithoutServiceInput, EstimateUncheckedCreateWithoutServiceInput>
  }

  export type ActivityLogCreateWithoutServiceInput = {
    id?: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutServiceInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutServiceInput, ActivityLogUncheckedCreateWithoutServiceInput>
  }

  export type ActivityLogCreateManyServiceInputEnvelope = {
    data: ActivityLogCreateManyServiceInput | ActivityLogCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServicesAsTechnicianInput = {
    update: XOR<UserUpdateWithoutServicesAsTechnicianInput, UserUncheckedUpdateWithoutServicesAsTechnicianInput>
    create: XOR<UserCreateWithoutServicesAsTechnicianInput, UserUncheckedCreateWithoutServicesAsTechnicianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesAsTechnicianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesAsTechnicianInput, UserUncheckedUpdateWithoutServicesAsTechnicianInput>
  }

  export type UserUpdateWithoutServicesAsTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesAsTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientUpsertWithoutServicesInput = {
    update: XOR<ClientUpdateWithoutServicesInput, ClientUncheckedUpdateWithoutServicesInput>
    create: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutServicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutServicesInput, ClientUncheckedUpdateWithoutServicesInput>
  }

  export type ClientUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimates?: EstimateUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimates?: EstimateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutServicesCreatedInput = {
    update: XOR<UserUpdateWithoutServicesCreatedInput, UserUncheckedUpdateWithoutServicesCreatedInput>
    create: XOR<UserCreateWithoutServicesCreatedInput, UserUncheckedCreateWithoutServicesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesCreatedInput, UserUncheckedUpdateWithoutServicesCreatedInput>
  }

  export type UserUpdateWithoutServicesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutServicesClosedInput = {
    update: XOR<UserUpdateWithoutServicesClosedInput, UserUncheckedUpdateWithoutServicesClosedInput>
    create: XOR<UserCreateWithoutServicesClosedInput, UserUncheckedCreateWithoutServicesClosedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesClosedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesClosedInput, UserUncheckedUpdateWithoutServicesClosedInput>
  }

  export type UserUpdateWithoutServicesClosedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesClosedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceCategoryUpsertWithoutServicesInput = {
    update: XOR<ServiceCategoryUpdateWithoutServicesInput, ServiceCategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
    where?: ServiceCategoryWhereInput
  }

  export type ServiceCategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceCategoryWhereInput
    data: XOR<ServiceCategoryUpdateWithoutServicesInput, ServiceCategoryUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceCategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutServiceInput = {
    update: XOR<PaymentUpdateWithoutServiceInput, PaymentUncheckedUpdateWithoutServiceInput>
    create: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutServiceInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutServiceInput, PaymentUncheckedUpdateWithoutServiceInput>
  }

  export type PaymentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    settlement?: SettlementUpdateOneWithoutPaymentsNestedInput
    parts?: PaymentPartUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parts?: PaymentPartUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type EstimateUpsertWithoutServiceInput = {
    update: XOR<EstimateUpdateWithoutServiceInput, EstimateUncheckedUpdateWithoutServiceInput>
    create: XOR<EstimateCreateWithoutServiceInput, EstimateUncheckedCreateWithoutServiceInput>
    where?: EstimateWhereInput
  }

  export type EstimateUpdateToOneWithWhereWithoutServiceInput = {
    where?: EstimateWhereInput
    data: XOR<EstimateUpdateWithoutServiceInput, EstimateUncheckedUpdateWithoutServiceInput>
  }

  export type EstimateUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutEstimatesNestedInput
    client?: ClientUpdateOneRequiredWithoutEstimatesNestedInput
  }

  export type EstimateUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutServiceInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutServiceInput, ActivityLogUncheckedUpdateWithoutServiceInput>
    create: XOR<ActivityLogCreateWithoutServiceInput, ActivityLogUncheckedCreateWithoutServiceInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutServiceInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutServiceInput, ActivityLogUncheckedUpdateWithoutServiceInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutServiceInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type ServiceCreateWithoutPaymentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutPaymentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPaymentInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPaymentInput, ServiceUncheckedCreateWithoutPaymentInput>
  }

  export type SettlementCreateWithoutPaymentsInput = {
    id?: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutSettlementsAsTechnicianInput
    liquidatedBy?: UserCreateNestedOneWithoutSettlementsLiquidatedInput
  }

  export type SettlementUncheckedCreateWithoutPaymentsInput = {
    id?: string
    technicianId: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    liquidatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutPaymentsInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutPaymentsInput, SettlementUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentPartCreateWithoutPaymentInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPaymentPartsInput
  }

  export type PaymentPartUncheckedCreateWithoutPaymentInput = {
    id?: string
    supplierId: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPartCreateOrConnectWithoutPaymentInput = {
    where: PaymentPartWhereUniqueInput
    create: XOR<PaymentPartCreateWithoutPaymentInput, PaymentPartUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentPartCreateManyPaymentInputEnvelope = {
    data: PaymentPartCreateManyPaymentInput | PaymentPartCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceUpsertWithoutPaymentInput = {
    update: XOR<ServiceUpdateWithoutPaymentInput, ServiceUncheckedUpdateWithoutPaymentInput>
    create: XOR<ServiceCreateWithoutPaymentInput, ServiceUncheckedCreateWithoutPaymentInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPaymentInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPaymentInput, ServiceUncheckedUpdateWithoutPaymentInput>
  }

  export type ServiceUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type SettlementUpsertWithoutPaymentsInput = {
    update: XOR<SettlementUpdateWithoutPaymentsInput, SettlementUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SettlementCreateWithoutPaymentsInput, SettlementUncheckedCreateWithoutPaymentsInput>
    where?: SettlementWhereInput
  }

  export type SettlementUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SettlementWhereInput
    data: XOR<SettlementUpdateWithoutPaymentsInput, SettlementUncheckedUpdateWithoutPaymentsInput>
  }

  export type SettlementUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutSettlementsAsTechnicianNestedInput
    liquidatedBy?: UserUpdateOneWithoutSettlementsLiquidatedNestedInput
  }

  export type SettlementUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liquidatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentPartWhereUniqueInput
    update: XOR<PaymentPartUpdateWithoutPaymentInput, PaymentPartUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentPartCreateWithoutPaymentInput, PaymentPartUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentPartUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentPartWhereUniqueInput
    data: XOR<PaymentPartUpdateWithoutPaymentInput, PaymentPartUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentPartUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentPartScalarWhereInput
    data: XOR<PaymentPartUpdateManyMutationInput, PaymentPartUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentPartScalarWhereInput = {
    AND?: PaymentPartScalarWhereInput | PaymentPartScalarWhereInput[]
    OR?: PaymentPartScalarWhereInput[]
    NOT?: PaymentPartScalarWhereInput | PaymentPartScalarWhereInput[]
    id?: StringFilter<"PaymentPart"> | string
    paymentId?: StringFilter<"PaymentPart"> | string
    supplierId?: StringFilter<"PaymentPart"> | string
    description?: StringFilter<"PaymentPart"> | string
    quantity?: IntFilter<"PaymentPart"> | number
    unitPrice?: DecimalFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"PaymentPart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PaymentPart"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPart"> | Date | string
  }

  export type PaymentCreateWithoutPartsInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutPaymentsInput
    service: ServiceCreateNestedOneWithoutPaymentInput
    settlement?: SettlementCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPartsInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    technicianId: string
    serviceId: string
    settlementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPartsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPartsInput, PaymentUncheckedCreateWithoutPartsInput>
  }

  export type SupplierCreateWithoutPaymentPartsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutPaymentPartsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutPaymentPartsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPaymentPartsInput, SupplierUncheckedCreateWithoutPaymentPartsInput>
  }

  export type PaymentUpsertWithoutPartsInput = {
    update: XOR<PaymentUpdateWithoutPartsInput, PaymentUncheckedUpdateWithoutPartsInput>
    create: XOR<PaymentCreateWithoutPartsInput, PaymentUncheckedCreateWithoutPartsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutPartsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutPartsInput, PaymentUncheckedUpdateWithoutPartsInput>
  }

  export type PaymentUpdateWithoutPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutPaymentNestedInput
    settlement?: SettlementUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpsertWithoutPaymentPartsInput = {
    update: XOR<SupplierUpdateWithoutPaymentPartsInput, SupplierUncheckedUpdateWithoutPaymentPartsInput>
    create: XOR<SupplierCreateWithoutPaymentPartsInput, SupplierUncheckedCreateWithoutPaymentPartsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPaymentPartsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPaymentPartsInput, SupplierUncheckedUpdateWithoutPaymentPartsInput>
  }

  export type SupplierUpdateWithoutPaymentPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutPaymentPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartCreateWithoutSupplierInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutPartsInput
  }

  export type PaymentPartUncheckedCreateWithoutSupplierInput = {
    id?: string
    paymentId: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPartCreateOrConnectWithoutSupplierInput = {
    where: PaymentPartWhereUniqueInput
    create: XOR<PaymentPartCreateWithoutSupplierInput, PaymentPartUncheckedCreateWithoutSupplierInput>
  }

  export type PaymentPartCreateManySupplierInputEnvelope = {
    data: PaymentPartCreateManySupplierInput | PaymentPartCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPartUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PaymentPartWhereUniqueInput
    update: XOR<PaymentPartUpdateWithoutSupplierInput, PaymentPartUncheckedUpdateWithoutSupplierInput>
    create: XOR<PaymentPartCreateWithoutSupplierInput, PaymentPartUncheckedCreateWithoutSupplierInput>
  }

  export type PaymentPartUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PaymentPartWhereUniqueInput
    data: XOR<PaymentPartUpdateWithoutSupplierInput, PaymentPartUncheckedUpdateWithoutSupplierInput>
  }

  export type PaymentPartUpdateManyWithWhereWithoutSupplierInput = {
    where: PaymentPartScalarWhereInput
    data: XOR<PaymentPartUpdateManyMutationInput, PaymentPartUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ServiceCreateWithoutEstimateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutEstimateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutEstimateInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutEstimateInput, ServiceUncheckedCreateWithoutEstimateInput>
  }

  export type UserCreateWithoutEstimatesInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEstimatesInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEstimatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEstimatesInput, UserUncheckedCreateWithoutEstimatesInput>
  }

  export type ClientCreateWithoutEstimatesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEstimatesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    address?: string | null
    city?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEstimatesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEstimatesInput, ClientUncheckedCreateWithoutEstimatesInput>
  }

  export type ServiceUpsertWithoutEstimateInput = {
    update: XOR<ServiceUpdateWithoutEstimateInput, ServiceUncheckedUpdateWithoutEstimateInput>
    create: XOR<ServiceCreateWithoutEstimateInput, ServiceUncheckedCreateWithoutEstimateInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutEstimateInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutEstimateInput, ServiceUncheckedUpdateWithoutEstimateInput>
  }

  export type ServiceUpdateWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserUpsertWithoutEstimatesInput = {
    update: XOR<UserUpdateWithoutEstimatesInput, UserUncheckedUpdateWithoutEstimatesInput>
    create: XOR<UserCreateWithoutEstimatesInput, UserUncheckedCreateWithoutEstimatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEstimatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEstimatesInput, UserUncheckedUpdateWithoutEstimatesInput>
  }

  export type UserUpdateWithoutEstimatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEstimatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientUpsertWithoutEstimatesInput = {
    update: XOR<ClientUpdateWithoutEstimatesInput, ClientUncheckedUpdateWithoutEstimatesInput>
    create: XOR<ClientCreateWithoutEstimatesInput, ClientUncheckedCreateWithoutEstimatesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutEstimatesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutEstimatesInput, ClientUncheckedUpdateWithoutEstimatesInput>
  }

  export type ClientUpdateWithoutEstimatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEstimatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateWithoutSettlementsAsTechnicianInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettlementsAsTechnicianInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettlementsAsTechnicianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsAsTechnicianInput, UserUncheckedCreateWithoutSettlementsAsTechnicianInput>
  }

  export type UserCreateWithoutSettlementsLiquidatedInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettlementsLiquidatedInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettlementsLiquidatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsLiquidatedInput, UserUncheckedCreateWithoutSettlementsLiquidatedInput>
  }

  export type PaymentCreateWithoutSettlementInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutPaymentsInput
    service: ServiceCreateNestedOneWithoutPaymentInput
    parts?: PaymentPartCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSettlementInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    technicianId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parts?: PaymentPartUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutSettlementInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSettlementInput, PaymentUncheckedCreateWithoutSettlementInput>
  }

  export type PaymentCreateManySettlementInputEnvelope = {
    data: PaymentCreateManySettlementInput | PaymentCreateManySettlementInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSettlementsAsTechnicianInput = {
    update: XOR<UserUpdateWithoutSettlementsAsTechnicianInput, UserUncheckedUpdateWithoutSettlementsAsTechnicianInput>
    create: XOR<UserCreateWithoutSettlementsAsTechnicianInput, UserUncheckedCreateWithoutSettlementsAsTechnicianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsAsTechnicianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsAsTechnicianInput, UserUncheckedUpdateWithoutSettlementsAsTechnicianInput>
  }

  export type UserUpdateWithoutSettlementsAsTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsAsTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSettlementsLiquidatedInput = {
    update: XOR<UserUpdateWithoutSettlementsLiquidatedInput, UserUncheckedUpdateWithoutSettlementsLiquidatedInput>
    create: XOR<UserCreateWithoutSettlementsLiquidatedInput, UserUncheckedCreateWithoutSettlementsLiquidatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsLiquidatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsLiquidatedInput, UserUncheckedUpdateWithoutSettlementsLiquidatedInput>
  }

  export type UserUpdateWithoutSettlementsLiquidatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsLiquidatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSettlementInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSettlementInput, PaymentUncheckedUpdateWithoutSettlementInput>
    create: XOR<PaymentCreateWithoutSettlementInput, PaymentUncheckedCreateWithoutSettlementInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSettlementInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSettlementInput, PaymentUncheckedUpdateWithoutSettlementInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSettlementInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSettlementInput>
  }

  export type ServiceCreateWithoutActivityLogsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    estimate?: EstimateCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    estimate?: EstimateUncheckedCreateNestedOneWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutActivityLogsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutActivityLogsInput, ServiceUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    integrationLogs?: IntegrationLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    integrationLogs?: IntegrationLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type ServiceUpsertWithoutActivityLogsInput = {
    update: XOR<ServiceUpdateWithoutActivityLogsInput, ServiceUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<ServiceCreateWithoutActivityLogsInput, ServiceUncheckedCreateWithoutActivityLogsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutActivityLogsInput, ServiceUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ServiceUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    integrationLogs?: IntegrationLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    integrationLogs?: IntegrationLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIntegrationLogsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceCreateNestedManyWithoutClosedByInput
    payments?: PaymentCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationLogsInput = {
    id?: string
    email: string
    name: string
    role: $Enums.Role
    avatar?: string | null
    passwordHash: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesAsTechnician?: ServiceUncheckedCreateNestedManyWithoutTechnicianInput
    servicesCreated?: ServiceUncheckedCreateNestedManyWithoutCreatedByInput
    servicesClosed?: ServiceUncheckedCreateNestedManyWithoutClosedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTechnicianInput
    estimates?: EstimateUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsAsTechnician?: SettlementUncheckedCreateNestedManyWithoutTechnicianInput
    settlementsLiquidated?: SettlementUncheckedCreateNestedManyWithoutLiquidatedByInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationLogsInput, UserUncheckedCreateWithoutIntegrationLogsInput>
  }

  export type UserUpsertWithoutIntegrationLogsInput = {
    update: XOR<UserUpdateWithoutIntegrationLogsInput, UserUncheckedUpdateWithoutIntegrationLogsInput>
    create: XOR<UserCreateWithoutIntegrationLogsInput, UserUncheckedCreateWithoutIntegrationLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationLogsInput, UserUncheckedUpdateWithoutIntegrationLogsInput>
  }

  export type UserUpdateWithoutIntegrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesAsTechnician?: ServiceUncheckedUpdateManyWithoutTechnicianNestedInput
    servicesCreated?: ServiceUncheckedUpdateManyWithoutCreatedByNestedInput
    servicesClosed?: ServiceUncheckedUpdateManyWithoutClosedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTechnicianNestedInput
    estimates?: EstimateUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsAsTechnician?: SettlementUncheckedUpdateManyWithoutTechnicianNestedInput
    settlementsLiquidated?: SettlementUncheckedUpdateManyWithoutLiquidatedByNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceCreateManyTechnicianInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    clientId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateManyClosedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyTechnicianInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    serviceId: string
    settlementId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateCreateManyTechnicianInput = {
    id?: string
    serviceId: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettlementCreateManyTechnicianInput = {
    id?: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    liquidatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettlementCreateManyLiquidatedByInput = {
    id?: string
    technicianId: string
    weekNumber: number
    year: number
    startDate: Date | string
    endDate: Date | string
    ordersCount?: number
    paymentsCount?: number
    totalCollected?: Decimal | DecimalJsLike | number | string
    totalParts?: Decimal | DecimalJsLike | number | string
    netAmount?: Decimal | DecimalJsLike | number | string
    techCommission?: Decimal | DecimalJsLike | number | string
    compCommission?: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    notes?: string | null
    liquidatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    serviceId: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IntegrationLogCreateManyUserInput = {
    id?: string
    type: string
    entity: string
    entityId: string
    result: string
    message?: string | null
    createdAt?: Date | string
  }

  export type ServiceUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutClosedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutClosedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutClosedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutPaymentNestedInput
    settlement?: SettlementUpdateOneWithoutPaymentsNestedInput
    parts?: PaymentPartUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parts?: PaymentPartUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutEstimateNestedInput
    client?: ClientUpdateOneRequiredWithoutEstimatesNestedInput
  }

  export type EstimateUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liquidatedBy?: UserUpdateOneWithoutSettlementsLiquidatedNestedInput
    payments?: PaymentUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liquidatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liquidatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutLiquidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutSettlementsAsTechnicianNestedInput
    payments?: PaymentUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateWithoutLiquidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateManyWithoutLiquidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersCount?: IntFieldUpdateOperationsInput | number
    paymentsCount?: IntFieldUpdateOperationsInput | number
    totalCollected?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalParts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    techCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compCommission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    liquidatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyClientInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    createdById: string
    closedById?: string | null
    categoryId?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstimateCreateManyClientInput = {
    id?: string
    serviceId: string
    technicianId: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    notes?: string | null
    status?: $Enums.EstimateStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutEstimateNestedInput
    technician?: UserUpdateOneRequiredWithoutEstimatesNestedInput
  }

  export type EstimateUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstimateUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    technicianId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEstimateStatusFieldUpdateOperationsInput | $Enums.EstimateStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.ServiceStatus
    scheduledDate: Date | string
    scheduledTime: string
    address?: string | null
    completedAt?: Date | string | null
    notes?: string | null
    expectedAmount?: Decimal | DecimalJsLike | number | string | null
    closedAt?: Date | string | null
    isLocked?: boolean
    technicianId?: string | null
    clientId?: string | null
    createdById: string
    closedById?: string | null
    completedPhotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    estimate?: EstimateUncheckedUpdateOneWithoutServiceNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    completedPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyServiceInput = {
    id?: string
    userId: string
    action: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartCreateManyPaymentInput = {
    id?: string
    supplierId: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPartUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPaymentPartsNestedInput
  }

  export type PaymentPartUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartCreateManySupplierInput = {
    id?: string
    paymentId: string
    description: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPartUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutPartsNestedInput
  }

  export type PaymentPartUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPartUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySettlementInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    receiptPhotoUrl?: string | null
    notes?: string | null
    technicianId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutSettlementInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutPaymentNestedInput
    parts?: PaymentPartUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSettlementInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parts?: PaymentPartUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutSettlementInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    receiptPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
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