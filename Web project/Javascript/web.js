// const adsLogo = [
//     {id : 1, IMG :"IMG/ads.jpg"},
// ]
// var ads = "";
// adsLogo.forEach((element)=>{
//     ads = `
//     <a href="${element.id}"><img src="IMG/smartads.jpg" alt="">${element.IMG}</a>
//     `;
//     // console.log(element);
// })
const LogoObj = [
    { image: "IMG/logo.jpg" }
]
var Logo = "";
LogoObj.forEach((element) => {
    Logo = `
        <img src="IMG/logo.jpg" src="${element.image}" alt="">
    `;
    // console.log(Logo);
    document.getElementsByClassName("navbar-brand")[0].innerHTML = Logo;
})
const menuObj = [
    { name: "Home "},
    { name: "Drink "},
    { name: "ICE "},
    { name: "Jacket "}
];
var Menu = "";
menuObj.forEach((element) => {
    // console.log(element);
    Menu += `
    <li class="nav-item m-auto ">
    <a class="nav-link active fs-4" aria-current="page" href="#">${element.name}</a>
    </li>
    `;
    // console.log(Menu);
    document.getElementsByClassName("navbar-nav")[0].innerHTML = Menu;
});
const drinkObj = [
    { id: 1, IMG: "IMG/bucchus.jpg", title: "Bucchus", category: "Drink", price: 1.00 },
    { id: 2, IMG: "IMG/coca.jpg", title: "Coca-Cola", category: "Drink", price: 1.00 },
    { id: 3, IMG: "IMG/hanuman.jpg", title: "Hanuman", category: "Drink", price: 2.00 },
    { id: 4, IMG: "IMG/jinro.jpg", title: "Jinro", category: "Drink", price: 1.50 },
    { id: 5, IMG: "IMG/soda.jpg", title: "Soda", category: "Drink", price: 2.00 },
    { id: 6, IMG: "IMG/sting.jpg", title: "Sting", category: "Drink", price: 1.00 },
    { id: 7, IMG: "IMG/vital.jpg", title: "Vital", category: "Drink", price: 0.50 },
    { id: 8, IMG: "IMG/provida.jpg", title: "Pro-Vida", category: "Drink", price: 0.50 }

];
var Drink = "";
for (let index in drinkObj) {
    Drink += `
        <div class="Card" style="width: 24%; ">
            <img style="width: 100%; height:150px; object-fit: contain; " src=" ${drinkObj[index].IMG}" class="card-img-top" alt="#">
            <div class="card-body">
                <h5 class="card-title text-center"> ${drinkObj[index].title}</h5>
                <p class="card-text text-center ">Price: ${drinkObj[index].price}$</p>
                <a href="#" class="btn btn-primary d-block m-auto">DRINKING FOR BUY</a>
            </div>
        </div>
    `;
    // console.log(Drink);
    document.getElementsByClassName("Box2")[0].innerHTML = Drink;
}
const drinkIce = [
    { id: 11, IMG: "IMG/strabury.jpg", title: "strabury", category: "ICE", price: 3.00 },
    { id: 12, IMG: "IMG/piaple.jpg", title: "piaple-Cola", category: "ICE", price: 2.50 },
    { id: 13, IMG: "IMG/passion.jpg", title: "pasion", category: "ICE", price: 2.00 },
    { id: 14, IMG: "IMG/ilate.jpg", title: "ilate", category: "ICE", price: 3.50 },
    { id: 15, IMG: "IMG/greentea.jpg", title: "greentea", category: "ICE", price: 3.00 },
    { id: 16, IMG: "IMG/Coffe.jpg", title: "Coffe", category: "ICE", price: 3.00 },
    { id: 17, IMG: "IMG/chocolate.jpg", title: "chocolate", category: "ICE", price: 3.50 },
    { id: 18, IMG: "IMG/blueberry.jpg", title: "blueberry", category: "ICE", price: 2.50 }
];
var Ice = "";
for (let a in drinkIce) {
    Ice += `
        <div class="Card" style="width: 24%; ">
            <img style="width: 100%; height:150px; object-fit: contain; " src=" ${drinkIce[a].IMG}" class="card-img-top" alt="#">
            <div class="card-body">
                <h5 class="card-title text-center"> ${drinkIce[a].title}</h5>
                <p class="card-text text-center ">Price: ${drinkIce[a].price}$</p>
                <a href="#" class="btn btn-primary d-block m-auto">DRINKING FOR BUY</a>
            </div>
        </div>
    `;
    // console.log(Drink);
    document.getElementsByClassName("Box3")[0].innerHTML = Ice;
}
const jacketType = [
    { id: 10, IMG: "IMG/jacket1.jpg", title: "jacket", category: "Jacket", price: 150.00 },
    { id: 21, IMG: "IMG/jacket2.jpg", title: "jacket", category: "Jacket", price: 150.50 },
    { id: 31, IMG: "IMG/jacket3.jpg", title: "jacket", category: "Jacket", price: 150.00 },
    { id: 41, IMG: "IMG/jacket4.jpg", title: "jacket", category: "Jacket", price: 150.50 },
    { id: 51, IMG: "IMG/jacket5.jpg", title: "jacket", category: "Jacket", price: 150.00 },
    { id: 61, IMG: "IMG/jacket6.jpg", title: "jacket", category: "Jacket", price: 150.00 },
    { id: 71, IMG: "IMG/jacket7.jpg", title: "jacket", category: "Jacket", price: 150.50 },
    { id: 81, IMG: "IMG/jacket8.jpg", title: "jacket", category: "Jacket", price: 150.50 }
];
var Jacket = "";
for (let b in jacketType) {
    Jacket += `
    <div class="Card" style="width: 24%; ">
        <img style="width: 100%; height:150px; object-fit: contain; " src=" ${jacketType[b].IMG}" class="card-img-top" alt="#">
        <div class="card-body">
            <h5 class="card-title text-center"> ${jacketType[b].title}</h5>
            <p class="card-text text-center ">Price: ${jacketType[b].price}$</p>
            <a href="#" class="btn btn-primary d-block m-auto">BUY</a>
        </div>
    </div>
    `;
    // console.log(Jacket);
    document.getElementsByClassName("Box4")[0].innerHTML = Jacket;
}
 const SocieTy= [
    {id : 1, thumnail : "IMG/facebook.png", url : "https://web.facebook.com/?_rdc=1&_rdr"},
    {id : 2, thumnail : "IMG/IG.jpg", url : "https://www.instagram.com/accounts/login/?"},
    {id : 3, thumnail : "IMG/twitter.jpg", url : "https://twitter.com/"},
    {id : 4, thumnail : "IMG/telegram.jpg", url : "https://web.telegram.org/a/"}
];
var social = "";
SocieTy.forEach((element)=>{
    social += `
    <a href="${element.url}"><img style="width:50px;" src="${element.thumnail}" alt=""></a>
    `;
    // console.log(element);
    document.getElementsByClassName("icon")[0].innerHTML = social;
})
