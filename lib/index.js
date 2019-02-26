
function randomPet() {
  let url = 'https://little-fellow-be.herokuapp.com/api/v1/'
  fetch(url)
    .then(response => response.json())
    .then(petData => {petshow(petData)})
    .catch(error => console.log(error))
}

function petshow(petData) {
  var img = $('<img />', {src : `${petData.img_ulr}`});
  img.appendTo('#pet-img');
  var pronoum = ''
  var description = ''
  petData.description == 'null' ? description = "Description is not available" : description = petData.description;
  petData.sex == 'F' ? pronoum = `Her name is ${petData.name}` : pronoum = `His name is ${petData.name}`

  var petInfo = `<div class="pet-info-wrapper"><ul><li>${pronoum}</li> <li>${description} </li><li>Location: ${petData.city}, ${petData.state}</li></ul></div>`
  $('.pet-info').append(petInfo);
}

$( document ).on("load", randomPet());
