import {Router, Context} from "../deps.ts";

const router = new Router()

router.get('/', ({response}: Context) => {
  response.status = 200;
  response.body = 'Welcome to my api';
})

export {router}