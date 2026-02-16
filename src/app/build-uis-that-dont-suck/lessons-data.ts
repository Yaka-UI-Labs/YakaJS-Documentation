// Lesson metadata and catalog
export interface LessonMetadata {
  slug: string;
  number: number;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  icon: string; // Heroicon name
  estimatedTime: string;
}

export const lessonsCatalog: LessonMetadata[] = [
  {
    slug: "lesson-1",
    number: 1,
    title: "Getting Started with YakaJS",
    description: "Learn the fundamentals: selecting elements, manipulating text, and method chaining",
    difficulty: "beginner",
    icon: "rocket-launch",
    estimatedTime: "20 min",
  },
  {
    slug: "lesson-2",
    number: 2,
    title: "Events and Interactivity",
    description: "Make your pages interactive with event handling and user interactions",
    difficulty: "beginner",
    icon: "bolt",
    estimatedTime: "18 min",
  },
  {
    slug: "lesson-3",
    number: 3,
    title: "DOM Manipulation Mastery",
    description: "Master adding, removing, and modifying HTML elements dynamically",
    difficulty: "beginner",
    icon: "cube",
    estimatedTime: "22 min",
  },
  {
    slug: "lesson-4",
    number: 4,
    title: "AJAX & API Integration",
    description: "Connect to APIs and fetch data to create dynamic applications",
    difficulty: "intermediate",
    icon: "signal",
    estimatedTime: "25 min",
  },
  {
    slug: "lesson-5",
    number: 5,
    title: "Animations & Visual Effects",
    description: "Bring your UI to life with smooth animations and transitions",
    difficulty: "intermediate",
    icon: "sparkles",
    estimatedTime: "20 min",
  },
  {
    slug: "lesson-6",
    number: 6,
    title: "Forms & User Input",
    description: "Handle forms, validate input, and create great user experiences",
    difficulty: "intermediate",
    icon: "document-text",
    estimatedTime: "24 min",
  },
];

// Lesson step interface
export interface LessonStep {
  title: string;
  content: string;
  keyPoints?: string[];
  codeExample?: {
    initialCode: string;
    expectedOutput?: string;
    hint?: string;
  };
}

export const lesson1Steps: LessonStep[] = [
  {
    title: "Welcome to YakaJS!",
    content: `YakaJS is a powerful JavaScript library that makes DOM manipulation and web development easy and fun!

Think of it like this: Instead of writing long, complex code to interact with your web page, YakaJS gives you simple, intuitive methods to get things done quickly.

In this lesson, you'll learn the very basics of YakaJS by selecting elements and displaying text.`,
    keyPoints: [
      "YakaJS uses the _() function to select elements (similar to jQuery's $)",
      "It makes complex DOM operations simple",
      "The syntax is chainable - you can call multiple methods in a row",
    ],
  },
  {
    title: "Selecting Elements",
    content: `The first thing you need to learn is how to SELECT elements from your web page.

In YakaJS, we use the underscore function: _()

Think of _() as your "element grabber". You tell it WHAT to grab (using CSS selectors), and it finds that element for you.

For example:
- _('#myButton') grabs an element with id="myButton"
- _('.myClass') grabs elements with class="myClass"
- _('p') grabs all paragraph elements`,
    keyPoints: [
      "Use _() to select elements",
      "Put CSS selectors inside the parentheses",
      "Works just like document.querySelector() but simpler!",
    ],
    codeExample: {
      initialCode: `// Try selecting an element!
// This is just practice - no HTML needed
console.log("Selected element:", _('body'));
console.log("Element found!");`,
      expectedOutput: `Selected element: [object Object]
Element found!`,
      hint: "Just run the code as-is to see how _() works! It returns an object representing the selected element.",
    },
  },
  {
    title: "Displaying Text with .text()",
    content: `Once you've selected an element, you can DO THINGS with it!

One of the most common things is setting or getting text content.

The .text() method does two things:
1. If you pass a value: _('#element').text('Hello!') - it SETS the text
2. If you don't pass anything: _('#element').text() - it GETS the current text

Let's practice getting text from elements!`,
    keyPoints: [
      ".text() with an argument sets the text",
      ".text() without arguments gets the text",
      "This works on any HTML element",
    ],
    codeExample: {
      initialCode: `// Let's practice!
// Imagine we have: <p id="greeting">Hello World</p>

// Get the text
const text = "Hello World"; // Simulating _('#greeting').text()
console.log("Current text:", text);

// Now let's set new text
const newText = "Welcome to YakaJS!";
console.log("New text:", newText);`,
      expectedOutput: `Current text: Hello World
New text: Welcome to YakaJS!`,
      hint: "Try changing the newText variable to your own message!",
    },
  },
  {
    title: "Chaining Methods",
    content: `Here's where YakaJS gets REALLY powerful! You can CHAIN methods together.

Instead of writing:
  _('#myDiv').addClass('active');
  _('#myDiv').text('Hello');
  _('#myDiv').fadeIn();

You can write:
  _('#myDiv').addClass('active').text('Hello').fadeIn();

All in ONE line! Each method returns the object, so you can keep calling more methods.

This is called "method chaining" and it makes your code cleaner and faster.`,
    keyPoints: [
      "Chain methods by putting them one after another",
      "Each method returns the object, allowing another method to be called",
      "This makes code more readable and efficient",
    ],
    codeExample: {
      initialCode: `// Let's chain some operations!
// Simulating: _('#box').text('YakaJS').addClass('active')

let text = "YakaJS";
let classes = ["active"];

console.log("Text set to:", text);
console.log("Classes:", classes.join(", "));
console.log("Chaining complete!");`,
      expectedOutput: `Text set to: YakaJS
Classes: active
Chaining complete!`,
      hint: "Notice how we're simulating chaining. In real YakaJS, you'd write: _('#box').text('YakaJS').addClass('active')",
    },
  },
  {
    title: "Your First Challenge!",
    content: `Now it's time to put it all together!

Your challenge: Write code that:
1. Selects an element with ID 'message'
2. Sets its text to "I'm learning YakaJS!"
3. Uses console.log to show a success message

Remember:
- Use _() to select
- Use .text() to set text
- Chain them together if you want!`,
    keyPoints: [
      "Combine what you've learned",
      "Practice makes perfect!",
      "Don't worry if you make mistakes - that's how we learn",
    ],
    codeExample: {
      initialCode: `// Your turn! Complete this code:
// Select element with ID 'message' and set its text

// Simulating the operation:
const elementId = 'message';
const message = ''; // TODO: Add your message here!

console.log(\`Setting text on #\${elementId}:\`, message);

// Add console.log for success message:
// console.log(...);`,
      expectedOutput: `Setting text on #message: I'm learning YakaJS!
Success! You did it!`,
      hint: "Set message to \"I'm learning YakaJS!\" and add console.log(\"Success! You did it!\") at the end",
    },
  },
];

