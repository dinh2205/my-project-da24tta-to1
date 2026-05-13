// ================= DANH SÁCH SẢN PHẨM =================

const products = [

    {
        id: 1,
        name: "Hoa Hồng Đỏ",
        price: "15000 VND / bông",
        img: "../assets/imges/hoahong.jpg",
        productLink: "detail.html",
        desc: "Hoa hồng đỏ là biểu tượng kinh điển của tình yêu và sự lãng mạn, luôn mang đến cảm giác ngọt ngào và đầy cảm xúc cho người nhận. Với sắc đỏ quyến rũ cùng những cánh hoa mềm mại được sắp xếp tinh tế, sản phẩm tạo nên vẻ đẹp sang trọng và nổi bật trong mọi không gian. Hoa hồng đỏ rất phù hợp để làm quà tặng trong các dịp đặc biệt như sinh nhật, lễ tình nhân hay ngày kỷ niệm. Mỗi bông hoa đều được tuyển chọn kỹ lưỡng với độ tươi mới cao, màu sắc tự nhiên và hương thơm nhẹ nhàng dễ chịu. Không chỉ là món quà ý nghĩa, hoa hồng đỏ còn giúp thể hiện sự chân thành, yêu thương và trân trọng dành cho người đặc biệt."
    },

    {
        id: 2,
        name: "Hoa Lan Hồ Điệp",
        price: "35000 VND / chậu",
        img: "../assets/imges/nenpage2.jpg",
        productLink: "detail.html",
        desc: "Hoa lan hồ điệp nổi bật với vẻ đẹp sang trọng, thanh lịch và đầy cuốn hút, thường được xem là biểu tượng của sự giàu sang và may mắn. Những cánh hoa mềm mại với màu sắc hài hòa tạo nên nét đẹp tinh tế phù hợp để trang trí không gian sống, văn phòng hoặc làm quà tặng cao cấp. Loài hoa này còn tượng trưng cho sự thành công, hạnh phúc và tình cảm chân thành. Hoa được chăm sóc kỹ lưỡng để giữ độ tươi lâu, cánh hoa dày đẹp và màu sắc tự nhiên. Khi đặt trong không gian, lan hồ điệp không chỉ giúp căn phòng trở nên nổi bật mà còn mang lại cảm giác thư giãn, nhẹ nhàng và đẳng cấp cho người thưởng thức."
    },

    {
        id: 3,
        name: "Hoa Hướng Dương",
        price: "45000 VND / bó",
        img: "../assets/imges/nenpage31.jpg",
        productLink: "detail.html",
        desc: "Hoa hướng dương mang vẻ đẹp rực rỡ và tràn đầy sức sống với sắc vàng tươi nổi bật như ánh nắng mặt trời. Loài hoa này tượng trưng cho niềm tin, hy vọng và tinh thần luôn hướng về những điều tích cực trong cuộc sống. Những cánh hoa lớn cùng phần nhụy tròn đặc trưng tạo nên sự mạnh mẽ nhưng vẫn đầy cuốn hút và ấm áp. Hoa hướng dương rất phù hợp để trang trí bàn làm việc, phòng khách hoặc làm quà tặng cho bạn bè và người thân trong các dịp đặc biệt. Sản phẩm được tuyển chọn kỹ lưỡng với độ tươi cao, màu sắc đẹp mắt và khả năng giữ hoa lâu, giúp không gian thêm sinh động và tạo cảm giác vui vẻ, lạc quan cho người nhìn."
    },

    {
        id: 4,
        name: "Hoa Cẩm Tú Cầu",
        price: "50000 VND / bó",
        img: "../assets/imges/nenpage4.jpg",
        productLink: "detail.html",
        desc: "Hoa cẩm tú cầu gây ấn tượng bởi vẻ đẹp nhẹ nhàng, tinh tế với những chùm hoa lớn được kết hợp từ rất nhiều cánh hoa nhỏ mềm mại. Loài hoa này tượng trưng cho sự chân thành, lòng biết ơn và những cảm xúc dịu dàng trong tình yêu. Gam màu pastel thanh lịch giúp hoa cẩm tú cầu trở thành lựa chọn hoàn hảo để trang trí phòng ngủ, quán cà phê hoặc làm quà tặng cho những người thân yêu. Hoa luôn được bảo quản cẩn thận để giữ được độ tươi lâu, màu sắc tự nhiên và vẻ đẹp cuốn hút. Khi xuất hiện trong không gian sống, hoa mang lại cảm giác bình yên, thư giãn và tạo điểm nhấn đầy nghệ thuật cho căn phòng."
    },

    {
        id: 5,
        name: "Hoa Sen",
        price: "45000 VND / bó",
        img: "../assets/imges/nenpage5.jpg",
        productLink: "detail.html",
        desc: "Hoa sen mang vẻ đẹp thanh cao, tinh khiết và từ lâu đã trở thành biểu tượng quen thuộc của văn hóa Việt Nam. Những cánh hoa mềm mại cùng hương thơm dịu nhẹ tạo nên cảm giác bình yên và thư thái cho không gian sống. Hoa sen thường tượng trưng cho sự thuần khiết, nghị lực vươn lên và vẻ đẹp giản dị nhưng đầy cuốn hút. Sản phẩm rất phù hợp để trang trí phòng khách, không gian thiền hoặc làm quà tặng ý nghĩa dành cho người thân và bạn bè. Mỗi bông hoa đều được tuyển chọn cẩn thận với màu sắc tự nhiên, cánh hoa đẹp và độ tươi lâu cao. Sự nhẹ nhàng của hoa sen giúp không gian trở nên thanh lịch, gần gũi và mang đậm nét truyền thống Việt Nam."
    },

    {
        id: 6,
        name: "Hoa Mai",
        price: "50000 VND / bó",
        img: "../assets/imges/nenpage6.jpg",
        productLink: "detail.html",
        desc: "Hoa mai nổi bật với sắc vàng rực rỡ tượng trưng cho sự may mắn, tài lộc và hạnh phúc trong những ngày đầu năm mới. Loài hoa này mang vẻ đẹp tươi sáng và tràn đầy sức sống, thường được sử dụng để trang trí nhà cửa trong dịp Tết cổ truyền Việt Nam. Những cánh hoa vàng mềm mại kết hợp cùng nhụy hoa nhỏ xinh tạo nên nét đẹp thanh tao nhưng không kém phần sang trọng. Hoa mai không chỉ giúp không gian trở nên ấm áp và nổi bật mà còn mang ý nghĩa cầu chúc cho một năm mới bình an, thành công và thịnh vượng. Sản phẩm được chăm sóc kỹ lưỡng với màu sắc tự nhiên và độ tươi lâu, mang lại cảm giác vui tươi và đầy hy vọng cho người thưởng thức."
    },

    {
        id: 7,
        name: "Hoa Ly",
        price: "60000 VND / bó",
        img: "../assets/imges/nenpage7.jpg",
        productLink: "detail.html",
        desc: "Hoa ly sở hữu vẻ đẹp sang trọng và quý phái với những cánh hoa lớn mềm mại cùng hương thơm dịu dàng đầy cuốn hút. Loài hoa này thường tượng trưng cho sự cao quý, hạnh phúc và những điều tốt đẹp trong cuộc sống. Với màu sắc tinh tế và kiểu dáng thanh lịch, hoa ly rất thích hợp để trang trí phòng khách, bàn tiệc hoặc làm quà tặng trong các dịp đặc biệt như sinh nhật, khai trương hay lễ kỷ niệm. Mỗi cành hoa đều được tuyển chọn kỹ lưỡng với nụ to, cánh dày và khả năng giữ hoa tươi lâu. Khi đặt trong không gian sống, hoa ly không chỉ tạo điểm nhấn nổi bật mà còn mang đến cảm giác thư giãn, dễ chịu và đầy đẳng cấp."
    },

    {
        id: 8,
        name: "Hoa Cúc Họa Mi",
        price: "30000 VND / bó",
        img: "../assets/imges/nenpage8.jpg",
        productLink: "detail.html",
        desc: "Hoa cúc họa mi mang vẻ đẹp mong manh, tinh khôi và đầy chất thơ khiến bất kỳ ai nhìn thấy cũng cảm nhận được sự nhẹ nhàng và bình yên. Những cánh hoa trắng nhỏ xinh kết hợp cùng nhụy vàng nổi bật tạo nên nét đẹp giản dị nhưng vô cùng cuốn hút. Loài hoa này thường tượng trưng cho tình yêu trong sáng, sự chân thành và những kỷ niệm đẹp của tuổi trẻ. Hoa cúc họa mi rất thích hợp để trang trí phòng ngủ, bàn học hoặc làm quà tặng cho những người yêu thích phong cách nhẹ nhàng và tinh tế. Hoa được tuyển chọn kỹ càng để giữ được độ tươi mới lâu dài, mang đến cảm giác thư giãn, dễ chịu và làm cho không gian sống thêm phần lãng mạn."
    }


];

