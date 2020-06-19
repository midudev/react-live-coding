import { Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import { users, User } from "./users.ts";

const userMiddleware = async (ctx: Context, next: Function) => {
  // Get JWT from cookies
  const jwt = ctx.cookies.get('jwt');

  if (jwt) {
    // Validate JWT and if it is invalid delete from cookie
    const data: any = await validateJwt(jwt, Deno.env.get('JWT_KEY') || '');
    if (data) {
      // If it is valid select user and save in context state
      const user: any = users.find((u: User) => u.username === data.payload.iss);
      ctx.state.currentUser = user;
    } else {
      ctx.cookies.delete('jwt');
    }
  } else {
    ctx.state.currentUser = null;
  }
  await next();
}

export {userMiddleware};