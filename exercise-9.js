//Exercise 9 - Part 1 
var nama = "Yosa";
var pembilang = 100;
var penyebut = 20;
var hasilBagi = pembilang / penyebut;

console.log("Halo " + nama + ", " + pembilang + " dibagi " + penyebut + " adalah sama dengan " + hasilBagi);


//Exercise 9 - Part 2 
var alas = 3;
var tinggi = 5;
var luasSegitiga = alas * tinggi / 2;

console.log("Luas segitiga : " + luasSegitiga);


//Exercise 9 - Part 3 
var tahun = 2004;

if(tahun % 4 === 0){
  if(tahun % 100 !== 0){
    console.log(tahun + " adalah tahun kabisat!");
  } else {
    if(tahun % 400 === 0){
      console.log(tahun + " adalah tahun kabisat!");
    } else {
      console.log(tahun + " adalah bukan tahun kabisat");
    }
  }
} else {
  console.log(tahun + " adalah bukan tahun kabisat");
}