import 'source-map-support/register';

import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { createProduct as serviceCreateProduct } from '../../services/books';

export const createProduct: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  try {
    const { body } = event
    const product = JSON.parse(body)

    console.log("Incoming request to create a product...")
    console.info("Params: ", product)

    if (!product.title || !product.description || !product.price) {
      console.warn("Failed to create a product: invalid request")
      return formatJSONResponse({ code: 400, message: "invalid request" }, 400);
    }

    const id = await serviceCreateProduct(product)

    return formatJSONResponse({ id }, 200);
  } catch (e) {
    console.error(`Failed to create a product: ${e.message}`)
    return formatJSONResponse({ data: { code: 500, message: "Internal server error" } }, 500)
  }
}

export const main = middyfy(createProduct);
