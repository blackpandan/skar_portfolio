<template>
    <div class="controller">
        <NavBar :show="true" :x="false"></NavBar>
        <main class="main">
            <NuxtLink :to='"client_arts/"+"portrait"' class="card" v-for="index in 6" :key="index">
                <p class="card__text">PORTRAITS</p>
            </NuxtLink>
        </main>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .main{
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-content: space-evenly;
        justify-content: center;
        place-items: center;
        min-height: 100%;
        width: 100%;
        padding: 2vmin 1vmin 2vmin 0vmin;
        // z-index: -1;
        
    }

     .main::before{
        content: "";
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        min-height: 100vh;
        width: 100%;
        position: absolute;
        background-image: url("/pics/clients_work/concept_art/dead_us_i.webp");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        /* Resolve Opacity Issues*/ 
        opacity: 0.2;
        z-index: 1;
    }

    .card{

        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 18em;
        width: 14em;
        text-align: center;
        justify-content: flex-end;
        padding: 0 0 4em 0;
        margin: 0 0 0 0;
        background-image: url("/pics/clients_work/portrait/flower_girl.webp");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        z-index: 2;
        
            // border: 0.2em solid rgb(255, 255, 255);
            box-shadow: 2px 2px 5px 0px rgb(192, 192, 192);
            margin: 1em 0 0 5vmin;

        &__text{
            font-family: "Fahkwang";
            color: rgb(255, 255, 255, 1);
            z-index: 2;
            text-align: center;
        }
    }
</style>