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
      order_id,
      customer_id,
      date_created,
      total_sales,
      status
    FROM kuw_wc_order_stats
    WHERE status = 'wc-completed'
      AND date_created BETWEEN ? AND ?
    ORDER BY date_created ASC;
  `;

  try {
    const pool = getPool();
    const [rows] = await pool.execute(query, [
      `${dataInicio} 00:00:00`,
      `${dataFim} 23:59:59`,
    ]);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { sucesso: false, erro: 'Erro ao consultar o banco de dados' },
      { status: 500 }
    );
  }
}
