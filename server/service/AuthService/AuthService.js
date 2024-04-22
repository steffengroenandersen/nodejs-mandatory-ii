import userModel from "../../database/User/userModel.js"


function createUser(email, password) {
  console.log("createUser()");

  userModel.addUser({email, password});

  return "User succesfully created!";
}

export default {
  createUser,
};
