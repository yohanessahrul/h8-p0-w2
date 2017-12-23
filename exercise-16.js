// Data siswa
var nama = 'yosa';
var email = 'yohanessahrul92@gmail.com';
var latarBelakang = 'akuntansi';

// Nilai week 1 Phase 0
var nilaiHtml = 5;
var nilaiCss = 50;
var nilaiWebsite1 = 100;
// Nilai week 2 phase 0
var nilaiPseudocode = 100;
var nilaiConditional = 100;
var nilaiArray = 100;
var nilaiGame = 100;

// Membuat data yang ada di variable menjadi array multi-dimensi
var nilaiTostring = [['HTML', nilaiHtml], ['CSS', nilaiCss], ['Website1', nilaiWebsite1], ['Pseudo', nilaiPseudocode], ['Conditional', nilaiConditional], ['Array', nilaiArray], ['Game', nilaiGame]];

// Global Variable
// var points;
var welcome = "Selamat atas semua tugas yang telah kamu selesaikan sampai pada tahap ini, kini saatnya kamu meriview sendiri hasil pembelajaran kamu, masukkan data nilai sesuai yang ada di dalam platform Foxhub";
var warning1 = "Harap isikan data anda dengan benar untuk mengakses nilai";
var warning2 = "Halo " + nama + ", silahkan isi semua nilai kamu dengan benar sesuai dengan FOXHUB, agar kamu dapat melihat persentase hasil belajar";


function nilaiRatarata(){
  var nilai = (nilaiHtml + nilaiCss + nilaiWebsite1 + nilaiPseudocode + nilaiConditional + nilaiArray + nilaiGame) / 7;
  return nilai;
}
console.log(parseInt(nilaiRatarata()) + "%");
console.log("============================================");

if(nama === '' || email === '' || latarBelakang === ''){
  console.log(warning1);
} else if (nilaiHtml === 0 || nilaiCss === 0 || nilaiWebsite1 === 0 || nilaiPseudocode === 0 || nilaiConditional === 0 || nilaiArray === 0 || nilaiGame === 0){
  console.log(warning2);
} else {
  console.log("Halo " + nama + ", berikut adalah nilai yang telah kamu capai selama proses belajar di Hacktiv8 !");  console.log(" ");
  
  // looping untuk keluarkan nilai
  for(i=0; i < nilaiTostring.length; i++){
      console.log("Nilai " + nilaiTostring[i][0] + ": " + nilaiTostring[i][1]);
  }
  console.log(" ");
  console.log("Mengacu pada nilai diatas maka anda dinyatakan : ");
  console.log(" ");
  if(parseInt(nilaiRatarata()) === 100){
    console.log("Lulus, dengan nilai Sangat Baik " + parseInt(nilaiRatarata()) + "%");
  } else if(parseInt(nilaiRatarata()) > 90){
    console.log("Lulus, dengan nilai Cukup Baik "+ parseInt(nilaiRatarata()) + "%");
  } else if(parseInt(nilaiRatarata()) >= 80){
    console.log("Lulus, dengan nilai Baik "+ parseInt(nilaiRatarata()) + "%");
  } else if(parseInt(nilaiRatarata()) < 80){
    console.log("Tidak Lulus, karena hanya mendapat "+ parseInt(nilaiRatarata()) + "%" + " sedangkan standar kelulusan menuju fase berikutnya adalah 80%");
  }
}

