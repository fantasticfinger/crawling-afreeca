import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SearchBox from 'components/commons/searchBox';
import { getRoomList } from 'apis/roomList';
import useInput from 'hooks/useInput';
import useAsyncReducer from 'hooks/useAsyncReducer';
import {
  initActionState,
  createAsyncDispatcher,
  createAsyncHandler,
} from 'asyncActionUtils';
import ListWrapper from './ListWrapper';
import ListSearchBoxWrapper from './ListSearchBoxWrapper';
import ListTable from './ListTable';
import ListTableWrapper from './ListTableWrapper';
import PageNationComponent from '../pagination';

const URL = '/main/rooms';

const initState = {
  list: initActionState,
};
const getList = createAsyncDispatcher('GET_LIST', getRoomList);
const handler = createAsyncHandler('GET_LIST', 'list');

function RoomListComponent() {
  const history = useHistory();
  const { page, search } = useParams();
  const [state] = useAsyncReducer(initState, handler, getList, page, search);
  const [{ keyword }, onChange] = useInput({ keyword: '' });
  const { data, loadding, error } = state.list;
  const handleSearch = () => {
    const value = keyword.replace(/^\s+|\s+$/g, '');
    const param = keyword === '' ? '' : `/${value}`;
    history.push(`${URL}/1${param}`);
  };
  if (loadding) return <div>loadding</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  return (
    <ListWrapper>
      <ListSearchBoxWrapper>
        <SearchBox
          name="keyword"
          onChange={onChange}
          value={keyword}
          onClick={handleSearch}
        />
      </ListSearchBoxWrapper>

      <ListTableWrapper>
        <ListTable items={data.rooms} />
        <PageNationComponent
          currentPage={page}
          lastPage={data.lastPage}
          link={URL}
          search={search}
        />
      </ListTableWrapper>
    </ListWrapper>
  );
}

export default RoomListComponent;
