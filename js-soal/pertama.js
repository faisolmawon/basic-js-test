let namaDefault = 'belum terganti'

function soalPertama(value){
    let nama = namaDefault;

    // ------------------ code dibawah baris ini jangan dirubah ------------------
    console.log('console.log soal satu:\n\nvariable namaDefault:', `"${namaDefault}"`, 'varibale nama:', `"${nama}"`, 'variable value:', `"${value}"`)
    let elementHasil = document.getElementById("hasil1")

    if(nama === namaDefault){
        elementHasil.innerHTML = `Masih salah :( <br/>lihat inspect > console di browser`
    } else {
        if(nama === ""){
            elementHasil.innerHTML = "Jangan isi kosongan, isi namamu"
        } else {
            elementHasil.innerHTML = ""
            loadSoalKedua(nama);
        }
    }
};
    // --------------------- batas code untuk tidak dirubah ----------------------
