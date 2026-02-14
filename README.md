# Hey, this is YakaJS! 👋

<img src="https://via.placeholder.com/1200x400/6366f1/ffffff?text=YakaJS+%F0%9F%9A%80+Next-Gen+JavaScript+Library">

<a href="https://github.com/Yaka-UI-Labs/YakaJS"><img src="https://img.shields.io/badge/version-1.1.0-blue.svg"></a>
<a><img src="https://img.shields.io/badge/license-MIT-green.svg"></a>
<a><img src="https://img.shields.io/badge/size-151%20KB%20minified-success.svg"></a>
<a href="https://cdn.jsdelivr.net/gh/Yaka-UI-Labs/YakaJS@latest/dist/min.yaka.js"><img src="https://img.shields.io/badge/CDN-jsDelivr-orange.svg"></a>
<a><img src="https://img.shields.io/badge/📚-Documentation-brightgreen.svg"></a>

Yes, we're building a JavaScript library **on GitHub**. In fact, we've been doing this since we made our first commit and pushed **9,504 lines** of pure JavaScript magic 🪄. We've implemented **150+ features**, compressed our code by **56%**, and even added **voice commands** 🎤 (because why not?). But that's just us. We are proud to be building a library for developers, designers, and yes, even robots 🤖 across the internet. Yes, Robots!

## 🍿 What is YakaJS?

Think jQuery meets modern JavaScript. But with superpowers 🦸. YakaJS is a next-gen JavaScript library that's:

