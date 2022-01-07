const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "exam",
};

const addMessage = async (chat) => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("success");
  let msg = `insert into message (Message) values (?)`;
  Connection.queryAsync(msg, [chat.message]);
  await Connection.endAsync();
};
let chat = {
  message:
    "Important Method Important Methods sdgjklhsglshgl sejkghdsklghwsh egjkhwkltgwhl sdjkltghweqouithw weljkthqwioth ",
};
addMessage(chat);

const seeMessage = async () => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  const all = `select * from message`;
  const list = await Connection.queryAsync(all);
  console.log(list);
  await Connection.endAsync();
  return list;
};
module.exports = { addMessage, seeMessage };