import { CF5KIT_STYLES } from "./styles"

interface CF5KIT_ELEMENT_BASE {
    type: "div" | "p",
    styles: CF5KIT_STYLES,
    events: {},
}

interface CF5KIT_ELEMENT_WITH_CHILD extends CF5KIT_ELEMENT_BASE {
    children: CF5KIT_ELEMENT[]
}

export interface CF5KIT_ELEMENT_DIV extends CF5KIT_ELEMENT_WITH_CHILD {
    type: "div",
    body?: string
}

export interface CF5KIT_ELEMENT_PARAGRAPH extends CF5KIT_ELEMENT_BASE {
    type: "p",
    body?: string
}


 
export type CF5KIT_ELEMENT = CF5KIT_ELEMENT_DIV | CF5KIT_ELEMENT_PARAGRAPH

