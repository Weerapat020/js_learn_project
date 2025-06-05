//function คือ การทำงานหนึ่งๆ ***จะไม่ทำงานหากไม่ถูกเรียกใช้ (call function)***
//function มี 4 ประเภท
//1. no parameters, no return
function sauFunc1(){       //sauFunc1() ภายในวงเล็บคือ parameters เป็นตัวแปรประเภทหนึ่ง ส่วน return คือ คำสั่ง
    console.log('Wow...');
}


//2. have parameters, no return
function sauFunc2(aa, bb){       //sauFunc2(aa, bb) ภายในวงเล็บคือ parameters เป็นตัวแปรประเภทหนึ่ง ส่วน return คือ คำสั่ง
    console.log(aa);
    console.log(bb);
}


//3. no parameters,  has return
function sauFunc3(){       //sauFunc3() ภายในวงเล็บคือ parameters เป็นตัวแปรประเภทหนึ่ง ส่วน return คือ คำสั่ง
    console.log('Wow...');
    return 123456;

}


//4. have parameters, has return 
function sauFunc4(aa, bb, cc, dd){    //sauFunc4(aa, bb, cc, dd) ภายในวงเล็บคือ parameters เป็นตัวแปรประเภทหนึ่ง ส่วน return คือ คำสั่ง
    return aa + bb + cc + dd;

}

//call functionที่ไหนก็ได้ กี่ครั้งก็ได้
//function จะไม่ทำงานถ้าไ่รเียกใช้
//ไม่มี return พิมพ์โดดๆได้เลย
sauFunc1();
sauFunc1();

sauFunc2(10, 20); //ข้อมูลที่ส่งให้พารามิเตอร์เรียกว่า agreement
sauFunc2(5, 10); //ข้อมูลที่ส่งให้พารามิเตอร์เรียกว่า agreement

sauFunc1();
console.log('----------------------------------------------')

//ถ้ามี return อย่าเขียนโดดๆ
let x1 = sauFunc3();
console.log( sauFunc3());

//ถ้ามี return อย่าเขียนโดดๆ เพราะมันต้อง return กลับมา ส่งค่ากลับมาที่จุดเรียกใช้
const x2 = sauFunc4( 10, 20, 30, 40);
console.log( sauFunc4(11,22,33,44));
console.log(`X1 :${x1}`);
console.log(`X2 :${x2}`);