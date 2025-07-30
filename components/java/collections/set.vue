<template>
  <div class="prose max-w-none">
    <h2 id="set" class="text-3xl font-bold mb-6 underline">Set Interface</h2>
    
    <p class="mb-6">
      The Set interface in Java is part of the Collections Framework and extends the Collection interface. 
      It represents a collection that contains no duplicate elements and models the mathematical set abstraction.
    </p>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Key Characteristics</h3>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>No duplicates:</strong> Cannot contain duplicate elements</li>
        <li><strong>Unordered:</strong> Most implementations don't guarantee element order</li>
        <li><strong>At most one null:</strong> Can contain at most one null element</li>
        <li><strong>Mathematical set:</strong> Models mathematical set abstraction</li>
        <li><strong>Unique elements:</strong> Adding a duplicate element has no effect</li>
      </ul>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Common Implementations</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-blue-600">HashSet</h4>
          <p class="text-sm">Hash table implementation, O(1) average performance</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-blue-600">TreeSet</h4>
          <p class="text-sm">Red-Black tree implementation, maintains sorted order</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-blue-600">LinkedHashSet</h4>
          <p class="text-sm">Maintains insertion order with hash table performance</p>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <h4 class="font-semibold text-blue-600">EnumSet</h4>
          <p class="text-sm">Specialized Set for enum types, very efficient</p>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Under the Hood</h3>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-purple-600">HashSet Implementation</h4>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <pre><code class="text-sm">// HashSet internally uses HashMap
public class HashSet&lt;E&gt; extends AbstractSet&lt;E&gt; {
    private transient HashMap&lt;E, Object&gt; map;
    private static final Object PRESENT = new Object();
    
    public boolean add(E e) {
        return map.put(e, PRESENT) == null;  // Uses key, dummy value
    }
    
    public boolean contains(Object o) {
        return map.containsKey(o);  // Delegates to HashMap
    }
}</code></pre>
        </div>
        <p class="text-sm text-gray-600 mb-4">
          HashSet stores elements as <strong>keys</strong> in an internal HashMap with a dummy value (PRESENT object). 
          This leverages HashMap's hash table structure for O(1) operations.
        </p>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-purple-600">TreeSet Implementation</h4>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <pre><code class="text-sm">// TreeSet internally uses TreeMap (Red-Black Tree)
public class TreeSet&lt;E&gt; extends AbstractSet&lt;E&gt; implements NavigableSet&lt;E&gt; {
    private transient NavigableMap&lt;E, Object&gt; m;
    private static final Object PRESENT = new Object();
    
    public boolean add(E e) {
        return m.put(e, PRESENT) == null;  // Uses TreeMap's balancing
    }
    
    // Leverages tree structure for range operations
    public SortedSet&lt;E&gt; subSet(E fromElement, E toElement) {
        return new TreeSet&lt;&gt;(m.subMap(fromElement, toElement).keySet());
    }
}</code></pre>
        </div>
        <p class="text-sm text-gray-600 mb-4">
          TreeSet uses a <strong>Red-Black tree</strong> (self-balancing BST) via TreeMap. Elements are stored as keys in sorted order, 
          enabling efficient range queries and sorted iteration.
        </p>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-purple-600">LinkedHashSet Implementation</h4>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <pre><code class="text-sm">// LinkedHashSet extends HashSet with ordering
public class LinkedHashSet&lt;E&gt; extends HashSet&lt;E&gt; {
    // Uses LinkedHashMap internally instead of HashMap
    LinkedHashSet() {
        super(16, .75f, true);  // Creates LinkedHashMap
    }
}

// In HashSet constructor:
HashSet(int initialCapacity, float loadFactor, boolean dummy) {
    map = new LinkedHashMap&lt;&gt;(initialCapacity, loadFactor);
}</code></pre>
        </div>
        <p class="text-sm text-gray-600 mb-4">
          LinkedHashSet extends HashSet but uses <strong>LinkedHashMap</strong> internally. This maintains a doubly-linked list 
          of entries to preserve insertion order while keeping hash table performance.
        </p>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-purple-600">Hash Collision Handling</h4>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <pre><code class="text-sm">// How duplicates are detected in HashSet
public boolean add(E e) {
    // 1. Calculate hash code
    int hash = e.hashCode();
    
    // 2. Find bucket using hash
    int bucket = hash % buckets.length;
    
    // 3. Check existing elements in bucket using equals()
    for (Entry entry : buckets[bucket]) {
        if (entry.key.equals(e)) {
            return false;  // Duplicate found, don't add
        }
    }
    
    // 4. Add to bucket if no duplicate
    buckets[bucket].add(new Entry(e, PRESENT));
    return true;
}</code></pre>
        </div>
        <p class="text-sm text-gray-600 mb-4">
          HashSet prevents duplicates by using both <code>hashCode()</code> and <code>equals()</code>. 
          Objects with same hash go to same bucket, then <code>equals()</code> determines actual duplicates.
        </p>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Basic Operations</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">// Creating Sets
Set&lt;String&gt; hashSet = new HashSet&lt;&gt;();
Set&lt;Integer&gt; treeSet = new TreeSet&lt;&gt;();
Set&lt;String&gt; linkedHashSet = new LinkedHashSet&lt;&gt;();

