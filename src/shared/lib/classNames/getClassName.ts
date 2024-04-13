type TMod = Record<string, boolean | string>;

export const getClassName = (
  cls: string,
  mod: TMod = {},
  additional: Array<string | undefined> = [],
): string => {
  const mods = Object.entries(mod)
    .reduce<string[]>((acc, [className, isActive]) => {
      if (isActive) {
        acc.push(className);
      }
      return acc;
    }, []);
  return [cls, ...additional.filter(Boolean), ...mods].join(' ');
};
