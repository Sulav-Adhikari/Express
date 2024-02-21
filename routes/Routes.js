import express from 'express';
import * as Controller from '../controllers/Controller.js';

const router = express.Router();

router.post('/', Controller.addIntern);
router.get('/', Controller.getInterns);
router.put('/:id', Controller.updateIntern);
router.delete('/:id', Controller.deleteIntern);

export default router;
