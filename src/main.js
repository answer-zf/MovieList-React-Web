import React from 'react'
import ReactDOM from 'react-dom'
// import Person from './components/mini.js'
// const div = React.createElement(
//   'div',
//   { title: 'title', id: 'zf', className: 'zf' },
//   'this.is.div'
// )

// const arr = []
// for (let i = 0; i < 10; i++) {
//   const p = <p key={i}>this.is.p</p>
//   arr.push(p)
// }
// const title = 'this.is.variable'
// const div = (
//   <div className="zf" id="zf" title={title}>
//     this.is.div
//     {arr}
//     {/* 注释 */}
//   </div>
// )
const username = 'z...f'
const person = {
  age: 30,
  name: 'zf',
  address: 'anhui'
}
function MyDiv(props) {
  return (
    <div>
      <h1>
        this.is.component
        {username}
        {props.name}
        {props.address}
      </h1>
    </div>
  )
}

//
// 非对象的值的传递：使用属性向子组件传值
// 对象的传递：...obj 使用 es6 中的属性扩散, 即:简化属性的方式的操作
// 获取：
// 非对象的值，直接通过属性名获取
// 对象：通过向构造函数传递形参（props）,通过 props 接收
// 通过 props 获取的值是只读的,不能重新赋值
ReactDOM.render(
  <div>
    <MyDiv {...person}></MyDiv>
    {/* <Person {...person}></Person> */}
  </div>,
  document.getElementById('app')
)
