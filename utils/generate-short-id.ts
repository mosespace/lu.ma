import { v4 as uuidv4 } from "uuid";

export function generateShortId() {
  return uuidv4().replace(/-/g, "").slice(0, 10);
}
