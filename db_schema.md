## Table: To-do

### todo

| `Column Name` | `Type`      | `Constraints`          | `Description`                                                    |
| ------------- | ----------- | ---------------------- | ---------------------------------------------------------------- |
| id            | INT         | SERIAL PRIMARY KEY     | The To-do list item id that increments automatically             |
| task          | TEXT        | NOT NULL               | The descriptive task to be done                                  |
| created_at    | TIMESTAMPTZ | NOT NULL DEFAULT       | The time when the task was created where current time is default |
| is_done       | BOOLEAN     | NOT NULL DEFAULT       | The basis whether the task is done or not                        |
| done_at       | TIMESTAMPTZ |                        | The time when the task was finsihed                              |

