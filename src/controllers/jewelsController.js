import prepareHateoas from "../helpers/hateaos.js";
import { getJewel,
        getJewelFilters  
                    } from "../models/jewelModel.js";

const getJewels = async (req, res) => {
  try {
    const queryStrings = req.query
    const jewels = await getJewel(queryStrings)
    const jewelsHateos = await prepareHateoas("joya",jewels)
    res.status(200).json(jewelsHateos);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const getJewelsFilter = async (req, res) => {
  try {
    const queryStrings = req.query
    const jewels = await getJewelFilters(queryStrings)
    res.status(200).json(jewels);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export { getJewels, 
  getJewelsFilter };
