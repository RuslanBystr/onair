import react from 'react'
import styles from './style.css'

class CardFilm extends react.Component{
    render(){
        return (
        <div className='card-film-block'>
            <img src={this.props.img} alt='' />
        </div>
        )
    }
}

export default CardFilm