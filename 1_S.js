// Single Responsibility Principle
console.clear();

interface INews {
  title: string;
  text: string;
  wasModified: boolean;
}

class News {
  constructor(
    public title: string, 
    public text: string,
    public wasModified: boolean = false,
  ) {}

  update(text: string) {
    this.text = text
    this.wasModified = true
  }
}

class NewsPrinter {
  constructor(public news: INews) {}

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.wasModified,
    }, null, 2)
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
  }
}


const printer = new NewsPrinter(
  new News('Путин', 'Новая конституция')
)

console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())
