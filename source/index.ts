import { promises, mkdirSync } from "fs";

export type Options = {
  /**
   * Recursively create parent directories as well. Default: `true`
   */
  recursive?: boolean;
}

function handleError(e: any) {
  if(e.code === "EEXIST") {
    return true;
  } else if(e.code === "ENOENT") {
    return false
  } else {
    return undefined;
  }
}

export async function writeDir(path: string, options: Options = {}) {
  return promises.mkdir(path, {
    recursive: options.recursive ?? true
  }).then(() => {
    return true;
  }).catch((e) => {
    return handleError(e);
  });
}

export function writeDirSync(path: string, options: Options = {}) {
  try {
    mkdirSync(path, { recursive: options.recursive ?? true });
    return true;
  } catch(e) {
    return handleError(e);
  }
}
