export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2); // Keep max 2 characters
}

export function getColorFromName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash % 360); // hue between 0 and 359
  return `hsl(${hue}, 65%, 55%)`; // tweak saturation/lightness to your taste
}

export function isHotkeyEnabledOnInput(event: KeyboardEvent): boolean {
  const { target } = event;
  const targetTagName = target && (target as HTMLElement).tagName.toLowerCase();

  return Boolean(
    targetTagName && ["input", "textarea", "select"].includes(targetTagName)
  );
}

export const isMac =
  typeof window !== "undefined" &&
  navigator.platform.toUpperCase().indexOf("MAC") >= 0;
