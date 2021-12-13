import { API_URL, TOKEN_NAME } from "./global";
import { useContext } from "react";

export const cutToLength = (str, len) => {
    if(str.length > len){
        return str.substring(0, len) + '...';
    }
    return str;
}

export const loginUser = async (username, pass) => {
    if(username.length > 0 && pass.length > 0){
        const res = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({user_name: username, password: pass})
          });
        const data = await res.json();
        return data;
    }
    return {message: 'Username or password is empty'};
}

export const isValidToken = async (token) => {
    if(token){
        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            'body' : JSON.stringify({ token }),
        });

        if(response.status == 200){
            return true;
        }
    }
    return false;
}

export const removeToken = () => {
    window.localStorage.removeItem(TOKEN_NAME);
}