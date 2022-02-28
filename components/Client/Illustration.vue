<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/illustration/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 15" :key="index">
        <img :src="url+index+'.webp'" :alt="'Illustration image no' + index" class="previewCard__image" />
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>