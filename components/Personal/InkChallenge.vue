<script>
export default {
    data(){
        return{
            url: "/pics/personal/ink_challenge/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 20" :key="index" :style="{backgroundImage: 'url('+url+index+'.webp'+')'}">
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>