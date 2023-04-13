const { createContact } = require("./contacts");

// Yargs
const { demandOption } = require("yargs");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "adding contact",
  builder: {
    name: {
      describe: "write full name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "write email",
      demandOption: true,
      type: "string",
    },
    phone: {
      describe: "write phone num",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    createContact(argv.name, argv.email, argv.phone);
  },
});
yargs.parse();
