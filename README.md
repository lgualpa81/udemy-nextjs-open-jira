# Next.sj OpenJira App
Para ejecutar localmente, se necesita la base datos
```
docker-compose up -d
```
* -d, significa __detached__
* MongoDB URL local
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base datos con información de pruebas (desarrollo)
Hacer invocación a:
```
http://localhost:3000/api/seed
```