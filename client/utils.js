export const capitalize = (w) =>{
    let firstCapLatter = w[0].toUpperCase()
    let rest = w.substring(1, w.length)
    let res = firstCapLatter + rest
    return  res
}


export const saveToStorage = (k,v) =>  localStorage.setItem(k , JSON.stringify(v))

export const loadFromStroge = k => {
    let str = localStorage.getItem(k)
    console.log(str)
    return JSON.parse(str)
}
