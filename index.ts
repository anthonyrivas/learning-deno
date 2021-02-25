import {Application} from "./deps.ts";

import {router} from './routing/index.ts';

const HOST = 'localhost';
const PORT = 3500;
const app = new Application();

app.use(router.routes())

console.log(`App listening at http://${HOST}:${PORT}`)
await app.listen(`${HOST}:${PORT}`)
