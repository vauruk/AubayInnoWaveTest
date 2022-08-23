/**
 * @AUTOR Vanderson de Moura Vauruk
 * LinkedIn: https://www.linkedin.com/in/vauruk/?locale=en_US
 * @param params
 */

const consoleDebug = (error, ...params) => {
  error
    ? __DEV__ && console.error('[VANDERSON-DEBUG-MODE]:', params)
    : __DEV__ && console.log('[VANDERSON-DEBUG-MODE]:', params);
};

export default consoleDebug;
