import express from 'express';

const router = express.Router();

router.get('', (res, req) => {
  res.send({ data: [] });
});

export default router;
