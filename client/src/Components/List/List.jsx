import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss'

const List = (props) => {
    const [isMoved, setIsMoved] = useState(false);          // to hide the left arrow
    const [slideNumber, setSlideNumber] = useState(0);      // to restrict the sliding
    const listRef = useRef();

    const handleClick = (direction)=>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;   
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        // console.log(distance);
    }   

    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className='sliderArrow left' 
                onClick={() => handleClick("left")}
                style={{display : !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0} img={props.img}/>
                    <ListItem index={1} img={props.img}/>
                    <ListItem index={2} img={props.img}/>
                    <ListItem index={3} img={props.img}/>
                    <ListItem index={4} img={props.img}/>
                    <ListItem index={5} img={props.img}/>
                    <ListItem index={6} img={props.img}/>
                    <ListItem index={7} img={props.img}/>
                    <ListItem index={8} img={props.img}/>
                    <ListItem index={9} img={props.img}/>
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List