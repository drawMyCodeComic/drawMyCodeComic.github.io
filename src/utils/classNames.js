export const classNames = classObj =>
  Object.keys(classObj)
    .filter(name => classObj[name])
    .join(" ")
