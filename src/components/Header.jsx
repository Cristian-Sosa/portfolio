import Button from './Button';

function Header() {
  return (
    <header>
      <div className="text">
        <span className="text-1">Evolucioná</span>
        <span className="text-2">Tu</span>
        <span className="text-3">Emprendimiento</span>

        <Button text='Ver Servicios' type={true} />
      </div>

      <figure className="mockup">
        <img src="./src/assets/images/mockup.png" alt="mockup" />
      </figure>
    </header>
  );
}

export default Header;
