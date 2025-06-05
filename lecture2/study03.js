//ชนิดข้อมูล (data type) ต่างๆใน javascript
//1.String ข้อความ
let aa = 'Hello...'
let bb = "Hi..."
let cc = `Hey...`

//2.Number 
let dd = 1234 // integer
let ee = 12.34 //float

//3.boolean
let ff = true
let gg = false

//4.null
let hh = null //ไม่ใช่ไม่มีค่า แต่ไม่รู้คือค่าอะไร

//5. underfined
let ii //underfined (ไม่ได้กำหนดค่าให้ตัวแปร)

//6.object จะเป็น key-value ภายใต้ {} 
let xx = {
    stuName: 'John',
    stuAge: 20,
    stuAdress: {
        noHome:'1/222',
        street: 'Sukhumvit',
        city: 'Bangkok',
    },
    stuSubjects: ['Math', 'Science', 'English'],
}


//7.array []
let jj = [1, 2, 3, 4, 5] // array of numbers
let kk = [1, 'A', true, null] // mixed array ต้องอยู่ใน [] ไม่จำเป็นต้องเป็นชนิดเดียวกัน
let ll = [
    {name: 'John', age: 20}, //object จะเป็น key-value ภายใต้ {}
    {name: 'Jane', age: 20}, //object จะเป็น key-value ภายใต้ {} 
    {name: 'Doe', age: 20},  //object จะเป็น key-value ภายใต้ {}
] 
