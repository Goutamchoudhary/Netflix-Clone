import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './ListItem.scss'

const ListItem = (props) => {

    const [isHovered, setIsHovered] = useState(false);   // to center the movie poster when hovered
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div 
            className='listItem' 
            style={{left: isHovered && (props.index * 225) - 50 + (props.index*2.5)}} 
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src={props.img} alt="" />
            {isHovered && (
                <>  
                    {/* <iframe src="https://player.vimeo.com/video/648837083?h=c0c7c63ea5&autoplay=1&loop=1&color=fefefe&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>    
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 minutes</span>
                            <span className='limit'>16+</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima 
                            veritatis perspiciatis modi, sed reprehenderit consequatur.
                        </div>
                        <div className="genre">Historical</div>
                    </div>
                </>
            )}
            
            
        </div>
    )
}

export default ListItem