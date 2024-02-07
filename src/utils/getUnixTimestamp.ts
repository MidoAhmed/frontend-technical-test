/**
 * Returns the current Unix timestamp in seconds
 * @returns {number} The current Unix timestamp in seconds
 */
export function getUnixTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}
