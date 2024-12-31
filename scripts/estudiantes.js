// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('https://pruebas-1-69c8.onrender.com/students');
  displayAllData(data[1]);
};

function displayAllData(data) {
  displayProfessionalName(data.firstName);
  displayImage(data.lastName);
  displayPrimaryDescription(data);
  displayWorkDescription(data);
  displayLinkTitleText(data);

}

function displayProfessionalName(n) {
  let professionalName = document.getElementById('professionalName');
  professionalName.innerHTML = n;
}

function displayImage(img) {
  let image = document.getElementById('professionalImage');
  image.innerHTML = img;
}
function displayPrimaryDescription(data) {
  let nameLink = document.getElementById('nameLink');
  nameLink.innerHTML = data.firstName;
  let primaryDescription = document.getElementById('primaryDescription');
  primaryDescription.innerHTML = data.age;
}

function displayWorkDescription(data) {
  let workDescription1 = document.getElementById('workDescription1');
  workDescription1.innerHTML = data.disabilities[0].disability;
  let workDescription2 = document.getElementById('workDescription2');
  workDescription2.innerHTML = data.disabilities[0].observations;
}

function displayLinkTitleText(data) {
  let linkTitle = document.getElementById('linkTitleText');
  linkTitle.innerHTML = data.grade;
}


getData();