const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  const colors = require('colors');
  const appVersion = require('../../package.json').version;
  require('dotenv').config({
    path: 'src/environments/environment.ts',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  production: false,
  be: '',
  firebase:{
    apiKey: '${process.env?.['FIREBASE_API_KEY']}',
    authDomain: '${process.env?.['FIREBASE_AUTH_DOMAIN']}',
    databaseURL:
      '${process.env?.['FIREBASE_DB_URL']}',
    projectId: '${process.env?.['FIREBASE_PROJECT_ID']}',
    storageBucket:'${process.env?.['FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env?.['FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env?.['FIREBASE_APP_ID']}',
    measurementId: '${process.env?.['FIREBASE_MEASUREMENT_ID']}'
  }
};`;

  console.log(
    colors.magenta(
      'The file `environment.ts` will be written with the following content: \n'
    )
  );
  writeFile(targetPath, envConfigFile, (err: Error) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        colors.magenta(
          `Angular environment.ts file generated correctly at ${targetPath} \n`
        )
      );
    }
  });
};

setEnv();
