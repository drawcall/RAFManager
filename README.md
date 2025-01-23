# RAFManager

![logo](https://github.com/drawcall/RAFManager/blob/master/logo/raf.gif)

## Overview

**RAFManager** is a lightweight and efficient animation manager built on top of the `requestAnimationFrame` API. It provides precise global control over the addition and removal of animations.

### Key Features

- **Minimalistic**: Implemented in just a few dozen lines of code
- **Easy Integration**: Use as a foundation for animation projects or integrate where needed
- **Global Control**: Effortlessly manage animations across your entire application

## Installation

### Browser

Include the script directly in your HTML file:

```html
<script src="js/RAFManager.min.js"></script>
```

### npm

Install using npm:

```bash
npm install raf-manager --save
```

Then import it in your project:

```javascript
import RAFManager from 'raf-manager';
```

## API

### Add an Animation Function - Auto Start

```javascript
RAFManager.add(func, fps, param);
```

### Remove an Animation Function - Auto Stop

```javascript
RAFManager.remove(func);
```

### Force Start and Stop

```javascript
RAFManager.start();
RAFManager.stop();
```

## Usage Demo

```javascript
RAFManager.add((title) => {
    top++;
    const node = this.inputRef.current;
    node.innerHTML = title;
    node.style.top = top + 'px';
}, 25, 'hello world!');
```

```javascript
RAFManager.add(func1, 2);
RAFManager.add(func2, 3.5);
RAFManager.add(func3, 10.5);
```

## Build

Node.js is a dependency. Use the terminal to install it with npm:

```bash
npm install
npm run build
```

### ES6 Lint

```bash
npm run lint
```

## License

RAFManager is released under the MIT License. [http://www.opensource.org/licenses/mit-license](http://www.opensource.org/licenses/mit-license)