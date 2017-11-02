import React from 'react';
import ReactLoading from 'react-loading';

const TreniumFormLoading = ({isSending}) => {
  if (!isSending) {
    return null;
  }

  return (
    <div className="pull-right" style={{paddingTop: 26}}>
      <ReactLoading type="spin" color="#000" width={32} delay={0}/>
    </div>
  )
};

export default TreniumFormLoading;
