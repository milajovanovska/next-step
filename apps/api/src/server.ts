import Fastify from 'fastify'
import { APP_NAME } from '@nextstep/shared'

const app = Fastify({
  logger: true,
})

app.get('/api/health', async () => {
  return {
    status: 'ok',
    service: APP_NAME,
  }
})

const start = async () => {
  try {
    await app.listen({
      port: 3000,
      host: '0.0.0.0',
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()