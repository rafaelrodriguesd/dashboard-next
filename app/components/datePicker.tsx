"use client"

import { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/navigation'
import { formatDate } from "../utils/formatDate";



function DatePicker(){

    const hoje = new Date();
    const primeiro = new Date();
    primeiro.setDate(1)

    const [dateFrom, setDateFrom] = useState<Date | null>(primeiro);
    const [dateTo, setDateTo] = useState<Date | null>(hoje);

    const Router = useRouter();

    function handleFilter(){

        if(dateFrom && dateTo){
            Router.push(`/retencao/?from=${formatDate(dateFrom)}&to=${formatDate(dateTo)}`)
        }else{
            alert("Informe um período válido para filtrar.")
        }
        
    }

    return(
        <div className='flex flex-row items-center'>

        <ReactDatePicker
            selected={dateFrom}
            onChange={(date: Date | null | undefined) => setDateFrom(date ?? null)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione uma data"
            className="border px-3 py-2 rounded mx-3"
        />

            <p> até </p>

        <ReactDatePicker
            selected={dateTo}
            onChange={(dateTo) => setDateTo(dateTo)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione uma data"
            className="border px-3 py-2 rounded mx-3"
        />

        <button className='bg-gray-300 hover:bg-gray-400 cursor-pointer px-4 py-2' onClick={handleFilter}>Filtrar</button>

        </div>
    )


}

export default DatePicker