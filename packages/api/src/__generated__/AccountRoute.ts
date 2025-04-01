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

export namespace Account {
  /**
   * No description
   * @tags account
   * @name CurrentUser
   * @summary Current User
   * @request GET:/api/account/current
   * @secure
   * @response `200` `CurrentUser` Successful Response
   */
  export namespace CurrentUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CurrentUser;
  }

  /**
   * No description
   * @tags account
   * @name RemoveUser
   * @summary Remove Account
   * @request DELETE:/api/account/remove
   * @secure
   * @response `200` `MessageResponse` Successful Response
   */
  export namespace RemoveUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MessageResponse;
  }
}
