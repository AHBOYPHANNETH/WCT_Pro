const drinkIce =[
    {id : 1,IMG : "IMG/strabury.jpg",title:"strabury",category:"ICE",price:3.00},
    {id : 2,IMG : "IMG/piaple.jpg",title:"piaple-Cola",category:"ICE",price:2.50},
    {id : 3,IMG : "IMG/passion.jpg",title:"pasion",category:"ICE",price:2.00},
    {id : 4,IMG : "IMG/ilate.jpg",title:"ilate",category:"ICE",price:3.50},
    {id : 5,IMG : "IMG/greentea.jpg",title:"greentea",category:"ICE",price:3.00},
    {id : 6,IMG : "IMG/Coffe.jpg",title:"Coffe",category:"ICE",price:3.00},
    {id : 7,IMG : "IMG/chocolate.jpg",title:"chocolate",category:"ICE",price:3.50},
    {id : 8,IMG : "IMG/blueberry.jpg",title:"blueberry",category:"ICE",price:2.50}
];
var Ice = "";
for(let a in drinkIce){
    Ice +=`
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