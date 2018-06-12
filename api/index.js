import express from 'express';

import { contests } from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({ contests });
});

export default router;
