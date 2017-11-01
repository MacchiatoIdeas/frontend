import React from 'react';
import style from './style.less';

let md = require('markdown-it')(),
  mk = require('markdown-it-katex');

md.use(mk);

const MarkdownKatex = ({markdown}) =>
  <div dangerouslySetInnerHTML={{__html: md.render(markdown)}} className={style.wrapper}>
    {markdown === "" && markdown === undefined ?
      <blockquote><span className='lead text-warning'>Elemento vacío</span></blockquote>
    : undefined}
  </div>;

export default MarkdownKatex;