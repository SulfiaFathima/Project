var items;
var datas;
var count = 0;
var cartData = [];
var itemCount;
var totalCount;
let itemExists = false;
var sum = 0;
var text = {
    "mobiles": [
        { "id": 1, "category": "mobile", "img": "./images/phone/phone1.jpg", "title": "Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately", "desc": "Get it by, Saturday", "price": 20000, "cart": "Add To Cart", "quantity": 1 },
        { "id": 2, "category": "mobile", "img": "./images/phone/phone2.jpg", "title": "Samsung Galaxy M04 Light Green, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery", "desc": "Get it by,Wednesday", "price": 15000, "cart": "Add To Cart", "quantity": 1 },
        { "id": 3, "category": "mobile", "img": "./images/phone/phone3.jpg", "title": "Redmi 10A Sport (Sea Blue, 6GB RAM, 128GB Storage) | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster", "desc": "Get it by,Monday", "price": 12700, "cart": "Add To Cart", "quantity": 1 },
        { "id": 4, "category": "mobile", "img": "./images/phone/phone4.jpg", "title": "Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12", "desc": "Get it by,Saturday", "price": 11300, "cart": "Add To Cart", "quantity": 1 },
        { "id": 5, "category": "mobile", "img": "./images/phone/phone5.jpg", "title": "Tecno Spark 9 (Sky Mirror, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processo", "desc": "Get it by,Monday", "price": 50000, "cart": "Add To Cart", "quantity": 1 },
        { "id": 6, "category": "mobile", "img": "./images/phone/phone6.jpg", "title": "Redmi Note 11 (Space Black, 6GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included", "desc": "Get it by, Tuesday", "price": 45000, "cart": "Add To Cart", "quantity": 1 },
        { "id": 7, "category": "mobile", "img": "./images/phone/phone7.jpg", "title": "Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12", "desc": "Get it by,Thursday", "price": 39999, "cart": "Add To Cart", "quantity": 1 },
        { "id": 8, "category": "mobile", "img": "./images/phone/phone8.jpg", "title": "Redmi 11 Prime 5G (Thunder Black, 4GB RAM, 64GB Storage) | Prime Design | MTK Dimensity 700 | 50 MP Dual Cam | 5000mAh | 7 Band 5G", "desc": "Get it by, Monday", "price": 41999, "cart": "Add To Cart", "quantity": 1 },
        { "id": 9, "category": "mobile", "img": "./images/phone/phone1.jpg", "title": " Samsung Galaxy M13 (Stardust Brown, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus", "desc": "Get it by, Saturday", "price": 11999, "cart": "Add To Cart", "quantity": 1 },
        { "id": 10, "category": "mobile", "img": "./images/phone/phone2.jpg", "title": "Redmi 11 Prime 5G (Thunder Black, 4GB RAM, 64GB Storage) | Prime Design | MTK Dimensity 700 | 50 MP Dual Cam | 5000mAh | 7 Band 5G", "desc": "Get it by, Thursday", "price": 12549, "cart": "Add To Cart", "quantity": 1 },
        { "id": 11, "category": "mobile", "img": "./images/phone/phone3.jpg", "title": "Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12", "desc": "Get it by, Friday", "price": 15699, "cart": "Add To Cart", "quantity": 1 },
        { "id": 12, "category": "mobile", "img": "./images/phone/phone4.jpg", "title": "Redmi Note 11 (Space Black, 6GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included", "desc": "Get it by, Sunday", "price": 100955, "cart": "Add To Cart", "quantity": 1 },
        { "id": 13, "category": "mobile", "img": "./images/phone/phone5.jpg", "title": "Tecno Spark 9 (Sky Mirror, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processo", "desc": "Get it by,Friday", "price": 99000, "cart": "Add To Cart", "quantity": 1 },
        { "id": 14, "category": "mobile", "img": "./images/phone/phone1.jpg", "title": "Tecno Spark 9 (Sky Mirror, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processo", "desc": "Get it by,Friday", "price": 99000, "cart": "Add To Cart", "quantity": 1 },
        { "id": 15, "category": "mobile", "img": "./images/phone/phone6.jpg", "title": "Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12", "desc": "Get it by,Tuesday", "price": 5999, "cart": "Add To Cart", "quantity": 1 }]
};
items = text.mobiles;