export const lesson2Steps: LessonStep[] = [
  {
    title: "Adding Click Events",
    content: `Now let's make things INTERACTIVE!

Events are actions that happen on your webpage:
- clicks
- mouse movements
- key presses
- form submissions

YakaJS makes handling events super easy with the .on() method.

Syntax: _('#button').on('click', function() { ... })`,
    keyPoints: [
      "Events make your webpage interactive",
      "Use .on() to attach event handlers",
      "Common events: 'click', 'mouseover', 'keypress'",
    ],
    codeExample: {
      initialCode: `// Simulating a click event
// In real code: _('#btn').on('click', function() { ... })

function handleClick() {
    console.log("Button was clicked!");
    console.log("Event handled successfully!");
}

// Simulate the click
handleClick();`,
      expectedOutput: `Button was clicked!
Event handled successfully!`,
      hint: "Try adding more console.log statements inside handleClick to see what else happens when clicked!",
    },
  },
  {
    title: "Event Data and 'this'",
    content: `When an event happens, you get information about it!

Inside your event handler function:
- 'this' refers to the element that triggered the event
- You can use _(this) to work with that element
- Event object contains details about what happened

Example:
_('#btn').on('click', function() {
    _(this).text('Clicked!');
});`,
    keyPoints: [
      "'this' inside the handler is the element that was clicked",
      "Use _(this) to manipulate the clicked element",
      "You can access event details through the event parameter",
    ],
    codeExample: {
      initialCode: `// Simulating event handling with 'this'
const buttonElement = {
    text: "Click me",
    id: "myButton"
};

function handleClick() {
    // In real YakaJS: _(this).text('Clicked!')
    buttonElement.text = "Clicked!";
    
    console.log("Button text changed to:", buttonElement.text);
    console.log("Button ID:", buttonElement.id);
}

handleClick();`,
      expectedOutput: `Button text changed to: Clicked!
Button ID: myButton`,
      hint: "Try changing what the button text becomes!",
    },
  },
];

