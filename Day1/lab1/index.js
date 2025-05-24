export const getURL = (lang) => {
  if (typeof lang === 'undefined') {
    throw new Error("Input must be a string not undefined");
  }
  if (typeof lang !== 'string') {
    throw new Error("Input must be a string");
  }
  if(lang === '') {
    lang = 'en-uk';
  }
  const parts = lang.split('-');
  if (parts.length !== 2) {
    throw new Error("Input must be in format 'xx-yy'");
  }
  const prefix = lang.split('-')[0];
  return `/home-${prefix}`;
};
