var listaTarefas = document.getElementById("lista-tarefas");
var btnAdc = document.getElementById("btn-salvarItem");
var inputItem = document.getElementById("input-item");
var contador = 0;

btnAdc.addEventListener("click", (evento) => {
    evento.preventDefault();

    if(inputItem.value === ""){
        alert("Insira uma tarefa para continuar.");
        return
    }
    var organizarDisposicao = document.createElement("div")
    organizarDisposicao.classList.add("organizar-itens")
    var lista = document.createElement("li");
    var itemLista = document.createElement("div");
    itemLista.classList.add("item-lista");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var textItem = document.createElement("p");
    //itens do icons
    var conteinerIcons = document.createElement("div");
    conteinerIcons.classList.add("conteiner-icons");

    contador = contador+1;

    var btnEditar = document.createElement("button");
    btnEditar.id = `btn-edicao-${contador}`;
    var imgEdicao = document.createElement("img");

    imgEdicao.src = "assets/img/lápis.svg";
    imgEdicao.title = "Editar";

    var btnRemover = document.createElement("button");
    btnRemover.id = `btn-remover-${contador}`;
    var imgRemover = document.createElement("img");

    imgRemover.src = "assets/img/lixeira.svg";
    imgRemover.title = "Remover";

    btnEditar.addEventListener("click", (event) => {

    var texto_editar = prompt("Novo item: ")

    textItem.innerText = texto_editar;

    })

    btnRemover.addEventListener("click", (event) => {

        listaTarefas.removeChild(organizarDisposicao);
        Verificar_lista_vazia()

    })

    //final dos itens dos icons

    inputItem.value = inputItem.value.charAt(0).toUpperCase()+inputItem.value.slice(1); 

    textItem.innerText = inputItem.value;

    listaTarefas.appendChild(organizarDisposicao);
    organizarDisposicao.appendChild(lista);
    organizarDisposicao.appendChild(conteinerIcons)
    conteinerIcons.appendChild(btnEditar)
    btnEditar.appendChild(imgEdicao)
    conteinerIcons.appendChild(btnRemover)
    btnRemover.appendChild(imgRemover)
    lista.appendChild(itemLista);
    itemLista.appendChild(checkBox);
    itemLista.appendChild(textItem);

    var data = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });

    data = data.charAt(0).toUpperCase()+ data.slice(1);

    var dataEspecifica = new Date().toLocaleDateString("pt-BR")
    var hora = new Date().toLocaleTimeString("pt-BR", {
        hour:"numeric",
        minute: "numeric"
    });
    var dataHora = `${data} (${dataEspecifica}) às ${hora}.`; //DATA E HORA ARRUMARRRR!!!!!!!

    var dataHoraLocal = document.createElement("p");
    dataHoraLocal.classList.add("datas");
    dataHoraLocal.textContent = dataHora;
    lista.appendChild(dataHoraLocal);

    checkBox.addEventListener("click", function(){
        if(checkBox.checked){
            textItem.style.textDecoration = "line-through";
        } else{
            textItem.style.textDecoration = "none";
        }
    })

    inputItem.value = "";

    Verificar_lista_vazia();

btnEdicao.addEventListener("click", (evento) => {
    evento.preventDefault()

    //Editar os itens de inputItem
})

})

function Verificar_lista_vazia(){
    var itensLista = listaTarefas.querySelectorAll("li");
    var mensagemListaVazia =document.getElementById("mensagem-lista-vazia");

    if(itensLista.length === 0){
        mensagemListaVazia.style.display = "block";
    } else{
        mensagemListaVazia.style.display = "none";
    }
}

Verificar_lista_vazia();

    document.getElementById("btn-remover").addEventListener("click", (event) => {

        listaTarefas.removeChild(organizarDisposicao);
        Verificar_lista_vazia()
    
    })