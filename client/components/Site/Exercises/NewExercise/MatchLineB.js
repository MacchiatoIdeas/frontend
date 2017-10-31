import React from 'react';
import style from './Matchline.less';


const MatchLineB = ({value, index, onChange, hover}) =>

  <label style={{margin: 0, padding: 0, marginBottom: 8}} className={`${style.sideB} ${hover ? style.focus : ''}`}>
    <div>
      <span>{value ? index + 1 : "•"}</span>
    </div>
    <input type="text" value={value} onChange={(e) => onChange(index, e.target.value)}
           placeholder={`Término ${index + 1}`}/>
  </label>;

export default MatchLineB;