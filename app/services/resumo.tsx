async function Resumo(from: string, to: string) {

    const API_KEY = process.env.APIKEY;

    const datas = {
        "dataInicio" : from,
        "dataFim" : to
    }

    try {

        if (!API_KEY) {
        throw new Error("API_KEY não definida");
        }

        const res = await fetch("https://belezalowcost.pt/wp-json/api/v1/relatorio-vendas", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY
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
