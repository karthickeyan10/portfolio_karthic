var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    // Add the 'active-link' class to the clicked tab link
    document.querySelector('.tab-links[data-tab="' + tabname + '"]').classList.add('active-link');

    // Add the 'active-tab' class to the corresponding tab content
    document.getElementById(tabname).classList.add('active-tab');
    
}

var menu = document.getElementById("sidemenu");
function openmenu(){
    menu.style.right = "0";
}
function closemenu(){
    menu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbziApgnGJ7nUIg3e7_k3wKSx5eqvShzenA37Qz1pk8LDFipqSXn2DlZJjl__SX02XfX/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
