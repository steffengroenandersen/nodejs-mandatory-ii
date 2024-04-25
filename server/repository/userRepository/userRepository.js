/* 

  Below simulates the database

*/

const users = [
  {
    email: "steffen@localhost.com",
    password: "$2b$10$mLJPrtHyZVL1nCMOUfILYeXpbZgkQh8t3NZ5x9RcFhjmEjacoX5R6",
  },
];

/*

  Repository methods

*/
import bcrypt, { hash } from "bcrypt";

async function addUser(email, password) {
  console.log("addUser()");

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  users.push({ email: email, password: hashedPassword });
  console.log(users);
}

function getUser(email) {
  const foundUser = users.find((email) => email === email);
  return foundUser;
}

export default {
  addUser,
  getUser,
};
