document.querySelector("#submit").addEventListener("click", (event) =>{
    event.preventDefault()
    _data = {
        "data":{
            "property-type": document.querySelector("#property-type").value,
            "area": document.querySelector("#area").value,
            "rooms-number": document.querySelector("#rooms-number").value,
            "zip-code": document.querySelector("#zip-code").value,

        
        }
    }
})

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://cnos.herokuapp.com/predict"; 
fetch(proxyurl + url) 
    .then(response => response.json())
    .then(contents => {
      console.log(contents)
      document.getElementById('price').innerHTML=data.prediction.price
      
   })
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))





// BETTER WAY TO DO
// // async function catchAPI() {
// //     const response = await fetch('https://cnos.herokuapp.com/predict');
// //     const display = await response.display();
// // }
// // catchAPI()
// //     .then(response => {
// //         console.log('it works');
// //     })
// //     .catch(error => {
// //         console.log('error!');
// //         console.log(error);
// //     }
// // );
    
/* const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://cnos.herokuapp.com/predict"; 
fetch(proxyurl + url) 
    .then(response => response.json())
    .then(contents => {
      console.log(contents)
   })
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


 */
// json_input_2 = {
//     "data": {
//         "area": 5,
//         "property-type": "APARTMENT",
//         "rooms-number": 2,
//         "zip-code": 1050,  # only 4 integers, >1000 & <9999
//         "land-area": 56,  # Optional
//         "garden": True,  # Optional
//         # "garden-area": 34,  # Optional
//         # "equipped-kitchen": False,  # Optional
//         # "full-address": "djfg",  # Optional
//         "swimmingpool": True,  # Optional
//         "furnished": False,  # Optional
//         "open-fire": True,  # Optional
//         "terrace": False,  # Optional
//         "terrace-area": 98,  # Optional
//         "facades-number": 16,  # >1 & <10 #Optional
//         # ["NEW" | "GOOD" | "TO RENOVATE" | "JUST RENOVATED" | "TO REBUILD"]
//         "property-subtype": "VILLA",
//         "building-state": "NEW",
//     }
// }






// let button = document.querySelector("#button")

// button.addEventListener("click", function(){
//     fetch("https://cnos.herokuapp.com/predict")
//     .then( response => response.json())
//     .then((data) => {
//         console.log(data);
//         // let image = document.querySelector('.image')
//         // image.innerHTML = `<img src ="${data.image}" alt="">`     
//     })
//     .catch(error => {
//         console.log('error!');
//         console.log(error);
//     }
// );
// })


