window.onload=function(){
    var mail = localStorage.getItem("mail");
    document.getElementById("mail").innerHTML= mail;
}

function voyage(){window.location="http://127.0.0.1:5500/Voyage/Voyage.html"}

function panier1(){
	Swal.fire({
		position: 'bottom-end',
		icon: 'info',
		title: 'votre panier est vide',
		showConfirmButton: false,
		timer : 3600,
	})
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
/*var btn = document.getElementById("myBtn");*/

var btn = document.querySelector(".menu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

/*btn.onclick = */ 
function btn1() {
	document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal

/*span.onclick =*/ 
function span1() {
	document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

window.onload = function (){
	var price = localStorage.getItem('price');
document.getElementById("price").innerHTML= price;
}

function valid(){
	document.getElementById('buy').style.display="block";
}

function closebuy(){
	document.getElementById('buy').style.display="none";
}