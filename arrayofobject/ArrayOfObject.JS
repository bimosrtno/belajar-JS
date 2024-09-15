
// berlatih array of object

const people =[
    {
        id: 1,
        nik: 322,
        nama:"zoro",
        jenisKelamin:"laki-laki",
        tempatAsal:"jakarta",
        domisili:"jayapura",
        golonganDarah:"O",
        hobi:["tidur,minum jus"],
    },
    {
        id: 2,
        nik: 246,
        nama:"luffy",
        jenisKelamin:"laki-laki",
        tempatAsal:"bekasi",
        domisili:"makasar",
        golonganDarah:"B",
        hobi:["makan,joging"],
    },
    {
        id: 3,
        nik: 311,
        nama:"sanji",
        jenisKelamin:`laki-laki`,
        tempatAsal:"depok",
        domisili:"yogyakarta",
        golonganDarah:"A",
        hobi:["baca buku,ngemil"],

    },
    {
        id: 4,
        nik: 571,
        nama:"nami",
        jenisKelamin:"perempuan",
        tempatAsal:"bandung",
        domisili:"jakarta",
        golonganDarah:"A",
        hobi:["belanja,tidur"],

    }
];

 // akses data

console.log(people[0].nik);   //output 322
console.log(people[0.].nama);  //output zoro
console.log(people[0].jenisKelamin); //output laki-laki