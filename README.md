# DOM Manipulation Projects & Concepts

A collection of interactive DOM manipulation projects demonstrating core JavaScript concepts for working with the Document Object Model.

---

## 📚 Table of Contents

1. [DOM Concepts Overview](#dom-concepts-overview)
2. [Projects](#projects)
3. [Core DOM Methods & Properties](#core-dom-methods--properties)
4. [Event Handling](#event-handling)
5. [Advanced Topics](#advanced-topics)

---

## 🎯 DOM Concepts Overview

### What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page as a tree structure where each HTML element is a node that can be accessed and manipulated using JavaScript.

### DOM Tree Structure

```
Document
  └── html
      ├── head
      │   ├── title
      │   └── link (stylesheets)
      └── body
          ├── div
          ├── img
          └── script
```

---

## 🚀 Projects

### 1. Add Friend

**Location:** [Add Friend/](Add%20Friend/)

**Concepts Demonstrated:**
- Event listeners (`addEventListener`)
- DOM selection (`querySelector`, `getElementById`)
- Style manipulation (`element.style`)
- Text content modification (`innerHTML`, `innerText`)
- Boolean flags for state management

**How it works:**
- Uses a boolean `flag` variable to track friendship status
- Toggles button text between "Add Friend" and "Remove Friend"
- Changes status text and color dynamically
- Demonstrates state management in vanilla JavaScript

**Key Code:**
```javascript
addFriend.addEventListener("click", () => {
  if (!flag) {
    flag = true;
    addFriend.innerHTML = "Remove Friend";
    isStatus.innerText = "Friends";
    isStatus.style.color = "Green";
  } else {
    flag = false;
    addFriend.innerHTML = "Add Friend";
    isStatus.innerText = "Stranger";
    isStatus.style.color = "#999";
  }
});
```

---

### 2. Custom Cursor

**Location:** [Custom Cursor/](Custom%20Cursor/)

**Concepts Demonstrated:**
- Mouse event tracking (`mousemove`)
- Position manipulation (`element.style.left`, `element.style.top`)
- Event object properties (`dets.x`, `dets.y`)
- CSS positioning (absolute positioning)
- Pointer events manipulation

**How it works:**
- Tracks mouse movement using `mousemove` event
- Updates cursor position based on mouse coordinates
- Uses `transform: translate(-50%, -50%)` for perfect centering
- `pointer-events: none` prevents cursor from interfering with mouse events

**Key Code:**
```javascript
main.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});
```

---

### 3. Insta Love Button

**Location:** [Insta Love Button/](Insta%20Love%20Button/)

**Concepts Demonstrated:**
- Double-click events (`dblclick`)
- Click events (`click`)
- CSS transforms (`scale`, `translate`)
- Timeout functions (`setTimeout`)
- Conditional styling
- CSS transitions

**How it works:**
- Double-clicking the image shows a large heart animation
- Single heart icon toggles between white and red on click
- Uses `transform: scale()` for smooth heart animation
- Automatically hides the big heart after 1 second using `setTimeout`

**Key Code:**
```javascript
post.addEventListener("dblclick", () => {
  smallLove.style.color = "red";
  love.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
```

---

### 4. Insta Story

**Location:** [Insta Story/](Insta%20Story/)

**Concepts Demonstrated:**
- Dynamic HTML generation
- Array manipulation with `forEach`
- Template literals for HTML creation
- Event delegation
- Background image manipulation
- Timed visibility with `setTimeout`
- Data-driven UI

**How it works:**
- Creates story circles dynamically from an array of objects
- Each object contains a display picture (`dp`) and story image
- Clicking a story displays it full-screen for 3 seconds
- Uses `dets.target.id` to identify which story was clicked
- Demonstrates data-driven UI patterns

**Key Code:**
```javascript
arr.forEach(function (elem, idx) {
  slug += `<div id="story"> <img id="${idx}" src="${elem.dp}" /> </div>`;
});

strs.addEventListener("click", (dets) => {
  fs.style.display = "block";
  fs.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    fs.style.display = "none";
  }, 3000);
});
```

---

### 5. Multi Image Hover

**Location:** [Multi Image Hover/](Multi%20Image%20Hover/)

**Concepts Demonstrated:**
- `querySelectorAll` for multiple elements
- `forEach` loop for iteration
- Multiple event listeners on same element
- Mouse enter/leave events
- Opacity manipulation
- Image positioning based on mouse coordinates

**How it works:**
- Selects all elements with class `.elem`
- Attaches three event listeners to each element:
  - `mousemove`: Moves image horizontally with cursor
  - `mouseenter`: Shows image (opacity: 1)
  - `mouseleave`: Hides image (opacity: 0)
- Uses `querySelector` within each element to target specific child

**Key Code:**
```javascript
elems.forEach((elem) => {
  let elemImage = elem.querySelector("img");

  elem.addEventListener("mousemove", (dets) => {
    elemImage.style.left = dets.x + "px";
  });

  elem.addEventListener("mouseenter", () => {
    elemImage.style.opacity = 1;
  });

  elem.addEventListener("mouseleave", () => {
    elemImage.style.opacity = 0;
  });
});
```

---

## 🔧 Core DOM Methods & Properties

### Selecting Elements

#### `getElementById(id)`
Selects a single element by its ID attribute.
```javascript
let element = document.getElementById("container");
```
**Used in:** All projects

---

#### `querySelector(selector)`
Selects the **first** element that matches a CSS selector.
```javascript
let firstElem = document.querySelector(".elem");
let idElement = document.querySelector("#stories");
```
**Used in:** [Add Friend/script.js](Add%20Friend/script.js), [Insta Story/script.js](Insta%20Story/script.js), [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js)

---

#### `querySelectorAll(selector)`
Selects **all** elements that match a CSS selector. Returns a NodeList.
```javascript
let allElems = document.querySelectorAll(".elem");
// Returns: NodeList [element1, element2, element3, ...]
```
**Used in:** [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js)

---

### Modifying Content

#### `innerHTML`
Gets or sets the HTML content inside an element.
```javascript
element.innerHTML = "<h1>New Content</h1>";
```
**Used in:** [Add Friend/script.js](Add%20Friend/script.js), [Insta Story/script.js](Insta%20Story/script.js)

---

#### `innerText`
Gets or sets the visible text content (respects CSS styling).
```javascript
element.innerText = "New Text";
```
**Used in:** [Add Friend/script.js](Add%20Friend/script.js)

---

#### `textContent`
Gets or sets all text content (ignores CSS styling).
```javascript
element.textContent = "Raw text content";
```

**Difference between innerText and textContent:**
- `innerText` respects CSS (won't show hidden text)
- `textContent` returns all text regardless of styling

---

### Modifying Styles

#### `element.style.property`
Directly modifies inline CSS styles.
```javascript
element.style.color = "red";
element.style.fontSize = "20px";
element.style.backgroundColor = "#333";
```
**Used in:** All projects

⚠️ **Note:** CSS properties with hyphens use camelCase in JavaScript:
- CSS: `background-color` → JS: `backgroundColor`
- CSS: `font-size` → JS: `fontSize`

---

### classList (Advanced Styling)

The `classList` property provides methods to manipulate CSS classes on an element.

#### `classList.add(className)`
Adds one or more classes to an element.
```javascript
element.classList.add("active");
element.classList.add("active", "highlighted", "important");
```

---

#### `classList.remove(className)`
Removes one or more classes from an element.
```javascript
element.classList.remove("active");
element.classList.remove("active", "highlighted");
```

---

#### `classList.toggle(className)`
Toggles a class (adds if absent, removes if present).
```javascript
// If element has "active", it removes it
// If element doesn't have "active", it adds it
element.classList.toggle("active");
```

**Better approach for the Add Friend project:**
```javascript
addFriend.addEventListener("click", () => {
  addFriend.classList.toggle("active");
  isStatus.classList.toggle("friend-status");
});
```

---

#### `classList.contains(className)`
Checks if an element has a specific class (returns boolean).
```javascript
if (element.classList.contains("active")) {
  console.log("Element is active!");
}
```

---

#### `classList.replace(oldClass, newClass)`
Replaces one class with another.
```javascript
element.classList.replace("btn-primary", "btn-secondary");
```

---

### Example: classList vs style

```javascript
// Using style (inline CSS - hard to maintain)
element.style.color = "red";
element.style.fontSize = "20px";
element.style.fontWeight = "bold";

// Using classList (better practice)
element.classList.add("error-message");
```

```css
/* CSS file */
.error-message {
  color: red;
  font-size: 20px;
  font-weight: bold;
}
```

**Benefits of classList:**
- Separation of concerns (CSS stays in stylesheets)
- Easier to maintain and modify
- Can apply multiple styles at once
- Better performance
- Easier to debug

---

## 🎪 Event Handling

### addEventListener(event, callback)

The modern way to attach event handlers to elements.

```javascript
element.addEventListener("click", function() {
  // Your code here
});

// Arrow function syntax
element.addEventListener("click", () => {
  // Your code here
});
```

---

### Common Event Types

#### Mouse Events
- `click` - Single click
- `dblclick` - Double click (used in [Insta Love Button/script.js](Insta%20Love%20Button/script.js))
- `mousemove` - Mouse movement (used in [Custom Cursor/script.js](Custom%20Cursor/script.js), [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js))
- `mouseenter` - Mouse enters element (used in [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js))
- `mouseleave` - Mouse leaves element (used in [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js))
- `mousedown` - Mouse button pressed
- `mouseup` - Mouse button released
- `mouseover` - Mouse over element (bubbles)
- `mouseout` - Mouse out of element (bubbles)

---

#### Keyboard Events
- `keydown` - Key is pressed
- `keyup` - Key is released
- `keypress` - Key is pressed (deprecated, use keydown)

```javascript
document.addEventListener("keydown", (e) => {
  console.log(e.key); // Prints the key pressed
});
```

---

#### Form Events
- `submit` - Form submitted
- `input` - Input value changes
- `change` - Input value changes and loses focus
- `focus` - Element receives focus
- `blur` - Element loses focus

```javascript
inputElement.addEventListener("input", (e) => {
  console.log(e.target.value);
});
```

---

#### Window Events
- `load` - Page fully loaded
- `resize` - Window resized
- `scroll` - Page scrolled

```javascript
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});
```

---

### Event Object

When an event occurs, JavaScript creates an event object with useful properties.

```javascript
element.addEventListener("click", (event) => {
  console.log(event.target);    // Element that triggered event
  console.log(event.type);      // Type of event ("click")
  console.log(event.clientX);   // Mouse X coordinate
  console.log(event.clientY);   // Mouse Y coordinate
});
```

**Common Event Properties:**
- `event.target` - Element that triggered the event
- `event.currentTarget` - Element that the listener is attached to
- `event.type` - Type of event
- `event.clientX` / `event.clientY` - Mouse coordinates relative to viewport
- `event.pageX` / `event.pageY` - Mouse coordinates relative to document
- `event.key` - Key pressed (keyboard events)
- `event.preventDefault()` - Prevents default behavior
- `event.stopPropagation()` - Stops event from bubbling

**Used in projects:**
- [Custom Cursor/script.js](Custom%20Cursor/script.js): `dets.x`, `dets.y`
- [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js): `dets.x`
- [Insta Story/script.js](Insta%20Story/script.js): `dets.target.id`

---

## 🎨 Advanced Topics

### 1. Template Literals

Used for creating dynamic HTML strings with embedded expressions.

```javascript
let name = "John";
let age = 25;

// Old way (concatenation)
let html = "<div>" + name + " is " + age + " years old</div>";

// New way (template literals)
let html = `<div>${name} is ${age} years old</div>`;
```

**Multi-line templates:**
```javascript
let card = `
  <div class="card">
    <h1>${title}</h1>
    <p>${description}</p>
  </div>
`;
```

**Used in:** [Insta Story/script.js](Insta%20Story/script.js)

---

### 2. setTimeout & setInterval

#### setTimeout
Executes code after a specified delay (in milliseconds).

```javascript
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

**Used in:** [Insta Love Button/script.js](Insta%20Love%20Button/script.js), [Insta Story/script.js](Insta%20Story/script.js)

---

#### setInterval
Executes code repeatedly at specified intervals.

```javascript
let counter = 0;
let intervalId = setInterval(() => {
  counter++;
  console.log(counter);
  
  if (counter === 5) {
    clearInterval(intervalId); // Stops the interval
  }
}, 1000);
```

---

### 3. Array Methods

#### forEach
Executes a function for each array element.

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
```

**Used in:** [Insta Story/script.js](Insta%20Story/script.js), [Multi Image Hover/script.js](Multi%20Image%20Hover/script.js)

---

#### map
Creates a new array by transforming each element.

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6, 8, 10]
```

---

#### filter
Creates a new array with elements that pass a test.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
// Result: [2, 4]
```

---

#### reduce
Reduces array to a single value.

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
// Result: 15
```

---

### 4. Event Delegation

Instead of adding event listeners to multiple elements, add one listener to a parent element.

```javascript
// ❌ Inefficient
buttons.forEach(button => {
  button.addEventListener("click", handleClick);
});

// ✅ Efficient (Event Delegation)
container.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    handleClick(e);
  }
});
```

**Used in:** [Insta Story/script.js](Insta%20Story/script.js) - clicks on parent `#stories` instead of individual story elements.

---

### 5. Data Attributes

Custom attributes to store data on elements.

```html
<div data-user-id="123" data-role="admin">User Info</div>
```

```javascript
let element = document.querySelector("div");
console.log(element.dataset.userId);  // "123"
console.log(element.dataset.role);    // "admin"

element.dataset.status = "active";
```

---

### 6. Creating Elements Dynamically

#### createElement
```javascript
let div = document.createElement("div");
div.className = "card";
div.innerHTML = "<h1>Title</h1>";
document.body.appendChild(div);
```

---

#### appendChild vs append
```javascript
// appendChild - adds single Node, returns Node
parent.appendChild(childElement);

// append - adds multiple items (Nodes/strings), no return value
parent.append(child1, child2, "text");
```

---

#### insertAdjacentHTML
```javascript
element.insertAdjacentHTML("beforeend", "<div>New Content</div>");
```

Positions:
- `"beforebegin"` - Before the element
- `"afterbegin"` - Inside, before first child
- `"beforeend"` - Inside, after last child
- `"afterend"` - After the element

---

### 7. Removing Elements

```javascript
// Remove element
element.remove();

// Remove child
parent.removeChild(child);

// Clear all children
element.innerHTML = "";
// or
element.replaceChildren();
```

---

### 8. Getting Element Dimensions & Position

```javascript
let rect = element.getBoundingClientRect();
console.log(rect.width);   // Width
console.log(rect.height);  // Height
console.log(rect.top);     // Distance from top of viewport
console.log(rect.left);    // Distance from left of viewport

// Scroll position
console.log(window.scrollY);  // Vertical scroll
console.log(window.scrollX);  // Horizontal scroll

// Element size including padding
console.log(element.offsetWidth);
console.log(element.offsetHeight);

// Element size excluding padding
console.log(element.clientWidth);
console.log(element.clientHeight);
```

---

### 9. CSS Transitions & Transforms (from CSS)

These CSS properties work well with JavaScript DOM manipulation:

```css
/* Smooth transitions */
.element {
  transition: all 0.3s ease;
}

/* Transforms */
.element {
  transform: translate(50px, 100px);   /* Move */
  transform: scale(1.5);                /* Scale */
  transform: rotate(45deg);             /* Rotate */
  transform: skew(10deg, 20deg);        /* Skew */
}

/* Combining transforms */
.element {
  transform: translate(50px, 100px) scale(1.5) rotate(45deg);
}
```

**Used in:** [Insta Love Button/style.css](Insta%20Love%20Button/style.css), [Custom Cursor/style.css](Custom Cursor/style.css)

---

### 10. Event Bubbling & Capturing

When an event occurs on an element, it propagates through the DOM tree.

**Bubbling (default):** Event travels from target → parent → grandparent → document

```javascript
child.addEventListener("click", () => {
  console.log("Child clicked");
});

parent.addEventListener("click", () => {
  console.log("Parent clicked"); // Also fires when child is clicked
});
```

**Stop bubbling:**
```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Only child, parent won't fire");
});
```

**Capturing (rare):** Event travels from document → grandparent → parent → target

```javascript
element.addEventListener("click", handler, true); // true = capture phase
```

---

## 📖 Best Practices

### 1. Use const/let instead of var
```javascript
// ❌ Avoid
var element = document.getElementById("card");

// ✅ Preferred
const element = document.getElementById("card");
```

---

### 2. Cache DOM selections
```javascript
// ❌ Inefficient (queries DOM multiple times)
document.getElementById("btn").style.color = "red";
document.getElementById("btn").style.fontSize = "20px";

// ✅ Efficient (queries once)
const btn = document.getElementById("btn");
btn.style.color = "red";
btn.style.fontSize = "20px";
```

---

### 3. Use classList over style for multiple changes
```javascript
// ❌ Verbose
element.style.color = "red";
element.style.fontSize = "20px";
element.style.fontWeight = "bold";

// ✅ Clean
element.classList.add("error-state");
```

---

### 4. Use event delegation for multiple similar elements
See [Event Delegation](#4-event-delegation) section above.

---

### 5. Remove event listeners when no longer needed
```javascript
function handleClick() {
  console.log("Clicked");
}

element.addEventListener("click", handleClick);

// Later...
element.removeEventListener("click", handleClick);
```

---

### 6. Use textContent for security (XSS prevention)
```javascript
// ❌ Vulnerable to XSS attacks
element.innerHTML = userInput;

// ✅ Safe (renders as text, not HTML)
element.textContent = userInput;
```

---

## 🎓 Learning Path

1. **Start with:** [Add Friend/](Add%20Friend/) - Basic events and styling
2. **Then try:** [Custom Cursor/](Custom%20Cursor/) - Mouse tracking
3. **Next:** [Insta Love Button/](Insta%20Love%20Button/) - Multiple events and animations
4. **Advanced:** [Insta Story/](Insta%20Story/) - Dynamic content generation
5. **Master:** [Multi Image Hover/](Multi%20Image%20Hover/) - Working with multiple elements

---

## 🔗 Quick Reference Links

- **Add Friend:** [index.html](Add%20Friend/index.html) | [script.js](Add%20Friend/script.js) | [style.css](Add%20Friend/style.css)
- **Custom Cursor:** [index.html](Custom%20Cursor/index.html) | [script.js](Custom%20Cursor/script.js) | [style.css](Custom%20Cursor/style.css)
- **Insta Love Button:** [index.html](Insta%20Love%20Button/index.html) | [script.js](Insta%20Love%20Button/script.js) | [style.css](Insta%20Love%20Button/style.css)
- **Insta Story:** [index.html](Insta%20Story/index.html) | [script.js](Insta%20Story/script.js) | [style.css](Insta%20Story/style.css)
- **Multi Image Hover:** [index.html](Multi%20Image%20Hover/index.html) | [script.js](Multi%20Image%20Hover/script.js) | [style.css](Multi%20Image%20Hover/style.css)

---

## 🚀 Next Steps

After mastering these concepts, explore:
- **Local Storage** - Persist data in browser
- **Fetch API** - Make HTTP requests
- **Async/Await** - Handle asynchronous operations
- **Web Components** - Create reusable custom elements
- **Intersection Observer** - Detect element visibility
- **Animation Libraries** - GSAP, Anime.js
- **Frameworks** - React, Vue, Svelte (build on these DOM concepts)

---

**Happy Coding! 🎉**
