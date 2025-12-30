import { NextResponse } from 'next/server';
import { getPool } from '../../../lib/db';

export async function POST(request) {
  const body = await request.json();
  const { dataInicio, dataFim } = body;

  if (!dataInicio || !dataFim) {
    return NextResponse.json(
      { erro: 'Informe dataInicio e dataFim no body (YYYY-MM-DD)' },
      { status: 400 }
    );
  }

  const query = `
    SELECT
      SUM(CASE WHEN first_order.first_order_id = orders.order_id THEN 1 ELSE 0 END) AS clientes_novos,
      SUM(CASE WHEN first_order.first_order_id <> orders.order_id THEN 1 ELSE 0 END) AS clientes_recorrentes,
      ROUND(AVG(orders.total_sales), 2) AS ticket_medio,
      SUM(orders.total_sales) AS receita_total
    FROM kuw_wc_order_stats AS orders
    INNER JOIN (
      SELECT customer_id, MIN(order_id) AS first_order_id
      FROM kuw_wc_order_stats
      WHERE status = 'wc-completed'
      GROUP BY customer_id
    ) AS first_order
      ON orders.customer_id = first_order.customer_id
    WHERE orders.status IN ('wc-completed','wc-processing')
      AND orders.date_created BETWEEN ? AND ?;
  `;

  try {
    const pool = getPool();
    const [rows] = await pool.execute(query, [
      `${dataInicio} 00:00:00`,
      `${dataFim} 23:59:59`,
    ]);

    return NextResponse.json({
      sucesso: true,
      dados: rows[0],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { sucesso: false, erro: 'Erro ao consultar o banco de dados' },
      { status: 500 }
    );
  }
}