import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import handler from './index';
import { NextApiRequest, NextApiResponse } from 'next';

describe('Hello handler', () => {
  it('should return a response with data property', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    // think about mocking db responses if you have any !

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ message: 'success', data: 'John Doe' });
  });
  it('should return Method Not Allowed on other methods', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
    });

    await handler(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toEqual({ message: 'Method POST not allowed' });
    expect(res.headersSent).toBe(true);
    expect(res.getHeaders().allow).toBeDefined();
    expect(res.getHeaders().allow).toStrictEqual(['GET']);
  });
});
