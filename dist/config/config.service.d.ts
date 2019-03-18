export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    private validateInput;
    readonly env: string;
    readonly port: number;
    readonly ormLoadingPath: string;
    readonly databaseType: string;
    readonly databaseHost: string;
    readonly databasePort: number;
    readonly databaseUserName: string;
    readonly databasePassword: string;
    readonly databaseName: string;
    readonly databaseSynchronize: boolean;
    readonly databaseDropSchema: boolean;
}
