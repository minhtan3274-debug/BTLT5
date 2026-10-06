function tinhTien() {
    let foodSelect = document.getElementById("food");
    let drinkSelect = document.getElementById("drink");
    let isNight = document.getElementById("night").checked;
    let resBody = document.getElementById("resBody");
    
    let total = 0;
    let htmlStr = "";
    
    for (let i = 0; i < foodSelect.options.length; i++) {
        if (foodSelect.options[i].selected) {
            let price = Number(foodSelect.options[i].value);
            total += price;
            htmlStr += `<tr><td style="padding: 2px 5px;"><b>${foodSelect.options[i].text}</b></td><td style="padding: 2px 5px;">${price}</td></tr>`;
        }
    }
    
    for (let i = 0; i < drinkSelect.options.length; i++) {
        if (drinkSelect.options[i].selected) {
            let price = Number(drinkSelect.options[i].value);
            total += price;
            htmlStr += `<tr><td style="padding: 2px 5px;"><b>${drinkSelect.options[i].text}</b></td><td style="padding: 2px 5px;">${price}</td></tr>`;
        }
    }
    
    if (isNight) {
        total = total * 1.1; 
    }
    
    htmlStr += `<tr><td style="padding: 2px 5px;"><b>Tổng tiền</b></td><td style="padding: 2px 5px;"><b>${total} đồng</b></td></tr>`;
    
    resBody.innerHTML = htmlStr;
}