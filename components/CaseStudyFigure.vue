<template>
  <figure class="case-figure" :class="figureClass" data-case-visual>
    <div class="case-figure__frame">
      <img
          :src="image.src"
          :alt="image.alt || ''"
          :width="image.width || undefined"
          :height="image.height || undefined"
          :loading="eager ? 'eager' : 'lazy'"
          :fetchpriority="eager ? 'high' : 'auto'"
          decoding="async"
      >
    </div>
    <figcaption v-if="image.caption">{{ image.caption }}</figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
    image: {
        type: Object,
        required: true,
    },
    eager: {
        type: Boolean,
        default: false,
    },
})

const figureClass = computed(() => {
    const layout = props.image.layout === 'content' ? 'content' : 'wide'
    const centered = layout === 'content' && props.image.position !== 'start'
    return {
        'case-figure--content': layout === 'content',
        'case-figure--wide': layout === 'wide',
        'case-figure--center': centered,
    }
})
</script>
