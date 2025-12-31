import { dogeCoinerUiApi } from '@/src/api/server/dogecoiner-ui-api';

/**
 * Next.js catch-all route handler for Elysia
 * Handles all /api/* requests through the Elysia app
 */
const handler = dogeCoinerUiApi.handle;

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};