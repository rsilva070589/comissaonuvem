<template> 
 
<div v-if="1==2"> 
{{ storeLogin.dadosUsuario}} 
<br><br>
</div>

    <div v-if="store.alertLogin" @click="store.alertLogin=false"
      style="z-index: 1080" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body toast-danger   justify-content-between"
      style="text-align: center;"> 
         Usuário ou Senha Incorretos!  
      </div>
  </div>  
          <div class="form auth-boxed" @click="store.alertLogin=false">
              <div class="form-container outer">
                  <div class="form-form">
                      <div class="form-form-wrap">
                          <div class="form-container">
                              <div class="form-content">
                                  <h1 class="">Login</h1>
                                  <p class="">Entre com seu email e senha</p>
      
                                  <form class="text-start">
                                     
                                      <div class="form">
                                          <div id="username-field" class="field-wrapper input">
                                              <label for="username">EMAIL</label>
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  class="feather feather-user"
                                              >
                                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                  <circle cx="12" cy="7" r="4"></circle>
                                              </svg>
                                              <input type="text" 
                                                      class="form-control" 
                                                      placeholder="email" 
                                                      v-model="storeLogin.email" />
                                          </div>
      
                                          <div id="password-field" class="field-wrapper input mb-2">
                                              <div class="d-flex justify-content-between">
                                                  <label for="password">SENHA</label>
                                                  <router-link to="" class="forgot-pass-link">Esqueceu a senha?</router-link>
                                              </div>
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  class="feather feather-lock"
                                              >
                                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                              </svg>
                                              <input :type="pwd_type" 
                                                      class="form-control" 
                                                      placeholder="Password"
                                                      v-model="storeLogin.senha" />
                                              <svg
                                                  @click="set_pwd_type"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  id="toggle-password"
                                                  class="feather feather-eye"
                                              >
                                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                  <circle cx="12" cy="12" r="3"></circle>
                                              </svg>
                                          </div>
                                      </div> 
                                  </form> 
                             
                                      <div class="form " style="justify-content: space-between;">
                                              <div class="field-wrapper ">
                                                  <div @click="getLogin()"  class="btn btn-primary mb-4 form-control active w-300">Log In</div>
                                                  
                                              </div> 
                                          </div>
      
                                          <div class="col s12 m6 offset-m3 center-align">
                                            <GoogleLogin :callback="callback"/>
                                            </div>


                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </template>
      
      <script setup>
          import { ref, onMounted } from 'vue';
          import storeLayout from '../../store/index.js';
          import '@/assets/sass/authentication/auth-boxed.scss';
          import { indexStore, useUserStore } from '../../store/IndexStore' 
          import { useRouter } from "vue-router"; 
          import { useMeta } from '@/composables/use-meta';
          import axios from 'axios';  
          
    //    const CLIENT_ID = '1000617745298-n32pjuckestbppp6frau86ejganqisp9.apps.googleusercontent.com'
 
 


 
          useMeta({ title: 'Login' });
          const store = indexStore();  
          const storeLogin = useUserStore();    

         
          onMounted(() => {
            storeLayout.commit('setLayout', 'auth');
            });
       
            const router = useRouter()
          const pwd_type = ref('password');
      
          const set_pwd_type = () => {
              if (pwd_type.value === 'password') {
                  pwd_type.value = 'text';
              } else {
                  pwd_type.value = 'password';
              }
          };
      
          const getLogin = ()=> {  
      
            if (1){
                axios.get(store.baseApiHTTPS+'/usuarios')
                  .then((response) => {
                  
                  
                
                  store.respostaAxios = response.data 
                  //storeLogin.empresas.dadosempresa.push({ "identificacaointegracao": "CENTRAL" },)
                  storeLogin.dadosUsuario = store.respostaAxios?.filter(f => f.EMAIL == storeLogin.email)
                  if (store.respostaAxios?.filter(f => f.EMAIL == storeLogin.email).length > 0){
                    storeLogin.loginAtivo = 'YES'
                    router.push('/') 
                  }else{
                    store.alertLogin=true
                    storeLogin.loginAtivo = 'NO'
                  }
                  
                  })
                  .catch((error) => {
                      store.alertLogin=true
                      storeLogin.loginAtivo = 'NO'
                  console.log(error);
                  }); 
            }
                  
          }

          const callback = (response) => {
            console.log("Handle the response", response)
        }
      </script>
  