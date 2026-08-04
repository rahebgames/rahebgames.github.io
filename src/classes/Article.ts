export enum Tags {
  DESIGN,
  PROGRAMMING,
}

export class Article {
  page: HTMLElement;
  title: string;
  tags: Tags[];
  link: string;
  game: string;  
  body: string;

  constructor(title: string, tags: Tags[], link: string, game: string, body: string) {
    this.page = document.createElement("article");
    this.title = title;
    this.tags = tags;
    this.link = link;
    this.game = game;
    this.body = body;
  }

  init() {
    const docTitle: HTMLHeadingElement = document.createElement("h1");
    docTitle.textContent = this.title;
    this.page.append(docTitle);
  
    const docTags: HTMLParagraphElement = document.createElement("p");
    docTags.textContent = this.tagsToString();
    this.page.append(docTags);

    const docLink: HTMLLinkElement = document.createElement("link");
    docLink.href = this.link;
    docLink.textContent = "Play " + this.game;
    this.page.append(docLink);

    const docBody: HTMLParagraphElement = document.createElement("p");
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