import type { SVGProps } from 'react';

interface CardProps{

    titulo: string,
    valor: number | string,
    formato?: string,
    prefix?: string | undefined,
    sufix?: string | undefined,
    icon?: React.ElementType<React.SVGProps<SVGSVGElement>>

}

function Card({titulo, valor, formato, prefix, sufix, icon: Icon} : CardProps){

    valor = formato === "$" ? valor.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR' }) : valor

    return(

        <div className="bg-gray-200 p-4 flex flex-row rounded-lg">
            <div className="p-4 h-auto">
                {Icon && <Icon className="w-10 h-10 text-blue-500" />}
            </div>           
            <div className="flex flex-col justify-center">
                <h1 className="text-sm">{titulo}</h1>
                <p className="text-2xl font-black"><span>{prefix}</span> {valor}<span>{sufix}</span></p>
            </div>
            
        </div>

    )

}

export default Card