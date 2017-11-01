import React from 'react';
import AlertContainer from 'react-alert';
import * as icons from '../assets/flaticons';

let ref = null;

export const Alert = <AlertContainer offset={14}
                              ref={a => ref = a}
                              position="top right"
                              theme="light"
                              time={5000}
                              transition="scale"/>;

const showAlert = (message) => {
  ref.show(message, {
    type: 'success',
    icon: <img src={icons.alert} width={32} height={32}/>,
  });
};

export default showAlert;
