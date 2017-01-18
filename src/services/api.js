// @flow
const baseUrl = "http://localhost:4567";

const parseResponse = (response) => (
  response.json().then(json => ({ json, response}))
);

const handleResponse = ({json, response}) => {
  if (!response.ok) return Promise.reject(json);
  return Promise.resolve(json);
};

export const callApi = (method: string, path: string) => {
  const fullUrl = baseUrl + path;
  const config = {
    method: method,
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  return fetch(fullUrl, config)
    .then(parseResponse)
    .then(handleResponse)
    .then(
      response => ({response}),
      error => ({error: error.message || 'Some generic error'})
    );
};
