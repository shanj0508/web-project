const fs = require("fs"); //引入fs fs用来读文件
//读数据库
const uersString = fs.readFileSync("./dynamic-server/db/users.json").toString();
const usersArray = JSON.parse(uersString);
//写数据库
const user3 = { id: 3, name: "张一山", pwd: 789 };
usersArray.push(user3); //user3插入数组
const string = JSON.stringify(usersArray); //数组转换为字符串，因为要写入文件，而文件只接收字符串
fs.writeFileSync("./dynamic-server/db/users.json", string);
