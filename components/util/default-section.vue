<template>
    <section class="mt-10 mb-8">
        <h3 v-if="title" class="text-2xl font-semibold mb-3 italic">{{ title }}</h3>
        <slot />
    </section>
</template>

<script setup lang="ts">
defineProps<{ title: string | null }>()
</script>