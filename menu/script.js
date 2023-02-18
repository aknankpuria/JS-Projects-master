const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})

const majorContainer = document.querySelector(".major-container");

window.addEventListener("DOMContentLoaded", async () => {
    StyleButton(allBtn);

    menu.forEach((value) => {

        let itemContainer = CreateItemContainer(value.id);

        majorContainer.appendChild(itemContainer);

        let itemImage = CreateItemImage(value.img);

        itemContainer.appendChild(itemImage);

        let itemDescContainer = CreateItemDescContainer();

        itemContainer.appendChild(itemDescContainer);

        let itemNameContainer = CreateItemNameContainer(value.title);

        itemDescContainer.appendChild(itemNameContainer);

        let itemPriceContainer = CreateItemPriceContainer(value.price);

        itemDescContainer.appendChild(itemPriceContainer);

        let itemDescriptionContainer = CreateItemDescriptionContainer(value.desc);

        itemDescContainer.appendChild(itemDescriptionContainer);
    })
})

const CreateItemContainer = (itemID) => {
    let div = document.createElement("div");
    div.className = "item";
    div.id = itemID;

    return div;
}

const CreateItemImage = (src) => {
    let image = document.createElement("img");
    image.src = src;
    image.alt = "Item";
    image.className = "item-img";

    return image;
}

const CreateItemDescContainer = () => {
    let section = document.createElement("section");
    section.className = "item-desc-container";

    return section;
}

const CreateItemNameContainer = (itemName) => {
    let name = document.createElement("h4");
    name.className = "item-name";
    name.innerHTML = itemName;

    return name;
} 

const CreateItemPriceContainer = (itemPrice) => {
    let price = document.createElement("h4");
    price.className = "item-price";
    price.innerHTML = itemPrice;

    return price;
}

const CreateItemDescriptionContainer = (itemDesc) => {
    let desc = document.createElement("p");
    desc.className = "item-desc";
    desc.innerHTML = itemDesc;

    return desc;
}

const breakfastBtn = document.querySelector("#breakfast-btn");
const lunchBtn = document.querySelector("#lunch-btn");
const shakesBtn = document.querySelector("#shakes-btn");
const allBtn = document.querySelector("#all-btn");

let breakfastBtnActive = false;
let lunchBtnActive = false;
let shakesBtnActive = false;
let allBtnActive = true;

breakfastBtn.addEventListener("click", (t) => {
    if (breakfastBtnActive || lunchBtnActive || shakesBtnActive || allBtnActive)
    {
        reset();

        UnStyleButton(breakfastBtn);
        UnStyleButton(lunchBtn);
        UnStyleButton(shakesBtn);
        UnStyleButton(allBtn);
    }

    menu.forEach((value) => {
        if (value.category != "breakfast")
        {
            breakfastBtnActive = true;
            StyleButton(breakfastBtn);

            let itemContainer = document.getElementById(`${value.id}`);
            itemContainer.style.display = "none";
        }
    })
})

lunchBtn.addEventListener("click", () => {
    if (breakfastBtnActive || lunchBtnActive || shakesBtnActive || allBtnActive)
    {
        reset();
        UnStyleButton(breakfastBtn);
        UnStyleButton(lunchBtn);
        UnStyleButton(shakesBtn);
        UnStyleButton(allBtn);
    }

    menu.forEach((value) => {
        if (value.category != "lunch")
        {
            lunchBtnActive = true;
            StyleButton(lunchBtn);

            let itemContainer = document.getElementById(`${value.id}`);
            itemContainer.style.display = "none";
        }
    })
})

shakesBtn.addEventListener("click", () => {
    if (breakfastBtnActive || lunchBtnActive || shakesBtnActive || allBtnActive)
    {
        reset();

        UnStyleButton(breakfastBtn);
        UnStyleButton(lunchBtn);
        UnStyleButton(shakesBtn);
        UnStyleButton(allBtn);
    }

    menu.forEach((value) => {
        if (value.category != "shakes")
        {
            shakesBtnActive = true;
            StyleButton(shakesBtn);

            let itemContainer = document.getElementById(`${value.id}`);
            itemContainer.style.display = "none";
        }
    })
})

allBtn.addEventListener("click", () => {
    if (breakfastBtnActive || lunchBtnActive || shakesBtnActive || allBtnActive)
    {
        UnStyleButton(breakfastBtn);
        UnStyleButton(lunchBtn);
        UnStyleButton(shakesBtn);
        UnStyleButton(allBtn);
    }

    StyleButton(allBtn);
    reset();
})

const reset = () => {
    menu.forEach((value) => {
        let itemContainer = document.getElementById(`${value.id}`);
        itemContainer.style.display = "inherit";
    })
}

const StyleButton = (button) => {
    button.style.color = "#fff";
    button.style.backgroundColor = "#000";
}

const UnStyleButton = (button) => {
    button.style.color = "#000";
    button.style.backgroundColor = "#fff";
}