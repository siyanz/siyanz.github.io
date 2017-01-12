/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showSkills(event){
    if(event.keyCode == 13){
        x =  document.getElementById("skills_input").value;
        console.log(x)
        if (x == "list"){
            console.log("\list typed and pressed enter")
            document.getElementById("input_terminal").innerHTML = "2 &nbsp;\list";
            coding = "<p>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;------------------CODING------------------<br>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;Python, Ruby-on-Rails, SQL Queries, Java, Swift, Xcode</p>"
            web_dev = "<p>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;------------------WEB DEV-----------------<br>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;ColdFusion, Dreamweaver, Html5, Css3, Javascript, jQuery</p>"
            design = "<p>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;------------------DESIGN-------------------<br>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;Sketch, Indesign, Photoshop, Illustrator</p>"
            other = "<p>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;-------------------OTHER-------------------<br>&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;Microsoft Offices</p>"
            $( ".terminal_box" ).append( coding );
            $( ".terminal_box" ).append( web_dev );
            $( ".terminal_box" ).append( design );
            $( ".terminal_box" ).append( other );
        }
        else{
           console.log("not \list") 
        }                      
    }
}


// numPixels variable
var numPixels = 30;

function moveSelection(event) {
    if (event.keyCode == 37 || event.keyCode == 39 ){
        console.log("left or right")
        if (document.getElementById("girl_description").style.display == "block" && parseInt(document.getElementById("girl").style.left) >140){
            document.getElementById("girl_description").style.display = "none"
        }
    };
    switch (event.keyCode) {
        case 37:
            leftArrowPressed();
        break;

        case 39:
            rightArrowPressed();
        break;
    }
};

function leftArrowPressed() {
    console.log("left pressed")
    var element = document.getElementById("girl");
    element.src="images/Asset%202.png"
    var changedLeft = parseInt(element.style.left) - numPixels
    var prev = document.querySelector('link[rel="prev"]');
    console.log(changedLeft)
    if (prev == null && changedLeft < 5){
        console.log("no prev")
        element.style.left = element.style.left
    }
    if (changedLeft > 5){
        console.log("still have to space to go left")
        element.style.left = changedLeft+ 'px';
    }

    if(prev != null && changedLeft < 5){
        console.log("relocating to prev")
        fromRight = true;
        localStorage.setItem("fromRight", fromRight);
        window.location.href = prev.href;
        
    }
}

function rightArrowPressed() {
    console.log("right pressed")
    var element = document.getElementById("girl");
    element.src="images/Asset%201.png"    
    var changedRight = parseInt(element.style.left) + numPixels
    var next = document.querySelector('link[rel="next"]');
    console.log(next);
    console.log(changedRight)
    if (next == null && changedRight > 370){
        console.log("no next")
        element.style.left = element.style.left
    }
    if ((next == null && changedRight < 370-95) || (next != null && changedRight < window.innerWidth-95)){
        console.log("still have to space to go right")
        element.style.left = changedRight+ 'px';
    }
    if(next != null && changedRight > window.innerWidth-95){
        console.log("relocating to prev")
        window.location.href = next.href;
    }
}


function setLocation(){
    var check = localStorage.getItem("fromRight");
    console.log(check);
    if (check == "true"){
        console.log("it is true");
        var element = document.getElementById("girl");
        element.src="images/Asset%202.png"
        element.style.left = window.innerWidth-100 + 'px';
        fromRight = false;
        localStorage.setItem("fromRight", fromRight);
        document.getElementById("girl_description").style.display = "none"
    }
    loadImages()
    
}

function loadImages(){
    console.log("img fading in")
    if ($(".head_msg").length > 0){
        $(".head_msg").fadeIn(1300);
    }
    if ($(".img1").length > 0){
        $(".img1").fadeIn(1000);
    }
    if ($(".img2").length > 0){
        $(".img2").fadeIn(4000);
    }
    if ($(".img3").length > 0){
        $(".img3").fadeIn(3000);
    }
    if ($(".img4").length > 0){
        $(".img4").fadeIn(6300);
    }
    if ($(".img5").length > 0){
        $(".img5").fadeIn(6000);
    }
    if ($(".img6").length > 0){
        $(".img6").fadeIn(1000);
    }
    if ($("#skills_inpu").length > 0){
        document.getElementById("skills_inpu").focus();
    }
}