window.onload = function(){
	var motsClefs = [
		'Kommunauty',
		'Kommunaut√©',
		'K',
		'rasco',
		'Krousty',
		'Bob',
		'Boby',
		'Bobu',
		'gare de lille',
		'gare de paris'
	];
	
	var form = document.getElementById("auto-suggest");
	var input = form.search;
	
	var list = document.createElement("ul");
	list.className = "suggestions";
	list.style.display = "none";

	form.appendChild(list);

	input.onkeyup = function(){
		var txt = this.value;
		if(!txt){
			list.style.display = "none";
			return;
		}
		
		var suggestions = 0;
		var frag = document.createDocumentFragment();
		
		for(var i = 0, c = motsClefs.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(motsClefs[i])){
				var word = document.createElement("li");
				frag.appendChild(word);
				word.innerHTML = motsClefs[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
				word.mot = motsClefs[i];
				word.onmousedown = function(){					
					input.focus();
					input.value = this.mot;
					list.style.display = "none";
					return false;
				};				
				suggestions++;
			}
		}

		if(suggestions){
			list.innerHTML = "";
			list.appendChild(frag);
			list.style.display = "block";
		}
		else {
			list.style.display = "none";			
		}
	};

	input.onblur = function(){
		list.style.display = "none";
		if(this.value=="")
			this.value = "";}}
			
		
			
			
function lance(){
		var motsClefs1 = [
		'Kommunauty',
		'Kommunaut√©',
		'K',
		'rasco',
		'Krousty',
		'Bob',
		'Boby',
		'Bobu'
	];
	
	var form1 = document.getElementById("auto-suggest1");
	var input1 = form1.search1;
	
	var list1 = document.createElement("ul");
	list1.className = "suggestions1";
	list1.style.display = "none";

	form1.appendChild(list1);

	input1.onkeyup = function(){
		var txt1 = this.value;
		if(!txt1){
			list1.style.display = "none";
			return;
		}
		
		var suggestions1 = 0;
		var frag1 = document.createDocumentFragment();
		
		for(var i1 = 0, c1 = motsClefs1.length; i1 < c1; i1++){
			if(new RegExp("^"+txt1,"i").test(motsClefs1[i1])){
				var word1 = document.createElement("li");
				frag1.appendChild(word1);
				word1.innerHTML = motsClefs1[i1].replace(new RegExp("^("+txt1+")","i"),"<strong>$1</strong>");
				word1.mot = motsClefs1[i1];
				word1.onmousedown = function(){					
					input1.focus();
					input1.value = this.mot;
					list1.style.display = "none";
					return false;
				};				
				suggestions1++;
			}
		}

		if(suggestions1){
			list1.innerHTML = "";
			list1.appendChild(frag1);
			list1.style.display = "block";
		}
		else {
			list1.style.display = "none";			
		}
	};

	input1.onblur = function(){
		list1.style.display = "none";
		if(this.value=="")
			this.value = "";}
			
			
}

//france europe classList.toggle

//document.getElementById("fr").addEventListener("click",change);
function change(){
document.getElementById("fr-bottom").style.backgroundColor="darkblue";
document.getElementById("eu-bottom").style.backgroundColor="#fff";
document.querySelector(".list").innerHTML="<br /><p>Paris √† Marseille</p><p>Paris √† Lyon</p><p>Train de Paris √† Bordeaux</p><p>Train de Paris √† Metz</p><p>Marseille √† Nice</p><p>Train Nice Paris</p><p>Paris √† Perpignan en train</p><p>Lyon √† Bordeaux en train</p><p>Train de Paris √† Lille</p><p>OUIGO Bordeaux Paris</p><p>Train Paris Strasbourg</p><p>Train de Paris √† Deauville </p><p>OUIGO Strasbourg Paris</p><p>OUIGO Lyon Marseille</p><p>Paris √† Rouen</p><p>Billets de train</p><p>Horaires des trains</p><p>Trains OUIGO</p><p>Trains SNCF</p><p>Horaires trains SNCB</p>";
}

//document.getElementById("eu").addEventListener("click",change1);
function change1(){
document.getElementById("fr-bottom").style.backgroundColor="#fff";
document.getElementById("eu-bottom").style.backgroundColor="darkblue";
document.querySelector(".list").innerHTML="<br /><p>Paris √† Londres</p><p>Londres √† Paris</p><p>Paris √† Leipzig Hbf</p><p>Paris √† Amsterdam</p><p>Paris √† Bruxelles</p><p>Paris √† Gen√®ve</p><p>Paris √† Barcelone</p><p>Paris √† Le Havre</p><p>Paris √† Venise</p><p>Lyon √† Gen√®ve</p><p>Lille √† Bruxelles</p><p>Le Havre √† Paris</p><p>Bruxelles √† Paris</p><p>Paris √† Luxembourg</p><p>Lille √† Londres</p><p>Train Italie</p><p>O√Ļ aller en train en Europe</p><p>Train Espagne</p><p>Train Belgique</p><p>Train Allemagne</p>";
}

//document.getElementById("Aller").addEventListener("click",type);

//document.getElementById("Retour").addEventListener("click",type);

function type1(){
document.getElementById("Aller").type="date";
document.getElementById("Retour").type="date";
}

//fin france europe classList.toggle





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

//fin suggestion

function panier(){
	Swal.fire({
		position: 'bottom-end',
		icon: 'info',
		title: 'votre panier est vide',
		showConfirmButton: false,
		timer : 3600,
	})
}

function search(){
var depart = document.getElementById("depart");
var arrive = document.getElementById("arrive");
if(depart.value !="" && arrive.value !=""){
	localStorage.setItem("depart",depart.value);
	localStorage.setItem("arrive",arrive.value);
window.location="resultat.html";
}else{
	alert("erreur");

	// css
}
}
