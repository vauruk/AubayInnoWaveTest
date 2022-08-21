/**
 * @AUTOR Vanderson de Moura Vauruk
 * LinkedIn: https://www.linkedin.com/in/vauruk/?locale=en_US
 * @param params
 */

const consoleDebug = (error, ...params) => {
  error
    ? __DEV__ && console.error('[CIALAZER-DEBUG-MODE]:', params)
    : __DEV__ && console.log('[CIALAZER-DEBUG-MODE]:', params);
};

export default consoleDebug;
