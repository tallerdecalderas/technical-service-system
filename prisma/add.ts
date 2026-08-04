import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import { User, $Enums } from "../generated/prisma/client";

type typeUser = User;

async function main() {
  const email = "admin@techservice.com";
  const password = "admin123";

  console.log("Generando hash de contraseña con bcrypt...");
  const passwordHash = await bcrypt.hash(password, 10);

  // Check if admin user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    console.log(
      "El usuario admin ya existe, actualizando su contraseña con bcrypt...",
    );
    const updatedUser: typeUser = await prisma.user.update({
      where: { email },
      data: {
        passwordHash,
        role: $Enums.Role.ADMIN,
        isActive: true,
      },
    });
    console.log("USER ACTUALIZADO", updatedUser);
  } else {
    console.log("Creando nuevo usuario admin...");
    const user: typeUser = await prisma.user.create({
      data: {
        name: "admin",
        email,
        passwordHash,
        role: $Enums.Role.ADMIN,
        isActive: true,
        phone: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log("USER CREADO", user);
  }
}

main()
  .catch((e) => {
    console.error("Error en la ejecución:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
