/* 

  BELOW SIMULATES THE DATABASE

*/

import bcrypt, { hash } from "bcrypt";

const users = [{ email: "steffen@localhost.com", password: "$2b$10$qDi/DE5/pidMf0.oWWrDlut2/9FgnW.MWdgdePQhgEJQX15uBciZC" }];

async function addUser(email, password) {
  console.log("addUser()");

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  users.push({email: email, password: hashedPassword});
  console.log(users);

}

export default {
  addUser,
};
