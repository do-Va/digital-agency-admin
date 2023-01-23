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
  changeTestimonialState,
  getAllTestimonials,
  createTestimonialMember,
  updateTestimonialMember,
  deleteTestimonialMember,
  resetValue,
  uploadTestimonialMemberImage,
} from '../../../redux/dashboard/testimonialSlice';
import { useEffect } from 'react';

const Testimonial = () => {
  const {
    name,
    title,
    image,
    description,
    testimonials,
    testimonialsLoader,
    createSuccess,
    deleteSuccess,
    updateSuccess,
    uploadSuccess,
    uploadLoader,
  } = useSelector(store => store.testimonial);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTestimonials('/testimonial'));
  }, [dispatch, createSuccess, deleteSuccess, updateSuccess]);

  const handleSubmit = () => {
    dispatch(
      createTestimonialMember({
        url: '/testimonial',
        value: { name, title, description, image },
      })
    );

    dispatch(resetValue());
  };

  const handleUpdate = (_id, value) => {
    dispatch(
      updateTestimonialMember({
        url: `/testimonial/${_id}`,
        value: {
          name: value.name,
          title: value.title,
          image: image || value.image,
          description: value.description,
        },
      })
    );
  };

  const handleDelete = _id => {
    dispatch(deleteTestimonialMember(`/testimonial/${_id}`));
  };

  return (
    <TestimonialWrapper>
      <Title title="Testimonial Control" />

      <div className="content-container">
        <FormControl
          method={handleSubmit}
          isDisabled={uploadSuccess}
          upload="true"
        >
          <SubTitle title="Create Testimonial Member" />

          <InputGroup
            name="name"
            title="Name"
            value={name}
            method={changeTestimonialState}
            placeHolder="John Doe"
          />

          <InputGroup
            name="title"
            title="Title"
            value={title}
            method={changeTestimonialState}
            placeHolder="Ceo"
          />

          <InputGroup
            textarea="true"
            name="description"
            title="Description"
            value={description}
            method={changeTestimonialState}
            placeHolder="Description"
          />

          <UploadContainer
            method={uploadTestimonialMemberImage}
            uploadLoader={uploadLoader}
          />
        </FormControl>

        <ListControl>
          <SubTitle title="Testimonial List" />

          {testimonialsLoader ? (
            <div>loading</div>
          ) : (
            <div className="list">
              {testimonials.length > 0 ? (
                testimonials.map((item, idx) => (
                  <ControlItem
                    key={item._id}
                    {...item}
                    idx={idx}
                    updateMethod={handleUpdate}
                    deleteMethod={handleDelete}
                    testimonial="true"
                    uploadLoader={uploadLoader}
                    uploadMethod={uploadTestimonialMemberImage}
                  />
                ))
              ) : (
                <p>Add testimonial member to List</p>
              )}
            </div>
          )}
        </ListControl>
      </div>
    </TestimonialWrapper>
  );
};

const TestimonialWrapper = styled.section`
  width: 100%;

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > *:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Testimonial;
