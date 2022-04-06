import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useEffect } from 'react';
import { useState } from 'react';
import './ListItem.scss';
import axios from "axios";
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    const [isHovered, setIsHovered] = useState(false);   // to center the movie poster when hovered
    const [movie, setMovie] = useState({});
    const item = props.item;
    //const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    useEffect(() => {
        const getMovie = async () => {
            let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDZlYjM0YWRjNWI0ZTI0ZmVmMjc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODkwNTA3MiwiZXhwIjoxNjQ5MzM3MDcyfQ._4X7Pz20oOn882rNDVqXJXRxrWusA3FfmrrDJ31TMf8";
            let url = "http://localhost:9000/api/movies/find/" + item;
            try{
                const res = await axios.get(`http://localhost:9000/api/movie/find/${item}`, { headers:{ token: token } });
                //console.log(res.data);
                setMovie(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
    },[item, movie]);

    return (
        <Link to={{pathname: "/watch", movie:movie}}>
            <div 
                className='listItem' 
                style={{left: isHovered && (props.index * 225) - 50 + (props.index*2.5)}} 
                onMouseEnter={()=> setIsHovered(true)} 
                onMouseLeave={()=> setIsHovered(false)}
            >
                <img src={movie.img} alt="" />
                {isHovered && (
                    <>  
                        {/* <iframe src="https://player.vimeo.com/video/648837083?h=c0c7c63ea5&autoplay=1&loop=1&color=fefefe&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownAltOutlined className="icon"/>    
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className='limit'>{movie.limit}+</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem