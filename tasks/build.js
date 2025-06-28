
/* IMPORT */

import fs from 'node:fs/promises';

/* MAIN */

const build = async () => {

  await fs.rm ( 'dist', { recursive: true, force: true } );
  await fs.cp ( 'resources/icon/icon-256.png', 'dist/resources/icon/icon-256.png', { recursive: true } );
  await fs.cp ( 'manifest.json', 'dist/manifest.json' );

};

/* INIT */

build ();
