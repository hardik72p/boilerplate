import React from 'react';
import LoaderConnect from './index';

const Loader = props => {
  if (props.Loader.isLoader) {
    return (
      <div className="loader-overlay">
        <img style={{width: "55px", height:"55px"}} src="/assets/images/loader.gif" />
      </div>
    );
  }
  return <></>;
};

export default LoaderConnect(Loader);
