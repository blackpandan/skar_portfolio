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
    <PreviewCard v-for="index in 20" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'ink_challenge'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>