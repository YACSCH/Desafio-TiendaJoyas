import express from 'express';
import { getJewels, getJewelsFilter }  from '../src/controllers/jewelsController.js'

const router = express.Router();

router.get('/joyas', getJewels )
router.get('/joyas/filtros', getJewelsFilter)


export default router;