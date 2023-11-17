export async function get<T>(path: string) {
  const response = await fetch("/api" + path);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as T;
}

export async function post<T>(path: string) {
  const response = await fetch("/api" + path, { method: "POST" });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as T;
}
