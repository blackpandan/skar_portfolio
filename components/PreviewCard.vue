<script>
export default {
    props: ['url', 'index']
}
</script>

<template>
     <div class="previewCard" @click="$emit('handlePreviewOverlay')">
        <img :src="url+index+'.webp'" :alt="'portrait image no' + index" class="previewCard__image" height="100%" width="100%" />
    </div>
</template>