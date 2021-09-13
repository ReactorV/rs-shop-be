import 'source-map-support/register';

import { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { getProducts } from '../../services/books';

const getProductsList: APIGatewayProxyHandler = async () => {
  console.log(`Request to get products...`)

  try {
    const books = await getProducts() || []

    return formatJSONResponse({ books });
  } catch (e) {
    console.log(`Failed to get products: ${e.message}`)
    return formatJSONResponse({ data: { code: 500, message: "Server error" } })
  }
}

export const main = middyfy(getProductsList);
