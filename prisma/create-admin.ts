import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";


const createAdmin = async () => {
    try {
        const name = "Admin User";
        const email = "admin@system.com";
        const password = "adminpassword123";
        const saltRounds = 10;

        console.log("Hashing password...");
        const passwordHash = await bcrypt.hash(password, saltRounds);

        console.log(`Creating user: ${email}`);
        const user = await prisma.orm.public.User.upsert({
            conflictOn: { email },
            create: {
                name,
                email,
                passwordHash,
                role: "ADMIN",
            },
            update: {
                name,
                passwordHash,
                role: "ADMIN",
            },
        });

        console.log("Admin user created successfully:", user.id);
    } catch (error) {
        console.error("Error creating admin user:", error);
    }
};

createAdmin();
