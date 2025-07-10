import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

import { articleTable, authorTable } from "../schema";
import { seedArticles } from "./articles";
import { seedAuthors } from "./authors";
import logger from "../../libs/logger";

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
  await db.transaction(async (tx) => {
    await tx.delete(authorTable);
    await tx.delete(articleTable);

    await tx.insert(authorTable).values(Object.values(seedAuthors));
    logger.info("✅ Authors inserted to DB!");

    await tx.insert(articleTable).values(seedArticles);
    logger.info("✅ Articles inserted to DB!");
  });
}

main().catch((err) => {
  logger.error("❌ Seeding failed:", err);
  process.exit(1);
});
