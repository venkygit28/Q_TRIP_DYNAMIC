
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
    let index = search.indexOf("?city=");
    return search.substring(index+6)
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  
 return fetch(config.backendEndpoint+"/adventures?city="+city)
  .then((response) => response.json())
  .catch((err) => null);
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
let root = document.getElementById("data");
root.innerHTML= "";
adventures.forEach((element) => {
  let mainDiv = document.createElement("div");
  root.appendChild(mainDiv);
  mainDiv.setAttribute("class","col-12 col-sm-6 col-lg-3 mb-4");
  let anchor = document.createElement("a");
  mainDiv.appendChild(anchor);
  anchor.setAttribute("id", element.id);
  anchor.setAttribute("href", "detail/?adventure="+element.id);
  let activity_card = document.createElement("div"); 
  activity_card.setAttribute("class", "activity-card");
  anchor.appendChild(activity_card); 
  let activity_card_img = document.createElement("img");
  activity_card_img.setAttribute("id",element.name); 
  activity_card.appendChild(activity_card_img);
  activity_card_img.setAttribute("class", "activity-card-image");
  activity_card_img.setAttribute("src",element.image);
  let adventure_detail_card = document.createElement("div");
  activity_card.appendChild(adventure_detail_card); 
  adventure_detail_card.setAttribute("class", "adventure-detail-card");
// row 1

let row_1= document.createElement("div"); 
row_1.setAttribute("class", "d-flex justify-content-between flex-wrap");
adventure_detail_card.appendChild(row_1);
let row_1_col_1 = document.createElement("div");
row_1_col_1.innerText = element.name;
row_1.appendChild(row_1_col_1);

let row_1_col_2 =document.createElement("div"); 
row_1_col_2.innerHTML =`${element.costPerHead}`
row_1.appendChild(row_1_col_2);

//row 2 
let row_2 = document.createElement("div");
row_2.setAttribute("class", "d-flex justify-content-between"); 
adventure_detail_card.appendChild(row_2);
let row_2_col_1 = document.createElement("div"); 
row_2_col_1.innerText = "Duration";
row_2.appendChild(row_2_col_1); 
let row_2_col_2 = document.createElement("div");

row_2_col_2.innerText = element.duration+"Hours";
row_2.appendChild(row_2_col_2);

/*Banner*/

let banner = document.createElement("div");
activity_card.append(banner);
banner.setAttribute("class","category-banner shadow");
banner.innerText = element.category;
}
);}
//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  let res = [];
  for(var i of list){
    if(i.duration >= low && i.duration<= high) res.push(i)
  }
    return res;
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
let res = [];
for(var i of list){
if(categoryList.includes(i.category)) res.push(i)
}
return res

}


// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  console.log(filters.duration.split("-"))
  
  // TODO: MODULE_FILTERS
  let filteredList = []
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  if(filters["category"].length >0 && filters["duration"].length >0 ){
    let arr = filters["duration"].split("-");
  filteredList = filterByCategory(list,filters.category)
  filteredList = filterByDuration(filteredList,arr[0],arr[1]);
  return filteredList
  }
  else if(filters.category.length){
  list = filterByCategory(list,filters.category)
}
else if(filters.duration.length){
  let arr = filters["duration"].split("-");
  list = filterByDuration(list,arr[0],arr[1]);
}
  else{
    console.log(list)
    return list;
  
}return list}
// Place holder for functionality to work in the Stubs
//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  localStorage.setItem("filters",JSON.stringify(filters))
   return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
let p = localStorage.getItem('filters');
return JSON.parse(p)
  // Place holder for functionality to work in the Stubs
  // return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
for(let i=0;i<filters.category.length;i++){
  let p = document.getElementById("category-list")
  let v = document.createElement("div");
  v.className = "category-filter"
  v.innerText = filters.category[i];
  p.appendChild(v);
  
}
}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
