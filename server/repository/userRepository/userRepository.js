import db from "../../database/connection.js";
import bcrypt, { hash } from "bcrypt";

async function addUser(email, password) {
  console.log("addUser()");

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await db.run(`INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}')`);
}

async function getUser(email) {
  console.log("getUser()");

  const foundUser = await db.get(`SELECT * FROM users WHERE email = '${email}'`);

  return foundUser;
}

export default {
  addUser,
  getUser,
};
