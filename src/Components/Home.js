import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllAuthors } from '../actions';
import AuthorCard from './AuthorCard';

import { Row, Col } from 'antd';

function Home() {
  const dispatch = useDispatch();
  const authorsList = useSelector((state) => state.authorsList);

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);

  return (
    <Row className="container" justify="center" align="top" gutter={16}>
      {authorsList ? (
        authorsList.map((author) => (
          <Col key={author.id}>
            <Link to={'/' + author.id}>
              <AuthorCard author={author} />
            </Link>
          </Col>
        ))
      ) : (
        <h1>Wait for a moment please</h1>
      )}
    </Row>
  );
}

export default Home;
