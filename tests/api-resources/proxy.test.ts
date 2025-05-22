// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import QanapiAPIV1 from 'qanapi-api-v1-sdk';

const client = new QanapiAPIV1({
  projectDomain: 'My-Project-Domain',
  qanapiAuthorization: 'My Qanapi Authorization',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proxy', () => {
  // skipped: tests are disabled for the time being
  test.skip('process: only required params', async () => {
    const responsePromise = client.proxy.process('api_token', {
      body: {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit nsuscipit recusandae consequuntur expedita et',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('process: required and optional params', async () => {
    const response = await client.proxy.process('api_token', {
      body: {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit nsuscipit recusandae consequuntur expedita et',
      },
      'X-Qanapi-Classification': 'cui',
      'X-Qanapi-Destination': 'https://webhook.site/06f5b1c6-cb79-48a7-b274-5a2d6f32463e',
      'X-Qanapi-Fields': 'title,body',
      'X-Qanapi-Geofence': '14',
      'X-Qanapi-Mode': 'encrypt',
    });
  });
});
