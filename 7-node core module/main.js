// Core Module
const fs = require("fs");
const { createContact, createQuestion } = require("./contacts");

const dirFolder = "./datas";
if (!fs.existsSync(dirFolder)) {
  fs.mkdirSync(dirFolder);
}
const dirFile = "./datas/contacts.json";
if (!fs.existsSync(dirFile)) {
  fs.writeFileSync(dirFile, "[]", "utf-8");
}

const mainProcess = async () => {
  const name = await createQuestion("Input your name: ");
  const email = await createQuestion("Input your email : ");
  const phone = await createQuestion("Input your phone : ");
  createContact(name, email, phone);
};

mainProcess();
