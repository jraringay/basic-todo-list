DROP TABLE IF EXISTS todo;

-- CREATE TABLE IF NOT EXISTS todo (
--   id SERIAL PRIMARY KEY,
--   task TEXT NOT NULL,
--   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--   is_done BOOLEAN NOT NULL DEFAULT FALSE,
--   done_at TIMESTAMPTZ
-- )

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS todo (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  task TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_done BOOLEAN NOT NULL DEFAULT FALSE,
  done_at TIMESTAMPTZ,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(id)
      ON DELETE CASCADE
);

