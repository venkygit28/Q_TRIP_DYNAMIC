import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  
    try{return fetch(config.backendEndpoint+"/reservations/")
  .then((response) => response.json())
  // .then((data) => console.log(data))
  .catch((err) => null)
  }
  catch(err){
    return null
  }
}

  // Place holder for functionality to work in the Stubs
  

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  console.log(reservations)
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  //Conditionally render the no-reservation-banner and reservation-table-parent
  if(reservations==0){
  let noreservebanner = document.getElementById("no-reservation-banner").style.display = "block";
  let reservationTableParent = document.getElementById("reservation-table-parent").style.display = "none";
}
  else{
    let noreservebanner = document.getElementById("no-reservation-banner").style.display = "none";
    let reservationTableParent = document.getElementById("reservation-table-parent").style.display = "block";
    let reservationTable = document.getElementById("reservation-table")
    for(let i=0;i<reservations.length;i++){
      // console.log(reservations[i].id);
   
      const{adventure,adventureName,date,id,name,person,price,time}=reservations[i];
      const event = new Date(time);
      const options = {year: 'numeric', month: 'long', day: 'numeric', hour:"numeric",minute:"numeric",second:"numeric"};
      const [year, month, dat] = date.split("-");
      const newDate = `${dat[0] == "0" ? dat[1] : dat}/${month[0] == "0" ? month[1] : month}/${year}`;
      reservationTable.innerHTML += `
      <td scope="col">${id}</td>
                            <td scope="col" ">${name}</td>
                            <td scope="col" ">${adventureName}</td>
                            <td scope="col" ">${person}</td>
                            <td scope="col" ">${newDate}</td>
                            <td scope="col" ">${price}</td>
                            <td scope="col" ">${event.toLocaleDateString('en-IN', options).replace(" at",",")}</td>
                            <td scope="col" " id="${id}"><a href = "${"../detail/?adventure="+adventure}"><button class = reservation-visit-button>Visit adventure</button></a></td>
                            `

      }
      return reservationTable
    }
 
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
