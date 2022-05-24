var msg1 = 'hello world';
var msg2 = 'Hello world';
// ts 会进行类型推断, 会自己添加推断出的类型
var username = 'wang';
var age = 21;
var height = 162;
var info = "my name is ".concat(username, ",age is ").concat(age, ",height is ").concat(height);
console.log(info);
