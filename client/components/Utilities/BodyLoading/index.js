import React from 'react';
import Loading from '../Loading/index';

const BodyLoading = ({padding = 128}) =>
  <div style={{padding}}>
    <Loading color="#444"/>
  </div>;

export default BodyLoading;
