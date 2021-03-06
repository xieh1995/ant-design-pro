// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['admin'];
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}

export function setToken(token) {
  return localStorage.setItem('token-info', JSON.stringify(token));
}

export function getToken(str) {
  const tokenString = localStorage.getItem('token-info');
  if (tokenString == null || tokenString == undefined || tokenString == '') {
    return null;
  }
  let tokenJson = JSON.parse(tokenString);
  if (
    tokenJson == null ||
    tokenJson == undefined ||
    tokenJson == '' ||
    tokenJson[str] == null ||
    tokenJson[str] == undefined
  ) {
    return null;
  }
  return tokenJson[str];
}
