//การแปลงชนิดข้อมูลใน Javascript
//แปลง string เป็นข้อมูลชนิดอื่นๆ
let aa = "10";
let bb = "20.50";

console.log(Number(aa) + Number(bb));
console.log('--------------------------------------');
console.log(`${aa} + ${bb} = ${Number(aa) + Number(bb)}`);
console.log('--------------------------------------');
console.log(parseInt(aa) + parseInt(bb));
console.log('--------------------------------------');
console.log(`${aa} + ${bb} = ${parseInt(aa) + parseInt(bb)}`);
console.log('--------------------------------------');

//แปลง Number
let cc = 10;
let dd = 20.55461457;
console.log(String(cc));
console.log(String(dd));
console.log(cc.toString());
console.log(dd.toString());
console.log(cc.toFixed(2)); // แสดงทศนิยม 2 ตำแหน่ง
console.log(dd.toFixed(4)); // แสดงทศนิยม 4 ตำแหน่ง
