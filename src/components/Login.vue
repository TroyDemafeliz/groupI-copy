<template>
    <div class="login">
        <div id="" class="form-background">
            <div id="form">
            <div>
                <div id="SignIn">Sign In </div>
                <div id="login-text">LOGIN</div>
                <div id="email-text">Email Address</div>
                <div id="password-text">Password</div>
                <div id="line1"></div>
                <div id="line2"></div>
            </div>
            <div></div>
            </div>
        </div>
    </div>
</template>

<style>
#login {
    width: 100%;
    height: 100%;
    position: relative;
    background: #03032b;

}

#SignIn {
    color: white;
    font-size: 30px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 45px;
    word-wrap: break-word
}

.form-background {

}

#login-text{
    left: 300px;
    top: 28px;
    position: absolute;
    color: white;
    font-size: 35px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 53px;
    word-wrap: break-word;
}
#email-text{
    left: 50px;
    top: 144px;
    position: absolute;
    color: white;
    font-size: 25px;
    font-family: Roboto;
    font-weight: 500;
    line-height: 38px;
    word-wrap: break-word;
}
#password-text{
    left: 50px;
    top: 312px;
    position: absolute;
    color: white;
    font-size: 25px;
    font-family: Roboto;
    font-weight: 500;
    line-height: 38px;
    word-wrap: break-word;
}

#line1 {
    width: 600px;
    height: 60px;
    left: 50px;
    top: 185px;
    position: absolute;
    border-bottom: 2px black solid;
}
#line2 {
    width: 600px;
    height: 60px;
    left: 50px;
    top: 351px;
    position: absolute;
    border-bottom: 2px black solid;
}
</style>
