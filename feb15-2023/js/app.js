var items;
var datas;
var count=0;

var text = {"mobiles":[ 
    {"id":"1", "category":"mobile", "img":"./images/phone/phone1.jpg", "title":"Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately","desc":"Get it by, Saturday", "price":"Rs.20,000","cart":"Add To Cart"},
    {"id":"2", "category":"mobile", "img":"./images/phone/phone2.jpg", "title":"Samsung Galaxy M04 Light Green, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery","desc":"Get it by,Wednesday", "price":"Rs.15,000","cart":"Add To Cart"},
    {"id":"3", "category":"mobile", "img":"./images/phone/phone3.jpg", "title":"Redmi 10A Sport (Sea Blue, 6GB RAM, 128GB Storage) | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster", "desc":"Get it by,Monday","price":"Rs.12,700","cart":"Add To Cart"},
    {"id":"4", "category":"mobile", "img":"./images/phone/phone4.jpg", "title":"Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12","desc":"Get it by,Saturday", "price":"Rs.11,300","cart":"Add To Cart"},
    {"id":"5", "category":"mobile", "img":"./images/phone/phone5.jpg", "title":"Tecno Spark 9 (Sky Mirror, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processo","desc":"Get it by,Monday", "price":"Rs.50,000","cart":"Add To Cart"},
    {"id":"6", "category":"mobile", "img":"./images/phone/phone6.jpg", "title":"Redmi Note 11 (Space Black, 6GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included", "desc":"Get it by, Tuesday","price":"Rs.45,000","cart":"Add To Cart"},
    {"id":"7", "category":"mobile", "img":"./images/phone/phone7.jpg", "title":"Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12","desc":"Get it by,Thursday", "price":"Rs.39,999","cart":"Add To Cart"},
    {"id":"8", "category":"mobile", "img":"./images/phone/phone8.jpg", "title":"Redmi 11 Prime 5G (Thunder Black, 4GB RAM, 64GB Storage) | Prime Design | MTK Dimensity 700 | 50 MP Dual Cam | 5000mAh | 7 Band 5G","desc":"Get it by, Monday", "price":"Rs.41,999","cart":"Add To Cart"},
    {"id":"9", "category":"mobile", "img":"./images/phone/phone1.jpg", "title":" Samsung Galaxy M13 (Stardust Brown, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus","desc":"Get it by, Saturday", "price":"Rs.11,999","cart":"Add To Cart"},
    {"id":"10", "category":"mobile", "img":"./images/phone/phone2.jpg", "title":"Redmi 11 Prime 5G (Thunder Black, 4GB RAM, 64GB Storage) | Prime Design | MTK Dimensity 700 | 50 MP Dual Cam | 5000mAh | 7 Band 5G", "desc":"Get it by, Thursday","price":"Rs.12549","cart":"Add To Cart"},
    {"id":"11", "category":"mobile", "img":"./images/phone/phone3.jpg", "title":"Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12","desc":"Get it by, Friday", "price":"Rs.15699","cart":"Add To Cart"},
    {"id":"12", "category":"mobile", "img":"./images/phone/phone4.jpg", "title":"Redmi Note 11 (Space Black, 6GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included","desc":"Get it by, Sunday", "price":"Rs.1,00,955","cart":"Add To Cart"},
    {"id":"13", "category":"mobile", "img":"./images/phone/phone5.jpg", "title":"Tecno Spark 9 (Sky Mirror, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processo", "desc":"Get it by,Friday","price":"Rs.99,000","cart":"Add To Cart"},
    {"id":"14", "category":"mobile", "img":"./images/phone/phone1.jpg", "title":"Tecno Spark 9 (Sky Mirror, 6GB RAM,128GB Storage) | 11GB Expandable RAM | Helio G37 Gaming Processo", "desc":"Get it by,Friday","price":"Rs.99,000","cart":"Add To Cart"},
    {"id":"15", "category":"mobile", "img":"./images/phone/phone6.jpg", "title":"Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12","desc":"Get it by,Tuesday", "price":"Rs.5999","cart":"Add To Cart"}]};
items=text.mobiles;

