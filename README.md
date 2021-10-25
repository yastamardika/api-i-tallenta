# I_tallenta mini backend service
This is the backend application for i-tallenta, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### CI/CD
.profile
release: ENV_SILENT=true node ace migration:run --force
release: ENV_SILENT=true node ace seed --force
