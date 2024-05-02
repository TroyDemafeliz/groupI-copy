<template>
   <div :class="$style.loginform">
        <div :class="$style.loginGroup">
             <div :class="$style.loginGroupChild" />
             <div :class="$style.signinFrame">
                    <button type="button" v-on:click="handleSubmit" :class="$style.signIn" >SIGN IN</button>
                    <div :class="$style.signinbox" />
             </div>
             <b :class="$style.login">LOGIN</b>
             <div :class="$style.emailAddress">Email Address</div>
             <div :class="$style.password">Password</div>
             <div :class="$style.emailfill">
               <input :class="$style.emailInput" 
               v-model="username"
               type="text"
               placeholder="Username"
               maxlength="30"
               @keyup.enter="handleSubmit"
               />
               </div>
             <div :class="$style.passfill">
               <input :class="$style.passInput" 
               v-model="password"
               type="password"
               placeholder="Password"
               @keyup.enter="handleSubmit"
               /></div>
             <img :class="$style.showpassIcon" alt="" src="./icons/ShowPass.png" />
        </div>
        
             <div :class="$style.loginformChild" />
             <img :class="$style.n1RemovebgPreview1Icon" alt="" src="./icons/CompLogoBGREMOVE.png" />
             </div>
             </template>
             <script lang="ts">
                  import { defineComponent } from 'vue'
                  import api from '@/api';
                  import router from '@/router';
                  import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/token';
                     
                  
                  export default defineComponent({
                       name: "AdminLogin",
                       data(){
                         return{
                              username: "",
                              password: "",
                         };
                       },
                       methods:{
                         async handleSubmit() {
                         try {
                              const res = await api.post("/backend/token/", { username: this.username, password:this.password })
                              localStorage.setItem(ACCESS_TOKEN, res.data.access);
                              localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                              router.push("/admin-bookings")

                         } catch (error) {
                         alert(error)
                         }
                         }
                       }
                      
     })
                    </script><style module>.loginGroupChild {
                       position: absolute;
                       top: calc(50% - 350px);
                       left: calc(50% - 350px);
                       backdrop-filter: blur(25px);
                       border-radius: 25px;
                       background-color: rgba(75, 75, 81, 0.2);
                       width: 700px;
                       height: 700px;
                  }
                    
                 
                    template {
                         margin: 0;
                         padding:0 ;
                    }
                      .signIn {
                            position: absolute;
                            top: -3px;
                            left: -3px;
                            border: 3px solid #fff;
                            color:#fff;
                            background-color: transparent;
                            box-sizing: border-box;
                            width: 146px;
                            height: 66px;
                       }

                       .signIn:hover, .signinFrame:hover {
                            background-color: #fff;
                            color: #000;
                       }
                       .signinFrame {
                            position: absolute;
                            top: 552px;
                            left: 280px;
                            width: 140px;
                            height: 50px;
                            font-size: 30px;
                       }
                       .login {
                            position: absolute;
                            top: 28px;
                            left: 299px;
                            font-size: 35px;
                            line-height: 150%;
                       }
                       .emailAddress {
                            position: absolute;
                            top: 144px;
                            left: 50px;
                            line-height: 150%;
                            font-weight: 500;
                       }
                       .password {
                            position: absolute;
                            top: 312px;
                            left: 50px;
                            line-height: 150%;
                            font-weight: 500;
                       }
                       .emailfill {
                            position: absolute;
                            top: 183px;
                            left: 50px;
                            border-bottom: 2px solid #000;
                            box-sizing: border-box;
                            width: 600px;
                            height: 60px;
                       }

                       .emailInput, .passInput {
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 100%;
                            height: 100%;
                            background-color: transparent;
                            border: none;
                            font-size: 25px;
                            color: #fff;
                            font-family: Roboto;
                            outline: none;
                       }
                       .passfill {
                            position: absolute;
                            top: 351px;
                            left: 43px;
                            border-bottom: 2px solid #000;
                            box-sizing: border-box;
                            width: 600px;
                            height: 60px;
                       }
                       .showpassIcon {
                            position: absolute;
                            height: 2.57%;
                            width: 3.57%;
                            top: 52.29%;
                            right: 9.86%;
                            bottom: 45.14%;
                            left: 86.57%;
                            max-width: 100%;
                            overflow: hidden;
                            max-height: 100%;
                       }
                       .loginGroup {
                            position: absolute;
                            top: calc(50% - 312px);
                            left: calc(50% - 349px);
                            width: 700px;
                            height: 700px;
                       }
                       .forgotPassword {
                            position: absolute;
                            top: 450px;
                            left: 50px;
                            font-size: 16px;
                            line-height: 150%;
                       }
                       .loginformChild {
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            background-color: rgba(223, 224, 242, 0.7);
                            border-bottom: 5px solid #000;
                            box-sizing: border-box;
                            width: 100vw;
                            height: 140px;
                       }
                       .n1RemovebgPreview1Icon {
                            position: absolute;
                            top: 15px;
                            left: calc(50% - 303px);
                            width: 608px;
                            height: 109.8px;
                            object-fit: cover;
                       }
                       .loginform {
                            width: 100%;
                            position: relative;
                            background-color: #03032b;
                            height: 100vh;
                            overflow: hidden;
                            text-align: left;
                            font-size: 25px;
                            color: #fff;
                            font-family: Roboto;
                            margin: 0;
                            padding: 0;
                       }
                         </style>

