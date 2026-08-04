export var Tags;
(function (Tags) {
    Tags[Tags["DESIGN"] = 0] = "DESIGN";
    Tags[Tags["PROGRAMMING"] = 1] = "PROGRAMMING";
})(Tags || (Tags = {}));
export class Article {
    page;
    title;
    tags;
    link;
    game;
    body;
    constructor(title, tags, link, game, body) {
        this.page = document.createElement("article");
        this.title = title;
        this.tags = tags;
        this.link = link;
        this.game = game;
        this.body = body;
    }
    init() {
        const docTitle = document.createElement("h1");
        docTitle.textContent = this.title;
        this.page.append(docTitle);
        const docTags = document.createElement("p");
        docTags.textContent = this.tagsToString();
        this.page.append(docTags);
        const docLink = document.createElement("link");
        docLink.href = this.link;
        docLink.textContent = "Play " + this.game;
        this.page.append(docLink);
        const docBody = document.createElement("p");
        docBody.textContent = this.body;
        this.page.append(docBody);
    }
    tagsToString() {
        let text = "";
        for (let tag of this.tags) {
            text += Tags[tag];
        }
        return text;
    }
}
//# sourceMappingURL=Article.js.map