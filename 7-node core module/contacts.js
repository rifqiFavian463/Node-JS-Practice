const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");

const createContact = (name, email, phone) => {
  const contact = {
    name: name,
    email: email,
    phone: phone,
  };
  const contacts = JSON.parse(fs.readFileSync("datas/contacts.json", "utf-8"));
  // check json duplicate
  const checkDuplicate = contacts.find((contact) => contact.name == name);
  if (checkDuplicate) {
    console.log("name used, try to change name!");
    return true;
  }
  if (!validator.isEmail(email)) {
    console.log(chalk.white.bgRed("please enter valid email"));
    return false;
  } else if (!validator.isMobilePhone(phone, "id-ID")) {
    console.log(chalk.white.bgRed("please enter indonesian region valid mobile phone"));
    return false;
  }
  contacts.push(contact);
  fs.writeFileSync("datas/contacts.json", JSON.stringify(contacts));
};

module.exports = { createContact };
