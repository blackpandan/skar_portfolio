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
    <PreviewCard v-for="index in 30" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'concept_art'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>