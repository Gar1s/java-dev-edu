<template>
  <div class="prose max-w-none">
    <h2 id="map" class="text-3xl font-bold mb-6 underline">Map Interface</h2>

    <p class="mb-6">
      The Map interface in Java represents a mapping between keys and values. It's not a subtype of the Collection
      interface,
      but is part of the Java Collections Framework. Each key can map to at most one value, making it ideal for lookups
      and associations.
    </p>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Key Characteristics</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Key-Value pairs:</strong> Stores data as key-value associations</li>
        <li><strong>Unique keys:</strong> Each key can appear at most once</li>
        <li><strong>One-to-one mapping:</strong> Each key maps to exactly one value</li>
        <li><strong>Null values:</strong> Most implementations allow null values and keys</li>
        <li><strong>No duplicate keys:</strong> Adding a duplicate key updates the existing value</li>
      </ul>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Common Implementations</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">HashMap</h4>
          <p class="text-sm">Hash table implementation, O(1) average performance</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">TreeMap</h4>
          <p class="text-sm">Red-Black tree implementation, maintains sorted order</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">LinkedHashMap</h4>
          <p class="text-sm">Maintains insertion order with hash table performance</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-emerald-600">Hashtable</h4>
          <p class="text-sm">Synchronized version of HashMap (legacy)</p>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Basic Operations</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">// Creating Maps
Map&lt;String, Integer&gt; hashMap = new HashMap&lt;&gt;();
Map&lt;String, String&gt; treeMap = new TreeMap&lt;&gt;();

// Adding key-value pairs
hashMap.put("apple", 5);
hashMap.put("banana", 3);
hashMap.put("orange", 8);

// Accessing values
Integer appleCount = hashMap.get("apple");        // Returns 5
Integer grapeCount = hashMap.get("grape");        // Returns null

// Safe access with default value
Integer grapeCountSafe = hashMap.getOrDefault("grape", 0); // Returns 0

// Checking existence
boolean hasApple = hashMap.containsKey("apple");     // true
boolean hasValue5 = hashMap.containsValue(5);       // true

// Removing entries
Integer removed = hashMap.remove("banana");         // Returns 3
hashMap.remove("orange", 8);                       // Remove only if value matches

// Size and checks
int size = hashMap.size();
boolean isEmpty = hashMap.isEmpty();</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">HashMap vs TreeMap vs LinkedHashMap</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 text-left">Feature</th>
              <th class="border border-gray-300 px-4 py-2 text-left">HashMap</th>
              <th class="border border-gray-300 px-4 py-2 text-left">TreeMap</th>
              <th class="border border-gray-300 px-4 py-2 text-left">LinkedHashMap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Performance</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">O(1) average</td>
              <td class="border border-gray-300 px-4 py-2 text-yellow-600">O(log n)</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">O(1) average</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Ordering</td>
              <td class="border border-gray-300 px-4 py-2 text-red-600">No order</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">Sorted by key</td>
              <td class="border border-gray-300 px-4 py-2 text-blue-600">Insertion order</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Null Keys</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">One null key</td>
              <td class="border border-gray-300 px-4 py-2 text-red-600">No null keys</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">One null key</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Memory Usage</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">Lower</td>
              <td class="border border-gray-300 px-4 py-2 text-yellow-600">Higher</td>
              <td class="border border-gray-300 px-4 py-2 text-yellow-600">Higher</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Iteration Examples</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">Map&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

// Iterate over keys
for (String name : scores.keySet()) {
    System.out.println(name + ": " + scores.get(name));
}

// Iterate over values
for (Integer score : scores.values()) {
    System.out.println("Score: " + score);
}

// Iterate over entries
for (Map.Entry&lt;String, Integer&gt; entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// Using Streams (Java 8+)
scores.entrySet().stream()
      .filter(entry -&gt; entry.getValue() &gt; 90)
      .forEach(entry -&gt; System.out.println(entry.getKey() + ": " + entry.getValue()));</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Common Methods</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();

// Compute operations (Java 8+)
map.compute("key", (k, v) -&gt; (v == null) ? 1 : v + 1);
map.computeIfAbsent("newKey", k -&gt; 42);
map.computeIfPresent("key", (k, v) -&gt; v * 2);

// Merge operation
map.merge("key", 10, Integer::sum);

// Replace operations
map.replace("key", 100);
map.replace("key", 100, 200); // Replace only if current value is 100

// Bulk operations
map.putAll(otherMap);
map.clear();

// View operations
Set&lt;String&gt; keys = map.keySet();
Collection&lt;Integer&gt; values = map.values();
Set&lt;Map.Entry&lt;String, Integer&gt;&gt; entries = map.entrySet();</code></pre>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
      <p class="text-blue-800">
        <strong>Best Practice:</strong> Use HashMap for general-purpose mapping, TreeMap when you need sorted keys,
        and LinkedHashMap when insertion order matters. Consider using ConcurrentHashMap for thread-safe operations.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>