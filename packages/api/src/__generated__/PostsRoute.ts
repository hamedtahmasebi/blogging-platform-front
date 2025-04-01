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

import { PostCreate, PostResponse } from "./data-contracts";

export namespace Posts {
  /**
   * No description
   * @tags posts
   * @name Create
   * @summary Create Post
   * @request POST:/api/posts/create
   * @secure
   * @response `200` `PostResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PostCreate;
    export type RequestHeaders = {};
    export type ResponseBody = PostResponse;
  }

  /**
   * No description
   * @tags posts
   * @name List
   * @summary Get Posts
   * @request GET:/api/posts/
   * @response `200` `(PostResponse)[]` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostResponse[];
  }

  /**
   * No description
   * @tags posts
   * @name Update
   * @summary Update Post
   * @request PATCH:/api/posts/{post_id}
   * @secure
   * @response `200` `PostResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace Update {
    export type RequestParams = {
      /** Post Id */
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PostCreate;
    export type RequestHeaders = {};
    export type ResponseBody = PostResponse;
  }

  /**
   * No description
   * @tags posts
   * @name Delete
   * @summary Delete Post
   * @request DELETE:/api/posts/{post_id}
   * @secure
   * @response `204` `void` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  export namespace Delete {
    export type RequestParams = {
      /** Post Id */
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}