export const lesson3Steps: LessonStep[] = [
  {
    title: "Adding and Removing Classes",
    content: `CSS classes are one of the most powerful ways to change how elements look!

YakaJS makes it super easy to add, remove, or toggle classes dynamically.

**The methods:**
- .addClass('myClass') - adds a class
- .removeClass('myClass') - removes a class  
- .toggleClass('myClass') - adds if not present, removes if present
- .hasClass('myClass') - checks if class exists

Think of classes as tags you can stick on elements to give them styles!`,
    keyPoints: [
      "addClass/removeClass change element styling",
      "toggleClass is great for switching states (open/closed, active/inactive)",
      "Always use classes for styling, not inline styles when possible",
    ],
    codeExample: {
      initialCode: `// Let's manage classes on an element
const element = {
    classes: ['box']
};

// Add a class
element.classes.push('active');
console.log("After adding 'active':", element.classes.join(' '));

// Add another
element.classes.push('highlight');
console.log("After adding 'highlight':", element.classes.join(' '));

// Remove one
element.classes = element.classes.filter(c => c !== 'active');
console.log("After removing 'active':", element.classes.join(' '));`,
      expectedOutput: `After adding 'active': box active
After adding 'highlight': box active highlight
After removing 'active': box highlight`,
      hint: "In real YakaJS: _('#box').addClass('active').addClass('highlight').removeClass('active')",
    },
  },
  {
    title: "Showing and Hiding Elements",
    content: `Making elements appear and disappear is a common need in web development!

YakaJS provides simple methods:
- .show() - makes element visible
- .hide() - makes element invisible
- .toggle() - switches between shown and hidden

These methods are smart - they remember the element's original display value!

Use cases:
- Dropdown menus
- Modal dialogs
- Collapsible sections
- Loading indicators`,
    keyPoints: [
      "show/hide modify the display CSS property",
      "toggle() is perfect for open/close interactions",
      "These maintain the element in the DOM (unlike remove)",
    ],
    codeExample: {
      initialCode: `// Simulating show/hide functionality
let element = {
    display: 'block',
    visible: true
};

// Hide it
element.visible = false;
element.display = 'none';
console.log("Hidden - Display:", element.display);

// Show it again
element.visible = true;
element.display = 'block';
console.log("Shown - Display:", element.display);

// Toggle it
element.visible = !element.visible;
element.display = element.visible ? 'block' : 'none';
console.log("Toggled - Display:", element.display);`,
      expectedOutput: `Hidden - Display: none
Shown - Display: block
Toggled - Display: none`,
      hint: "In YakaJS: _('#menu').hide().show().toggle() chains them all together!",
    },
  },
  {
    title: "Creating and Adding Elements",
    content: `Now let's create NEW elements and add them to the page!

YakaJS can create elements on the fly:
- _('<div>') creates a new div
- _('<p>Hello</p>') creates a paragraph with text
- .append() adds to the end inside an element
- .prepend() adds to the beginning inside an element
- .after() adds after an element
- .before() adds before an element

This is incredibly powerful for dynamic content!`,
    keyPoints: [
      "Create elements using HTML strings in _()",
      "append/prepend add INSIDE a container",
      "after/before add NEXT TO an element",
    ],
    codeExample: {
      initialCode: `// Simulating dynamic element creation
const container = {
    children: ['<p>First item</p>']
};

// Append to end
container.children.push('<p>Appended item</p>');
console.log("After append:", container.children.length, "children");

// Prepend to beginning  
container.children.unshift('<p>Prepended item</p>');
console.log("After prepend:", container.children.length, "children");

// Show all
console.log("All children:");
container.children.forEach((child, i) => {
    console.log(\`  \${i + 1}. \${child}\`);
});`,
      expectedOutput: `After append: 2 children
After prepend: 3 children
All children:
  1. <p>Prepended item</p>
  2. <p>First item</p>
  3. <p>Appended item</p>`,
      hint: "In YakaJS: _('#container').append('<p>New item</p>')",
    },
  },
  {
    title: "Removing Elements",
    content: `Sometimes you need to DELETE elements from the page entirely.

Methods for removal:
- .remove() - removes the element from the DOM
- .empty() - removes all children but keeps the element
- .html('') - clears HTML content

**Important difference:**
- hide() keeps the element (just invisible)
- remove() deletes it completely

Use cases:
- Deleting items from a list
- Clearing a container
- Removing temporary notifications`,
    keyPoints: [
      "remove() deletes the element permanently",
      "empty() removes only the children",
      "You can't show() a removed element - it's gone!",
    ],
    codeExample: {
      initialCode: `// Simulating element removal
let items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
];

console.log("Initial items:", items.length);

// Remove item with id 2
items = items.filter(item => item.id !== 2);
console.log("After removing item 2:", items.length);

// Show remaining
items.forEach(item => {
    console.log(\`  - \${item.text}\`);
});

// Clear all (empty)
items = [];
console.log("After clearing all:", items.length);`,
      expectedOutput: `Initial items: 3
After removing item 2: 2
  - Item 1
  - Item 3
After clearing all: 0`,
      hint: "In YakaJS: _('#item-2').remove() or _('#container').empty()",
    },
  },
  {
    title: "Manipulating HTML Content",
    content: `You can get and set the entire HTML content of elements!

The .html() method:
- .html() - gets the HTML content
- .html('<b>New HTML</b>') - sets HTML content

**Difference from .text():**
- .text() treats everything as plain text
- .html() interprets HTML tags

Be careful: Only set HTML from trusted sources to avoid security issues!`,
    keyPoints: [
      "html() can get or set inner HTML",
      "Use html() when you need formatting/structure",
      "Use text() when you just need plain text",
    ],
    codeExample: {
      initialCode: `// Simulating HTML manipulation
let element = {
    html: '<span>Original</span>'
};

console.log("Original HTML:", element.html);

// Set new HTML with formatting
element.html = '<b>Bold</b> and <i>italic</i> text';
console.log("New HTML:", element.html);

// Complex HTML
element.html = \`
<div class="card">
    <h3>Card Title</h3>
    <p>Card content</p>
</div>\`.trim();
console.log("Complex HTML set!");
console.log("Length:", element.html.length, "characters");`,
      expectedOutput: `Original HTML: <span>Original</span>
New HTML: <b>Bold</b> and <i>italic</i> text
Complex HTML set!
Length: 85 characters`,
      hint: "In YakaJS: _('#content').html('<b>New</b> content')",
    },
  },
  {
    title: "Practice Challenge: Dynamic List",
    content: `Time to put it all together! Let's create a dynamic todo list.

Your challenge:
1. Create an array of tasks
2. Add a new task to the array
3. Remove a task from the array
4. Show the final list

This simulates a real todo list app!`,
    keyPoints: [
      "Combine all the DOM manipulation techniques",
      "Think about how this applies to real apps",
      "Practice makes perfect!",
    ],
    codeExample: {
      initialCode: `// Build a dynamic todo list!
let todos = [
    'Learn YakaJS basics',
    'Practice DOM manipulation'
];

console.log("Initial todos:");
todos.forEach((todo, i) => console.log(\`  \${i + 1}. \${todo}\`));

// TODO: Add a new todo "Build a project"
// todos.push(...);

// TODO: Remove the first todo (it's complete!)
// todos = todos.filter(...);

console.log("\\nFinal todos:");
todos.forEach((todo, i) => console.log(\`  \${i + 1}. \${todo}\`));`,
      expectedOutput: `Initial todos:
  1. Learn YakaJS basics
  2. Practice DOM manipulation

Final todos:
  1. Practice DOM manipulation
  2. Build a project`,
      hint: "Use todos.push('Build a project') and todos = todos.filter((todo, i) => i !== 0)",
    },
  },
];

