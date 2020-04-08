import React from 'react'
import styles from '../../css/movie_item.scss'

import { Rate } from 'antd'

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.box} onClick={this.goDetailHandle}>
        <img className={styles.img} src={this.props.images.medium} alt="" />
        <h4 className={styles.h4}>{this.props.title}</h4>
        <h4 className={styles.h4}>上映年份：{this.props.year}</h4>
        <h4 className={styles.h4}>电影类型：{this.props.genres.join(',')}</h4>
        <Rate disabled defaultValue={this.props.rating.average / 2} />
      </div>
    )
  }

  goDetailHandle = () => {
    this.props.history.push('/movie/detail/' + this.props.id)
  }
}
