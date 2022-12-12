var circle_menu = document.querySelector("#circle_menu_div");
var nav_links = document.querySelectorAll(".nav_links");
var div4nav_links = document.querySelectorAll(".div4nav_links");
var div4nav_links_style = `width: 50%; height: 50%;     
overflow: hidden;   
transition: .8s;
filter: drop-shadow(0 0 4px black);`;  //css style for div4nav_links
circle_menu.addEventListener("mouseover", (e) => {

    let tmp_style;
    //console.log(e.target);
    switch(e.target) {

        case nav_links[0]:
            //console.log("LINK1");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(-5%, -5%);";
            tmp_style += "z-index: 2; filter: drop-shadow(0.8vw 0.8vw 8px black);";
            div4nav_links[0].style.cssText = tmp_style;
            break;

        case nav_links[1]:
            //console.log("LINK2");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(5%, -5%);";
            tmp_style += "z-index: 2; filter: drop-shadow(0.3vw 0.8vw 8px black);";
            div4nav_links[1].style.cssText = tmp_style;
            break;

        case nav_links[2]:
            //console.log("LINK3");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(-5%, 5%);";
            tmp_style += "z-index: 2; filter: drop-shadow(0.8vw 0.3vw 8px black);";
            div4nav_links[2].style.cssText = tmp_style;
            break;

        case nav_links[3]:
            //console.log("LINK4");
            tmp_style = div4nav_links_style + "transform: scale(1.1) translate(5%, 5%);";
            tmp_style += "z-index: 2; filter: drop-shadow(0.4vw 0.4vw 8px black);";
            div4nav_links[3].style.cssText = tmp_style;
            break;

    }

});

circle_menu.addEventListener("mouseout", (e) => {

    //console.log(e.target);
    switch(e.target) {

        case nav_links[0]:
            //console.log("LINK1");
            div4nav_links[0].style.cssText = div4nav_links_style;
            break;

        case nav_links[1]:
            //console.log("LINK2");
            div4nav_links[1].style.cssText = div4nav_links_style;
            break;

        case nav_links[2]:
            //console.log("LINK3");
            div4nav_links[2].style.cssText = div4nav_links_style;
            break;

        case nav_links[3]:
            //console.log("LINK4");
            div4nav_links[3].style.cssText = div4nav_links_style;
            break;

    }

});