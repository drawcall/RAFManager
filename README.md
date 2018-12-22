RAFManager
======

![logo](https://github.com/a-jie/RAFManager/blob/master/logo/raf.gif)

## Features
RAFManager is a simple requestAnimationFrame animation manager.
With RAFManager you can control the addition/deletion animations globally with precision.

#### The important thing is that it has only a few dozen lines of code, and the size is so small that you can ignore it.

You can use it as the base library for your animation project, or wherever you want to use it.

## Usage
#### Use directly in the page

```html
<script src="js/RAFManager.min.js"></script>
```

#### Or install using npm 

```javascript
npm install raf-manager --save 
...

import RAFManager from 'raf-manager';
```

### API:

##### add a animation function -- auto start
```javascript
RAFManager.add(func, fps, param); 
```

##### remove a animation function -- auto stop
```javascript
RAFManager.remove(func);
```

##### force start and stop
```javascript
RAFManager.start();
RAFManager.stop();
```

### Usage demo:
```javascript
RAFManager.add(({title})=>{
    top++;
    this.inputRef.current.innerHTML = title;
    this.inputRef.current.style.top = top + 'px';
}, 25, { title:'hello world!' });
```

```javascript
RAFManager.add(func1, 2);
RAFManager.add(func2, 2.5);
RAFManager.add(func3, 10);
```

## Build
Node is a dependency, use terminal to install it with npm:  

```javascript
npm install
npm run build
``` 

### es6 lint

```javascript
npm run lint
```

## License
LicenseFinder is released under the MIT License. http://www.opensource.org/licenses/mit-license
