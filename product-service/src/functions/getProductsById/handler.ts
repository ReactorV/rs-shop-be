import 'source-map-support/register';

import { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { getProductByID } from '../../services/books';

const getProductsById: APIGatewayProxyHandler = async (event) => {
  const productId = event.pathParameters?.productId
  console.log(`Request a product with ID ${productId}...`)

  try {
    const product = await getProductByID(productId)

    if (product) {
      return formatJSONResponse(product, 200);
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ data: { message: "Product not found" } })
    }
  } catch (e) {
    console.error(`Failed to get a product with ID - ${productId}: ${e.message}`)

    return {
      statusCode: 500,
      body: JSON.stringify({ data: { message: "Server error" } })
    }
  }
}

export const main = middyfy(getProductsById);
