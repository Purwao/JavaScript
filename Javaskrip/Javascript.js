function hallo(){
    alert("Halo Javascript");
}
function waktu(){
    document.getElementById('waktu').innerHTML=Date();
}
function Zodiak(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;
    let zodiak="invalid";
    if(bulan==1){
        if(tanggal>0 && tanggal<20){
           zodiak="Aries";
        }
        if(tanggal>19 && tanggal<32){
            zodiak="Pisces";
        }
    }
    if(bulan==2){
        if(tanggal>0 && tanggal<20){
            zodiak="banteng";
        }
    }
    document.getElementById('zodiak').innerHTML=zodiak;
}
function kali(){
    let a=document.getElementById('bil1').value;
    let b=document.getElementById('bil2').value;
    let hasil=a*b;
    document.getElementById('hasil').innerHTML=hasil;
}
function tambah(){
    
}

let btn= document.getElementById('jam');

btn.onclick=function(){
    document.getElementById('waktu').innerHTML=Date();
}

let isi= document.getElementById('ketik');
let tampil= document.getElementById('waktu');
isi.onmouseover=function(){
    tampil.innerHTML=isi.value;
}

let hari= document.getElementById('hari');
hari.addEventListener("click",coba);

function coba(){
    alert("coba coba");
}

let anu= document.getElementById('muncul');
anu.addEventListener("click",Zodiak)