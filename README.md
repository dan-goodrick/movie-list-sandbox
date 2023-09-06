## Project setup 
`npm create vite@latest`

`npm i express vite-express`

Build out server file

set `dev` script in package.json to be `"dev": "nodemon server/index.js -w server/index.js -w src",`

You should now be able to run your server

## Set up DB

Create `db.js` and build it out with the boilerplate.

Create `model.js` and build it out with the boilerplate:
```
import { DataTypes, Model } from 'sequelize';
import url from 'url';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///movie-list');

// Model declarations here

// Association methods here

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }
```

Run `createdb YOURDBNAMEHERE`
run `node server/model.js`

You should see confirmation that your db has been synced and your model created. # movie-list-sandbox
