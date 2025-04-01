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

import { HTTPValidationError, ListParams, PostCreate, PostResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Posts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags posts
   * @name Create
   * @summary Create Post
   * @request POST:/api/posts/create
   * @secure
   * @response `200` `PostResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  create = (data: PostCreate, params: RequestParams = {}) =>
    this.http.request<PostResponse, HTTPValidationError>({
      path: `/api/posts/create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags posts
   * @name List
   * @summary Get Posts
   * @request GET:/api/posts/
   * @response `200` `(PostResponse)[]` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  list = (query: ListParams, params: RequestParams = {}) =>
    this.http.request<PostResponse[], HTTPValidationError>({
      path: `/api/posts/`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags posts
   * @name Update
   * @summary Update Post
   * @request PATCH:/api/posts/{post_id}
   * @secure
   * @response `200` `PostResponse` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  update = (postId: number, data: PostCreate, params: RequestParams = {}) =>
    this.http.request<PostResponse, HTTPValidationError>({
      path: `/api/posts/${postId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags posts
   * @name Delete
   * @summary Delete Post
   * @request DELETE:/api/posts/{post_id}
   * @secure
   * @response `204` `void` Successful Response
   * @response `422` `HTTPValidationError` Validation Error
   */
  delete = (postId: number, params: RequestParams = {}) =>
    this.http.request<void, HTTPValidationError>({
      path: `/api/posts/${postId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
