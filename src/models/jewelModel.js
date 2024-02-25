import format from "pg-format";

import pool from "../../db/connectionDB.js";

const getJewel = async ({ limits = 1, order_by = "id_ASC", page = 0 }) => {
  const [campo, direccion] = order_by.split("_");
  const offset = (page - 1) * limits;
  const formattedQuery = format(
    "SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s",
    campo,
    direccion,
    limits,
    offset
  );
  const { rows: jewels } = await pool.query(formattedQuery);
  return jewels;
};
const getJewelFilters = async ({ precio_min, precio_max, categoria, metal }) => {
  let filtros = [];
  const values = [];

  const agregarFiltro = (campo, comparador, valor) => { 
    
    values.push(valor)
    const { length } = filtros
    filtros.push(`${campo} ${comparador} $${length + 1}`)
    }
    
    if (precio_min) agregarFiltro('precio', '>=', precio_min)
    if (precio_max) agregarFiltro('precio', '<=', precio_max)
    if (categoria) agregarFiltro('categoria', '=', categoria)
    if (metal) agregarFiltro('metal', '=', metal)
    

  let Query = "SELECT * FROM inventario";

  if (filtros.length > 0) {
    filtros = filtros.join(" AND ");
    Query += ` WHERE ${filtros}`;
  }
  const { rows: jewels } = await pool.query(Query, values);
  return jewels;
};

export { getJewel,
         getJewelFilters };
