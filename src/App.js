import './App.css';
import React from 'react';
import marked from 'marked';
import GithubCorner from 'react-github-corner';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![pillar](https://mirrors.creativecommons.org/presskit/icons/cc.png)
`;
const MainTitle = () =>{
	return(
		<h1 className="auto-margin big-font">Markdown Previewer</h1>
	);	
}
class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			input: "",
			markdown: marked(placeholder)
		}
		this.inputChange = this.inputChange.bind(this);
	}
	inputChange(e){
		this.setState({
			input: e.target.value,
			markdown: marked(e.target.value)
		});
	}
	render(){
		return(
  		<React.StrictMode>
				<div className="main-app-container">
					<MainTitle />
					<div className="side-panes-container">
						<div className="editor-container card round-edge white-bg">
			<div className="row">
							<h2 className="subheader yellow-color round-edge-right right-text-align">Editor:</h2>
			</div>
							<textarea 
								className="fill-area margin10"
								type="text"
								placeholder={placeholder}
								onChange={this.inputChange}>
							</textarea>
						</div>

						<div className="preview-container card round-edge white-bg">
			<div className="reverse-row">
							<h2 className="subheader yellow-color round-edge-left right-text-align">Preview:</h2>
			</div>
							<div 
								className="preview-show margin10"
								dangerouslySetInnerHTML={{__html: this.state.markdown}} />
						</div>
					</div>
				</div>
			<GithubCorner href="https://github.com/VivekThazhathattil/markdown-viewer" />
  		</React.StrictMode>
		);
	}
};

export default App;
