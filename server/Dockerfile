# First stage: build TypeScript
FROM node:current-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

# Second stage: run with only built code and minimal deps
FROM node:current-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/drizzle.config.ts ./drizzle.config.ts
RUN npm install -g pnpm && pnpm install

ENV NODE_ENV=production
EXPOSE 4100

CMD ["pnpm", "start"]
