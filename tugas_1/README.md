# Tugas TypeScript

## 📌 Deskripsi

Repository ini berisi solusi dari beberapa tugas dasar dalam TypeScript, termasuk perhitungan matematika dan manipulasi string.

## 🛠️ Tugas yang Dikerjakan

### 1. Menghitung Luas Persegi Panjang

**Rumus:**

```
luas = panjang * lebar
```

**Kode:**

```typescript
function areaOfRectangle(length: number, width: number): number {
  return length * width;
}

console.log(areaOfRectangle(5, 3)); // Output: 15
```

**Penjelasan:**

- `areaOfRectangle(length, width)` menerima dua angka sebagai panjang dan lebar.
- Mengalikan panjang dengan lebar untuk mendapatkan luas.
- Mengembalikan hasil perhitungan.
- `console.log(...)` mencetak hasil perhitungan.

### 2. Menghitung Diameter, Keliling, dan Luas Lingkaran

**Rumus:**

```
Diameter = 2 * radius
Keliling = 2 * π * radius
Luas = π * radius^2
```

**Kode:**

```typescript
function circleProperties(radius: number): void {
  var diameter = 2 * radius;
  var circumference = 2 * Math.PI * radius;
  var area = Math.PI * radius * radius;

  console.log("Diameter = " + diameter);
  console.log("Circumference = " + circumference.toFixed(4));
  console.log("Area = " + area.toFixed(3));
}

circleProperties(5);
```

**Penjelasan:**

- `circleProperties(radius)` menerima satu angka sebagai radius.
- Menghitung diameter dengan mengalikan radius dengan 2.
- Menghitung keliling menggunakan rumus keliling lingkaran.
- Menghitung luas menggunakan rumus luas lingkaran.
- Menampilkan hasil dalam format yang dibulatkan ke 4 desimal untuk keliling dan 3 desimal untuk luas.

### 3. Menentukan Sudut Ketiga dari Segitiga

**Rumus:**

```
sudut ketiga = 180 - (sudut1 + sudut2)
```

**Kode:**

```typescript
function thirdAngle(a: number, b: number): number {
  return 180 - (a + b);
}

console.log(thirdAngle(80, 65)); // Output: 35
```

**Penjelasan:**

- `thirdAngle(a, b)` menerima dua angka sebagai dua sudut segitiga.
- Menggunakan aturan segitiga yang total sudutnya 180 derajat.
- Mengembalikan nilai sudut ketiga.

### 4. Menghitung Selisih Hari Antara Dua Tanggal

**Kode:**

```typescript
function dateDifference(date1: string, date2: string): number {
  var d1 = new Date(date1);
  var d2 = new Date(date2);

  var diffTime = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);

  if (diffTime < 0) {
    diffTime = -diffTime;
  }

  var roundedDiff = diffTime % 1 === 0 ? diffTime : diffTime + 1;

  return roundedDiff;
}

console.log(dateDifference("2024-03-19", "2024-03-21")); // Output: 2
```

**Penjelasan:**

- `dateDifference(date1, date2)` menerima dua string tanggal dalam format `YYYY-MM-DD`.
- Mengonversi string menjadi objek `Date`.
- Menghitung selisih waktu dalam hari.
- Jika hasil selisih negatif, maka dikonversi menjadi nilai positif.
- Jika hasil selisih tidak bulat, dibulatkan ke atas.
- Mengembalikan jumlah hari antara dua tanggal.

### 5. Menampilkan Inisial Nama dalam Huruf Kapital

**Kode:**

```typescript
function initials(name: string): string {
  var result = "";
  var takeNext = true;

  for (var i = 0; i < name.length; i++) {
    var currentChar = name[i];

    if (takeNext && currentChar !== " ") {
      result += currentChar.toUpperCase();
      takeNext = false;
    }

    if (currentChar === " ") {
      takeNext = true;
    }
  }

  return result;
}

console.log(initials("John Doe")); // Output: JD
```

**Penjelasan:**

- `initials(name)` menerima satu string sebagai nama lengkap.
- Menggunakan loop untuk memeriksa setiap karakter dalam string.
- Jika karakter adalah huruf pertama dari kata baru, mengubahnya menjadi huruf besar.
- Mengembalikan inisial nama dalam huruf kapital.

## 🚀 Instalasi dan Penggunaan

### 1. Clone Repository

```sh
git clone https://github.com/rifqiikhsan-dev/belajar_typescript_1.git
cd belajar_typescript_1
```

### 2. Install TypeScript

Jika TypeScript belum terinstall, jalankan:

```sh
npm install -g typescript
```

### 3. Jalankan Kode

Kompilasi TypeScript ke JavaScript:

```sh
tsc tugas.ts
```

Lalu jalankan hasil kompilasi dengan Node.js:

```sh
node tugas.js
```

## 📌 Contoh Output

```sh
15
Diameter = 10
Circumference = 31.4160
Area = 78.540
35
2
JD
```
