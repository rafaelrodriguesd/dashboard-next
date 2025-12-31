async function Resumo(from: string, to: string) {

    const datas = {
        "dataInicio" : from,
        "dataFim" : to
    }

    try {

        const res = await fetch("https://belezalowcost.pt/wp-json/api/v1/relatorio-vendas", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(datas),
        });

        if (!res.ok) throw new Error("Erro ao buscar dados");

        return res.json()

    } catch (err) {
        
    } finally {
        
    }
}

export default Resumo