- **🎤 Voice-Controlled** - The ONLY library with built-in voice commands (seriously, try saying "click button" to control your app!)
- **⚡ Lightning Fast** - Batched DOM operations prevent layout thrashing
- **🎨 Feature-Rich** - 150+ features including animations, routing, state management, and more
- **🔒 Secure by Default** - Built-in XSS protection, CSRF tokens, and input sanitization
- **📦 Tiny** - Just 151 KB minified (that's 56% smaller than the source!)
- **🛡️ Never Crashes** - Safe-mode chaining with `_.safe()` prevents those annoying "Cannot read property of undefined" errors
- **💎 Developer-Friendly** - If jQuery and modern frameworks had a baby, it would be YakaJS

Now that we are talking about the important things, ☝️ are you tired of jQuery being outdated? Yes? Want something modern but simple? Okay, you rock! 🎸

## 🦦 Contributing to the Ecosystem

We contribute to making the web better by providing tools that are:

- **Simple** - No build step required, just add a `<script>` tag
- **Powerful** - Features you won't find in any other single library
- **Open Source** - MIT licensed and community-driven
- **Well-Documented** - 12 interactive demos with beautiful UI

Here's what makes us unique:

### 🎤 Voice Commands (Our Viral Feature!)

```javascript
// Control your app with your voice!
_.voice.listen({
    'click button': () => _('#myButton').click(),
    'show menu': () => _('#menu').show(),
    'scroll down': () => window.scrollBy(0, 100)
});
```

**This is the ONLY JavaScript library with built-in voice commands.** No other library has this. Not jQuery. Not React. Not Vue. Just us. 🎉

### 🚀 And 20 More Premium Features

YakaJS v1.1.0 includes **21 brand-new premium features** that make it stand out:

#### 🔥 High-Impact Features
1. **Offline Detection** - Know when your users lose connection
2. **Clipboard Read** - Async clipboard access made easy
3. **WebSocket Wrapper** - Real-time communication simplified
4. **Loading States** - Automatic button loading indicators
5. **Native Share API** - Share content with one line of code

#### ⚡ Performance Boosters
6. **Batch DOM Updates** - No more layout thrashing!
7. **Resource Preloader** - Parallel loading for speed
8. **Time Ago** - Auto-updating relative timestamps
9. **DOM Diff & Patch** - Smart incremental updates

#### 🎨 Premium UI Components
10. **Command Palette** - VS Code-style command interface (Ctrl+K)
11. **Virtual Scroll** - Handle 10,000+ items smoothly
12. **Onboarding Tour** - Guided walkthroughs for users
13. **Lazy Loading** - Blur-up image loading

#### 📱 Mobile & PWA
14. **Pull to Refresh** - Native mobile gesture
15. **PWA Install** - One-click app installation
16. **Shake Detection** - Fun gesture recognition

#### 🤖 Unique Features
17. **Voice Commands** 🎤 - Already mentioned, but worth repeating!
18. **Image Cropper** - Canvas-based cropping
19. **Rich Text Editor** - WYSIWYG editing
20. **Element Inspector** - Debug tool overlay
21. **Eye Tracking** - Experimental webcam gaze tracking

## 🎨 Try Our Interactive Demos

Want to see YakaJS in action? We've built **12 gorgeous interactive demos** with a black noise glassmorphism design:

- 🎯 **Core Features** - DOM manipulation, events, selectors
- ✨ **Animations** - 15+ smooth animations
- 📝 **Forms** - Real-time validation with 15+ rules
- 🧩 **Components** - Modals, tooltips, tabs, carousels
- 🏪 **State Management** - Vuex-style store with undo/redo
- 🗺️ **Routing** - SPA routing with guards
- ⚡ **Reactivity** - Signals & effects (SolidJS-inspired)
- 🔐 **Security** - XSS protection & CSRF
- 🚀 **Advanced** - Web Workers, IndexedDB, AI
- 🎪 **All Features** - Everything in one place!
- 🌟 **NEW Features** - All 21 premium features!

> 💡 **Pro tip:** Open the demos and try the voice commands feature. Just say "show modal" or "start animation" and watch the magic happen! 🪄

## 📦 Installation

### CDN (Easy Mode)

```html
<!-- Just drop this in your HTML and you're good to go! -->
<script src="https://cdn.jsdelivr.net/gh/Yaka-UI-Labs/YakaJS@latest/dist/min.yaka.js"></script>
```

### npm (Cool Kid Mode)

```bash
npm install yakajs
```

### Git Clone (Hacker Mode)

```bash
git clone https://github.com/Yaka-UI-Labs/YakaJS.git
cd YakaJS
npm install
npm run build  # Builds all 3 optimized versions!
```

## 🚀 Quick Start (5 Minutes)

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First YakaJS App</title>
</head>
<body>
    <h1 id="title">Hello World!</h1>
    <button id="btn">Click Me 🎉</button>
    
    <!-- Add YakaJS -->
    <script src="https://cdn.jsdelivr.net/gh/Yaka-UI-Labs/YakaJS@latest/dist/min.yaka.js"></script>
    
    <script>
        // That's it! YakaJS is ready via the _ global variable
        
        // Animate the title
        _('#title').fadeIn().css('color', 'purple');
        
        // Add click event
        _('#btn').on('click', () => {
            _('#title').text('You clicked it! 🎊').bounce();
        });
        
        // Try voice commands!
        _.voice.listen({
            'change color': () => _('#title').css('color', 'blue'),
            'reset': () => _('#title').text('Hello World!')
        });
    </script>
</body>
</html>
```

Run this and say **"change color"** into your microphone. Mind. Blown. 🤯

## 🎯 Why YakaJS?

### Because jQuery is Old 👴

jQuery was amazing in 2006. But it's 2026 now. YakaJS gives you the same simplicity with modern features:

```javascript
// jQuery
$('#element').fadeIn();

// YakaJS (same syntax!)
_('#element').fadeIn();

// But YakaJS can also do this:
_('#element').fadeIn().bounce().swing();

// And this:
_.signal(0); // Reactive state!
_.voice.listen({ 'hello': () => alert('Hi!') }); // Voice control!
_.createRouter(); // SPA routing!
```

### Feature Comparison Table

| Feature | jQuery | YakaJS | Notes |
|---------|--------|--------|-------|
| DOM Manipulation | ✅ | ✅ | Same syntax! |
| Animations | ✅ Basic | ✅ 15+ Effects | Bounce, swing, flip3D, etc. |
| AJAX | ✅ | ✅ | Plus timeout, retry, progress |
| Events | ✅ | ✅ | Plus delegation improvements |
| Routing | ❌ | ✅ | Full SPA router |
| State Management | ❌ | ✅ | Vuex-style store |
| Reactivity | ❌ | ✅ | Signals & effects |
| Voice Commands | ❌ | ✅ | UNIQUE! |
| Command Palette | ❌ | ✅ | Like VS Code |
| Virtual Scroll | ❌ | ✅ | 10,000+ items |
| XSS Protection | ❌ | ✅ | Built-in |
| Bundle Size | 87 KB | 151 KB | More features, only +74% |

### The Numbers 📊

- **346 KB** source code (9,504 lines)
- **155 KB** minified
- **151 KB** hyper-compressed
- **56% smaller** than source
- **150+ features** ready to use
- **12 interactive demos** with examples
- **21 premium features** that no other library has
- **0 dependencies** (just vanilla JavaScript)
- **100% browser compatible** (modern browsers)

## 🌟 Feature Highlights

### 🎨 Rich Animations

```javascript
// Fade effects
_('#element').fadeIn(500);
_('#element').fadeOut(300);

// Slide effects (all directions!)
_('#element').slideDown();
_('#element').slideUp();
_('#element').slideLeft();
_('#element').slideRight();

// 3D effects
_('#element').flip3D();
_('#element').rotateIn();

// Fun effects
_('#element').bounce();
_('#element').swing();
_('#element').shake();
_('#element').pulse();
_('#element').rubberBand();

// Chain them!
_('#element').fadeIn().bounce().swing();
```

### 🗺️ SPA Routing

```javascript
const router = _.createRouter();

// Add routes
router.addRoute('/', {
    component: () => '<h1>Home Page</h1>'
});

router.addRoute('/user/:id', {
    component: (params) => `<h1>User ${params.id}</h1>`,
    beforeEnter: async () => {
        // Route guard
        const isAuth = await checkAuth();
        return isAuth;
    }
});

// Navigate
router.navigateTo('/user/42');
router.back(); // Go back
router.forward(); // Go forward

router.init();
```

### ⚡ Signals & Reactivity

```javascript
// Create reactive state
const count = _.signal(0);
const doubled = _.computed(() => count() * 2);

// Auto-update when state changes
_.effect(() => {
    console.log('Count:', count());
    console.log('Doubled:', doubled());
});

count.set(5); // Logs: Count: 5, Doubled: 10
count.update(n => n + 1); // Logs: Count: 6, Doubled: 12
```

### 🏪 State Management

```javascript
// Create a Vuex-style store
const store = _.createStore({
    state: { count: 0 },
    mutations: {
        increment(state) { state.count++; },
        decrement(state) { state.count--; }
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => commit('increment'), 1000);
        }
    }
});

