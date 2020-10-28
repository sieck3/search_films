const SearchBar = (function () {
    function createElement(tagName, attributes) {
        const element = document.createElement(tagName)

        for (let i = 0; i < attributes.length; i++) {
            element.setAttribute(attributes[i].name, attributes[i].value)
        }

        return element
    }

    function readTextFile(file) {
        let mmm = '';
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.overrideMimeType('text/xml; charset=iso-8859-1');
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    let allText = rawFile.responseText;
                    mmm = allText;
                }
            }
        }
        rawFile.send(null);
        return mmm;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function timer() {
        let imagePath = '/pelis/films.txt';
        console.log('Taking a break...');
        // let x = readTextFile(imagePath);
        // await sleep(2000);
        console.log('Two seconds later, showing sleep in a loop...', x);
        // return x;
    }

    return {


        init: function () {

            console.log("Hola del modulo");
            //Input
            let inputSS = document.getElementById("input_buscador");
            let contenedor = document.getElementById("contenedor");

            inputSS.addEventListener("keyup", async function (event) {
                event.preventDefault();
                let valor_input = inputSS.value;
                let imagePath = '/pelis/films.txt';
                let x = readTextFile(imagePath);
                let modX = x.split("\n", x.length);
                modX.forEach((element, index) => {

                    if (element.toLowerCase().indexOf(valor_input.toLowerCase()) > -1) {

                        if (!document.getElementById(index + "")) {

                            let label = createElement('label', [{ name: 'id', value: index }, { name: 'class', value: 'pelicula' }]);
                            label.innerHTML = element;
                            contenedor.appendChild(label);
                        }
                    } else {

                        if (document.getElementById(index + "")) {
                            document.getElementById(index + "").remove();
                        }

                    }

                });



            })

        }
    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    // instance d'object Module memoire
    SearchBar.init()
}, false)