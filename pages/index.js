import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';

const Page = props => (
  <div>
    {props.searchImages &&
      props.searchImages.records.map(i => <div key={i.id}>{i.id}</div>)}
  </div>
);

Page.propTypes = {
  searchImages: PropTypes.object // eslint-disable-line
};

export default withData(
  graphql(
    gql`
      query searchImages {
        searchImages {
          records {
            id
          }
        }
      }
    `,
    {
      props: ({ data }) => ({
        ...data
      })
    }
  )(Page)
);
