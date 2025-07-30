<template>
  <div class="prose max-w-none">
    <h2 id="list" class="text-3xl font-bold mb-6 underline">List Interface</h2>

    <p class="mb-6">
      The List interface in Java is part of the Collections Framework and extends the Collection interface.
      It represents an ordered collection (sequence) that allows duplicate elements and provides positional access.
    </p>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Key Characteristics</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Ordered:</strong> Elements maintain their insertion order</li>
        <li><strong>Indexed:</strong> Elements can be accessed by their index position</li>
        <li><strong>Duplicates allowed:</strong> Can contain duplicate elements</li>
        <li><strong>Null values:</strong> Can store null values</li>
      </ul>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Common Implementations</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">ArrayList</h4>
          <p class="text-sm">Dynamic array, good for random access</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">LinkedList</h4>
          <p class="text-sm">Doubly-linked list, efficient insertions/deletions</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">Vector</h4>
          <p class="text-sm">Synchronized version of ArrayList (legacy)</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">Stack</h4>
          <p class="text-sm">LIFO (Last In, First Out) data structure</p>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Basic Operations</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">// Creating Lists
List&lt;String&gt; arrayList = new ArrayList&lt;&gt;();
List&lt;Integer&gt; linkedList = new LinkedList&lt;&gt;();

// Adding elements
arrayList.add("Apple");
arrayList.add("Banana");
arrayList.add(1, "Orange"); // Insert at index 1

// Accessing elements
String first = arrayList.get(0);        // Get by index
int index = arrayList.indexOf("Apple"); // Find index

// Removing elements
arrayList.remove(0);           // Remove by index
arrayList.remove("Banana");    // Remove by value

// Size and checks
int size = arrayList.size();
boolean isEmpty = arrayList.isEmpty();
boolean contains = arrayList.contains("Apple");</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">ArrayList vs LinkedList</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 text-left">Operation</th>
              <th class="border border-gray-300 px-4 py-2 text-left">ArrayList</th>
              <th class="border border-gray-300 px-4 py-2 text-left">LinkedList</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Random Access</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">O(1) - Fast</td>
              <td class="border border-gray-300 px-4 py-2 text-red-600">O(n) - Slow</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Insert/Delete at Beginning</td>
              <td class="border border-gray-300 px-4 py-2 text-red-600">O(n) - Slow</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">O(1) - Fast</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Insert/Delete at End</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">O(1) - Fast</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">O(1) - Fast</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Memory Usage</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">Lower</td>
              <td class="border border-gray-300 px-4 py-2 text-red-600">Higher</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Iteration Example</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">List&lt;String&gt; fruits = Arrays.asList("Apple", "Banana", "Orange");

// Enhanced for loop
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Using Iterator
Iterator&lt;String&gt; iterator = fruits.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Using Streams (Java 8+)
fruits.stream()
      .filter(fruit -&gt; fruit.startsWith("A"))
      .forEach(System.out::println);</code></pre>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
      <p class="text-blue-800">
        <strong>Best Practice:</strong> Use ArrayList for frequent random access and LinkedList for frequent
        insertions/deletions at the beginning or middle of the list.
      </p>
    </div>
  </div>
</template>