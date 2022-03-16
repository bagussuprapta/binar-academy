const data = {
  cartItems: [
    {
      cartId: 1566850,
      partnerId: "NotFromMultiseller",
      items: [
        {
          title: "Pagi di Amerika Single Edition",
          product:
            "https://www.gramedia.com/api/products/conf-pagi-di-amerika/503080/",
          image:
            "https://cdn.gramedia.com/uploads/items/ID_SIS2015MTH06PDAM_C.jpg",
          format: "EBook",
          version: "ebook",
          quantity: 4,
          price: 9000.0,
          promoPrice: 9000.0,
          href: "https://www.gramedia.com/api/user/cart/item/4142206/",
          authors: ["Hikmat Darmawan"],
          category: "fiksi-sastra",
        },
      ],
    },
    {
      cartId: 1566850,
      partnerId: 1,
      items: [
        {
          title: "Harlequin: Menyambut Pagi (Mornings On Main)",
          product:
            "https://www.gramedia.com/api/products/harlequin-menyambut-pagi-mornings-on-main/368726/",
          image:
            "https://cdn.gramedia.com/uploads/items/9786020633602_mornings_on_main_cov.jpg",
          format: "Soft Cover",
          version: "soft-cover",
          type: "Book",
          quantity: 10,
          price: 89000.0,
          promoPrice: 46280,
          href: "https://www.gramedia.com/api/user/cart/item/4142208/",
          authors: ["Jodi Thomas"],
          category: "romance-1",
        },
        {
          title: "Harlequin: Musim Panas Di Hamptons (Holiday In The Hamptons)",
          product:
            "https://www.gramedia.com/api/products/harlequin-musim-panas-di-hamptons-holiday-in-the-hamptons/364432/",
          image:
            "https://cdn.gramedia.com/uploads/items/9786020631387_Holiday_in_th.jpg",
          format: "Soft Cover",
          version: "soft-cover",
          type: "Book",
          quantity: 5,
          price: 129000.0,
          promoPrice: 96750,
          href: "https://www.gramedia.com/api/user/cart/item/4142210/",
          authors: ["Sarah Morgan"],
          category: "romance-1",
        },
        {
          title: "Home Sweet Loan",
          product:
            "https://www.gramedia.com/api/products/home-sweet-loan/3924054/",
          image:
            "https://cdn.gramedia.com/uploads/items/Home_Sweet_Loan_cov.jpg",
          format: "Soft Cover",
          version: "soft-cover",
          type: "Book",
          quantity: 1,
          price: 95000.0,
          promoPrice: 71250,
          href: "https://www.gramedia.com/api/user/cart/item/4142211/",
          authors: ["Almira Bastari"],
          category: "",
        },
        {
          title: "Hai, Miiko! 34 - Premium (Bonus Cableholder)",
          product:
            "https://www.gramedia.com/api/products/hai-miiko-34-premium-bonus-cableholder/2736920/",
          image:
            "https://cdn.gramedia.com/uploads/items/WhatsApp_Image_2021-12-20_at_1.42.06_PM.jpeg",
          format: "Soft Cover",
          version: "soft-cover",
          type: "Book",
          quantity: 1,
          price: 60000.0,
          promoPrice: 45000,
          href: "https://www.gramedia.com/api/user/cart/item/4142212/",
          authors: ["Ono Eriko"],
          category: "manga",
        },
      ],
    },
  ],
}; 

// 1. Bikin function untuk return data dari cart items
function getCartItems(data) {
  let result = [];
  for(cartItem in data.cartItems){
    result.push(data.cartItems[cartItem]);
  }
  return result;
}

// 2. Bikin function untuk return isi items di tiap cart
function getItems(cartItems) {
  let result = [];
  for(const cartItem in cartItems)
    for(const item in cartItems[cartItem].items)
      result.push(cartItems[cartItem].items[item]);
  return result;
}

// 3. Print judul category item
function getCategory(items){
  let result = [];
  for(const item in items)
    if(items[item].category != "" && !result.includes(items[item].category))
      result.push(items[item].category);
  return result;
}

/* 4. Jumlahkan total keseluruhan yg perlu dibayar oleh customer :  
      notes tipuan tolong perhatikan :
        * ambil price dari promoPrice, bukan basePrice 
        * kalikan quantity dan price dari tiap item 
        * total harga dari keseluruhan item
*/
function getPromoPrice(items){
  let total = 0;
  for(const item of items)
    total += item.quantity * item.promoPrice;
  return total;
}

// 5. Jadikan no 1 dan 2 dalam satu function
function getItemsV2(data){
  let result = getCartItems(data);
  return getItems(result);
}

// 6. Jadikan no 3 dan 4 dalam satu function
function getCategoryAndPromoPrice(items){
  let result = [
    category = [],
    totalPrice = 0,
  ];

  for(const item in items)
    if(items[item].category != "" && !result[0].includes(items[item].category))
      result[0].push(items[item].category);

  for(const item of items)
    result[1] += item.quantity * item.promoPrice;

  return result;
}

// 7. Print nama author dari tiap authornya
function getAuthor(items){
  let result = [];
  for(const item in items)
    for(const author in items[item].authors)
    result.push(items[item].authors[author]);
  return result;
}

/**
  8. Buat function baru yang hanya melakukan print data pada item yg
    formatnya Ebook (gunakan function yg udah ada sebelumnya yg kalian
    gunakan utk print data category, total price dan nama author) 
*/
function getEbookOnly(items){
  let result = [];
  for(const item in items)
    if(items[item].format == "EBook")
      result.push(items[item]);
  return result;
}

// 9. Buat function promoProduct yang berfunsi untuk return item yang ada promonya saja
function getPromoProduct(items){
  let result = [];
  for(const item in items)
    if(items[item].promoPrice < items[item].price)
      result.push(items[item]);
  return result;
}

// 1. console.log(getCartItems(data));
// 2. console.log(getItems(getCartItems(data)));
// 3. console.log(getCategory(getItems(getCartItems(data))));
// 4. console.log(`Total: ${getPromoPrice(getItems(getCartItems(data)))}`);
// 5. console.log(getItemsV2(data));
// 6. console.log(getCategoryAndPromoPrice(getItems(getCartItems(data))));
// 7. console.log(getAuthor(getItems(getCartItems(data))));
// 8. console.log(getEbookOnly(getItems(getCartItems(data))));
// 9. console.log(getPromoProduct(getItems(getCartItems(data))));