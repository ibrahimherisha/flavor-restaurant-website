window.addEventListener("scroll",function(){
    const header= document.querySelector(".main-header");
    if(window.scrollY>40){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }

});
const mobile_bar =document.querySelector(".mobile-list-bar");
const mobile_menu=document.querySelector(".mobile-menu");
mobile_bar.addEventListener("click",function(){
  mobile_bar.classList.toggle("active");
  mobile_menu.classList.toggle("open");
});
const cards=document.querySelectorAll(".menu-card");
window.addEventListener("scroll",function revealCards (){
  cards.forEach(function(card,index){
    const cardTop=card.getBoundingClientRect().top;
    if(cardTop<window.innerHeight && !card.classList.contains("show1")){
        setTimeout(function(){
            card.classList.add("show1");
        },index * 50);
    }
  });
  
});
const dishes=document.querySelectorAll(".dish-card");
window.addEventListener("scroll",function (){
  dishes.forEach(function(dish,index){
    const cardTop=dish.getBoundingClientRect().top;
    if(cardTop<window.innerHeight && !dish.classList.contains("show2")){
        setTimeout(function(){
            dish.classList.add("show2");
        },index * 50);
    }
  });
  
});
const about_img=document.querySelectorAll(".about-img");
window.addEventListener("scroll",function (){
  about_img.forEach(function(img,index){
    const cardTop=img.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.7 && !img.classList.contains("show3")){
        setTimeout(function(){
            img.classList.add("show3");
        },index * 50);
    }
  });
  
});
const about_info=document.querySelectorAll(".about-info");
window.addEventListener("scroll",function (){
  about_info.forEach(function(info,index){
    const cardTop=info.getBoundingClientRect().top;
    if(cardTop<window.innerHeight*0.7 && !info.classList.contains("show4")){
        setTimeout(function(){
            info.classList.add("show4");
        },index * 150);
    }
  });
  
});
const reserve_info=document.querySelectorAll(".reserve-info");
window.addEventListener("scroll",function (){
  reserve_info.forEach(function(res_info,index){
    const cardTop=res_info.getBoundingClientRect().top;
    if(cardTop<window.innerHeight-100 && !res_info.classList.contains("show5")){
        setTimeout(function(){
            res_info.classList.add("show5");
        },index * 150);
    }
  });
  
});
const reserve_form=document.querySelectorAll(".reserve-form");
window.addEventListener("scroll",function (){
  reserve_form.forEach(function(res_form,index){
    const cardTop=res_form.getBoundingClientRect().top;
    if(cardTop<window.innerHeight-100 && !res_form.classList.contains("show6")){
        setTimeout(function(){
            res_form.classList.add("show6");
        },index * 150);
    }
  });
  
});
const view_header=document.querySelectorAll("#views .menu-head");
window.addEventListener("scroll",function (){
  view_header.forEach(function(view_head,index){
    const cardTop=view_head.getBoundingClientRect().top;
    if(cardTop<window.innerHeight-100 && !view_head.classList.contains("show7")){
        setTimeout(function(){
            view_head.classList.add("show7");
        },index * 150);
    }
  });
  
});
const view_cards=document.querySelectorAll(".view-card");
window.addEventListener("scroll",function (){
  view_cards.forEach(function(view_card,index){
    const cardTop=view_card.getBoundingClientRect().top;
    if(cardTop<window.innerHeight-100 && !view_card.classList.contains("show8")){
        setTimeout(function(){
            view_card.classList.add("show8");
        },index * 150);
    }
  });
  
});




