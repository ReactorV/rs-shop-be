import { ClientConfig } from "pg"

const { PG_HOST, PG_PORT, PG_DATABASE, PG_PASSWORD, PG_USERNAME } = process.env;
const config: ClientConfig = {
    user: PG_USERNAME,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: +PG_PORT,
}

export default config
