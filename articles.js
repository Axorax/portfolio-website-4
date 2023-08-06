const articles = {
  "one-line-python-calculator": {
    title: "One line Python calculator",
    content: `
    <h2>Method - 1</h2><br/>
    <pre><code>x=float(input("1st: "));y=float(input("2nd: "));print(f'Divide: {x/y}\\nMultiply: {x*y}\\nAdd: {x+y}\\nSubtract: {x-y}')</code></pre>
    Output<br><br>
    <pre><code>1st: 3\n2nd: 2\nDivide: 1.5\nMultiply: 6.0\nAdd: 5.0\nSubtract: 1.0</code></pre>
    As well as this code works, we can do much better and make it even shorter by using eval()<br/><br/><h2>Method - 2</h2><br/>
    <pre><code>while True: print(eval(input('> ')))</code></pre>
    Output<br><br>
    <pre><code>> 4 / 2\n2.0</code></pre>
    `,
  },
};

export function load_article() {
  const x = new URLSearchParams(document.location.search).get("n");
  return {
    title: articles[x].title,
    content: articles[x].content,
  };
}
