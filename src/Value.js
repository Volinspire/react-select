var React = require("react");
var classes = require("classnames");

class Value extends React.Component {
	constructor(props) {
		super(props);
		this.blockEvent = this.blockEvent.bind(this);
		this.handleOnRemove = this.handleOnRemove.bind(this);
	}
	blockEvent(event) {
		event.stopPropagation();
	}

	handleOnRemove(event) {
		if (!this.props.disabled) {
			this.props.onRemove(event);
		}
	}

	render() {
		var label = this.props.option.label;
		if (this.props.renderer) {
			label = this.props.renderer(this.props.option);
		}

		if (!this.props.onRemove && !this.props.optionLabelClick) {
			return (
				<div
					className={classes("Select-value", this.props.option.className)}
					style={this.props.option.style}
					title={this.props.option.title}
				>
					{label}
				</div>
			);
		}

		if (this.props.optionLabelClick) {
			label = (
				<a
					className={classes(
						"Select-item-label__a",
						this.props.option.className
					)}
					onMouseDown={this.blockEvent}
					onTouchEnd={this.props.onOptionLabelClick}
					onClick={this.props.onOptionLabelClick}
					style={this.props.option.style}
					title={this.props.option.title}
				>
					{label}
				</a>
			);
		}

		return (
			<div
				className={classes("Select-item", this.props.option.className)}
				style={this.props.option.style}
				title={this.props.option.title}
			>
				<span
					className="Select-item-icon"
					onMouseDown={this.blockEvent}
					onClick={this.handleOnRemove}
					onTouchEnd={this.handleOnRemove}
				>
					&times;
				</span>
				<span className="Select-item-label">{label}</span>
			</div>
		);
	}
}

module.exports = Value;
