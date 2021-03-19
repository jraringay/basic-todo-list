## Table: To-do

### todo

| `Column Name` | `Type`      | `Constraints`          | `Description` |
| ------------- | ----------- | ---------------------- | ------------- |
| id            | INT         | SERIAL PRIMARY KEY     |               |
| task          | TEXT        | NOT NULL               |               |
| is_done       | BOOLEAN     | DEFAULT                | FALSE         |

