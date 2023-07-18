type RequestMethod = 'GET' | 'POST';

function request<T>(
  url = '',
  method: RequestMethod = 'GET',
  data: unknown = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    options.body = data as BodyInit;
  }

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
};
