const iframe = document.getElementById('video');
const linkVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

document.querySelector('.botao-trailer').addEventListener('click', () =>{
    document.querySelector('.modal').classList.add('aberto')
    iframe.src = linkVideo
});

document.querySelector('.fechar-modal').addEventListener('click', () =>{
    document.querySelector('.modal').classList.remove('aberto')
    iframe.src = ''
});