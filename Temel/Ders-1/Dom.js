//document.getElementById("bio").innerHTML="Talha Yüksek";
// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");
// mesaj.innerHTML = intro1.innerHTML;
// var tumliste = document.getElementsByTagName("ul");
// var sehirler = tumliste[0];
// tumelemanlar = sehirler.getElementsByTagName("li");
// for (i = 0; i < tumelemanlar.length; i++) {
//   alert(tumelemanlar[i].innerHTML);
// }

// var classElemanlari=document.getElementsByClassName("intro1");
// alert(classElemanlari[0].innerHTML);
// var queryElemanlari = document.querySelectorAll("p.intro1");
// alert(queryElemanlari.length);
// var talha=document.getElementById("talha").addEventListener("click",rengiDegistir);
// function rengiDegistir(){
//     document.getElementById("div1").style.color="red";
// var isimelemani=document.getElementsByName("musteriAdi");
// isimelemani[0].value="Talha YMusteri";

// }

// var node=document.getElementById("agac");
// alert(node.childNodes[0].nodeValue)

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba Javascript");
baslik.appendChild(node);
baslik.style.color = "red";
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik, p2);
alert("p2 Siliniyor..");
div1.removeChild(p2);
