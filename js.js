var img = [];
for (var i = 0; i < 4; i++) {
    img[i] = new Image();
    img[i].src = "imges/" + i + ".jpeg";
}
var index = 0;
function pre() {
    index--;
    if (index < 0) {
        index = img.length - 1;
    }
    var anh = document.getElementById('anh');
    anh.src = img[index].src;
    
}
// nút next
function next() {
    index++;
    if (index >= img.length) {
        index = 0;
    }
    var anh = document.getElementById('anh');
    anh.src = img[index].src;
   
}
setInterval(next,1000);
function themgiohang() {
    alert("Thêm Thành Công");
}
var ht = document.getElementById('ht');
var sdt = document.getElementById('sdt');
var email = document.getElementById('email');
function dangkythongtin() {
    if (ht.value.length == "" || sdt.value.length == "" || email.value.length == "") {
        alert('Không để trống thông tin');
        return false;
    }
    if (ht.value.length <= 8) {
        alert('Nhập Họ Tên trên 8 ký tự');
        return false;
    }
    if (isNaN(sdt.value)) {
        alert('Số điện Thoại phải là số ');
        return false;
    }
    if (sdt.value.length < 10 || sdt.value.length > 10) {
        alert('Số điện thoại phải đúng 10 số');
        return false;
    }
    alert('Chúc Mừng bạn đăng ký thành công');
    return true;
    
}
function muahang(){
    alert('Mua thành công');
}

