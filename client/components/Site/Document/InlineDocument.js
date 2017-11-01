import React from 'react';

import style from './InlineDocument.less';
import MarkdownKatex from "../../Utilities/MarkdownKatex/index";

export default class InlineDocument extends React.Component {
  render() {
    const {document} = this.props;

    const sections = JSON.parse(document.text);

    return (
      <div className={`${style.Document}`}>
        {sections.map((section, i) => {
          switch (section.schema) {
            case 'text':
              return <MarkdownKatex markdown={section.text}/>
          }
        })}
      </div>
    )
  }
}
