var lista = [];
console.log(lista);
function getLista() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            lista = JSON.parse(this.responseText);
            deseneazaTabel();
        }
    };
    xhttp.open("GET", "https://lista-alimente.firebaseio.com/.json", true);
    xhttp.send();
}
function deseneazaTabel() {
    var str = "";
    for (var i in lista) {
            str += `<tr>
                <td><img width="100"  src="${lista[i].imagine}"/></td>
                    <td>
                    <strong>${lista[i].nume}</strong><br/>
                    ${lista[i].ingrediente}
                </td>
                    <td> 
                        <button id="modifica"><a href="restaurant-modificare.html?id=${i}">MODIFICA</a></button>
                        <button id="sterge"><a href="restaurant-stergere.html?id=${i}">STERGE</a></button>      	
                    </td>
                </tr>`;
    }
    console.log(str);
    document.querySelector("table").innerHTML = str;
}
