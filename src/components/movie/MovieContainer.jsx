import React from 'react'

import { Layout, Menu } from 'antd'
const { Sider, Content } = Layout

// 路由
import { Link, Route, Switch } from 'react-router-dom'

import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout className="site-layout-background" style={{ height: '100%' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={window.location.hash.split('/')[2]}
            style={{ height: '100%' }}
          >
            <Menu.Item key="in_theaters">
              <Link to="/movie/in_theaters/1">In_Theaters</Link>
            </Menu.Item>
            <Menu.Item key="comming_soon">
              <Link to="/movie/comming_soon/1">Comming_Soon</Link>
            </Menu.Item>
            <Menu.Item key="top250">
              <Link to="/movie/top250/1">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ backgroundColor: '#fff', padding: 10, margin: 0 }}>
          {/* 使用 Switch 组件，可以指定，前面的路由匹配后，后面的路由不在匹配 */}
          <Switch>
            <Route
              path="/movie/detail/:id"
              component={MovieDetail}
              exact
            ></Route>
            <Route
              path="/movie/:type/:page"
              component={MovieList}
              exact
            ></Route>
          </Switch>
        </Content>
      </Layout>
    )
  }
}
