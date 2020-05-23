export const capitalize = (w) =>{
    let firstCapLatter = w[0].toUpperCase()
    let rest = w.substring(1, w.length)
    let res = firstCapLatter + rest
    return  res
}


export const saveToStorage = (k,v) =>  localStorage.setItem(k , JSON.stringify(v))
export const saveToSessionStorage = (k,v) =>  sessionStorage.setItem(k , JSON.stringify(v))

export const loadFromStroge = k => {
    let str = localStorage.getItem(k)
    return JSON.parse(str)
}

export const loadFromSessionStroge = k => {
    let str = sessionStorage.getItem(k)
    return JSON.parse(str)
}

