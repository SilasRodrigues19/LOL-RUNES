import fastify from 'fastify';
import { getRunesRoute } from './routes/getRunes';
import fastifyCors from '@fastify/cors';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
})

app.register(getRunesRoute);

app.listen({
  port: 3333,
  host: '0.0.0.0'
})
.then(() => console.log('Server is listening'))
.catch((err) => console.error(err))