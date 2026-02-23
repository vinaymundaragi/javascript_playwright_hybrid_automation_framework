import {test, expect} from '@playwright/test';

test('Test products from API', async ({request}) => {
    const response = await request.get('https://fakestoreapi.com/products');
    expect(response.status()).toBe(200);

    const productsApi = await response.json();

    expect(productsApi.length).toBeGreaterThan(0);


});