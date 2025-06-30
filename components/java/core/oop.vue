<template>
    <div class="bg-white rounded-lg py-8">
        <h2 class="text-3xl font-semibold text-gray-700 mb-6 underline">OOP (Object-Oriented Programming)</h2>
        <p class="mb-8">
            Object-Oriented Programming (OOP) is a paradigm that organizes software around objects—entities that combine
            data (fields) and behavior (methods). Java fully supports OOP, making it essential for writing clean,
            scalable code.
        </p>

        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Abstraction</h3>
            <p class="mb-3">
                <strong>Definition:</strong> Abstraction hides complex implementation details and exposes only the
                necessary features of an object or system. It reduces complexity by focusing on what an object does, not
                how it does it.
            </p>
            <pre class="bg-gray-100 rounded p-4 overflow-x-auto mb-4"><code>
abstract class Animal {
    abstract void makeSound();
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}
      </code></pre>
        </section>

        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Encapsulation</h3>
            <p class="mb-3">
                <strong>Definition:</strong> Encapsulation bundles data (fields) and methods into a single unit (class),
                restricting direct access to the data and exposing it only through methods.
            </p>
            <pre class="bg-gray-100 rounded p-4 overflow-x-auto mb-4"><code>
class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
      </code></pre>
        </section>

        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Inheritance</h3>
            <p class="mb-3">
                <strong>Definition:</strong> Inheritance allows a class to acquire properties and behaviors from another
                class, promoting code reuse and logical hierarchy.
            </p>
            <pre class="bg-gray-100 rounded p-4 overflow-x-auto mb-4"><code>
class Animal {
    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Cat extends Animal {
    // Inherits sleep() from Animal

    void meow() {
        System.out.println("Meow");
    }
}
      </code></pre>
        </section>

        <section class="mt-10 mb-8">
            <h3 class="text-2xl font-semibold mb-3 italic">Polymorphism</h3>
            <p class="mb-3">
                <strong>Definition:</strong> Polymorphism means "many forms." It allows objects to behave differently
                based on their actual class type, even if they share the same interface or parent class.
            </p>
            <pre class="bg-gray-100 rounded p-4 overflow-x-auto mb-4"><code>
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}
      </code></pre>
        </section>

        <section class="mt-12 mb-8">
            <h3 class="text-2xl font-semibold mb-3">Why Use OOP?</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Encourages code reuse through objects and classes, reducing duplication.</li>
                <li>Provides a clear, logical structure, making code easier to understand, maintain, and debug.</li>
                <li>Supports the DRY (Don't Repeat Yourself) principle by centralizing common functionality.</li>
                <li>Enables modular, efficient, and faster application development.</li>
            </ul>
        </section>

        <section class="mt-12 mb-4">
            <h3 class="text-2xl font-semibold mb-3">Further Reading</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>
                    <a href="https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/?utm_source=chatgpt.com"
                        class="text-blue-500 hover:underline" target="_blank" rel="noopener">
                        GeeksforGeeks: OOP Concepts in Java
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>