import React from 'react';
import {Link} from 'react-router-dom';

const SidebarLink = ({title, slug, type, unit}) =>
  <div className="playlist-item">
    <Link to={`/site/units/${unit.id}/${type}/${slug}`}>
      <div className="playlist-item-body text-capitalize">
        {title}
      </div>
    </Link>
  </div>;

export default class UnitSidebar extends React.Component {
  render() {
    const {type, unit} = this.props;

    return (
      <div className="playlist playlist-compact">
        <SidebarLink title="Trending" slug="trending" unit={unit} type={type}/>
        <SidebarLink title="Más Visitados" slug="most-viewed" unit={unit} type={type}/>
        <SidebarLink title="Recientes" slug="recent" unit={unit} type={type}/>
        <SidebarLink title="De mi Autoría" slug="own" unit={unit} type={type}/>
      </div>
    )
  }
}
