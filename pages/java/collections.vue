<template>
    <div class="grid grid-cols-4">
        <div class="px-10 col-span-3">
            <h1 class="text-4xl font-bold mb-4 text-black">Java Collections</h1>
            <USeparator />

            <div>
                <JavaCollectionsList class="mt-4" />
                <JavaCollectionsMap class="mt-7" />
            </div>
        </div>
        <div>
            <AppRightNav :sections="pageSections" />
        </div>
    </div>
</template>
<script setup>
const pageSections = [
    { label: 'List Interface', href: 'list' },
    { label: 'Map Interface', href: 'map' },
]
</script>