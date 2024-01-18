import http from 'http'
import { Server } from 'socket.io'
import app from './app/app'

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', socket => {
  console.log('New user connected ', socket.id)

  socket.on('message', msg => {
    console.log(msg)
    socket.emit('message', { msg: `Hello I'm from Server ${socket.id}` })
  })
})

async function bootstrap() {
  try {
    // await mongoose.connect(config.db_uri as string)
    // console.log('DB connected successfully')
    server.listen(PORT, () => {
      console.log('listening to ' + PORT + ' ...')
    })
  } catch (error) {
    console.log(error)
  }
}

bootstrap()
