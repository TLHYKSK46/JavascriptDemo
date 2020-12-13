var  kullanicilar=[
{email:"asd@asd.com",sifre:"123"},
{email:"a@a.com",sifre:"123"}


]
var tivitler=[
    {email:"asd@asd.com",tivit:"Selam asd"},
    {email:"asd@asd.com",tivit:"Selam asd"},
    {email:"a@a.com",tivit:"Selam a"}
]
var email=prompt("Email?");
var sifre=prompt("Sifre?");

function giris(email){
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre)||(email==kullanicilar[0].email && sifre==kullanicilar[0].sifre))
    {
        console.log(tivitler)
    }else{
        console.log("Kullanıcı Adı Ve şifre Hatalı");
    }
}

giris(email,sifre);



















/*var div=document.getElementById("div");
var body=document.getElementsByTagName("body");
div.style.borderRadius="30px";
div.style.backgroundColor="red";
div.style.padding="10px";
div.style.width="5px";
div.style.height="5px";

function divartir() {
var divs=document.createElement("div");
divs.innerHTML="asfa";
body.appendChild(div);   
}
function mauseHover() {

    div.style.padding="20px";
    div.style.transition="1s";
}
divartir();
function mauseOut() {
    div.style.padding="10px";

}
"asfaf";
*/
/*var metin="Merhaba hayat ne kadar güzel değil mi?";
document.write(metin+"<br/>");
sonuc="";
for(sonuc in metin){
document.write(metin[sonuc]+"<br/>");

}*/



/*
var asd=document.getElementsByTagName("div")[0];
asd.innerHTML="merhaba";
asd.style.backgroundColor="#bbb555";
asd.style.fontFamily="arial";
asd.style.fontSize="25";
asd.style.margin="200";
asd.style.transform="rotate(95deg)";
*/


/*
var date=new Date();
var saat=date.getHours();
var saniye=date.getSeconds();
var dakika=date.getMinutes();

setInterval(function(){
    var saat=date.getHours();
var saniye=date.getSeconds();
var dakika=date.getMinutes();
   // document.write(saat+":"+dakika+":"+saniye);


},1000);
document.write(saat+":"+dakika+":"+saniye);*/



   /* setInterval(function(){
        i=0;
      
        document.write(i=i+1);
        document.write("<br/>");
        i=i+1;  
      },1000);*/




/*var asd=Math.floor(Math.random()*100)+1;
document.write("<br/>");
var tahmin=prompt("sayi Gir lan",);
document.writeln(asd+":"+tahmin);
document.write("<br/>");

var metin = "Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,Merhaba,";
var aaa=document.getElementById("testid").innerHTML="merhabbb";
document.writeln(aaa);*/

//document.write(metin.length);

//document.getElementById("h1").innerHTML = "Merhaba";
//document.getElementById("h1").innerHTML = "Merhaba";
/*var mesaj="merhaba dunya ne haber";
alert("Merhaba Javascript "+mesaj);
console.log(mesaj);
window.alert(mesaj);
document.write("merhabaa");
document.getElementsByTagName("h1").innerHTML = "asdasf";
debugger;
var asd=document.getElementById('testid').innerHTML = ("Merhaba");
asd.fontcolor("#asd123");
asd.fontsize(25);
asd.bold();
document.writeln(asd);
document.writeln("Hello Word,")

function asd(a = 5, b = 25) {
    alert("Sonuc:" + 5 * 25);

}
asd();
let isim="Talha\n";
if(true)
{
    let isim="\nYuksek"
    document.write(isim);
}
document.write(isim);
*/