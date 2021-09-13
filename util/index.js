export const ipfs2http = (ipfs_url) => {
  if (ipfs_url) {
    let url = new URL(ipfs_url);
    return url.pathname;
  } else {
    return '';
  }
}

export const fetcher = url => fetch(url).then(r => r.json())
