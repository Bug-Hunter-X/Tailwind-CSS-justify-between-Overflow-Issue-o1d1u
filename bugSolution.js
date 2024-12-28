```javascript
// Solution 1: Set a max-width on the container
<div class="bg-gray-100 p-4 max-w-2xl mx-auto">
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-medium">My Component</h2>
    <button class="text-blue-500 hover:text-blue-700">Edit</button>
  </div>
</div>

// Solution 2: Use flex-shrink on the button
<div class="bg-gray-100 p-4">
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-medium">My Component</h2>
    <button class="text-blue-500 hover:text-blue-700 flex-shrink">
      Edit
    </button>
  </div>
</div>

// Solution 3 (if appropriate): Add flex-wrap
<div class="bg-gray-100 p-4 flex flex-wrap justify-between">
    <h2 class="text-lg font-medium">My Component</h2>
    <button class="text-blue-500 hover:text-blue-700">Edit</button>
</div>
```