var obj = {
    "laptops": [
        { "id": "16", "category": "laptop", "img": "./images/laptop/lap1.jpg", "title": "Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN", "desc": "Get it by, Saturday", "price": "Rs.1,20,000", "cart": "Add To Cart", "quantity": "0" },
        { "id": "17", "category": "laptop", "img": "./images/laptop/lap2.jpg", "title": "Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN", "desc": "Get it by,Wednesday", "price": "Rs.35,000", "cart": "Add To Cart", "quantity": "0" },
        { "id": "18", "category": "laptop", "img": "./images/laptop/lap3.jpg", "title": "(Renewed) Dell Latitude E5470 Intel Core i5 6th Gen.6200u Processor 14.1 Inches HD Screen Notebook Computer (8 GB Ram & 256 GB SSD, Windows 10 Pro, 1.71Kg)", "desc": "Get it by,Monday", "price": "Rs.52,700", "cart": "Add To Cart", "quantity": "0" },
        { "id": "19", "category": "laptop", "img": "./images/laptop/lap4.jpg", "title": "HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MSO 2021/1.41 Kg, 14s-dy2507TU", "desc": "Get it by,Saturday", "price": "Rs.71,300", "cart": "Add To Cart", "quantity": "0" },
        { "id": "20", "category": "laptop", "img": "./images/laptop/lap5.jpg", "title": "Lenovo IdeaPad D330 Intel Celeron N4020 10.1 (25cm) HD IPS Detachable 2-in-1 Laptop (4GB/128GB eMMC/Windows 10/1 Yr Warranty/Mineral Grey/1.1Kg), 82H0001YIN", "desc": "Get it by,Monday", "price": "Rs.50,000", "cart": "Add To Cart", "quantity": "0" },
        { "id": "21", "category": "laptop", "img": "./images/laptop/lap6.jpg", "title": "(Renewed) HP ProBook Intel 6th Gen Core i5 14 inches FHD Screen Laptop (8GB RAM, 256GB SSD, HD Graphics, Windows 11 (Upgraded), MS Office, Black, Slim)", "desc": "Get it by, Tuesday", "price": "Rs.1,20,000", "cart": "Add To Cart", "quantity": "0" },
        { "id": "22", "category": "laptop", "img": "./images/laptop/lap7.jpg", "title": "Chuwi HeroBook Air 11.6 Windows 11 Laptop, Intel Celeron N4020 Processor, 4GB LPDDR4 RAM, 128GB SSD, HD Display, WiFi, Webcam, Ultra Slim and Light Notebook PC for School", "desc": "Get it by,Thursday", "price": "Rs.1,19,999", "cart": "Add To Cart", "quantity": "0" },
        { "id": "23", "category": "laptop", "img": "./images/laptop/lap8.jpg", "title": "ASUS Vivobook 14, 14.0-inch (35.56 cms) FHD, Intel Core i5-1035G1 10th Gen, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Grey/1.60 kg), X415JA-EK522WS", "desc": "Get it by, Monday", "price": "Rs.1,41,999", "cart": "Add To Cart", "quantity": "0" },
        { "id": "24", "category": "laptop", "img": "./images/laptop/lap9.jpg", "title": "Chuwi HeroBook Air 11.6 Windows 11 Laptop, Intel Celeron N4020 Processor, 4GB LPDDR4 RAM, 128GB SSD, HD Display, WiFi, Webcam, Ultra Slim and Light Notebook PC for School", "desc": "Get it by, Saturday", "price": "Rs.1,11,999", "cart": "Add To Cart", "quantity": "0" },
        { "id": "25", "category": "laptop", "img": "./images/laptop/lap10.jpg", "title": "(Renewed) HP ProBook Intel 6th Gen Core i5 14 inches FHD Screen Laptop (8GB RAM, 256GB SSD, HD Graphics, Windows 11 (Upgraded), MS Office, Black, Slim)", "desc": "Get it by, Thursday", "price": "Rs.32,549", "cart": "Add To Cart", "quantity": "0" },
        { "id": "26", "category": "laptop", "img": "./images/laptop/lap11.jpg", "title": "Lenovo IdeaPad D330 Intel Celeron N4020 10.1 (25cm) HD IPS Detachable 2-in-1 Laptop (4GB/128GB eMMC/Windows 10/1 Yr Warranty/Mineral Grey/1.1Kg), 82H0001YIN", "desc": "Get it by, Friday", "price": "Rs.89,699", "cart": "Add To Cart", "quantity": "0" },
        { "id": "27", "category": "laptop", "img": "./images/laptop/lap12.jpg", "title": "HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MSO 2021/1.41 Kg, 14s-dy2507TU", "desc": "Get it by, Sunday", "price": "Rs.1,00,955", "cart": "Add To Cart", "quantity": "0" },
        { "id": "28", "category": "laptop", "img": "./images/laptop/lap13.jpg", "title": "(Renewed) Dell Latitude E5470 Intel Core i5 6th Gen.6200u Processor 14.1 Inches HD Screen Notebook Computer (8 GB Ram & 256 GB SSD, Windows 10 Pro, 1.71Kg)", "desc": "Get it by,Friday", "price": "Rs.99,000", "cart": "Add To Cart", "quantity": "0" },
        { "id": "29", "category": "laptop", "img": "./images/laptop/lap4.jpg", "title": "Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN", "desc": "Get it by,Friday", "price": "Rs.99,000", "cart": "Add To Cart", "quantity": "0" },
        { "id": "30", "category": "laptop", "img": "./images/laptop/lap5.jpg", "title": "Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN", "desc": "Get it by,Tuesday", "price": "Rs.66,999", "cart": "Add To Cart", "quantity": "0" }]
};
datas = obj.laptops;

