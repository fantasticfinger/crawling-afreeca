import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {VictoryPie} from 'victory';


const SexRatio = styled.div`
    width : 48%;
    margin:1%;
    height : 40%;
    background-color: white;
    flex: 0 1 1;
    
`
const HomeWrapper=styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-evenly;
`
const Home=()=>{
    const [datas,setData] = useState([])
    const colorScale=["Red","Blue"]
    useEffect(()=>{
        const temp = [
            { x: "Female", y: 72 },
            { x: "Male", y: 18 },
        ]
        setData(temp)
    },[])
    
    return (
        <HomeWrapper>
            <SexRatio>
                {datas === [] ?'':<VictoryPie data={datas} startAngle={90}endAngle={450} colorScale={colorScale}/> }
            </SexRatio>
        </HomeWrapper>
    )
}
export default  Home