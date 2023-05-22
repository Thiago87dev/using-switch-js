let selecao = document.querySelector('select')
let parag = document.querySelector('p')

selecao.addEventListener('change', definirTempo)

function definirTempo (){
   let escolha = selecao.value 

   switch(escolha){
    case 'ensolarado':
        parag.textContent = 'Está bom e ensolarado lá fora hoje. Use shorts! Vá à praia ou ao parque e tome um sorvete.';
        break;
    case 'chuvoso':
        parag.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda chuva, e não fique fora por muito tempo';
        break;
    case 'nevando':
        parag.textContent = 'A neve está caindo - está congelando! Melhor ficar em casa com uma xícara de chocolate quente ou ir construir um boneco de neve.';
        break;
    case 'nublado':
        parag.textContent = 'Não está chovendo, mas o céu está cinza e sombrio; pode virar a qualquer minuto, então leve uma capa de chuva para garantir.';
        break;
    default:
        parag.textContent = ''
   }
}