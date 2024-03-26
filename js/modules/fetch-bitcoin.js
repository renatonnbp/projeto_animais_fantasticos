export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / json.BRL.buy).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
