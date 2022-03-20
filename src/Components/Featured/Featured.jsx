import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './Featured.scss'

const Featured = () => {
    return (
        <div className="featured">
            <img src="https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="" />
            <div className="info">
                <img src="https://images.pexels.com/photos/1389339/pexels-photo-1389339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
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