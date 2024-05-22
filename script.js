// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconeBarras.style.display = "none"

    } else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder icone X
        iconeX.style.display = "none"

        // Mostrar icone Barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// cadastro
const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorCpf = document.getElementById("campo-cpf").value
    let valorCelular = document.getElementById("campo-celular").value

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        cpf: valorCpf,
        celular: valorCelular
    }
 
 
 fetch("http://127.0.0.1:3000/solicitacoes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosForm)
})
    .then(resposta => {
        console.log(resposta)
        document.querySelector("#contato form").reset()

        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição")
    })

event.preventDefault()
}

const abrirCase = (event) => {
let paragraphs = event.currentTarget.querySelectorAll("p")
paragraphs.forEach(paragraph => {
    if (paragraph.classList.contains("invisible-text")) {
        paragraph.classList.remove("invisible-text")
    } else {
        paragraph.classList.add("invisible-text")
    }
})
}

const setClick = () => {
if (window.innerWidth <= 1150) {
    cases.forEach((element) => {
        element.addEventListener("click", abrirCase)
        let paragraphs = element.querySelectorAll("p")
        paragraphs.forEach(paragraph => {
            if (!paragraph.classList.contains("invisible-text")) {
                paragraph.classList.add("invisible-text")
            }
        })
    })
} else {
    cases.forEach((element) => {
        element.removeEventListener("click", abrirCase)
        let paragraphs = element.querySelectorAll("p")
        paragraphs.forEach(paragraph => {
            if (paragraph.classList.contains("invisible-text")) {
                paragraph.classList.remove("invisible-text")
            }
        })
    })
}
}
