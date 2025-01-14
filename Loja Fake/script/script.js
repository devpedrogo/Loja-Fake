const menu = document.getElementById('menu');
const menuCelular = document.querySelector('.menu-celular');
const login = document.getElementById('login')
const loginCelular = document.getElementById('login-celular')
const conteinerModal = document.querySelector('.conteiner-modal')
const fechar = document.querySelectorAll('.fechar')

menu.addEventListener('click', function() {
    if(menuCelular.style.display === 'none' && menu.classList.contains('fa-bars')){
        menuCelular.style.display = 'block'
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-times')
        menuCelular.classList.add('open')
    }
    else{
        menuCelular.style.display = 'none'
        menu.classList.remove('fa-times')
        menu.classList.add('fa-bars')
    }
});

login.addEventListener('click', ()=> {
    conteinerModal.style.display = 'flex'
})

loginCelular.addEventListener('click', ()=> {
    conteinerModal.style.display = 'flex'
})

fechar.forEach(botao => {
    botao.addEventListener('click', ()=> {
        conteinerModal.style.display = 'none'
    })
})

conteinerModal.addEventListener('click', ()=> {
    conteinerModal.style.display = 'none'
})

document.querySelector('.form-modal').addEventListener('click', (event)=> {
    event.stopPropagation();
})

document.querySelector('.form-criar-conta').addEventListener('click', (event)=> {
    event.stopPropagation();
})

document.getElementById('link-criar-conta').addEventListener('click', ()=> {
    document.querySelector('.form-modal').style.display = 'none'
    document.querySelector('.form-criar-conta').style.display = 'block'
})

document.getElementById('link-voltar-login').addEventListener('click', ()=> {
    document.querySelector('.form-criar-conta').style.display = 'none'
    document.querySelector('.form-modal').style.display = 'block'
})