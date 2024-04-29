<script>
export default {
    
}
</script>

<template>
    <header class="header">
        <div id="CompLogo">
                <router-link ><img src='./icons/CompLogo.png' alt="CompanyLogo"></router-link>
        </div>
        <div id="navbar">
            <nav id="nav-menu">
                <a href='./components/Dashboard.vue' id="Nav1" class="navIcons">Dashboard</a>
                <a href="./AboutUs" id="Nav2" class="navIcons">About Us</a>
                <a href="./Projects" id="Nav3" class="navIcons">Projects</a>
                <a href="./Services" id="Nav4" class="navIcons">Services</a>
                <a href="./RequestMeeting" id="Nav4" class="navIcons">Request Meeting</a>
            </nav>
        </div>
    </header>
    <body>
        <h1>THIS IS AN ADMIN DASHBOARD</h1>
    </body>
</template>

<style scoped>
.header{
    
}

#CompLogo{
    display: inline-block;
    margin: auto;
    text-align: left;
    width: 10px;
}
#nav-menu{
    display: flex;
    margin: auto;
    text-align: right;
    font-size: larger;
    gap:15px;
}

.navIcons {
    text-decoration: none;
}

</style>