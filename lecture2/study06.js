//Operator เครื่องหมายในการทำ process ต่างๆ
//1. Arithmetic Operators
// +, -, *, /, % (ชื่อ mod), **, ++ (เพิ่มทีละ 1), --(ลดทีละ 1)
console.log(50 % 20); //10
console.log(2 ** 4); //16

//2. Comparison Operators (ผลลัพธ์เป็น boolean)
// ==, ===, !=, !==, >, <, >=, <=
console.log('Sombat' > 'Somjai'); 
console.log('Bangna' <= 'Banana');
console.log('Thailand' == 'thailand');
console.log('20' == 20);//javascript == เปรียบเทียบ ไม่สนชนิดข้อมูล
console.log('20' === 20);//javascript === เปรียบเทียบ สนใจชนิดข้อมูล
//ไม่ตรงตัวไหน หยุดตรงนั้น! ตัวใหญ่น้อยกว่าตัวเล็ก มาก่อนน้อย มาหลังมาก

//3. Logical Operators (ผลลัพธ์เป็น boolean)
// ขีดตรงอันเดียว, &&, ขีดตรงสองอัน

//4.  *** Ternary Operator (Conditional Operator)
// condition ? experssionIfTrue : expressionIfFalse
console.log(20 > 100 ? 'Wow...' : 'oh...no!');
console.log('sau' === 'SAU' ? 'Hi...' : 'Hey...');
//javasctipt ตัวอักษรใหญ่-เล็ก ไม่เหมือนกัน