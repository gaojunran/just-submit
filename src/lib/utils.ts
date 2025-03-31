import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

export function renderSize(value: string) {
  if (value === null || value === "") {
    return "0 Bytes";
  }
  var unitArr = new Array("Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB");
  var index = 0;
  var srcsize = parseFloat(value);
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  var size = srcsize / Math.pow(1024, index);
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
