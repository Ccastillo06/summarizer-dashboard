# Summarizer Dashboard Server

This is the server-side of the Summarizer Dashboard project. It is a simple Express.js server that uses Drizzle ORM to interact with a SQLite database.

## Drizzle ORM

### Pushing new migrations

```
pnpm exec drizzle-kit push
```

### Inspecting SQLite Database with Drizzle

Recommended extension for VSCode: https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer
