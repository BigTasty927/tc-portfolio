<template>
  <section class="case-section" :aria-labelledby="heading ? section.id : undefined" :aria-label="heading ? undefined : 'Project images'">
    <template v-if="heading">
      <p class="eyebrow">{{ indexLabel }}</p>
      <h2 :id="section.id">{{ heading }}</h2>
    </template>
    <ul v-if="section.images?.length" class="case-gallery">
      <li v-for="image in section.images" :key="image.src">
        <CaseStudyFigure :image="image"/>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
    section: {
        type: Object,
        required: true,
    },
    indexLabel: {
        type: String,
        required: true,
    },
})

const heading = computed(() => props.section.title || props.section.heading || '')
</script>
