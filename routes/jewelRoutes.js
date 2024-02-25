import express from 'express';
import { getJewels, getJewelsFilter }  from '../src/controllers/jewelsController.js'
import { getActivity } from '../middlewares/report.js';

const router = express.Router();

router.get('/joyas', getActivity, getJewels )
router.get('/joyas/filtros', getActivity,  getJewelsFilter)


export default router;