import React from 'react';
import style from './TrueOrFalseLine.less';

const TrueOrFalseLine = ({value, index, isTrue, onChange, onClick}) =>

  <label style={{margin: 0, padding: 0, marginBottom: 8}} className={style.input}>
    <input type="text" value={value} onChange={(e) => onChange(index, e.target.value)}
           placeholder={`alternativa ${index + 1}`}/>
    <div>
      {value !== '' ?
        <button tabIndex="-1" onClick={() => onClick(index)} className={`btn btn-default lead ${isTrue ? style.true : ""}`}>
          {isTrue ?
            <span>V</span>
          :
            <span>F</span>
          }
        </button>
        : undefined}
    </div>
  </label>;

export default TrueOrFalseLine;
