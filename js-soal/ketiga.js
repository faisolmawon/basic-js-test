const soalKetiga = function(){
    document.getElementById("soal").innerHTML = `
        <br/>
        <h1>Soal 3</h1>
        <br/>
        <div>Error..</div>
        <button onclick="soalKetiga()">Lanjut Soal 4</button>`
    document.getElementById("hasil1").innerHTML = '';

    // ------------------ code dibawah baris ini jangan dirubah ------------------
    loadSoalKeempat();
};

function loadSoalKetiga(nama, kantor){
    document.getElementById("soal").innerHTML = `
        <h3>Mantap ${nama} di ${kantor}, lanjut..</h3>
        <h1>Soal 3</h1>
        <br/>
        <button onclick="soalKetiga()">Lanjut Soal 4</button>
    `
    document.getElementById("hasil1").innerHTML = `Mungkin ada yang salah.. lihat console setelah klik tombol`
};
    // --------------------- batas code untuk tidak dirubah ----------------------
