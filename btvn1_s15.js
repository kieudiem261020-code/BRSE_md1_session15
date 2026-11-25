//dem so nguyen
const arr1 = [];
for (let i = 0; i < 10; i++) {
  const num = Number(prompt(`Bài 1 - Nhập số nguyên thứ ${i + 1}:`));
  arr1.push(num);
}

const countGreaterOrEqual10 = arr1.filter((item) => item >= 10).length;
console.log("Mảng đã nhập:", arr1);
console.log("Số lượng số nguyên >= 10:", countGreaterOrEqual10);
//Tìm giá trị lớn nhất và vị trí (index)
const arr2 = [];
for (let i = 0; i < 10; i++) {
  const num = Number(prompt(`Bài 2 - Nhập số nguyên thứ ${i + 1}:`));
  arr2.push(num);
}

let maxVal2 = arr2[0];
let maxIndex2 = 0;

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > maxVal2) {
    maxVal2 = arr2[i];
    maxIndex2 = i;
  }
}

console.log("Mảng đã nhập:", arr2);
console.log(`Giá trị lớn nhất là ${maxVal2} tại vị trí index ${maxIndex2}`);
//Giá trị lớn nhất và giá trị trung bình của mảng số nguyên
const n3 = Number(prompt("Bài 3 - Nhập số lượng phần tử của mảng:"));
const arr3 = [];

for (let i = 0; i < n3; i++) {
  arr3.push(Number(prompt(`Bài 3 - Nhập phần tử thứ ${i + 1}:`)));
}

if (arr3.length > 0) {
  let maxVal3 = arr3[0];
  let sum3 = 0;

  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > maxVal3) {
      maxVal3 = arr3[i];
    }
    sum3 += arr3[i];
  }

  const avg3 = sum3 / arr3.length;
  console.log("Mảng:", arr3);
  console.log("Giá trị lớn nhất:", maxVal3);
  console.log("Giá trị trung bình:", avg3);
} else {
  console.log("Mảng rỗng.");
}
//Đảo ngược các phần tử trong mảng số nguyên
const n4 = Number(prompt("Bài 4 - Nhập số lượng phần tử của mảng:"));
const arr4 = [];

for (let i = 0; i < n4; i++) {
  arr4.push(Number(prompt(`Bài 4 - Nhập phần tử thứ ${i + 1}:`)));
}

// Cách 1: Đảo ngược tại chỗ bằng hai con trỏ (không dùng reverse())
let left = 0;
let right = arr4.length - 1;
while (left < right) {
  const temp = arr4[left];
  arr4[left] = arr4[right];
  arr4[right] = temp;
  left++;
  right--;
}

console.log("Mảng sau khi đảo ngược:", arr4);
//Đếm số nguyên âm trong một chuỗi
// Trường hợp nhập vào một chuỗi số cách nhau bởi khoảng trắng, ví dụ: "3 -1 -5 8 -2"
const inputStr = prompt("Bài 5 - Nhập chuỗi các số nguyên (cách nhau bởi dấu cách):");
const parts = inputStr.trim().split(/\s+/);

let negativeCount = 0;
const negativeNumbers = [];

for (let i = 0; i < parts.length; i++) {
  if (parts[i] === "") continue;
  const num = Number(parts[i]);
  if (!Number.isNaN(num) && Number.isInteger(num) && num < 0) {
    negativeCount++;
    negativeNumbers.push(num);
  }
}

console.log("Chuỗi đã nhập:", inputStr);
console.log("Số lượng số nguyên âm:", negativeCount);
console.log("Các số nguyên âm:", negativeNumbers);
//Tìm số nguyên X trong mảng 10 phần tử
const arr6 = [];
for (let i = 0; i < 10; i++) {
  arr6.push(Number(prompt(`Bài 6 - Nhập phần tử thứ ${i + 1}:`)));
}

const x = Number(prompt("Bài 6 - Nhập số nguyên X cần tìm:"));

if (arr6.includes(x)) {
  console.log(`Number ${x} is in the array`);
} else {
  console.log(`Number ${x} is not in the array`);
}
//Sắp xếp mảng 10 phần tử theo thứ tự giảm dần
const arr7 = [];
for (let i = 0; i < 10; i++) {
  arr7.push(Number(prompt(`Bài 7 - Nhập phần tử thứ ${i + 1}:`)));
}

// Sắp xếp giảm dần (dùng sort với hàm so sánh số)
const sortedDesc = [...arr7].sort((a, b) => b - a);

console.log("Mảng ban đầu:", arr7);
console.log("Mảng sắp xếp giảm dần:", sortedDesc);
//Nối mảng b và mảng a vào mảng c
const a = [];
const b = [];

for (let i = 0; i < 10; i++) {
  a.push(Number(prompt(`Bài 8 - Nhập phần tử thứ ${i + 1} của mảng a:`)));
}

for (let i = 0; i < 10; i++) {
  b.push(Number(prompt(`Bài 8 - Nhập phần tử thứ ${i + 1} của mảng b:`)));
}

// Lưu các phần tử nối từ mảng b rồi đến mảng a vào mảng c
const c = [...b, ...a];

console.log("Mảng a:", a);
console.log("Mảng b:", b);
console.log("Mảng c (b + a):", c);