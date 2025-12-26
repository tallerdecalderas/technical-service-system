import { validateCredentials } from "./lib/auth";
import { prisma } from "./lib/prisma";

async function main() {
  try {
    const user = await validateCredentials("admin@techservice.com", "admin123");
    if (user) {
      console.log("Login Successful:", user);
    } else {
      console.error("Login Failed: Invalid credentials or user inactive");
      process.exit(1);
    }
  } catch (error) {
    console.error("Login Error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
