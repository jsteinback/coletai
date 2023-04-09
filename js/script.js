//Botão de compartilhamento
function compartilhar() {
  var texto = encodeURIComponent("Texto para compartilhar");
  var link = "https://api.whatsapp.com/send?text=" + texto;
  window.open(link, '_blank');
}