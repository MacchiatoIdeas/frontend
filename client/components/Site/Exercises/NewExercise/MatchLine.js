import React from 'react';

const MatchLine = ({value, index, onChange}) =>

  <label style={{margin: 0, padding: 0, marginBottom: 8}}>
    <input type="text" value={value} onChange={(e) => onChange(index, e.target.value)}
           placeholder={`Término ${index + 1}`}/>
  </label>;

export default MatchLine;
