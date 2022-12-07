var res = document.getElementById(`res`);
var background = document.querySelector("body#back");
var p = document.getElementsByClassName("p");

var h3 = document.getElementsByClassName("h3");
function Aboutus() {
  res.innerHTML = `<h2>Sobre nós!</h2> <p class="p">A GP8 Technologies foi fundada em 2022 com a proposta de oferecer soluções em digitalização de documentos, a ideia veio por conta da dificuldade que alunos passavam na hora de enviar seus documentos para suas respectivas universidades, usando fotos de má qualidade, assim perdendo horas para fazer uma simples autenticação. </p>`;
}
function tech() {
  res.innerHTML = `<h2>Tecnologias!</h2> <p class="p">A GP8 Technologies garante eficiência, qualidade e agilidade de processos através da mais alta tecnologia do mercado atual. Estamos sempre nos inovando para oferecer o melhor aos nossos clientes.</p>`;
}
function Service() {
  res.innerHTML = `<h2> Serviços!</h2> <p class="p">A GP8 Technologies oferece alta tecnologia e agilidade em digitalização de
  documentos, arquivos, plantas, fotografias, documentos históricos ou antigos.
  Trabalhando na preservação e estruturação de documentos, assim como o acesso
  autorizado e hierarquizado aos documentos digitais ou microfilmes.</p>`;
}
var emails = document.getElementById("email");

var select = document.getElementById("lista");
var opcaoValor = select.options[select.selectedIndex].text;

function enviarfaq() {
  console.log(opcaoValor);
  if (emails.value.length == 0) {
    window.alert(`Por Favor, digite o seu e-mail para continuar.`);
  } else {
    window.alert(
      `Sua mensagem foi enviada! Em torno de 24 horas voce receberá um email resposta no endereço de e-mail: ${emails.value}`
    );
    emails.value = "";
  }
}
