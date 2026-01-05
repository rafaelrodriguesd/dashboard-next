import { formatDate } from "../utils/formatDate";
import DatePicker from "../components/datePicker";
import Pedidos from "../services/pedidos";
import OrderList from "../components/orderList";

type Props = {
    searchParams: {
    from?: string,
    to?: string
  }
}

export default async function Profissionais({ searchParams }:Props) {

    let { from, to } = await searchParams

    if (!from || !to) {
            const hoje = new Date();
            const primeiro = new Date();
            primeiro.setDate(1)
            from = formatDate(primeiro);
            to = formatDate(hoje)
        }

    const pedidos = await Pedidos(from, to)

    return (

        <div className="grid gap-4 w-full">
            <div className="bg-white w-full p-4 rounded-md shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h1 className="text-xl font-bold ">Profissionais</h1>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <p className="p-4">Selecione o período: </p>
                    <DatePicker />
                </div>
                
            </div>

            <div className="bg-white p-4 rounded-md shadow-md">

                <OrderList data={pedidos}/>
                
            </div>
        </div>

    )
    
}