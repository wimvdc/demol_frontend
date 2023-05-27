# Start

`.env` file:
VITE_PUBLIC_API_BASE_URL=http://localhost:3000

# Run

```bash
npm run dev
```

# Build & deploy

```bash
docker-compose --env-file .env build mol-frontend
docker-compose up -d mol-frontend
```
