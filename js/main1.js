function test(){
    let new_var= document.getElementById('home_id')
    new_var.addEventListener('click',()=> {
        console.log('hey');
        let change_html = document.querySelector('.home');
        change_html.innerHTML = `<h1>This is home page</h1>`;
    })
}

test();