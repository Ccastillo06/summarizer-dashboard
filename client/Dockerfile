# First stage: build the app
FROM node:current-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

# Second stage: run the app with minimal dependencies
FROM node:current-alpine

WORKDIR /app

# Only copy necessary runtime files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

RUN npm install -g pnpm && pnpm install

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
