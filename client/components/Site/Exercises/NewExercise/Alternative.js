import React from 'react';

const Alternative = ({value, index, onChange}) =>
  <table width="100%">
    <tr>
      <td width="100%"><label style={{margin: 0, padding: 0, marginBottom: 8}}>
        <input type="text" value={value} onChange={(e) => onChange(index, e.target.value)}/>
      </label></td>
      <td width="0"><span className="glyphicon glyphicon-check" style={{width: 35, padding: 10}}/></td>
    </tr>
  </table>;

export default Alternative;
