import React from 'react';

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} alt="cars" />;
  });

  return <div>{images}</div>;
};

export default ImageList;

//

// const listUser = users.map((id, user) => <li key={id}> {user}</li>);

// return <ul>{listUser}</ul>;
