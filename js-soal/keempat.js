
const soalKeempat = function(){
    let array_ku =['yanuar', 'echo', 'mugi'];
    const kebenaran = array_ku;



    // ------------------ code dibawah baris ini jangan dirubah ------------------
    try {
        if(kebenaran.toString()){
            document.getElementById("hasil1").innerHTML = ''
            loadSoalKelima();
        }
    } catch(err) {
        document.getElementById("hasil1").innerHTML = 'Error..'
        console.log(err.message)
    }
};


function loadSoalKeempat(){
    document.getElementById("hasil1").innerHTML = ''
    document.getElementById("soal").innerHTML = `
        <br/>
        <h1>Soal 4</h1>
        <br/>
        <label>let array_ku = []</label>
        <br/>
        <label>array_ku = []</label>
        <br/>
        <br/>
        <label>Mantap</label>
        <br/>
        <br/>
        <button onclick="soalKeempat()">Lanjut Soal 5</button>
    `
};
    // --------------------- batas code untuk tidak dirubah ----------------------