// Use it
store.commit('increment');
console.log(store.state.count); // 1

store.dispatch('incrementAsync');
// After 1 second: count is 2

// Undo/redo support!
store.undo(); // count is 1
store.redo(); // count is 2
```

### 🔐 Security Built-In

```javascript
// XSS protection
const userInput = '<script>alert("XSS")</script>';
_('#content').html(userInput, true); // Sanitized!

// CSRF tokens
_.csrf.setToken('your-token');
_.post('/api/data', { foo: 'bar' }); // Automatically includes CSRF token

// Input sanitization
const safe = _.security.sanitizeHtml(userInput);
const escaped = _.security.escapeHtml(userInput);
```

### 🎯 Command Palette (Ctrl+K)

```javascript
_.commandPalette([
    {
        title: 'Open Settings',
        action: () => alert('Settings opened!')
    },
    {
        title: 'Toggle Dark Mode',
        action: () => document.body.classList.toggle('dark')
    },
    {
        title: 'Search',
        action: () => window.location.href = '/search'
    }
]);
```

Press **Ctrl+K** (or **Cmd+K** on Mac) and start typing. It's like VS Code but for your web app!

### 📊 Virtual Scroll

```javascript
// Render 10,000+ items without lag
const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
}));

_.virtualScroll('#container', items, {
    itemHeight: 50,
    renderItem: (item) => `<div>${item.name}</div>`
});
```

### 🛡️ Never Crash with Safe Mode

```javascript
// Traditional way - CRASHES if element doesn't exist
$('#nonexistent').hide(); // ERROR: Cannot read property 'hide' of null

// YakaJS way - NEVER CRASHES
_('#nonexistent').safe().hide().fadeIn().bounce();
// Silently skips if element doesn't exist

