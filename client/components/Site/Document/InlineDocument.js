import React from 'react';

import style from './InlineDocument.less';
import MarkdownKatex from "./MarkdownKatex/index";

export default class InlineDocument extends React.Component {
  render() {
    const {document} = this.props;

    const sections = JSON.parse(document.text);
    console.log(sections);
    return (
      <div className={`${style.Document}`}>
        {sections.map((section, i) => {
          switch (section.schema) {
            case 'text':
              return <MarkdownKatex markdown={section.text}/>;

            case 'title':
              return <h1>{section.title}</h1>;

            case 'image':
              return <img className={style.image} src={section.url}/>;

            case 'geogebra':
              return <img className={style.image} src={section.image}/>;
          }
        })}
      </div>
    )
  }
}
