<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';

const data = ref([
    {
        feature: 'Fields',
        abstract_class: 'Can have instance variables (any type)',
        interface: 'Only constants (public static final)'
    },
    {
        feature: 'Constructors',
        abstract_class: 'Yes',
        interface: 'No'
    },
    {
        feature: 'Method Modifiers',
        abstract_class: 'Can have any (private, protected, public)',
        interface: 'Methods are public (except private methods from Java 9)'
    },
    {
        feature: 'Multiple Inheritance',
        abstract_class: 'Single class can extend one abstract class',
        interface: 'Can implement multiple interfaces'
    },
    {
        feature: 'Default Implementation',
        abstract_class: 'Can provide method bodies',
        interface: 'Since Java 8: default & static methods allowed'
    },
    {
        feature: 'Use Case',
        abstract_class: '"Is-a" relationship, common behavior or base class',
        interface: '"Can-do" capabilities, unrelated types sharing behavior'
    }
])
const columns: TableColumn<unknown>[] = [
    {
        accessorKey: 'feature',
        header: 'Feature',
        meta: {
            class: {
                td: 'font-semibold text-gray-500'
            }
        }
    },
    {
        accessorKey: 'abstract_class',
        header: 'Abstract Class'
    },
    {
        accessorKey: 'interface',
        header: 'Interface'
    }
]

</script>

<template>
    <div class="bg-white rounded-lg py-2">
        <h2 class="text-3xl font-semibold text-gray-700 mb-6 underline">Abstract classes and Interfaces</h2>
        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Abstract class</h3>
            <p class="mb-3">
                <strong>Definition:</strong> A class that cannot be instantiated, used to define a common base with
                shared code or state for subclasses. It can have abstract methods (without body) and concrete methods
                (with body), plus fields of any type. It's ideal when you have related classes that need some shared
                implementation.
            </p>
            <pre class="bg-gray-100 rounded p-4 overflow-x-auto mb-4"><code>
abstract class Animal {
    String name;
    abstract void makeSound();
    void eat() { System.out.println(name + " is eating"); }
}
      </code></pre>
        </section>
        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Interface</h3>
            <p class="mb-3">
                <strong>Definition:</strong>A contract that defines a set of abstract methods (and since Java 8,
                optional default methods) that implementing classes must provide. Interfaces cannot hold instance state
                (only constants) and are perfect for defining capabilities across unrelated classes (e.g., Flyable,
                Comparable).
            </p>
            <pre class="bg-gray-100 rounded p-4 overflow-x-auto mb-4"><code>
interface Flyable {
    void fly();
}
      </code></pre>
        </section>
        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3">When to use?</h3>
            <div>
                <strong>Use an Abstract Class when:</strong>
                <ul class="list-disc list-inside">
                    <li>Classes are closely related;</li>
                    <li>You need to share common code or state;</li>
                    <li>You might need non-static or non-final fields.</li>
                </ul>
            </div>
            <div class="mt-4">
                <strong>Use an interface when:</strong>
                <ul class="list-disc list-inside">
                    <li>You need to define a contract across unrelated classes;</li>
                    <li>You require multiple inheritance of types;</li>
                    <li>Your classes need to plug into existing libraries/APIs expecting interfaces.</li>
                </ul>
            </div>
        </section>
        <section>
            <h3 class="text-2xl font-semibold mb-3">Abstract vs Interface</h3>
            <div>
                <UTable :data="data" :columns="columns" class="flex-1" />
            </div>
        </section>

        <section class="mt-12 mb-4">
            <h3 class="text-2xl font-semibold mb-3">Further Reading</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>
                    <a href="https://www.baeldung.com/java-interface-vs-abstract-class"
                        class="text-blue-500 hover:underline" target="_blank" rel="noopener">
                        Baeldung: Using an Interface vs. Abstract Class in Java
                    </a>
                </li>
                <li>
                    <a href="https://www.baeldung.com/java-abstract-class" class="text-blue-500 hover:underline"
                        target="_blank" rel="noopener">
                        Baeldung: Abstract Classes in Java
                    </a>
                </li>
                <li>
                    <a href="https://www.baeldung.com/java-interfaces" class="text-blue-500 hover:underline"
                        target="_blank" rel="noopener">
                        Baeldung: Java Interfaces
                    </a>
                </li>
                <li>
                    <a href="https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/"
                        class="text-blue-500 hover:underline" target="_blank" rel="noopener">
                        GeeksforGeeks: Using an Interface vs. Abstract Class in Java
                    </a>
                </li>
            </ul>
        </section>

    </div>
</template>