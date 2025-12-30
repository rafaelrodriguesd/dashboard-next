import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import MenuItem from './menuItem';

function Sidebar() {
  return (
    <aside className='bg-white shadow-md p-4 w-56'>
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
  );
}

export default Sidebar