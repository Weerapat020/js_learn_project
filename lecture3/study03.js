//arrow function
let aa = () => {
    console.log('Hello...');
}

//หากคำสั่งใน {} มี 1 คำสั่งไม่จำเป็นต้องใช้หรือใส่ {}

let bb = () => console.log('Hello...');

//-------------------------------------------

let cc = () => {
    return 'Wow wow wow';
}

//หากคำสั่งใน {} มี 1 คำสั่งและเป็นคำสั่ง return หากไม่ใส่ {} ก็ไม่ต้องใส่คำว่า return เช่น

let dd = () => 'Wow wow wow';

//ไม่มี return พิมพ์โดดๆได้เลย
aa()
aa()
bb()
aa()

// มี return
console.log( cc());
console.log( dd());


