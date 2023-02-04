let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

let tbody = document.getElementById("tbody");

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')


    var img = document.createElement('img');
    img.src = 'https://www.thesprucepets.com/thmb/Wh_mSm5UjL7OOvqsyQgXgFatshc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-181861505-4e63227ed0a14dc9bfe86848ef54caf3.jpg';
    tr.appendChild(img);
    img.style.width = "100px";
    img.style.height = "100px";

    

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)


    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

  

    tbody.appendChild(tr)

}