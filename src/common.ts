export const isNumber = (subject: any) => typeof subject === 'number' && subject === subject;
// is not NaN: `NaN === NaN` => `false`

export const isArray = Array.isArray



export type DataObject = Array<number>