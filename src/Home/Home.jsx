import Featured from "../Components/Featured/Featured"
import Navbar from "../Components/Navbar/Navbar"
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <img width="100%" src="https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <Featured/>
            
        </div>
    )
}

export default Home