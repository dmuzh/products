let emlBody = document.getElementById('total')
let card = {
    id: 1,
    img: 'https://thuthuatnhanh.com/wp-content/uploads/2022/03/Hinh-anh-Itachi-chibi-buon-cute.png',
    name: 'Uchiha Itachi',
    job: 'front-end developer',
    linkFb:'https://www.facebook.com/profile.php?id=100071199823861'
}
let listCard = [
    {
        id: 1,
        img: 'https://thuthuatnhanh.com/wp-content/uploads/2022/03/Hinh-anh-Itachi-chibi-buon-cute.png',
        name: 'Uchiha Itachi',
        job: 'front-end developer',
        linkFb:'https://www.facebook.com/profile.php?id=100071199823861'


    },
    {
        id: 2,
        img: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/272120466_1589509774722282_5366159161100293289_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=f67be1&_nc_ohc=myvqOl4-zrMAX-MuNEH&_nc_ht=scontent.fdad3-6.fna&oh=00_AfDEjqLGpPmdwT0jbxD8zzE9PzgVIdFoWq6GO98xE99acg&oe=646CEE08',
        name: 'Lương Văn Huy',
        job: 'Full-stack developer',
        linkFb:'https://www.facebook.com/Huylv49'

    },
    {
        id: 3,
        img: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/345849368_3475689596044903_354858558677970430_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tB1M454OyPgAX9Vhzg4&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAjuTgbDpPJ4u2j7e0cio4uA-hyxqVXA6lXtvs35dRL5g&oe=646E0973',
        name: 'Nguyễn Thế Quân',
        job: 'back-end developer',
        linkFb:'https://www.facebook.com/quan.nguyenthe.188'

    }
]

function formatRowUser(card) {
    return `
    <div class="card" >
        <div class="card__img">
            <img src="${card.img}"
            alt="">
    </div>
        <h2>${card.name} </h2>
        <p> ${card.job}</p>
        <div class="card__social">
            <a href="${card.linkFb}">
                <i class='bx bxl-facebook'></i>
            </a>
            <a href="">
                <i class='bx bxl-tiktok'></i>
        </a>
            <a href="">
                <i class='bx bxl-youtube'></i> </a>
            <a href="">
                <i class='bx bxl-github'></i>
        </a>

    </div>
    <button class="card__button"> Contact Me</button>
</div>
    
        `

}
let serUI = "";
for (let index = 0; index < listCard.length; index++) {
    serUI += formatRowUser(listCard[index]);
}
emlBody.innerHTML = serUI