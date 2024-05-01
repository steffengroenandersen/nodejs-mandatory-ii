import db from "./connection.js";

console.log("CREATING DATABASE...");

/* 

  DDL

*/

await db.run(`DROP TABLE IF EXISTS users;`);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT,
    role TEXT
  );
`);

/* 

  DML

*/
console.log("START SEEDING...");
await db.run(
  `INSERT INTO users (email, password, role) VALUES ('steffen@localhost.com', '$2b$10$9a7kScsTgoHkqmjPlOrnY.jCSR4Dqtq/gZ2Oj9UICqwt5dYT7sxJS', 'admin')`
);
await db.run(
  `INSERT INTO users (email, password, role) VALUES ('amanda@localhost.com', '$2b$10$7m.E3AWVCtAO7tBQm2c.9.9DBLDzzTcdmz/HiKGizUQCcdmEvhtKG', 'user')`
);

console.log("SEEDING FINISHED...");

console.log("DATABASE IS READY...");
