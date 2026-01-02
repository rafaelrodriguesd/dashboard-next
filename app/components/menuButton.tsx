import { Bars3Icon } from '@heroicons/react/24/outline';

type MenuButtonProps = {
  onClick: () => void;
};

function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md hover:bg-gray-200 focus:outline-none lg:hidden"
    >
      <Bars3Icon className="w-6 h-6 text-gray-800" />
    </button>
  );
}

export default MenuButton;