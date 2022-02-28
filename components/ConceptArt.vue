<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/concept_art/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 30" :key="index" :style="{backgroundImage: 'url('+url+index+'.webp'+')'}">
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>