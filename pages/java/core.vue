<template>
    <div class="grid grid-cols-4">
        <div class="px-10 col-span-3">
            <h1 class="text-4xl font-bold mb-4 text-black">Java Core</h1>
            <USeparator />

            <div>
                <JavaCoreOop />
                <JavaCoreAbstractAndInterface />
                <JavaCoreImmutability />
                <JavaCoreStrings />
                <JavaCoreEqualsAndHashcode />
                <JavaCoreExceptions />
            </div>
        </div>
        <div>
            <AppRightNav :sections="pageSections" />
        </div>
    </div>
</template>
<script setup>
const pageSections = [
    { label: 'OOP', href: 'oop' },
    { label: 'Abstract classes and Interfaces', href: 'abstract_interfaces' },
    { label: 'Immutability', href: 'immutability' },
    { label: 'Java Strings', href: 'java_strings' },
    { label: 'Equals and Hashcode', href: 'equals_and_hashcode' },
    { label: 'Exceptions', href: 'exceptions' }
]
</script>