<template>
   <div :class="$style.desktop7">
        <div :class="$style.loginGroup">
             <div :class="$style.loginGroupChild" />
             <div :class="$style.signinFrame">
                  <b :class="$style.signIn">SIGN IN</b>
                  <div :class="$style.signinbox" />
             </div>
             <b :class="$style.login">LOGIN</b>
             <div :class="$style.emailAddress">Email Address</div>
             <div :class="$style.password">Password</div>
             <div :class="$style.emailfill" />
             <div :class="$style.passfill" />
             <img :class="$style.showpassIcon" alt="" src="./icons/ShowPass.png" />
        </div>
        <div :class="$style.forgotPassword">Forgot Password?</div>
             <div :class="$style.desktop7Child" />
             <img :class="$style.n1RemovebgPreview1Icon" alt="" src="./icons/CompLogoBGREMOVE.png" />
             </div>
             </template>
             <script lang="ts">
                  import { defineComponent } from 'vue'
                  
                  
                  export default defineComponent({
                       name: "Desktop"})</script><style module>.loginGroupChild {
                       position: absolute;
                       top: calc(50% - 350px);
                       left: calc(50% - 350px);
                       backdrop-filter: blur(25px);
                       border-radius: 25px;
                       background-color: rgba(223, 224, 242, 0.2);
                       width: 700px;
                       height: 700px;
                  }
                       .signIn {
                            position: absolute;
                            top: 7px;
                            left: calc(50% - 53px);
                            line-height: 150%;
                       }
                       .signinbox {
                            position: absolute;
                            top: -3px;
                            left: -3px;
                            border: 3px solid #fff;
                            box-sizing: border-box;
                            width: 146px;
                            height: 66px;
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
                            top: 634px;
                            left: 421px;
                            font-size: 16px;
                            line-height: 150%;
                       }
                       .desktop7Child {
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            background-color: rgba(223, 224, 242, 0.7);
                            border-bottom: 5px solid #000;
                            box-sizing: border-box;
                            width: 1440px;
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
                       .desktop7 {
                            width: 100%;
                            position: relative;
                            background-color: #03032b;
                            height: 1024px;
                            overflow: hidden;
                            text-align: left;
                            font-size: 25px;
                            color: #fff;
                            font-family: Roboto;
                       }
                  
                  </style>