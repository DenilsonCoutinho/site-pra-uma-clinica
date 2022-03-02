const header1 = document.querySelector("#header")
 function scroll(){
     const windowTop = window.pageYOffset 
     if (windowTop > '55'){
         header1.style.height = "50px"
     }else{
        header1.style.height = "120px"
     }
     
 }
  
 window.addEventListener('scroll', function() {
     scroll()
 })


 const navbar = document.querySelector('nav ul')
 const button = document.querySelector('div.menu-icon')
 const closeButton = document.querySelector('div.menu-icon').children[0]
 
 button.addEventListener('click', () =>{
     navbar.classList.toggle('active')
 })

 
 const menu = document.querySelector('nav ul')
 function scroll2(){
     const windowTop = window.pageYOffset 
     if (windowTop > '55'){
         menu.style.position
         menu.style.top ="85px"
     }else{
        menu.style.position
        menu.style.top = "155px"
    }

 }
  
 window.addEventListener('scroll', function() {
     scroll2()
 })