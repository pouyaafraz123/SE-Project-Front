export function addColon(text: string | undefined): string {
  if (!text) {
    return ''
  }
  if (!text.endsWith(':')) {
    return text + ':'
  }
  return text
}
