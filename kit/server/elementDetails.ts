import { CF5KIT_ELEMENT } from "../types/element"

const elementDetailsMap = {
    "div": {
        "children": true,
    },
    "paragraph": {
        "children": false
    }
}

export const elementDetails = (element: CF5KIT_ELEMENT) => {
    return elementDetailsMap[element.type]
}