let konfirmasi = confirm('Apakah anda ingin melanjutkan?');

while (konfirmasi) {
  if (konfirmasi) {
    let satu = parseInt(prompt('Masukkan Nilai pertama'));
    let dua = parseInt(prompt('Masukkan nilai kedua'));
    hitung(satu, dua);
  } else {
    alert('Terimakasih sudah berkunjung');
  }

  function hitung(a, b) {
    return alert(a * a * a + b * b * b);
  }

  konfirmasi = confirm('Apakag mau lagi?');
}
