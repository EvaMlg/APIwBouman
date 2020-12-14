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
    

let button = document.querySelector("#button")

button.addEventListener("click", function(){
    fetch("https://cnos.herokuapp.com/predict")
    .then( response => response.json())
    .then((data) => {
        console.log(data);
        // let image = document.querySelector('.image')
        // image.innerHTML = `<img src ="${data.image}" alt="">`     
    })
    .catch(error => {
        console.log('error!');
        console.log(error);
    }
);
})
