import { useEffect, useState } from "react";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";
import axios from "axios";


const Home = (props) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const type = props.type;

    useEffect(()=> {
        const getRandomLists = async() => {
            // "proxy": "http://localhost:9000/api"
            // let url = `http://localhost:9000/api/lists${type ? "?type="+type: ""}${genre ? "&genre="+genre: ""}`;
            let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDZlYjM0YWRjNWI0ZTI0ZmVmMjc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTUyODM1MiwiZXhwIjoxNjQ5OTYwMzUyfQ.m8JbYM2uKSckKDa4RQDoge_xrITDaVRE4ZjNNspjbcM";
            try{
                const res = await axios.get(`http://localhost:9000/api/lists/${type ? "?type="+type: ""}${genre ? "&genre="+genre: ""}`, { headers:{ token: token } })
                //console.log(res.data);
                setLists(res.data);
                
            }catch(err){
                console.log(err);
            }
        };
        getRandomLists();
    },[type, genre]);

    let img1 = "https://i.pinimg.com/564x/41/88/29/41882960bc135a47363f9f3f890f706d.jpg";
    let img2 = "https://i.pinimg.com/originals/93/d3/30/93d330382e963458edb433ed100910d8.jpg";

    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {/* <List img={img2}/> */}

            {lists.map((list, index) => (
                <List key={index} list={list}/>
            ))}
            
        </div>
    )
}

export default Home






// try{
//     const res = await axios.get(
//         `lists${props.type ? "?type="+props.type: ""}${genre ? "&genre="+genre: ""}`
//         ,{ headers:{ token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDZlYjM0YWRjNWI0ZTI0ZmVmMjc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODg5NTM4NCwiZXhwIjoxNjQ5MzI3Mzg0fQ.Z1fDsJAJDebyE_7JOZvFPUzvE-yVzoX3Y_r_TQ5phy4" } }
//         );
//     console.log(res);
//     // setLists(res.data);
// }catch(err){
// console.log(err);
// }