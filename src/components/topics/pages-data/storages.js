export const localeStorage = `// Сохранение данных в LocalStorage  
localStorage.setItem('username', 'JohnDoe');  

// Получение данных из LocalStorage  
const username = localStorage.getItem('username');  
console.log(username); // Вывод: JohnDoe  

// Удаление конкретного элемента из LocalStorage  
localStorage.removeItem('username');  

// Очистка всего LocalStorage  
localStorage.clear();  

// Проверка наличия данных  
if (localStorage.getItem('username')) {  
    console.log('Имя пользователя найдено в LocalStorage');  
} else {  
    console.log('Имя пользователя не найдено');  
}  `;

export const sessionStorage = `// Сохранение данных в SessionStorage  
sessionStorage.setItem('sessionId', 'abc123');  

// Получение данных из SessionStorage  
const sessionId = sessionStorage.getItem('sessionId');  
console.log(sessionId); // Вывод: abc123  

// Удаление конкретного элемента из SessionStorage  
sessionStorage.removeItem('sessionId');  

// Очистка всего SessionStorage  
sessionStorage.clear();  

// Проверка наличия данных  
if (sessionStorage.getItem('sessionId')) {  
    console.log('Session ID найден в SessionStorage');  
} else {  
    console.log('Session ID не найден');  
}`;

export const cookiesPrompts = [
  {
    id: 1,
    text: "Сохранение состояния: Cookies позволяют хранить небольшие объемы данных, такие как пользовательские настройки, предпочтения, идентификаторы сессий и другие данные, которые нужно сохранить между различными запросами или сеансами пользователей.",
  },
  {
    id: 2,
    text: "Аутентификация и авторизация: Cookies могут использоваться для хранения токенов аутентификации, позволяя пользователю оставаться аутентифицированным в приложении даже после перезапуска браузера.",
  },
  {
    id: 3,
    text: "Персонализация и отслеживание: Cookies могут использоваться для анализа поведения пользователя на сайте и предоставления персонализированного опыта. Например, рекомендации товаров, основанные на предыдущих покупках.",
  },
];

export const diffsPrompts = [
  {
    id: 1,
    text: "Емкость данных: Cookies могут содержать до 4KB данных, в то время как Local Storage позволяет хранить около 5MB данных.",
  },
  {
    id: 2,
    text: "Срок хранения: Cookies имеют срок хранения, который можно указать, в то время как данные в Local Storage хранятся неограниченное время, пока их явно не удалить.",
  },
  {
    id: 3,
    text: "!!!Передача данных!!!: Cookies автоматически включаются в заголовки каждого HTTP-запроса к определенному домену, что делает их более подходящими для некоторых сценариев, таких как авторизация. Local Storage данные не автоматически передаются с каждым запросом.",
  },
];
