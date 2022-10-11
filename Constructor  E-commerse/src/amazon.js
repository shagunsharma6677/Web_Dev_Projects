function Listing(n, m, o, p, q) {
  this.name = n;
  this.category = m;
  this.image = o;
  this.price = p;
  this.sold = false;
}

function getFormData(e) {
  e.preventDefault();
  let user_Name = document.querySelector("#name").value;
  let user_Category = document.querySelector("#category").value;
  let user_Image_Url = document.querySelector("#image").value;
  let user_Price = document.querySelector("#price").value;
  let user_Sold = false;

  addListing(user_Name, user_Category, user_Image_Url, user_Price, user_Sold);
}

function addListing(input, category, image, price, gender) {
  let data = JSON.parse(localStorage.getItem("Products")) || [];

  let obj = new Listing(input, category, image, price, gender);

  data.push(obj);

  localStorage.setItem("Products", JSON.stringify(data));
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
