<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/character_design/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <PreviewCard v-for="index in 13" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'character_design'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>