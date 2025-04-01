/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CurrentUser, MessageResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Account<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags account
   * @name CurrentUser
   * @summary Current User
   * @request GET:/api/account/current
   * @secure
   * @response `200` `CurrentUser` Successful Response
   */
  currentUser = (params: RequestParams = {}) =>
    this.http.request<CurrentUser, any>({
      path: `/api/account/current`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags account
   * @name RemoveUser
   * @summary Remove Account
   * @request DELETE:/api/account/remove
   * @secure
   * @response `200` `MessageResponse` Successful Response
   */
  removeUser = (params: RequestParams = {}) =>
    this.http.request<MessageResponse, any>({
      path: `/api/account/remove`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
