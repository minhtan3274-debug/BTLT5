function tinhLuong(){
    const luong = document.getElementById("salary").value;
    const heSoLuong = document.getElementById("he_so_luong").value;
    const res = luong * heSoLuong;
    document.getElementById("res").innerHTML = `${res} VND`;
}