import { useEffect } from "react";
import type { EffectCallback, DependencyList } from "react";

export default function useDebouncedEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number = 100,
) {
  return useEffect(() => {
    const handler = setTimeout(effect, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
}
