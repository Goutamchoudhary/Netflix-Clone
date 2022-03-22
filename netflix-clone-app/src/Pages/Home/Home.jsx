import Featured from "../../Components/Featured/Featured"
import List from "../../Components/List/List"
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.scss"

const Home = () => {
    let img1 = "https://i.pinimg.com/564x/41/88/29/41882960bc135a47363f9f3f890f706d.jpg";
    let img2 = "https://i.pinimg.com/originals/93/d3/30/93d330382e963458edb433ed100910d8.jpg";

    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
            <List img={img1}/>
            <List img={img2}/>
            <List img={img1}/>
            <List img={img2}/>
            <List img={img1}/>
        </div>
    )
}

export default Home