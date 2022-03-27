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

  const items = [
    {
      id: 1,
      name: "Khăn Lau Mặt Dùng 1 Lần",

      price: 30000,
      photo: "./assets/images/trangchu/product/item1.jpg",
    },
    {
      id: 2,

      name: "Khay Trữ,Hộp Trữ Đông Loại 1",

      price: 7500,
      photo: "./assets/images/trangchu/product/item2.jpg",
    },
    {
      id: 3,

      name: "Bàn Chải Đánh Răng Cho Bé",

      price: 30000,
      photo: "./assets/images/trangchu/product/item3.jpg",
    },
    {
      id: 4,

      name: "Tã Bỉm Merries Dán/Quần Nội Địa Nhật",

      price: 195000,
      photo: "./assets/images/trangchu/product/item5.jpg",
    },
    {
      id: 5,

      name: "BỈM DÁN/QUẦN MOONY",

      price: 331000,
      photo: "./assets/images/trangchu/product/item5.jpg",
    },
    {
      id: 6,

      name: "Tăm Bông Cho Trẻ Sơ Sinh",

      price: 6800,
      photo: "./assets/images/trangchu/product/item6.jpg",
    },
    {
      id: 7,

      name: "Nước Rửa Bình Sữa ARAU Baby",

      price: 110000,
      photo: "./assets/images/trangchu/product/item7.jpg",
    },
    {
      id: 8,

      name: "Ghế rung Cao Cấp Cho Bé Trai Bé Gái",

      price: 300000,
      photo: "./assets/images/trangchu/product/item8.jpg",
    },
    {
      id: 9,

      name: "Núm Ti Siêu Mềm",

      price: 9000,
      photo: "./assets/images/trangchu/product/item9.jpg",
    },

    {
      id: 10,

      name: "Mũ gọi đầu chắn nước bảo vệ tai",

      price: 29000,
      photo: "./assets/images/trangchu/product/item10.jpg",
    },
    {
      id: 11,

      name: "Đệm ngủ đúng tư thế cho bé",

      price: 360000,
      photo: "./assets/images/trangchu/product/item11.jpg",
    },
    {
      id: 12,

      name: "Sữa MEIJI LON 800g",

      price: 450000,
      photo: "./assets/images/trangchu/product/item12.jpg",
    },
    {
      id: 13,

      name: "Thanh chắn cửa,cầu thang",

      price: 400000,
      photo: "./assets/images/trangchu/product/item13.jpg",
    },
    {
      id: 14,

      name: "Ghế lười cho bé",

      price: 225000,
      photo: "./assets/images/trangchu/product/item14.jpg",
    },
    {
      id: 15,

      name: "Dây đai chóng lạc cho bé",

      price: 150000,
      photo: "./assets/images/trangchu/product/item15.jpg",
    },
    {
      id: 16,

      name: "Dầu massage dưởng ẩm cho bé",

      price: 29000,
      photo: "./assets/images/trangchu/product/item16.jpg",
    },
    {
      id: 17,

      name: "Xe tròn tập đi",

      price: 290000,
      photo: "./assets/images/trangchu/product/item17.jpg",
    },
    {
      id: 18,

      name: "Khẩu trang tre em 3D",

      price: 10000,
      photo: "./assets/images/trangchu/product/item18.jpg",
    },
    {
      id: 19,

      name: "Bịt gọc bàn,cạnh bàn",

      price: 5000,
      photo: "./assets/images/trangchu/product/item19.jpg",
    },
    {
      id: 20,

      name: "Bộ 36 miếng thảm xốp cho bé",

      price: 15000,
      photo: "./assets/images/trangchu/product/item20.jpg",
    },
  ];
  /**
   <div class="product-item">
                    <div class="product-image">
                      <img
                        src="./assets/images/trangchu/product/item2.jpg"
                        alt=""
                      />
                      <button class="product-item__button">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Add To Cart</span>
                      </button>
                      <div class="product-item__option-right">
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-eye"></i>
                        <i class="fas fa-compress-alt"></i>
                      </div>
                    </div>
                    <h3>Kính cổ điển phụ nữ</h3>

                    <p class="price-item">390.000 đ</p>
                  </div> 
   */
  const Rederitem = (item) => {
    const template = `
    <div class="product-item" data-id=${item.id}>
      <div class="product-image">
        <img
          src=${item.photo}
          alt=""
        />
        <button class="product-item__button">
          <i class="fas fa-shopping-cart"></i>
          <span>Add To Cart</span>
        </button>
        <div class="product-item__option-right">
          <i class="fas fa-heart"></i>
          <i class="fas fa-eye"></i>
          <i class="fas fa-compress-alt"></i>
        </div>
      </div>
      <div class="product-bot">
      <h3 class="itemTitle">${item.name}</h3>
      <div class="number-cart">
          <span>số lượng:</span>
           <input type="number" value=""/>
      </div>
      <div class="priceCon">
        <p class="price-item">${item.price}
        </p>
        <span>đ</span>
      </div>
      </div>
    </div>
    `;
    return template;
  };
  // console.log(cartItems);
  for (let i = 0; i < cartItems.length; i++) {
    itemC = items[i];
    cartItems[i].insertAdjacentHTML("beforeend", Rederitem(itemC));
  }

  let listItem = [];
  console.log(listItem);

  //add cart items

  function addCart(e) {
    // window.onstorage = () => {
    //   listItem =
    //     localStorage.length > 0
    //       ? JSON.parse(localStorage.getItem("listItem"))
    //       : [];
    //   console.log("thay doi");
    // };
    listItem = JSON.parse(localStorage.getItem("listItem")) || [];
    console.log(listItem);
    if (e.target.matches(".product-item__button span")) {
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
      this.querySelector(".number-cart input").value = "";
      // console.log(localStorage.length);
    }
  }
  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].addEventListener("click", addCart);
    cartItems[i].addEventListener("click", showCart);
    cartItems[i].addEventListener("click", handleSumMoney);

    // showcart();
  }

  // modal cart
  cartIcon.addEventListener("click", function (e) {
    if (modalCart) {
      modalCart.classList.add("active-modal");
    }
  });
  modalTop.addEventListener("click", function () {
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
    p3.textContent = item.price;
    const p4 = document.createElement("p");
    p4.textContent = item.number * item.price + "đ";
    const p5 = document.createElement("p");
    p5.textContent = "Xóa";
    p5.className = "modal-clear";
    main.append(image, p, p2, p3, p4, p5);
    modalMain.append(main);
  }

  function showCart() {
    listItem = JSON.parse(localStorage.getItem("listItem")) || [];
    console.log(listItem);
    modalMain.innerHTML = "";
    // console.log(listItem);\
    if (Array.isArray(listItem) && listItem.length > 0) {
      listItem.forEach((item, index) => renderItemModal(item));
    }
  }
  function handleSumMoney() {
    let sum = 0;
    let numberCart = 0;
    if (listItem.length > 0) {
      listItem.forEach((item, index) => {
        sum += item.number * item.price;
        numberCart += item.number;
      });
      sumMoney.textContent = sum + "đ";
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
