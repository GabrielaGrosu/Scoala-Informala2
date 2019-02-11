     var lista = [];
        function getLista() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    lista = JSON.parse(this.responseText);
                    deseneazaProduse();
                }
            };
            xhttp.open("GET", "https://proiect-final-scoala-it.firebaseio.com/.json", true);
            xhttp.send();
        }
        function deseneazaProduse() {
            var str = "";
            for (var i in lista.produse) {
                str += `
                    <div  class="item" class="col-sm-12 col-md-6 col-lg-3">
                        <div class="spatiere">
                            <img width="250" class="imagine_produse" src="${lista.produse[i].imagine}"/><br/>
                            <span>
                                ${lista.produse[i].nume}
                            </span>
                            <br/>
                            <span class="pret">
                                ${lista.produse[i].pret} lei
                            </span>
                            <button class="detalii">
                                <a href="proiect final detalii.html?id=${i}" class="detaliere">Detalii</a>
                            </button>
                        </div>
                    </div>
                    `
            }
            document.querySelector(".continut").innerHTML = str;
        }