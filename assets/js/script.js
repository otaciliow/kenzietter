
const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets");
const btnDarkMode = document.querySelector('.btn-dark');
const tela = document.querySelector('body');

function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);


function criarTweet(tweetTexto){
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();

    //OBJETO
    const tweet = {
        nome: "Thresh",
        foto: "./assets/img/ProfilePic.jpg",
        usuario: "@thresh.porito",
        texto:tweetTexto,
        tempo:`${hora}:${minutos}`
    }
    
  
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo} = tweet
    
    //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li    = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img   = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div   = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2    = document.createElement("h2");
    h2.innerText = nome
   
    let span  = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`

    let p     = document.createElement("p");
    p.innerText = texto
    
    //ADICIONANDO ELEMENTOS DENTRO DA DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)
    
    feed.appendChild(li)
    textarea.value = ""
}   

btnDarkMode.onclick = darkMode;

function darkMode() {
    tela.classList.toggle('dark');
}
