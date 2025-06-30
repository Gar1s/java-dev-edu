<template>
    <section class="mt-10 mb-8">
        <h3 class="text-2xl font-semibold mb-3 italic">
            <UIcon name="i-lucide-link" class="size-5"/>
            Useful Links:
        </h3>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li v-for="link in links" :key="link.id">
                <a :href="link.url" class="text-emerald-500 hover:underline" target="_blank" rel="noopener">
                    {{ link.title }}
                </a>
            </li>
        </ul>
        <slot />
    </section>
</template>

<script setup lang="ts">
import type { Link } from '~/types/link';

defineProps<{ links: Link[] | null }>()
</script>