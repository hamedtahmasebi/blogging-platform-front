import * as path from "node:path";
import * as process from "node:process";
// @ts-ignore
import { generateApi } from "swagger-typescript-api";

async function run() {
    await generateApi({
        url: "http://localhost:8000/openapi.json",
        httpClientType: "axios",
        // defaultResponseAsSuccess: true,
        output: path.resolve(process.cwd(), "src/__generated__"),
        generateRouteTypes: true,
        generateResponses: true,
        extractRequestParams: true,
        extractRequestBody: true,
        extractEnums: true,
        cleanOutput: true,
        fixInvalidTypeNames: true,
        singleHttpClient: true, // Ensure this is false
        modular: true,
        moduleNameFirstTag: true,
        // prettier: {
        //     printWidth: 120,
        //     tabWidth: 4,
        //     trailingComma: "all",
        //     parser: "typescript",
        // },
    });
}
run();
