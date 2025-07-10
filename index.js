var listaTarefas = document.getElementById("lista-tarefas");
var btnAdc = document.getElementById("btn-salvarItem");
var inputItem = document.getElementById("input-item");

btnAdc.addEventListener("click", (evento) => {
    evento.preventDefault();

    if(inputItem.value === ""){
        alert("Insira uma tarefa para continuar.");
        return
    }

    var lista = document.createElement("li");
    var itemLista = document.createElement("div");
    itemLista.classList.add = ("item-lista");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var textItem = document.createElement("p");

    inputItem.value = inputItem.value.charAt(0).toUpperCase()+inputItem.value.slice(1);

    textItem.innerText = inputItem.value;

    listaTarefas.appendChild(lista);
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
    dataHoraLocal.classList.add = ("datas");
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