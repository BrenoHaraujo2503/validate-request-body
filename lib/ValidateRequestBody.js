"use strict";
/**
 * @author BrenoHaraujo#5887
 * @version 1.0.0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRequestBody = void 0;
const debug_1 = __importDefault(require("debug"));
class ValidateRequestBody {
    constructor({ params, body, message }) {
        this._params = [];
        for (let i = 0; i < params.length; i++) {
            this._params.push(params[i]);
        }
        this.body = body;
        if (message)
            this.message = message;
    }
    execute() {
        const data = this.body;
        let bodyArray = [];
        Object.keys(data).forEach(item => {
            bodyArray.push(item);
        });
        const filtered = this.filter(this._params, bodyArray);
        if (Array.isArray(filtered)) {
            filtered.map((item, index) => {
                (0, debug_1.default)("teste:teste")(filtered[index]);
                filtered[index] = this.message ? `${item} ${this.message}` : item;
                (0, debug_1.default)("teste" + filtered[index]);
            });
            return filtered;
        }
        return null;
    }
    filter(array1, array2) {
        const result = array1.filter(item => !array2.includes(item));
        if (result.length == 0) {
            return null;
        }
        return result;
    }
}
exports.ValidateRequestBody = ValidateRequestBody;
