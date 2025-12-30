import Image from 'next/image';
import logo from '../../public/logo.png';

function Header() {
  
  return (
    <header className="shadow-md p-4 h-min-16 bg-gray-100">
      <Image src={logo} alt="Logo" width={150}/>
    </header>
  );
}

export default Header