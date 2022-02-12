/**
 * @author BrenoHaraujo#5887
 * @version 1.0.0
 */
export declare class ValidateRequestBody {
    private _params;
    private body;
    private message?;
    constructor({ params, body, message }: ValidateRequestBodyType);
    execute(): String[] | null;
    private filter;
}
declare type ValidateRequestBodyType = {
    params: String[];
    body: object;
    message?: String;
};
export {};
