//ตัวแปรใน javascript สร้างได้ 3 แบบ
// 1. var แก้ไขได้ กำหนดค่าที่หลังได้ เป็น global ใช้ที่ไหนก็ได้
var aa =10;
var xx;
xx = 100;

// 2. let แก้ไขได้ กำหนดค่าที่หลังได้ เป็น local ใช้ได้เฉพาะที่ เช่น ในปีกกานั้นๆ เท่านั้น!!
let bb = 20;
let yy;
yy = 200;

//ใช้แบบ 2. ไม่นิยมใช้แบบ 1.

// 3. const แก้ไขไม่ได้ กำหนดค่าที่หลังไม่ได้ เป็น local
const cc = 30; 
//const = zz; error นะ...

//--------------------------

{
    var a = 10;//global
    let b = 20; //local
    const c = 30; //local
        {
        var d = 40;//global
        let e = 50; //local
        const f = 60; //local

            {
            var g = 70;//global
            let h = 80; //local
            const i = 90; //local
            }
            console.log(a);
            console.log(b);
            console.log(c);
        }
}
//global แปะตรวไหนก็ได้ไม่มี error