import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:["quary"],
});

export default prisma