import "dotenv/config";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../generated/prisma8/contract.js";
import contractJson from "../generated/prisma8/contract.json"

const connectionString = process.env.DATABASE_URL!;

export const prisma = postgres<Contract>({
  url: connectionString,
  contractJson,
});
