const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');  // Потрібно для коректної обробки статичних файлів

const app = express();
const port = 3001; // Порт сервера

// Для розбору JSON у запитах
app.use(bodyParser.json());

// Обробка статичних файлів (якщо є папка з фронтендом)
app.use(express.static(path.join(__dirname, 'build')));

// Маршрут для перевірки капчі
app.post('/verify-recaptcha', (req, res) => {
  const { recaptchaToken } = req.body; // Токен, який надіслав клієнт
  const secretKey = "6LetebAqAAAAABapo1U-F4ZR4gigF7IJOUYg27yA";  // Замінити на твій секретний ключ

  axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
    params: {
      secret: secretKey,
      response: recaptchaToken
    }
  })
  .then(response => {
    if (response.data.success) {
      res.send("Captcha passed");
    } else {
      res.status(400).send("Captcha failed");
    }
  })
  .catch(error => {
    res.status(500).send("Server error");
  });
});

// Маршрут для головної сторінки (React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
