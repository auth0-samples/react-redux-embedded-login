import atob from 'atob';

export const getIdToken = () => {
  const idToken = localStorage.getItem('id_token');
  if (!idToken) {
    throw new Error('No id token found');
  }
  return idToken;
}

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('No access token found');
  }
  return accessToken;
}

export const getClaimFromToken = (token, claim) => {
  var payload = token.split('.')[1];
  var bin = atob(payload);
  var obj = JSON.parse(bin);
  return obj[claim];
}