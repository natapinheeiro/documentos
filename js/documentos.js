function search(){
    var cpf = document.getElementById('inputCPF').value;
    console.log(cpf);
    validation(cpf);
}
function validation(cpfvalue){
    document.getElementById('busca').setAttribute("class", "ocultar");
    document.getElementById('resultado').removeAttribute("class","ocultar");
    document.getElementById('tituloDocumentos').innerHTML = 'Certificados de:' +cpfvalue;

}
function back(){
    document.getElementById('busca').setAttribute("class", "ocultar");
    document.getElementById('resultado').removeAttribute("class","ocultar");
    document.getElementById('inputCPF').value = '';
}
