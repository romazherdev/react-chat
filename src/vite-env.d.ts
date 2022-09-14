/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly CHAT_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
