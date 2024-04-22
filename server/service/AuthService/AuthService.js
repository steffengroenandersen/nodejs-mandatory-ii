import userRepository from "../../repository/userRepository/userRepository.js";

function createUser(email, password) {
  console.log("createUser()");

  userRepository.addUser(email, password);

  return "User succesfully created!";
}

export default {
  createUser,
};
