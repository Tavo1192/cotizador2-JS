/*  cotizador on-line para vehiculos*/
// alert("Bienvenido/a al cotizador de seguros On-line Kagler");



const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener('change', updateValue);

function updateValue(e) {
log.textContent = e.target.value;
}
/*----------------------------------------------*/

const form = document.querySelector("#formulario");
const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(event);
};
form.addEventListener("submit", enviarFormulario);


/*-----------------------------------------------*/

const marcas = ['FORD', 'RENAULT', 'FIAT', 'VOLSKWAGEN','AUDI', 'MERCEDES BENZ', 'CITROEN', 'HONDA','TOYOTA', 'BMW', 'DODGE', 'ALFA ROMEO'];
let select = document.createElement("select");
for (let index = 0; index < marcas.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${marcas[index]}</option>`;
}

select.addEventListener('change', function (e) {
    const h3 = document.createElement('h3');
    h3.innerHTML = marcas[e.target.value];
    document.body.appendChild(h3);
})
document.body.appendChild(select);