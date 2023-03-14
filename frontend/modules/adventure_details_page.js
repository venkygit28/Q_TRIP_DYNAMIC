import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  // console.log(search)
  const params = new URLSearchParams(search);
  let advid = params.get("adventure");
  console.log(advid);
  return advid;
  // Place holder for functionality to work in the Stubs
  // return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    return fetch(
      config.backendEndpoint + "/adventures/detail?adventure=" + adventureId
    )
      .then((response) => response.json())
      .catch((err) => null);
  } catch (err) {
    return null;
  }
}
// Place holder for functionality to work in the Stubs

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  console.log(adventure);
  let advnameid = document.getElementById("adventure-name");
  advnameid.textContent = adventure.name;
  let advsubt = document.getElementById("adventure-subtitle");
  advsubt.textContent = adventure.subtitle;
  let photogal = document.getElementById("photo-gallery");
  adventure.images.forEach(element => {
    let imgDiv=document.createElement("div");
    let img1 = document.createElement("img");
    img1.setAttribute("src", element);
    img1.className="activity-card-image";
    imgDiv.append(img1);
    photogal.append(imgDiv);
  });
  // {
  //   let imgDiv=document.createElement("div");
  //   let img1 = document.createElement("img");
  //   img1.setAttribute("src", adventure.images[i]);
  //   img1.setAttribute("className", "activity-card-image");
  //   imgDiv.append(img1);
  //   photogal.append(imgDiv);
  // }
  let advc = document.getElementById("adventure-content");
  advc.textContent = adventure.content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  // let carousal_inner = document.createElement("div")
  // carousal_inner.id="carouselExampleIndicators"
  let photogal = document.getElementById("photo-gallery");
  let button=` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> `
  ,img=`<div class="carousel-item active">
  <img src="${images[0]}" class="activity-card-image" alt="...">
</div>`;
  for(var i=1;i<images.length;i++){
    button+=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide 2"></button>`
    img+=`<div class="carousel-item">
    <img src="${images[i]}" class="activity-card-image" alt="...">
  </div>`
  }

  photogal.innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    ${button}
  </div>
  <div class="carousel-inner">
    
    
    ${img}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `;





//   let carousal_inner = document.getElementById("carouselExampleIndicators");
//   carousal_inner.className = "carousel slide";
//   carousal_inner.className = "carousel-indicators";
//   carousal_inner.innerHTML = `
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     `
//     carousal_inner.className = "carousel-inner carousel-item active d-block w-100 activity-card-image";
//     // carousal_inner.className = ""
//     // carousal_inner.className = ""
//     // <img src="..." class="d-block w-100" alt="...">
//     let eimg = document.createElement("img");
//     eimg.setAttribute("src",images[0])
//     // carousal_inner.className = "carousel-item";
//     // carousal_inner.className = "carousel-item active d-block w-100"
//     // <img src="..." class="d-block w-100" alt="...">
//     let e2img = document.createElement("img");
//     e2img.setAttribute("src",images[1])

//     // carousal_inner.className = "carousel-item";
//     // carousal_inner.className = "carousel-item active d-block w-100"
//     // <img src="..." class="d-block w-100" alt="...">
//     let e3img = document.createElement("img");
//     e3img.setAttribute("src",images[2])

//     carousal_inner.innerHTML += `
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   `
//     carousal_inner.innerHTML += `
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
//   `
// photogal.append(carousal_inner)

}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
