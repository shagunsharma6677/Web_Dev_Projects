function redirect(e) {
  e.preventDefault()
  append()
  
}

function append() {
  let LS_Data = JSON.parse(localStorage.getItem("data")) || [];
  let container =document.querySelector("#products_data").innerHTML=null

  LS_Data.forEach(function (el, id) {
    let card_div = document.createElement("div");

    let appnd_Name = document.createElement("div");
    appnd_Name.innerText = el.name;

    let appnd_brand = document.createElement("div");
    appnd_brand.innerText= el.brand;

    let append_price = document.createElement("p");
    append_price.innerText= el.price;

    let appnd_image = document.createElement("img");
    appnd_image.src = el.imageLink;

    let remove_Btn = document.createElement("button");
    remove_Btn.innerText="Remove"
    remove_Btn.addEventListener("click", (event) => {
      event.target.parentNode.remove()
      remove(id);
    });

    card_div.append(appnd_Name, appnd_image, appnd_brand, append_price,remove_Btn);

    document.querySelector("#products_data").append(card_div);
  });
}

function remove(id) {
  let LS_Data = JSON.parse(localStorage.getItem("data")) || [];

  let new_Data = LS_Data.filter(function (el, i){
    return i !==id
  })



  localStorage.setItem("data",JSON.stringify(new_Data))
}

if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
  };
}
