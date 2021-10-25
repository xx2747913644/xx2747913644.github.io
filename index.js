const util = require("./util"); 

const res = util.total(10,20);
console.log(res);

let obj = {name:'xiaoming'};
let obj2 = util.extend(obj);   
console.log(obj2.name);
console.log(obj.name)
obj2.name = 'xiaohong';
console.log(obj2.name);
console.log(obj.name)



let str = util.trun('hello world!')
console.log(str)
