<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/comics_project/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <PreviewCard v-for="index in 14" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'comics_project'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>