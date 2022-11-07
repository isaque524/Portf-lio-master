function sendMail() {
    var params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        menssagem: document.getElementById("menssagem").value,
    };

    const serviceID = "service_hl7rye7";
    const templateID = "template_da259om";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("menssagem").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}

/*Logica do menu para telas mobile*/

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
})

/*Fechar o menu ao click em algum item e muda o icone*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })

})

/*Animar todos os itens na tela com data-anime*/

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})

/*ativação dos botoes d envio*/

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviando = document.querySelector('#btn-enviando')

btnEnviar.addEventListener("click", () => {
    btnEnviando.style.display = "block";
    btnEnviar.style.display = 'none'

})

