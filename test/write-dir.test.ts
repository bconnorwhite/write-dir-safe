import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { writeDir } from "../source";

beforeEach(async () => {
  mock({
    "/access": {
      b: {}
    },
    "/no-access": directory({
      mode: 0,
      items: {
        b: {}
      }
    })
  });
});

afterEach(async () => {
  restore();
});

test("write exists", async () => {
  return writeDir("/access/b", { recursive: false }).then((success) => {
    expect(success).toBe(true);
  });
});

test("write", async () => {
  return writeDir("/access/b/c").then((success) => {
    expect(success).toBe(true);
  });
});

test("write recursive", async () => {
  return writeDir("/access/b/c/d").then((success) => {
    expect(success).toBe(true);
  });
});

test("write no recursive", async () => {
  return writeDir("/access/b/c/d", { recursive: false }).then((success) => {
    expect(success).toBe(false);
  });
});

test("write no access", async () => {
  return writeDir("/no-access/b/c").then((success) => {
    expect(success).toBe(undefined);
  });
});
