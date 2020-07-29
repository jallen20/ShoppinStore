import { SHOPPIN_URL } from './../util/constants.js';

export const Login = async (email, password) => {
    
    let settings = {
        method: "POST",
        body: JSON.stringify({
            Email: email,
            Password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }

    let req = await fetch(`${SHOPPIN_URL}/api/Account/Login`, settings);
    if (req.status === 500 || req.status === 404 || req.status == 401) return;
    let res = await req.json();

    return !!res ? res : null;
}

export const CheckLogin = async email => {
    
    let req = await fetch(`${SHOPPIN_URL}/api/Sessions/LoggedIn/${email}`);
    if (req.status === 500 || req.status === 404 || req.status == 401) return;
    let res = await req.json();

    return !!res;
}