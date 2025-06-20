//Luôn ưu tiên const → nếu sau này cần đổi giá trị mới đổi sang let

/*
  Không dùng var nữa
  let name="hoquangnhan",
      date="12/06/2003",
      address="ha dong ha noi",
      message ="hello world",
      _class="12a10"

  const age ="12",

  //thay đổi giá trị của biến

  age="18"

  console.log (name, age, );

  //những tên biến phù hợp

  //Trong JavaScript, có 2 loại kiểu dữ liệu: Primitive (kiểu nguyên thủy): number, string, boolean, null, undefined, symbol, bigint / Reference (kiểu tham chiếu): object, array, function

  const person= {name: hoquangnhan, age: 20"};

  console.log(person); 
  */

 // bài tập 1 
 const student={name:"nhân", score:10};
 student.name="Mai";
 student.score=20;
 console.log(student);
 
 
 //bài tập 2: tính tổng 2 số
 let a=5, b=18;
 console.log(a+b);
 
 // bài tập 3: viết chương trình kiểm tra số chẵn lẻ
 // toán tử (prefix) thì tác động tới giá trị của biến theo đúng nghĩa
 // toán tử prosf
 
 
 //viết chương trình kiểm tra số chẵn lẻ bằng if
 let number=8;
 
 if (number % 2 == 0) {
   console.log("là số chẵn");
 } else {
   console.log("là số lẻ");
 }
 
 //viết chương trình kiểm tra số chẵn lẻ bằng switch
 let number=12;
 let check = number % 2;
 
 switch (number){
     case 0:
   console.log(number+"là số chẵn");
   break;
   
   case 1:
   console.log(number+"là số lẻ");
   break;
   
   default:
   console.log("không phải số hợp lệ");
 }
     
 alert("hello world")
 
 /** Nhóm các kiểu dữ liệu primitive
 
 - các giá trị primitive được lưu trữ trực tiếp trong ngăn xếp(stack)
 - khi một giá trị primitive được gán cho một biến, giá trị này không thể thay đổi
 - khi thay đổi giá trị của biến, một bản sao độc lập của giá trị đó sẽ được tạo ra
 
 - Primitive types bao gồm các loại phổ biến sau:
 Number: đại diện cho các số, bao gồm cả số nguyên và số thập phân
 String: đại diện cho các chuỗi ký tự
 Boolean: đại diện cho các giá trị (true) hoặc (false)
 Null: Đại diện cho các giá trị kiểu "rỗng" hoặc "không có gì"
 Undefined: đại diện cho một biến chưa được gán giá trị
 Symbol: đại diện cho một giá trị Unique/ được sử dụng làm khoá hoặc ID cho các đối tưognj object
 BigInt: đại điện cho các số nguyên có giá trị kiểu Number thông thường ở trên
 **/
 
 /** Nhóm các kiểu dữ liệu reference
 - các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp (stack) mà sẽ làm tham chiếu đến địa chỉ của đối tượng trong Heap memory
 - các giá trị tham chiếu có thể được thay đổi khi chúng ta tạo ra
 - khi gán một đối tượng A cho B thì cả A và B sẽ tham chiếu đến cùng một đối tượng, chứ không tạo ra bản sao độc lập riêng biệt
 *Reference type bao gồm các kiểu dữ liệu phổ biến sau
 - Object: đại diện cho một tập hợp các thuộc tính và phương thức
 - array: một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị
 - function: đại diện cho các hàm xử lý, cũng được coi là một loại đối tượng
 **/
 
 //Object: đại diện cho một tập hợp các thuộc tính và phương thức
 let developer ={
     name:'Nhân',
   age:'20',
   greet: function(){
   console.log(`hi aliens, I am ${this.username} from the planet earth`)
   }
 }
 developer.greet()
 console.log('developer name:', developer.name)
 console.log('developer age:', developer.age)
 
 //If - else: Nếu A thì làm gì... không phải A thì làm gì
 //If - else: Nếu A thì... không phải A thì nếu B... không phải B thì...
 
 let weathercondition=`hot`
 if(weathercondition ===`hot`){
     console.log('Stay home and chill');
 } else(){
     console.log('go to school');
 }
 
 let score=10
 if (score<=`10`){
     console.log(`rank:S`);
 }else if(score<=`9`){
     console.log(`rank:a`);
 }else if(score<=`8`){
     console.log(`rank:b`);
 }else if(score<=`7`){
     console.log(`rank:c`);
 }else{
     console.log(`rank:d`);
 }
  
 let day= new Date().getday()
 switch(){
     case 0:
       console.log(`Sunday`);
     break
   case 1:
        console.log(`Monday`);
     break
   case 2:
        console.log(`Tuesday`);
     break
   case 3:
        console.log(`Wednesday`);
     break
   case 4:
        console.log(`Thursday`);
     break
   case 5:
        console.log(`Friday`);
     break
   case 6:
        console.log(`Saturday`);
     break
   default:
        console.log(`Invalid day`);
     break
 }
 
 /** trong javascript, vòng lặp (loop) là một cấu trúc điều kiện dùng để lặp lại một đoạn mã nhiều lần.Thường được sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiện nào đó thoả mãn.
 
 for...of dùng để lặp qua các giá trị của một iterable object(những đối tượng có thể lặp), phổ biến như Array, String,...
 **/
 for (let= i=10; i<=10; 1++ ){
     console.log(`Count: ${i}`)
 }
 
 for( let i=10; i<=10; i--){
     consolde.log(`Coount: ${i}`)
 }
 
 /** while: Dùng khi muôn lặp lại một đoạn code cho đên khi điều kiện không còn đúng nữa. **/
 let = 11
 while(i<11){
     console.log(`Count: ${i}`)
   i++
 }
 
 /** do  while: Dùng khi muôn lặp lại một đoạn code cho đên khi điều kiện không còn đúng nữa. **/
 let = 11
 do{
     console.log(`Count: ${i}`)
   i++
 } while(i<11)
 
 /** for..in:: Lặp qua các thuộc tính của một đôi tượng **/
 let developper={
     name:'nhân',
   age: '20',
   gender: 'male',
   country: 'vietnam',
   hobbies: ['MDMA','playmusic','learning english','driving'  ]
 }
 for(let key in developer){
     console.log(`${key}: ${developer[key]}`)
 }
 
 // for...of: Dùng để lặp qua các giá trị của một iterable object (những đối tượng có thể lặp), phổ biến nhu  Array, String...vv
 
 let username='hoquangnhan'
 for(let char of username){
     console.log(`char: ${char}`)
 }
 
 /** hàm
 1 function declaration **/
 function sayHello(someone){
     console.log(`hello ${someone}! I'am from Vietnam`)
 }
 
 //2 function expression(hàm biểu thức): nghĩa là gán cho hàm 1 biến, cũng là cách định nghĩa 1 hàm.
 const sayhello = function(someone){
     console.log(`hello ${someone}!I'am from vietnam`)
 }
 
 //3 Arrow function (hàm mũi tên): là một sự thay thế với cú pháp đơn giản hơn so với hàm biểu thức. Sẽ có những sự khác nhau nhất định giữa hàm biểu thức và hàm mũi tên
 const sayhello = (someone) => {
     console.log(`hello ${someone}! I'am from vietnam`)
 }
 
 //4 Anonymous Function (hàm ẩn danh): là hàm không có tên. Thường được sử dụng làm đối số cho các hàm khác, ví dụ như trong các hàm xử lý sự kiện hoặc các hàm gọi lại (callback).
 setTimeout(function(){
     console.log('sau 1 giây thì hiện message này')
 }, 1000)
 
 //5 Method Function (hàm phương thức): là hàm được định nghĩa / khai báo bên trong đối tượng, được coi là một phương thức của đối tượng.
 let developer = {
     username: 'TrungQuanDev',
     age: 30,
     greet: function(){
       console. log (Hi Aliens, I am ${this.username} from the planet Earth.')
   },
     greetArrownFn: () => {
     console. log('Hi Aliens, I am ${this,username} from the planet Earth.*)
 },
 developer-greet()
 developer.greetArrowFn()
 
 //6 Constructor Function (hàm khởi tạo - hàm tạo): sử dụng để tạo đối tượng mới. Thường được kết hợp với từ khóa new.
 function Developer(username){
     this.username = username
   this.greet = function(){
       console.log(`hi aliens, Iam ${this.username}from the plannet earth`)
   }
 }
 
 // Object
 /**
 * Trong JavaScript, đối tượng (object) là một cầu trúc dữ liệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lý các dữ liệu phức tạp. Đối tượng bao gồm các cặp key-value (khóa - giá trị). Mỗi khóa là một chuỗi (string) và giá trị có thể là bất kỳ loại dữ liệu nào, bao gồm cả các đối tượng khác (nested object) .
 */
 /** 2 cách Tạo Object với cú pháp object literal và từ khóa new Object() */
 ...
 // cách khai báo 1: object literal syntax
 let developer = {
     username: 'hoquangnhan',
   age: 30,
   greet: function(){
       console.log(`hi alien, iam ${this.username}from the plannet earth`)
   },
   skill:['chơi matuys', 'chơi matuys','chơi matuys','chơi matuys'],
   field: {
     frontEnd:['HTML','CSS','Javascript'],
       backEnd: false,
       uiFullstack: true,
     //bao gồm cả các đối tượng khác (nested object)
   },
 }
 
 // cách khai báo 2: new object()
 let webbuilder = new Object()
     webbuilder.username = 'jinho',
     webbuilder.age = 20,
     webbuilder.greet = function(){
       console.log(`hi alien,Im ${this.username}! tm from vietnam`)
   } 
 }
 
 // 2 cách để truy cập đến thuộc tính của object
 console.log(developer.username)
 console.log(developer['username'])
 
 // thêm, sửa, xoá thuộc tính của object
 developer.usename = 'jinho',
 developer.class = 12,
 delete developer.greet,
 console.log(developer)
 
 
 
 for (let i = 2; i <= 9; i++) {
   console.log(`\n--- Bảng cửu chương ${i} ---`);
   for (let j = 1; j <= 10; j++) {
     console.log(`${i} x ${j} = ${i * j}`);
   }
 }
 
 function isPrime(number) {
   if (number < 2) {
     return false;
   }
 
   for (let i = 2; i <= Math.sqrt(number); i++) {
     if (number % i === 0) {
       return false;
     }
   }
 
   return true;
 }
 
 // Test thử
 console.log(isPrime(5));  // true
 console.log(isPrime(10)); // false
 console.log(isPrime(2));  // true
 
// thao tác với array và mảng trong javascript
// * Trong JavaScript, "mảng" (array) là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
// * Các giá trị trong mảng có thể là bất kỳ kiểu dữ liệu nào, number, string, object, thậm chí là các mảng khác.
// * Mảng trong JavaScript có các chỉ số - Index bắt đầu từ 0, nghĩa là phần tử đầu tiên của mảng có index là 0, phần tử thứ hai có index là 1, và cứ tiếp tục tăng dần.
 
// tạo 1 array chứa các số từ 1-5
let numbers = [1,2,3,4,5] 
// truy cập phần tử đầu tiên của mảng (theo index = 0)
console.log('first item of array:' , numbers[0]);
// truy cập phần tử cuối cùng của mảng (theo index = 0)
console.log('first item of array:' , numbers[numbers.length- 1 ])
//mảng có thể chứa bất kỳ kiểu dữ liệu nào

let numbersArray = [1,2,3,4,5,6,7,8,9]
let sum = numbersArray
.filter(number => number % 2 === 0)
.reduce((total, num)=> total+num, 0)

console.log(`kết quả tổng các số chẵn: ${sum}`);

// push() - thêm phần tử vào cuối cùng của hàng
let numbers =[1,2,3,4,5]
console.log('Length of numbers:', numbers.length)//kết quả: 5

// push() - thêm phần tử vào cuối cùng của hàng
number.push(6)
console.log('After Push:', numbers)//kết quả: [1,2,3,4,5,6]

//pop() loại bỏ phần tử cuối cùng của mảng
number.pop()
console.log('After Pop', numbers);

//forEach() - lặp qua từng phần tử của mảng
number.forEach(number, index => {
    console.log(`Index: ${index} - Value: ${numbers}`);
});

//map () - Tạo một mảng mới với các phần tử được biến đổi từ mảng gốc, ví dụ bình phương từng phần tử
let squaredNumbers = numbers.map((number) => {
    return numbers * numbers
});

// filter() - Tạo một mảng mới với các phần tử thỏa mãn điều kiện, ví dụ lấy các số chẵn
let evenNumbers = numbers.filter ((){
    return number % 2===0
})
console.log(`after filter() - evennumbers:`, evennumbers);
 
// find() tìm phần tử đầu tiên thoả mãn điều kiện
let foundNumber = numbers.find((numbers){
    return number > 3
})
 
// reduce() tính toán một giá trị duy nhất từ mảng, ví dụ tính tổng các số trong mảng
let sum = number.reduce((total.number){
    return total + numeber
}, 0)

//some() kiểm tra xem mảng có ít nhất một phần tử thoả mãn điều kiện hay không, trả về boolean hoặc tru false
let hasEvenNumber - numbers.some((number){
    return number % 2 === 0
})

// viết hàm tính tổng các số chẵn trong mảng
function sumEvenNumbers(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((total, num) => total + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Kết quả: 12

/**
* Có khá nhiều Methods - Phương thức khi xử lý dữ liệu Object trong JavaScript.
* Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế mà có thể bạn chưa biết.
* Phần 1: create(), assign(), defineProperty(), defineProperties(), keys(), values(), entries(), fromEntries()
*/

//object.create() - Tạo một đối tượng mới dựa trên một đối tượng cho trước làm nguyên mẫu - prototype.
const person = {
  greet(){
    console.log('Hello World!');
  }
};
const hoquangnhan = Object.create(person);
hoquangnhan.name = "hoquangnhan";

// Object.assign() sao chép tất cả các thuộc tính một hoặc nhiều đối tượng nguồn ban đầu vào đối tượng đích. Kết quả trả về đối tượng đích.
// - Nếu một thuộc tính đã tồn tại trong đối tượng đích thì nó sẽ bị ghi đè.
// - Phương thức này sẽ làm thay đổi đối tượng đích, không làm thay đổi đối tượng nguồn.
const targetObj = { a=1, b=2, c=3 };//đối tượng đích
const sourceObj = { b=4, d=5 };//đối tượng nguồn
const result = Object.assign(targetObj, sourceObj);
console.log('Object.assign() > result', result);//kết quả: { a=1, b=4, c=3, d=5 }
console.log('Object.assign() > sourceObj', sourceObj);//kết quả: { b=4, d=5 }
console.log ('Object.assign() > targetObj', targetObj);//kết quả: { a=1, b=4, c=3, d=5 }

// Object.defineProperty() thêm hoặc sửa đổi "MỘt" thuộc tính trên một đội tượng, và có thể kiểm soát chính xác, hành vi của thuộc tính đó.
const obj1 = {};
Object.defineProperty(obj1, 'name', {
  value: 'hoquangnhan',
  writable: true, // có thể thay đổi giá trị của thuộc tính
});
console.log('Object.defineProperty() > obj1', obj1);//kết quả: { name: 'hoquangnhan' }
obj1.name = 'Test';
console.log('Object.defineProperty() > obj1', obj1);//kết quả: { name: 'Test' }

// Object.defineProperties() thêm hoặc sửa đổi "Nhiều" thuộc tính trên một đối tượng cùng một lúc, cũng có thể kiểm soát chính xác hành vi của các thuộc tính đó. 
const obj 2 = {};
Object.defineProperties(obj2),{
  firstName:{
    name: 'hoquangnhan',
    writtable: true,
  }
  lastName: {
    name: 'hoang',
    writable: fasle,
  }
}

// Object.keys() trả về một mảng (array) chứa toàn bộ tên thuộc tính của các một đối tượng
const obj3 = { a:1, b:2, c:3 };
console.log('Object.keys (obj3)', Object.keys(obj3));//kết quả: ['a', 'b', 'c']

// Object.values() trả về một mảng (array) chứa toàn bộ giá trị của các thuộc tính của các một đối tượng
const obj4 = {a:1, b:2,c:3 };
console.log('Object.keys (obj4)', Object.keys(obj4));//kết quả: [1, 2, 3]

//Object.entries() trả về một mảng (array) chứa các cặp tên và giá trị của các thuộc tính của các một đối tượng
const obj5 ={a:1, b:2, v:3};
console.log('object.keys' (obj5), Object.keys(obj5));//kết quả: [['a', 1], ['b', 2], ['v', 3]]
 
 // Object.groupBy() sử dụng để nhóm các giá trị trong một đối tượng dựa trên một tiêu chí cụ thể.
const inventories = [
  { name: 'apple', quantity: 10, type:'fruit 1' },
  { name: 'banana', quantity: 5, type:'fruit 1' },
  { name: 'pear', quantity: 2, type:'fruit 2' },
  { name: 'orange', quantity: 3, type:'fruit 2' },
  { name: 'grape', quantity: 1, type:'fruit 1' },
];
const groupByResult = Object.groupBy(inventories, ({type}) => type);
console.log('Object.groupBy(inventory,({type}) =>type');

//Viết chương trình gộp 2 object thành 1
const user1 = { name: "Lan", age: 25 }
const user2 = { country: "Vietnam", job: "Dev" }
const fullUser = { ...user1, ...user2 }
console.log(fullUser)

// tạo form nhập tên, nhấn nút hiển thị greeting
document.getElementById("greetBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value
  document.getElementById("result").textContent = `Xin chào ${name}!`
})

//viết hàm đếm số lần gọi
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Bạn đã gọi ${count} lần`);
  };
}

const counter = createCounter();
counter();
counter();
counter();

//viết hàm mô phỏng tải dữ liệu bằng setTimeOut
function fetchData(callback) {
  setTimeout(() => {
    callback("Dữ liệu đã tải xong!");
  }, 12000);
}

fetchData((data) => {
  console.log(data);
});

// Viết object() có phương thức greet () dùng this
const developer = {
  name: "Nhân",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

developer.greet();

// Dùng bind
const sayHi = developer.greet.bind({ name: "Minh" });
sayHi();


//Khai báo Object có interface person với name, age
function add(a, b) {
  return a + b;
}
console.log(add(2,3); 
 
 
 