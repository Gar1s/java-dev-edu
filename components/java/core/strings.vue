<script setup lang="ts">
import DefaultSection from '~/components/util/default-section.vue';
import type { TableColumn } from '@nuxt/ui';
import type { Link } from '~/types/link';
import LinksSection from '~/components/util/links-section.vue';

const columns: TableColumn<unknown>[] = [
    {
        accessorKey: 'feature',
        header: 'Feature',
        meta: {
            class: {
                th: 'font-semibold bg-white',
                td: 'font-semibold text-gray-500 bg-white'
            }
        }
    },
    {
        accessorKey: 'string',
        header: 'String'
    },
    {
        accessorKey: 'stringBuilder',
        header: 'StringBuilder'
    },
    {
        accessorKey: 'stringBuffer',
        header: 'StringBuffer'
    }
];

const data = [
    {
        feature: 'Mutability',
        string: 'Immutable',
        stringBuilder: 'Mutable',
        stringBuffer: 'Mutable'
    },
    {
        feature: 'Thread Safety',
        string: 'Thread-safe by design',
        stringBuilder: 'Not thread-safe',
        stringBuffer: 'Thread-safe (synchronized)'
    },
    {
        feature: 'Performance',
        string: 'Slow for frequent modifications',
        stringBuilder: 'Fast (no synchronization)',
        stringBuffer: 'Slower (synchronization overhead)'
    },
    {
        feature: 'Use Case',
        string: 'Constant, unchanging text',
        stringBuilder: 'Single-threaded string building',
        stringBuffer: 'Multi-threaded string building'
    },
    {
        feature: 'Introduced In',
        string: 'Java 1.0',
        stringBuilder: 'Java 1.5',
        stringBuffer: 'Java 1.0'
    }
];

const columnPinning = ref({
    left: ['feature']
})

const { data: links } = await useAsyncData<Link[]>('stringsLinks',
    () => queryCollection('links')
    .where('category', '=', 'java-core')
    .where('subcategory', '=', 'strings')
    .all()
);

</script>

<template>
    <div class="bg-white rounded-lg py-2">
        <h2 class="text-3xl font-semibold text-gray-700 mb-2 underline">Java Strings</h2>

        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Why String Is Immutable in Java?</h3>
            <p class="mb-3">
                In Java, String objects are immutable, meaning their value can't change after creation. When you modify
                a String, a new object is created instead of altering the original. This immutability offers key
                advantages.
            </p>
            <ul class="list-decimal list-inside space-y-2 text-gray-800 text-base">
                <li>
                    In Java, <code class="bg-gray-100 px-1 rounded">String</code> objects are
                    <strong>immutable</strong>:
                    <ul class="list-disc list-inside ml-5">
                        <li>Their value can’t change after creation.</li>
                        <li>Modifying a String creates a new object instead of altering the original.</li>
                    </ul>
                </li>
                <li>
                    <strong>Key advantages of immutability:</strong>
                    <ul class="list-disc list-inside ml-5">
                        <li><strong>Security:</strong> Prevents malicious changes to Strings holding sensitive data
                            like file paths or network addresses.</li>
                        <li><strong>Thread safety:</strong> Immutable Strings can be safely shared between threads
                            without synchronization.</li>
                        <li><strong>String interning:</strong> Identical String literals share a single object in
                            the String Pool, saving memory and improving performance.</li>
                        <li><strong>Reliable hash keys:</strong> Immutable Strings have constant hash codes, making
                            them ideal keys in collections like HashMap or HashSet.</li>
                    </ul>
                </li>
                <li>
                    <strong>Implementation details:</strong>
                    <ul class="list-disc list-inside ml-5">
                        <li>Internally, String uses a final <code class="bg-gray-100 px-1 rounded">char[]</code> to
                            store data, which can’t be reassigned after construction.</li>
                        <li>Since Java 9, Strings use <em>compact storage</em> (Latin-1 or UTF-16) but remain
                            immutable.</li>
                    </ul>
                </li>
                <li>
                    <strong>Bottom line:</strong> String immutability provides
                    <em>security, thread safety, performance, and memory efficiency</em>,
                    making it essential to Java's design.
                </li>
            </ul>
        </section>

        <DefaultSection title="StringBuilder vs StringBuffer">
            <div>
                <ul class="list-disc list-inside space-y-2 text-gray-800 text-base mb-4">
                    <li>
                        <strong>StringBuilder:</strong> A mutable class for building/modifying strings, optimized for
                        <em>single-threaded</em> contexts. Not synchronized, so faster.
                    </li>
                    <li>
                        <strong>StringBuffer:</strong> Like StringBuilder but <em>synchronized</em>, ensuring thread
                        safety at the cost of slower performance.
                    </li>
                </ul>

                <p class="text-gray-800 mb-4">
                    <strong>Summary:</strong>
                </p>
                <p class="text-gray-800">
                    In Java, <code class="bg-gray-100 px-1 rounded">String</code> is <strong>immutable</strong>, so each
                    modification creates a new object, which can hurt performance in repetitive operations. <code
                        class="bg-gray-100 px-1 rounded">StringBuilder</code> and <code
                        class="bg-gray-100 px-1 rounded">StringBuffer</code> solve this with mutable sequences, allowing
                    efficient appends and modifications.
                </p>
                <p class="text-gray-800 mt-2">
                    <code class="bg-gray-100 px-1 rounded">StringBuilder</code> is faster because it’s <em>not
                        synchronized</em>, making it ideal for single-threaded programs. Meanwhile, <code
                        class="bg-gray-100 px-1 rounded">StringBuffer</code> is <em>synchronized</em>, ensuring safety
                    in multi-threaded environments but with slower performance. Use <strong>String</strong> when
                    immutability is needed, <strong>StringBuilder</strong> for single-threaded mutable strings, and
                    <strong>StringBuffer</strong> for thread-safe mutable strings.
                </p>
            </div>

            <div class="max-w-3xl mx-auto mt-5">
                <UTable :column-pinning="columnPinning" :columns="columns" :data="data" class="flex-1" />
            </div>
        </DefaultSection>
        <LinksSection :links="links" />
    </div>
</template>