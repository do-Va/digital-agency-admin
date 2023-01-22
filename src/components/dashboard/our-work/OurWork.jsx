import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import {
  FormControl,
  InputGroup,
  ListControl,
  SubTitle,
  Title,
  UploadContainer,
  SelectGroup,
} from '../../_custom';
import {
  changeOurWorkState,
  getAllOurWorks,
  createWorkItem,
  updateWorkItem,
  resetValue,
  uploadWorkItemImage,
  deleteWorkItem,
} from '../../../redux/dashboard/ourWorkSlice';
import { categories } from '../../../utils/variables';
import WorkCard from './WorkCard';

const OurWork = () => {
  const {
    category,
    alt,
    image,
    ourWorks,
    ourWorksLoader,
    createSuccess,
    deleteSuccess,
    updateSuccess,
    uploadSuccess,
    uploadLoader,
  } = useSelector(store => store.ourWork);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOurWorks('/our-works'));
  }, [dispatch, createSuccess, deleteSuccess, updateSuccess]);

  const handleSubmit = () => {
    dispatch(
      createWorkItem({ url: '/our-works', value: { alt, category, image } })
    );

    dispatch(resetValue());
  };

  const handleUpdate = (_id, value) => {
    dispatch(
      updateWorkItem({
        url: `/our-works/${_id}`,
        value: {
          alt: value.alt,
          category,
          image: image || value.image,
        },
      })
    );
  };

  const handleDelete = _id => {
    dispatch(deleteWorkItem(`/our-works/${_id}`));
  };

  return (
    <OurWorkWrapper>
      <Title title="Our Work Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Create Work Item" />

          <InputGroup
            name="alt"
            title="Alternative text"
            value={alt}
            method={changeOurWorkState}
            placeHolder="Illustration image"
          />

          <SelectGroup
            objects={categories}
            method={changeOurWorkState}
            name="category"
            value={category}
            title="Select category"
          />

          <UploadContainer method={uploadWorkItemImage} />
        </FormControl>

        <ListControl>
          <SubTitle title="Our Work List" />

          {ourWorksLoader ? (
            <div>loading</div>
          ) : (
            <div className="card-container">
              {ourWorks.length > 0 ? (
                ourWorks.map(item => (
                  <WorkCard
                    key={item._id}
                    {...item}
                    updateMethod={handleUpdate}
                    deleteMethod={handleDelete}
                    uploadLoader={uploadLoader}
                  />
                ))
              ) : (
                <p>Add project to List</p>
              )}
            </div>
          )}
        </ListControl>
      </div>
    </OurWorkWrapper>
  );
};

const OurWorkWrapper = styled.section`
  flex: 1;

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;

export default OurWork;
