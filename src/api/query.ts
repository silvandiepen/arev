export function parseBooleanParam(value: string | null): boolean | undefined {
  if (value === null) {
    return undefined;
  }

  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  return undefined;
}

export function parseIntegerParam(value: string | null): number | undefined {
  if (value === null) {
    return undefined;
  }

  const parsed = Number.parseInt(value, 10);

  if (!Number.isFinite(parsed)) {
    return undefined;
  }

  return parsed;
}

export function normalizeAlpha2(value: string): string {
  return value.trim().toUpperCase();
}
