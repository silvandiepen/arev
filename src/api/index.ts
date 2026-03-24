import { applyAccessControl } from "./access.js";
import type { ApiEnv } from "./env.js";
import { routeRequest } from "./router.js";

export async function handleApiRequest(
  request: Request,
  env?: ApiEnv
): Promise<Response> {
  const accessResponse = await applyAccessControl(request, env);
  if (accessResponse) {
    return accessResponse;
  }

  return routeRequest(request, env);
}

const worker = {
  fetch(request: Request, env: ApiEnv): Promise<Response> {
    return handleApiRequest(request, env);
  },
};

export default worker;
