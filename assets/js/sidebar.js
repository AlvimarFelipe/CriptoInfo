document.querySelector('.icon').addEventListener('click', () =>{
    let sidebar = document.getElementById("sidebar")

    if (sidebar.style.left == "-215px" || sidebar.style.left == "" ){
        sidebar.style.left= "0px";
    }else{
        sidebar.style.left= "-215px";
    }
    
})