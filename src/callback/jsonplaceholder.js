const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://jsonplaceholder.typicode.com';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  // Abrimos la petición
  xhttp.open('GET', urlApi, true);

  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + urlApi);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

fetchData(`${API}/users`, function (error, data) {
  if (error) return console.error(error);

  console.log(data);
});
