<template>
    <div class="controller">
        <NavBar></NavBar>
        <main class="main">
            <div class="card">
                <p class="card__text">PORTRAITS</p>
            </div>
            <div class="card">
                <p class="card__text">PORTRAITS</p>
            </div>
            <div class="card">
                <p class="card__text">PORTRAITS</p>
            </div>
            <div class="card">
                <p class="card__text">PORTRAITS</p>
            </div>
       
         
        </main>
    
    </div>
</template>

<style lang="scss" scoped>
    .main{
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-content: center;
        justify-content: space-between;
        place-items: center;
        min-height: 100%;
        width: 100%;
        padding: 0 8vmin 0 8vmin;
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

        display: flex;
        flex-direction: column;
        height: 18em;
        width: 14em;
        background-color: blue;
        text-align: center;
        justify-content: flex-end;
        padding: 0 0 4em 0;
        margin: 0 0 0 0;
        background-image: url("/pics/clients_work/portrait/flower_girl.webp");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        z-index: 2;
        
        &:not(:nth-child(1)){
            border: 5px solid white;
            margin: 0 0 0 1em;
        }

        &__text{
            font-family: "Fahkwang";
            color: rgb(255, 255, 255, 1);
            z-index: 2;
            text-align: center;
        }
    }
</style>