// Adding elements
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Apple");    // Duplicate - won't be added
System.out.println(hashSet.size()); // Output: 2

// Checking existence
boolean hasApple = hashSet.contains("Apple");    // true

// Removing elements
boolean removed = hashSet.remove("Banana");      // true
hashSet.remove("Orange");                        // false (not present)

// Size and checks
int size = hashSet.size();
boolean isEmpty = hashSet.isEmpty();

// Adding multiple elements
hashSet.addAll(Arrays.asList("Orange", "Grape", "Apple"));</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">HashSet vs TreeSet vs LinkedHashSet</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="border border-gray-300 px-4 py-2 text-left">Feature</th>
              <th class="border border-gray-300 px-4 py-2 text-left">HashSet</th>
              <th class="border border-gray-300 px-4 py-2 text-left">TreeSet</th>
              <th class="border border-gray-300 px-4 py-2 text-left">LinkedHashSet</th>
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
              <td class="border border-gray-300 px-4 py-2 text-green-600">Sorted order</td>
              <td class="border border-gray-300 px-4 py-2 text-blue-600">Insertion order</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Null Values</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">One null allowed</td>
              <td class="border border-gray-300 px-4 py-2 text-red-600">No null values</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600">One null allowed</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">Internal Structure</td>
              <td class="border border-gray-300 px-4 py-2">HashMap</td>
              <td class="border border-gray-300 px-4 py-2">TreeMap (Red-Black Tree)</td>
              <td class="border border-gray-300 px-4 py-2">LinkedHashMap</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Set Operations</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">Set&lt;Integer&gt; set1 = new HashSet&lt;&gt;(Arrays.asList(1, 2, 3, 4, 5));
Set&lt;Integer&gt; set2 = new HashSet&lt;&gt;(Arrays.asList(4, 5, 6, 7, 8));

// Union (combine sets)
Set&lt;Integer&gt; union = new HashSet&lt;&gt;(set1);
union.addAll(set2);  // {1, 2, 3, 4, 5, 6, 7, 8}

// Intersection (common elements)
Set&lt;Integer&gt; intersection = new HashSet&lt;&gt;(set1);
intersection.retainAll(set2);  // {4, 5}

// Difference (elements in set1 but not in set2)
Set&lt;Integer&gt; difference = new HashSet&lt;&gt;(set1);
difference.removeAll(set2);  // {1, 2, 3}

// Symmetric difference (elements in either set but not both)
Set&lt;Integer&gt; symmetricDiff = new HashSet&lt;&gt;(set1);
symmetricDiff.addAll(set2);
Set&lt;Integer&gt; temp = new HashSet&lt;&gt;(set1);
temp.retainAll(set2);
symmetricDiff.removeAll(temp);  // {1, 2, 3, 6, 7, 8}</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Iteration Examples</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">Set&lt;String&gt; fruits = new HashSet&lt;&gt;(Arrays.asList("Apple", "Banana", "Orange"));

// Enhanced for loop
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Using Iterator
Iterator&lt;String&gt; iterator = fruits.iterator();
while (iterator.hasNext()) {
    String fruit = iterator.next();
    System.out.println(fruit);
    // Safe removal during iteration
    if (fruit.equals("Banana")) {
        iterator.remove();
    }
}

// Using Streams (Java 8+)
fruits.stream()
      .filter(fruit -&gt; fruit.startsWith("A"))
      .forEach(System.out::println);

// Convert to List for indexing
List&lt;String&gt; fruitList = new ArrayList&lt;&gt;(fruits);</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">TreeSet Specific Operations</h3>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <pre><code class="text-sm">TreeSet&lt;Integer&gt; numbers = new TreeSet&lt;&gt;(Arrays.asList(10, 5, 15, 20, 1, 8));

// NavigableSet methods
Integer first = numbers.first();        // 1 (smallest)
Integer last = numbers.last();          // 20 (largest)
Integer lower = numbers.lower(10);      // 8 (largest &lt; 10)
Integer higher = numbers.higher(10);    // 15 (smallest &gt; 10)
Integer floor = numbers.floor(12);      // 10 (largest &lt;= 12)
Integer ceiling = numbers.ceiling(12);  // 15 (smallest &gt;= 12)

// Subset operations
SortedSet&lt;Integer&gt; headSet = numbers.headSet(10);     // {1, 5, 8}
SortedSet&lt;Integer&gt; tailSet = numbers.tailSet(10);     // {10, 15, 20}
SortedSet&lt;Integer&gt; subSet = numbers.subSet(5, 15);    // {5, 8, 10}

// Descending order
NavigableSet&lt;Integer&gt; descendingSet = numbers.descendingSet();
// {20, 15, 10, 8, 5, 1}</code></pre>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
      <p class="text-blue-800">
        <strong>Best Practice:</strong> Use HashSet for general-purpose sets when order doesn't matter, 
        TreeSet when you need sorted elements, and LinkedHashSet when insertion order is important. 
        Always override equals() and hashCode() for custom objects in HashSet.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>