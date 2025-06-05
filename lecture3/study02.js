//function expressin คือ การเขียน ฟังก์ชันให้อยู่ในรูปของนิพจน์ หรือ อะไรที่มันเป็น process
//1. anonymus function (ฟังก์ชันไม่มีชื่อ)
let aa = function (){ //let aa = function (){ (aa เก็บฟังก์ชัน ต้องใช้กับการเรียกใช้ฟังชัน)
    console.log('Hello...');
    
}
let bb = function (x,y){
    return x + y;

}

aa()
aa()
console.log( bb(10,20));

//2. arrow function ***(ฟังก์ชันที่ใช้เตรื่องหมาย =>)
let cc = () => {                 
    console.log('Hello...');
    
}

let dd = (x,y) => {
    return x + y;

}

cc()
cc()
console.log( dd(10,20));