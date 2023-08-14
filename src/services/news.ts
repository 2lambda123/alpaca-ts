import type { GetNewsResponse } from "../entities/GetNewsResponse.js";
import type { BaseHttpRequest } from "../rest/BaseHttpRequest.js";
import type { CancelablePromise } from "../rest/CancelablePromise.js";

/**
 * News API
 * Returns latest news articles across stocks and crypto. By default returns latest 10 news articles.
 * @returns GetNewsResponse Successful response
 * @throws ApiError
 */
export const getNews = (
  httpRequest: BaseHttpRequest,
  {
    symbols,
    start,
    end,
    limit,
    sort,
    includeContent,
    excludeContentless,
    pageToken,
  }: {
    /**
     * The comma-separated list of crypto symbols to query for. Note, currently all crypto symbols must be appended with "USD", ie "BTCUSD,ETHUSD" would get both BTC and ETH
     */
    symbols: string;
    /**
     * Filter data equal to or after this time in RFC-3339 format. Fractions of a second are not accepted.
     */
    start?: string;
    /**
     * Filter data equal to or before this time in RFC-3339 format. Fractions of a second are not accepted.
     */
    end?: string;
    /**
     * Number of data points to return. Must be in range 1-10000, defaults to 1000.
     */
    limit?: number;
    /**
     * Sort articles by updated date. Options: DESC, ASC
     */
    sort?: "DESC" | "ASC";
    /**
     * Boolean indicator to include content for news articles (if available)
     */
    includeContent?: boolean;
    /**
     * Boolean indicator to exclude news articles that do not contain content
     */
    excludeContentless?: boolean;
    /**
     * Pagination token to continue from. The value to pass here is returned in specific requests when more data is available than the request limit allows.
     */
    pageToken?: string;
  }
): CancelablePromise<GetNewsResponse> => {
  return httpRequest.request({
    method: "GET",
    url: "/v1beta1/news",
    query: {
      start: start,
      end: end,
      symbols: symbols,
      limit: limit,
      sort: sort,
      include_content: includeContent,
      exclude_contentless: excludeContentless,
      page_token: pageToken,
    },
  });
};
