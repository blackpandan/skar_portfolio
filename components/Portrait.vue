<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/portrait/"
        }
    },
    computed: {
        preview(){
            return[
                {
                    url: "flower_girl.webp",
                    altName: "flower_girl"
                }
            ]
        }
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="(item, index) in preview" :key="index" :style="{backgroundImage: 'url('+url+item.url+')'}">
    </div>
</div>
</template>

<style lang="scss" scoped>
    .previewCard{
        width: 40vmin;
        height: 50vmin;
        // background-color: green;
        margin: 4em 0 0 0;
        box-shadow: 0 70px 63px -60px #000000;
        border-radius: 2vmin;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    .display__controller{
        display: flex;
        justify-content: space-between;
        align-items: space-between;
        flex-direction: row;
        flex-flow: wrap;
    }
</style>