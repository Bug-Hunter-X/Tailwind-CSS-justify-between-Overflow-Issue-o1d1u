```javascript
// ... some Tailwind CSS classes
<div class="bg-gray-100 p-4">
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-medium">My Component</h2>
    <button class="text-blue-500 hover:text-blue-700">Edit</button>
  </div>
</div>
```

This code might produce unexpected results if the `button` element is wider than its container and the parent div's width is not set explicitly.  Because Tailwind's `justify-between` utility only distributes space between *flex items*, if one item is larger, it can push the other one out of the container's boundaries.