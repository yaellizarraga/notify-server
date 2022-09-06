import Router from "koa-router";

const MainRouter = new Router();

MainRouter.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "ok";
});

export default MainRouter;
