/**
 * @author BrenoHaraujo#5887
 * @version 1.0.0
 */

export class ValidateRequestBody {
  private _params: Array<any> = []
  private body: Object;
  private message?: String;

  constructor({ params, body, message }: ValidateRequestBodyType) {
    for(let i = 0; i < params.length; i++) {
      this._params.push(params[i])
    }
    this.body = body;

    if(message) this.message = message;
  }

  public execute(): String[] | null {  
    const data: Object = this.body;
    let bodyArray: string[] = []

    Object.keys(data).forEach(item => {
      bodyArray.push(item)
    })

    const filtered = this._params.filter(item => !bodyArray.includes(item));;
    
    if(Array.isArray(filtered)) {
      filtered.map((item, index) => {
        filtered[index] = this.message ? `${item} ${this.message}` : item
      });
      return filtered;
    }
    return null;
  }
}

type ValidateRequestBodyType = {
  params: String[],
  body: object,
  message?: String
}