//Botão de compartilhamento
function compartilhar() {
  var texto = encodeURIComponent("Texto para compartilhar");
  var link = "https://api.whatsapp.com/send?text=" + texto;
  window.open(link, '_blank');
}

//Botão cadastro de usuário
function cadastrarUsuario() {
  //var tipocadastro = document.getElementById()
  var nomecompleto = document.getElementById('nome-completo').value;
  var cpf = document.getElementById('cpf').value;
  var datanascimento = document.getElementById('data-nascimento').value;
  var razaosocial = document.getElementById('razao-social').value;
  var cnpj = document.getElementById('cnpj').value;
  var nomeresponsavel = document.getElementById('nome-responsavel').value;
  var telefone = document.getElementById('telefone').value;
  var cep = document.getElementById('cep').value;
  var endereco = document.getElementById('endereco').value;
  var cidade = document.getElementById('cidade').value;
  var estado = document.getElementById('estado').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  
  if (!nomecompleto || !cpf || datanascimento ||) {
    var snackbarContainer = document.querySelector('#snackbar');
    var data = {
      message: 'Por favor, preencha todos os campos!',
      timeout: 5000
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  } else {
    document.getElementById('form-cadastro-usuario').submit();
  }
}
