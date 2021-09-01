import 'source-map-support/register';

import { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { getProducts } from '../../mock-data/books';

const getProductsList: APIGatewayProxyHandler = async () => {
  try {
    const books = await getProducts() || []

    return formatJSONResponse({ books });
  } catch (e) {
    return formatJSONResponse({ data: { code: 500, message: "Server error" } })
  }
}

export const main = middyfy(getProductsList);
