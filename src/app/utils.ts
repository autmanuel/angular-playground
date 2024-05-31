export function  upperCase(value: string | number): string | number {
  if (typeof value === 'number') {
    return value
  }
  return value.toUpperCase()
}
