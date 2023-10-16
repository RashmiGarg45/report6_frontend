export function getList(params) {
    return fetch('http://35.170.87.74/env-wise-data/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((response) => response.json());
  }
  