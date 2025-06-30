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

const { data: links } = await useAsyncData<Link[]>('equalsAndHashCodeLinks',
    () => queryCollection('links')
        .where('category', '=', 'java-core')
        .where('subcategory', '=', 'equals-and-hashcode')
        .all()
);


</script>

<template>
    <div>
        <h2 class="text-3xl font-semibold text-gray-700 mb-2 underline">
            Java <code class="text-emerald-500">equals()</code> and <code class="text-emerald-500">hashCode()</code>
            contracts
        </h2>
        <DefaultSection title="Equals">
            <div>
                <p class="text-gray-700 mt-2">
                    The <code class="bg-gray-100 px-1 rounded">equals()</code> method in Java determines whether two objects are logically equivalent. By default, it checks for reference equality (i.e., whether two references point to the same object), but it can be overridden to compare object contents. Overriding <code class="bg-gray-100 px-1 rounded">equals()</code> is essential for value-based classes and for correct behavior in collections like <code class="bg-gray-100 px-1 rounded">HashSet</code> and <code class="bg-gray-100 px-1 rounded">HashMap</code>.
                </p>
                <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700">
                    <li>
                        The default <code class="bg-gray-100 px-1 rounded">equals()</code> checks if two references point to the same object.
                    </li>
                    <li>
                        Override <code class="bg-gray-100 px-1 rounded">equals()</code> to compare object fields for logical equality.
                    </li>
                    <li>
                        Consistent <code class="bg-gray-100 px-1 rounded">equals()</code> implementations are crucial for correct collection behavior.
                    </li>
                </ul>
                <div class="bg-white rounded-lg shadow p-6 mt-4">
                    <a href="https://www.digitalocean.com/community/tutorials/java-equals-hashcode#java-equals"
                        target="_blank" rel="noopener" class="text-emerald-600 hover:underline font-semibold">
                        How does equals() work in Java?
                    </a>
                    <p class="text-gray-700 mt-2">
                        The <code class="bg-gray-100 px-1 rounded">equals()</code> method should be:
                    </p>
                    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Reflexive: <code>a.equals(a)</code> is always true.</li>
                        <li>Symmetric: <code>a.equals(b)</code> is true if and only if <code>b.equals(a)</code> is true.</li>
                        <li>Transitive: If <code>a.equals(b)</code> and <code>b.equals(c)</code>, then <code>a.equals(c)</code> is true.</li>
                        <li>Consistent: Multiple invocations return the same result unless fields change.</li>
                        <li>Non-null: <code>a.equals(null)</code> is always false.</li>
                    </ul>
                    <p class="text-gray-700 mt-2">
                        Properly overriding <code class="bg-gray-100 px-1 rounded">equals()</code> ensures reliable object comparison and collection operations.
                    </p>
                </div>
            </div>
        </DefaultSection>
        <DefaultSection title="Hashcode">
            <div>
                <p class="text-gray-700 mt-2">
                    The <code class="bg-gray-100 px-1 rounded">hashCode()</code> method in Java returns an integer
                    representation of the object’s memory address by default, but it can be overridden to provide a
                    hash code based on the object's data. This is crucial for objects used in hash-based collections
                    like <code class="bg-gray-100 px-1 rounded">HashMap</code> and <code
                        class="bg-gray-100 px-1 rounded">HashSet</code>. A good hash function distributes objects
                    evenly across buckets to minimize collisions and improve performance.
                </p>
                <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700">
                    <li>
                        The default <code class="bg-gray-100 px-1 rounded">hashCode()</code> uses the object's
                        memory address.
                    </li>
                    <li>
                        Overriding <code class="bg-gray-100 px-1 rounded">hashCode()</code> is necessary when <code
                            class="bg-gray-100 px-1 rounded">equals()</code> is overridden.
                    </li>
                    <li>
                        Good hash functions reduce the chance of collisions.
                    </li>
                </ul>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
                <a href="https://www.digitalocean.com/community/tutorials/java-equals-hashcode#what-is-hash-collision"
                    target="_blank" rel="noopener" class="text-emerald-600 hover:underline font-semibold">
                    What is a hash collision?
                </a>
                <p class="text-gray-700 mt-2">
                    A hash collision occurs when two different objects produce the same hash code. In hash-based
                    collections, collisions are handled by storing multiple objects in the same bucket, often using
                    a linked list or another structure. Too many collisions can degrade performance, so it’s
                    important to implement <code class="bg-gray-100 px-1 rounded">hashCode()</code> to minimize
                    them.
                </p>
                <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700">
                    <li>
                        Collisions are inevitable but should be minimized.
                    </li>
                    <li>
                        Collections like <code class="bg-gray-100 px-1 rounded">HashMap</code> handle collisions
                        internally.
                    </li>
                    <li>
                        Poor hash functions can lead to performance issues due to excessive collisions.
                    </li>
                </ul>
            </div>
        </DefaultSection>

        <DefaultSection title="">
            <div class="text-gray-800 text-base leading-relaxed">
                <p>
                    In Java, <code class="bg-gray-100 px-1 rounded">equals()</code> and <code
                        class="bg-gray-100 px-1 rounded">hashCode()</code> are essential for comparing objects and using
                    them in hash-based collections like
                    <code class="bg-gray-100 px-1 rounded">HashMap</code> or <code
                        class="bg-gray-100 px-1 rounded">HashSet</code>. The contract requires that if two objects are
                    equal according to
                    <code class="bg-gray-100 px-1 rounded">equals()</code>, they must return the same <code
                        class="bg-gray-100 px-1 rounded">hashCode()</code>. Violating this leads to unpredictable
                    behavior in collections, such as failed lookups or duplicate keys.
                </p>
                <p class="mt-4">
                    The <code class="bg-gray-100 px-1 rounded">equals()</code> method should check logical equality
                    based on relevant fields, and <code class="bg-gray-100 px-1 rounded">hashCode()</code> must return
                    consistent integers for equal objects. A good hash function distributes hash codes uniformly to
                    avoid collisions.
                </p>
                <p class="mt-4">
                    The <code class="bg-gray-100 px-1 rounded">equals()</code> method must be reflexive, symmetric,
                    transitive, consistent, and handle null correctly. <code
                        class="bg-gray-100 px-1 rounded">hashCode()</code> should remain consistent during the object's
                    lifetime. Tools like IDE generators or Lombok's
                    <code class="bg-gray-100 px-1 rounded">@EqualsAndHashCode</code> can help create reliable
                    implementations.
                </p>
                <p class="mt-4">
                    Correctly implementing these methods ensures reliable behavior in collections, consistent key
                    lookups, and prevents subtle bugs when using objects as keys.
                </p>
            </div>

        </DefaultSection>
        <LinksSection :links="links" />
    </div>
</template>