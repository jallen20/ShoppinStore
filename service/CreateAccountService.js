import { SHOPPIN_URL } from './../util/constants.js';

export const CreateAccount = async userInfo => {
    let settings = {
        method: "POST",
        body:JSON.stringify(userInfo),
        headers:{ "Content-Type": "application/json"}
    };

    let req = await fetch(`${SHOPPIN_URL}/api/Account/Create`, settings);
    let res = await req.json();
    return res;
}
