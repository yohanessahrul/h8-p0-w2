console.log('Ganjil Genap = 1-100');
for(var angka = 1; angka <= 100; angka++){
  if(angka % 2 === 0){
    console.log(angka + ' Genap');
  }else{
    console.log(angka + ' Ganjil');
  }
}

console.log('Kelipatan 3, Penambahan Counter 2');
for(var angka1 = 1; angka1 <= 100; angka1 += 2){
    if(angka1 % 3 === 0){
      console.log(angka1 + '-' + angka1 +' Kelipatan 3');
    }else{
      console.log(angka1 + ' ');
    }
}

console.log('Kelipatan 6, Penambahan Counter 5');
for(var angka1 = 1; angka1 <= 100; angka1 += 5){
    if(angka1 % 6 === 0){
      console.log(angka1 + '-' + angka1 +' Kelipatan 6');
    }else{
      console.log(angka1 + ' ');
    }
}

console.log('Kelipatan 10, Penambahan Counter 9');
for(var angka1 = 1; angka1 <= 100; angka1 += 9){
    if(angka1 % 10 === 0){
      console.log(angka1 + '-' + angka1 +' Kelipatan 10');
    }else{
      console.log(angka1 + ' ');
    }
}