docker-compose -f docker-compose-local.yml build --build-arg NEXT_PUBLIC_API_BASE_URL_CLIENT_SIDE=http://localhost:4100/api
docker-compose -f docker-compose-local.yml up -d
docker exec summarizer-dashboard-backend sh -c "pnpm exec drizzle-kit push && pnpm seed:production"
