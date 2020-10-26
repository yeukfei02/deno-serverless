import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("result test", async () => {
  const result = 1 + 1;
  assert(result);
  assertEquals(result, 2);
});
