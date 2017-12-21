var nama = 'Yosa';      //  *required*
var peran = 'Ksatria';       // Ksatria / Tabib / Penyihir 
var tahunLahir = 1992;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));


if(peran === ''){
  console.log("Halo kacung, Pilih peranmu untuk memulai game");
} else {
  if(peran == 'Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!");
    console.log('============================');
    
      
      for(i=0; i < tahunLahir; i++){

        if(i % umur === 0){
          console.log(peran + ' ' + nama + ' menyerang monster');
          monsterHealth -= umur;
        } else if (i % kodeMonster === 0){
          console.log('monster menyerang ' + peran + ' ' + nama + '!');
          playerHealth -= kodeMonster;
        } else if(i % umur === 0 && i % kodeMonster === 0){
          console.log('Health keduanya bertambah');
          playerHealth += kodeMonster;
          monsterHealth += umur;
        }
      }
      
      if(playerHealth > monsterHealth){
        console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
      }else{
        console.log('Sayang sekali ' + peran + ' ' + nama + ' dikalahkan monster...');
      }

  } else if(peran == 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka.");
  } else {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
  }
}
