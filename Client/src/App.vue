<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/Music">Music</router-link>
            |
            <router-link to="/Resume">Resume</router-link>
        </div>
        <h1>Aiden Rourke</h1>
        <i>Ottawa, Canada</i>
        <ul class="links">
            <li class="link">
                <SvgLink link="https://github.com/AidenRourke"
                         svgLink="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"/>
            </li>
            <li class="link">
                <SvgLink link="https://www.linkedin.com/in/aidenrourke/"
                         svgLink="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"/>
            </li>
            <li class="link">
                <SvgLink link="https://www.instagram.com/aiden_rourke/"
                         svgLink="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"/>
            </li>
            <li class="link">
                <SvgLink link="https://www.facebook.com/aiden.rourke"
                         svgLink="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"/>
            </li>
        </ul>
        <p>To get in touch, write to aidenrourke@gmail.com</p>
        <router-view/>
    </div>
</template>

<script>
    import SvgLink from "./components/SvgLink"

    export default {
        name: "App",
        components: {SvgLink}
    }
</script>

<style lang="scss">
    .home {
        margin: auto;
        text-align: left;
    }

    .link {
        display: inline-block;
        margin: 0 10px;
    }

    .links {
        padding: 0;
    }

    html {
        padding-top: 40px;
        height: 100%;
        display: table;
        margin: auto;
        position: relative;
        width: 100%;
    }

    h1 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    body {
        background-color: #f6e8e5;
        box-sizing: border-box;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: table-cell;
        vertical-align: middle;
        height: 100%;
    }

    *:focus {
        outline: none;
    }

    #nav {
        position: absolute;
        top: 5px;
        left: 0;
        right: 0;
    }
</style>
