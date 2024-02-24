import format  from 'pg-format';

import pool from "../../db/connectionDB.js";

const getJewel = async ({ limits = 1,  order_by = "id_ASC", page = 0}) => {

    const [campo, direccion] = order_by.split("_")
    const offset = (page - 1) * limits
    const formattedQuery = format('SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset);
    const { rows: jewels } = await pool.query(formattedQuery)
    return jewels }

    export { getJewel }   