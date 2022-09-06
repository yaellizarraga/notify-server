import koa from 'koa';
import cors from 'koa2-cors';
import KoaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import BasicRouter from './routes/routes';

const server = new koa();
server.use(cors());
server.use(KoaLogger());
server.use(bodyParser());
server.use(BasicRouter.routes())

export default server;