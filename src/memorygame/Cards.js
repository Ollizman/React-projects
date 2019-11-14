import React, { Component } from 'react';
import './Cards.css';


class Cards extends Component {
        shouldComponentUpdate = (nextProps) => {
                if (nextProps.name === 'done') {
                    return false
                } else {
                    return true
                }
            }
        render() {
                const { url, name, click, active } = this.props
                const Image = () => active ? <img src={url} alt={name} /> : <div />
                const activeStyle = active === true ? " active" : ''
                return (
                    <div className={'card ' + activeStyle} onClick={click} >
                        <Image />
                    </div>
                )
            }
        }
export default Cards