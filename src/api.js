export const serverLogIn = async (email, password) => {
    return fetch(
      `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success);
  };
  

// const url = 'https://example.com/profile';
// const data = { username: 'example' };

// try {
//   const response = await fetch(url, {
//     method: 'POST', // или 'PUT'
//     body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const json = await response.json();
//   console.log('Успех:', JSON.stringify(json));
// } catch (error) {
//   console.error('Ошибка:', error);
// }