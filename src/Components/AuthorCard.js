import React from 'react';

import { Card } from 'antd';
const { Meta } = Card;

function AuthorCard({ author }) {
  const { urls, user, description, alt_description } = author;
  
  return (
    <Card className="authorCard" style={{ width: 240, height: 480 }} cover={<img src={urls.thumb} alt={description || 'No Decription'} />}>
      <Meta title={user.username} description={alt_description || 'No Decription'} />
    </Card>
  );
}

export default AuthorCard;
