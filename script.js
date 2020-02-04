const App = () => {
  const [editorText, setEditorText] = React.useState(`# My Markdown Previewer pen for fCC
## See what's here

Some inline code \`<p> here </p>\`.

Also some **bold text**.

\`\`\`
// Multi-line code here:

let multiLineCode = true

const myFunc = () => {
  if (multiLineCode) {
    return 'Yep'
  } else {
    return 'Nope'
  }
}

myFunc()
\`\`\`

- There are list items.
  - And they differ with indentation.

There are also links like [here](https://www.freecodecamp.com).
> Block Quotes!

We have an image with alt text here:

![React Logo Here!](https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png)
`);
  const [markedText, setMarkedText] = React.useState('');
  React.useEffect(() => {setMarkedText(marked(editorText));}, [editorText]);
  return (
    React.createElement("div", null,
    React.createElement("textarea", { id: "editor", onChange: e => setEditorText(e.target.value) }, editorText),
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: markedText } })));


};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));