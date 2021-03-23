## Table: To-do

### todo

| `Column Name` | `Type`      | `Constraints`          | `Description`                                                    |
| ------------- | ----------- | ---------------------- | ---------------------------------------------------------------- |
| id            | INT         | SERIAL PRIMARY KEY     | The To-do list item id that increments automatically             |
| task          | TEXT        | NOT NULL               | The descriptive task to be done                                  |
| created_at    | TIMESTAMPTZ | NOT NULL DEFAULT       | The time when the task was created where current time is default |
| is_done       | BOOLEAN     | NOT NULL DEFAULT       | The basis whether the task is done or not                        |
| done_at       | TIMESTAMPTZ |                        | The time when the task was finsihed                              |

## Table: Users

### users

| `Column Name` | `Type`      | `Constraints`          | `Description`                                                    |
| ------------- | ----------- | ---------------------- | ---------------------------------------------------------------- |
| id            | INT         | SERIAL PRIMARY KEY     | The user id that increments automatically                        |
| email         | TEXT        | NOT NULL               | The email address of the registered user                         |
| first_name    | TEXT        | NOT NULL               | The registered user's first name                                 |
| last_name     | TEXT        | NOT NULL               | The registered user's last name                                  |
| created_at    | TIMESTAMPTZ | NOT NULL DEFAULT       | The time when the user was created where current time is default |

