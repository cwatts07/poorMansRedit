export interface ReditResponse {
    kind:string;
    data:{
        children:ReditChildren[]
    }
}

interface ReditChildren{
    thumbnail:string;
    title:string;
    url:string;
}
