import { CF5KIT_ELEMENT } from "../types/element";
import { CF5KIT_PAGE } from "../types/PAGE";
import { buildStyles } from "./styleBuilder";

const getElementString = (element: CF5KIT_ELEMENT) => {

    if(element.type == "div") {
        let str = `<${element.type} style="${buildStyles(element.styles)}">`
        if(element.body) {
            str += element.body
        }
        const children = element.children ?  element.children : []
        for(const child of children) {
            str += getElementString(child)
        }
        return `${str}</${element.type}>`
    } else {
        return `<${element.type} style="${buildStyles(element.styles)}">${element.body}</${element.type}>`
    }

    

}

export const compilePage = (page: CF5KIT_PAGE): string => {

    let vDom = ''

    for(const element of page.elements) {
       vDom += getElementString(element)   
    }

    return `<style>
    body,
    body * {
        all: unset;
    }
        </style><html><body>${vDom}</body></html>`
}   