console.log("Start running postgres-env");
const fs = require("fs");

if (process.env.DATABASE_URL) {
  const databaseConfig = process.env.DATABASE_URL.split("//")[1];
  const [username, passwordAndDb, hostAndPort] = databaseConfig.split(":");
  const [password, host] = passwordAndDb.split("@");
  const [port, databaseName] = hostAndPort.split("/");
  const newLine = "\r\n";
  let output = "";

  output += `DATABASE_HOST=${host}${newLine}`;
  output += `DATABASE_PORT=${port}${newLine}`;
  output += `DATABASE_NAME=${databaseName}${newLine}`;
  output += `DATABASE_USERNAME=${username}${newLine}`;
  output += `DATABASE_PASSWORD=${password}${newLine}`;

  fs.writeFile(`./.env`, output, (err) => {
    if (err) {
      console.warn("create .env file error: ", err);
    }
  });
  console.log(".env file is generated");
}

console.log("Finish running postgres-env");
