var menuButton = document.querySelector(".mobile-buttons");
menuButton.addEventListener("click",function() {
    
    document
        .querySelector(".header__menu")
        .classList.toggle("header__menu--visible");
});

 var inputSearch = document.querySelector(".mobile-buttons");
 inputSearch.addEventListener("click",function() {
     console.log("Suka");
     document
         .querySelector(".header_right-icons")
        .classList.toggle("header__menu-list--input_mobile");
 });
//  var saidbareMenu = document.querySelector(".mobile-buttons");
//  saidbareMenu.addEventListener("click",function() {
//      console.log("Zalupaaa");
//      document
//          .querySelector(".saidbare-menu")
//         .classList.toggle("saidbare-menumobail");
//  });