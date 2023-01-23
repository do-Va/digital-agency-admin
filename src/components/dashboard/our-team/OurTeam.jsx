import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import {
  ControlItem,
  FormControl,
  InputGroup,
  ListControl,
  SubTitle,
  Title,
  UploadContainer,
} from '../../_custom';
import {
  changeOurTeamState,
  getAllOurTeams,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  resetValue,
  uploadTeamMemberImage,
} from '../../../redux/dashboard/ourTeamSlice';
import { useEffect } from 'react';
import { mediaQuery } from '../../../utils/styles-values';

const OurTeam = () => {
  const {
    name,
    title,
    image,
    ourTeams,
    ourTeamsLoader,
    createSuccess,
    deleteSuccess,
    updateSuccess,
    uploadSuccess,
    uploadLoader,
  } = useSelector(store => store.ourTeam);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOurTeams('/our-teams'));
  }, [dispatch, createSuccess, deleteSuccess, updateSuccess]);

  const handleSubmit = () => {
    dispatch(
      createTeamMember({ url: '/our-teams', value: { name, title, image } })
    );

    dispatch(resetValue());
  };

  const handleUpdate = (_id, value) => {
    dispatch(
      updateTeamMember({
        url: `/our-teams/${_id}`,
        value: {
          name: value.name,
          title: value.title,
          image: image || value.image,
        },
      })
    );
  };

  const handleDelete = _id => {
    dispatch(deleteTeamMember(`/our-teams/${_id}`));
  };

  return (
    <OurTeamWrapper>
      <Title title="Our Team Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Create Team Member" />

          <InputGroup
            name="name"
            title="Name"
            value={name}
            method={changeOurTeamState}
            placeHolder="John Doe"
          />

          <InputGroup
            name="title"
            title="Title"
            value={title}
            method={changeOurTeamState}
            placeHolder="Ceo"
          />

          <UploadContainer
            method={uploadTeamMemberImage}
            uploadLoader={uploadLoader}
          />
        </FormControl>

        <ListControl>
          <SubTitle title="Our Team List" />

          {ourTeamsLoader ? (
            <div>loading</div>
          ) : (
            <div className="list">
              {ourTeams.length > 0 ? (
                ourTeams.map((item, idx) => (
                  <ControlItem
                    key={item._id}
                    {...item}
                    idx={idx}
                    updateMethod={handleUpdate}
                    deleteMethod={handleDelete}
                    uploadMethod={uploadTeamMemberImage}
                    uploadLoader={uploadLoader}
                  />
                ))
              ) : (
                <p>Add team member to List</p>
              )}
            </div>
          )}
        </ListControl>
      </div>
    </OurTeamWrapper>
  );
};

const OurTeamWrapper = styled.section`
  width: 100%;

  .list {
    & > *:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  @media ${mediaQuery.sm} {
    .list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(495px, 1fr));
      gap: 20px;
    }
  }
`;

export default OurTeam;
