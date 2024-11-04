import { CF5KIT_ELEMENT } from "../types/element";
import { CF5KIT_PAGE } from "../types/PAGE";

let vDom = `` //This is the virtual dom we all know and love

const getElementString = (element: CF5KIT_ELEMENT) => {

    let openingString = `<${element.type}`
    let closingString = ``
    let content = ``

    if(element.children.length == 0) {
        openingString += `/>`
    } else {
        openingString += ">"
        closingString = `</${element.type}>`
    }

    for (const childElement of element.children) {
        content += getElementString(childElement)
    }

    return `${openingString}${content}${closingString}`

}

export const compilePage = (page: CF5KIT_PAGE): string => {

    for(const element of page.elements) {
       vDom += getElementString(element)   
    }

    console.log(vDom)

    return vDom
}   