export const lesson1Steps = [
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

export const lesson2Steps = [
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
