export function renderSize(value: string) {
  if (value === null || value === "") {
    return "0 Bytes";
  }
  const unitArr = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let index = 0;
  const srcsize = Number.parseFloat(value);
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  const size = srcsize / 1024**index;
  return size.toFixed(2) + unitArr[index];
}

export function generatePasskey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 6; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}
