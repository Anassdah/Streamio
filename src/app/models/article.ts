export interface Article {
    _id: string;
    title :String;
    image_url : String;
    description :String ;
    author_id : String ;
    likes : String ;
    comments :Array<String>;
}
