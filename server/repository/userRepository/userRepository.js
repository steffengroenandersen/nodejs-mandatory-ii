import db from "../../database/connection.js";
import bcrypt, { hash } from "bcrypt";

async function addUser(email, password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await db.run(`INSERT INTO users (email, password, role) VALUES ('${email}', '${hashedPassword}', 'user')`);
}

async function getUser(email) {
  const foundUser = await db.get(`SELECT * FROM users WHERE email = '${email}'`);
  return foundUser;
}

async function getAllUsers() {
  const users = await db.all(`SELECT email, role FROM users`);
  return users;
}

export default {
  addUser,
  getUser,
  getAllUsers,
};
