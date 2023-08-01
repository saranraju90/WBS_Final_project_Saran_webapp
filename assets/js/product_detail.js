

product_description = {
    "prod_1":
    {
        "product_id": "Prod_104",
        "unit_price": 15,
        "title": "Long white dress with green Floral Elegance",
        "short_title": "Floral dress",
        "description": " Crafted with precision and care, the long white dress exudes sophistication and grace, complemented by a delicate green floral design on the bottom, bust, and sleeves, adding a touch of nature's beauty. The flattering A-line silhouette gracefully flows from the bodice, creating a sense of movement and enchantment with every step, while gently hugging the waist for comfort and subtle allure. Skillfully hand-embroidered by artisans, the verdant green floral pattern forms intricate leaves and blossoms, symbolizing growth and harmony, turning the dress into a wearable work of art that captures the essence of a blooming garden. Made from the finest natural fibers, the fabric ensures a luxurious feel against your skin, while the meticulous craftsmanship guarantees long-lasting durability, allowing you to treasure this dress for years to come. The dress's tasteful scoop neckline showcases your collarbones elegantly, enhancing its femininity and versatility for various occasions. The sleeves, extending gracefully to the wrists, feature the same captivating floral pattern, adding a touch of gracefulness. Perfect for formal events, garden parties, weddings, or cultural celebrations, this hand-woven floral elegance embraces the beauty of tradition and vibrancy, making you the epitome of grace and nature wherever you go."
    },
    "prod_2":
    {
        "product_id": "Prod_113",
        "unit_price": 18,
        "title": "Handmade Midi Flared cotton dress/ vintage dress / spring / summer ",
        "short_title": 'Flared cotton dress',
        "description": " The dress features a stunning long green silhouette, reaching until the knee, exuding a touch of sophistication and charm. The short sleeves add a delightful element of comfort and ease, perfect for any occasion. With a matching green tie belt, the dress effortlessly accentuates your waist, adding a flattering and graceful touch to your ensemble. Meticulously handwoven by skilled artisans, this dress showcases intricate craftsmanship and attention to detail. Whether it's a casual day out or a special event, this dress promises to make you feel confident and radiant as you embrace the allure of handwoven fashion."
    },
    "prod_3":
    {
        "product_id": "Prod_112",
        "unit_price": 20,
        "title": "Palestinian Thobe Tatreez Embroidery Dress White And Red Women's Dress",
        "short_title": 'Tatreez Embroidery',
        "description": "The dress features a striking long white silhouette adorned with a captivating color combination of red, black, and maroon. The rich and vibrant hues intertwine gracefully, creating a visually captivating ensemble that exudes both charm and sophistication. The full sleeves in black add a touch of refinement and versatility, making this dress suitable for various occasions. To complete the ensemble, a beautifully crafted head cover in white and black perfectly complements the dress, adding an air of grace and allure. This handwoven masterpiece showcases the craftsmanship of skilled artisans, making it a wearable work of art that you'll treasure for its beauty and uniqueness."
    },
    "prod_4":
    {
    "product_id": "Prod_103",
    "unit_price": 20,
    "title": " Habesha| Greenish Fashionable Menen|Ethiopian Traditional Dress|",
    "short_title": "Greenish Habeesha",
    "description": "Indulge in the allure of this handwoven women's dress, a true masterpiece of artistry and elegance. The dress features a graceful long white silhouette enhanced by exquisite green and golden designs adorning the bottom and neck. The intricate patterns create a mesmerizing visual appeal, exuding a sense of opulence and sophistication. The half sleeves are adorned with matching green and golden accents, adding a touch of glamour to the overall ensemble. Perfect for special occasions or formal events, this dress showcases the craftsmanship of skilled artisans, making it a wearable work of art that you'll cherish for its timeless beauty and grace."
},
    "prod_5":
        {
        "product_id": "Prod_101",
        "unit_price": 25,
        "title": " Habesha| Blackish golden Fashionable Menen|Ethiopian Traditional Dress|",
        "short_title": "Blackish Habeesha",
        "description": "Immerse yourself in elegance with this exquisite handwoven women's dress. The dress boasts a long, pristine white silhouette adorned with captivating black and golden designs at the bottom and neck. The intricate patterns add a touch of opulence and sophistication to the ensemble, making it a true statement of refined taste. Embrace the grace of full sleeves adorned with matching black and golden accents, perfect for adding a touch of glamour to any occasion. Handcrafted with care and precision by skilled artisans, this dress is a wearable masterpiece that beautifully blends tradition with contemporary flair. Whether it's a formal event or a special celebration, this dress promises to make you feel confident and radiant, effortlessly exuding grace and beauty wherever you go."
        },
    "prod_6":
        {
        "product_id": "Prod_102",
        "unit_price": 30,
        "title": "Vintage African long dress ",
        "short_title": "Vintage long dress",
        "description": "Embrace the timeless charm of this vintage African long dress, a testament to traditional craftsmanship and artistic beauty. The dress features a captivating design with broad red stripes at the bottom and waist, evoking a sense of cultural richness and sophistication. The intricate black and white thin stripes add an element of elegance and uniqueness to the ensemble. With full sleeves providing both style and comfort, this dress is perfect for any occasion, be it a cultural event or a casual outing. Handwoven with care, this masterpiece showcases the rich heritage of African textiles, making it a striking and cherished addition to your wardrobe."  
    }
}


function add_product_details(){
    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get('prod');
    product = product_description[prodId];

    product_name = document.getElementsByClassName("product-name")[0]
    product_price = document.getElementsByClassName("product-price")[0]
    product_desc = document.getElementsByClassName("product-desc")[0]

    first_img = document.getElementById("first_img")
    second_img = document.getElementById("second_img")
    
    first_img.src = `assets/images/lumi-0${prodId.slice(-1)}-01.jpg`
    
    second_img.src = `assets/images/lumi-0${prodId.slice(-1)}-02.jpg`



    if (!["prod_5", "prod_6"].includes(prodId)) {
        third_img = document.getElementById("third_img")
        third_img.src = `assets/images/lumi-0${prodId.slice(-1)}-03.jpg`
    }
    
   

    product_name.innerHTML = `${product.title}`;
    product_price.innerHTML = `€${product.unit_price}`;
    product_desc.innerHTML = `${product.desc}`;

    product_suggestions = document.getElementById("recommendation")
    product_suggestions.innerHTML = ''
    prodlist = Object.keys(product_description)
    console.log(prodlist)
    for (const prod of prodlist) {
        if (prod != prodId){
            const a = document.createElement('a')
            a.setAttribute("href", `product_detail.html?prod=${prod}`)
            prod_feature = product_description[prod]
            a.innerHTML = `
            <div class="featured-item">
                <img src="assets/images/lumi-0${prod.slice(-1)}-01.jpg" alt="Item 1">
                <h4>${prod_feature.short_title}</h4>
                <h6>€${prod_feature.unit_price}</h6>
            </div>
            `
            product_suggestions.appendChild(a);
        }
    } 
}

add_product_details();