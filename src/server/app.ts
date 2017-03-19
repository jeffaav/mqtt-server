import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as mosca from 'mosca';

const app = express();

app.use(express.static(`${path.dirname(require.resolve('mosca'))}/public`));
app.use(express.static('./public'));

app.get('/', (req: express.Request, res: express.Response): void => {
    res.sendFile('index.html');
})


const server = http.createServer(app);

const broker = new mosca.Server({
    backend: {
        type: 'mongo',        
        url: 'mongodb://localhost:27017/mqtt',
        pubsubCollection: 'demo',
        mongo: {}
    }
})
broker.attachHttpServer(server);

server.listen(3000);
