import React from 'react';
import { useSelector } from 'react-redux';

function AuthorImage({ authorID }) {
  const author = useSelector((state) => state.authorsList.filter((author) => author.id === authorID)[0]);
  let src;
  if (author.urls.raw) {
    src = author.urls.raw;
  } else {
    src = author.urls.full;
  }
  return <img style={{ width: author.width, height: author.height }} src={src} />;
}

export default AuthorImage;
