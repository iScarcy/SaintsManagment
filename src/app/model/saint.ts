export interface Saint{
    id:number,
    description:string,
    date:Date
}

export function compareSaint(s1: Saint, s2: Saint):number{
    const compare = s1.id  - s2.id
     
    if(compare > 0)
        return 1;
    else if (compare < 0)
        return -1;
    else 
        return 0;

}