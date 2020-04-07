// 根组件
import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

// AntDesign
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

// 导入模块化样式
import styles from '../src/css/app.scss'

// 路由模块
import Home from './components/home/HomeContainer.jsx'
import Movie from './components/movie/MovieContainer.jsx'
import About from './components/about/AboutContainer.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{ height: '100%' }}>
          <Header>
            <div className={styles.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/movie">Movie</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content>
            <div className="site-layout-content" style={{ height: '100%' }}>
              <Route path="/home" component={Home}></Route>
              <Route path="/movie" component={Movie}></Route>
              <Route path="/about" component={About}></Route>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            ZF Design ©2020 Created
          </Footer>
        </Layout>
      </HashRouter>
    )
  }
}
