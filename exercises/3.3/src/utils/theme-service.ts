const storeName = "Theme";

const setThemeSessionData = (theme: string) => {
  const storageValue = JSON.stringify(theme);
  localStorage.setItem(storeName, storageValue);
};

const getThemeSessionData = () => {
  const actualTheme = localStorage.getItem(storeName);
  if (!actualTheme) return;
  return JSON.parse(actualTheme);
};

const switchTheme = (): string => {
  const storedTheme = getThemeSessionData();
  console.log(`st: ${storedTheme}`);
  if (getThemeSessionData() === "Light") {
    // setStoredTheme(() => "Dark");
    setThemeSessionData("Dark");
    console.log(`st: ${storedTheme}`);
    console.log(`GET: ${getThemeSessionData()}`);
    return getThemeSessionData();
  } else {
    // setStoredTheme(() => "Light");
    setThemeSessionData("Light");
    console.log(`st: ${storedTheme}`);
    console.log(`GET: ${getThemeSessionData()}`);
    return getThemeSessionData();
  }
};


export {setThemeSessionData, getThemeSessionData, switchTheme}