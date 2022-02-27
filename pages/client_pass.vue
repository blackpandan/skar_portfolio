<template>
<transition name="fade">
    <div class="controller">
        
        <NavBar :show="true" :x="false"></NavBar>
        <main class="main">
            <NuxtLink to="client_arts" class="card" v-for="index in 5" :key="index">
                <p class="card__text">PORTRAITS</p>
            </NuxtLink>
        </main>
    </div>
</transition>
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
        margin: 0 0 auto 40vmin;
        padding: 5vmin 5vmin 2vmin 5vmin;
        z-index: 1;
        
    }



     .main::before{
        content: "";
        top: 0px;
        bottom: 0px;
        left: 40vmin;
        right: 0px;
        min-height: 100vh;
        position: fixed;
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
        border-radius: 0px;
        transition: box-shadow 0.2s, border-radius 0.2;
        
            // border: 0.2em solid rgb(255, 255, 255);
            
            box-shadow: 1.5px 1.5px 2px 0px darken($color: $chill, $amount: 50);
            margin: 1em 0 0 5vmin;

        &__text{
            font-family: "Fahkwang";
            color: rgb(255, 255, 255, 1);
            z-index: 2;
            text-align: center;
        }

        &:hover{
            border-radius: 0.5em;
            box-shadow: 2px 2px 2px 1px $primary;
        }
    }
</style>