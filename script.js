
const explorex=document.querySelector('#exp')
const button=['home','about','facebook','contacts','email']

const data={
    home:`<h1 class='explore' id='homepage'  class='explore' >Call/WhatsApp 0774816199<br>The Best Quality Truck Spares Parts<img id='f300'src="F3000.png" alt=""></h1>`,
    contacts:`<h1 class='explore'><a  target='blank'href='tel:+263774816199'><a href="https://wa.me/263774816199?text=hi">Send WhatsApp Now</a>Call Us Now</h1>
    `,
    email:`<h1  class='facebook2'  style='color:black'><a target='blank'href='mailto:partsspares@clouda.co.zw'>Email partsspares@clouda.co.zw<img id='f300'src="F3000.png" alt=""></h1>`,
    facebook:`<h1  class='facebook2' >Click Here<a target='blank'href='https://www.facebook.com/100086196271500/'><button>facebook</button><img id='f300'src="F3000.png" alt=""></h1>`,
    about:`<h3>Cloud Africa Parts Spares has the best parts for your trucks</h3>`
}

function find(){
button.forEach((press)=>{
document.querySelector('#'+press).addEventListener('click',()=>{
    if(press=='facebook'){
        
        explorex.innerHTML=data.facebook
    }
    else if(press=='home'){
        explorex.innerHTML=data.home
    }
    else if(press=='contacts'){
        explorex.innerHTML=data.contacts
    }
    else if(press=='email'){
        explorex.innerHTML=data.email
    }
    else{
explorex.innerHTML=`<div class="explore">
<h2>${press.toUpperCase()}</h2>
<p>${data.about}</p>
<img id='f300'src="F3000.png" alt="">
</div>

`}
})
})
}
find()
