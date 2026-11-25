// Bài 1: In các ký tự trong mảng theo thứ tự đảo ngược
const arr1 = ['c', 's', 'c', '2', '6', '1'];
const reversedStr = [...arr1].reverse().join('');
console.log("Bài 1 - Chuỗi đảo ngược:", reversedStr); // "162csc"


// Bài 2: Khai báo mảng ký tự và đếm số "ký tự số" (0 - 9)
const arr2 = ['a', '1', 'b', '9', '0', 'x', '5'];
let digitCount = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] >= '0' && arr2[i] <= '9') {
    digitCount++;
  }
}
console.log("Bài 2 - Số lượng ký tự số:", digitCount);


// Bài 3: Đếm số ký tự trong một chuỗi
const str3 = prompt("Bài 3 - Nhập vào một chuỗi:") || "";
console.log(`Bài 3 - Chuỗi "${str3}" có ${str3.length} ký tự.`);


// Bài 4: Nhập vào 2 chuỗi và kiểm tra có giống nhau không
const firstStr = prompt("Bài 4 - Nhập chuỗi thứ nhất:");
const secondStr = prompt("Bài 4 - Nhập chuỗi thứ hai:");

if (firstStr === secondStr) {
  console.log("Bài 4 - Hai chuỗi giống nhau.");
} else {
  console.log("Bài 4 - Hai chuỗi không giống nhau.");
}


// Bài 5: Nhập mảng ký tự, thay thế tất cả '-' thành '_'
const input5 = prompt("Bài 5 - Nhập các ký tự (ví dụ: a-b-c-1-2):") || "";
const charArray = input5.split("");

for (let i = 0; i < charArray.length; i++) {
  if (charArray[i] === "-") {
    charArray[i] = "_";
  }
}
console.log("Bài 5 - Mảng sau khi thay thế:", charArray);
console.log("Bài 5 - Chuỗi kết quả:", charArray.join(""));