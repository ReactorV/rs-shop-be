import { getProducts as getProductsDB } from "src/pgClient/products"
import { createProduct as createProductDB } from "src/pgClient/products"
import { getProductByID as getProductByIDDB } from "src/pgClient/products"

export const getProducts = async () => getProductsDB()
export const getProductByID = async (id: string) => getProductByIDDB(id)
export const createProduct = async (product) => createProductDB(product)
