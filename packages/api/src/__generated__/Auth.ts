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
  HTTPValidationError,
  LoginResponse,
  RegisterResponse,
  Token,
  UserCreate,
  UserLogin,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags auth
   * @name LoginForAccessTokenApiAuthTokenPost
   * @summary Login For Access Token
   * @request POST:/api/auth/token
   * @response `200` `Token` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  loginForAccessTokenApiAuthTokenPost = (data: BodyLoginForAccessTokenApiAuthTokenPost, params: RequestParams = {}) =>
    this.http.request<Token, HTTPValidationError>({
      path: `/api/auth/token`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name Register
   * @summary Signup
   * @request POST:/api/auth/register
   * @response `200` `RegisterResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  register = (data: UserCreate, params: RequestParams = {}) =>
    this.http.request<RegisterResponse, HTTPValidationError>({
      path: `/api/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name Login
   * @summary Login
   * @request POST:/api/auth/login
   * @response `200` `LoginResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  login = (data: UserLogin, params: RequestParams = {}) =>
    this.http.request<LoginResponse, HTTPValidationError>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ContinueAsGuest
   * @summary Continue As Guest
   * @request POST:/api/auth/continue-as-guest
   * @response `200` `ContinueAsGuestResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  continueAsGuest = (params: RequestParams = {}) =>
    this.http.request<ContinueAsGuestResponse, HTTPValidationError>({
      path: `/api/auth/continue-as-guest`,
      method: "POST",
      format: "json",
      ...params,
    });
}
