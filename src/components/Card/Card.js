import react from 'react'
import styles from './style.css'

class CardChannel extends react.Component{
    render(){
        return (
        <div className='card-block'>
            <img src={this.props.img} alt='' />
            <p>now - 12:30</p>
        </div>
        )
    }
}

export default CardChannel