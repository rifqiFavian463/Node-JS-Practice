const fs = require("fs");
const readline = require("readline");
// Readline coreModule
const interFace = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const createQuestion = (question) => {
  return new Promise((resolve) => {
    interFace.question(question, (answer) => {
      resolve(answer);
    });
  });
};
const createContact = (name, email, phone) => {
  const contact = {
    name: name,
    email: email,
    phone: phone,
  };

  const Contacts = JSON.parse(fs.readFileSync("datas/contacts.json", "utf-8"));
  Contacts.push(contact);
  fs.writeFileSync("datas/contacts.json", JSON.stringify(Contacts));
  interFace.close();
};

module.exports = { createContact, createQuestion };
