import ky from 'ky';

const API_URL = 'https://mirror-app-frontend-demo-server.vercel.app/';

export const api = ky.create({ prefixUrl: API_URL });
