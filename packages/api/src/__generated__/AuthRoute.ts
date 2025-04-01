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

import {
  BodyLoginForAccessTokenApiAuthTokenPost,
  ContinueAsGuestResponse,
  LoginResponse,
  RegisterResponse,
  Token,
  UserCreate,
  UserLogin,
} from "./data-contracts";

export namespace Auth {
  /**
   * No description
   * @tags auth
   * @name LoginForAccessTokenApiAuthTokenPost
   * @summary Login For Access Token
   * @request POST:/api/auth/token
   * @response `200` `Token` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace LoginForAccessTokenApiAuthTokenPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BodyLoginForAccessTokenApiAuthTokenPost;
    export type RequestHeaders = {};
    export type ResponseBody = Token;
  }

  /**
   * No description
   * @tags auth
   * @name Register
   * @summary Signup
   * @request POST:/api/auth/register
   * @response `200` `RegisterResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace Register {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserCreate;
    export type RequestHeaders = {};
    export type ResponseBody = RegisterResponse;
  }

  /**
   * No description
   * @tags auth
   * @name Login
   * @summary Login
   * @request POST:/api/auth/login
   * @response `200` `LoginResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace Login {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserLogin;
    export type RequestHeaders = {};
    export type ResponseBody = LoginResponse;
  }

  /**
   * No description
   * @tags auth
   * @name ContinueAsGuest
   * @summary Continue As Guest
   * @request POST:/api/auth/continue-as-guest
   * @response `200` `ContinueAsGuestResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace ContinueAsGuest {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContinueAsGuestResponse;
  }
}
