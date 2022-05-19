import { ArrowBackOutlined } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom';
import './Watch.scss'

const Watch = () => {
    const location = useLocation();
    //console.log(location);
    const movie = location.movie;

    return (
        <div className='watch'>
            <Link to={{pathname: "/"}}>
                <div className="back-button">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            {/* <iframe src="https://player.vimeo.com/video/648837083?h=c0c7c63ea5&autoplay=1&loop=1&color=fefefe&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay 'true'; progress 'true'; fullscreen 'true';" allowfullscreen></iframe>   */}

            <video
                className="video"
                autoPlay={true}
                progress
                controls
                src="https://res.cloudinary.com/du7od2uuc/video/upload/v1652527265/Netflix-Clone/video_e789ok.mp4"
            />
        </div>
    )
}

export default Watch

// "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"