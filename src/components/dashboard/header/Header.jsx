import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import {
  Title,
  ListControl,
  FormControl,
  SubTitle,
  InputGroup,
} from '../../_custom';
import {
  createMenu,
  changeMenuState,
  resetValue,
  getAllMenus,
} from '../../../redux/dashboard/menuSlice';
import ControlItem from './ControlItem';
import { mediaQuery } from '../../../utils/styles-values';

const Header = () => {
  const {
    menus,
    title,
    url,
    menuLoader,
    createSuccess,
    deleteSuccess,
    updateSuccess,
  } = useSelector(store => store.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenus('/menus'));
  }, [dispatch, createSuccess, deleteSuccess, updateSuccess]);

  const handleSubmit = () => {
    dispatch(createMenu({ url: '/menus', value: { title, url } }));
    dispatch(resetValue());
  };

  return (
    <HeaderWrapper>
      <Title title="Header Control" />

      <div className="content-container">
        <FormControl method={handleSubmit}>
          <SubTitle title="Create Menu Item" />
          <div className="vertical-container">
            <InputGroup
              name="title"
              title="Title"
              value={title}
              method={changeMenuState}
              placeHolder="Menu title"
            />
            <InputGroup
              name="url"
              title="Url"
              value={url}
              method={changeMenuState}
              placeHolder="Menu url (#home)"
            />
          </div>
        </FormControl>

        <ListControl>
          <SubTitle title="Menu List" />
          {menuLoader ? (
            <div>loading</div>
          ) : (
            <div className="list">
              {menus.length > 0 ? (
                menus.map((item, idx) => (
                  <ControlItem key={item._id} {...item} idx={idx} />
                ))
              ) : (
                <p>Add menu to List</p>
              )}
            </div>
          )}
        </ListControl>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section`
  width: 100%;

  .vertical-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > *:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  @media ${mediaQuery.sm} {
    .vertical-container {
      flex-direction: row;
    }
  }
`;

export default Header;
