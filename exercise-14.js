// Input data dasar
var dataId = '0001';
var dataNama = 'Roman Alamsyah';
var dataAlamat = 'Bandar Lampung';
var dataTanggal = '21/02/1989';
var dataHobi = 'Membaca';

// Output pertama ===============================
function dataHandling2(code, name, address, birth, hobby) {
  var datas = code + ',' + name + ',' + address + ',' + birth + ',' + hobby;
  var identitas = datas.split(',');
  return identitas;
}
var identitas = dataHandling2(dataId, dataNama, dataAlamat, dataTanggal, dataHobi);
console.log(identitas);
console.log('-------------------------------------------------------');


// Output Kedua=================================
var replaceNama = identitas.splice(1, 1, 'Roman Alamsyah Elsharawy');
var replaceProvinsi = identitas.splice(2, 1, 'Provinsi Bandar Lampung');
var hapusHobi = identitas.splice(4, 1, 'Pria', 'SMA Internasional Metro');
console.log(identitas);
console.log('-------------------------------------------------------');


// Output Ketiga=================================
var ambilBulan = identitas[3].split('/');
var bulanSaja = Number(ambilBulan[1] - 1);
switch (bulanSaja) {
    case 0:
        console.log('Januari');
        break;
    case 1:
        console.log('Februari');
        break;
    case 2:
        console.log('Maret');
        break;
    case 3:
        console.log('April');
        break;
    case 4:
        console.log('Mei');
        break;
    case 5:
        console.log('Juni');
        break;
    case  6:
        console.log('Juli');
}

//Output Keempat=================================
var arraTanggal = identitas[3].split('/');
console.log(arraTanggal.sort(function(a, b){ return b-a}));

//Output Kelima==================================
console.log(Tanggal = identitas[3]);

//Output Keenam===================================
var toString = identitas[1].slice(0,15);
console.log(toString);