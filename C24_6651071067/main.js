// Hàm để tính và cập nhật số ngày tối đa cho ô Ngày
function updateMaxDay() {
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const dayInput = document.getElementById("day");

    // Nếu chưa nhập năm thì không làm gì cả
    if (!year) return;

    // Lấy số ngày tối đa của tháng/năm đó.
    // VD: new Date(2024, 2, 0) sẽ trả về ngày cuối cùng của tháng 2 (29 ngày).
    const maxDays = new Date(year, month, 0).getDate();

    // Cập nhật thuộc tính max cho thẻ input Ngày (khóa thanh trượt lên không quá max)
    dayInput.max = maxDays;

    // Nếu số ngày đang nhập lớn hơn số ngày tối đa của tháng (VD: đang 31 mà chuyển sang tháng 2)
    // Tự động đẩy lùi số ngày về mức tối đa cho phép
    if (Number(dayInput.value) > maxDays) {
        dayInput.value = maxDays;
    }
}

function getDate() {
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    return { day, month, year };
}

function xuatThu() {
    const { day, month, year } = getDate();

    // Bảo mật kép: Kiểm tra lần cuối nếu người dùng dùng bàn phím gõ lách luật
    const maxDays = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDays) {
        alert(`Lỗi: Tháng ${month} năm ${year} chỉ có tối đa ${maxDays} ngày!`);
        document.getElementById("res").innerHTML = "";
        return;
    }

    // JS tính tháng từ 0-11, nên phải lấy month - 1
    let myDate = new Date(year, month - 1, day);

    // getDay() trả về số từ 0 (Chủ nhật) đến 6 (Thứ 7)
    let dayOfWeek = myDate.getDay();
    let thuStr = "";

    if (dayOfWeek === 0) {
        thuStr = "Chủ nhật";
    } else {
        // Cộng 1 để map chuẩn: getDay = 1 thì là "Thứ 2"
        thuStr = "Thứ " + (dayOfWeek + 1);
    }

    // In kết quả theo đúng định dạng mẫu
    document.getElementById("res").innerHTML = `${thuStr} Ngày ${day} tháng ${month} năm ${year}`;
}