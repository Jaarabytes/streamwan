import { NextRequest } from "next/server";
import { updateSession } from "./lib/actions";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
// All routes containing /dashboard are blocked for unauthenticated users
// export const config = { matcher : [ '/dashboard:path*' ] }