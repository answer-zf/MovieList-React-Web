import React from 'react'

import fetchJSONP from 'fetch-jsonp'

import { Button, Spin, Alert } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      isLoading: true,
    }
  }
  componentWillMount() {
    fetchJSONP(
      'https://douban.uieee.com/v2/movie/subject/' + this.props.match.params.id
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          info: data,
        })
      })
  }
  render() {
    return (
      <div>
        <Button
          type="primary"
          icon={<LeftOutlined />}
          onClick={this.gobackHandle}
        >
          返回电影列表页面
        </Button>
        {this.renderDetailHandle()}
      </div>
    )
  }

  gobackHandle = () => {
    this.props.history.go(-1)
  }

  renderDetailHandle = () => {
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
          <div style={{ textAlign: 'center' }}>
            <h1>{this.state.info.title}</h1>
            <img src={this.state.info.images.large} alt="" />
          </div>
          <p style={{ textIndent: '2em', lineHeight: '30px' }}>
            {this.state.info.summary}
          </p>
        </div>
      )
    }
  }
}
