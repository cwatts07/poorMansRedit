export interface RedditResponse {
    kind:string;
    data:{
        children:RedditChildren[]
    }
}

export interface RedditChildren{
    data:{
        permalink:  string;
        thumbnail:  string;
        title:      string;
        url:        string;
        domain:     string;
    }
    
}

export default RedditResponse;
