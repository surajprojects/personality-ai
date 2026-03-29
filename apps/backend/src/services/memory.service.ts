const history: string[] = [];

export function addMessage(msg: string) {
  history.push(msg);
}

export function getHistory() {
  return history.slice(-10);
}
