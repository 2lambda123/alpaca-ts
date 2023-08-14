import { Config } from "../Client.js";
import { BaseHttpRequest } from "./BaseHttpRequest.js";
import { request as __request } from "./request.js";

import type { ApiRequestOptions } from "./ApiRequestOptions.js";
import type { CancelablePromise } from "./CancelablePromise.js";

export class AxiosHttpRequest extends BaseHttpRequest {
  constructor(config: Config) {
    super(config);
  }

  /**
   * Request method
   * @param options The request options from the service
   * @returns CancelablePromise<T>
   * @throws ApiError
   */
  public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return __request(this.config, options);
  }
}
