import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back-button">
                <ArrowBackOutlined/>
                Home
            </div>
            {/* <iframe src="https://player.vimeo.com/video/648837083?h=c0c7c63ea5&autoplay=1&loop=1&color=fefefe&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay 'true'; progress 'true'; fullscreen 'true';" allowfullscreen></iframe>   */}

            <video
                className="video"
                autoPlay={true}
                progress
                controls
                src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
            />
        </div>
    )
}

export default Watch