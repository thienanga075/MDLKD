import { items, loadItem, removeVietnameseTones } from "./data.js";

window.addEventListener("load", function () {
  const cartItems = document.querySelectorAll(".cartitem");

  const search = document.querySelector(".search");
  const searchFrm = document.querySelector(".frmSearch");
  const productContainer = document.querySelector(".product-container");
  //   function handleSearch(e) {
  //     let arrSearch = [];

  //     let keySearch = e.target.value;
  //     console.log(keySearch);
  //   }
  //   search.addEventListener("input", handleSearch);
  searchFrm.addEventListener("submit", function (e) {
    e.preventDefault();
    let arrSearch = [];

    let valueSearch = this.querySelector(".search").value.toLowerCase();
    valueSearch = removeVietnameseTones(valueSearch);
    if (items.length > 0) {
      items.forEach((item) => {
        let value = item.name;
        value = removeVietnameseTones(value.toLowerCase());
        if (value.indexOf(valueSearch) > -1) {
          arrSearch.push(item);
        }
      });
    }

    // render lại sản phầm dựa vào từ khóa
    cartItems?.forEach((item) => {
      item.innerHTML = "";
    });
    console.log(arrSearch);
    if (arrSearch.length > 0) {
      const errorProduct = document.querySelector(".error-product");
      errorProduct.textContent = "";
      errorProduct.style.padding = "0";
      loadItem(arrSearch, cartItems);
    } else {
      const errorProduct = document.querySelector(".error-product");
      errorProduct.style.padding = "12px";

      errorProduct.textContent = "Không có sản phẩm cần tìm";
    }
  });
});
