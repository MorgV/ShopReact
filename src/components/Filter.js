import React, { Component } from 'react'

export class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key: 'All',
                    name:'All',
                },
                {
                    key: 'Oil',
                    name:'Oil',
                },
                {
                    key: 'Other',
                    name:'Other',
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Filter