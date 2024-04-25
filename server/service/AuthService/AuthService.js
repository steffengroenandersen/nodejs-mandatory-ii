import userRepository from "../../repository/userRepository/userRepository.js";

function createUser(email, password, confirmedPassword) {
  console.log("createUser()");

  if(password !== confirmedPassword){
    console.log("Error: Password does not match");
    return "Error: Password does not match";
  }

  userRepository.addUser(email, password);

  return "User succesfully created!";
}

export default {
  createUser,
};
