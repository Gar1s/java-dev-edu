<script setup lang="ts">
import LinksSection from '~/components/util/links-section.vue';
import type { Link } from '~/types/link';

const { data: links } = await useAsyncData<Link[]>('setMapListLinks',
    () => queryCollection('links')
        .where('category', '=', 'collections')
        .all()
);

const pageSections = [
    { label: 'List Interface', href: 'list' },
    { label: 'Map Interface', href: 'map' },
    { label: 'Set Interface', href: 'set' },
    { label: 'Useful Links', href: 'linksSection' },
]

</script>
<template>
    <div class="grid grid-cols-4">
        <div class="px-10 col-span-3">
            <h1 class="text-4xl font-bold mb-4 text-black">Java Collections</h1>
            <USeparator />

            <div>
                <JavaCollectionsList class="mt-4" />
                <JavaCollectionsMap class="mt-7" />
                <JavaCollectionsSet class="mt-7" />
                <LinksSection :links="links" />
            </div>
        </div>
        <div>
            <AppRightNav :sections="pageSections" />
        </div>
    </div>
</template>