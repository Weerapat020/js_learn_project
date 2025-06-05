//Control Statement คำสั่งควบคุม
// พิสูจน์-ตรวจสอบ
//if, if-else, if-else-if, switch-case

//ทำซ้ำ Loop
// for, while, do-while
for(let i = 1; i <= 5; i++) { 
    console.log('Hello...');
}
console.log('-------------------');
let j = 1;
while(j <= 5){
    console.log(`Hello...`);
    j++;
}
console.log('-------------------');
let k = 1;
do{
    console.log(`Hello...`);
    k++;
}while(k <= 5)

// break, continue ใน Loop
// break ใน Loop ทำงานเมื่อไรถือว่าจบการทำงานของ Loop ทันที
// continue ใน Loop ทำงานเมื่อไร ถือว่าจบรอบนั้น และจะข้สมการทำงานไปทำงานในรอบถัดไปทันที