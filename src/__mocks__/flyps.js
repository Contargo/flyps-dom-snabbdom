// Simple mount for use in unit tests
export function mount(root, viewFn, patchFn, cleanupFn) {
  let result = patchFn(root, viewFn());
  return () => cleanupFn(result);
}
