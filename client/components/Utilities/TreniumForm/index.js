import style from './style.less';

import React from 'react';

const TreniumForm = ({children, ...props}) =>
  {
    return (
      <form className={style.Form} {...props}>
        {children}
      </form>
    )
  };

export default TreniumForm;
