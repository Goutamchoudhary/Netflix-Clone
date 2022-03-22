import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './Featured.scss'

const Featured = (props) => {
    return (
        <div className="featured">

            {props.type && (
                <div className="category">
                    <span>{(props.type === "movie") ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img src="https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="" />

            <div className="info">
                <img src="https://www.pngitem.com/pimgs/m/676-6760112_matrix-movie-title-png-transparent-png.png" 
                alt="" />
                <span className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, officia! 
                    Optio, maiores pariatur rerum voluptatem esse nam, odit quos dolores 
                    fuga repellat sunt aut. Aut earum dignissimos tempore omnis debitis.
                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured