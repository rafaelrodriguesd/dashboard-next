import Link from 'next/link';

interface MenuIntemProps {
    label: string,
    href: string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function MenuItem({label, href, icon: Icon} : MenuIntemProps) {

    return(

        <Link 
            href={href}
            className={'flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition-colors'}
            >
            <Icon className="w-5 h-5" />
            {label}
        </Link>
        
    )


}

export default MenuItem