<template>
    <div class="px-10">
        <h1 class="text-4xl font-bold mb-4 text-black">Java Core</h1>
        <USeparator />


        <div class="grid gap-6">

            <JavaCoreOop />
            <JavaCoreAbstractAndInterface />
            <JavaCoreImmutability />
            <JavaCoreStrings />
            <JavaCoreEqualsAndHashcode />
            
            <div class="bg-white rounded-lg py-3">
                <h2 class="text-2xl font-semibold text-gray-700 mb-2">Exception Handling</h2>
                // Exception Hierarchy <br />
                // Errors<br />
                // Comparing Strings in Java equals() vs ==<br />
            </div>


            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-semibold text-gray-700 mb-2">Useful Resources:</h2>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                        <a href="https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/?utm_source=chatgpt.com"
                            class="text-gray-600 hover:underline" target="_blank">geeksforgeeks/oop</a>
                    </li>
                    <li>
                        <a href="https://www.baeldung.com/java-tutorial" class="text-gray-600 hover:underline"
                            target="_blank">Baeldung Java Guides</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>