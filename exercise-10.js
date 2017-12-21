//Exercise 10 - Part 1
var total = 0;

for(var index=1; index <= 100; index++){
  if(index % 2 !== 0){
    total += index
  } else {
    total -= index
  }
}

console.log("Total " + total);

//Exercise 10 - Part 2
var pagar = '';
for(index1=1; index1 <= 10; index1++){
  for(index2=0; index2 <= 10; index2++){
    pagar += '#';
  }
  console.log(pagar);
  var pagar = '';
}

//Exercise 10 - Part 3
bintang = '';
for(index1=1; index1 <= 10; index1++){
  for(index2=0; index2 <= index1; index2++){
    bintang += '*';
  }
  console.log(bintang);
  var bintang = '';
}