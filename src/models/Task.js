class Task {
  constructor(title) {
    this.id = Math.random().toString(36).substring(7);
    this.title = title;
  }
}

export default Task;
