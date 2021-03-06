import React from 'react';
import { useParams } from 'react-router-dom'
import RoomWrapper from './Wrapper'
import { RoomInnerWrapper, RoomInnerTitle } from './roomInnerComponent'
import SearchBox from 'components/commons/searchBox'
import UserId from './userId'
import UserChat from './userChat'
import useInput from 'hooks/useInput'
import useAsyncReducer from 'hooks/useAsyncReducer'
import { useHistory } from 'react-router-dom'
import {
    initActionState,
    createAsyncDispatcher,
    createAsyncHandler,
} from 'asyncActionUtils';
import * as chatsApi from 'apis/chats'

const LISTOFUSERDIV = <div>채팅유저 목록</div>
const LISTOFCHATDIV = <div>채팅 목록</div>

const initState = {
    chats: initActionState
}
const URL = '/main/room';
const handler = createAsyncHandler('GET_CHATS', 'chats')
const getChats = createAsyncDispatcher('GET_CHATS', chatsApi.getChats)

function ChatComponent() {
    const { id, search } = useParams();
    const history = useHistory();
    const [{ keyword }, onChange] = useInput({ keyword: '' });
    const [state] = useAsyncReducer(initState, handler, getChats, id, search)
    const { data, loadding, error } = state.chats;

    const handleSearch = () => {
        const value = keyword.replace(/^\s+|\s+$/g, '');
        let param = keyword === '' ? '' : `/${value}`
        history.push(`${URL}/${id}${param}`)
    }
    if (loadding) return null;
    if (error) return null;
    if (!data) return null;

    return (
        <RoomWrapper>
            <RoomInnerWrapper>
                <RoomInnerTitle>
                    {LISTOFUSERDIV}
                </RoomInnerTitle>
                <div className='contents'>
                    <UserId list={data.userList} />
                </div>
            </RoomInnerWrapper>

            <RoomInnerWrapper>
                <RoomInnerTitle>
                    {LISTOFCHATDIV}
                    <div className='searchBox'>
                        <SearchBox name='keyword' value={keyword} onChange={onChange} onClick={handleSearch} />
                    </div>
                </RoomInnerTitle>
                <div className='contents'>
                    <UserChat chatList={data.chatList} />
                </div>
            </RoomInnerWrapper>
        </RoomWrapper>
    )
}
export default ChatComponent;