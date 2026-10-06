function tinhCanChi() {
    let namInput = document.getElementById("nam").value;

    // 1. Kiểm tra Validate: Bắt buộc nhập và phải lớn hơn 0
    if (namInput === "" || Number(namInput) <= 0) {
        alert("Vui lòng nhập năm dương lịch hợp lệ (lớn hơn 0)!");
        document.getElementById("kq").value = ""; // Xóa kết quả cũ nếu lỗi
        return;
    }

    let nam = Number(namInput);

    // 2. Mảng chứa Can và Chi (viết thường chữ chi giống hệt ảnh mẫu "Ất mùi")
    const canArr = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const chiArr = ["thân", "dậu", "tuất", "hợi", "tý", "sửu", "dần", "mão", "thìn", "tỵ", "ngọ", "mùi"];

    // 3. Tính toán Can Chi bằng phép chia lấy dư
    let can = canArr[nam % 10];
    let chi = chiArr[nam % 12];

    // 4. In kết quả ra ô Textbox bên phải
    document.getElementById("kq").value = `${can} ${chi}`;
}