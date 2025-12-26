
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
 * Model ServiceReport
 * 
 */
export type ServiceReport = $Result.DefaultSelection<Prisma.$ServiceReportPayload>
/**
 * Model ServicePhoto
 * 
 */
export type ServicePhoto = $Result.DefaultSelection<Prisma.$ServicePhotoPayload>
/**
 * Model SparePart
 * 
 */
export type SparePart = $Result.DefaultSelection<Prisma.$SparePartPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TECHNICIAN: 'TECHNICIAN',
  CLIENT: 'CLIENT'
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


export const PaymentGateway: {
  MERCADOPAGO: 'MERCADOPAGO',
  STRIPE: 'STRIPE',
  PAYPAL: 'PAYPAL',
  OTHER: 'OTHER'
};

export type PaymentGateway = (typeof PaymentGateway)[keyof typeof PaymentGateway]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentGateway = $Enums.PaymentGateway

export const PaymentGateway: typeof $Enums.PaymentGateway

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
   * `prisma.serviceReport`: Exposes CRUD operations for the **ServiceReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceReports
    * const serviceReports = await prisma.serviceReport.findMany()
    * ```
    */
  get serviceReport(): Prisma.ServiceReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicePhoto`: Exposes CRUD operations for the **ServicePhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicePhotos
    * const servicePhotos = await prisma.servicePhoto.findMany()
    * ```
    */
  get servicePhoto(): Prisma.ServicePhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sparePart`: Exposes CRUD operations for the **SparePart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpareParts
    * const spareParts = await prisma.sparePart.findMany()
    * ```
    */
  get sparePart(): Prisma.SparePartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    ServiceReport: 'ServiceReport',
    ServicePhoto: 'ServicePhoto',
    SparePart: 'SparePart',
    Payment: 'Payment'
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
      modelProps: "user" | "client" | "serviceCategory" | "service" | "serviceReport" | "servicePhoto" | "sparePart" | "payment"
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
      ServiceReport: {
        payload: Prisma.$ServiceReportPayload<ExtArgs>
        fields: Prisma.ServiceReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>
          }
          findFirst: {
            args: Prisma.ServiceReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>
          }
          findMany: {
            args: Prisma.ServiceReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>[]
          }
          create: {
            args: Prisma.ServiceReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>
          }
          createMany: {
            args: Prisma.ServiceReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>[]
          }
          delete: {
            args: Prisma.ServiceReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>
          }
          update: {
            args: Prisma.ServiceReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>
          }
          deleteMany: {
            args: Prisma.ServiceReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>[]
          }
          upsert: {
            args: Prisma.ServiceReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceReportPayload>
          }
          aggregate: {
            args: Prisma.ServiceReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceReport>
          }
          groupBy: {
            args: Prisma.ServiceReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceReportCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceReportCountAggregateOutputType> | number
          }
        }
      }
      ServicePhoto: {
        payload: Prisma.$ServicePhotoPayload<ExtArgs>
        fields: Prisma.ServicePhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicePhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicePhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>
          }
          findFirst: {
            args: Prisma.ServicePhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicePhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>
          }
          findMany: {
            args: Prisma.ServicePhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>[]
          }
          create: {
            args: Prisma.ServicePhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>
          }
          createMany: {
            args: Prisma.ServicePhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicePhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>[]
          }
          delete: {
            args: Prisma.ServicePhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>
          }
          update: {
            args: Prisma.ServicePhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>
          }
          deleteMany: {
            args: Prisma.ServicePhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicePhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicePhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>[]
          }
          upsert: {
            args: Prisma.ServicePhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePhotoPayload>
          }
          aggregate: {
            args: Prisma.ServicePhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicePhoto>
          }
          groupBy: {
            args: Prisma.ServicePhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicePhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicePhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicePhotoCountAggregateOutputType> | number
          }
        }
      }
      SparePart: {
        payload: Prisma.$SparePartPayload<ExtArgs>
        fields: Prisma.SparePartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SparePartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SparePartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          findFirst: {
            args: Prisma.SparePartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SparePartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          findMany: {
            args: Prisma.SparePartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          create: {
            args: Prisma.SparePartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          createMany: {
            args: Prisma.SparePartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SparePartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          delete: {
            args: Prisma.SparePartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          update: {
            args: Prisma.SparePartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          deleteMany: {
            args: Prisma.SparePartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SparePartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SparePartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          upsert: {
            args: Prisma.SparePartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          aggregate: {
            args: Prisma.SparePartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSparePart>
          }
          groupBy: {
            args: Prisma.SparePartGroupByArgs<ExtArgs>
            result: $Utils.Optional<SparePartGroupByOutputType>[]
          }
          count: {
            args: Prisma.SparePartCountArgs<ExtArgs>
            result: $Utils.Optional<SparePartCountAggregateOutputType> | number
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
    serviceReport?: ServiceReportOmit
    servicePhoto?: ServicePhotoOmit
    sparePart?: SparePartOmit
    payment?: PaymentOmit
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
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicesAsTechnician?: boolean | UserCountOutputTypeCountServicesAsTechnicianArgs
    servicesCreated?: boolean | UserCountOutputTypeCountServicesCreatedArgs
    servicesClosed?: boolean | UserCountOutputTypeCountServicesClosedArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    services: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ClientCountOutputTypeCountServicesArgs
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
   * Count Type ServiceReportCountOutputType
   */

  export type ServiceReportCountOutputType = {
    photos: number
    spareParts: number
  }

  export type ServiceReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | ServiceReportCountOutputTypeCountPhotosArgs
    spareParts?: boolean | ServiceReportCountOutputTypeCountSparePartsArgs
  }

  // Custom InputTypes
  /**
   * ServiceReportCountOutputType without action
   */
  export type ServiceReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReportCountOutputType
     */
    select?: ServiceReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceReportCountOutputType without action
   */
  export type ServiceReportCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePhotoWhereInput
  }

  /**
   * ServiceReportCountOutputType without action
   */
  export type ServiceReportCountOutputTypeCountSparePartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparePartWhereInput
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
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
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
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
    payment?: boolean | Service$paymentArgs<ExtArgs>
    report?: boolean | Service$reportArgs<ExtArgs>
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "scheduledDate" | "scheduledTime" | "address" | "completedAt" | "notes" | "expectedAmount" | "closedAt" | "isLocked" | "technicianId" | "clientId" | "createdById" | "closedById" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Service$technicianArgs<ExtArgs>
    client?: boolean | Service$clientArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | Service$closedByArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
    payment?: boolean | Service$paymentArgs<ExtArgs>
    report?: boolean | Service$reportArgs<ExtArgs>
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
      report: Prisma.$ServiceReportPayload<ExtArgs> | null
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
    report<T extends Service$reportArgs<ExtArgs> = {}>(args?: Subset<T, Service$reportArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Service.report
   */
  export type Service$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    where?: ServiceReportWhereInput
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
   * Model ServiceReport
   */

  export type AggregateServiceReport = {
    _count: ServiceReportCountAggregateOutputType | null
    _min: ServiceReportMinAggregateOutputType | null
    _max: ServiceReportMaxAggregateOutputType | null
  }

  export type ServiceReportMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    finalReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceReportMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    finalReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceReportCountAggregateOutputType = {
    id: number
    serviceId: number
    finalReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceReportMinAggregateInputType = {
    id?: true
    serviceId?: true
    finalReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceReportMaxAggregateInputType = {
    id?: true
    serviceId?: true
    finalReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceReportCountAggregateInputType = {
    id?: true
    serviceId?: true
    finalReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceReport to aggregate.
     */
    where?: ServiceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceReports to fetch.
     */
    orderBy?: ServiceReportOrderByWithRelationInput | ServiceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceReports
    **/
    _count?: true | ServiceReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceReportMaxAggregateInputType
  }

  export type GetServiceReportAggregateType<T extends ServiceReportAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceReport[P]>
      : GetScalarType<T[P], AggregateServiceReport[P]>
  }




  export type ServiceReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceReportWhereInput
    orderBy?: ServiceReportOrderByWithAggregationInput | ServiceReportOrderByWithAggregationInput[]
    by: ServiceReportScalarFieldEnum[] | ServiceReportScalarFieldEnum
    having?: ServiceReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceReportCountAggregateInputType | true
    _min?: ServiceReportMinAggregateInputType
    _max?: ServiceReportMaxAggregateInputType
  }

  export type ServiceReportGroupByOutputType = {
    id: string
    serviceId: string
    finalReport: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceReportCountAggregateOutputType | null
    _min: ServiceReportMinAggregateOutputType | null
    _max: ServiceReportMaxAggregateOutputType | null
  }

  type GetServiceReportGroupByPayload<T extends ServiceReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceReportGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceReportGroupByOutputType[P]>
        }
      >
    >


  export type ServiceReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    finalReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    photos?: boolean | ServiceReport$photosArgs<ExtArgs>
    spareParts?: boolean | ServiceReport$sparePartsArgs<ExtArgs>
    _count?: boolean | ServiceReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceReport"]>

  export type ServiceReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    finalReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceReport"]>

  export type ServiceReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    finalReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceReport"]>

  export type ServiceReportSelectScalar = {
    id?: boolean
    serviceId?: boolean
    finalReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "finalReport" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceReport"]>
  export type ServiceReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    photos?: boolean | ServiceReport$photosArgs<ExtArgs>
    spareParts?: boolean | ServiceReport$sparePartsArgs<ExtArgs>
    _count?: boolean | ServiceReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceReport"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      photos: Prisma.$ServicePhotoPayload<ExtArgs>[]
      spareParts: Prisma.$SparePartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      finalReport: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceReport"]>
    composites: {}
  }

  type ServiceReportGetPayload<S extends boolean | null | undefined | ServiceReportDefaultArgs> = $Result.GetResult<Prisma.$ServiceReportPayload, S>

  type ServiceReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceReportCountAggregateInputType | true
    }

  export interface ServiceReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceReport'], meta: { name: 'ServiceReport' } }
    /**
     * Find zero or one ServiceReport that matches the filter.
     * @param {ServiceReportFindUniqueArgs} args - Arguments to find a ServiceReport
     * @example
     * // Get one ServiceReport
     * const serviceReport = await prisma.serviceReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceReportFindUniqueArgs>(args: SelectSubset<T, ServiceReportFindUniqueArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceReportFindUniqueOrThrowArgs} args - Arguments to find a ServiceReport
     * @example
     * // Get one ServiceReport
     * const serviceReport = await prisma.serviceReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportFindFirstArgs} args - Arguments to find a ServiceReport
     * @example
     * // Get one ServiceReport
     * const serviceReport = await prisma.serviceReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceReportFindFirstArgs>(args?: SelectSubset<T, ServiceReportFindFirstArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportFindFirstOrThrowArgs} args - Arguments to find a ServiceReport
     * @example
     * // Get one ServiceReport
     * const serviceReport = await prisma.serviceReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceReports
     * const serviceReports = await prisma.serviceReport.findMany()
     * 
     * // Get first 10 ServiceReports
     * const serviceReports = await prisma.serviceReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceReportWithIdOnly = await prisma.serviceReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceReportFindManyArgs>(args?: SelectSubset<T, ServiceReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceReport.
     * @param {ServiceReportCreateArgs} args - Arguments to create a ServiceReport.
     * @example
     * // Create one ServiceReport
     * const ServiceReport = await prisma.serviceReport.create({
     *   data: {
     *     // ... data to create a ServiceReport
     *   }
     * })
     * 
     */
    create<T extends ServiceReportCreateArgs>(args: SelectSubset<T, ServiceReportCreateArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceReports.
     * @param {ServiceReportCreateManyArgs} args - Arguments to create many ServiceReports.
     * @example
     * // Create many ServiceReports
     * const serviceReport = await prisma.serviceReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceReportCreateManyArgs>(args?: SelectSubset<T, ServiceReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceReports and returns the data saved in the database.
     * @param {ServiceReportCreateManyAndReturnArgs} args - Arguments to create many ServiceReports.
     * @example
     * // Create many ServiceReports
     * const serviceReport = await prisma.serviceReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceReports and only return the `id`
     * const serviceReportWithIdOnly = await prisma.serviceReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceReport.
     * @param {ServiceReportDeleteArgs} args - Arguments to delete one ServiceReport.
     * @example
     * // Delete one ServiceReport
     * const ServiceReport = await prisma.serviceReport.delete({
     *   where: {
     *     // ... filter to delete one ServiceReport
     *   }
     * })
     * 
     */
    delete<T extends ServiceReportDeleteArgs>(args: SelectSubset<T, ServiceReportDeleteArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceReport.
     * @param {ServiceReportUpdateArgs} args - Arguments to update one ServiceReport.
     * @example
     * // Update one ServiceReport
     * const serviceReport = await prisma.serviceReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceReportUpdateArgs>(args: SelectSubset<T, ServiceReportUpdateArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceReports.
     * @param {ServiceReportDeleteManyArgs} args - Arguments to filter ServiceReports to delete.
     * @example
     * // Delete a few ServiceReports
     * const { count } = await prisma.serviceReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceReportDeleteManyArgs>(args?: SelectSubset<T, ServiceReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceReports
     * const serviceReport = await prisma.serviceReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceReportUpdateManyArgs>(args: SelectSubset<T, ServiceReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceReports and returns the data updated in the database.
     * @param {ServiceReportUpdateManyAndReturnArgs} args - Arguments to update many ServiceReports.
     * @example
     * // Update many ServiceReports
     * const serviceReport = await prisma.serviceReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceReports and only return the `id`
     * const serviceReportWithIdOnly = await prisma.serviceReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceReport.
     * @param {ServiceReportUpsertArgs} args - Arguments to update or create a ServiceReport.
     * @example
     * // Update or create a ServiceReport
     * const serviceReport = await prisma.serviceReport.upsert({
     *   create: {
     *     // ... data to create a ServiceReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceReport we want to update
     *   }
     * })
     */
    upsert<T extends ServiceReportUpsertArgs>(args: SelectSubset<T, ServiceReportUpsertArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportCountArgs} args - Arguments to filter ServiceReports to count.
     * @example
     * // Count the number of ServiceReports
     * const count = await prisma.serviceReport.count({
     *   where: {
     *     // ... the filter for the ServiceReports we want to count
     *   }
     * })
    **/
    count<T extends ServiceReportCountArgs>(
      args?: Subset<T, ServiceReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceReportAggregateArgs>(args: Subset<T, ServiceReportAggregateArgs>): Prisma.PrismaPromise<GetServiceReportAggregateType<T>>

    /**
     * Group by ServiceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceReportGroupByArgs} args - Group by arguments.
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
      T extends ServiceReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceReportGroupByArgs['orderBy'] }
        : { orderBy?: ServiceReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceReport model
   */
  readonly fields: ServiceReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends ServiceReport$photosArgs<ExtArgs> = {}>(args?: Subset<T, ServiceReport$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spareParts<T extends ServiceReport$sparePartsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceReport$sparePartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceReport model
   */
  interface ServiceReportFieldRefs {
    readonly id: FieldRef<"ServiceReport", 'String'>
    readonly serviceId: FieldRef<"ServiceReport", 'String'>
    readonly finalReport: FieldRef<"ServiceReport", 'String'>
    readonly createdAt: FieldRef<"ServiceReport", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceReport findUnique
   */
  export type ServiceReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * Filter, which ServiceReport to fetch.
     */
    where: ServiceReportWhereUniqueInput
  }

  /**
   * ServiceReport findUniqueOrThrow
   */
  export type ServiceReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * Filter, which ServiceReport to fetch.
     */
    where: ServiceReportWhereUniqueInput
  }

  /**
   * ServiceReport findFirst
   */
  export type ServiceReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * Filter, which ServiceReport to fetch.
     */
    where?: ServiceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceReports to fetch.
     */
    orderBy?: ServiceReportOrderByWithRelationInput | ServiceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceReports.
     */
    cursor?: ServiceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceReports.
     */
    distinct?: ServiceReportScalarFieldEnum | ServiceReportScalarFieldEnum[]
  }

  /**
   * ServiceReport findFirstOrThrow
   */
  export type ServiceReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * Filter, which ServiceReport to fetch.
     */
    where?: ServiceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceReports to fetch.
     */
    orderBy?: ServiceReportOrderByWithRelationInput | ServiceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceReports.
     */
    cursor?: ServiceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceReports.
     */
    distinct?: ServiceReportScalarFieldEnum | ServiceReportScalarFieldEnum[]
  }

  /**
   * ServiceReport findMany
   */
  export type ServiceReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * Filter, which ServiceReports to fetch.
     */
    where?: ServiceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceReports to fetch.
     */
    orderBy?: ServiceReportOrderByWithRelationInput | ServiceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceReports.
     */
    cursor?: ServiceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceReports.
     */
    skip?: number
    distinct?: ServiceReportScalarFieldEnum | ServiceReportScalarFieldEnum[]
  }

  /**
   * ServiceReport create
   */
  export type ServiceReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceReport.
     */
    data: XOR<ServiceReportCreateInput, ServiceReportUncheckedCreateInput>
  }

  /**
   * ServiceReport createMany
   */
  export type ServiceReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceReports.
     */
    data: ServiceReportCreateManyInput | ServiceReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceReport createManyAndReturn
   */
  export type ServiceReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceReports.
     */
    data: ServiceReportCreateManyInput | ServiceReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceReport update
   */
  export type ServiceReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceReport.
     */
    data: XOR<ServiceReportUpdateInput, ServiceReportUncheckedUpdateInput>
    /**
     * Choose, which ServiceReport to update.
     */
    where: ServiceReportWhereUniqueInput
  }

  /**
   * ServiceReport updateMany
   */
  export type ServiceReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceReports.
     */
    data: XOR<ServiceReportUpdateManyMutationInput, ServiceReportUncheckedUpdateManyInput>
    /**
     * Filter which ServiceReports to update
     */
    where?: ServiceReportWhereInput
    /**
     * Limit how many ServiceReports to update.
     */
    limit?: number
  }

  /**
   * ServiceReport updateManyAndReturn
   */
  export type ServiceReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * The data used to update ServiceReports.
     */
    data: XOR<ServiceReportUpdateManyMutationInput, ServiceReportUncheckedUpdateManyInput>
    /**
     * Filter which ServiceReports to update
     */
    where?: ServiceReportWhereInput
    /**
     * Limit how many ServiceReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceReport upsert
   */
  export type ServiceReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceReport to update in case it exists.
     */
    where: ServiceReportWhereUniqueInput
    /**
     * In case the ServiceReport found by the `where` argument doesn't exist, create a new ServiceReport with this data.
     */
    create: XOR<ServiceReportCreateInput, ServiceReportUncheckedCreateInput>
    /**
     * In case the ServiceReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceReportUpdateInput, ServiceReportUncheckedUpdateInput>
  }

  /**
   * ServiceReport delete
   */
  export type ServiceReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
    /**
     * Filter which ServiceReport to delete.
     */
    where: ServiceReportWhereUniqueInput
  }

  /**
   * ServiceReport deleteMany
   */
  export type ServiceReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceReports to delete
     */
    where?: ServiceReportWhereInput
    /**
     * Limit how many ServiceReports to delete.
     */
    limit?: number
  }

  /**
   * ServiceReport.photos
   */
  export type ServiceReport$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    where?: ServicePhotoWhereInput
    orderBy?: ServicePhotoOrderByWithRelationInput | ServicePhotoOrderByWithRelationInput[]
    cursor?: ServicePhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePhotoScalarFieldEnum | ServicePhotoScalarFieldEnum[]
  }

  /**
   * ServiceReport.spareParts
   */
  export type ServiceReport$sparePartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    where?: SparePartWhereInput
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    cursor?: SparePartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * ServiceReport without action
   */
  export type ServiceReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceReport
     */
    select?: ServiceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceReport
     */
    omit?: ServiceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceReportInclude<ExtArgs> | null
  }


  /**
   * Model ServicePhoto
   */

  export type AggregateServicePhoto = {
    _count: ServicePhotoCountAggregateOutputType | null
    _avg: ServicePhotoAvgAggregateOutputType | null
    _sum: ServicePhotoSumAggregateOutputType | null
    _min: ServicePhotoMinAggregateOutputType | null
    _max: ServicePhotoMaxAggregateOutputType | null
  }

  export type ServicePhotoAvgAggregateOutputType = {
    order: number | null
  }

  export type ServicePhotoSumAggregateOutputType = {
    order: number | null
  }

  export type ServicePhotoMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    url: string | null
    technicalNotes: string | null
    order: number | null
    createdAt: Date | null
  }

  export type ServicePhotoMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    url: string | null
    technicalNotes: string | null
    order: number | null
    createdAt: Date | null
  }

  export type ServicePhotoCountAggregateOutputType = {
    id: number
    reportId: number
    url: number
    technicalNotes: number
    order: number
    createdAt: number
    _all: number
  }


  export type ServicePhotoAvgAggregateInputType = {
    order?: true
  }

  export type ServicePhotoSumAggregateInputType = {
    order?: true
  }

  export type ServicePhotoMinAggregateInputType = {
    id?: true
    reportId?: true
    url?: true
    technicalNotes?: true
    order?: true
    createdAt?: true
  }

  export type ServicePhotoMaxAggregateInputType = {
    id?: true
    reportId?: true
    url?: true
    technicalNotes?: true
    order?: true
    createdAt?: true
  }

  export type ServicePhotoCountAggregateInputType = {
    id?: true
    reportId?: true
    url?: true
    technicalNotes?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type ServicePhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePhoto to aggregate.
     */
    where?: ServicePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePhotos to fetch.
     */
    orderBy?: ServicePhotoOrderByWithRelationInput | ServicePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicePhotos
    **/
    _count?: true | ServicePhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicePhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicePhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicePhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicePhotoMaxAggregateInputType
  }

  export type GetServicePhotoAggregateType<T extends ServicePhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateServicePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicePhoto[P]>
      : GetScalarType<T[P], AggregateServicePhoto[P]>
  }




  export type ServicePhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePhotoWhereInput
    orderBy?: ServicePhotoOrderByWithAggregationInput | ServicePhotoOrderByWithAggregationInput[]
    by: ServicePhotoScalarFieldEnum[] | ServicePhotoScalarFieldEnum
    having?: ServicePhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicePhotoCountAggregateInputType | true
    _avg?: ServicePhotoAvgAggregateInputType
    _sum?: ServicePhotoSumAggregateInputType
    _min?: ServicePhotoMinAggregateInputType
    _max?: ServicePhotoMaxAggregateInputType
  }

  export type ServicePhotoGroupByOutputType = {
    id: string
    reportId: string
    url: string
    technicalNotes: string | null
    order: number
    createdAt: Date
    _count: ServicePhotoCountAggregateOutputType | null
    _avg: ServicePhotoAvgAggregateOutputType | null
    _sum: ServicePhotoSumAggregateOutputType | null
    _min: ServicePhotoMinAggregateOutputType | null
    _max: ServicePhotoMaxAggregateOutputType | null
  }

  type GetServicePhotoGroupByPayload<T extends ServicePhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicePhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicePhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicePhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicePhotoGroupByOutputType[P]>
        }
      >
    >


  export type ServicePhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    url?: boolean
    technicalNotes?: boolean
    order?: boolean
    createdAt?: boolean
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePhoto"]>

  export type ServicePhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    url?: boolean
    technicalNotes?: boolean
    order?: boolean
    createdAt?: boolean
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePhoto"]>

  export type ServicePhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    url?: boolean
    technicalNotes?: boolean
    order?: boolean
    createdAt?: boolean
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePhoto"]>

  export type ServicePhotoSelectScalar = {
    id?: boolean
    reportId?: boolean
    url?: boolean
    technicalNotes?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type ServicePhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "url" | "technicalNotes" | "order" | "createdAt", ExtArgs["result"]["servicePhoto"]>
  export type ServicePhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }
  export type ServicePhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }
  export type ServicePhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }

  export type $ServicePhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicePhoto"
    objects: {
      report: Prisma.$ServiceReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      url: string
      technicalNotes: string | null
      order: number
      createdAt: Date
    }, ExtArgs["result"]["servicePhoto"]>
    composites: {}
  }

  type ServicePhotoGetPayload<S extends boolean | null | undefined | ServicePhotoDefaultArgs> = $Result.GetResult<Prisma.$ServicePhotoPayload, S>

  type ServicePhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicePhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicePhotoCountAggregateInputType | true
    }

  export interface ServicePhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicePhoto'], meta: { name: 'ServicePhoto' } }
    /**
     * Find zero or one ServicePhoto that matches the filter.
     * @param {ServicePhotoFindUniqueArgs} args - Arguments to find a ServicePhoto
     * @example
     * // Get one ServicePhoto
     * const servicePhoto = await prisma.servicePhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicePhotoFindUniqueArgs>(args: SelectSubset<T, ServicePhotoFindUniqueArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicePhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicePhotoFindUniqueOrThrowArgs} args - Arguments to find a ServicePhoto
     * @example
     * // Get one ServicePhoto
     * const servicePhoto = await prisma.servicePhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicePhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicePhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoFindFirstArgs} args - Arguments to find a ServicePhoto
     * @example
     * // Get one ServicePhoto
     * const servicePhoto = await prisma.servicePhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicePhotoFindFirstArgs>(args?: SelectSubset<T, ServicePhotoFindFirstArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoFindFirstOrThrowArgs} args - Arguments to find a ServicePhoto
     * @example
     * // Get one ServicePhoto
     * const servicePhoto = await prisma.servicePhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicePhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicePhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicePhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicePhotos
     * const servicePhotos = await prisma.servicePhoto.findMany()
     * 
     * // Get first 10 ServicePhotos
     * const servicePhotos = await prisma.servicePhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicePhotoWithIdOnly = await prisma.servicePhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicePhotoFindManyArgs>(args?: SelectSubset<T, ServicePhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicePhoto.
     * @param {ServicePhotoCreateArgs} args - Arguments to create a ServicePhoto.
     * @example
     * // Create one ServicePhoto
     * const ServicePhoto = await prisma.servicePhoto.create({
     *   data: {
     *     // ... data to create a ServicePhoto
     *   }
     * })
     * 
     */
    create<T extends ServicePhotoCreateArgs>(args: SelectSubset<T, ServicePhotoCreateArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicePhotos.
     * @param {ServicePhotoCreateManyArgs} args - Arguments to create many ServicePhotos.
     * @example
     * // Create many ServicePhotos
     * const servicePhoto = await prisma.servicePhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicePhotoCreateManyArgs>(args?: SelectSubset<T, ServicePhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicePhotos and returns the data saved in the database.
     * @param {ServicePhotoCreateManyAndReturnArgs} args - Arguments to create many ServicePhotos.
     * @example
     * // Create many ServicePhotos
     * const servicePhoto = await prisma.servicePhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicePhotos and only return the `id`
     * const servicePhotoWithIdOnly = await prisma.servicePhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicePhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicePhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicePhoto.
     * @param {ServicePhotoDeleteArgs} args - Arguments to delete one ServicePhoto.
     * @example
     * // Delete one ServicePhoto
     * const ServicePhoto = await prisma.servicePhoto.delete({
     *   where: {
     *     // ... filter to delete one ServicePhoto
     *   }
     * })
     * 
     */
    delete<T extends ServicePhotoDeleteArgs>(args: SelectSubset<T, ServicePhotoDeleteArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicePhoto.
     * @param {ServicePhotoUpdateArgs} args - Arguments to update one ServicePhoto.
     * @example
     * // Update one ServicePhoto
     * const servicePhoto = await prisma.servicePhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicePhotoUpdateArgs>(args: SelectSubset<T, ServicePhotoUpdateArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicePhotos.
     * @param {ServicePhotoDeleteManyArgs} args - Arguments to filter ServicePhotos to delete.
     * @example
     * // Delete a few ServicePhotos
     * const { count } = await prisma.servicePhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicePhotoDeleteManyArgs>(args?: SelectSubset<T, ServicePhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicePhotos
     * const servicePhoto = await prisma.servicePhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicePhotoUpdateManyArgs>(args: SelectSubset<T, ServicePhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePhotos and returns the data updated in the database.
     * @param {ServicePhotoUpdateManyAndReturnArgs} args - Arguments to update many ServicePhotos.
     * @example
     * // Update many ServicePhotos
     * const servicePhoto = await prisma.servicePhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicePhotos and only return the `id`
     * const servicePhotoWithIdOnly = await prisma.servicePhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicePhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicePhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicePhoto.
     * @param {ServicePhotoUpsertArgs} args - Arguments to update or create a ServicePhoto.
     * @example
     * // Update or create a ServicePhoto
     * const servicePhoto = await prisma.servicePhoto.upsert({
     *   create: {
     *     // ... data to create a ServicePhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicePhoto we want to update
     *   }
     * })
     */
    upsert<T extends ServicePhotoUpsertArgs>(args: SelectSubset<T, ServicePhotoUpsertArgs<ExtArgs>>): Prisma__ServicePhotoClient<$Result.GetResult<Prisma.$ServicePhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicePhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoCountArgs} args - Arguments to filter ServicePhotos to count.
     * @example
     * // Count the number of ServicePhotos
     * const count = await prisma.servicePhoto.count({
     *   where: {
     *     // ... the filter for the ServicePhotos we want to count
     *   }
     * })
    **/
    count<T extends ServicePhotoCountArgs>(
      args?: Subset<T, ServicePhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicePhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicePhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicePhotoAggregateArgs>(args: Subset<T, ServicePhotoAggregateArgs>): Prisma.PrismaPromise<GetServicePhotoAggregateType<T>>

    /**
     * Group by ServicePhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePhotoGroupByArgs} args - Group by arguments.
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
      T extends ServicePhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicePhotoGroupByArgs['orderBy'] }
        : { orderBy?: ServicePhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicePhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicePhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicePhoto model
   */
  readonly fields: ServicePhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicePhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicePhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ServiceReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceReportDefaultArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServicePhoto model
   */
  interface ServicePhotoFieldRefs {
    readonly id: FieldRef<"ServicePhoto", 'String'>
    readonly reportId: FieldRef<"ServicePhoto", 'String'>
    readonly url: FieldRef<"ServicePhoto", 'String'>
    readonly technicalNotes: FieldRef<"ServicePhoto", 'String'>
    readonly order: FieldRef<"ServicePhoto", 'Int'>
    readonly createdAt: FieldRef<"ServicePhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicePhoto findUnique
   */
  export type ServicePhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ServicePhoto to fetch.
     */
    where: ServicePhotoWhereUniqueInput
  }

  /**
   * ServicePhoto findUniqueOrThrow
   */
  export type ServicePhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ServicePhoto to fetch.
     */
    where: ServicePhotoWhereUniqueInput
  }

  /**
   * ServicePhoto findFirst
   */
  export type ServicePhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ServicePhoto to fetch.
     */
    where?: ServicePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePhotos to fetch.
     */
    orderBy?: ServicePhotoOrderByWithRelationInput | ServicePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePhotos.
     */
    cursor?: ServicePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePhotos.
     */
    distinct?: ServicePhotoScalarFieldEnum | ServicePhotoScalarFieldEnum[]
  }

  /**
   * ServicePhoto findFirstOrThrow
   */
  export type ServicePhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ServicePhoto to fetch.
     */
    where?: ServicePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePhotos to fetch.
     */
    orderBy?: ServicePhotoOrderByWithRelationInput | ServicePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePhotos.
     */
    cursor?: ServicePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePhotos.
     */
    distinct?: ServicePhotoScalarFieldEnum | ServicePhotoScalarFieldEnum[]
  }

  /**
   * ServicePhoto findMany
   */
  export type ServicePhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ServicePhotos to fetch.
     */
    where?: ServicePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePhotos to fetch.
     */
    orderBy?: ServicePhotoOrderByWithRelationInput | ServicePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicePhotos.
     */
    cursor?: ServicePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePhotos.
     */
    skip?: number
    distinct?: ServicePhotoScalarFieldEnum | ServicePhotoScalarFieldEnum[]
  }

  /**
   * ServicePhoto create
   */
  export type ServicePhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicePhoto.
     */
    data: XOR<ServicePhotoCreateInput, ServicePhotoUncheckedCreateInput>
  }

  /**
   * ServicePhoto createMany
   */
  export type ServicePhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicePhotos.
     */
    data: ServicePhotoCreateManyInput | ServicePhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicePhoto createManyAndReturn
   */
  export type ServicePhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * The data used to create many ServicePhotos.
     */
    data: ServicePhotoCreateManyInput | ServicePhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePhoto update
   */
  export type ServicePhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicePhoto.
     */
    data: XOR<ServicePhotoUpdateInput, ServicePhotoUncheckedUpdateInput>
    /**
     * Choose, which ServicePhoto to update.
     */
    where: ServicePhotoWhereUniqueInput
  }

  /**
   * ServicePhoto updateMany
   */
  export type ServicePhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicePhotos.
     */
    data: XOR<ServicePhotoUpdateManyMutationInput, ServicePhotoUncheckedUpdateManyInput>
    /**
     * Filter which ServicePhotos to update
     */
    where?: ServicePhotoWhereInput
    /**
     * Limit how many ServicePhotos to update.
     */
    limit?: number
  }

  /**
   * ServicePhoto updateManyAndReturn
   */
  export type ServicePhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * The data used to update ServicePhotos.
     */
    data: XOR<ServicePhotoUpdateManyMutationInput, ServicePhotoUncheckedUpdateManyInput>
    /**
     * Filter which ServicePhotos to update
     */
    where?: ServicePhotoWhereInput
    /**
     * Limit how many ServicePhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePhoto upsert
   */
  export type ServicePhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicePhoto to update in case it exists.
     */
    where: ServicePhotoWhereUniqueInput
    /**
     * In case the ServicePhoto found by the `where` argument doesn't exist, create a new ServicePhoto with this data.
     */
    create: XOR<ServicePhotoCreateInput, ServicePhotoUncheckedCreateInput>
    /**
     * In case the ServicePhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicePhotoUpdateInput, ServicePhotoUncheckedUpdateInput>
  }

  /**
   * ServicePhoto delete
   */
  export type ServicePhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
    /**
     * Filter which ServicePhoto to delete.
     */
    where: ServicePhotoWhereUniqueInput
  }

  /**
   * ServicePhoto deleteMany
   */
  export type ServicePhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePhotos to delete
     */
    where?: ServicePhotoWhereInput
    /**
     * Limit how many ServicePhotos to delete.
     */
    limit?: number
  }

  /**
   * ServicePhoto without action
   */
  export type ServicePhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePhoto
     */
    select?: ServicePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePhoto
     */
    omit?: ServicePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePhotoInclude<ExtArgs> | null
  }


  /**
   * Model SparePart
   */

  export type AggregateSparePart = {
    _count: SparePartCountAggregateOutputType | null
    _avg: SparePartAvgAggregateOutputType | null
    _sum: SparePartSumAggregateOutputType | null
    _min: SparePartMinAggregateOutputType | null
    _max: SparePartMaxAggregateOutputType | null
  }

  export type SparePartAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type SparePartSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type SparePartMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    name: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    notes: string | null
    createdAt: Date | null
  }

  export type SparePartMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    name: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    notes: string | null
    createdAt: Date | null
  }

  export type SparePartCountAggregateOutputType = {
    id: number
    reportId: number
    name: number
    quantity: number
    unitPrice: number
    totalPrice: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SparePartAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type SparePartSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type SparePartMinAggregateInputType = {
    id?: true
    reportId?: true
    name?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    notes?: true
    createdAt?: true
  }

  export type SparePartMaxAggregateInputType = {
    id?: true
    reportId?: true
    name?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    notes?: true
    createdAt?: true
  }

  export type SparePartCountAggregateInputType = {
    id?: true
    reportId?: true
    name?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SparePartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparePart to aggregate.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpareParts
    **/
    _count?: true | SparePartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SparePartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SparePartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SparePartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SparePartMaxAggregateInputType
  }

  export type GetSparePartAggregateType<T extends SparePartAggregateArgs> = {
        [P in keyof T & keyof AggregateSparePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSparePart[P]>
      : GetScalarType<T[P], AggregateSparePart[P]>
  }




  export type SparePartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparePartWhereInput
    orderBy?: SparePartOrderByWithAggregationInput | SparePartOrderByWithAggregationInput[]
    by: SparePartScalarFieldEnum[] | SparePartScalarFieldEnum
    having?: SparePartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SparePartCountAggregateInputType | true
    _avg?: SparePartAvgAggregateInputType
    _sum?: SparePartSumAggregateInputType
    _min?: SparePartMinAggregateInputType
    _max?: SparePartMaxAggregateInputType
  }

  export type SparePartGroupByOutputType = {
    id: string
    reportId: string
    name: string
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    notes: string | null
    createdAt: Date
    _count: SparePartCountAggregateOutputType | null
    _avg: SparePartAvgAggregateOutputType | null
    _sum: SparePartSumAggregateOutputType | null
    _min: SparePartMinAggregateOutputType | null
    _max: SparePartMaxAggregateOutputType | null
  }

  type GetSparePartGroupByPayload<T extends SparePartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SparePartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SparePartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SparePartGroupByOutputType[P]>
            : GetScalarType<T[P], SparePartGroupByOutputType[P]>
        }
      >
    >


  export type SparePartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    name?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    createdAt?: boolean
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    name?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    createdAt?: boolean
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    name?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    createdAt?: boolean
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectScalar = {
    id?: boolean
    reportId?: boolean
    name?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SparePartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "name" | "quantity" | "unitPrice" | "totalPrice" | "notes" | "createdAt", ExtArgs["result"]["sparePart"]>
  export type SparePartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }
  export type SparePartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }
  export type SparePartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ServiceReportDefaultArgs<ExtArgs>
  }

  export type $SparePartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SparePart"
    objects: {
      report: Prisma.$ServiceReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      name: string
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["sparePart"]>
    composites: {}
  }

  type SparePartGetPayload<S extends boolean | null | undefined | SparePartDefaultArgs> = $Result.GetResult<Prisma.$SparePartPayload, S>

  type SparePartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SparePartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SparePartCountAggregateInputType | true
    }

  export interface SparePartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SparePart'], meta: { name: 'SparePart' } }
    /**
     * Find zero or one SparePart that matches the filter.
     * @param {SparePartFindUniqueArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SparePartFindUniqueArgs>(args: SelectSubset<T, SparePartFindUniqueArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SparePart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SparePartFindUniqueOrThrowArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SparePartFindUniqueOrThrowArgs>(args: SelectSubset<T, SparePartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparePart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindFirstArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SparePartFindFirstArgs>(args?: SelectSubset<T, SparePartFindFirstArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparePart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindFirstOrThrowArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SparePartFindFirstOrThrowArgs>(args?: SelectSubset<T, SparePartFindFirstOrThrowArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpareParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpareParts
     * const spareParts = await prisma.sparePart.findMany()
     * 
     * // Get first 10 SpareParts
     * const spareParts = await prisma.sparePart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SparePartFindManyArgs>(args?: SelectSubset<T, SparePartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SparePart.
     * @param {SparePartCreateArgs} args - Arguments to create a SparePart.
     * @example
     * // Create one SparePart
     * const SparePart = await prisma.sparePart.create({
     *   data: {
     *     // ... data to create a SparePart
     *   }
     * })
     * 
     */
    create<T extends SparePartCreateArgs>(args: SelectSubset<T, SparePartCreateArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpareParts.
     * @param {SparePartCreateManyArgs} args - Arguments to create many SpareParts.
     * @example
     * // Create many SpareParts
     * const sparePart = await prisma.sparePart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SparePartCreateManyArgs>(args?: SelectSubset<T, SparePartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpareParts and returns the data saved in the database.
     * @param {SparePartCreateManyAndReturnArgs} args - Arguments to create many SpareParts.
     * @example
     * // Create many SpareParts
     * const sparePart = await prisma.sparePart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpareParts and only return the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SparePartCreateManyAndReturnArgs>(args?: SelectSubset<T, SparePartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SparePart.
     * @param {SparePartDeleteArgs} args - Arguments to delete one SparePart.
     * @example
     * // Delete one SparePart
     * const SparePart = await prisma.sparePart.delete({
     *   where: {
     *     // ... filter to delete one SparePart
     *   }
     * })
     * 
     */
    delete<T extends SparePartDeleteArgs>(args: SelectSubset<T, SparePartDeleteArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SparePart.
     * @param {SparePartUpdateArgs} args - Arguments to update one SparePart.
     * @example
     * // Update one SparePart
     * const sparePart = await prisma.sparePart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SparePartUpdateArgs>(args: SelectSubset<T, SparePartUpdateArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpareParts.
     * @param {SparePartDeleteManyArgs} args - Arguments to filter SpareParts to delete.
     * @example
     * // Delete a few SpareParts
     * const { count } = await prisma.sparePart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SparePartDeleteManyArgs>(args?: SelectSubset<T, SparePartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpareParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpareParts
     * const sparePart = await prisma.sparePart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SparePartUpdateManyArgs>(args: SelectSubset<T, SparePartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpareParts and returns the data updated in the database.
     * @param {SparePartUpdateManyAndReturnArgs} args - Arguments to update many SpareParts.
     * @example
     * // Update many SpareParts
     * const sparePart = await prisma.sparePart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpareParts and only return the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.updateManyAndReturn({
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
    updateManyAndReturn<T extends SparePartUpdateManyAndReturnArgs>(args: SelectSubset<T, SparePartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SparePart.
     * @param {SparePartUpsertArgs} args - Arguments to update or create a SparePart.
     * @example
     * // Update or create a SparePart
     * const sparePart = await prisma.sparePart.upsert({
     *   create: {
     *     // ... data to create a SparePart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SparePart we want to update
     *   }
     * })
     */
    upsert<T extends SparePartUpsertArgs>(args: SelectSubset<T, SparePartUpsertArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpareParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartCountArgs} args - Arguments to filter SpareParts to count.
     * @example
     * // Count the number of SpareParts
     * const count = await prisma.sparePart.count({
     *   where: {
     *     // ... the filter for the SpareParts we want to count
     *   }
     * })
    **/
    count<T extends SparePartCountArgs>(
      args?: Subset<T, SparePartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SparePartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SparePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SparePartAggregateArgs>(args: Subset<T, SparePartAggregateArgs>): Prisma.PrismaPromise<GetSparePartAggregateType<T>>

    /**
     * Group by SparePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartGroupByArgs} args - Group by arguments.
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
      T extends SparePartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SparePartGroupByArgs['orderBy'] }
        : { orderBy?: SparePartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SparePartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparePartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SparePart model
   */
  readonly fields: SparePartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SparePart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SparePartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ServiceReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceReportDefaultArgs<ExtArgs>>): Prisma__ServiceReportClient<$Result.GetResult<Prisma.$ServiceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SparePart model
   */
  interface SparePartFieldRefs {
    readonly id: FieldRef<"SparePart", 'String'>
    readonly reportId: FieldRef<"SparePart", 'String'>
    readonly name: FieldRef<"SparePart", 'String'>
    readonly quantity: FieldRef<"SparePart", 'Int'>
    readonly unitPrice: FieldRef<"SparePart", 'Decimal'>
    readonly totalPrice: FieldRef<"SparePart", 'Decimal'>
    readonly notes: FieldRef<"SparePart", 'String'>
    readonly createdAt: FieldRef<"SparePart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SparePart findUnique
   */
  export type SparePartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart findUniqueOrThrow
   */
  export type SparePartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart findFirst
   */
  export type SparePartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpareParts.
     */
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * SparePart findFirstOrThrow
   */
  export type SparePartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpareParts.
     */
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * SparePart findMany
   */
  export type SparePartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SpareParts to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * SparePart create
   */
  export type SparePartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * The data needed to create a SparePart.
     */
    data: XOR<SparePartCreateInput, SparePartUncheckedCreateInput>
  }

  /**
   * SparePart createMany
   */
  export type SparePartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpareParts.
     */
    data: SparePartCreateManyInput | SparePartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SparePart createManyAndReturn
   */
  export type SparePartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * The data used to create many SpareParts.
     */
    data: SparePartCreateManyInput | SparePartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparePart update
   */
  export type SparePartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * The data needed to update a SparePart.
     */
    data: XOR<SparePartUpdateInput, SparePartUncheckedUpdateInput>
    /**
     * Choose, which SparePart to update.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart updateMany
   */
  export type SparePartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpareParts.
     */
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyInput>
    /**
     * Filter which SpareParts to update
     */
    where?: SparePartWhereInput
    /**
     * Limit how many SpareParts to update.
     */
    limit?: number
  }

  /**
   * SparePart updateManyAndReturn
   */
  export type SparePartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * The data used to update SpareParts.
     */
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyInput>
    /**
     * Filter which SpareParts to update
     */
    where?: SparePartWhereInput
    /**
     * Limit how many SpareParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparePart upsert
   */
  export type SparePartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * The filter to search for the SparePart to update in case it exists.
     */
    where: SparePartWhereUniqueInput
    /**
     * In case the SparePart found by the `where` argument doesn't exist, create a new SparePart with this data.
     */
    create: XOR<SparePartCreateInput, SparePartUncheckedCreateInput>
    /**
     * In case the SparePart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SparePartUpdateInput, SparePartUncheckedUpdateInput>
  }

  /**
   * SparePart delete
   */
  export type SparePartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter which SparePart to delete.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart deleteMany
   */
  export type SparePartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpareParts to delete
     */
    where?: SparePartWhereInput
    /**
     * Limit how many SpareParts to delete.
     */
    limit?: number
  }

  /**
   * SparePart without action
   */
  export type SparePartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
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
    notes: string | null
    technicianId: string | null
    serviceId: string | null
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
    notes: string | null
    technicianId: string | null
    serviceId: string | null
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
    notes: number
    technicianId: number
    serviceId: number
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
    notes?: true
    technicianId?: true
    serviceId?: true
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
    notes?: true
    technicianId?: true
    serviceId?: true
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
    notes?: true
    technicianId?: true
    serviceId?: true
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
    notes: string | null
    technicianId: string
    serviceId: string
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
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    method?: boolean
    amountPaid?: boolean
    sparePartsCost?: boolean
    debtAmount?: boolean
    hasDebt?: boolean
    notes?: boolean
    technicianId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "amountPaid" | "sparePartsCost" | "debtAmount" | "hasDebt" | "notes" | "technicianId" | "serviceId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      technician: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      method: $Enums.PaymentMethod
      amountPaid: Prisma.Decimal
      sparePartsCost: Prisma.Decimal
      debtAmount: Prisma.Decimal
      hasDebt: boolean
      notes: string | null
      technicianId: string
      serviceId: string
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
    readonly notes: FieldRef<"Payment", 'String'>
    readonly technicianId: FieldRef<"Payment", 'String'>
    readonly serviceId: FieldRef<"Payment", 'String'>
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceReportScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    finalReport: 'finalReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceReportScalarFieldEnum = (typeof ServiceReportScalarFieldEnum)[keyof typeof ServiceReportScalarFieldEnum]


  export const ServicePhotoScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    url: 'url',
    technicalNotes: 'technicalNotes',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type ServicePhotoScalarFieldEnum = (typeof ServicePhotoScalarFieldEnum)[keyof typeof ServicePhotoScalarFieldEnum]


  export const SparePartScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    name: 'name',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SparePartScalarFieldEnum = (typeof SparePartScalarFieldEnum)[keyof typeof SparePartScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    method: 'method',
    amountPaid: 'amountPaid',
    sparePartsCost: 'sparePartsCost',
    debtAmount: 'debtAmount',
    hasDebt: 'hasDebt',
    notes: 'notes',
    technicianId: 'technicianId',
    serviceId: 'serviceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


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
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    closedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<ServiceCategoryNullableScalarRelationFilter, ServiceCategoryWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    report?: XOR<ServiceReportNullableScalarRelationFilter, ServiceReportWhereInput> | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technician?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    closedBy?: UserOrderByWithRelationInput
    category?: ServiceCategoryOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    report?: ServiceReportOrderByWithRelationInput
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
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    closedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<ServiceCategoryNullableScalarRelationFilter, ServiceCategoryWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    report?: XOR<ServiceReportNullableScalarRelationFilter, ServiceReportWhereInput> | null
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
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServiceReportWhereInput = {
    AND?: ServiceReportWhereInput | ServiceReportWhereInput[]
    OR?: ServiceReportWhereInput[]
    NOT?: ServiceReportWhereInput | ServiceReportWhereInput[]
    id?: StringFilter<"ServiceReport"> | string
    serviceId?: StringFilter<"ServiceReport"> | string
    finalReport?: StringFilter<"ServiceReport"> | string
    createdAt?: DateTimeFilter<"ServiceReport"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceReport"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    photos?: ServicePhotoListRelationFilter
    spareParts?: SparePartListRelationFilter
  }

  export type ServiceReportOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    finalReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    photos?: ServicePhotoOrderByRelationAggregateInput
    spareParts?: SparePartOrderByRelationAggregateInput
  }

  export type ServiceReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    AND?: ServiceReportWhereInput | ServiceReportWhereInput[]
    OR?: ServiceReportWhereInput[]
    NOT?: ServiceReportWhereInput | ServiceReportWhereInput[]
    finalReport?: StringFilter<"ServiceReport"> | string
    createdAt?: DateTimeFilter<"ServiceReport"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceReport"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    photos?: ServicePhotoListRelationFilter
    spareParts?: SparePartListRelationFilter
  }, "id" | "serviceId">

  export type ServiceReportOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    finalReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceReportCountOrderByAggregateInput
    _max?: ServiceReportMaxOrderByAggregateInput
    _min?: ServiceReportMinOrderByAggregateInput
  }

  export type ServiceReportScalarWhereWithAggregatesInput = {
    AND?: ServiceReportScalarWhereWithAggregatesInput | ServiceReportScalarWhereWithAggregatesInput[]
    OR?: ServiceReportScalarWhereWithAggregatesInput[]
    NOT?: ServiceReportScalarWhereWithAggregatesInput | ServiceReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceReport"> | string
    serviceId?: StringWithAggregatesFilter<"ServiceReport"> | string
    finalReport?: StringWithAggregatesFilter<"ServiceReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceReport"> | Date | string
  }

  export type ServicePhotoWhereInput = {
    AND?: ServicePhotoWhereInput | ServicePhotoWhereInput[]
    OR?: ServicePhotoWhereInput[]
    NOT?: ServicePhotoWhereInput | ServicePhotoWhereInput[]
    id?: StringFilter<"ServicePhoto"> | string
    reportId?: StringFilter<"ServicePhoto"> | string
    url?: StringFilter<"ServicePhoto"> | string
    technicalNotes?: StringNullableFilter<"ServicePhoto"> | string | null
    order?: IntFilter<"ServicePhoto"> | number
    createdAt?: DateTimeFilter<"ServicePhoto"> | Date | string
    report?: XOR<ServiceReportScalarRelationFilter, ServiceReportWhereInput>
  }

  export type ServicePhotoOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    technicalNotes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    report?: ServiceReportOrderByWithRelationInput
  }

  export type ServicePhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicePhotoWhereInput | ServicePhotoWhereInput[]
    OR?: ServicePhotoWhereInput[]
    NOT?: ServicePhotoWhereInput | ServicePhotoWhereInput[]
    reportId?: StringFilter<"ServicePhoto"> | string
    url?: StringFilter<"ServicePhoto"> | string
    technicalNotes?: StringNullableFilter<"ServicePhoto"> | string | null
    order?: IntFilter<"ServicePhoto"> | number
    createdAt?: DateTimeFilter<"ServicePhoto"> | Date | string
    report?: XOR<ServiceReportScalarRelationFilter, ServiceReportWhereInput>
  }, "id">

  export type ServicePhotoOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    technicalNotes?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: ServicePhotoCountOrderByAggregateInput
    _avg?: ServicePhotoAvgOrderByAggregateInput
    _max?: ServicePhotoMaxOrderByAggregateInput
    _min?: ServicePhotoMinOrderByAggregateInput
    _sum?: ServicePhotoSumOrderByAggregateInput
  }

  export type ServicePhotoScalarWhereWithAggregatesInput = {
    AND?: ServicePhotoScalarWhereWithAggregatesInput | ServicePhotoScalarWhereWithAggregatesInput[]
    OR?: ServicePhotoScalarWhereWithAggregatesInput[]
    NOT?: ServicePhotoScalarWhereWithAggregatesInput | ServicePhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServicePhoto"> | string
    reportId?: StringWithAggregatesFilter<"ServicePhoto"> | string
    url?: StringWithAggregatesFilter<"ServicePhoto"> | string
    technicalNotes?: StringNullableWithAggregatesFilter<"ServicePhoto"> | string | null
    order?: IntWithAggregatesFilter<"ServicePhoto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ServicePhoto"> | Date | string
  }

  export type SparePartWhereInput = {
    AND?: SparePartWhereInput | SparePartWhereInput[]
    OR?: SparePartWhereInput[]
    NOT?: SparePartWhereInput | SparePartWhereInput[]
    id?: StringFilter<"SparePart"> | string
    reportId?: StringFilter<"SparePart"> | string
    name?: StringFilter<"SparePart"> | string
    quantity?: IntFilter<"SparePart"> | number
    unitPrice?: DecimalFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"SparePart"> | string | null
    createdAt?: DateTimeFilter<"SparePart"> | Date | string
    report?: XOR<ServiceReportScalarRelationFilter, ServiceReportWhereInput>
  }

  export type SparePartOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    report?: ServiceReportOrderByWithRelationInput
  }

  export type SparePartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SparePartWhereInput | SparePartWhereInput[]
    OR?: SparePartWhereInput[]
    NOT?: SparePartWhereInput | SparePartWhereInput[]
    reportId?: StringFilter<"SparePart"> | string
    name?: StringFilter<"SparePart"> | string
    quantity?: IntFilter<"SparePart"> | number
    unitPrice?: DecimalFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"SparePart"> | string | null
    createdAt?: DateTimeFilter<"SparePart"> | Date | string
    report?: XOR<ServiceReportScalarRelationFilter, ServiceReportWhereInput>
  }, "id">

  export type SparePartOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SparePartCountOrderByAggregateInput
    _avg?: SparePartAvgOrderByAggregateInput
    _max?: SparePartMaxOrderByAggregateInput
    _min?: SparePartMinOrderByAggregateInput
    _sum?: SparePartSumOrderByAggregateInput
  }

  export type SparePartScalarWhereWithAggregatesInput = {
    AND?: SparePartScalarWhereWithAggregatesInput | SparePartScalarWhereWithAggregatesInput[]
    OR?: SparePartScalarWhereWithAggregatesInput[]
    NOT?: SparePartScalarWhereWithAggregatesInput | SparePartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SparePart"> | string
    reportId?: StringWithAggregatesFilter<"SparePart"> | string
    name?: StringWithAggregatesFilter<"SparePart"> | string
    quantity?: IntWithAggregatesFilter<"SparePart"> | number
    unitPrice?: DecimalWithAggregatesFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"SparePart"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SparePart"> | Date | string
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
    notes?: StringNullableFilter<"Payment"> | string | null
    technicianId?: StringFilter<"Payment"> | string
    serviceId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    notes?: SortOrderInput | SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technician?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
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
    notes?: StringNullableFilter<"Payment"> | string | null
    technicianId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    technician?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "serviceId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    notes?: SortOrderInput | SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
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
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    technicianId?: StringWithAggregatesFilter<"Payment"> | string
    serviceId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceReportCreateInput = {
    id?: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutReportInput
    photos?: ServicePhotoCreateNestedManyWithoutReportInput
    spareParts?: SparePartCreateNestedManyWithoutReportInput
  }

  export type ServiceReportUncheckedCreateInput = {
    id?: string
    serviceId: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ServicePhotoUncheckedCreateNestedManyWithoutReportInput
    spareParts?: SparePartUncheckedCreateNestedManyWithoutReportInput
  }

  export type ServiceReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutReportNestedInput
    photos?: ServicePhotoUpdateManyWithoutReportNestedInput
    spareParts?: SparePartUpdateManyWithoutReportNestedInput
  }

  export type ServiceReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ServicePhotoUncheckedUpdateManyWithoutReportNestedInput
    spareParts?: SparePartUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ServiceReportCreateManyInput = {
    id?: string
    serviceId: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePhotoCreateInput = {
    id?: string
    url: string
    technicalNotes?: string | null
    order?: number
    createdAt?: Date | string
    report: ServiceReportCreateNestedOneWithoutPhotosInput
  }

  export type ServicePhotoUncheckedCreateInput = {
    id?: string
    reportId: string
    url: string
    technicalNotes?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ServicePhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ServiceReportUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type ServicePhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePhotoCreateManyInput = {
    id?: string
    reportId: string
    url: string
    technicalNotes?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ServicePhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartCreateInput = {
    id?: string
    name: string
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    report: ServiceReportCreateNestedOneWithoutSparePartsInput
  }

  export type SparePartUncheckedCreateInput = {
    id?: string
    reportId: string
    name: string
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SparePartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ServiceReportUpdateOneRequiredWithoutSparePartsNestedInput
  }

  export type SparePartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartCreateManyInput = {
    id?: string
    reportId: string
    name: string
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SparePartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutPaymentsInput
    service: ServiceCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    notes?: string | null
    technicianId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    notes?: string | null
    technicianId: string
    serviceId: string
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
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
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

  export type ServiceReportNullableScalarRelationFilter = {
    is?: ServiceReportWhereInput | null
    isNot?: ServiceReportWhereInput | null
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

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServicePhotoListRelationFilter = {
    every?: ServicePhotoWhereInput
    some?: ServicePhotoWhereInput
    none?: ServicePhotoWhereInput
  }

  export type SparePartListRelationFilter = {
    every?: SparePartWhereInput
    some?: SparePartWhereInput
    none?: SparePartWhereInput
  }

  export type ServicePhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SparePartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceReportCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    finalReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceReportMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    finalReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceReportMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    finalReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ServiceReportScalarRelationFilter = {
    is?: ServiceReportWhereInput
    isNot?: ServiceReportWhereInput
  }

  export type ServicePhotoCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    technicalNotes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePhotoAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ServicePhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    technicalNotes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePhotoMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    technicalNotes?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePhotoSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type SparePartCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SparePartAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type SparePartMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SparePartMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SparePartSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
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

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amountPaid?: SortOrder
    sparePartsCost?: SortOrder
    debtAmount?: SortOrder
    hasDebt?: SortOrder
    notes?: SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
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
    notes?: SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
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
    notes?: SortOrder
    technicianId?: SortOrder
    serviceId?: SortOrder
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

  export type ServiceCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput> | ServiceCreateWithoutClientInput[] | ServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClientInput | ServiceCreateOrConnectWithoutClientInput[]
    createMany?: ServiceCreateManyClientInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput> | ServiceCreateWithoutClientInput[] | ServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutClientInput | ServiceCreateOrConnectWithoutClientInput[]
    createMany?: ServiceCreateManyClientInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
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

  export type ServiceReportCreateNestedOneWithoutServiceInput = {
    create?: XOR<ServiceReportCreateWithoutServiceInput, ServiceReportUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutServiceInput
    connect?: ServiceReportWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutServiceInput = {
    create?: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutServiceInput
    connect?: PaymentWhereUniqueInput
  }

  export type ServiceReportUncheckedCreateNestedOneWithoutServiceInput = {
    create?: XOR<ServiceReportCreateWithoutServiceInput, ServiceReportUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutServiceInput
    connect?: ServiceReportWhereUniqueInput
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

  export type ServiceReportUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ServiceReportCreateWithoutServiceInput, ServiceReportUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutServiceInput
    upsert?: ServiceReportUpsertWithoutServiceInput
    disconnect?: ServiceReportWhereInput | boolean
    delete?: ServiceReportWhereInput | boolean
    connect?: ServiceReportWhereUniqueInput
    update?: XOR<XOR<ServiceReportUpdateToOneWithWhereWithoutServiceInput, ServiceReportUpdateWithoutServiceInput>, ServiceReportUncheckedUpdateWithoutServiceInput>
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

  export type ServiceReportUncheckedUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ServiceReportCreateWithoutServiceInput, ServiceReportUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutServiceInput
    upsert?: ServiceReportUpsertWithoutServiceInput
    disconnect?: ServiceReportWhereInput | boolean
    delete?: ServiceReportWhereInput | boolean
    connect?: ServiceReportWhereUniqueInput
    update?: XOR<XOR<ServiceReportUpdateToOneWithWhereWithoutServiceInput, ServiceReportUpdateWithoutServiceInput>, ServiceReportUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceCreateNestedOneWithoutReportInput = {
    create?: XOR<ServiceCreateWithoutReportInput, ServiceUncheckedCreateWithoutReportInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReportInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServicePhotoCreateNestedManyWithoutReportInput = {
    create?: XOR<ServicePhotoCreateWithoutReportInput, ServicePhotoUncheckedCreateWithoutReportInput> | ServicePhotoCreateWithoutReportInput[] | ServicePhotoUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ServicePhotoCreateOrConnectWithoutReportInput | ServicePhotoCreateOrConnectWithoutReportInput[]
    createMany?: ServicePhotoCreateManyReportInputEnvelope
    connect?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
  }

  export type SparePartCreateNestedManyWithoutReportInput = {
    create?: XOR<SparePartCreateWithoutReportInput, SparePartUncheckedCreateWithoutReportInput> | SparePartCreateWithoutReportInput[] | SparePartUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutReportInput | SparePartCreateOrConnectWithoutReportInput[]
    createMany?: SparePartCreateManyReportInputEnvelope
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
  }

  export type ServicePhotoUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<ServicePhotoCreateWithoutReportInput, ServicePhotoUncheckedCreateWithoutReportInput> | ServicePhotoCreateWithoutReportInput[] | ServicePhotoUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ServicePhotoCreateOrConnectWithoutReportInput | ServicePhotoCreateOrConnectWithoutReportInput[]
    createMany?: ServicePhotoCreateManyReportInputEnvelope
    connect?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
  }

  export type SparePartUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<SparePartCreateWithoutReportInput, SparePartUncheckedCreateWithoutReportInput> | SparePartCreateWithoutReportInput[] | SparePartUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutReportInput | SparePartCreateOrConnectWithoutReportInput[]
    createMany?: SparePartCreateManyReportInputEnvelope
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
  }

  export type ServiceUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<ServiceCreateWithoutReportInput, ServiceUncheckedCreateWithoutReportInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReportInput
    upsert?: ServiceUpsertWithoutReportInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutReportInput, ServiceUpdateWithoutReportInput>, ServiceUncheckedUpdateWithoutReportInput>
  }

  export type ServicePhotoUpdateManyWithoutReportNestedInput = {
    create?: XOR<ServicePhotoCreateWithoutReportInput, ServicePhotoUncheckedCreateWithoutReportInput> | ServicePhotoCreateWithoutReportInput[] | ServicePhotoUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ServicePhotoCreateOrConnectWithoutReportInput | ServicePhotoCreateOrConnectWithoutReportInput[]
    upsert?: ServicePhotoUpsertWithWhereUniqueWithoutReportInput | ServicePhotoUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: ServicePhotoCreateManyReportInputEnvelope
    set?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    disconnect?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    delete?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    connect?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    update?: ServicePhotoUpdateWithWhereUniqueWithoutReportInput | ServicePhotoUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: ServicePhotoUpdateManyWithWhereWithoutReportInput | ServicePhotoUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: ServicePhotoScalarWhereInput | ServicePhotoScalarWhereInput[]
  }

  export type SparePartUpdateManyWithoutReportNestedInput = {
    create?: XOR<SparePartCreateWithoutReportInput, SparePartUncheckedCreateWithoutReportInput> | SparePartCreateWithoutReportInput[] | SparePartUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutReportInput | SparePartCreateOrConnectWithoutReportInput[]
    upsert?: SparePartUpsertWithWhereUniqueWithoutReportInput | SparePartUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: SparePartCreateManyReportInputEnvelope
    set?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    disconnect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    delete?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    update?: SparePartUpdateWithWhereUniqueWithoutReportInput | SparePartUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: SparePartUpdateManyWithWhereWithoutReportInput | SparePartUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
  }

  export type ServicePhotoUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<ServicePhotoCreateWithoutReportInput, ServicePhotoUncheckedCreateWithoutReportInput> | ServicePhotoCreateWithoutReportInput[] | ServicePhotoUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ServicePhotoCreateOrConnectWithoutReportInput | ServicePhotoCreateOrConnectWithoutReportInput[]
    upsert?: ServicePhotoUpsertWithWhereUniqueWithoutReportInput | ServicePhotoUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: ServicePhotoCreateManyReportInputEnvelope
    set?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    disconnect?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    delete?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    connect?: ServicePhotoWhereUniqueInput | ServicePhotoWhereUniqueInput[]
    update?: ServicePhotoUpdateWithWhereUniqueWithoutReportInput | ServicePhotoUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: ServicePhotoUpdateManyWithWhereWithoutReportInput | ServicePhotoUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: ServicePhotoScalarWhereInput | ServicePhotoScalarWhereInput[]
  }

  export type SparePartUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<SparePartCreateWithoutReportInput, SparePartUncheckedCreateWithoutReportInput> | SparePartCreateWithoutReportInput[] | SparePartUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutReportInput | SparePartCreateOrConnectWithoutReportInput[]
    upsert?: SparePartUpsertWithWhereUniqueWithoutReportInput | SparePartUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: SparePartCreateManyReportInputEnvelope
    set?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    disconnect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    delete?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    update?: SparePartUpdateWithWhereUniqueWithoutReportInput | SparePartUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: SparePartUpdateManyWithWhereWithoutReportInput | SparePartUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
  }

  export type ServiceReportCreateNestedOneWithoutPhotosInput = {
    create?: XOR<ServiceReportCreateWithoutPhotosInput, ServiceReportUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutPhotosInput
    connect?: ServiceReportWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceReportUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<ServiceReportCreateWithoutPhotosInput, ServiceReportUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutPhotosInput
    upsert?: ServiceReportUpsertWithoutPhotosInput
    connect?: ServiceReportWhereUniqueInput
    update?: XOR<XOR<ServiceReportUpdateToOneWithWhereWithoutPhotosInput, ServiceReportUpdateWithoutPhotosInput>, ServiceReportUncheckedUpdateWithoutPhotosInput>
  }

  export type ServiceReportCreateNestedOneWithoutSparePartsInput = {
    create?: XOR<ServiceReportCreateWithoutSparePartsInput, ServiceReportUncheckedCreateWithoutSparePartsInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutSparePartsInput
    connect?: ServiceReportWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ServiceReportUpdateOneRequiredWithoutSparePartsNestedInput = {
    create?: XOR<ServiceReportCreateWithoutSparePartsInput, ServiceReportUncheckedCreateWithoutSparePartsInput>
    connectOrCreate?: ServiceReportCreateOrConnectWithoutSparePartsInput
    upsert?: ServiceReportUpsertWithoutSparePartsInput
    connect?: ServiceReportWhereUniqueInput
    update?: XOR<XOR<ServiceReportUpdateToOneWithWhereWithoutSparePartsInput, ServiceReportUpdateWithoutSparePartsInput>, ServiceReportUncheckedUpdateWithoutSparePartsInput>
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

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
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

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
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
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
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
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutTechnicianInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    notes?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTechnicianInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTechnicianInput, PaymentUncheckedCreateWithoutTechnicianInput>
  }

  export type PaymentCreateManyTechnicianInputEnvelope = {
    data: PaymentCreateManyTechnicianInput | PaymentCreateManyTechnicianInput[]
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
    notes?: StringNullableFilter<"Payment"> | string | null
    technicianId?: StringFilter<"Payment"> | string
    serviceId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutClientInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutClientInput, ServiceUncheckedCreateWithoutClientInput>
  }

  export type ServiceCreateManyClientInputEnvelope = {
    data: ServiceCreateManyClientInput | ServiceCreateManyClientInput[]
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
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
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutServiceInput = {
    id?: string
    method: $Enums.PaymentMethod
    amountPaid: Decimal | DecimalJsLike | number | string
    sparePartsCost?: Decimal | DecimalJsLike | number | string
    debtAmount?: Decimal | DecimalJsLike | number | string
    hasDebt?: boolean
    notes?: string | null
    technicianId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutServiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutServiceInput, PaymentUncheckedCreateWithoutServiceInput>
  }

  export type ServiceReportCreateWithoutServiceInput = {
    id?: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ServicePhotoCreateNestedManyWithoutReportInput
    spareParts?: SparePartCreateNestedManyWithoutReportInput
  }

  export type ServiceReportUncheckedCreateWithoutServiceInput = {
    id?: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ServicePhotoUncheckedCreateNestedManyWithoutReportInput
    spareParts?: SparePartUncheckedCreateNestedManyWithoutReportInput
  }

  export type ServiceReportCreateOrConnectWithoutServiceInput = {
    where: ServiceReportWhereUniqueInput
    create: XOR<ServiceReportCreateWithoutServiceInput, ServiceReportUncheckedCreateWithoutServiceInput>
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
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technicianId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceReportUpsertWithoutServiceInput = {
    update: XOR<ServiceReportUpdateWithoutServiceInput, ServiceReportUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceReportCreateWithoutServiceInput, ServiceReportUncheckedCreateWithoutServiceInput>
    where?: ServiceReportWhereInput
  }

  export type ServiceReportUpdateToOneWithWhereWithoutServiceInput = {
    where?: ServiceReportWhereInput
    data: XOR<ServiceReportUpdateWithoutServiceInput, ServiceReportUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceReportUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ServicePhotoUpdateManyWithoutReportNestedInput
    spareParts?: SparePartUpdateManyWithoutReportNestedInput
  }

  export type ServiceReportUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ServicePhotoUncheckedUpdateManyWithoutReportNestedInput
    spareParts?: SparePartUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ServiceCreateWithoutReportInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    payment?: PaymentCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutReportInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutReportInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutReportInput, ServiceUncheckedCreateWithoutReportInput>
  }

  export type ServicePhotoCreateWithoutReportInput = {
    id?: string
    url: string
    technicalNotes?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ServicePhotoUncheckedCreateWithoutReportInput = {
    id?: string
    url: string
    technicalNotes?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ServicePhotoCreateOrConnectWithoutReportInput = {
    where: ServicePhotoWhereUniqueInput
    create: XOR<ServicePhotoCreateWithoutReportInput, ServicePhotoUncheckedCreateWithoutReportInput>
  }

  export type ServicePhotoCreateManyReportInputEnvelope = {
    data: ServicePhotoCreateManyReportInput | ServicePhotoCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type SparePartCreateWithoutReportInput = {
    id?: string
    name: string
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SparePartUncheckedCreateWithoutReportInput = {
    id?: string
    name: string
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SparePartCreateOrConnectWithoutReportInput = {
    where: SparePartWhereUniqueInput
    create: XOR<SparePartCreateWithoutReportInput, SparePartUncheckedCreateWithoutReportInput>
  }

  export type SparePartCreateManyReportInputEnvelope = {
    data: SparePartCreateManyReportInput | SparePartCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithoutReportInput = {
    update: XOR<ServiceUpdateWithoutReportInput, ServiceUncheckedUpdateWithoutReportInput>
    create: XOR<ServiceCreateWithoutReportInput, ServiceUncheckedCreateWithoutReportInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutReportInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutReportInput, ServiceUncheckedUpdateWithoutReportInput>
  }

  export type ServiceUpdateWithoutReportInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutReportInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type ServicePhotoUpsertWithWhereUniqueWithoutReportInput = {
    where: ServicePhotoWhereUniqueInput
    update: XOR<ServicePhotoUpdateWithoutReportInput, ServicePhotoUncheckedUpdateWithoutReportInput>
    create: XOR<ServicePhotoCreateWithoutReportInput, ServicePhotoUncheckedCreateWithoutReportInput>
  }

  export type ServicePhotoUpdateWithWhereUniqueWithoutReportInput = {
    where: ServicePhotoWhereUniqueInput
    data: XOR<ServicePhotoUpdateWithoutReportInput, ServicePhotoUncheckedUpdateWithoutReportInput>
  }

  export type ServicePhotoUpdateManyWithWhereWithoutReportInput = {
    where: ServicePhotoScalarWhereInput
    data: XOR<ServicePhotoUpdateManyMutationInput, ServicePhotoUncheckedUpdateManyWithoutReportInput>
  }

  export type ServicePhotoScalarWhereInput = {
    AND?: ServicePhotoScalarWhereInput | ServicePhotoScalarWhereInput[]
    OR?: ServicePhotoScalarWhereInput[]
    NOT?: ServicePhotoScalarWhereInput | ServicePhotoScalarWhereInput[]
    id?: StringFilter<"ServicePhoto"> | string
    reportId?: StringFilter<"ServicePhoto"> | string
    url?: StringFilter<"ServicePhoto"> | string
    technicalNotes?: StringNullableFilter<"ServicePhoto"> | string | null
    order?: IntFilter<"ServicePhoto"> | number
    createdAt?: DateTimeFilter<"ServicePhoto"> | Date | string
  }

  export type SparePartUpsertWithWhereUniqueWithoutReportInput = {
    where: SparePartWhereUniqueInput
    update: XOR<SparePartUpdateWithoutReportInput, SparePartUncheckedUpdateWithoutReportInput>
    create: XOR<SparePartCreateWithoutReportInput, SparePartUncheckedCreateWithoutReportInput>
  }

  export type SparePartUpdateWithWhereUniqueWithoutReportInput = {
    where: SparePartWhereUniqueInput
    data: XOR<SparePartUpdateWithoutReportInput, SparePartUncheckedUpdateWithoutReportInput>
  }

  export type SparePartUpdateManyWithWhereWithoutReportInput = {
    where: SparePartScalarWhereInput
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyWithoutReportInput>
  }

  export type SparePartScalarWhereInput = {
    AND?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
    OR?: SparePartScalarWhereInput[]
    NOT?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
    id?: StringFilter<"SparePart"> | string
    reportId?: StringFilter<"SparePart"> | string
    name?: StringFilter<"SparePart"> | string
    quantity?: IntFilter<"SparePart"> | number
    unitPrice?: DecimalFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"SparePart"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"SparePart"> | string | null
    createdAt?: DateTimeFilter<"SparePart"> | Date | string
  }

  export type ServiceReportCreateWithoutPhotosInput = {
    id?: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutReportInput
    spareParts?: SparePartCreateNestedManyWithoutReportInput
  }

  export type ServiceReportUncheckedCreateWithoutPhotosInput = {
    id?: string
    serviceId: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spareParts?: SparePartUncheckedCreateNestedManyWithoutReportInput
  }

  export type ServiceReportCreateOrConnectWithoutPhotosInput = {
    where: ServiceReportWhereUniqueInput
    create: XOR<ServiceReportCreateWithoutPhotosInput, ServiceReportUncheckedCreateWithoutPhotosInput>
  }

  export type ServiceReportUpsertWithoutPhotosInput = {
    update: XOR<ServiceReportUpdateWithoutPhotosInput, ServiceReportUncheckedUpdateWithoutPhotosInput>
    create: XOR<ServiceReportCreateWithoutPhotosInput, ServiceReportUncheckedCreateWithoutPhotosInput>
    where?: ServiceReportWhereInput
  }

  export type ServiceReportUpdateToOneWithWhereWithoutPhotosInput = {
    where?: ServiceReportWhereInput
    data: XOR<ServiceReportUpdateWithoutPhotosInput, ServiceReportUncheckedUpdateWithoutPhotosInput>
  }

  export type ServiceReportUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutReportNestedInput
    spareParts?: SparePartUpdateManyWithoutReportNestedInput
  }

  export type ServiceReportUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spareParts?: SparePartUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ServiceReportCreateWithoutSparePartsInput = {
    id?: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutReportInput
    photos?: ServicePhotoCreateNestedManyWithoutReportInput
  }

  export type ServiceReportUncheckedCreateWithoutSparePartsInput = {
    id?: string
    serviceId: string
    finalReport: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ServicePhotoUncheckedCreateNestedManyWithoutReportInput
  }

  export type ServiceReportCreateOrConnectWithoutSparePartsInput = {
    where: ServiceReportWhereUniqueInput
    create: XOR<ServiceReportCreateWithoutSparePartsInput, ServiceReportUncheckedCreateWithoutSparePartsInput>
  }

  export type ServiceReportUpsertWithoutSparePartsInput = {
    update: XOR<ServiceReportUpdateWithoutSparePartsInput, ServiceReportUncheckedUpdateWithoutSparePartsInput>
    create: XOR<ServiceReportCreateWithoutSparePartsInput, ServiceReportUncheckedCreateWithoutSparePartsInput>
    where?: ServiceReportWhereInput
  }

  export type ServiceReportUpdateToOneWithWhereWithoutSparePartsInput = {
    where?: ServiceReportWhereInput
    data: XOR<ServiceReportUpdateWithoutSparePartsInput, ServiceReportUncheckedUpdateWithoutSparePartsInput>
  }

  export type ServiceReportUpdateWithoutSparePartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutReportNestedInput
    photos?: ServicePhotoUpdateManyWithoutReportNestedInput
  }

  export type ServiceReportUncheckedUpdateWithoutSparePartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    finalReport?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ServicePhotoUncheckedUpdateManyWithoutReportNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: UserCreateNestedOneWithoutServicesAsTechnicianInput
    client?: ClientCreateNestedOneWithoutServicesInput
    createdBy: UserCreateNestedOneWithoutServicesCreatedInput
    closedBy?: UserCreateNestedOneWithoutServicesClosedInput
    category?: ServiceCategoryCreateNestedOneWithoutServicesInput
    report?: ServiceReportCreateNestedOneWithoutServiceInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ServiceReportUncheckedCreateNestedOneWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPaymentInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPaymentInput, ServiceUncheckedCreateWithoutPaymentInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    notes?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sparePartsCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    debtAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    category?: ServiceCategoryUpdateOneWithoutServicesNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutServicesAsTechnicianNestedInput
    client?: ClientUpdateOneWithoutServicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutServicesCreatedNestedInput
    closedBy?: UserUpdateOneWithoutServicesClosedNestedInput
    payment?: PaymentUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutServiceNestedInput
    report?: ServiceReportUncheckedUpdateOneWithoutServiceNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePhotoCreateManyReportInput = {
    id?: string
    url: string
    technicalNotes?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type SparePartCreateManyReportInput = {
    id?: string
    name: string
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ServicePhotoUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePhotoUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePhotoUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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