var lista = [];
var id = location.search.substring(4);
function getReteta() {
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

function deseneazaTabel() {
    var str = "";
    str = `<label for="name">Nume:</label>
			<input type="text" name="nume" class="informatii" value="${lista.nume}"><br/>
			<label for="link">URL Imagine:</label>
			<input type="url" name="imagine" class="informatii" value="${lista.imagine}"></br>
			<label for="ingrediente">Ingrediente:</label>
			<input type="text" name="ingrediente" class="informatii"  value="${lista.ingrediente}"></br>
		<label for="reteta">Mod de preparare:</label>
		<input type="text" name="reteta" class="informatii" value="${lista.reteta}"></br>`;
    document.getElementById("nume").innerHTML = str;
    console.log(str);
}
function edit() {
    var preparatModificat = {};
    var inputs = document.querySelectorAll("input[name]");
    for (var i = 0; i < inputs.length; i++) {
        var b = inputs[i].getAttribute("name");
        var c = inputs[i].value;
        preparatModificat[b] = c;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location = "restaurant-admin.html";
        }
    };
    xhttp.open("PUT", `https://lista-alimente.firebaseio.com/${id}.json`, true);
    xhttp.send(JSON.stringify(preparatModificat));
}