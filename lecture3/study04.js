 //callback function *******functionที่ถูกเรียกใช้ทีหลัง
 //1. fuction -> ตัวแปร -> agrument
 // left = right ส่ง right ไปหา left


let aa = () => console.log('Wow wow wow'); //v1

let bb = (x,y) => x*y; //v2 ฟังก์ชันมี parameters

function test01(v1,v2){
    v1();//callback function
    console.log('Hi...');
    console.log(v2(10,20));//callback function
}

test01(aa,bb) //call function เรียกให้ทำงาน 

console.log('++++++++++++++++++')

test01( bb, (m,n)=>{
    console.log('1111');
    console.log('222');
    console.log('333');
    return m+n;
})
//function ใช้หลายรอบเลยต้องมีตัวแปร