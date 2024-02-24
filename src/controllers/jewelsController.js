import prepareHateoas from "../helpers/hateaos.js";
import { getJewel 
                    } from "../models/jewelModel.js";

//import prepareHateoas from "../helpers/hateoas.js";

const getJewels = async (req, res) => {
  try {
    const queryStrings = req.query
    const jewels = await getJewel(queryStrings)
    const jewelsHateos = await prepareHateoas("joyas/joya",jewels)
    res.status(200).json(jewelsHateos);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export { getJewels };
