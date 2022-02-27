<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/illustration/"
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
    
</style>