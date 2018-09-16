### code-mafia-2-workshop

## Table of Contents

- [Setup](#setup)
  - [boilerplate](#boilerplate)
- [List component](#list-component)
- [Task manipulation](#task-manipulation)
  - [Remove task](#remove-task)
  - [Edit task](#edit-task)


## Setup
### Boilerplate

```
npm install -g create-react-app
create-react-app react-todo
```
* Create `components`, `layouts` and `pages` directories
* Create `Header` component
* Create basic `Home` page
* Create `Input` component with `TextField` type
* Create `Todos` layout with simple form and list of added tasks

### List component
* Create basic `List` component
* Create `ListItem` component
* Use `ListItem` in a `List` component
* Use `List` component in a `Todos` layout
* Create `models` directory
* Create `Task` model (id, title)
* Use `Task` model to create new task

### Task manipulation
### Remove task
* Add button to the `ListItem` component with `onClick` handler
* Add method to remove task based on `id`

### Edit task
* Convert `ListItem` component to the statefull component
* Add form to the `ListItem` component with controlled Input
* Manage edit mode for `ListItem` component
* Handle click outside of `ListItem` component if edit mode is on

