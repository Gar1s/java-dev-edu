<script setup lang="ts">
import type { Link } from '~/types/link';
import LinksSection from '~/components/util/links-section.vue';

const { data: links } = await useAsyncData<Link[]>('exceptionsLinks',
    () => queryCollection('links')
        .where('category', '=', 'java-core')
        .where('subcategory', '=', 'exceptions')
        .all()
);

</script>

<template>
    <div>
        <h2 class="text-3xl font-semibold text-gray-700 mb-2 underline">
            Exception Handling
        </h2>

        <LinksSection :links="links" />
    </div>
</template>