//get data for mobiles
function getMobiles() {
    // location.reload();
    console.log("items", items);
    getCartItems();    
    displayMobiles(items);
    // location.reload();
}

//display data in mobiles page
function displayMobiles(items) {

    const container = document.getElementById("container");

    items.forEach(item => {
        console.log("item123", item.id);
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const price = document.createElement("span");
        const d = document.createElement("p");
        const button = document.createElement("button");

        img.src = item.img;
        p.innerText = item.title;
        d.innerText = item.desc
        price.innerText = item.price
        button.innerText = item.cart;
        button.onclick = () => {
            addtocart(item);
        };
        console.log(button);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(d);
        div.appendChild(price);
        div.appendChild(button);
        container.appendChild(div);
    });
    getCartItems();
    // location.reload();

}

    // function compare(a, b) {
    //     if (a.id < b.id) {
    //       return -1;
    //     }
    //     if (a.id > b.id) {
    //       return 1;
    //     }
    //     return 0;
    //   }


// Add Item to cart
function addtocart(item) {

    console.log("dddddddddd", item);

    if (localStorage.getItem("cartArray") === null) {
        // item.quantity = item.quantity+1;
        // console.log("Changed Quantity:",item.quantity);
        cartData.push(item);
        const jsonArray = JSON.stringify(cartData);
        console.log("insideif");
        localStorage.setItem("cartArray", jsonArray);
        itemExists = true;

    }
    else {

        console.log("itemexist", itemExists);
        console.log("inside else");
        const existingData = JSON.parse(localStorage.getItem("cartArray"));
        console.log("existingData", existingData);
        existingData.forEach((element) => {
            console.log('item', item.id);
            console.log("item2", element.id);

            if (item.id === element.id) {
                console.log("First IF");
                item.quantity = item.quantity + 1;
                console.log("Changed Quantity:", item.quantity);
                const index = existingData.findIndex(elem => item.id === elem.id);
                console.log("index",index);
                existingData.splice(index, 1);
                itemExists = true;
            }
        });
        existingData.push(item);

        if (!itemExists) {
            // item.quantity = item.quantity+1;
            console.log("Two");
            existingData.push(item);

        }
        const updatedData = JSON.stringify(existingData);
        localStorage.setItem("cartArray", updatedData);
        // //to remove duplicate records
        // const data = localStorage.getItem('cartArray');
        // const dataArray = JSON.parse(data);
        // const filteredArray = dataArray.filter((value, index, self) => {
        //     return self.indexOf(value) === index;
        // });
        // const filteredData = JSON.stringify(filteredArray);
        // localStorage.setItem('cartArray', filteredData);



    }
    getCartItems();

    // localStorage.removeItem("cartArray");

}
//get the length of cart items
function getCartItems() {
    var getData = localStorage.getItem("cartArray");
    getArray = JSON.parse(getData);
    if (getArray != null) {
           for (const item of getArray) {
            sum = getArray.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
            console.log("add to cart",sum); 
            //  totalCount = item.quantity;
          }
    }
    // getArray.quantity.id
    
    // if (getArray != null) {
    //     count = getArray.length;
    // }
    // else {
    //     count = 0;
    // }
    document.getElementById("addtocart").innerHTML = sum;

}

//get laptop data
function getLaptops() {
    // console.log("obj.mobiles", obj.mobiles);
    // datas = objlap.laptops;
    getCartItems();
    console.log("datas", datas);
    displayLaptops(datas);
}
//display the laptops data in laptops page
function displayLaptops(datas) {
    const container = document.getElementById("container");

    datas.forEach(data => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const price = document.createElement("span");
        const d = document.createElement("p");
        const button = document.createElement("button");

        img.src = data.img;
        p.innerText = data.title;
        d.innerText = data.desc
        price.innerText = data.price
        button.innerText = data.cart;
        button.onclick = () => {
            addtocart();
        };
        console.log(button);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(d);
        div.appendChild(price);
        div.appendChild(button);
        container.appendChild(div);
    });
}

