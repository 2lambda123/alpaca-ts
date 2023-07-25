/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Assets } from "../models/Assets";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AssetsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Assets
   * The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol.
   * @returns Assets An array of asset objects
   * @throws ApiError
   */
  public getAssets({
    status,
    assetClass,
    exchange,
    attributes,
  }: {
    /**
     * e.g. “active”. By default, all statuses are included.
     */
    status?: string;
    /**
     * Defaults to us_equity.
     */
    assetClass?: string;
    /**
     * Optional AMEX, ARCA, BATS, NYSE, NASDAQ, NYSEARCA or OTC
     */
    exchange?: string;
    /**
     * Comma separated values to query for more than one attribute.
     */
    attributes?: string;
  }): CancelablePromise<Array<Assets>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v2/assets",
      query: {
        status: status,
        asset_class: assetClass,
        exchange: exchange,
        attributes: attributes,
      },
    });
  }

  /**
   * Get an Asset by ID or Symbol
   * Get the asset model for a given symbol or asset_id. The symbol or asset_id should be passed in as a path parameter.
   *
   * **Note**: For crypto, the symbol has to follow old symbology, e.g. BTCUSD.
   *
   * **Note**: For coin pairs, the symbol should be separated by spare symbol (/), e.g. BTC/USDT. Since spare is a special character in HTTP, use the URL encoded version instead, e.g. /v2/assets/BTC%2FUSDT
   * @returns Assets An Asset object
   * @throws ApiError
   */
  public getAssetsSymbolOrAssetId({
    symbolOrAssetId,
  }: {
    /**
     * symbol or assetId
     */
    symbolOrAssetId: string;
  }): CancelablePromise<Assets> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v2/assets/{symbol_or_asset_id}",
      path: {
        symbol_or_asset_id: symbolOrAssetId,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}