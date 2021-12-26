import React from 'react'

function useDebounce({func,delay}) {
    let id;

    const debounce = () => {
        const context = this
        const arguments = arguments
        clearTimeout(id)
        id = setTimeout(() =>func.apply(context, arguments),delay)
    }
    return {debounce}
}

export default useDebounce