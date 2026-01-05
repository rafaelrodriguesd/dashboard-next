import Card from "../components/card";
import { UserIcon, UserPlusIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import DatePicker from "../components/datePicker";
import { formatDate } from "../utils/formatDate";
import OrderList from "../components/orderList";
import Resumo from "../services/resumoRetencao";
import Pedidos from "../services/pedidos";

type Props = {
  searchParams: {
    from?: string,
    to?: string
  }
}

export default async function Retencao({ searchParams }: Props){

    let { from, to } = await searchParams

    if (!from || !to) {
        const hoje = new Date();
        const primeiro = new Date();
        primeiro.setDate(1)
        from = formatDate(primeiro);
        to = formatDate(hoje)
    }

    const dados = await Resumo(from, to);
    const pedidos = await Pedidos(from, to)

    return(

        <div className="grid gap-4 w-full">
            <div className="bg-white w-full p-4 rounded-md shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h1 className="text-xl font-bold ">Retenção de Clientes</h1>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <p className="p-4">Selecione o período: </p>
                    <DatePicker />
                </div>
                
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 bg-white p-4 rounded-md shadow-md">

                <Card titulo="Clientes Novos" valor={dados.dados.clientes_novos} icon={UserPlusIcon}/>
            
                <Card titulo="Clientes Recorrentes" valor={dados.dados.clientes_recorrentes} icon={UserIcon}/>

                <Card titulo="Ticket Médio" valor={parseFloat(dados.dados.ticket_medio)} formato="$" icon={BanknotesIcon}/>
            
                <Card titulo="Receita Total" valor={parseFloat(dados.dados.receita_total)} formato="$" icon={BanknotesIcon}/>

            </div>

            <div className="bg-white p-4 rounded-md shadow-md">

                <OrderList data={pedidos}/>
                
            </div>
            
            
            
        </div>
    )

}