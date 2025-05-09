# 💪 Exercise 2

## 📌 Deskripsi

Tugas ini bertujuan untuk mengasah kemampuan dalam menulis program dasar menggunakan JavaScript dan TypeScript. Setiap tugas memiliki fungsi yang harus diimplementasikan untuk memenuhi ekspektasi tertentu.

---

## 📂 Daftar Tugas

### 1️⃣ Konversi Fahrenheit ke Celsius

**Deskripsi:**
Program ini menerima suhu dalam Fahrenheit dan mengonversinya ke Celsius menggunakan rumus:
\[ C = (F - 32) \times \frac{5}{9} \]

**Kode:**

```javascript
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.78
```

```typescript
function fahrenheitToCelsiusTS(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahrenheitToCelsiusTS(100)); // Output: 37.78
```

**Penjelasan:**

- `fahrenheitToCelsius(fahrenheit)` menerima nilai suhu dalam Fahrenheit.
- `fahrenheit - 32`: Mengurangi suhu dengan 32.
- `* 5/9`: Mengalikan hasilnya dengan 5/9 untuk mengonversinya ke Celsius.
- `console.log(fahrenheitToCelsius(100))`: Mencetak hasil konversi dari 100°F ke Celsius.

---

### 2️⃣ Konversi Centimeter ke Kilometer

**Deskripsi:**
Mengonversi panjang dari centimeter ke kilometer dengan rumus:
\[ km = cm / 100000 \]

**Kode:**

```javascript
function cmToKm(cm) {
  return cm / 100000;
}
console.log(cmToKm(100000)); // Output: 1
```

```typescript
function cmToKmTS(cm: number): number {
  return cm / 100000;
}
console.log(cmToKmTS(100000)); // Output: 1
```

**Penjelasan:**

- `cmToKm(cm)` menerima nilai panjang dalam centimeter.
- `cm / 100000`: Mengonversi nilai cm ke km dengan membaginya dengan 100000.
- `console.log(cmToKm(100000))`: Mencetak hasil konversi dari 100000 cm ke km.

---

### 3️⃣ Menentukan Bilangan Ganjil atau Genap

**Deskripsi:**
Fungsi ini menerima bilangan bulat \( n \) dan mengembalikan `true` jika ganjil dan `false` jika genap.

**Kode:**

```javascript
function isOdd(n) {
  return n % 2 !== 0;
}
console.log(isOdd(1000)); // Output: false
console.log(isOdd(1001)); // Output: true
```

```typescript
function isOddTS(n: number): boolean {
  return n % 2 !== 0;
}
console.log(isOddTS(1000)); // Output: false
console.log(isOddTS(1001)); // Output: true
```

**Penjelasan:**

- `isOdd(n)` menerima nilai bilangan bulat.
- `n % 2 !== 0`: Mengecek apakah bilangan memiliki sisa bagi 2.
- Jika sisa bagi 2 adalah 0, bilangan genap (`false`).
- Jika tidak, bilangan ganjil (`true`).

---

### 4️⃣ Menghapus Kata dari String

**Deskripsi:**
Menghapus kemunculan pertama dari kata tertentu dalam sebuah string.

**Kode:**

```javascript
function removeFirstOccurrence(str, search) {
  return str.replace(search, "");
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: Ho world
```

```typescript
function removeFirstOccurrenceTS(str: string, search: string): string {
  return str.replace(search, "");
}
console.log(removeFirstOccurrenceTS("Hello world", "ell")); // Output: Ho world
```

**Penjelasan:**

- `removeFirstOccurrence(str, search)` menerima string utama dan kata yang ingin dihapus.
- `str.replace(search, "")`: Menghapus kemunculan pertama dari kata yang dicari.
- `console.log(removeFirstOccurrence("Hello world", "ell"))`: Mencetak hasil setelah kata "ell" dihapus dari "Hello world".

---

### 5️⃣ Mengecek Palindrom

**Deskripsi:**
Memeriksa apakah string adalah palindrom (dibaca sama dari depan dan belakang).

**Kode:**

```javascript
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
```

```typescript
function isPalindromeTS(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindromeTS("madam")); // Output: true
```

**Penjelasan:**

- `isPalindrome(str)` menerima string yang akan diperiksa.
- `str.split('')`: Mengubah string menjadi array karakter.
- `.reverse()`: Membalikkan urutan karakter dalam array.
- `.join('')`: Mengubah array kembali menjadi string.
- `str === reversed`: Membandingkan string asli dengan yang sudah dibalik.
- `console.log(isPalindrome("madam"))`: Mencetak `true` jika "madam" adalah palindrom.

---

## 📌 Kesimpulan

Tugas-tugas ini membantu memahami dasar-dasar pemrograman, seperti manipulasi string, operasi matematika, dan penggunaan fungsi dalam JavaScript serta TypeScript. Dengan memahami konsep ini, kita dapat lebih mudah mengembangkan program yang lebih kompleks di masa depan.

🚀 Selamat Coding!