// ================= HIỂN THỊ 1 SẢN PHẨM =================

function addproduct(p) {

    const productList = document.getElementById("product-list");

    // ===== KHUNG SẢN PHẨM =====
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");



    // ===== IMAGE =====
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "product-image");
    const img = document.createElement("img");
    img.setAttribute("src", p.img);
    imgDiv.appendChild(img);



    // ===== INFO =====
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "product-info");


    // ===== TÊN =====
    const p1 = document.createElement("p");
    p1.innerText = p.name;

    // ===== GIÁ =====
    const p2 = document.createElement("p");
    p2.innerText = p.price;

    // ===== MÔ TẢ =====
    const p3 = document.createElement("p");
    p3.innerText = p.desc;

    // ===== LINK CHI TIẾT =====
    const link = document.createElement("a");

    link.setAttribute( "href", p.productLink + "?id=" + p.id);

    link.innerText = "Nhấn xem chi tiết";

    // ===== GẮN VÀO INFO =====
    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);
    infoDiv.appendChild(link);

    // ===== GẮN VÀO PRODUCT =====
    myDiv.appendChild(imgDiv);
    myDiv.appendChild(infoDiv);

    // ===== HIỂN THỊ =====
    productList.appendChild(myDiv);

}

// ================= LOAD TOÀN BỘ SẢN PHẨM =================
function loadAllproducts() {

    const productList = document.getElementById("product-list");

    // XÓA DỮ LIỆU CŨ
    productList.innerHTML = "";

    // LOAD TỪNG SẢN PHẨM
    for (let i = 0; i < products.length; i++) {

        addproduct(products[i]);

    }

}