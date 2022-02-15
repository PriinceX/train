function choix(){window.location="http://127.0.0.1:5500/Choix/choix.html"}

function valid(){
   var mail= document.getElementById("mail");
   var prenom=  document.getElementById("prenom");
   var nom=  document.getElementById("nom");
   var date=  document.getElementById("date");
   var mois=  document.getElementById("mois");
   var annee= document.getElementById("annee");
    if(mail.value!="" && prenom.value!="" && nom.value!="" && date.value!="" && mois.value!="Mois" && annee.value!=""){
        localStorage.setItem("mail",mail.value );
        localStorage.setItem("prenom",prenom.value );
        localStorage.setItem("nom",nom.value );
        localStorage.setItem("date",date.value );
        localStorage.setItem("mois",mois.value );
        localStorage.setItem("annee",annee.value );
        window.location="http://127.0.0.1:5500/paiement/Paiement.html";
    }else{
        alert("erreur");
    }
}

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
