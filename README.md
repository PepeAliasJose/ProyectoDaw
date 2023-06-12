# ProyectoDaw

Proyecto para el curso de DAW

Para arrancar la aplicacion -> 
    - node 
    - pnpm 
    - pnpm install 
    - cd front 
    - pnpm dev

Arrancar las aplicaciones del back

    -> BASE DE DATOS 
        - cd front/data
        - npx json-server --watch db.json --port 8000
    -> SERVIDOR DEL BLOG Y CUENTA DE USUARIO (DIRECTUS)
    -> SKY ENGINE
        - cd rute/to/engine.js
        - python3 -m http.server 8090
        - Si el servidor esta en otro ordenador hay que cambiar la ruta del .env.local
