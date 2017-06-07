import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';



class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 对函数体使用括号, 返回一个对象字面表达式
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
          <button onClick={this.handleClick.bind(this)}> 
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
    }
}



class MessageForm extends React.Component {
	constructor(props) {
		super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

	onSubmit(e) {
		e.preventDefault();
		var name = this.refs.name.value.trim();
		var comment = this.refs.comment.value.trim();
		this.props.submit(name, comment);
	}

	render () {
		return(
			<div className="well">
				<h4> {this.props.txt} </h4>
					<div className="form-group">
						<label for="exampleinputemail1">your name</label>
						<input ref="name" className="form-control" placeholder="your name"></input>
					</div>
					<div className="form-group">
						<label for="exampleinputemail1">your comment</label>
						<textarea ref="comment" className="form-control" placeholder="enter message"></textarea>
	                </div>
	                <a onClick={this.onSubmit} className="btn btn-primary">submit</a>
            </div>
		)
	}
}

MessageForm.proTpyes = {
	txt: PropTypes.string,
	cat: PropTypes.number.isRequired
}

MessageForm.defaultProps = {
	txt: 'Leave a message'
}


class MessageList extends React.Component {

	render () {
		var message = this.props.data.map(function(item){
			return (
				<li className="list-group-item">
				{item.name}  said:  ({item.create_at})
				<p> {item.comment} </p>
				</li>
			)
		});

		return(
			<ul className="list-group" id="message-container">
			<li className="list-group-item">Placeholder message</li>
			{message}
			</ul>
		)
	}
}


class Container extends React.Component {
	constructor(props) {
        super(props);
    	this.state = {data: [
    					{name:'David', comment: 'Hello there!'}, 
    					{name: 'Sam',  comment: 'This is cool.'}
    				]};
    	this.submit = this.submit.bind(this);			
    }

	submit (name, comment) {
		this.state.data.push({name:name, comment:comment});
		this.setState({ data:this.state.data})
	}


	// listComment(data) {
	// 	this.setState({ data:data})
	// }


	// componentDidMount() {
	// 	this.listComment();
	// }


	render () {
		return(
			<div>
				<div className="col-xs-12 col-md-4">
					<MessageForm cat={5}  submit = {this.submit} />
				</div>
				<div className="well">
					<div className="col-xs-12 col-md-8">
						<MessageList data = {this.state.data} />
					</div>
				</div>
				<Toggle />
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
	<Container/>,
	document.getElementById('root')
);

