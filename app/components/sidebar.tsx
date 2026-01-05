'use client'
import { HomeIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import MenuItem from './menuItem';

function Sidebar() {
  return (
    <aside className='bg-white shadow-md p-4 w-64 hidden lg:block'>
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

        <MenuItem
          label="Profissionais"
          href="/profissionais"
          icon={RocketLaunchIcon}
        />
      </nav>
    </aside>
  );
}

export default Sidebar