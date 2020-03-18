import React from 'react';
const axios = require('axios');

export function logoutService(uid){
    console.log('logoutService');
    window.sessionStorage.removeItem('userId');
}

export function loginService(user){
    const params = new URLSearchParams();
    params.append('email',user.email);
    params.append('password',user.password);
    axios({
        method: 'POST',
        url: 'http://localhost:5000/login',
        data: params,
        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function (response) {
        let uid = response.data.userId;
        window.sessionStorage.setItem('userId',uid);
        alert(response.data.msg);
    })
    .catch(function (error) {
        alert(error.response.data.errorMsg);
    });
}

export function registerService(user){
    const params = new URLSearchParams();
    params.append('email',user.email);
    params.append('username',user.username);    
    params.append('password',user.password);

    axios({
        method: 'POST',
        url: 'http://localhost:5000/register',
        data: params,
        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function (response) {
        let uid = response.data.userId;
        window.sessionStorage.setItem('userId',uid);
        alert(response.data.msg);
    })
    .catch(function (error) {
        alert(error.response.data.errorMsg);
    });
}