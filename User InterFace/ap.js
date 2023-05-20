let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};
let addElm=document.getElementById('add')
let cardBox =document.getElementById('cardBox')
let bodyElm = document.getElementById('menu');
let orderElm=document.getElementById('order')
let properties = {
    id: 1,
    icon: '<ion-icon name="logo-apple"></ion-icon>',
    title: 'Brand Name',
    img:"../img/People.png",
    name:'David',
    add:'Italy'
   
};
let listProperties = [
    {
        id: 1,
        icon: '<ion-icon name="logo-apple"></ion-icon>',
        title: 'Brand Name',
        img:"../img/People.png",
        name:'David',
        add:'Italy'
    },
    {
        id: 2,
        icon: '<ion-icon name="home-outline"></ion-icon>',
        title: 'Dashboard',
        img:'../img/—Pngtree—infinity sharingan eyes_6959658.png',
        name:'Amit',
        add:'India'
    },
    {
        id: 3,
        icon: '<ion-icon name="people-outline"></ion-icon>',
        title: 'Brand Name',
        img:'',
        name:'David',
        add:'India'
    },

    {
        id: 4,
        icon: '<ion-icon name="chatbubble-outline"></ion-icon>',
        title: 'Messages',
        img:'',
        name:'Amit',
        add:'India',
    },
    {
        id: 5,
        icon: '<ion-icon name="help-outline"></ion-icon>',
        title: 'Help',
        img:'',
        name:'David',
        add:'India',
    },
    {
        id: 6,
        icon: '<ion-icon name="settings-outline"></ion-icon>',
        title: 'Settings',
        img:'',
        name:'Amit',
        add:'India',
    },
    {
        id: 7,
        icon: '<ion-icon name="lock-closed-outline"></ion-icon>',
        title: 'Password',
        img:'',
        name:'David',
        add:'India',
    },
    {
        id: 8,
        icon: '<ion-icon name="log-out-outline"></ion-icon>',
        title: 'Sign Out',
        img:'',
        name:'Amit',
        add:'India',
    },

]
let cards={
    cardId:1,
    cardNumber:'525,5161,251',
    cardName:'Daily Views',
    cardIcon:'<ion-icon name="cart-outline"></ion-icon>'

}
let listCard =[
    {
        cardId:1,
        cardNumber:'525,5161,251',
        cardName:'Daily Views',
        cardIcon:'<ion-icon name="cart-outline"></ion-icon>'
    },
    {
        cardId:2,
        cardNumber:'8000',
        cardName:'Sales',
        cardIcon:'<ion-icon name="cart-outline"></ion-icon>'
    },
    {
        cardId:3,
        cardNumber:'9849',
        cardName:'Comments',
        cardIcon:'<ion-icon name="chatbubbles-outline"></ion-icon>'
    },
    {
        cardId:4,
        cardNumber:'$7,842,556',
        cardName:'Earning',
        cardIcon:'<ion-icon name="cart-outline"></ion-icon>'
    },
]

function formatMenu(properties) {
    return`
    <li>
    <a href="#">
        <span class="icon">
            ${properties.icon}
        </span>
        <span class="title">${properties.title}</span>
    </a>
</li>
    `
    
}


function formatCard(cards) {
    return `
    <div class="card" >
        <div>
            <div class="numbers">${cards.cardNumber}</div>
            <div class="cardName">${cards.cardName}</div>
        </div>

        <div class="iconBx">
            ${cards.cardIcon}
        </div>
    </div>
    `

}
function formatAdd(properties) {
    return`
    <tr>
        <td width="60px">
            <div class="imgBx"><img src="${properties.img}" alt=""></div>
        </td>
    <td>
        <h4>${properties.name} <br> <span>${properties.add}</span></h4>
    </td>
</tr>
    `
    
}
let resUI = "";
for (let index = 0; index < listProperties.length; index++) {
    resUI += formatMenu(listProperties[index]);
  }


let resUiOne="";
for (let index = 0; index < listCard.length; index++) {
    resUiOne += formatCard(listCard[index]);
  }

let resUiTwo="";
for (let index = 0; index < listProperties.length; index++) {
    resUiTwo += formatAdd(listProperties[index]);
    
}
  
  bodyElm.innerHTML = resUI;
  cardBox.innerHTML=resUiOne;
  addElm.innerHTML=resUiTwo;
  