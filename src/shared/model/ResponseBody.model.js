class ResponseBody {
    constructor(ok, status_cod, result) {
      this.result = result;
      this.ok = ok;
      this.statusCod = status_cod;
    }
  }
  
  module.exports = ResponseBody;