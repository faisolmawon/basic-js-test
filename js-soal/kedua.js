function soalKedua(namaKantor, namaAnda){
    namaKantor = document.getElementById("insertedName").value;
    value = namaKantor;
    nama = namaAnda;
    document.getElementById("hasil1").innerHTML = 'Error: buka console untuk lihat error';
    let varSoal2 = undefined;


    // ------------------ code dibawah baris ini jangan dirubah ------------------
    varSoal2 = namaKantor;

    if(varSoal2 !== namaKantor){
        document.getElementById("hasil1").innerHTML = 'Masih error: variable varSoal2 dan variable namaKantor harus bernilai sama';
    }else if(varSoal2 === undefined){
        document.getElementById("hasil1").innerHTML = 'Masih error: variable varSoal2 harus punya nilai baru bukan undefined';
    }else{
        document.getElementById("hasil1").innerHTML = '';
        loadSoalKetiga(namaAnda, namaKantor);
    }
};

function loadSoalKedua(nama){
    document.getElementById("soal").innerHTML = `
        <h3>Selamat ${nama} kita lanjut..</h3>
        <h1>Soal 2</h1>
        Masukan nama kantor <input  id="insertedName" />
        <button onclick="soalKedua(insertedName.value, '${nama}')">Lanjut Soal 3</button>
    `
};
    // --------------------- batas code untuk tidak dirubah ----------------------
