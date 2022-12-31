# Start

`.env` file:
VITE_PUBLIC_API_BASE_URL=http://localhost:3000

# Build & deploy

```bash
docker-compose --env-file .env build app-node
docker-compose up -d app-node
```