// Enable debug mode for helpful hints
_.debug = true;
_('#nonexistent').safe().hide(); // Logs: "Warning: No elements found for selector #nonexistent"
```

## 🏗️ Build Versions

We provide **3 optimized builds** for different use cases:

| Version | Size | Compression | Use Case |
|---------|------|-------------|----------|
| `min.yaka.js` | 155 KB | Standard | Development + Debugging |
| `ultra.min.yaka.js` | 155 KB | Aggressive | Production |
| `hyper.min.yaka.js` | 151 KB | Maximum | Maximum Performance |

All builds:
- ✅ 100% API compatible
- ✅ Zero features removed
- ✅ Production tested
- ✅ Source maps included

Build them all at once:
```bash
npm run build
```

## 📚 Documentation

> **📖 Complete Documentation Hub** - Your gateway to all YakaJS docs!

Want to dive deeper? We've got **116 KB of comprehensive documentation** (maintained by [@dill-lk](https://github.com/dill-lk)):

- **📖 Complete API Reference** - Every method, parameter, and example (31 KB, 1,598 lines)
- **🚀 Advanced Guide** - Performance optimization, advanced patterns, architecture (24 KB, 1,041 lines)
- **✅ Best Practices** - Security, performance, and code quality tips (11 KB, 533 lines)
- **🔄 Migration Guide** - Moving from jQuery to YakaJS (12 KB, 585 lines)
- **💡 Examples** - Real-world code examples and patterns (20 KB, 687 lines)
- **🤝 Contributing** - How to contribute to YakaJS (9 KB, 481 lines)

**🏆 Most comprehensive JavaScript library documentation available!**

## 🤝 Contributing

We'd love your help! Here's how you can contribute:

1. **🐛 Report Bugs** - Open an issue on GitHub
2. **💡 Suggest Features** - Tell us what you'd like to see
3. **📝 Improve Docs** - Help make our docs better
4. **🔧 Submit PRs** - Fork, code, and submit!
5. **⭐ Star the Repo** - Show some love!

Check out our Contributing Guide for more details.

## 🌍 Community

- **GitHub Discussions** - Ask questions, share ideas
- **Discord** - Chat with other developers (coming soon!)
- **Twitter** - Follow [@YakaJS](https://twitter.com/YakaJS) for updates (coming soon!)

## 📋 Roadmap

What's coming next? 👀

- [ ] Server-side rendering support
- [ ] React/Vue integration wrappers
- [ ] TypeScript definitions
- [ ] Component library expansion
- [ ] YakaCLI scaffolding tool
- [ ] Custom build generator (choose only features you need)
- [ ] Plugin ecosystem
- [ ] More animations and effects
- [ ] Mobile-first components
- [ ] Accessibility improvements

Have an idea? [Let us know!](https://github.com/Yaka-UI-Labs/YakaJS/issues)

## 👓 Appendix

### Additional Resources

- **[GitHub Repository](https://github.com/Yaka-UI-Labs/YakaJS)** - Star us! ⭐
- **Interactive Demos** - See it in action
- **API Documentation** - Full API reference (coming soon!)
- **Migration Guide** - Moving from jQuery? (coming soon!)
- **Minification Guide** - See `MINIFICATION.md`
- **Implementation Details** - See `IMPLEMENTATION_SUMMARY.md`
- **jQuery Comparison** - See `JQUERY_BEATING.md`

### Browser Support

YakaJS works in all modern browsers:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ⚠️ IE11 (not supported - use polyfills if needed)

### Performance Stats

Our performance optimizations mean:
- **56% smaller** than source code
- **Batched DOM operations** prevent layout thrashing
- **Lazy loading** for better initial load times
- **Tree-shakable** (with module bundlers)
- **CDN cached** for instant delivery

### License

MIT License - see LICENSE file for details

Free to use in personal and commercial projects! 🎉

## 🙌 Credits

Built with ❤️ by the **Yaka UI Labs** team and amazing contributors.

Special thanks to:
- The jQuery team for inspiration
- The open source community
- Early adopters and testers
- Coffee ☕ (lots of it)

## 🎊 Fun Facts

- 📝 **9,504 lines of code** - That's a lot of JavaScript!
- 🎤 **First library with voice commands** - We checked. It's true!
- ⚡ **150+ features** - More than you'll probably ever need
- 🎨 **12 interactive demos** - Each one prettier than the last
- 🏆 **56% compression** - We're really good at making things small
- 🤖 **Robot-friendly** - If you're a bot reading this, hi! 👋
- 🪐 **Solar system ready** - Okay, we haven't tested this one yet

## 🚀 Get Started Now!

```bash
# Clone and try it yourself
git clone https://github.com/Yaka-UI-Labs/YakaJS.git
cd YakaJS

# Install dependencies
npm install

# Build
npm run build

# Open demos
open demos/index.html
```

Or just add this to your HTML and start coding:

```html
<script src="https://cdn.jsdelivr.net/gh/Yaka-UI-Labs/YakaJS@latest/dist/min.yaka.js"></script>
```

---

**"Tell me more, I can't get enough!"**

🤫 Psst! Check out our interactive demos to see everything in action. And don't forget to try the voice commands - just say "hello" and watch what happens! 😉

**Oh, and by the way** - we're always looking for talented, passionate developers to contribute. Got ideas? Found a bug? Want to add a feature? [Join us!](https://github.com/Yaka-UI-Labs/YakaJS/issues) 🙌

---

Made with ❤️ and lots of ☕ by [@dill-lk](https://github.com/dill-lk) and [Yaka UI Labs](https://github.com/Yaka-UI-Labs)

⭐ **Star us on GitHub if you like YakaJS!** ⭐
