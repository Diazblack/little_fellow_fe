
function randomPet() {
  let url = 'https://little-fellow-be.herokuapp.com/api/v1/'
  fetch(url)
    .then(response => response.json())
    .then(petData => {petRandom(petData)})
    .catch(error => console.log(error))
}

function petRandom(petData) {
  var image = document.getElementById("random-pet");
  loadImages(image, petData.img_url);

  var pronoum = ''
  var description = ''
  petData.description == null ? description = "Description is not available" : description = petData.description;
  var name = `${petData.name}`

  petData.sex == 'F' ? pronoum = `Her name is ${name}` : pronoum = `His name is ${name}`

  var petInfo = `<div class="pet-info-wrapper"><ul><li>${pronoum}</li> <li>${description} </li><li>Location: ${petData.city}, ${petData.state}</li> <li><button type="button" class="button" onclick="petToggle()">Click me for more information</button></li></ul></div>`
  $('.pet-info').append(petInfo);
  petShow(petData);
}

function petToggle() {
  $('.pet-info').toggleClass('hidden-display');
  $('.pet-info-show').toggleClass('hidden-display');
}

function petShow(data) {
  for(var key in data){
    if (key !== 'img_url'&& key !== 'id' && key !== 'shelter_id'  ) {
      var contentField = ''
      data[key] == null ? contentField = 'Information not available' : contentField = data[key]
      var field = `<li class="field-title">${key}: ${contentField}</li>`
      $('.pet-info-list').append(field);
    }
  };
}

function loadImages(image, url) {
  var downloadingImage = new Image();
  downloadingImage.onload = function(){
      image.src = this.src;
  };
  downloadingImage.src = url;
}


$("document").on("load", randomPet());
