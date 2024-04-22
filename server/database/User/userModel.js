/* 

  BELOW SIMULATES THE DATABASE

*/

const users = [{ email: "steffen@localhost.com", password: "encrypted?" }];

function addUser(newUser) {
  console.log("addUser()");
  users.push(newUser);
  
  console.log(users);
}

export default {
  addUser,
};
