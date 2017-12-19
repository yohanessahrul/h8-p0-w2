// Contoh Input 1
var nama = 'Mikael';
var peran = '';


if(peran == ''){
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game");
} else {
  if(peran == 'Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!");
  } else if(peran == 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka.");
  } else {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
  }
}