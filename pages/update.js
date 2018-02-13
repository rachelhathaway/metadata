import { objectOf, shape, string } from 'prop-types';
import React from 'react';
import MetadataForm from '../components/MetadataForm';
import UrlForm from '../components/UrlForm';

function UpdatePage({ url: { query } }) {
  if (query.resource) {
    return <MetadataForm resource={query.resource} />;
  }
  return <UrlForm />;
}

UpdatePage.propTypes = {
  url: shape({ query: objectOf(string) })
};

UpdatePage.defaultProps = {
  url: {
    query: {}
  }
};

export default UpdatePage;
