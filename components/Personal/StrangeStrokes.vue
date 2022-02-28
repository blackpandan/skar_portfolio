<script>
export default {
    data(){
        return{
            url: "/pics/personal/strange_strokes/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 22" :key="index" :style="{backgroundImage: 'url('+url+index+'.webp'+')'}">
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>