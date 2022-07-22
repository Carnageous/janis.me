export function debounce(fn: Function, ms = 300) {
  let timeoutId: number;

  return function (this: any, ...args: any[]) {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn.apply(this, args), ms);
  };
}
