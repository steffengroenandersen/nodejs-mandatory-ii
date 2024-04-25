import bcrypt from "bcrypt";
import userRepository from "../../repository/userRepository/userRepository.js";

function createUser(email, password, confirmedPassword) {
  console.log("createUser()");

  if (password !== confirmedPassword) {
    console.log("Error: Password does not match");
    return "Password and confirm password do not match";
  }

  userRepository.addUser(email, password);

  return "User succesfully created!";
}

async function loginUser(email, password) {
  console.log("loginUser()");

  const foundUser = userRepository.getUser(email);
  console.log(email);
  console.log(password);
  console.log(foundUser);

  const isSame = await bcrypt.compare(password, foundUser.password);
  console.log(isSame);
}

export default {
  createUser,
  loginUser,
};
