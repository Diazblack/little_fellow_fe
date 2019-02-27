
let petLocation = document.getElementById("location");
let petSex = document.getElementById("sex");
let petSize = document.getElementById("size");
let petAnimal = document.getElementById("animal");
let petAge = document.getElementById("age");
let petBreed = document.getElementById("breed");
let petCount = document.getElementById("count");
let findSubmit = document.getElementById("find-button");

findSubmit.addEventListener('click', function() {
  let url = `https://little-fellow-be.herokuapp.com/api/v1/find?${getUrl()}`;
  fetch(url)
    .then(response => response.json())
    .then(petData => {petList(petData)})
    .catch(error => console.log(error))
})

function petList(petData) {
  $.each(petData, function(index, pet) {
    eachPet(pet);
  })
}

function eachPet(pet) {
  var container = `<ul id="${pet.id}" class="pet-card">`
  for(var key in pet) {
    var aceptedKeys = (key == "name" || key == "city" || key == "sex" || key == "size" || key == "name" || key == "breed" || key == "animal" || key == "age");
    if(pet[key] == null && aceptedKeys){
      container += `${key}: information not available`
    }
    else if (aceptedKeys) {
      container += `<li>${key}: ${pet[key]}</li>`
    }
  }
  container += "<ul>"
  $('.list-section').append(container);
}

function getUrl() {
  var values = {
    location: petLocation.value,
    size: petSize.value,
    sex: petSex.value,
    animal: petAnimal.value,
    age: petAge.value,
    breed: petBreed.value,
    count: petCount.value
  }
  var output = "";
  for(var key in values) {
    if(values[count] > 20) {
      output += "count=20"
    }
    else if (values[key] !== "") {
      output += `${key}=${values[key]}&`
    }
  }
  return output;
}
