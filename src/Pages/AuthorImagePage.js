import React from 'react';
import BasePage from './BasePage';
import AuthorImage from '../Components/AuthorImage';

function AuthorImagePage(props) {
  return (
    <BasePage>
      <AuthorImage authorID={props.match.params.id} />
    </BasePage>
  );
}

export default AuthorImagePage;
