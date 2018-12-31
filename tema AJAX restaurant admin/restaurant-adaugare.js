var lista = [];
function getReteta() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            lista = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "https://lista-alimente.firebaseio.com/.json", true);
    xhttp.send();
}
function adaugare(s, event) {
    event.preventDefault();
    var preparatNou = {};
    var inputs = s.querySelectorAll("input[name]");
    for (var i = 0; i < inputs.length; i++) {
        var b = inputs[i].getAttribute("name");
        var c = inputs[i].value;
        preparatNou[b] = c;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location = "restaurant-admin.html"
        }
    };
    xhttp.open("POST", "https://lista-alimente.firebaseio.com/.json", true);
    xhttp.send(JSON.stringify(preparatNou));
}