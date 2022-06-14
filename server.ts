import express from 'express';
import apiBillet from './src/Api/apiBillet';

const port = 8080;
const app = express();
app.use(express.json());
apiBillet(app);
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});

