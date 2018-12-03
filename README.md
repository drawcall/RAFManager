RAFManager - a simple requestAnimationFrame animation manager
======

## Features
RAFManager is a simple requestAnimationFrame animation manager.
With RAFManager you can control the addition/deletion animations globally with precision.

#### The important thing is that it has only a few dozen lines of code, and the size is so small that you can ignore it.

* 一个基本的js库应该如何编写  
* 基本的前端项目都要哪些文件
* 又要怎么打包发布到npm上  
* 你的es6语法如何才能让别人识别  
* readme应该如何编写  
* 如何添加eslint
* 怎么才能打包一个umd格式文件让html直接引用

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

#### API:
```javascript
// add animation func -- auto start
RAFManager.add(func, fps, param); 

// remove animation func -- auto stop
RAFManager.remove(func);

// start and stop
RAFManager.start();
RAFManager.stop();
```

#### Usage demo:
```javascript
RAFManager.add((title)=>{
    this.inputRef.current.innerHTML = title;
    this.inputRef.current.style.top = top + 'px';
}, 25, { title:'hello world!' }); 
```

## Build
Node is a dependency, use terminal to install it with with:  

### 打包

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
