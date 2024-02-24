import express from 'express';
import { getJewels }  from '../src/controllers/jewelsController.js'

const router = express.Router();

router.get('/joyas', getJewels )
//router.get('/joyas/filtros', )


export default router;