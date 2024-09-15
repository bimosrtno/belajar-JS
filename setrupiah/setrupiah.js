function setRupiah(angka) {
    //variabel
    let rupiah = "Rp ";
    let nominal = "";
    let hitung = 0;
  
    // angka lebih besar dari nol di loop
    while (angka > 0) {
        //digit terakhir dari angka
      let digit = angka % 10;
      nominal = digit + nominal;
      hitung++;
  
      // jika sudah 3 digit ada angka di depan tambahkan .
      if (hitung % 3 === 0 && angka >= 10) {
        nominal = "." + nominal;
      }
      // // Hapus digit terakhir dari angka dengan pembagian bulat 10
      angka = Math.floor(angka / 10);
    }
    rupiah += nominal;
    return rupiah;
  }
 
  // run
 
  console.log(setRupiah(111111)); // Rp 111.111
  console.log(setRupiah(123123123)); // Rp 123.123.123
  console.log(setRupiah(199)); // Rp 199
  console.log(setRupiah(120501232123211312230)); // Rp 120.501.232.123.211.322.248
  console.log(setRupiah(99999999)); // Rp 99.999.999

  // note dari gpt

//Inisialisasi: Fungsi setRupiah dimulai dengan membuat string "Rp " dan variabel nominal yang kosong. hitung digunakan untuk menghitung setiap digit yang diproses.
//Loop: Selama ada angka yang tersisa (angka > 0), digit terakhir dari angka diambil dengan angka % 10 dan ditambahkan ke string nominal.
//Pemisah Ribuan: Setiap 3 digit, sebuah titik (.) ditambahkan di depan string nominal jika masih ada angka yang tersisa.
//Hapus Digit: Digit terakhir dihapus dari angka dengan Math.floor(angka / 10).
//Hasil Akhir: Setelah loop selesai, string "Rp " digabung dengan nominal yang sudah diformat, dan hasilnya dikembalikan.
//Kode ini efektif dalam memformat angka menjadi format mata uang Rupiah dengan pemisah ribuan.

// ANEH klick kanan run code, pake terminal tak bisa



