// Khởi tạo danh mục kho ấn bản (Array of Objects)
let bookCatalog = [
  {
    bookCode: "B01",
    title: "Cấu trúc Dữ liệu & Giải thuật",
    category: "CNTT",
    price: 120000,
    totalCopies: 5,
    availableCopies: 1,
    shelfLocation: "Kệ A1",
  },
  {
    bookCode: "B02",
    title: "Nhập môn Trí tuệ Nhân tạo",
    category: "CNTT",
    price: 150000,
    totalCopies: 4,
    availableCopies: 3,
    shelfLocation: "Kệ A2",
  },
  {
    bookCode: "B03",
    title: "Lịch sử Văn minh Thế giới",
    category: "Khoa học Xã hội",
    price: 95000,
    totalCopies: 3,
    availableCopies: 0,
    shelfLocation: "Kệ C1",
  },
  {
    bookCode: "B04",
    title: "Giáo trình Kinh tế Vi mô",
    category: "Kinh tế",
    price: 80000,
    totalCopies: 6,
    availableCopies: 2,
    shelfLocation: "Kệ B2",
  },
];

// Nhập kho ấn bản mới
let newBook = {
  bookCode: "B05",
  title: "Lập trình Web Hiện đại",
  category: "CNTT",
  price: 135000,
  totalCopies: 5,
  availableCopies: 5,
  shelfLocation: "Kệ A3",
};

bookCatalog.push(newBook);
console.log(
  "Đã nhập kho thành công:",
  newBook.title,
  "— Mã:",
  newBook.bookCode,
);
console.log("");

// Xuất mượn sách
let borrowCode = "B01";

for (let i = 0; i < bookCatalog.length; i++) {
  if (bookCatalog[i].bookCode === borrowCode) {
    if (bookCatalog[i].availableCopies > 0) {
      bookCatalog[i].availableCopies -= 1;
      console.log(
        "Mượn thành công sách [" +
          bookCatalog[i].title +
          "]. Số lượng còn lại: " +
          bookCatalog[i].availableCopies,
      );

      if (bookCatalog[i].availableCopies === 0) {
        console.log(
          "CẢNH BÁO: Đầu sách [" +
            bookCatalog[i].title +
            "] đã HẾT SÁCH TRÊN KỆ!",
        );
      }
    } else {
      console.log(
        "Từ chối mượn: Đầu sách [" +
          bookCatalog[i].title +
          "] hiện đã hết (availableCopies = 0)!",
      );
    }
    break;
  }
}
console.log("");

// Thanh lý sách hỏng
let discardCode = "B03"; // Thanh lý đầu sách B03

for (let i = 0; i < bookCatalog.length; i++) {
  if (bookCatalog[i].bookCode === discardCode) {
    let removedBook = bookCatalog[i];
    bookCatalog.splice(i, 1);
    console.log("Đã thanh lý và xóa khỏi kho: [" + removedBook.bookCode + "] " + removedBook.title);
    break;
  }
}
console.log("");

// Kiểm kê tài sản
let totalPhysicalBooks = 0;
let totalAvailableBooks = 0;
let totalInventoryValue = 0;

for (let i = 0; i < bookCatalog.length; i++) {
  totalPhysicalBooks += bookCatalog[i].totalCopies;
  totalAvailableBooks += bookCatalog[i].availableCopies;
  totalInventoryValue += (bookCatalog[i].totalCopies * bookCatalog[i].price);
}

// IN kiểm kê
console.log("+------+-------------------------------+----------+-------+-------+");
console.log("| Mã   | Tên Sách                      | Đơn Giá  | Tổng  | Còn   |");
console.log("+------+-------------------------------+----------+-------+-------+");

for (let i = 0; i < bookCatalog.length; i++) {
  let b = bookCatalog[i];
  let code = b.bookCode.padEnd(4);
  let title = (b.title.length > 29 ? b.title.substring(0, 26) + "..." : b.title).padEnd(29);
  let price = String(b.price).padStart(8);
  let total = String(b.totalCopies).padStart(5);
  let avail = String(b.availableCopies).padStart(5);

  console.log("| " + code + " | " + title + " | " + price + " | " + total + " | " + avail + " |");
}

console.log("+------+-------------------------------+----------+-------+-------+");
console.log("Tổng số bản sách : " + totalCopies);
console.log("Tổng giá trị kho : " + totalValue + " VNĐ");