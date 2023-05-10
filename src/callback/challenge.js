/*
<---------- RETO ---------->

Llamar a la API de escuela de javascript la cual nos proporciona información
de un e-commerce. En este caso lo que queremos traer son todos los productos,
particularmente, hacer un llamado a un producto en específico y luego llamar
a la categoría a la cual pertenece y mostrar esta información al finalizar
las solicitudes que estaremos haciendo a este servidor.
*/

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        // callback sends first argument null for errors
        // and second argument with the server response
        // as object literal parsed from JSON
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        // callback sends first argument with error from server
        // and second argument is null meaning without response
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);

  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.log(error2);

    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);

        console.log('callback1 (first product from products)', data1[0]);
        console.log('callback2 (first product title)', data2.title);
        console.log('callback3 (first product category name)', data3.name);
      }
    );
  });
});
