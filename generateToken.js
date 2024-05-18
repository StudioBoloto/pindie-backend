const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Константы
const password = 'lovehtml';
const secretKey = 'some-secret-key';

// Функция для генерации хэшированного пароля и токена
async function generateToken() {
    try {
        // Хэшируем пароль
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Генерируем токен
        const token = jwt.sign({ password: hashedPassword }, secretKey, { expiresIn: '1h' });

        console.log('Hashed Password:', hashedPassword);
        console.log('Generated Token:', token);

        // Вернем хэшированный пароль и токен
        return { hashedPassword, token };
    } catch (error) {
        console.error('Error generating token:', error);
    }
}

// Вызов функции
generateToken();
