type TMod = Record<string, boolean | string>;

export const className = (cls: string, mod: TMod, additional: string[]): string => {
  const mods = Object.entries(mod).reduce((acc, [className, isActive]) => {
    if (isActive) {
      acc.push(className);
    }
    return acc;
  }, [])
  return [cls, ...additional, ...mods].join(' ')
}
