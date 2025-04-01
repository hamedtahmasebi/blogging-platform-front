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

/** Body_login_for_access_token_api_auth_token_post */
export interface BodyLoginForAccessTokenApiAuthTokenPost {
  /** Grant Type */
  grant_type?: string | null;
  /** Username */
  username: string;
  /** Password */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string | null;
  /** Client Secret */
  client_secret?: string | null;
}

/** ContinueAsGuestResponse */
export interface ContinueAsGuestResponse {
  /** Access Token */
  access_token: string;
  /** Message */
  message: string;
}

/** CurrentUser */
export interface CurrentUser {
  /** Email */
  email: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** LoginResponse */
export interface LoginResponse {
  /** Access Token */
  access_token: string;
  /** Message */
  message: string;
}

/** MessageResponse */
export interface MessageResponse {
  /** Message */
  message: string;
}

/** PostCreate */
export interface PostCreate {
  /** Title */
  title: string;
  /** Content */
  content: string;
}

/** PostResponse */
export interface PostResponse {
  /** Id */
  id: number;
  /** Title */
  title: string;
  /** Content */
  content: string;
  /** Author Id */
  author_id: number;
}

/** RegisterResponse */
export interface RegisterResponse {
  /** Access Token */
  access_token: string;
  /** Message */
  message: string;
}

/** Token */
export interface Token {
  /** Access Token */
  access_token: string;
  /** Token Type */
  token_type: string;
}

/** UserCreate */
export interface UserCreate {
  /** Email */
  email: string;
  /** Password */
  password: string;
}

/** UserLogin */
export interface UserLogin {
  /** Email */
  email: string;
  /** Password */
  password: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export interface ListParams {
  /**
   * Page
   * @default 1
   */
  page?: number;
  /**
   * Limit
   * @default 10
   */
  limit?: number;
}
