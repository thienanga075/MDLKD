window.addEventListener("load", function () {
  const items = [
    {
      id: 1,
      name: "Khăn Lau Mặt Dùng 1 Lần",

      price: 30000,
      photo: "./assets/images/product/item1.jpg",
    },
    {
      id: 2,

      name: "Khay Trữ,Hộp Trữ Đông Loại 1",

      price: 7500,
      photo: "./assets/images/product/item2.jpg",
    },
    {
      id: 3,

      name: "Bàn Chải Đánh Răng Cho Bé",

      price: 30000,
      photo: "./assets/images/product/item3.jpg",
    },
    {
      id: 4,

      name: "Tã Bỉm Merries Dán/Quần Nội Địa Nhật",

      price: 195000,
      photo: "./assets/images/product/item5.jpg",
    },
    {
      id: 5,

      name: "BỈM DÁN/QUẦN MOONY",

      price: 331000,
      photo: "./assets/images/product/item5.jpg",
    },
    {
      id: 6,

      name: "Tăm Bông Cho Trẻ Sơ Sinh",

      price: 6800,
      photo: "./assets/images/product/item6.jpg",
    },
    {
      id: 7,

      name: "Nước Rửa Bình Sữa ARAU Baby",

      price: 110000,
      photo: "./assets/images/product/item7.jpg",
    },
    {
      id: 8,

      name: "Ghế rung Cao Cấp Cho Bé Trai Bé Gái",

      price: 300000,
      photo: "./assets/images/product/item8.jpg",
    },
    {
      id: 9,

      name: "Núm Ti Siêu Mềm",

      price: 9000,
      photo: "./assets/images/product/item9.jpg",
    },

    {
      id: 10,

      name: "Mũ gọi đầu chắn nước bảo vệ tai",

      price: 29000,
      photo: "./assets/images/product/item10.jpg",
    },
    {
      id: 11,

      name: "Đệm ngủ đúng tư thế cho bé",

      price: 360000,
      photo: "./assets/images/product/item11.jpg",
    },
    {
      id: 12,

      name: "Sữa MEIJI LON 800g",

      price: 450000,
      photo: "./assets/images/product/item12.jpg",
    },
    {
      id: 13,

      name: "Thanh chắn cửa,cầu thang",

      price: 400000,
      photo: "./assets/images/product/item13.jpg",
    },
    {
      id: 14,

      name: "Ghế lười cho bé",

      price: 225000,
      photo: "./assets/images/product/item14.jpg",
    },
    {
      id: 15,

      name: "Dây đai chóng lạc cho bé",

      price: 150000,
      photo: "./assets/images/product/item15.jpg",
    },
    {
      id: 16,

      name: "Dầu massage dưởng ẩm cho bé",

      price: 29000,
      photo: "./assets/images/product/item16.jpg",
    },
    {
      id: 17,

      name: "Xe tròn tập đi",

      price: 290000,
      photo: "./assets/images/product/item17.jpg",
    },
    {
      id: 18,

      name: "Khẩu trang tre em 3D",

      price: 10000,
      photo: "./assets/images/product/item18.jpg",
    },
    {
      id: 19,

      name: "Bịt gọc bàn,cạnh bàn",

      price: 5000,
      photo: "./assets/images/product/item19.jpg",
    },
    {
      id: 20,

      name: "Bộ 36 miếng thảm xốp cho bé",

      price: 15000,
      photo: "./assets/images/product/item20.jpg",
    },
  ];
  let detailInfo = JSON.parse(window.localStorage.getItem("detail")) || [];
  console.log(detailInfo);
  items.forEach((item) => {
    if (item.id == detailInfo) {
      //   console.log(item);
      const template = `
    <div class="detail-img">
    <img src="${item.photo}" alt="" />
  </div>
  <div class="detail-info">
    <h2 class="detail-info__name">${item.name}</h2>
    <div class="detail-info__start">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <div class="detail-info__content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut...
      </p>
    </div>
    <div class="detail-info__price detail">
      <span>PRICE</span>
      <span>${item.price}</span>
    </div>
    <div class="detail-info__size detail">
      <span>SIZE</span>
      <div class="info-size__item">
        <span>S</span>
        <span>M</span>
        <span>L</span>
      </div>
    </div>
    <div class="detail-info__color detail">
      <span>color</span>
      <div class="color-option">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="detail-info__meterail detail">
      <span>MATERIAL</span>
      <span>silicon</span>
    </div>
    <div class="detail-info__quantity detail">
      <span>QUANTITY</span>
      <span>1</span>
    </div>
    <div class="detail-info__subtotal detail">
      <span>SUBTOTAL</span>
      <span>${item.price}</span>
    </div>

    <div class="detail-button">
      <button class="add-cart">
        <i class="fas fa-cart-plus"></i>
        Add to cart
      </button>
      <button class="buy-it">Buy it now</button>
      <button class="add-wish">
        <i class="fas fa-cart-plus"></i>
        Add to wishlist
      </button>
    </div>
  </div>
    
    `;
      const containerDetail = document.querySelector(
        ".product-container-detail"
      );
      containerDetail.insertAdjacentHTML("beforeend", template);
    }
  });
});
