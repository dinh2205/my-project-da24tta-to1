

function addproduct() {

    const productList = document.getElementById("product-list");

    // div cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");

    // Tạo Div ảnh
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", "../assets/imges/hoahong.jpg");
    productImg.setAttribute("alt", "Anh dep Tra Vinh");
    imgDiv.appendChild(productImg);
    //thêm con vào cha
    myDiv.appendChild(imgDiv);

    // Tạo Div INFO
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "product-info");
    //Tên
    const p1 = document.createElement("p");
    const productName = document.createTextNode("Hoa hồng đỏ");
    p1.appendChild(productName);
    //Gía
    const p2 = document.createElement("p");
    const productGia = document.createTextNode("5000 VND / bông");
    p2.appendChild(productGia);

    const p21 = document.createElement("p");
    const productGia1 = document.createTextNode("Hạn sử dụng: Vô hạn ");
    p21.appendChild(productGia1);

    const p3 = document.createElement("p");
    const productContent = document.createTextNode("Hoa hồng là loài hoa tượng trưng cho tình yêu và sự lãng mạn, với màu sắc rực rỡ và hương thơm dịu nhẹ. Cánh hoa mềm mại, xếp tầng tinh tế, tạo nên vẻ đẹp sang trọng và cuốn hút.");
    p3.appendChild(productContent);

    //Link
    const productFile = document.createElement("a");
    productFile.setAttribute("href", "https://hoayeuthuong.com/dien-hoa/hoa-chuc-mung/15042_dich-du-dien-hoa?gad_source=1&gad_campaignid=21267003039&gbraid=0AAAAAqhrHtYXjhqTpzuyOBlqefEthh7Qi&gclid=CjwKCAjwtcHPBhADEiwAWo3sJrcoweiSWAfzRktw5XonT1cvYmA_WAsz6uq4d3bzHaXmI0XuURCVXBoCuZkQAvD_BwE");
    const contentLink = document.createTextNode("Nhấn xem chi tiết");
    productFile.appendChild(contentLink);
    // GẮN VÀO INFO
    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);
    infoDiv.appendChild(p21);
    infoDiv.appendChild(p3);
    infoDiv.appendChild(productFile);

    // gắn info vào cha
    myDiv.appendChild(infoDiv);

    // thêm vào danh sách
    productList.appendChild(myDiv);
}

