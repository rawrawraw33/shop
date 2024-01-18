import React, { Component } from 'react'
import { TiDelete } from "react-icons/ti";


export class Order1 extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <TiDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>

    )
  }
}

