//hamburger hover

document.querySelector(".hamburger-menu").addEventListener("mouseover", entering);
function entering(){
        let x = document.getElementById("navcolors");
        if (x.style.visibility === "hidden") {
            x.style.visibility = "visible";} 
        } 

document.querySelector("#navbar").addEventListener("mouseleave", out);
    function out(){
            let x = document.getElementById("navcolors");
            if (x.style.visibility === "visible") {
                x.style.visibility = "hidden";}
            } 

//colors

document.getElementById("navcolors").addEventListener("click", () =>{
    document.body.style.background = event.target.id
    document.getElementById("textColor").innerHTML = event.target.id
})