//display the items in cart in cart page
function displayCart() {
    getCartItems();
    countTotal();
    const getCartData = JSON.parse(localStorage.getItem("cartArray"));
    const cartContainer = document.getElementById("cart");
    console.log("getCartData", getCartData);
    if (getCartData == null) {
        console.log(" Null");
        document.getElementById("cart").innerHTML = "Your Cart Is Empty!!!..."
    }


    // if (getCartData !== null) {
    else {
        console.log("Not Null");
        getCartData.forEach(item => {
            console.log("item123", item.id);
            const table = document.createElement("table");
            // table.setAttribute("class","cartTable");
            const row = document.createElement('tr');
            const image = document.createElement('td');
            const pid = document.createElement('span');
            const desc = document.createElement('td');
            const price = document.createElement('td');
            const img = document.createElement('img');
            const inc = document.createElement('button');
            const dec = document.createElement('button');
            const count = document.createElement('label');
            inc.setAttribute("class", "btninc");
            dec.setAttribute("class", "btndec");

            console.log(item.img);

            // const img = document.createElement("img");
            // const p = document.createElement("p");
            // const price = document.createElement("span");
            // const d = document.createElement("p");
            // const button = document.createElement("button");
            let priceValue = item.price * item.quantity;
            console.log("item.price",item.price);
            console.log("item.quantity",item.quantity);

            img.src = item.img;

            desc.innerText = item.title;
            price.innerText ="Rs." + priceValue + "\n";
            inc.innerText = "+";
            dec.innerText = "-";
            pid.innerText = " Product ID: " + item.id;
            count.innerText = item.quantity;
            inc.onclick = () => {
                cartIncrement(item);
            };
            dec.onclick = () => {
                cartDecrement(item);
            };

            // button.innerText = "Remove From Cart";
            // button.onclick = () => {
            //     removeFromCart(item);
            // };
            // console.log(button);

            image.appendChild(img);
            row.appendChild(image);
            row.appendChild(desc);
            desc.appendChild(pid);
            row.appendChild(price);
            price.appendChild(inc);
            price.appendChild(count);
            price.appendChild(dec);
            table.appendChild(row);
            // div.appendChild(button);
            cartContainer.appendChild(table);

        });
    }
    //  else {
    // console.log(" Null");
    // document.getElementById("cart").innerHTML="Your Cart Is Empty!!!..."
    //  }
}
//Icrease the items in cart
function cartIncrement(item) {
    addtocart(item);
    location.reload();
    // countTotal(item);

}
//Decrease the items incart
function cartDecrement(item) {
    removeFromCart(item);
    countTotal(item);

}
//Remove the items from cart
function removeFromCart(item) {
    console.log("dddddddddd", item);
let a= item;
console.log("aaaaa",a);
    if (localStorage.getItem("cartArray") != null) {

        const items = JSON.parse(localStorage.getItem("cartArray"));
        let quanNum = a.quantity;
        console.log("Quan",quanNum);
        

        const index = items.findIndex(elem => elem.id === a.id);
        console.log("index", index);
        if(quanNum >= 2){
            a.quantity = a.quantity - 1;
            items.splice(index, 1);
            console.log("NO",a.quantity);
            items.push(a);
            const updated = JSON.stringify(items);
        }
        else{
        items.splice(index, 1);
        }
        localStorage.setItem("cartArray", JSON.stringify(items));
        // alert("1 item removed from cart!");
        getCartItems();
        location.reload();
    }
    else {
        console.log("inside else");
        console.log("No Such Data Found To Delete!");
        alert("No Such Data Found To Delete!");
    }
}
//  function incCount(){
//     const arry = JSON.parse(localStorage.getItem("cartArray"));
//     const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);
//  }


function countTotal(item) {
    let a = item;
    console.log("in count");
    let itemId;
    console.log("num", item);
    const cartItems = JSON.parse(localStorage.getItem("cartArray"));
    const itemCounts = {};
    console.log("cartArray", cartItems);
    // cartItems.forEach((item) => {
    //     itemId = item.id;
    //     if (itemCounts[itemId]) {
    //         itemCounts[itemId] += 1;
    //     } else {
    //         itemCounts[itemId] = 1;
    //     }
    // });
    console.log("itemCounts", itemCounts);
    itemCount = itemCounts[itemId] || 0;

    // const items = document.querySelectorAll(".cartTable");
    // console.log("items",items);
    // items.forEach((item) => {
    //   const itemId = item.dataset.itemId;
    //   const itemCount = itemCounts[itemId] || 0;
    //   const countElement = item.querySelector(".item-count");
    //   countElement.innerText = itemCount;
    // });


}





