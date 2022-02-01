// export const serverLogIn = async (email, password) => {
//     return fetch(
//       `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
//     ).then(res => res.json()).then(data => data.success);
//   };
  
  export const serverLogIn = async (email, password) => {
    const url = '//loft-taxi.glitch.me/auth';
    const data = { email, password };
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => { console.log(data.success);
                                              return data.success});
  };

  export const serverRegister = async (email, password, name, surname) => {
    const url = '//loft-taxi.glitch.me/register';
    const data = { email, password, name, surname };
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => { return data.success ? data.success :
                                              console.log(data.error);
                                            });
  };

  export const serverCard = async (cardNumber, expirDate, ownersName, cvcCode) => {
    const url = '//loft-taxi.glitch.me/card';
    const data = { cardNumber: cardNumber, expiryDate: expirDate, cardName: ownersName, 
                   cvc: cvcCode, token: "AUTH_TOKEN" };
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => { return data.success ? data.success :
                                              console.log(data.error);
                                            });
  };

  export const getAddresses = async () => {
    const url = '//loft-taxi.glitch.me/addressList';
    return fetch(url).then(res => res.json()).then(data => { return data.addresses ? data.addresses :
                                              [];
                                            });
  };

  export const getServerRoute = async (address1, address2) => {
    const url = `//loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`;
    return fetch(url).then(res => res.json()).then(data => { console.log(data); return data ? data :
                                              [];
                                            });
  };