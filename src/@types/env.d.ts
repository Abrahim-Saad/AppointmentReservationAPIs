declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        DATABASE_URL: string;
        NODE_ENV: 'development' | 'test'| 'uat' | 'pre-production' | 'production' | 'disaster-recovery';
    }
}
