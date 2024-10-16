const jacketType = [
    { id: 1, IMG: "IMG/jacket1.jpg", title: "jacket1", category: "jacket", price: 159.00 },
    { id: 2, IMG: "IMG/jacket2.jpg", title: "jacket1", category: "jacket", price: 159.50 },
    { id: 3, IMG: "IMG/jacket3.jpg", title: "jacket1", category: "jacket", price: 159.00 },
    { id: 4, IMG: "IMG/jacket4.jpg", title: "jacket1", category: "jacket", price: 159.50 },
    { id: 5, IMG: "IMG/jacket5.jpg", title: "jacket1", category: "jacket", price: 159.00 },
    { id: 6, IMG: "IMG/jacket6.jpg", title: "jacket1", category: "jacket", price: 159.00 },
    { id: 7, IMG: "IMG/jacket7.jpg", title: "jacket1", category: "jacket", price: 159.50 },
    { id: 8, IMG: "IMG/jacket8.jpg", title: "jacket1", category: "jacket", price: 159.50 }
];
var jacket = "";
for(let index in jacketType){
    jacket += `
    <div class="Card" style="width: 24%; ">
        <img style="width: 100%; height:150px; object-fit: contain; " src=" ${jacketType[index].IMG}" class="card-img-top" alt="#">
        <div class="card-body">
            <h5 class="card-title text-center"> ${jacketType[index].title}</h5>
            <p class="card-text text-center ">Price: ${jacketType[index].price}$</p>
            <a href="#" class="btn btn-primary d-block m-auto">BUY</a>
        </div>
    </div>
    `;
    document.getElementsByClassName("Box4")[0].innerHTML = jacket;
}