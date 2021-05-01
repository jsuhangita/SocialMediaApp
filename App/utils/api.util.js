import * as Http from './http.util';

export function latest(path = '', params, headers = {}, options = {}) {
    return Http.GET('LATEST', path,params, headers, options);
}
export function symbols(path = '', params, headers = {}, options = {}) {
    return Http.GET('SYMBOLS', path,params, headers, options);
}