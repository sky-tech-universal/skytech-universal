// filter navigations menu
const Navbtn = ele("#navbtn");
const Nav = ele("#nav");
const closeNavBtn = ele("#cFNbtn");
Navbtn.addEventListener('click', ()=>{
    if(Nav.classList.contains('viewNav')){
        Nav.classList.remove('viewNav');
        Nav.classList.add('HidNav');
    }else{
        Nav.classList.add('viewNav');
        Nav.classList.remove('HidNav');
        // console.log("am cliked");
    }
});
closeNavBtn.addEventListener('click', ()=>{
    if(Nav.classList.contains('viewNav')){
        Nav.classList.remove('viewNav');
        Nav.classList.add('HidNav');
    }
});

function ele(id){
    return document.querySelector(id);
}