var obj = {"laptops":[
    {"id":"16", "category":"laptop", "img":"./images/laptop/lap1.jpg", "title":"Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN","desc":"Get it by, Saturday", "price":"Rs.1,20,000","cart":"Add To Cart"},
    {"id":"17", "category":"laptop", "img":"./images/laptop/lap2.jpg", "title":"Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN","desc":"Get it by,Wednesday", "price":"Rs.35,000","cart":"Add To Cart"},
    {"id":"18", "category":"laptop", "img":"./images/laptop/lap3.jpg", "title":"(Renewed) Dell Latitude E5470 Intel Core i5 6th Gen.6200u Processor 14.1 Inches HD Screen Notebook Computer (8 GB Ram & 256 GB SSD, Windows 10 Pro, 1.71Kg)", "desc":"Get it by,Monday","price":"Rs.52,700","cart":"Add To Cart"},
    {"id":"19", "category":"laptop", "img":"./images/laptop/lap4.jpg", "title":"HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MSO 2021/1.41 Kg, 14s-dy2507TU","desc":"Get it by,Saturday", "price":"Rs.71,300","cart":"Add To Cart"},
    {"id":"20", "category":"laptop", "img":"./images/laptop/lap5.jpg", "title":"Lenovo IdeaPad D330 Intel Celeron N4020 10.1 (25cm) HD IPS Detachable 2-in-1 Laptop (4GB/128GB eMMC/Windows 10/1 Yr Warranty/Mineral Grey/1.1Kg), 82H0001YIN","desc":"Get it by,Monday", "price":"Rs.50,000","cart":"Add To Cart"},
    {"id":"21", "category":"laptop", "img":"./images/laptop/lap6.jpg", "title":"(Renewed) HP ProBook Intel 6th Gen Core i5 14 inches FHD Screen Laptop (8GB RAM, 256GB SSD, HD Graphics, Windows 11 (Upgraded), MS Office, Black, Slim)", "desc":"Get it by, Tuesday","price":"Rs.1,20,000","cart":"Add To Cart"},
    {"id":"22", "category":"laptop", "img":"./images/laptop/lap7.jpg", "title":"Chuwi HeroBook Air 11.6 Windows 11 Laptop, Intel Celeron N4020 Processor, 4GB LPDDR4 RAM, 128GB SSD, HD Display, WiFi, Webcam, Ultra Slim and Light Notebook PC for School","desc":"Get it by,Thursday", "price":"Rs.1,19,999","cart":"Add To Cart"},
    {"id":"23", "category":"laptop", "img":"./images/laptop/lap8.jpg", "title":"ASUS Vivobook 14, 14.0-inch (35.56 cms) FHD, Intel Core i5-1035G1 10th Gen, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Grey/1.60 kg), X415JA-EK522WS","desc":"Get it by, Monday", "price":"Rs.1,41,999","cart":"Add To Cart"},
    {"id":"24", "category":"laptop", "img":"./images/laptop/lap9.jpg", "title":"Chuwi HeroBook Air 11.6 Windows 11 Laptop, Intel Celeron N4020 Processor, 4GB LPDDR4 RAM, 128GB SSD, HD Display, WiFi, Webcam, Ultra Slim and Light Notebook PC for School","desc":"Get it by, Saturday", "price":"Rs.1,11,999","cart":"Add To Cart"},
    {"id":"25", "category":"laptop", "img":"./images/laptop/lap10.jpg", "title":"(Renewed) HP ProBook Intel 6th Gen Core i5 14 inches FHD Screen Laptop (8GB RAM, 256GB SSD, HD Graphics, Windows 11 (Upgraded), MS Office, Black, Slim)", "desc":"Get it by, Thursday","price":"Rs.32,549","cart":"Add To Cart"},
    {"id":"26", "category":"laptop", "img":"./images/laptop/lap11.jpg", "title":"Lenovo IdeaPad D330 Intel Celeron N4020 10.1 (25cm) HD IPS Detachable 2-in-1 Laptop (4GB/128GB eMMC/Windows 10/1 Yr Warranty/Mineral Grey/1.1Kg), 82H0001YIN","desc":"Get it by, Friday", "price":"Rs.89,699","cart":"Add To Cart"},
    {"id":"27", "category":"laptop", "img":"./images/laptop/lap12.jpg", "title":"HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MSO 2021/1.41 Kg, 14s-dy2507TU","desc":"Get it by, Sunday", "price":"Rs.1,00,955","cart":"Add To Cart"},
    {"id":"28", "category":"laptop", "img":"./images/laptop/lap13.jpg", "title":"(Renewed) Dell Latitude E5470 Intel Core i5 6th Gen.6200u Processor 14.1 Inches HD Screen Notebook Computer (8 GB Ram & 256 GB SSD, Windows 10 Pro, 1.71Kg)", "desc":"Get it by,Friday","price":"Rs.99,000","cart":"Add To Cart"},
    {"id":"29", "category":"laptop", "img":"./images/laptop/lap4.jpg", "title":"Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN", "desc":"Get it by,Friday","price":"Rs.99,000","cart":"Add To Cart"},
    {"id":"30", "category":"laptop", "img":"./images/laptop/lap5.jpg", "title":"Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MS Office/BacklitKB /Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA2IN","desc":"Get it by,Tuesday", "price":"Rs.66,999","cart":"Add To Cart"}]};
   datas=obj.laptops;

function getMobiles() {
    console.log("items", items);
    displayMobiles(items);
}


function displayMobiles(items) {
    const container = document.getElementById("container");

    items.forEach(item => {
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
function addtocart() {
    count=count+1;
    console.log(count);
    document.getElementById("addtocart").innerHTML=count;

}
function getLaptops(){
    // console.log("obj.mobiles", obj.mobiles);
    // datas = objlap.laptops;
    console.log("datas", datas);
    displayLaptops(datas);
}
function displayLaptops(datas){
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




