import { IoSearchOutline } from 'react-icons/io5';
import './Navbar.css';

export default function Navbar() {
  return (
    <div id="header">
      {/*area do link de apostas */}
      <div className="liItem">
        <ul>
          <li>
            <span>Esportes</span>
          </li>
          <li>Fantasy-Esporte</li>
          <li>Cassino</li>
          <li>Cassino Ao-Vivo</li>
          <li>Jogos</li>
          <li>Pôquer</li>
          <li>Bingo</li>
          <li>Extra</li>
        </ul>

        <div className="linkItem">
          <a href="">Jogo Responsável</a>
          <a href="">Ajuda</a>
        </div>
      </div>

      <div className="login">
        <div className="contentLogo">
          <img src="src\assets\bet.png" alt="" />
        </div>

        <div className='contentLinkLive'>
          <div className='contentLinkEsporte'>
            <span>Esportes</span>
          </div>
          <div>
            <a className="linkLive">Ao-Vivo</a>
          </div>
        </div>

        <div className="contentButton">
          <div className="btnLupa">
            <IoSearchOutline />
          </div>
          <button className="btnRegister">Registre-se</button>
          <button className="btnLogin">Login</button>
        </div>
      </div>
    </div>
  );
}
