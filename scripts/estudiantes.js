// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('https://pruebas-1-69c8.onrender.com/students');
  displayAllData(data);
};

function displayAllData(data) {
  for (const element of data) {
    displayRow(element);
  }
  
}

function displayRow(info) {
  var tabla = document.getElementById('tablaEstudiantes');
  var fila = document.createElement("tr");
  var nombre = document.createElement("td");
  nombre.innerHTML = info.firstName;
  fila.appendChild(nombre);
  var apellido = document.createElement("td");
  apellido.innerHTML = info.lastName;
  fila.appendChild(apellido);
  var edad = document.createElement("td");
  edad.innerHTML = info.age;
  fila.appendChild(edad);
  var grado = document.createElement("td");
  grado.innerHTML = info.grade;
  fila.appendChild(grado);
  var dificultad = document.createElement("td");
  dificultad.innerHTML = info.disabilities[0].disability;
  fila.appendChild(dificultad);
  var observacion = document.createElement("td");
  observacion.innerHTML =  info.disabilities[0].observations;
  fila.appendChild(observacion);
  tabla.appendChild(fila);
}

getData();