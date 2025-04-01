import { AxiosRequestConfig } from "axios";
import { Auth } from "./__generated__/Auth";
import { Account } from "./__generated__/Account";
import { Posts } from "./__generated__/Posts";
import { HttpClient } from "./__generated__/http-client";

export class ApiClient {
    auth: Auth;
    account: Account;
    posts: Posts;
    constructor(axiosConfig: AxiosRequestConfig) {
        const client = new HttpClient(axiosConfig);
        this.auth = new Auth(client);
        this.account = new Account(client);
        this.posts = new Posts(client);
    }
}

// Re-export types
export type { Auth } from "./__generated__/Auth";
export type { Account } from "./__generated__/Account";
export type { Posts } from "./__generated__/Posts";
export type { HttpClient } from "./__generated__/http-client";
