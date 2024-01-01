"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[696],{91695:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});o(57327),o(41539),o(57658);var n=o(66252),r=o(2262),s=o(49963),i=o(24239),l=o(51499),a=o(22201),c=o(56296),u=o(6154),d=(0,n._)("div",{class:"toast-body toast-danger justify-content-between",style:{"text-align":"center"}}," Usuário ou Senha Incorretos! ",-1),f=[d],v={class:"form-container outer"},p={class:"form-form"},h={class:"form-form-wrap"},w={class:"form-container"},g={class:"form-content"},m=(0,n._)("h1",{class:""},"Login",-1),_=(0,n._)("p",{class:""},"Entre com seu email e senha",-1),k={class:"text-start"},x={class:"form"},y={id:"username-field",class:"field-wrapper input"},b=(0,n._)("label",{for:"username"},"EMAIL",-1),L=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-user"},[(0,n._)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,n._)("circle",{cx:"12",cy:"7",r:"4"})],-1),U={id:"password-field",class:"field-wrapper input mb-2"},A={class:"d-flex justify-content-between"},S=(0,n._)("label",{for:"password"},"SENHA",-1),C=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-lock"},[(0,n._)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),(0,n._)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1),j=["type"],E=(0,n._)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),H=(0,n._)("circle",{cx:"12",cy:"12",r:"3"},null,-1),M=[E,H],I={class:"form",style:{"justify-content":"space-between"}},D={class:"field-wrapper"},q={class:"col s12 m6 offset-m3 center-align"};const B={__name:"login",setup:function(e){(0,c.j)({title:"Login"});var t=(0,l.D)(),o=(0,l.L)();(0,n.bv)((function(){i.Z.commit("setLayout","auth")}));var d=(0,a.tv)(),E=(0,r.iH)("password"),H=function(){"password"===E.value?E.value="text":E.value="password"},B=function(){u.Z.get(t.baseApiHTTPS+"/usuarios").then((function(e){var n,r;t.respostaAxios=e.data,o.dadosUsuario=null===(n=t.respostaAxios)||void 0===n?void 0:n.filter((function(e){return e.EMAIL==o.email})),(null===(r=t.respostaAxios)||void 0===r?void 0:r.filter((function(e){return e.EMAIL==o.email})).length)>0?(o.loginAtivo="YES",d.push("/")):(t.alertLogin=!0,o.loginAtivo="NO")}))["catch"]((function(e){t.alertLogin=!0,o.loginAtivo="NO",console.log(e)}))},N=function(e){console.log("Handle the response",e)};return function(e,i){var l=(0,n.up)("router-link"),a=(0,n.up)("GoogleLogin");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.kq)("",!0),(0,r.SU)(t).alertLogin?((0,n.wg)(),(0,n.iD)("div",{key:1,onClick:i[0]||(i[0]=function(e){return(0,r.SU)(t).alertLogin=!1}),style:{"z-index":"1080"},role:"alert","aria-live":"assertive","aria-atomic":"true"},f)):(0,n.kq)("",!0),(0,n._)("div",{class:"form auth-boxed",onClick:i[4]||(i[4]=function(e){return(0,r.SU)(t).alertLogin=!1})},[(0,n._)("div",v,[(0,n._)("div",p,[(0,n._)("div",h,[(0,n._)("div",w,[(0,n._)("div",g,[m,_,(0,n._)("form",k,[(0,n._)("div",x,[(0,n._)("div",y,[b,L,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",placeholder:"email","onUpdate:modelValue":i[1]||(i[1]=function(e){return(0,r.SU)(o).email=e})},null,512),[[s.nr,(0,r.SU)(o).email]])]),(0,n._)("div",U,[(0,n._)("div",A,[S,(0,n.Wm)(l,{to:"",class:"forgot-pass-link"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Esqueceu a senha?")]})),_:1})]),C,(0,n.wy)((0,n._)("input",{type:E.value,class:"form-control",placeholder:"Password","onUpdate:modelValue":i[2]||(i[2]=function(e){return(0,r.SU)(o).senha=e})},null,8,j),[[s.YZ,(0,r.SU)(o).senha]]),((0,n.wg)(),(0,n.iD)("svg",{onClick:H,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",id:"toggle-password",class:"feather feather-eye"},M))])])]),(0,n._)("div",I,[(0,n._)("div",D,[(0,n._)("div",{onClick:i[3]||(i[3]=function(e){return B()}),class:"btn btn-primary mb-4 form-control active w-300"},"Log In")])]),(0,n._)("div",q,[(0,n.Wm)(a,{callback:N})])])])])])])])],64)}}},N=B,V=N}}]);
//# sourceMappingURL=auth-login.18b9d5e2.js.map