export const lesson4Steps: LessonStep[] = [
  {
    title: "What is AJAX?",
    content: `AJAX stands for Asynchronous JavaScript And XML (though we usually use JSON now!).

It lets you:
- Load data from a server without refreshing the page
- Send data to a server in the background  
- Update parts of a page dynamically

Think of it like this: Instead of reloading the entire web page when you need new data, AJAX lets you fetch just the data you need and update only the parts that changed.

Real-world examples:
- Loading new posts as you scroll (infinite scroll)
- Searching without page reload (autocomplete)
- Submitting forms without page refresh`,
    keyPoints: [
      "AJAX = loading data without page refresh",
      "Makes websites feel faster and more responsive",
      "Essential for modern web applications",
    ],
  },
  {
    title: "Making GET Requests",
    content: `The most common AJAX operation is fetching data from an API.

YakaJS makes this super simple with the .ajax() or .get() methods:

\`\`\`javascript
_().ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: function(response) {
        console.log('Data received:', response);
    }
});
\`\`\`

Or even simpler:
\`\`\`javascript
_().get('https://api.example.com/data', function(response) {
    console.log(response);
});
\`\`\``,
    keyPoints: [
      "GET is for retrieving data",
      "The success callback runs when data arrives",
      "Response contains the data from the server",
    ],
    codeExample: {
      initialCode: `// Simulating an AJAX GET request
function simulateAPICall(url) {
    // Simulating API response
    return {
        status: 200,
        data: {
            users: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' }
            ]
        }
    };
}

// Make the "request"
const response = simulateAPICall('/api/users');

console.log("Status:", response.status);
console.log("Users received:", response.data.users.length);
response.data.users.forEach(user => {
    console.log(\`  - \${user.name} (ID: \${user.id})\`);
});`,
      expectedOutput: `Status: 200
Users received: 2
  - Alice (ID: 1)
  - Bob (ID: 2)`,
      hint: "In real YakaJS: _().get('/api/users', function(data) { /* use data */ })",
    },
  },
  {
    title: "Sending Data with POST",
    content: `When you need to SEND data to the server (like submitting a form), use POST.

YakaJS POST syntax:

\`\`\`javascript
_().ajax({
    url: '/api/users',
    method: 'POST',
    data: { name: 'Charlie', email: 'charlie@example.com' },
    success: function(response) {
        console.log('User created:', response);
    }
});
\`\`\`

Common POST use cases:
- Creating new records
- Submitting forms
- User registration/login
- Uploading data`,
    keyPoints: [
      "POST sends data TO the server",
      "Data is usually sent as JSON",
      "Server responds with confirmation or new record details",
    ],
    codeExample: {
      initialCode: `// Simulating a POST request
function simulatePost(url, data) {
    // Simulating server response
    return {
        status: 201, // Created
        message: 'User created successfully',
        data: {
            id: 3,
            ...data,
            createdAt: new Date().toISOString()
        }
    };
}

// Data to send
const newUser = {
    name: 'Charlie',
    email: 'charlie@example.com'
};

console.log("Sending data:", newUser);

// Send the request
const response = simulatePost('/api/users', newUser);

console.log("Status:", response.status);
console.log("Message:", response.message);
console.log("Created user ID:", response.data.id);`,
      expectedOutput: `Sending data: { name: 'Charlie', email: 'charlie@example.com' }
Status: 201
Message: User created successfully
Created user ID: 3`,
      hint: "In real YakaJS: _().post('/api/users', userData, function(response) { /* handle */ })",
    },
  },
  {
    title: "Handling Errors",
    content: `Networks aren't perfect - requests can fail!

Always handle errors in your AJAX calls:

\`\`\`javascript
_().ajax({
    url: '/api/data',
    method: 'GET',
    success: function(data) {
        console.log('Success!', data);
    },
    error: function(xhr, status, error) {
        console.error('Failed:', error);
    }
});
\`\`\`

Common error scenarios:
- Network is down
- Server error (500)
- Not found (404)
- Unauthorized (401)
- Timeout`,
    keyPoints: [
      "Always include error handling",
      "Show user-friendly error messages",
      "Log errors for debugging",
    ],
    codeExample: {
      initialCode: `// Simulating error handling
function makeRequest(url) {
    // Simulate random success/failure
    const success = Math.random() > 0.3; // 70% success rate
    
    if (success) {
        return {
            ok: true,
            data: { message: 'Data loaded!' }
        };
    } else {
        return {
            ok: false,
            error: 'Network error: Could not reach server'
        };
    }
}

// Make request
const result = makeRequest('/api/data');

if (result.ok) {
    console.log("✓ Success:", result.data.message);
} else {
    console.log("✗ Error:", result.error);
    console.log("Please try again later");
}`,
      expectedOutput: `✓ Success: Data loaded!`,
      hint: "Try running multiple times - sometimes you'll see errors! In real apps: _().ajax({ success: ..., error: ... })",
    },
  },
  {
    title: "Working with JSON",
    content: `JSON (JavaScript Object Notation) is the standard format for API data.

YakaJS automatically:
- Converts JavaScript objects to JSON when sending
- Parses JSON responses into JavaScript objects

Example JSON:
\`\`\`json
{
    "name": "YakaJS",
    "version": "1.0.0",
    "features": ["DOM", "AJAX", "Events"]
}
\`\`\`

You can then access: data.name, data.version, etc.`,
    keyPoints: [
      "JSON is just text that looks like JavaScript objects",
      "YakaJS handles JSON conversion automatically",
      "You work with regular JavaScript objects",
    ],
    codeExample: {
      initialCode: `// Working with JSON data
const jsonString = '{"product":"Laptop","price":999,"inStock":true}';

// Parse JSON to object
const product = JSON.parse(jsonString);

console.log("Product:", product.product);
console.log("Price: $" + product.price);
console.log("In stock:", product.inStock);

// Convert object back to JSON
const newProduct = {
    product: "Phone",
    price: 599,
    inStock: false
};

const jsonOutput = JSON.stringify(newProduct);
console.log("\\nJSON string:", jsonOutput);`,
      expectedOutput: `Product: Laptop
Price: $999
In stock: true

JSON string: {"product":"Phone","price":599,"inStock":false}`,
      hint: "YakaJS does JSON.parse() and JSON.stringify() automatically in AJAX calls!",
    },
  },
  {
    title: "Real API Challenge",
    content: `Let's simulate a complete user registration flow!

Your task:
1. Validate the user data
2. Send a POST request to register
3. Handle the response
4. Show success or error message

This is exactly how real signup forms work!`,
    keyPoints: [
      "Validate data before sending",
      "Handle both success and error cases",
      "Give users clear feedback",
    ],
    codeExample: {
      initialCode: `// User registration simulation
const userData = {
    username: 'newuser',
    email: 'user@example.com',
    password: 'secret123'
};

// Validate
function validate(data) {
    if (data.username.length < 3) return "Username too short";
    if (!data.email.includes('@')) return "Invalid email";
    if (data.password.length < 6) return "Password too short";
    return null; // Valid!
}

const error = validate(userData);

if (error) {
    console.log("✗ Validation failed:", error);
} else {
    console.log("✓ Validation passed");
    console.log("Registering user:", userData.username);
    // Simulate API call
    console.log("✓ Registration successful!");
    console.log("Welcome,", userData.username + "!");
}`,
      expectedOutput: `✓ Validation passed
Registering user: newuser
✓ Registration successful!
Welcome, newuser!`,
      hint: "Try changing userData to invalid values to see validation in action!",
    },
  },
];

