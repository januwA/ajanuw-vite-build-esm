import { add } from "./add";

export function foo(a: number, b: number): number {
  return add(a ** 2, b ** 2);
}