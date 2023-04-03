import { authHandlers } from '@src/handlers/AuthHandlers.js';
import { checkAnonymousCsrfToken } from '@src/middlewares/CsrfMiddlewares.js';
import { Router } from 'express';

export const authRouters = Router();

const BASE_ROUTE = '/auth';
authRouters.post(`${BASE_ROUTE}/login`, checkAnonymousCsrfToken, authHandlers.login);
authRouters.post(`${BASE_ROUTE}/register`, checkAnonymousCsrfToken, authHandlers.register);
authRouters.get(`${BASE_ROUTE}/token`, authHandlers.generateCsrfToken);
// authRouters.get(`${BASE_ROUTE}/token/verify`, authHandlers.checkCsrfToken);