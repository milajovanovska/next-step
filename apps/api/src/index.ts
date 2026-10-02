import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'

const app = Fastify({ logger: true })

await app.register(helmet)
await app.register(cors, {
  origin: process.env.WEB_ORIGIN ?? 'http://localhost:5173',
})
await app.register(rateLimit, {
  max: 100,
  timeWindow: '1 minute',
})

app.get('/api/health', async () => {
  return {
    status: 'ok',
    app: 'NEXTSTEP API',
    time: new Date().toISOString(),
  }
})

const port = Number(process.env.PORT ?? 3001)

try {
  await app.listen({ port, host: '0.0.0.0' })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}