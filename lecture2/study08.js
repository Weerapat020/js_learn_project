//Loop สำหรับ array และ object
const arr = [10, 20, 30, 40];

arr.forEach((xx) => {
    console.log(xx * 100);
})
//คูณที่ละตัว .forEach และเก็บค่าผลลัพธ์ไว้ใน ตัวแปร xx

console.log('-----------------------------------');

const obj = {
    name: 'John',
    age: 20,
    city: 'New York'
}

for(let yy in obj){
    console.log(obj[yy]);
}
// obj มีคีย์ 3 ตัว (name, age, city) วน 3 รอบ