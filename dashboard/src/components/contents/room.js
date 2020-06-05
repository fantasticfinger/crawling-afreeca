import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import SearchInput from '../commons/searchInput'
import SearchButton from '../commons/searchButton'

const RoomWrapper = styled.div`
    width: 100%;
    background-color : white;
    position: relative;
    >#roomContent{
        width:90%;
        margin: 0 auto;
        padding : 20px 0 ;        
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap : 10px;
    }
`
const ContentWrapper = styled.div`
    border: 2px solid ${colors.gray300};
    position:relative;
    .contents{
        overflow-y: scroll;
        max-height : 1000px;
    }
`
const ContentTitle = styled.div`
    width : 100%;
    height : 50px;
    background-color:${colors.gray300};
    display: flex;
    justify-content: center;
    align-items : center;
`
const UserId = styled.div`
        text-align:center;
        padding: 0 10px;
        height: 25px;
    `
const UserIds =({list})=>{
    let ids = list.map(id=>{
        return <UserId>{id}</UserId>
    })
    return (
        <ContentWrapper>
            <ContentTitle>
                <div>
                    채팅유저 목록
                </div>
            </ContentTitle>
            <div className='contents'>
                {ids}
            </div>
        </ContentWrapper>
    )
}

const UserTexts = ({list})=>{
    const TextTitle = styled.div`
        position :relative;
        .searchBox{
            position: absolute;
            right:0;
        }
    `

    const TextUnit = styled.div`
        display : flex;
        min-height : 25px;
        position: relative;
        >div{
            flex: none;
        }
        >span{
            padding : 0 10px;
        }
        word-break:break-all;
        white-space:normal;
    `
    let texts = list.map(l =>{
        const {id,text} = l;
        return (
            <TextUnit>
                <UserId>{id} </UserId>:
                <span> {text}</span>
            </TextUnit>
        )
    })
    return (
        <ContentWrapper>
            <TextTitle>
                <ContentTitle>
                    <div>
                        채팅목록
                    </div>
                    <div className='searchBox'>
                        <SearchInput/>
                        <SearchButton>찾기</SearchButton>
                    </div>
                </ContentTitle>
            </TextTitle>
            <div className='contents'>
                {texts}
            </div>
        </ContentWrapper>
    )
}
export default function room(){
    return (
        <RoomWrapper>
            <div id='roomContent'>
                <UserIds list={ids}/>
                <UserTexts list={contents}/>
            </div>
        </RoomWrapper>
    )
}

const ids= [
    'asd',
    'asd','asd',
    'asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd',
]
const contents=[
    {
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasd"
    },{
        id:'asd',
        text:"dasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasd"
    },
]