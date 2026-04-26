import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

const devServerUrl = import.meta.env.VITE_BASE44_SERVER_URL?.trim();

// Do not pass serverUrl: ''. It overrides the SDK default and yields baseURL "/api".
// Omit serverUrl in production so the SDK uses https://base44.app (CreateClientConfig default).
// For local backend (`base44 dev`), set VITE_BASE44_SERVER_URL in .env (e.g. http://127.0.0.1:8787).
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl,
  ...(devServerUrl ? { serverUrl: devServerUrl } : {}),
});
