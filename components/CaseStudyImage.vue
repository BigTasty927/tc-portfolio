<template>
  <section class="case-section" :aria-labelledby="heading ? section.id : undefined" :aria-label="heading ? undefined : (section.alt || 'Project image')">
    <template v-if="heading">
      <p class="eyebrow">{{ indexLabel }}</p>
      <h2 :id="section.id">{{ heading }}</h2>
    </template>
    <CaseStudyFigure :image="section"/>
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
