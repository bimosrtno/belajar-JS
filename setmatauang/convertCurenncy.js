function convertCurrency (nominal, fromCurrency, toCurrency,exchangeRate){
    // variabel
    let result ="";
    let hitung =0;

    // konversi dari mata uang
    
    if (fromCurrency === "IDR" && toCurrency === "USD"){
        nominal = Math.floor(nominal/exchangeRate); //
        result = "US$";
    } else if (fromCurrency === "USD" && toCurrency === "IDR"){
        nominal = Math.floor(nominal*exchangeRate);
        result = "Rp"; 
        
    } else {
        return "tidak valid";
    }
    let formatredNominal = "";

    // lebih besar dari nol di loop
    while (nominal > 0) {
        let digit = nominal % 10;
        formatredNominal = digit + formatredNominal;
        hitung++;

        // jika sudah 3 digit ada angka di depan tambahkan .
        if (hitung % 3 === 0 && nominal >= 10) {
            formatredNominal = "." + formatredNominal;
        }
        nominal = Math.floor(nominal / 10);
    }
    result += formatredNominal;
    return result;

}

// run
console.log(convertCurrency(1000000, "USD", "IDR", 14000)); //Rp 14.000.000.000
console.log(convertCurrency(1000000, "IDR", "USD", 14000)); //US$71
console.log(convertCurrency(1000000, "USD", "USD", 14000)); //tidak valid