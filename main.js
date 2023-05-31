/**
 * Bài 1: Tính tiền lương nhân viên
 * input: số ngày làm việc, Lương một ngày
 * Ouput: Hiển thị tổng Tiền Lương
 * progress:
 *  - Tạo biến soNgayLamViec, LUONG_MOT_NGAY, tongTienLuong.
 *  - Lấy giá trị đầu vào đưa vào biến
 *  - tinh tiền lương:  tongTienLuong = soNgayLamViec*luongMotNgay
 *  - Đưa kết quả ra ngoài
 */

document.getElementById("btnTinhTienLuong").onclick = function () {
  const LUONG_MOT_NGAY = 100000;
  var soNgayLamViec = document.getElementById("soNgayLamViec").value;
  var tongTienLuong = 0;

  tongTienLuong = LUONG_MOT_NGAY * soNgayLamViec;

  document.getElementById("tongTienLuong").innerHTML =
    "Tiền lương: " + tongTienLuong.toLocaleString();
};

/**
 * Bài 2: Tính giá trị trung bình
 * * input: 5 số thực nhập vào
 * Ouput: Hiển thị gia trị trung bình
 * progress:
 *  - Tạo biến chứa số thực so1, so2, so3, so4, so5 và biến  giaTriTrungBinh
 *  - Lấy giá trị đầu vào đưa vào biến
 *  - tinh giá trị trung bình:  giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5)/5
 *  - Đưa kết quả ra ngoài
 */

document.getElementById("btnTinhTrungBinh").onclick = function () {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;
  var so5 = document.getElementById("so5").value * 1;
  console.log(so5);
  giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("giaTriTrungBinh").innerHTML =
    "Giá trị trung bình là: " + giaTriTrungBinh;
};

/**
 * Bài 3: Quy đổi tiền
 * input: số lượng USD, giá trị 1 USD quy ra VND
 * Ouput: Hiển thị gia trị quy đổi ra VND
 * progress:
 *  - Tạo biến soUSD, GIA_1_USD_TO_VND, soDaQuyDoi.
 *  - Lấy giá trị đầu vào đưa vào biến
 *  - tinh tiền lương:  soDaQuyDoi = soUSD*GIA_1_USD_TO_VND
 *  - Đưa kết quả ra ngoài
 */

document.getElementById("btnQuyDoiTien").onclick = function () {
  var soUSD = document.getElementById("soUSD").value;
  var GIA_1_USD_TO_VND = 23500;
  var soDaQuyDoi = soUSD * GIA_1_USD_TO_VND;
  document.getElementById("soDaQuyDoi").innerHTML =
    "số tiền sau quy đổi: " + soDaQuyDoi.toLocaleString() + " VND";
};

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * input: Kích thước chiều dài, chiều rộng
 * Ouput: Hiển thị giá trị Chu vi, diện tích
 * progress:
 *  - Tạo biến chieuDai, chieuRong, chuVi, dienTich, kqChuViDienTich
 *  - Lấy giá trị đầu vào đưa vào biến
 *  - tinh chu vi: chuVi = (chieuDai + chieuRong)*2
 *  - Tính diện tích: dienTich = (chieuDai * chieuRong)
 *  - Đưa kết quả ra ngoài
 */

document.getElementById("btnTinhCVDT").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  document.getElementById("kqChuViDienTich").innerHTML =
    "Diện tích: " + dienTich + " và " + "Chu vi: " + chuVi;
};
/**
 * Bài 5: Tính tổng 2 ký số
 * input: số nhập vào
 * Ouput: Hiển thị giá trị tổng 2 ký số
 * progress:
 *  - Tạo biến soDuocNhap; kqTongHaiKySo, kySo1, kySo2;
 *  - Lấy giá trị đầu vào đưa vào biến
 *  - Tách lấy ký số thứ 1: kySo1 =  soDuocNhap/2
 *  - Tách lấy ký số thứ 2: kySo2 = soDuocNhap%2
 *  - Tính tổng 2 ký số: kqTongHaiKySo = kySo1 + kySo2;
 *  - Đưa kết quả ra ngoài
 */

document.getElementById("btnTongHaiKySo").onclick = function () {
  var soDuocNhap = document.getElementById("soDuocNhap").value;
  var kySo1 = Math.floor(soDuocNhap / 10);
  var kySo2 = soDuocNhap % 10;
  var kqTongHaiKySo = kySo1 + kySo2;
  document.getElementById("kqTongHaiKySo").innerHTML =
    "Kết quả là: " + kqTongHaiKySo;
};