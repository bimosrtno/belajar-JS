function setDollar(nom) {
    //variabel
    let usd= "US$";
    let nominal = "";
    let hitung = 0;
  
    // angka lebih besar dari nol di loop
    while (nom > 0) {
        //digit terakhir dari angka
      let digit = nom % 10;
      nominal = digit + nominal;
      hitung++;
  
      // jika sudah 3 digit ada angka di depan tambahkan .
      if (hitung % 3 === 0 && nom >= 10) {
        nominal = "." + nominal;
      }
      // // Hapus digit terakhir dari angka dengan pembagian bulat 10
      nom = Math.floor(nom / 10);
    }
    usd += nominal;
    return usd;
  }

  // RUN
  console.log(setDollar(111111)); //US$ 111.111
  console.log(setDollar(1809)); // US$ 1.809