import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma";

const connectionString = `${process.env.DIRECT_URL}`;

// Configure connection pool for better performance
const pool = new Pool({
  connectionString,
  max: 10, // Maximum number of connections in the pool
  min: 2, // Minimum number of connections to keep alive
  idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
  connectionTimeoutMillis: 10000, // Timeout after 10 seconds if no connection available
});

const adapter = new PrismaPg(pool);

// Configure Prisma client with logging in development
const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

export { prisma };
