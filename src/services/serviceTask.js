
export function getTask() {
  return JSON.parse(localStorage.getItem("task.jn")) || [];
}

export function set(allTask) {
  localStorage.setItem("task.jn", JSON.stringify(allTask))
}
