var idioma=navigator.language
console.log("La página se cargará en "+idioma)
let textoEsp=[]

textNodesUnder(document.body)

while(document.getElements)
if(idioma=='en-US'){
    document.getElementById("txt1").innerHTML="Create an account" 
    document.getElementById("google").value = "Log in with google"
    document.getElementById("txt2").innerHTML="You can also..." 
    document.getElementById("nombre").value="Name" 
    document.getElementById("email").value="Electronic mail"
    document.getElementById("pass").value="Password"
    document.getElementById("pass2").value="Repeat the password"
    document.getElementById("pol").innerHTML="I've read and accepted our privacy policy"
    document.getElementById("desc").innerHTML="I wish to receive exclusive discounts and news in my inbox. I can cancel if I want from my panel."   
    document.getElementById("crearcuenta").value="Create an account"
    document.getElementById("iniciosesion").value="Sign up"    
}

document.getElementById('eng').addEventListener('click',cambiarEn,false)
document.getElementById('esp').addEventListener('click',cambiarEsp,false)
document.getElementById('google').addEventListener('click',ventanaGoogle,false)
function ventanaGoogle(){
    ventaniya=window.open("", "", "width=400, height=200")
}

function textNodesUnder(node){
    for (node=node.firstChild;node;node=node.nextSibling){
        textoEsp.push(node)
    }

    for (let index = 0; index < textoEsp.length; index++) {
        console.log(textoEsp[index].value)
        
    }
  }

function cambiarEn(){
    document.getElementById("txt1").innerHTML="Create an account" 
    document.getElementById("google").value = "Log in with google"
    document.getElementById("txt2").innerHTML="You can also..." 
    document.getElementById("nombre").value="Name" 
    document.getElementById("email").value="Electronic mail"
    document.getElementById("pass").value="Password"
    document.getElementById("pass2").value="Repeat the password"
    document.getElementById("pol").innerHTML="I've read and accepted our privacy policy"
    document.getElementById("desc").innerHTML="I wish to receive exclusive discounts and news in my inbox. I can cancel if I want from my panel."   
    document.getElementById("crearcuenta").value="Create an account"
    document.getElementById("iniciosesion").value="Sign up"
}

function cambiarEsp(){

}