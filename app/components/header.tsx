"use client"
import Image from 'next/image';
import logo from '../../public/logo.png';
import MenuButton from './menuButton';
import { useState } from 'react';
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import MenuItem from './menuItem';

function Header() {

  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };
  
  return (
    <header className="shadow-md p-4 h-min-16 bg-gray-100 flex items-center justify-between">
      <Image src={logo} alt="Logo" width={150}/>

      <MenuButton onClick={handleMenuClick}/>

      {open && (

        <div className='fixed inset-0 z-40 lg:hidden bg-black/50 shadow-md' onClick={() => setOpen(false)}>

          <aside className='absolute left-0 top-0 h-full w-64 bg-white p-4 z-50'>
            <nav>
              <MenuItem
                  label="Home"
                  href="/"
                  icon={HomeIcon}
                />

              <MenuItem
                  label="Retenção de Clientes"
                  href="/retencao"
                  icon={UsersIcon}
                />
            </nav>
          </aside>

        </div>
      )}

    </header>
  );
}

export default Header