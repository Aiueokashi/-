const fs = require("fs");
const fetch = require("./fetch");
const cron = require("node-cron");
const keep = require("./keep");

var random = Math.floor(Math.random() * 10);
temp = ['36.0', '36.1', '36.2', '36.3', '36.4', '36.5', '36.6', '36.7', '36.8', '36.9'];
let url = `${process.env.FORM_URL}&entry.${process.env.ENTRY1}=${process.env.MY_GRADE}&entry.${process.env.ENTRY2}=1&entry.${process.env.ENTRY3}=29&entry.${process.env.ENTRY4}=${process.env.MY_NAME}&entry.${process.env.ENTRY5}=${temp[random]}&entry.${process.env.ENTRY6}=ない&entry.${process.env.ENTRY7}=ない&entry.${process.env.ENTRY8}=ない&entry.${process.env.ENTRY9}=いない&entry.${process.env.ENTRY10}=了承しました。`

async function post_form() {
  fetch(
    encodeURI(url),
    {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then(() => console.log("posted"))
    .catch((e) =>console.log(e));
}

cron.schedule('* 6 * * *',() => {
  post_form();
})