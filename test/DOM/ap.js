let heading=document.getElementsByClassName('.heading');
let headingElement = document.querySelector('.heading');
console.log(heading.innerText);
console.log(headingElement.textContent);
headingElement.innerText= 'abc'

// textContent trả về tất cả các nội dung văn bản bên trong phần tử, bao gồm cả các thẻ HTML và ký tự trắng. Trong khi đó, innerText chỉ trả về các nội dung văn bản được hiển thị trực tiếp cho người dùng, loại bỏ các thẻ HTML và các khoảng trắng không cần thiết.
// innerText có thể bị ảnh hưởng bởi các thuộc tính CSS như font-size hoặc display, trong khi textContent không bị ảnh hưởng bởi các thuộc tính CSS đó
// geter
//seter

// innerHTML, outerHTML (Bên trong , ngoài)
let boxElement = document.querySelector('.box')
boxElement.innerHTML="<h1>ok</h1>"
// boxElement.style  thay đổi css
Object.assign(boxElement.style,{
    width:'100px',
    // color:'red'
})
// classList propety
    //add thêm  class
    //contains  kiểm tra class
    //remove xáo class
    //toggle // có thì bỏ không có thì thêm có thể dung click
boxElement.classList.add('red','blue')// thêm class
setTimeout(()=>{
    boxElement.classList.remove('red')
},3000)
 setInterval(()=>{
    boxElement.classList.toggle('red')
 },500)
 //dom events
 //attribute events
 // 
 h2Elments= document.querySelector('h2')
 h2Elments.onclick = function (e) {
    console.log(e.target);

 }
 for (let index = 0; index < h2Elments.length; index++) {
    h2Elments[index]=function (e) {
        console.log(e.target);
    }
 }
 function onClick() {
    console.log(Math.random());
 }