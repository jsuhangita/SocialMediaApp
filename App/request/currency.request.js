import * as api from '../utils/api.util';

export async function listCurrency(payload) {
    const{ supportedCurrency } = payload;
    const joinedCurrency = supportedCurrency.join(",");
    try {
        const { data } = await api.latest('', {
            "access_key":"76d6acb0420f7522a14a1700bb00123b",
            "symbols":joinedCurrency,
            "format":1
        });
        return data;
    } catch (err) {
        throw err;
    }
}

export async function listSymbols( ) {
    try {
        const { data } = await api.symbols('', {
            "access_key":"76d6acb0420f7522a14a1700bb00123b",
            "format":1
        });
        return data;
    } catch (err) {
        throw err;
    }
}