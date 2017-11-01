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

const showAlert = (message, onClose = () => {}) => {
  ref.show(message, {
    type: 'success',
    time: onClose !== undefined ? 2000 : undefined,
    icon: <img src={icons.alert} width={32} height={32}/>,
    onClose: onClose
  });
};

export default showAlert;
