import React from 'react';

let md = require('markdown-it')(),
  mk = require('markdown-it-katex');

md.use(mk);

const MarkdownKatex = ({markdown}) =>
  <div dangerouslySetInnerHTML={{__html: md.render(markdown)}}>
    {markdown === "" && markdown === undefined ?
      <blockquote><span className='lead text-warning'>Elemento vacío</span></blockquote>
    : undefined}
  </div>;

export default MarkdownKatex;