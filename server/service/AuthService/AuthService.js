import bcrypt from "bcrypt";
import userRepository from "../../repository/userRepository/userRepository.js";
import mailService from "./../mailService/mailService.js"

function createUser(email, password, confirmedPassword) {

  if (password !== confirmedPassword) {
    return "Password and confirm password do not match";
  }

  userRepository.addUser(email, password);
  mailService.sendWelcomeEmail(email);
  return "User succesfully created!";
}

async function loginUser(email, password) {
  try {
    const foundUser = await userRepository.getUser(email);

    const isSame = await bcrypt.compare(password, foundUser.password);

    if (isSame) {
      return { isSame: true, email: foundUser.email, role: foundUser.role };
    } else {
      return { isSame: false };
    }
  } catch (error) {
    console.log(error);
  }
}

export default {
  createUser,
  loginUser,
};
