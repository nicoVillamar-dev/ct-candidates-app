import{A as n}from"./Api-52983ec0.js";const o=new n,r=t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("userData",JSON.stringify(t.data.user)),localStorage.setItem("pageReloaded",!1)},i=async(t,e)=>{try{const a=await o.http.post("login",{email:t,password:e});r(a)}catch{}},l=async(t,e,a)=>{try{const s=await o.http.post("register",{name:t,email:e,password:a});r(s)}catch{}};export{i as l,l as r};