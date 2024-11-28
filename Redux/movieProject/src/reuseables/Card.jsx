import { MOVIE_IMAGE_URL } from "../service/MovieApi"
import style from "../styles/Card.module.css"


const Card = (props)=> {
    const{data} = props
    return (
        <div className={style.mainContainer}>
            {data?.results.map((movie)=>(
                    <div key={movie.id}>
                        <img 
                        src ={`${MOVIE_IMAGE_URL}/${movie.poster_path}`} 
                        alt = {`${movie.title}`}/>
                        <h2>{movie.title}</h2>
                        <span>{movie.overview}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Card