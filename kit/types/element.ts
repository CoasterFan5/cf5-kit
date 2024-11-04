interface CF5KIT_ELEMENT_BASE {
    type: string,
    styles: [],
    events: {},
    children: []
}

export interface CF5KIT_ELEMENT_DIV extends CF5KIT_ELEMENT_BASE {
    type: "div",
}

export type CF5KIT_ELEMENT = CF5KIT_ELEMENT_DIV

