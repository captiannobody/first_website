function addHTML(){
    var changematter
    // console.log("hey");
    if (location.hash=="#home"){
        console.log("hello");
        changematter=document.getElementById('home');
        changematter.innerHTML = '<h1>YO man</h1>';
    }else if(location.hash=="#cart"){
        console.log("inside cart");
        changematter=document.getElementById('home');
        changematter.innerHTML="<h1>You are inside Matrix</h1?";
    }else if(!location.hash){
        location.hash="#home"
    }
}
window.addEventListener("hashchange", addHTML)
document.write("hello");