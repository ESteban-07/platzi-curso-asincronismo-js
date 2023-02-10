/*
<---------- RETO ---------->

Llamar a la API de escuela de javascript la cual nos proporciona información
de un e-commerce. En este caso lo que queremos traer son todos los productos,
particularmente, hacer un llamado a un producto en específico y luego llamar
a la categoría a la cual pertenece y mostrar esta información al finalizar
las solicitudes que estaremos haciendo a este servidor.
*/

const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error('Error' + urlApi);
      return callback(error, null);
    }
  };
  xhttp.send();
}
