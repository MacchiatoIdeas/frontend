import React from 'react';

import style from './InlineDocument.less';

export default class InlineDocument extends React.Component {
  render() {
    const {document} = this.props;

    const sections = JSON.parse(document.text);

    return (
      <div className={`${style.Document}`}>
        {sections.map((section, i) => {
          switch (section.schema) {
            case 'text':
              return <div key={i}>{this.renderTextSection(section.text)}</div>
          }
        })}
      </div>
    )
  }

  renderTextSection(text) {
    return <div dangerouslySetInnerHTML={{__html: text}}/>;
  }
}
