import logo from './logo.svg';
import './App.css';
import React from 'react';
import marked from 'marked';
import GithubCorner from 'react-github-corner';

const MainTitle = () =>{
	return(
		<h1 className="auto-margin big-font">Markdown Previewer</h1>
	);	
}
function isHeader(input){
	return (/^#{1,6}\ /.test(input));
}
function getMarkdown(inputs){
	const arr = inputs.split('\n');
	let comps = [];
	comps = arr.map( (e) => {
		if(isHeader(e))
			return (<h1>{e.replace(/^#{1,6}\ /,"")}</h1>);
		else
			return e;
	});
	return comps;
}
class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			input: "",
			markdown: []
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
