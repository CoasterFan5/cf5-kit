import { CF5KIT_PAGE } from "./PAGE"

export type CF5KIT_APP = {
    pages: {
        [key: string]: CF5KIT_PAGE
    },
    config: {
        port: number
    }
}

