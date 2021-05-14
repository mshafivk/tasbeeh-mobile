import React from "react";
import { API_HOST, API_FORMATS } from "./Config";

class FetchApi {
  static getRequest(resolve, reject, url, responseFormat) {
    fetch(url)
      .then(response => {
        return responseFormat === API_FORMATS.JSON ? response.json() : response;
      })
      .then(finalResponse => {
        resolve(finalResponse);
      })
      .catch(() => reject("error in fetch request"));
  }
  static get(options) {
    return new Promise((resolve, reject) => {
      return this.getRequest(
        resolve,
        reject,
        options.url,
        options.responseFormat
      );
    });
  }
}
export default FetchApi;
