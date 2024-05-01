import sgMail from "@sendgrid/mail";
import "dotenv/config";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendWelcomeEmail(recipient) {
  const msg = {
    to: recipient,
    from: "steffengroenandersen@gmail.com",
    subject: "Welcome to my Mandatory II Application",
    text: "It is build with NodeSJ, Express, SQLite and Svelte.",
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default {
  sendWelcomeEmail,
};
