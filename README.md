## Índice

- #visão geral
- #links
- #construído com
- #o-que-aprendi
- #desenvolvimento contínuo
- #autor
- #agradecimentos

## Visão geral

Projeto realizado junto da semana de desenvolvimento básico dos gêmeos do mapa dev week.

## Links

- URL da solução: (https://github.com/thenrybruno/supermariobros)
- URL do site ativo: (https://thenrybruno.github.io/supermariobros/)

## Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Javascript

## O que eu aprendi

Na produção dessa página, foi possível aprimorar meus conhecimentos em HTML e CSS, e aprender um pouco mais algumas funcionalidades da linguagem de programação Javascript. Pude aprender algumas formas novas de manipular certos elementos através de CSS.

```html
        <div class="modal">
            <div class="conteudo-modal">
                <span class="fechar-modal">X</span>
                <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/Cb4WV4aXBpk" title="Trailer oficial" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

```
``` css
    .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(52, 52, 50, 0.749);
    opacity: 0;
    visibility: hidden;
}

    .modal.aberto {
    opacity: 1;
    visibility: visible;
}
```
```JS
    document.querySelector('.botao-trailer').addEventListener('click', () =>{
    document.querySelector('.modal').classList.add('aberto')
    iframe.src = linkVideo
})

document.querySelector('.fechar-modal').addEventListener('click', () =>{
    document.querySelector('.modal').classList.remove('aberto')
    iframe.src = ''
})
```

### Desenvolvimento contínuo

Nos próximos projetos na qual estarei trabalhando, continuarei focado em aperfeiçoar minhas habilidades em HTML, CSS e JS. Aprender cada dia mais sobre essas técnologias e muitas outras é um foco na qual não irei deixar para trás.

## Autor

- Portifólio - Bruno Luiz (https://thenrybruno.github.io/portifolio)
- Frontend Mentor - @thenrybruno (https://www.frontendmentor.io/profile/thenrybruno)
- Github - thenrybruno (https://github.com/thenrybruno)
- LinkdIn - Bruno Almeida (https://www.linkedin.com/in/bruno-almeida-1a320422b/)

## Agradecimentos

Gostaria de agradecer aos gêmeos que se disponibilizaram em realizar essa semana da Mapa Dev Week, e assim proporcionando novos conhecimentos para aqueles que nada sabiam de HTML, CSS e JS, e também para aqueles que já conheciam as mesmas e buscam se aperfeiçoar cada dia mais e mais.