import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { writeDirSync } from "../source";

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
  })
});

afterEach(async () => {
  restore();
});

test("write sync exists", async () => {
  expect(writeDirSync("/access/b", { recursive: false })).toBe(true);
});

test("write sync", async () => {
  expect(writeDirSync("/access/b/c")).toBe(true);
});

test("write sync recursive", async () => {
  expect(writeDirSync("/access/b/c/d")).toBe(true);
});

test("write sync no recursive", async () => {
  expect(writeDirSync("/access/b/c/d", { recursive: false })).toBe(false);
});

test("write sync no access", async () => {
  expect(writeDirSync("/no-access/b/c")).toBe(undefined);
});
