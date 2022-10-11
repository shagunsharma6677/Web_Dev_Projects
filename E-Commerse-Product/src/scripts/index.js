function getFormData(e) {
  // Taking Credential from User

  e.preventDefault();
  let name_Data = document.querySelector("#product_name").value;
  let brand_Data = document.querySelector("#product_brand").value;
  let price_Data = document.querySelector("#product_price").value;
  let image_Data = document.querySelector("#product_image").value;

  addData(name_Data, brand_Data, price_Data, image_Data);
}

function addData(name, brand, price, imageLink) {
  // We have created object of data

  let obj = { name, brand, price, imageLink };
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data))

  
}

function redirect() {
  window.location.href="inventory.html"
}

if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}
