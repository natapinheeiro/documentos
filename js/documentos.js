function search(){
    var cpf = document.getElementById('inputCPF').value;
    console.log(cpf);
    validation(cpf);
}
    function validation(cpfvalue){
    var storage = firebase.storage();
    // Retorna uma promisses que será processada
    storage.ref().child(cpfvalue).listAll().then(function(todosArquivos){
        if(todosArquivos.items.length >= 1){
            listFiles(cpfvalue);
            next(cpfvalue);
        } else {
            alert('CPF não Encontrado')
        }
    }).catch(function(error){
        console.log('ERRO', error);
    });
}
function listFiles(cpfvalue){
    document.getElementById('tituloDocumentos').innerHTML = 'Certificados de:' +cpfvalue;
    var storage = firebase.storage();
    var arquivos;
    var nomeArquivos = [];
    var linksArquivos = [];
    storage.ref().child(cpfvalue).listAll().then(function(todosArquivos){
        arquivos = todosArquivos.items;
        console.log(arquivos);
        for(let i=0; i<arquivos.length; i++){
            nomeArquivos.push(arquivos[i].name);
            storage.ref(cpfvalue+'/'+nomeArquivos[i]).getDownloadURL().then(function(url) {
                console.log(url);
                var ul = document.getElementById("list");
                var li = document.createElement("li");
                var listItem = '<a href="'+url+'"target="_blank">'+nomeArquivos[i]+'</a>';
                li.innerHTML = listItem;
                ul.appendChild(li);
                linksArquivos.push(url);
            }).catch(function(error){
                console.log(error);
                          
            });
        }
    });
}
function next(cpfvalue){
    document.getElementById('busca').setAttribute("class", "ocultar");
    document.getElementById('resultado').removeAttribute("class","ocultar");
    document.getElementById('tituloDocumentos').innerHTML = 'Certificados de:' +cpfvalue;

}
function back(){
    document.getElementById('busca').removeAttribute("class","ocultar");
    document.getElementById('resultado').setAttribute("class", "ocultar");
    document.getElementById('inputCPF').value = '';
}
