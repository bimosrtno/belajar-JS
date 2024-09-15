// konversi dari jam ke menit

function konversiMenit(angka) {
    const jam = Math.floor(angka/60);
    const menit = angka % 60;
    let hasil= "";
    if (jam>0){
        hasil += jam + ":";
    } 
    else {
        hasil +="0";
    }

    if (menit<10){
        hasil +="0" + menit;
    }
    else {
        hasil += menit;
    }

    return hasil;

}

// TEST CASES 

console.log(konversiMenit(63)); //1:03
console.log(konversiMenit(68)); //1:06
console.log(konversiMenit(586)); //9:46
console.log(konversiMenit(1987)); //33:07
console.log(konversiMenit(9999)); // 166:39
console.log(konversiMenit(7777)); // 129:37
console.log(konversiMenit(99999)); //1666:39

// negative cases  > 1 jam

console.log(konversiMenit(33)); // 033
console.log(konversiMenit(-3)); // 00-3 
console.log(konversiMenit(-10)); // 00-10
