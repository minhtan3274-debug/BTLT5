// Hàm xóa dòng
function xoaDong(btn) {
    // closest('tr') giúp tìm thẻ <tr> (dòng) chứa nút Xóa vừa bấm, sau đó dùng remove() để xóa nó khỏi bảng
    btn.closest('tr').remove();
}

// Hàm tự động tính tổng (Mở rộng thêm để bảng hoạt động logic hơn)
function tinhTong(input) {
    // Lấy dòng hiện tại đang được nhập
    let row = input.closest('tr');
    
    // Lấy tất cả các ô input trong dòng đó
    let inputs = row.querySelectorAll('input');
    
    let soLuong = Number(inputs[0].value);
    let donGia = Number(inputs[1].value);
    
    // Nhân số lượng với đơn giá và gán vào ô Tổng (ô input thứ 3)
    inputs[2].value = soLuong * donGia;
}