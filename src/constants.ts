export const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY,
  },
};

// generate every houre a new bearer token with this: curl -d "grant_type=client_credentials&client_id=EN5gZoYSczspZHO8WmEeg1XVenU5dhCViJLTWuGIoQBb5b2EBX&client_secret=PXkLJ7xfHBVQwVMvZt4KdnvpGjE90F5myvmimcUB" https://api.petfinder.com/v2/oauth2/token
