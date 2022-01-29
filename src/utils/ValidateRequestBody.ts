/**
 * @author BrenoHaraujo#5887
 * @version 1.0.0
 */

import { Request } from "express"

export class ValidateRequestBody {
  private _params: Array<any> = []
  private request: Request;

  constructor(params: Array<string | number | any | undefined>, request: Request) {
    for(let i = 0; i < params.length; i++) {
      this._params.push(params[i])
    }
    this.request = request;
  }

  public execute() {  
    const data: Object = this.request.body;
    let bodyArray: string[] = []

    Object.keys(data).forEach(item => {
      bodyArray.push(item)
    })

    const filtered = this.filter(this._params, bodyArray)
    
    if(Array.isArray(filtered)) {
      let required: Array<any> = [];
      filtered.forEach(item => {
        required.push(`O campo ${item} precisa está preenchido.`)
      })
      return {
        required
      };
    }
    return;
  }

  private filter(array1: Array<any>, array2: Array<any>) {
    const result = array1.filter(item => !array2.includes(item));

    if(result.length == 0) {
      return;
    }

    return result;
  }
}
