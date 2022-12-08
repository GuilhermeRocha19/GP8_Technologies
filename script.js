var res = document.getElementById(`res`);
var background = document.querySelector("body#back");
var p = document.getElementsByClassName("p");

var h3 = document.getElementsByClassName("h3");
function Aboutus() {
  res.innerHTML = `<h2>Sobre nós!</h2> <p class="p">
  Para nos conhecer melhor, vamos traçar uma linha do tempo. Para que você conheça cada etapa da nossa história.<br><br>
  <strong>2019:</strong> Com uma migração de área, uma colaboradora percebeu que existiam dois mundos dentro de uma mesma empresa. Onde deparou-se com a necessidade de sair imediatamente do universo manual e ingressar no digital para não ficar obsoleta.<br>
  <strong>2020:</strong> Coincidentemente nesse período veio a pandemia e acelerou este processo. Foi aí que ela convidou um grupo de 7 amigos, cada um especialista em algo relacionado a Gestão e TI, para ajudá-la a otimizar esses processos para a empresa em que trabalhava.<br>
  <strong>2021:</strong> O “trabalho em equipe” deu tão certo que começaram a ajudar outras empresas a fazerem o mesmo. <br>
  <strong>2022:</strong> O grupo de amigos já não estava dando conta de conciliar o trabalho particular de cada um com a demanda de serviços. Decidiram dedicar-se oficialmente ao seu novo negócio. Foi aí que surgiu a GP8 Technologies. Um grupo com a proposta de ser especialista em oferecer soluções em digitalizações de documentos para pessoas físicas e empresas. </p>`;
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
function mision() {
  res.innerHTML =
    '<h2> Missão, Visão e Valores!</h2> <p class="p"><strong>Missão:</strong> Ser a melhor empresa de transformação digital e gerenciamento seguro da informação do Brasil<br> <strong>Visão:</strong> Nossa visão é ter um propósito de aperfeiçoar e facilitar o negócio dos nossos clientes que seja um dado totalmente seguro e que seja referência em organização e inovação. <br> <strong>Valores:</strong> Empenho para contribuir com o melhor para o desenvolvimento dos nossos clientes. <br>Paixão por tecnologia. <br>Responsabilidade social. </p>';
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
