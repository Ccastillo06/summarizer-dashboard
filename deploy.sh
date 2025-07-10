docker-compose build
docker-compose up -d
docker exec summarizer-dashboard-backend sh -c "pnpm exec drizzle-kit push && pnpm seed:production"
