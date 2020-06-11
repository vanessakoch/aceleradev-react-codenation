import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';

import './Topbar.scss';

const Topbar = () => {
  const { user } = useSelector((state) => state);

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>
        <div className="user">
          <span className="user__name">{user.display_name}</span>
          <figure className="user__thumb">
            <img
              src={user.thumb}
              alt={`foto de perfil de ${user.display_name}`}
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Topbar;