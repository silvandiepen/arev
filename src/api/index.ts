import { routeRequest } from "./router.js";

export async function handleApiRequest(request: Request): Promise<Response> {
  return routeRequest(request);
}

const worker = {
  fetch(request: Request): Promise<Response> {
    return handleApiRequest(request);
  },
};

export default worker;