export const lesson5Steps: LessonStep[] = [
  {
    title: "Why Animations Matter",
    content: `Animations make your website feel alive and professional!

Good animations:
- Guide user attention to important changes
- Make interactions feel smooth and natural
- Provide feedback that something happened
- Make your site memorable

YakaJS provides easy methods for common animations:
- Fading in/out
- Sliding up/down
- Custom animations

Even small animations greatly improve user experience!`,
    keyPoints: [
      "Animations enhance user experience",
      "Use them to show state changes",
      "Keep them quick (200-500ms usually)",
    ],
  },
  {
    title: "Fade Effects",
    content: `Fading is one of the smoothest ways to show/hide elements.

YakaJS fade methods:
- .fadeIn(duration) - fades element in
- .fadeOut(duration) - fades element out
- .fadeToggle(duration) - toggles between faded in/out
- .fadeTo(duration, opacity) - fades to specific opacity

\`\`\`javascript
_('#message').fadeIn(300);
_('#alert').fadeOut(500);
_('#menu').fadeToggle();
_('#overlay').fadeTo(1000, 0.5); // 50% opacity
\`\`\`

Duration is in milliseconds (1000 = 1 second).`,
    keyPoints: [
      "fadeIn/fadeOut are smoother than show/hide",
      "Duration controls speed (shorter = faster)",
      "fadeTo lets you control final opacity",
    ],
    codeExample: {
      initialCode: `// Simulating fade animations
let element = {
    opacity: 1,
    display: 'block'
};

console.log("Initial state - Opacity:", element.opacity);

// Fade out
element.opacity = 0;
element.display = 'none';
console.log("After fadeOut - Opacity:", element.opacity);

// Fade in
element.display = 'block';
element.opacity = 1;
console.log("After fadeIn - Opacity:", element.opacity);

// Fade to 50%
element.opacity = 0.5;
console.log("After fadeTo(0.5) - Opacity:", element.opacity);`,
      expectedOutput: `Initial state - Opacity: 1
After fadeOut - Opacity: 0
After fadeIn - Opacity: 1
After fadeTo(0.5) - Opacity: 0.5`,
      hint: "In YakaJS: _('#element').fadeOut(500).fadeIn(500) chains animations!",
    },
  },
  {
    title: "Slide Effects",
    content: `Sliding animations are perfect for dropdowns, accordions, and panels!

YakaJS slide methods:
- .slideUp(duration) - slides element up and hides
- .slideDown(duration) - slides element down and shows
- .slideToggle(duration) - toggles between up/down

\`\`\`javascript
_('#dropdown').slideDown(300);
_('#panel').slideUp(400);
_('#accordion').slideToggle(350);
\`\`\`

Common uses:
- Dropdown menus
- Accordion panels
- Mobile navigation
- Collapsible sections`,
    keyPoints: [
      "Slide effects change height smoothly",
      "Perfect for vertical hiding/showing",
      "Great for mobile-friendly interfaces",
    ],
    codeExample: {
      initialCode: `// Simulating slide animations
let panel = {
    height: 200,
    visible: true
};

console.log("Initial - Height:", panel.height + "px", "Visible:", panel.visible);

// Slide up (hide)
panel.height = 0;
panel.visible = false;
console.log("After slideUp - Height:", panel.height + "px");

// Slide down (show)
panel.height = 200;
panel.visible = true;
console.log("After slideDown - Height:", panel.height + "px");

// Toggle
panel.visible = !panel.visible;
panel.height = panel.visible ? 200 : 0;
console.log("After slideToggle - Height:", panel.height + "px");`,
      expectedOutput: `Initial - Height: 200px Visible: true
After slideUp - Height: 0px
After slideDown - Height: 200px
After slideToggle - Height: 0px`,
      hint: "In YakaJS: _('#menu').slideToggle(300) for smooth open/close!",
    },
  },
  {
    title: "Custom Animations",
    content: `For more control, use the .animate() method to create custom animations!

Syntax:
\`\`\`javascript
_('#box').animate({
    width: '300px',
    height: '200px',
    opacity: 0.5
}, 1000); // 1 second duration
\`\`\`

You can animate:
- Dimensions (width, height, padding, margin)
- Opacity
- Position (top, left, right, bottom)
- Any numeric CSS property

YakaJS handles the smooth transition for you!`,
    keyPoints: [
      "animate() gives you full control",
      "Pass an object of CSS properties to animate",
      "All properties animate simultaneously",
    ],
    codeExample: {
      initialCode: `// Simulating custom animation
let box = {
    width: 100,
    height: 100,
    opacity: 1,
    left: 0
};

console.log("Start:", box);

// Animate multiple properties
box.width = 200;
box.height = 150;
box.opacity = 0.7;
box.left = 50;

console.log("After animate:", {
    width: box.width + "px",
    height: box.height + "px",
    opacity: box.opacity,
    left: box.left + "px"
});

console.log("\\nAnimation complete!");`,
      expectedOutput: `Start: { width: 100, height: 100, opacity: 1, left: 0 }
After animate: { width: '200px', height: '150px', opacity: 0.7, left: '50px' }

Animation complete!`,
      hint: "In YakaJS: _('#box').animate({ width: '200px', opacity: 0.7 }, 500)",
    },
  },
  {
    title: "Animation Callbacks",
    content: `Sometimes you want to DO SOMETHING after an animation finishes.

All animation methods accept a callback function:

\`\`\`javascript
_('#alert').fadeOut(300, function() {
    _(this).remove(); // Remove after fading out
});
\`\`\`

Or:
\`\`\`javascript
_('#panel').slideDown(400, function() {
    console.log('Panel is now visible!');
});
\`\`\`

This is perfect for chaining actions!`,
    keyPoints: [
      "Callbacks run AFTER the animation completes",
      "'this' refers to the animated element",
      "Use callbacks to chain multiple actions",
    ],
    codeExample: {
      initialCode: `// Simulating animation callbacks
function fadeOut(element, callback) {
    element.opacity = 0;
    console.log("Fading out...");
    // Simulate animation duration
    console.log("Animation complete!");
    callback();
}

let notification = { opacity: 1, removed: false };

fadeOut(notification, function() {
    notification.removed = true;
    console.log("Callback executed!");
    console.log("Notification removed:", notification.removed);
});`,
      expectedOutput: `Fading out...
Animation complete!
Callback executed!
Notification removed: true`,
      hint: "In YakaJS: _('#msg').fadeOut(500, function() { _(this).remove(); })",
    },
  },
  {
    title: "Animation Challenge: Notification System",
    content: `Create a notification that:
1. Fades in when created
2. Stays visible for a moment
3. Fades out after a delay
4. Gets removed after fading

This is how real notification systems work!`,
    keyPoints: [
      "Chain animations for complex effects",
      "Use delays between animations",
      "Clean up after animations complete",
    ],
    codeExample: {
      initialCode: `// Build a notification system!
let notification = {
    message: "Settings saved!",
    opacity: 0,
    visible: false
};

// Step 1: Show notification
notification.visible = true;
notification.opacity = 1;
console.log("✓ Notification appeared:", notification.message);

// Step 2: Wait a moment
console.log("Waiting 3 seconds...");

// Step 3: Fade out (simulate)
notification.opacity = 0;
console.log("✓ Notification fading out...");

// Step 4: Remove
notification.visible = false;
console.log("✓ Notification removed");

console.log("\\nFinal state - Visible:", notification.visible);`,
      expectedOutput: `✓ Notification appeared: Settings saved!
Waiting 3 seconds...
✓ Notification fading out...
✓ Notification removed

Final state - Visible: false`,
      hint: "In real YakaJS: _('#notif').fadeIn(300).delay(3000).fadeOut(300, function() { _(this).remove(); })",
    },
  },
];

