// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Data } from './types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ message: 'success', data: 'John Doe' });
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${method} not allowed` });
  }
}
