import React from 'react';
import style from './Matchline.less';
import ClickOutHandler from 'react-onclickout';


export default class MatchLineA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOptions: false,
    };
    this.showOptions = this.showOptions.bind(this);
    this.onOptionsBlur = this.onOptionsBlur.bind(this);
    this.onMouseLeaveOption = this.onMouseLeaveOption.bind(this);
    this.onMouseOverOption = this.onMouseOverOption.bind(this);
    this.selectB = this.selectB.bind(this);
  }


  showOptions() {
    this.setState({
      showOptions: true,
    });
  }

  onOptionsBlur() {
    this.setState({
      showOptions: false,
    });
  }

  onMouseOverOption(index) {
    this.props.setHover(index);
  }

  onMouseLeaveOption() {
    this.props.setHover(undefined);
  }

  selectB(selected) {
    this.setState({
      showOptions: false,
    });
    this.props.updateAnswer(this.props.index, selected);
    this.onMouseLeaveOption();
  }

  renderOptions() {
    let {sideB} = this.props;
    if (this.state.showOptions) {
      return (
        <div className={style.optionsWrapper}>
          <ClickOutHandler onClickOut={this.onOptionsBlur}>
            <div className={style.options}>
              {sideB.map((item, i) =>
                <button key={i} onClick={() => this.selectB(i)} onMouseOver={() => this.onMouseOverOption(i)}
                        onMouseLeave={this.onMouseLeaveOption}>{i + 1}</button>)}
            </div>
          </ClickOutHandler>
        </div>
      )
    }
  }

  render() {
    let {value, index, onChange, selected} = this.props;
    return (
      <label style={{margin: 0, padding: 0, marginBottom: 8}} className={style.sideA}>
        <input onFocus={() => this.onMouseOverOption(selected)} onBlur={this.onMouseLeaveOption} type="text"
               value={value} onChange={(e) => onChange(index, e.target.value)}
               placeholder={`Término ${index + 1}`}/>

        <div>
          {value !== '' ?
            <div>
              <button tabIndex="-1" onClick={this.showOptions} className={`btn btn-default`}>
                {selected !== undefined ? selected + 1 : "?"}
              </button>

              {this.renderOptions()}
            </div>
            : undefined}
        </div>

      </label>
    )
  }
}