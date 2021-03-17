const soalKeenam = function(arrayDiolah){
    // belum dibuat


    // ------------------ code dibawah baris ini jangan dirubah ------------------
    try{
        document.getElementById("hasil1").innerHTML = `nilai array ke 4 adalah ${arrayDiolah[9]}`
        loadSoalKetujuh();
    } catch(err){
        document.getElementById("hasil1").innerHTML = 'Error..'
        console.log(err.message)
    }
};


function loadSoalKeenam(arrayKelima){
    document.getElementById("hasil1").innerHTML = 'Tidak ada yang salah, lanjut'
    document.getElementById("soal").innerHTML = `
        <br/>
        <h1>Soal 6</h1>
        <br/>
        <button onclick="soalKeenam(${arrayKelima})">Lanjut Soal 7</button>
    `
};
    // --------------------- batas code untuk tidak dirubah ----------------------
