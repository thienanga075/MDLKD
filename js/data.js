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
];
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
         <input type="number" value="1"/>
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

function loadItem(arrayitem, cartItems) {
  // console.log(cartItems);
  for (let i = 0; i < arrayitem.length; i++) {
    let itemC = arrayitem[i];
    cartItems[i].insertAdjacentHTML("beforeend", Rederitem(itemC));
  }
}
//chuyển tiếng việt có dấu thành khong dấu
function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}
export { removeVietnameseTones };
export { items };
export { loadItem };
