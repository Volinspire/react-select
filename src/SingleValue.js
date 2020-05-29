var React = require("react");
var classes = require("classnames");

class SingleValue extends React.Component {
	render() {
		var classNames = classes(
			"Select-placeholder",
			this.props.value && this.props.value.className
		);
		return (
			<div
				className={classNames}
				style={this.props.value && this.props.value.style}
				title={this.props.value && this.props.value.title}
			>
				{this.props.placeholder}
			</div>
		);
	}
}

module.exports = SingleValue;
