CREATE TABLE IF NOT EXISTS users.admin_users (
  id          SERIAL PRIMARY KEY,
  username    VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT now()
);