export const lesson6Steps: LessonStep[] = [
  {
    title: "Working with Form Values",
    content: `Forms are how users input data! YakaJS makes handling forms super easy.

Getting values:
\`\`\`javascript
const username = _('#username').val();
const email = _('#email').val();
const isChecked = _('#agree').is(':checked');
\`\`\`

Setting values:
\`\`\`javascript
_('#username').val('JohnDoe');
_('#email').val('john@example.com');
_('#agree').prop('checked', true);
\`\`\`

The .val() method works with:
- Text inputs
- Textareas
- Select dropdowns
- Checkboxes
- Radio buttons`,
    keyPoints: [
      ".val() gets or sets form field values",
      ".val() without arguments gets the value",
      ".val('text') sets the value",
    ],
    codeExample: {
      initialCode: `// Simulating form field operations
let formFields = {
    username: '',
    email: '',
    agreeTerms: false
};

// Get current values
console.log("Initial values:");
console.log("  Username:", formFields.username || "(empty)");
console.log("  Email:", formFields.email || "(empty)");
console.log("  Agreed to terms:", formFields.agreeTerms);

// Set new values
formFields.username = 'JohnDoe';
formFields.email = 'john@example.com';
formFields.agreeTerms = true;

console.log("\\nAfter setting values:");
console.log("  Username:", formFields.username);
console.log("  Email:", formFields.email);
console.log("  Agreed to terms:", formFields.agreeTerms);`,
      expectedOutput: `Initial values:
  Username: (empty)
  Email: (empty)
  Agreed to terms: false

After setting values:
  Username: JohnDoe
  Email: john@example.com
  Agreed to terms: true`,
      hint: "In YakaJS: const val = _('#field').val() or _('#field').val('new value')",
    },
  },
  {
    title: "Form Validation Basics",
    content: `Never trust user input! Always validate before submitting.

Common validations:
- Required fields (not empty)
- Email format
- Password strength
- Matching passwords
- Number ranges
- Text length

\`\`\`javascript
const email = _('#email').val();
if (!email.includes('@')) {
    alert('Please enter a valid email');
    return false;
}
\`\`\`

Good validation provides clear, helpful error messages!`,
    keyPoints: [
      "Validate on client-side for good UX",
      "Always validate on server-side too for security",
      "Show specific error messages",
    ],
    codeExample: {
      initialCode: `// Form validation example
const formData = {
    username: 'user',
    email: 'notanemail',
    password: '123',
    confirmPassword: '456'
};

const errors = [];

// Validate username
if (formData.username.length < 3) {
    errors.push("Username must be at least 3 characters");
}

// Validate email
if (!formData.email.includes('@')) {
    errors.push("Email must be valid");
}

// Validate password
if (formData.password.length < 6) {
    errors.push("Password must be at least 6 characters");
}

// Validate password match
if (formData.password !== formData.confirmPassword) {
    errors.push("Passwords must match");
}

// Show results
if (errors.length > 0) {
    console.log("✗ Validation failed:");
    errors.forEach(error => console.log("  - " + error));
} else {
    console.log("✓ All validations passed!");
}`,
      expectedOutput: `✗ Validation failed:
  - Email must be valid
  - Password must be at least 6 characters
  - Passwords must match`,
      hint: "Fix the formData values to pass all validations!",
    },
  },
  {
    title: "Form Submission",
    content: `Handling form submission properly is crucial!

Prevent default submission:
\`\`\`javascript
_('#myForm').on('submit', function(e) {
    e.preventDefault(); // Stop normal submission
    
    // Your validation and AJAX here
    const formData = {
        name: _('#name').val(),
        email: _('#email').val()
    };
    
    _().post('/api/submit', formData, function(response) {
        console.log('Submitted!', response);
    });
});
\`\`\`

Steps:
1. Prevent default submission
2. Validate form data
3. Send via AJAX if valid
4. Show success/error message`,
    keyPoints: [
      "Always use e.preventDefault() to stop page reload",
      "Validate before submitting",
      "Give users clear feedback",
    ],
    codeExample: {
      initialCode: `// Form submission flow
const formData = {
    name: 'Alice',
    email: 'alice@example.com',
    message: 'Hello YakaJS!'
};

console.log("Form submitted!");
console.log("Data:", formData);

// Validate
const isValid = formData.name && 
                formData.email.includes('@') && 
                formData.message.length > 0;

if (isValid) {
    console.log("\\n✓ Validation passed");
    console.log("Sending to server...");
    
    // Simulate server response
    const response = {
        success: true,
        message: "Form submitted successfully!"
    };
    
    console.log("✓ Server response:", response.message);
} else {
    console.log("\\n✗ Validation failed");
    console.log("Please fix errors and try again");
}`,
      expectedOutput: `Form submitted!
Data: { name: 'Alice', email: 'alice@example.com', message: 'Hello YakaJS!' }

✓ Validation passed
Sending to server...
✓ Server response: Form submitted successfully!`,
      hint: "Try changing formData to invalid values to see validation fail!",
    },
  },
  {
    title: "Real-time Validation",
    content: `The best user experience validates as the user types!

Listen for input changes:
\`\`\`javascript
_('#email').on('input', function() {
    const value = _(this).val();
    if (value.includes('@')) {
        _(this).removeClass('error').addClass('valid');
    } else {
        _(this).removeClass('valid').addClass('error');
    }
});
\`\`\`

Benefits:
- Immediate feedback
- Users fix errors right away
- Better user experience
- Fewer submission failures`,
    keyPoints: [
      "Use 'input' event for real-time validation",
      "Add/remove CSS classes to show validity",
      "Keep validation logic reusable",
    ],
    codeExample: {
      initialCode: `// Real-time email validation
function validateEmail(email) {
    const hasAt = email.includes('@');
    const hasDot = email.includes('.');
    const longEnough = email.length >= 5;
    
    return hasAt && hasDot && longEnough;
}

// Simulate typing
const emailStates = [
    'a',
    'alice',
    'alice@',
    'alice@ex',
    'alice@example.com'
];

console.log("Typing email in real-time:\\n");

emailStates.forEach(email => {
    const isValid = validateEmail(email);
    const status = isValid ? '✓ Valid' : '✗ Invalid';
    console.log(\`"\${email}" - \${status}\`);
});`,
      expectedOutput: `Typing email in real-time:

"a" - ✗ Invalid
"alice" - ✗ Invalid
"alice@" - ✗ Invalid
"alice@ex" - ✗ Invalid
"alice@example.com" - ✓ Valid`,
      hint: "In YakaJS: _('#email').on('input', function() { validate(_(this).val()); })",
    },
  },
  {
    title: "Working with Select Dropdowns",
    content: `Dropdowns (select elements) work slightly differently.

Getting selected value:
\`\`\`javascript
const country = _('#country').val();
\`\`\`

Setting selected value:
\`\`\`javascript
_('#country').val('USA');
\`\`\`

Getting selected text:
\`\`\`javascript
const text = _('#country option:selected').text();
\`\`\`

Listen for changes:
\`\`\`javascript
_('#country').on('change', function() {
    console.log('Selected:', _(this).val());
});
\`\`\``,
    keyPoints: [
      ".val() works with dropdowns too",
      "Use 'change' event to detect selection",
      "Can get both value and displayed text",
    ],
    codeExample: {
      initialCode: `// Working with dropdown selections
const countries = [
    { value: 'us', text: 'United States' },
    { value: 'uk', text: 'United Kingdom' },
    { value: 'ca', text: 'Canada' }
];

let selectedValue = '';

console.log("Available options:");
countries.forEach(country => {
    console.log(\`  \${country.value}: \${country.text}\`);
});

// User selects "Canada"
selectedValue = 'ca';
const selectedCountry = countries.find(c => c.value === selectedValue);

console.log("\\nUser selected:");
console.log("  Value:", selectedValue);
console.log("  Text:", selectedCountry.text);`,
      expectedOutput: `Available options:
  us: United States
  uk: United Kingdom
  ca: Canada

User selected:
  Value: ca
  Text: Canada`,
      hint: "In YakaJS: _('#country').val('ca') sets selection, _('#country').val() gets it",
    },
  },
  {
    title: "Complete Contact Form Challenge",
    content: `Build a complete contact form with validation!

Requirements:
1. Validate name (required, min 2 chars)
2. Validate email (required, must contain @)
3. Validate message (required, min 10 chars)
4. Show specific errors for each field
5. Only submit if all valid
6. Show success message

This is a real-world form implementation!`,
    keyPoints: [
      "Validate each field separately",
      "Collect all errors before showing",
      "Clear errors when fixing",
    ],
    codeExample: {
      initialCode: `// Complete contact form validation!
const contactForm = {
    name: '',
    email: 'contact@example.com',
    message: 'I love YakaJS! It makes web development so much easier.'
};

function validateForm(form) {
    const errors = [];
    
    // TODO: Validate name (min 2 chars)
    // if (form.name.length < 2) errors.push(...);
    
    // TODO: Validate email (must have @)
    // if (!form.email.includes('@')) errors.push(...);
    
    // TODO: Validate message (min 10 chars)
    // if (form.message.length < 10) errors.push(...);
    
    return errors;
}

const errors = validateForm(contactForm);

if (errors.length > 0) {
    console.log("✗ Form has errors:");
    errors.forEach(e => console.log("  -", e));
} else {
    console.log("✓ Form is valid!");
    console.log("Submitting:", contactForm);
}`,
      expectedOutput: `✗ Form has errors:
  - Name is required (min 2 characters)`,
      hint: "Add the validation checks! Form needs a name to be valid.",
    },
  },
];

// Helper function to get lesson by slug
export function getLessonBySlug(slug: string) {
  const metadata = lessonsCatalog.find(lesson => lesson.slug === slug);
  if (!metadata) return null;

  const stepsMap: Record<string, LessonStep[]> = {
    'lesson-1': lesson1Steps,
    'lesson-2': lesson2Steps,
    'lesson-3': lesson3Steps,
    'lesson-4': lesson4Steps,
    'lesson-5': lesson5Steps,
    'lesson-6': lesson6Steps,
  };
  
  const steps = stepsMap[slug];
  if (!steps) return null;

  return { metadata, steps };
}

// Helper function to get next/prev lesson
export function getAdjacentLessons(currentSlug: string) {
  const currentIndex = lessonsCatalog.findIndex(lesson => lesson.slug === currentSlug);
  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? lessonsCatalog[currentIndex - 1] : null,
    next: currentIndex < lessonsCatalog.length - 1 ? lessonsCatalog[currentIndex + 1] : null,
  };
}
