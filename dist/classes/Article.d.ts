export declare enum Tags {
    DESIGN = 0,
    PROGRAMMING = 1
}
export declare class Article {
    page: HTMLElement;
    title: string;
    tags: Tags[];
    link: string;
    game: string;
    body: string;
    constructor(title: string, tags: Tags[], link: string, game: string, body: string);
    init(): void;
    tagsToString(): string;
}
//# sourceMappingURL=Article.d.ts.map