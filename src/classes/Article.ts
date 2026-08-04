class Article {
  title: string;
  tags: Tags[];
  body: string;

  constructor(title: string, tags: Tags[], body: string) {
    this.title = title;
    this.tags = tags;
    this.body = body;
  }
}