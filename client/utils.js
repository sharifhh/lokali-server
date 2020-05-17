export const capitalize = (w) =>{
    let firstCapLatter = w[0].toUpperCase()
    let rest = w.substring(1, w.length)
    let res = firstCapLatter + rest
    return  res
}