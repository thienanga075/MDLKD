import { items, loadItem, formatMoney } from "./data.js";

window.addEventListener("load", function () {
  const cartItems = document.querySelectorAll(".cartitem");

  const cartIcon = document.querySelector(".header-cart i");
  const modalCart = document.querySelector(".modal-cart");
  const modalTop = document.querySelector(".modal-top .modal-close");
  const modalMain = document.querySelector(".modal-main__center");
  const sumMoney = document.querySelector(".sum-money");
  const numberoption = document.querySelector(".number-option-cart");
  //fixed header
  const header = document.querySelector(".header-top");
  const heightHeader = header && header.offsetHeight;
  window.addEventListener("scroll", function (e) {
    const scrollY = window.pageYOffset;
    // console.log(scrollY);
    if (scrollY >= heightHeader) {
      header && header.classList.add("is-fixed");
      document.body.style.paddingTop = `${heightHeader}px`;
    } else {
      document.body.style.paddingTop = 0;

      header && header.classList.remove("is-fixed");
    }
  });

  loadItem(items, cartItems);

  let listItem = [];

  //add cart items
  //and info page detail

  function addCart(e) {
    let detail = [];
    // window.onstorage = () => {
    //   listItem =
    //     localStorage.length > 0
    //       ? JSON.parse(localStorage.getItem("listItem"))
    //       : [];
    //   console.log("thay doi");
    // };
    console.log(e.target);
    if (e.target.matches(".product-image img")) {
      let id = this.querySelector(".product-item").dataset.id;
      detail.push(id);
      window.localStorage.setItem("detail", JSON.stringify(detail));
      window.location.href = "./detail.html";
    }
    listItem = JSON.parse(localStorage.getItem("listItem")) || [];
    // console.log(listItem);
    if (
      e.target.matches(".product-item__button span") ||
      e.target.matches(".product-item__button i") ||
      e.target.matches(".product-item__button")
    ) {
      const itemChild = {
        photo: this.querySelector(".product-image img").src,
        title: this.querySelector(".itemTitle").textContent,
        price: +this.querySelector(".price-item").textContent,
        number: +this.querySelector(".number-cart input").value,
        id: this.querySelector(".product-item").dataset.id,
      };
      let index = -1;
      // console.log(itemChild);
      if (listItem.length > 0) {
        index = listItem.findIndex((item) => item.id === itemChild.id);
      }
      if (index > -1) {
        const newPrice = listItem[index].number + itemChild.number;
        listItem[index].number = newPrice;
      } else if ((index < 0 || listItem.length === 0) && itemChild.number > 0) {
        listItem.push(itemChild);
      } else {
        alert("so luong phải lon hon 0");
      }
      window.localStorage.setItem("listItem", JSON.stringify(listItem));

      this.querySelector(".number-cart input").value = "1";
      // console.log(localStorage.length);
    }
  }

  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i]?.addEventListener("click", addCart);
    cartItems[i]?.addEventListener("click", showCart);
    cartItems[i]?.addEventListener("click", handleSumMoney);

    // showcart();
  }

  // modal cart
  cartIcon?.addEventListener("click", function (e) {
    if (modalCart) {
      modalCart.classList.add("active-modal");
    }
  });
  modalTop?.addEventListener("click", function () {
    modalCart.classList.remove("active-modal");
  });

  function renderItemModal(item) {
    const main = document.createElement("div");
    main.className = "modal-main__center-child";
    main.setAttribute("data-id", item.id);
    const image = document.createElement("img");
    image.setAttribute("src", item.photo);
    const p = document.createElement("p");
    p.textContent = item.title;
    const p2 = document.createElement("p");
    p2.textContent = item.number;
    const p3 = document.createElement("p");
    p3.textContent = formatMoney(item.price) + "đ";
    const p4 = document.createElement("p");
    p4.textContent = formatMoney(item.number * item.price) + "đ";
    const p5 = document.createElement("p");
    p5.textContent = "Xóa";
    p5.className = "modal-clear";
    main.append(image, p, p2, p3, p4, p5);
    modalMain.append(main);
  }

  function showCart() {
    listItem = JSON.parse(localStorage.getItem("listItem")) || [];
    // console.log(listItem);
    modalMain.innerHTML = "";
    // console.log(listItem);\
    if (Array.isArray(listItem) && listItem.length > 0) {
      listItem.forEach((item, index) => renderItemModal(item));
    }
  }

  function handleSumMoney() {
    listItem = JSON.parse(localStorage.getItem("listItem")) || [];

    let sum = 0;
    let numberCart = 0;
    if (listItem.length > 0) {
      listItem.forEach((item, index) => {
        sum += item.number * item.price;
        numberCart += item.number;
      });
      sumMoney.textContent = formatMoney(sum) + "đ";
      numberoption.textContent = numberCart;
    } else {
      sumMoney.textContent = "0";
      numberoption.textContent = "0";
    }
  }
  handleSumMoney();
  showCart();

  //remove itemcart
  modalMain.addEventListener("click", function (e) {
    if (e.target.matches(".modal-clear")) {
      console.log(e.target.parentElement);
      const item = e.target.parentElement;
      this.removeChild(item);

      let idItem = item.dataset.id;

      // console.log(id);
      let index = listItem.findIndex((item) => item.id === idItem);
      listItem.splice(index, 1);
      localStorage.setItem("listItem", JSON.stringify(listItem));
      handleSumMoney();
    }
  });
  console.log(listItem);
});
