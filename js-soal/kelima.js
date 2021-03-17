const soalKelima = function(){
    // const arrayKelima = undefined;
    const arrayKelima = [1,2,3];


    // ------------------ code dibawah baris ini jangan dirubah ------------------
        if(Array.isArray(arrayKelima)){
            document.getElementById("hasil1").innerHTML = ''
            loadSoalKeenam(arrayKelima);
        } else{
            document.getElementById("hasil1").innerHTML = 'Error..'
        }
};


function loadSoalKelima(){
    document.getElementById("hasil1").innerHTML = 'Tidak ada yang salah, lanjut'
    document.getElementById("soal").innerHTML = `
        <br/>
        <h1>Soal 5</h1>
        <br/>
        <button onclick="soalKelima()">Lanjut Soal 6</button>
    `
};
    // --------------------- batas code untuk tidak dirubah ----------------------
