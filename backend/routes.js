const express = require("express");
const transporter = require("./utils/transporter");
const routes = express.Router();
require("dotenv").config();

routes.post("/", (request, response) => {
  const data = request.body.data;
  const envios = data.map(async (email) => {
    return await transporter.sendMail({
      from: "noreply",
      to: email.email,
      subject: "Sorteio",
      text: `Olá, ${email.name}! Você sorteou: ${email.amigo} como amigo secreto.`,
      html: `<b>Olá, ${email.name}! Você sorteou ${email.amigo} como amigo secreto.</b>`,
    });
  });

  Promise.all(envios).then(
    () => {
      return response.status(200).json({ sucess: "OK" });
    },
    () => {
      return response.status(400).json({ error: "Bad Request" });
    }
  );
});

module.exports = routes;
