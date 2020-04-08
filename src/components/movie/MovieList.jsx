import React from 'react'

import { Spin, Alert, Pagination } from 'antd'

import fetchJSONP from 'fetch-jsonp'

import MovieItem from './MovieItem.jsx'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // ** 影片列表
      movies: [],
      // 当前页码
      nowPage: parseInt(props.match.params.page) || 1,
      // 每页显示条数
      pageSize: 12,
      // ** 当前分类下的数据总条数
      total: 0,
      // ** Loading 标识符
      isLoading: true,
      // 获取电影类型
      movieType: props.match.params.type,
    }
  }

  componentWillMount() {
    this.loadMovieListByTypeAndPageHandle()
  }
  // 地址栏变化 重置state 参数项
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        isLoading: true,
        nowPage: parseInt(nextProps.match.params.page) || 1,
        movieType: nextProps.match.params.type,
      },
      function () {
        this.loadMovieListByTypeAndPageHandle()
      }
    )
  }

  render() {
    return <div>{this.renderListHandle()}</div>
  }

  loadMovieListByTypeAndPageHandle() {
    // const data = require('../test_data/in_theaters.json')
    // setTimeout(() => {
    //   this.setState({
    //     isLoading: false,
    //     movies: data.subjects,
    //     total: data.total,
    //   })
    // }, 1000)
    // 开始获取数据的索引
    const start = this.state.pageSize * (this.state.nowPage - 1)
    const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`
    fetchJSONP(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          movies: data.subjects,
          total: data.total,
        })
      })
  }

  // 渲染电影列表
  renderListHandle = () => {
    if (this.state.isLoading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="Movie List Loading..."
            description="Highlights will be presented immediately"
            type="info"
          />
        </Spin>
      )
    } else {
      return (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {this.state.movies.map((item) => {
              return (
                <MovieItem
                  {...item}
                  key={item.id}
                  history={this.props.history}
                ></MovieItem>
              )
            })}
          </div>
          {/* 分页 */}
          <Pagination
            defaultCurrent={this.state.nowPage}
            pageSize={this.state.pageSize}
            total={this.state.total}
            onChange={this.pageChangedHandle}
          />
        </div>
      )
    }
  }

  pageChangedHandle = (page) => {
    // 使用 react-router-dom 实现 编程式导航
    this.props.history.push('/movie/' + this.state.movieType + '/' + page)
    // window.location.href = '/#/movie/' + this.state.movieType + '/' + page
  }
}
