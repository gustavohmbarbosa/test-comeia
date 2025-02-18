import express from 'express';
import 'dotenv/config'
import { routes } from './routes';
import { connectToMongoDB } from './config/mongodb';

process.on("uncaughtException", (err) => {
    console.error("[UNCAUGHT EXCEPTION] Erro não tratado:", err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("[UNHANDLED REJECTION] Promessa rejeitada:", promise, "Razão:", reason);
});

bootstrap();

// TODO: usar Pino para logs
// TODO: paralelisar servidor com uso de workers (adicionar uma var no .env para controle)
// TODO: criar um utils para obter o .env (tipar e validar)
// TODO: adicionar camada de erro na aplicação
async function bootstrap() {
    await connectToMongoDB();
    createHttpServer();
}

function createHttpServer() {
    const app = express()
    const port = 3000
    app.use(express.json());
    app.use(routes);

    app.listen(port, () => {
        console.log(`App de exemplo esta rodando na porta ${port}`)
    })
}