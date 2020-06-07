import React, { useState } from 'react';
import SuccessMessage from '../../components/SuccessMessage';
import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);
  
  const handleSetName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const handleSetAvatar = (e) => {
    e.persist();
    setAvatar(e.target.value);
  };

  const handleSetUsername = (e) => {
    e.persist();
    setUsername(e.target.value);
  };

  const handleSetEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  const handleNewUser = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body,
    }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar
                  ? <img src={avatar} alt="" />
                  : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt="" />
                }
              </div>
              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleSetName(e)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => handleSetUsername(e)}
            />

            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleSetEmail(e)}
            />

            <label>Url da Imagem de Perfil</label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(e) => handleSetAvatar(e)}
            />

            <button
              type="button"
              onClick={(e) => handleNewUser(e)}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>
      {submit && (<SuccessMessage />)}
    </React.Fragment>
 );
};

export default UserForm;