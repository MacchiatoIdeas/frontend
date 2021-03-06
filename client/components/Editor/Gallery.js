import React from 'react';

import style from './Gallery.less';
import ReactLoading from 'react-loading';
import Dropzone from 'react-dropzone';
import * as icons from '../../assets/flaticons';
import BodyLoading from "../Utilities/BodyLoading/index";
import {getAllOwnImages, sendImage} from '../../requests/gallery';


export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      images: [],
      selectedUrl: null,
      selected: null,
      showImages: true,
      uploaded: [],
    };

    this.renderLoading = this.renderLoading.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.changeSection = this.changeSection.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.useImage = this.useImage.bind(this);
  }

  renderLoading() {
    if (this.state.loading) {
      return (
        <div className={`text-center ${style.loading}`}>
          <BodyLoading padding={0}/>
        </div>
      )
    }
  }

  removeRef(id) {
    this.refs[id].remove();
  }

  renderGallery() {
    if (!this.state.loading) {
      return (
        <div>
          {!this.state.images.length ?
            <span className={`lead text-muted ${style.emptyMessage}`}>
            No hay imágenes en tu galería
          </span> : ''}

          {this.state.images.map((img, key) =>
            <div key={key} className={`col-lg-3 col-md-4 col-sm-6 col-xs-12 ${style.thumbnail}`}>
              <div onClick={() => this.selectImage(img.key, img.url)}
                   className={this.state.selected === img.key ? style.selected : ""}>
                <div className={style.imageSpinner} ref={`img${key}`}>
                  <ReactLoading type="spin" color="#666"/>
                </div>
                <img src={img.url} alt="" onLoad={() => this.removeRef(`img${key}`)}/>
              </div>
            </div>
          )}
        </div>
      )
    }
  }

  selectImage(selected, url) {
    console.log(selected, url);
    this.setState({
      selectedUrl: url,
      selected: selected,
    })
  }

  componentDidMount() {
    getAllOwnImages()
      .then((response) => {
        this.setState({
          images: response.map(item => ({
            key: item.id,
            url: item.image,
          }))
        })
      });

    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000);
  }

  changeSection(state) {
    this.setState({
      showImages: state,
    })
  }

  onDrop(files) {
    // Saving file in the state
    this.setState({
      uploaded: files,
    })
  }

  uploadImage() {
    sendImage(this.state.uploaded[0]);

    this.setState({
      uploaded: [],
      showImages: true,
    });
  }

  useImage() {
    this.props.closeModal(this.state.selectedUrl);
  }

  render() {
    return (
      <div className="col-xs-12">
        <ul className={`nav nav-tabs ${style.tabs}`}>
          <li role="presentation" onClick={() => this.changeSection(false)}
              className={!this.state.showImages ? "active" : ""}><a>Nueva imagen</a></li>
          <li role="presentation" onClick={() => this.changeSection(true)}
              className={this.state.showImages ? "active" : ""}><a>Galería</a></li>
        </ul>
        {this.state.showImages ?
          <div className={style.wrapper}>
            {this.renderLoading()}
            {this.renderGallery()}
            {this.state.selected ?
              <button className={`btn btn-default btn-block ${style.submitBtn}`} onClick={this.useImage}>Usar imagen</button>
              : undefined}
          </div>
          :
          <div className={style.wrapper}>
            <Dropzone className={`${style.dropZone}`} onDrop={this.onDrop} multiple={false}>
              <div className="row">
                <div className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4 text-center">
                  <img src={icons.newImage}/>
                </div>

                <div className={`col-xs-12 text-center lead ${style.text}`}>
                  {
                    this.state.uploaded.length === 0 ?
                      'Arrastre una imagen aquí o presione para abrir una ventana de selección.'
                      :
                      this.state.uploaded[0].name
                  }
                </div>
              </div>
            </Dropzone>
            {!(this.state.uploaded.length === 0) ?
              <button onClick={this.uploadImage} className={`btn btn-default btn-block ${style.submitBtn}`}>Subir
                imagen</button>
              : undefined}
          </div>
        }
      </div>
    )
  }
}