# Rick & Morty Microfrontend Monorepo by Antonio Amaya -Alias Stewie Mayer-

Este repositorio contiene 3 microfrontends:

- **mf-shell**: Contenedor principal con layout y ruteo. En localhost:3000
- **mf-characters**: Listado de personajes consumiendo la API pública de Rick and Morty. En localhost:3001
- **mf-character-detail**: Detalle ampliado de un personaje y episodios. En localhost:3002

---

## Tecnologias

- React
- Typescript
- Jest
- RTK Query
- Docker
- Webpack 5
- Module Federation

---

## Levantar localmente

Cada carpeta contiene su propia configuración. Hay que clonar el repositorio y en cada mf ejecutar 
- npm i
- npm start

Primero a los mf de characters y detail y por ultimo al shell

Despues se puede acceder a [http://localhost:3000](http://localhost:3000) para ver la magia

---

## Ejecutar test

Para ejecutar los test en cada mf puedes usar el comando npm test para ejecutar todos los test o npm test seguido de un nombre para ejecutar un test en singular.

---

## Requisitos para levantar en docker desktop

- Docker
- Docker Compose
- Node.js (solo para desarrollo local sin docker)

---

## Levantar con Docker

```bash
# Baja y limpia contenedores e imágenes anteriores
docker-compose down --rmi all --volumes --remove-orphans

# Construye todos los servicios sin cache
docker-compose build --no-cache

# Levanta los contenedores
docker-compose up
