import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  
  console.log("From init()");
  console.log(config);
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  })
  
}
//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  return fetch("http://13.126.244.210:8082/cities")
  .then((data) => data.json())
  .then((data) =>{
    console.log(data);
    return data;
  })
  .catch((data) => {
    return null;
  }
  );
  

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let data = document.getElementById("data");
  let anch = document.createElement("a");
  let col1 = document.createElement("div");
  anch.setAttribute("href","pages/adventures/?city"+id);
  anch.setAttribute("id",id);
  data.appendChild(col1);
  col1.setAttribute("class","col-12 col-sm-6 col-lg-3 mb-4");  
  let tileclass = document.createElement("div");
  tileclass.setAttribute("class","tile");
  anch.appendChild(tileclass);
  col1.appendChild(anch);
  let img = document.createElement("img");
  img.setAttribute("src",image)
  tileclass.appendChild(img);
  let tiletext = document.createElement("div");
  tiletext.setAttribute("class","tile-text");
  tileclass.appendChild(tiletext);
  let cname = document.createElement("h5")
  cname.setAttribute("class","text-center text-light d-flex flex-column justify-content-end");
  cname.innerText = city;
  tiletext.appendChild(cname);
  let desc = document.createElement("p")
  desc.innerText = description;
  tiletext.appendChild(desc);
  

}

export { init, fetchCities, addCityToDOM };
