function openPage(pageName,elmnt,color) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    // elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  // Navbar mobile
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
        distance:"65px",
        duration: 2600,
        delay: 450,
        reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});


// 1234567890

const nameInput=document.querySelector('#name');
const mobileInput=document.querySelector('#mobile');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const messagenput=document.querySelector('#message');
const success=document.querySelector('#success')
const errorNodes=document.querySelectorAll('.error');
// const sign=document.getElementById('sign')

function validateForm()
{
    clearMessages();

    let errorFlag=false;
    //Name
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be empty";
        nameInput.classList.add('border-border');
        errorFlag=true;
    }
    //Mobile
    if(!CheckContactNumber(mobileInput.value))
    {
        errorNodes[1].innerText="Please enter a valid 10-digit phone number";
        mobileInput.classList.add('border-border');
        errorFlag=true;
    }
    if(mobileInput.value.length<1)
    {
        errorNodes[1].innerText="Mobile cannot be empty";
        mobileInput.classList.add('border-border');
        errorFlag=true;
    }
    //Email
    if(!setEamilvalidate(emailInput.value))
    {
        errorNodes[2].innerText="invalite email"
        emailInput.classList.add('border-border');
        errorFlag=true;
    }
    if(emailInput.value.length<1)
    {
        errorNodes[2].innerText="Email cannot be empty"
        emailInput.classList.add('border-border');
        errorFlag=true;
    }
    //password
    if(!CheckPassword(passwordInput.value))
    {
        errorNodes[3].innerText="Please type of Uppercase, lowercase, special character, number, 8 > digit";
        passwordInput.classList.add('border-border');
        errorFlag=true;
    }
    if(passwordInput.value.length<1)
    {
        errorNodes[3].innerText="Password cannot be empty";
        passwordInput.classList.add('border-border');
        errorFlag=true;
    }
    //Message
    if(messagenput.value.length<1)
    {
        errorNodes[4].innerText="Message cannot be empty";
        messagenput.classList.add('border-border')
        errorFlag=true;
    }
    //Success
    if(!errorFlag)
    {
        success.innerHTML="FormValidation Successful"
    }
}
function clearMessages()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText=" ";
    }
    success.innerHTML=" ";
    nameInput.classList.remove("border-border")
    mobileInput.classList.remove("border-border");
    emailInput.classList.remove("border-border");
    passwordInput.classList.remove("border-border");
    messagenput.classList.remove("border-border");
}
function setEamilvalidate(e1)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(e1)
}
function CheckContactNumber(n1)
{
    let num=/^\d{10}$/;
    return num.test(n1)
}
function CheckPassword(ps1) 
{ 
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return paswd.test(ps1)
}


// const sign=document.getElementById("sign")
// var login = document.getElementById("login123");

// function menu12()
// {
//     login.style.display='flex'
// }