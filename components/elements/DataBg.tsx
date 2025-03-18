import { useEffect } from 'react'

export default function DataBg() {
    useEffect(() => {
        const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-bg]')

        elements.forEach((element: HTMLElement) => {
            element.style.backgroundImage = `url(${element.getAttribute('data-bg')})`
        })
    }, [])
    return (
        <>

        </>
    )
}
