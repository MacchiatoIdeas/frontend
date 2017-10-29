import React from 'react';
import SpecialButton from '../SpecialButton';

import style from './style.less';

const Teacher = ({}) =>
  <div className={style.Form}>
    <label>
      <div>Nombre de Usuario</div>
      <input type="text" placeholder="Juan Perez"/>
    </label>

    <label>
      <div>Correo electrónico</div>
      <input type="text" placeholder="ejemplo@ejemplo.com"/>
    </label>

    <label>
      <div>Contraseña</div>
      <input type="password" placeholder="************"/>
    </label>

    <SpecialButton text="Ya tengo una Cuenta" link="/login"/>

    <button>Continuar</button>
  </div>;

export default Teacher;
