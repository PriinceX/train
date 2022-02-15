// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
/*var btn = document.getElementById("myBtn");*/

var btn = document.querySelector(".menu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

/*btn.onclick = */ function btn1() {
	document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal

/*span.onclick =*/ function span1() {
	document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

function resultat(){window.location="resultat.html"}

window.onload=function(){
  var depart =localStorage.getItem("depart");
  var arrive= localStorage.getItem("arrive");
 document.getElementById("text1").innerHTML=depart;
 document.getElementById("text2").innerHTML=arrive;
  }

function voyage(){window.location="Voyage.html"}

function panier1(){
	Swal.fire({
		position: 'bottom-end',
		icon: 'info',
		title: 'votre panier est vide',
		showConfirmButton: false,
		timer : 3600,
	})
}

/*prix aleatoire*/

// window.onload = function (){
// 	var valeur = Math.random()*(150 - 35)+35;
// 	valeur = valeur.toFixed(2);
// document.getElementById("100").innerHTML=valeur+" $";
// }


function pre(){
	document.getElementById("100").innerHTML="125,27€";
	var price = "125,27€";
	localStorage.setItem("price", price)
}

function sec(){
	document.getElementById("100").innerHTML="105,23€";
	var price = "105,23€";
	localStorage.setItem("price", price)
}
