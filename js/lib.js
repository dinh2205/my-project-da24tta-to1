let index = 0;

const products = [
    {
        name: "Cây Xanh",
        price: "10000 VND / chậu",
        img: "../assets/imges/nenpage2.jpg",
        link: "https://hoayeuthuong.com/dien-hoa/hoa-chuc-mung/8774_dich-du-dien-hoa?gad_source=1&gad_campaignid=21267003039&gbraid=0AAAAAqhrHtYXjhqTpzuyOBlqefEthh7Qi&gclid=CjwKCAjwtcHPBhADEiwAWo3sJiwfVdBJz402gfJF4PilxIeMbKWBO15DK-nlFgpZ3IfQL4xpyBVdyxoC8bkQAvD_BwE"
    },
    {
        name: "Hoa lan",
        price: "35000 VND / chậu",
        img: "../assets/imges/nenpage3.jpg",
         link: "https://hoalaxinh.vn/lan-ho-diep-cat-loi/?gad_source=1&gad_campaignid=22619514137&gbraid=0AAAAA_rOLO9UYAIq5iULuRdcAcZZ5rtON&gclid=CjwKCAjwtcHPBhADEiwAWo3sJnSjThaLV3gnkDBQtw-e9Y6zp8ZCqsTk_-m93rU9fUEge8-QgTnZexoCmxMQAvD_BwE"
    },
    {
        name: "Hoa Hồng",
        price: "15000 VND / chậu",
        img: "../assets/imges/hoahong.jpg",
         link: "https://flosa.vn/blogs/y-nghia-hoa/hoa-lan"

    }
];


function addproduct(p){

    const productList = document.getElementById("product-list");

    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");

    // IMAGE
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "product-image");

    const img = document.createElement("img");
    img.setAttribute("src", p.img);

    imgDiv.appendChild(img);
    myDiv.appendChild(imgDiv);

    // INFO
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "product-info");

    const p1 = document.createElement("p");
    p1.appendChild(document.createTextNode(p.name));

    const p2 = document.createElement("p");
    p2.appendChild(document.createTextNode(p.price));


    const link = document.createElement("a");
    link.setAttribute("href", p.link);
    link.appendChild(document.createTextNode("Nhấn xem chi tiết"));

    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);
    infoDiv.appendChild(link);

    myDiv.appendChild(infoDiv);

    productList.appendChild(myDiv);
}



function loadAllproducts(){

    const productList = document.getElementById("product-list");
    // xoá cũ (nếu có)
    productList.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        addproduct(products[i]);
    }
}


