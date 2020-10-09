### 组件化方面

1. **什么是模块化开发：**是从**代码**角度来进行分析的；把一些可复用的代码，抽离为单个的模块；便于项目维护和开发；

2. **什么是组件化：** 是从**`UI`界面**的角度来进行分析的；把一些可复用的`UI`元素，抽离为单独的组件；便于项目的维护与开发；
3. **组件化的好处：** 随着项目规模的增大，手里的组件越来越多，很方便就能利用现有的组件，完成业务功能；
4. **Vue是如何实现组件化：** 通过`.vue`文件，来创建对应的组件；
   + template	结构
   + script          行为
   + style            样式

5. **React如何实现组件化：** React中，一切都是以JS来实现的；



### Recact中的几个核心概念

#### 虚拟DOM（Virtual Document Object Model）

* **DOM的本质是什么：**浏览器中的概念，用JS对象标识页面上的元素，并提供了操作DOM对象的API；

* **什么是React中的虚拟DOM：**是框架中的概念，是程序员用JS对象来模拟页面上的DOM和DOM嵌套；

  ```html
  <div id="app" class="myApp">
    hello World
    <p class="p1">
      你好，世界
    </p>
  </div>
  ```

  通过JS模拟上面的元素

  ```js
  let app = {
    "tagName": "div",
    "attrs": {
      "id": "app",
      "class": "myApp",
      "children": [
        "hello world",
        {
        	"tagName": "p",
        	"attrs": {
        		"class": "p1",
        		"children": [
        			"你好，世界"
      			]
        	}
        }
      ]
    }
  }
  ```

* **为什么要实现虚拟MDOM：**为了实现页面中，DOM元素的高效更新;

* **DOM和虚拟DOM的区别：**

  * **DOM：**浏览器提供的概念；用JS对象表示页面上的元素，并提供了操作元素的API；
  * **虚拟DOM：**是框架中的概念；是开发框架的程序员，手动用JS对象来模拟DOM元素和嵌套关系；
    * 本质：用JS对象，来模拟DOM元素和嵌套关系；
    * 目的：为了实现页面元素的高效更新；

#### Diff算法

* **tree diff：**新旧两棵树DOM树，逐层对比的过程，就是Tree Diff；当整颗DOM树逐层对比完毕，则所有需要被按需更新的元素，必然能够找到；
* **component diff：**在进行Tree Diff的时候，每一层中，组件级别的对比，叫做Component Diff；
  * 如果对比前后，组件的类型相同，则**暂时**认为此组件不需要被更新；
  * 如果对比前后，组件的类型不同，则需要移除旧组件，创建新组件，并追加到页面上；
* **element diff：**在进行Component Diff的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做Element Diff；



### 创建基础的Webpack项目

1. `npm init --yes`初始化
2. dist，src，index.html，index.js
3. 安装webpack，`cnpm i webpack webpack-cli -D`
4. 4.x中特性：约定大于配置，默认入口文件`src/index.js`，默认打包路径`dist/main.js`

### 在项目中使用React

1. 运行`npm i react react-dom -S`

2. 在`index.html`页面中创建容器

   ```html
   <div id="app">
     
   </div>
   ```

3. 导入包

   ```js
   import React from 'react'
   import ReactDOM from 'react-dom'
   ```

4. 创建虚拟元素

   ```react
   const myDiv = React.createElement('div', null, 'this is a div')
   ```

5. 渲染元素

   ``````react
   ReactDOM.render(myDiv, document.getElementById(app))
   ``````

### 在项目中使用jsx

1. 引入babel，注意babel更新8.x以后，与之前大不相同
2. jsx语法



### Vue中的key

1. 为了保持列表项的状态，见列表选中状态

### React中创建组件

1. 构造函数
2. class继承React.component

### 两种创建组件方式的对比

> 注意：使用class关键字创建的组件，有自己的私有数据（this.state）和生命周期
>
> 注意：使用构造函数创建的组件，纸有props，没有自己的私有数据和生命周期

1. 使用构造函数创建的组件，叫做无状态组件
2. 使用class关键字创建的组件，叫做有状态组件
3. 本质区别就是：有无state属性和有无生命周期函数
4. 组件中的`props`和`state/data`之间的区别
   + props是外界传递，state是组件私有的
   + props是只读属性。state可写可读

### webpack配置css模块化

```js
//在css-loader后追加参数modules，可以为普通css样式启用模块化
//但是只对类选择器和Id选择器生效
{ 
  test: /\.css$/,
  use: [ 'style-loader', 'css-loader?modules' ]
}
```

### React数据绑定

1. 通过事件参数e来获取 e.target.value
2. 通过refs this.refs.txt

```jsx
<input type="text" ref="txt" value = { this.state.msg } onChange = { (e)=> { changeText(e) } } />

changeTxt(e) {
  console.log(e.target.value);
  console.log(this.refs.txt.value);
  this.setState({
    msg: e.target.value
  });
}
```

### React的组件生命周期

+ 生命周期的概念：每个组件的实例，从创建到运行直到销毁，在这个过程中，会发出一系列事件，这些事件就叫做组件的生命周期函数；

+ React的组件生命周期分为三个部分：

  + **组件创建阶段：**特点：只执行一次

    > componentWillMount
    >
    > render
    >
    > componentDidMount

  + **组件运行阶段：**按需执行，根据props或者state状态的改变，执行0~N次

    > componentWillReceiveProps
    >
    > shouldComponentUpdate
    >
    > componentWillUpdate
    >
    > render
    >
    > componentDidUpdate

  + **组件销毁阶段：**只执行一次

    > componentWillUnmount



### 使用react

#### 1.下载

```
npx create-react-app react-base
```

#### 2.运行

```
npm start
```



### 学习React

#### 1.基础知识

+ resetcss设置默认的css样式

  > https://meyerweb.com/eric/tools/css/reset/

+ 引入Antd 组件库

  > https://ant-design.gitee.io/docs/react/introduce-cn

+ Fragment

  ```jsx
  /**
   * 当类似于ul->li，tr->td包裹时，如果子组件外层用div包裹，明显是不符合规范的
   * 使用<Fragment></Fragment>或者<></>
   * 它们不会被渲染，但是能够使用只有一个主节点
   */
  <Fragment>
    <li>111</li>
    <li>222</li>
  </Fragment>
  ```

+ 懒加载

  ```jsx
  import React, { Suspense } from 'react';
  
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
  ```

+ 错误边界

  ```
  compomentDidCatch(error, errorInfo) {} 会捕获子组件的错误
  无法捕获的错误
  	1.自身的错误
  	2.事件处理
  	3.异步代码
  	4.服务端渲染
  ```

+ context

  ```jsx
  // createContext创建一个context
  const ColorContext = React.createContext({
    background: '',
    changeColor: ()=> {}
  })
  
  // 在需要使用context的组件的父级处使用Provider初始化
  <ColorContext.Provider value={ this.state }>
    <Child1 />
    <Child2 />
  </ColorContext.Provider>
    
  // 在子组件处使用Consumer
    <ColorContext.Consumer>
      {
        ({background})=> (
          <div style={ { background } }>
            <p style={ style }>context颜色</p>
          </div>
        )
      }
    </ColorContext.Consumer>
  ```

  

