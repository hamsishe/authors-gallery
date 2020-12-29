import React from 'react';

import { Card } from 'antd';
const { Meta } = Card;

function AuthorCard({ author }) {
  const { urls, user } = author;
  let description, alt_description;
  if (author.description === null) {
    description = 'No Decription';
  } else {
    description = author.description;
  }
  if (author.alt_description === null) {
    alt_description = 'No Decription';
  } else {
    alt_description = author.alt_description;
  }
  return (
    <Card className="authorCard" style={{ width: 240, height: 480 }} cover={<img src={urls.thumb} alt={description} />}>
      <Meta title={user.username} description={alt_description} />
    </Card>
  );
}

export default AuthorCard;
