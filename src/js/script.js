const escolha__personagem = {
    lutadorIMG: document.querySelector('.lutador'),
    juri_wait: document.querySelector('.juri_wait'),
    ken: document.querySelector('.ken'),
    laura: document.querySelector('.aura'),
    posion: document.querySelector('.poison'),
    vega: document.querySelector('.vega'),

    btnsALL: document.querySelectorAll('button')
}

let personagem;
escolha__personagem.btnsALL.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let personagem = e.target
        clicou(personagem)
    });
});

const clicou = (pen) =>{
    escolha__personagem.lutadorIMG.style.border = 'none'
    if(pen.classList.contains('vega')){
        escolha__personagem.lutadorIMG.src = 'src/img/vega.gif'
    }else if(pen.classList.contains('poison')){
        escolha__personagem.lutadorIMG.src = 'src/img/poison.gif'
    }else if(pen.classList.contains('laura')){
        escolha__personagem.lutadorIMG.src = 'src/img/Laura.gif'
    }else if(pen.classList.contains('ken')){
        escolha__personagem.lutadorIMG.src = 'src/img/ken.gif'
    }else{
        escolha__personagem.lutadorIMG.src = 'src/img/Juri_wait.gif'
    }
}

