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
            next(cpfvalue);
        } else {
            alert('CPF não Encontrado')
        }
    }).catch(function(error){
        console.log('ERRO', error);
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
