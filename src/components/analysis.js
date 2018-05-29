import React, { Component } from 'react'
import { fetchCount } from '../services/product'
import {RadialChart, Hint} from 'react-vis'

const colors = ['#ff5f5f', '#333366', '#f9e75e', '#92e6e6']

export default class Analysis extends Component {
  constructor () {
    super()
    this.state = {
      count: [],
      value: false
    }
  }

  findPercentage = (count, total) => {
    return Math.round(count / total * 100 * 100) / 100
  }

  componentDidMount () {
    fetchCount().then(count => {

      let total = count.reduce((acc, val) => { return acc + Number(val.count)}, 0)
      count = count.map((obj, index) => {
        return {
          name: obj._id,
          angle: obj.count,
          label: this.findPercentage(obj.count, total) + '%',
          color: colors[index]
        }
      }).sort((a, b) => a.name - b.name)
      this.setState({count})
    })
  }
  render () {
    const { value } = this.state

    const showIndex = () => {
      return this.state.count.map(slab => {
        let spanStyle = {color: slab.color, fontWeight: 700}
        return (<span className='p-4' key={slab.angle} style={spanStyle}> {slab.name}%  </span>)
      })
    }

    return (
      <div className='mx-auto mt-5'>
        <RadialChart
          className='mx-auto'
          data={this.state.count}
          width={300}
          height={300}
          onValueMouseOver={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
          showLabels
          colorType='literal'
        />
        <div className='clear'>
          <h3> slabs </h3> {showIndex()}
        </div>
      </div>
    )
  }
}
