import 'source-map-support/register';

import { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { getProductByID } from '../../mock-data/books';

const getProductsById: APIGatewayProxyHandler = async (event) => {
  const productId = event.pathParameters?.productId

  try {
    const product = await getProductByID(productId)

    if (product) {
      return formatJSONResponse(product);
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ data: { message: "Product not found" } })
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ data: { message: "Server error" } })
    }
  }
}

export const main = middyfy(getProductsById);
