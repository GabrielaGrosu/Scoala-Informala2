var lista={};
		console.log(lista);
		var id=location.search.substring(4);
			function getLista() {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						lista = JSON.parse(this.responseText);
						deseneazaTabel();
					}
				};
				xhttp.open("GET", `https://lista-alimente.firebaseio.com/${id}.json`, true);
				xhttp.send();
			}
		function sterge() {
					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							window.location="restaurant-admin.html"; 
						}
					};
					xhttp.open("DELETE", `https://lista-alimente.firebaseio.com/${id}.json`, true);
					xhttp.send();
		}
		function anuleazaStergerea() {
					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							window.location="restaurant-admin.html"; 
						}
					};
					xhttp.open("GET", `https://lista-alimente.firebaseio.com/.json`, true);
					xhttp.send();
		}		
		function deseneazaTabel() {
			document.getElementById("nume").innerHTML = lista.nume;
		}