# Summarizer Dashboard Server

This is the server-side of the Summarizer Dashboard project. It is a simple Express.js server that uses Drizzle ORM to interact with a SQLite database.

## Drizzle ORM

### Pushing new migrations

As this project uses a small SQLite database, it's not necessary to push new migrations but instead we can push the schemas to the newly defined DB and seed it with data using the `seed:develop` or `seed:production` commands.

To push the schema to the database, run the following command:

```
pnpm exec drizzle-kit push
```

### Inspecting SQLite Database with Drizzle

Recommended extension for VSCode: https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer
