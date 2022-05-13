import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './Featured.scss'

const Featured = (props) => {
    const [content, setContent] = useState({});
    const type = props.type;
    useEffect(() => {
        const getRandomContent = async () => {
            let token = "UserToken " + JSON.parse(localStorage.getItem("user")).accessToken;
            try{
                const res = await axios.get(`http://localhost:9000/api/movie/random/${type ? "?type="+type: ""}`, { headers:{ token: token } })
                //console.log(res.data);
                setContent(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getRandomContent();
    }, [type])

    return (
        <div className="featured">
            {props.type && (
                <div className="category">
                    <span>{(type === "movie") ? "Movies" : "TV Shows"}</span>
                    <select name="genre" id="genre" 
                                    onChange={e=>props.setGenre(e.target.value)}>
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

            <img src={content.img} alt="" />

            <div className="info">
                <img src={content.imgTitle} 
                alt="" />
                <span className='desc'>
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrow style={{ fontSize: 35 }}/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined style={{ fontSize: 30 }}/>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured