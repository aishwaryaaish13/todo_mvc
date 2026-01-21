import fs from "fs/promises";
import path from "path";

const dbPath = path.resolve("src/db.json");

export const readData = async () => {
  const data = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(data);
};

export const writeData = async (data) => {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
};
