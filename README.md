# basic_webpack
Probando webpack

1. Crear repo en github
    -gitignore: Node
    -License: MIT
    -add readme

2. Clonar ese repo en nuestra máquina local
            $git clone (url)

3. Abrir ese proyecto con visual
             $ code (ruta de la carpeta del repo)

4. Crear nuestro proyecto de NPM 
            $ npm init -y

Instalar dependencias

 "devDependencies": {
 	"@babel/core": "^7.20.5",
 	"@babel/preset-env": "^7.20.2",
 	"babel-loader": "^8.0.4",
 	"html-webpack-plugin": "^5.5.0",
 	"webpack": "^5.75.0",
 	"webpack-cli": "^5.0.1"
 }

 $ npm install 
Agregar scripts de webpack "dev": "webpack --mode development", "build": "webpack --mode production"

Crear entry point $ mkdir src $ touch src/index.js

Empaquetamos en modo dev $ npm run dev

Creamos archivo html en dist

Instalamos plugin para html $ npm install html-webpack-plugin --save-dev

Creamos archivo de config $ touch webpack.config.js