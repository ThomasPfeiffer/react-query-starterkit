export async function get<T>(path: string) {
  const response = await fetch("/api" + path);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as T;
}

export async function put<T>(path: string, body: unknown) {
  const response = await fetch("/api" + path, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as T;
}

export async function post<T>(path: string, body: unknown) {
  const response = await fetch("/api" + path, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as T;
}
