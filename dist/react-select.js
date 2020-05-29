(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Select = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var classes = (typeof window !== "undefined" ? window['classNames'] : typeof global !== "undefined" ? global['classNames'] : null);

var Option = (function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option(props) {
		_classCallCheck(this, Option);

		_get(Object.getPrototypeOf(Option.prototype), "constructor", this).call(this, props);
		this.blockEvent = this.blockEvent.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	_createClass(Option, [{
		key: "blockEvent",
		value: function blockEvent(event) {
			event.preventDefault();
			if (event.target.tagName !== "A" || !("href" in event.target)) {
				return;
			}

			if (event.target.target) {
				window.open(event.target.href);
			} else {
				window.location.href = event.target.href;
			}
		}
	}, {
		key: "handleMouseDown",
		value: function handleMouseDown(e) {
			this.props.mouseDown(this.props.option, e);
		}
	}, {
		key: "handleMouseEnter",
		value: function handleMouseEnter(e) {
			this.props.mouseEnter(this.props.option, e);
		}
	}, {
		key: "handleMouseLeave",
		value: function handleMouseLeave(e) {
			this.props.mouseLeave(this.props.option, e);
		}
	}, {
		key: "render",
		value: function render() {
			var option = this.props.option;
			var label = option.create ? this.props.addLabelText.replace("{label}", option.label) : this.props.renderFunc(option);
			var optionClasses = classes(this.props.className, option.className);

			return option.disabled ? React.createElement(
				"div",
				{
					className: optionClasses,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent
				},
				label
			) : React.createElement(
				"div",
				{
					className: optionClasses,
					style: option.style,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onClick: this.handleMouseDown,
					title: option.title
				},
				label
			);
		}
	}]);

	return Option;
})(React.Component);

module.exports = Option;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
/* disable some rules until we refactor more completely; fixing them now would
   cause conflicts with some open PRs unnecessarily. */
/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = require("react-dom");
var Input = (typeof window !== "undefined" ? window['AutosizeInput'] : typeof global !== "undefined" ? global['AutosizeInput'] : null);
var classes = (typeof window !== "undefined" ? window['classNames'] : typeof global !== "undefined" ? global['classNames'] : null);
var Value = require("./Value");
var SingleValue = require("./SingleValue");
var Option = require("./Option");

var requestId = 0;

var Select = (function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		_get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, props);

		this.focus = this.focus.bind(this);
		this.clickedOutsideElement = this.clickedOutsideElement.bind(this);
		this.getStateFromValue = this.getStateFromValue.bind(this);
		this.getFirstFocusableOption = this.getFirstFocusableOption.bind(this);
		this.initValuesArray = this.initValuesArray.bind(this);
		this.setValue = this.setValue.bind(this);
		this.selectValue = this.selectValue.bind(this);
		this.addValue = this.addValue.bind(this);
		this.popValue = this.popValue.bind(this);
		this.removeValue = this.removeValue.bind(this);
		this.clearValue = this.clearValue.bind(this);
		this.resetValue = this.resetValue.bind(this);
		this.getInputNode = this.getInputNode.bind(this);
		this.fireChangeEvent = this.fireChangeEvent.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseDownOnArrow = this.handleMouseDownOnArrow.bind(this);
		this.handleMouseDownOnMenu = this.handleMouseDownOnMenu.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this._getNewFocusedOption = this._getNewFocusedOption.bind(this);
		this.autoloadAsyncOptions = this.autoloadAsyncOptions.bind(this);
		this.loadAsyncOptions = this.loadAsyncOptions.bind(this);
		this.filterOptions = this.filterOptions.bind(this);
		this.selectFocusedOption = this.selectFocusedOption.bind(this);
		this.focusOption = this.focusOption.bind(this);
		this.focusNextOption = this.focusNextOption.bind(this);
		this.focusPreviousOption = this.focusPreviousOption.bind(this);
		this.focusAdjacentOption = this.focusAdjacentOption.bind(this);
		this.unfocusOption = this.unfocusOption.bind(this);
		this.renderOptionLabel = this.renderOptionLabel.bind(this);
		this.buildMenu = this.buildMenu.bind(this);
		this.handleOptionLabelClick = this.handleOptionLabelClick.bind(this);
		this.isLoading = this.isLoading.bind(this);

		this.state = {
			/*
    * set by getStateFromValue on componentWillMount:
    * - value
    * - values
    * - filteredOptions
    * - inputValue
    * - placeholder
    * - focusedOption
    */
			isFocused: false,
			isLoading: false,
			isOpen: false,
			options: this.props.options
		};
	}

	_createClass(Select, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var _this = this;

			this._optionsCache = {};
			this._optionsFilterString = "";
			this._closeMenuIfClickedOutside = function (event) {
				if (!_this.state.isOpen) {
					return;
				}
				var menuElem = ReactDOM.findDOMNode(_this.refs.selectMenuContainer);
				var controlElem = ReactDOM.findDOMNode(_this.refs.control);

				var eventOccuredOutsideMenu = _this.clickedOutsideElement(menuElem, event);
				var eventOccuredOutsideControl = _this.clickedOutsideElement(controlElem, event);

				// Hide dropdown menu if click occurred outside of menu
				if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
					_this.setState({
						isOpen: false
					}, _this._unbindCloseMenuIfClickedOutside);
				}
			};
			this._bindCloseMenuIfClickedOutside = function () {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent("onclick", _this._closeMenuIfClickedOutside);
				} else {
					document.addEventListener("click", _this._closeMenuIfClickedOutside);
				}
			};
			this._unbindCloseMenuIfClickedOutside = function () {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent("onclick", _this._closeMenuIfClickedOutside);
				} else {
					document.removeEventListener("click", _this._closeMenuIfClickedOutside);
				}
			};
			this.setState(this.getStateFromValue(this.props.value));
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			if (this.props.asyncOptions && this.props.autoload) {
				this.autoloadAsyncOptions();
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearTimeout(this._blurTimeout);
			clearTimeout(this._focusTimeout);
			if (this.state.isOpen) {
				this._unbindCloseMenuIfClickedOutside();
			}
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(newProps) {
			var _this2 = this;

			var optionsChanged = false;
			if (JSON.stringify(newProps.options) !== JSON.stringify(this.props.options)) {
				optionsChanged = true;
				this.setState({
					options: newProps.options,
					filteredOptions: this.filterOptions(newProps.options)
				});
			}
			if (newProps.value !== this.state.value || newProps.placeholder !== this.props.placeholder || optionsChanged) {
				var setState = function setState(newState) {
					_this2.setState(_this2.getStateFromValue(newProps.value, newState && newState.options || newProps.options, newProps.placeholder));
				};
				if (this.props.asyncOptions) {
					this.loadAsyncOptions(newProps.value, {}, setState);
				} else {
					setState();
				}
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			var _this3 = this;

			if (!this.props.disabled && this._focusAfterUpdate) {
				clearTimeout(this._blurTimeout);
				clearTimeout(this._focusTimeout);
				this._focusTimeout = setTimeout(function () {
					if (!_this3.isMounted()) return;
					_this3.getInputNode().focus();
					_this3._focusAfterUpdate = false;
				}, 50);
			}
			if (this._focusedOptionReveal) {
				if (this.refs.focused && this.refs.menu) {
					var focusedDOM = ReactDOM.findDOMNode(this.refs.focused);
					var menuDOM = ReactDOM.findDOMNode(this.refs.menu);
					var focusedRect = focusedDOM.getBoundingClientRect();
					var menuRect = menuDOM.getBoundingClientRect();

					if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
						menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
					}
				}
				this._focusedOptionReveal = false;
			}
		}
	}, {
		key: "focus",
		value: function focus() {
			this.getInputNode().focus();
		}
	}, {
		key: "clickedOutsideElement",
		value: function clickedOutsideElement(element, event) {
			var eventTarget = event.target ? event.target : event.srcElement;
			while (eventTarget != null) {
				if (eventTarget === element) return false;
				eventTarget = eventTarget.offsetParent;
			}
			return true;
		}
	}, {
		key: "getStateFromValue",
		value: function getStateFromValue(value, options, placeholder) {
			var _this4 = this;

			if (!options) {
				options = this.state.options;
			}
			if (!placeholder) {
				placeholder = this.props.placeholder;
			}

			// reset internal filter string
			this._optionsFilterString = "";

			var values = this.initValuesArray(value, options);
			var filteredOptions = this.filterOptions(options, values);

			var focusedOption;
			var valueForState = null;
			if (!this.props.multi && values.length) {
				focusedOption = values[0];
				valueForState = values[0][this.props.valueKey];
			} else {
				focusedOption = this.getFirstFocusableOption(filteredOptions);
				valueForState = values.map(function (v) {
					return v[_this4.props.valueKey];
				}).join(this.props.delimiter);
			}

			return {
				value: valueForState,
				values: values,
				inputValue: "",
				filteredOptions: filteredOptions,
				placeholder: !this.props.multi && values.length ? values[0][this.props.labelKey] : placeholder,
				focusedOption: focusedOption
			};
		}
	}, {
		key: "getFirstFocusableOption",
		value: function getFirstFocusableOption(options) {
			for (var optionIndex = 0; optionIndex < options.length; ++optionIndex) {
				if (!options[optionIndex].disabled) {
					return options[optionIndex];
				}
			}
		}
	}, {
		key: "initValuesArray",
		value: function initValuesArray(values, options) {
			var _this5 = this;

			if (!Array.isArray(values)) {
				if (typeof values === "string") {
					values = values === "" ? [] : this.props.multi ? values.split(this.props.delimiter) : [values];
				} else {
					values = values !== undefined && values !== null ? [values] : [];
				}
			}
			return values.map(function (val) {
				if (typeof val === "string" || typeof val === "number") {
					var _ref;

					for (var key in options) {
						if (options.hasOwnProperty(key) && options[key] && (options[key][_this5.props.valueKey] === val || typeof options[key][_this5.props.valueKey] === "number" && options[key][_this5.props.valueKey].toString() === val)) {
							return options[key];
						}
					}
					return _ref = {}, _defineProperty(_ref, _this5.props.valueKey, val), _defineProperty(_ref, _this5.props.labelKey, val), _ref;
				} else {
					return val;
				}
			});
		}
	}, {
		key: "setValue",
		value: function setValue(value, focusAfterUpdate) {
			if (focusAfterUpdate || focusAfterUpdate === undefined) {
				this._focusAfterUpdate = true;
			}
			var newState = this.getStateFromValue(value);
			newState.isOpen = false;
			this.fireChangeEvent(newState);
			this.setState(newState);
		}
	}, {
		key: "selectValue",
		value: function selectValue(value) {
			if (!this.props.multi) {
				this.setValue(value);
			} else if (value) {
				this.addValue(value);
			}
			this._unbindCloseMenuIfClickedOutside();
		}
	}, {
		key: "addValue",
		value: function addValue(value) {
			this.setValue(this.state.values.concat(value));
		}
	}, {
		key: "popValue",
		value: function popValue() {
			this.setValue(this.state.values.slice(0, this.state.values.length - 1));
		}
	}, {
		key: "removeValue",
		value: function removeValue(valueToRemove) {
			this.setValue(this.state.values.filter(function (value) {
				return value !== valueToRemove;
			}));
		}
	}, {
		key: "clearValue",
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === "mousedown" && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(null);
		}
	}, {
		key: "resetValue",
		value: function resetValue() {
			this.setValue(this.state.value === "" ? null : this.state.value);
		}
	}, {
		key: "getInputNode",
		value: function getInputNode() {
			var input = this.refs.input;
			return this.props.searchable ? input : ReactDOM.findDOMNode(input);
		}
	}, {
		key: "fireChangeEvent",
		value: function fireChangeEvent(newState) {
			if (newState.value !== this.state.value && this.props.onChange) {
				this.props.onChange(newState.value, newState.values);
			}
		}
	}, {
		key: "handleMouseDown",
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === "mousedown" && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();

			// for the non-searchable select, close the dropdown when button is clicked
			if (this.state.isOpen && !this.props.searchable) {
				this.setState({
					isOpen: false
				}, this._unbindCloseMenuIfClickedOutside);
				return;
			}

			if (this.state.isFocused) {
				this.setState({
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				this._openAfterFocus = true;
				this.getInputNode().focus();
			}
		}
	}, {
		key: "handleMouseDownOnMenu",
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === "mousedown" && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
		}
	}, {
		key: "handleMouseDownOnArrow",
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === "mousedown" && event.button !== 0) {
				return;
			}
			// If not focused, handleMouseDown will handle it
			if (!this.state.isOpen) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setState({
				isOpen: false
			}, this._unbindCloseMenuIfClickedOutside);
		}
	}, {
		key: "handleInputFocus",
		value: function handleInputFocus(event) {
			var _this6 = this;

			var newIsOpen = this.state.isOpen || this._openAfterFocus;
			this.setState({
				isFocused: true,
				isOpen: newIsOpen
			}, function () {
				if (newIsOpen) {
					_this6._bindCloseMenuIfClickedOutside();
				} else {
					_this6._unbindCloseMenuIfClickedOutside();
				}
			});
			this._openAfterFocus = false;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
		}
	}, {
		key: "handleInputBlur",
		value: function handleInputBlur(event) {
			var _this7 = this;

			if (this.refs.menu && document.activeElement.isEqualNode(this.refs.menu)) {
				return;
			}
			this._blurTimeout = setTimeout(function () {
				if (_this7._focusAfterUpdate || !_this7.isMounted()) return;
				_this7.setState({
					inputValue: "",
					isFocused: false,
					isOpen: false
				});
			}, 50);
			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;
			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.state.focusedOption) {
						return;
					}
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.resetValue();
					} else if (this.props.clearable) {
						this.clearValue(event);
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 188:
					// ,
					if (this.props.allowCreate && this.props.multi) {
						event.preventDefault();
						event.stopPropagation();
						this.selectFocusedOption();
					} else {
						return;
					}
					break;
				default:
					return;
			}
			event.preventDefault();
		}

		// Ensures that the currently focused option is available in filteredOptions.
		// If not, returns the first available option.
	}, {
		key: "_getNewFocusedOption",
		value: function _getNewFocusedOption(filteredOptions) {
			for (var key in filteredOptions) {
				if (filteredOptions.hasOwnProperty(key) && filteredOptions[key] === this.state.focusedOption) {
					return filteredOptions[key];
				}
			}
			return this.getFirstFocusableOption(filteredOptions);
		}
	}, {
		key: "handleInputChange",
		value: function handleInputChange(event) {
			// assign an internal variable because we need to use
			// the latest value before setState() has completed.
			this._optionsFilterString = event.target.value;
			if (this.props.onInputChange) {
				this.props.onInputChange(event.target.value);
			}
			if (this.props.asyncOptions) {
				this.setState({
					isLoading: true,
					inputValue: event.target.value
				});
				this.loadAsyncOptions(event.target.value, {
					isLoading: false,
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				var filteredOptions = this.filterOptions(this.state.options);
				this.setState({
					isOpen: true,
					inputValue: event.target.value,
					filteredOptions: filteredOptions,
					focusedOption: this._getNewFocusedOption(filteredOptions)
				}, this._bindCloseMenuIfClickedOutside);
			}
		}
	}, {
		key: "autoloadAsyncOptions",
		value: function autoloadAsyncOptions() {
			var _this8 = this;

			this.setState({
				isLoading: true
			});
			this.loadAsyncOptions("", { isLoading: false }, function () {
				// update with new options but don't focus
				_this8.setValue(_this8.props.value, false);
			});
		}
	}, {
		key: "loadAsyncOptions",
		value: function loadAsyncOptions(input, state, callback) {
			if (input === undefined) input = "";

			var _this9 = this;

			var thisRequestId = this._currentRequestId = requestId++;
			if (this.props.cacheAsyncResults) {
				for (var i = 0; i <= input.length; i++) {
					var cacheKey = input.slice(0, i);
					if (this._optionsCache[cacheKey] && (input === cacheKey || this._optionsCache[cacheKey].complete)) {
						var options = this._optionsCache[cacheKey].options;
						var filteredOptions = this.filterOptions(options);
						var newState = {
							options: options,
							filteredOptions: filteredOptions,
							focusedOption: this._getNewFocusedOption(filteredOptions)
						};
						for (var key in state) {
							if (state.hasOwnProperty(key)) {
								newState[key] = state[key];
							}
						}
						this.setState(newState);
						if (callback) callback.call(this, newState);
						return;
					}
				}
			}

			var optionsResponseHandler = function optionsResponseHandler(err, data) {
				if (err) throw err;
				if (_this9.props.cacheAsyncResults) {
					_this9._optionsCache[input] = data;
				}
				if (thisRequestId !== _this9._currentRequestId) {
					return;
				}
				var filteredOptions = _this9.filterOptions(data.options);
				var newState = {
					options: data.options,
					filteredOptions: filteredOptions,
					focusedOption: _this9._getNewFocusedOption(filteredOptions)
				};
				for (var key in state) {
					if (state.hasOwnProperty(key)) {
						newState[key] = state[key];
					}
				}
				_this9.setState(newState);
				if (callback) callback.call(_this9, newState);
			};

			var asyncOpts = this.props.asyncOptions(input, optionsResponseHandler);

			if (asyncOpts && typeof asyncOpts.then === "function") {
				asyncOpts.then(function (data) {
					optionsResponseHandler(null, data);
				}, function (err) {
					optionsResponseHandler(err);
				});
			}
		}
	}, {
		key: "filterOptions",
		value: function filterOptions(options, values) {
			var _this10 = this;

			var filterValue = this._optionsFilterString;
			var exclude = (values || this.state.values).map(function (i) {
				return i[_this10.props.valueKey];
			});
			if (this.props.filterOptions) {
				return this.props.filterOptions.call(this, options, filterValue, exclude);
			} else {
				var filterOption = function filterOption(op) {
					if (this.props.multi && exclude.indexOf(op[this.props.valueKey]) > -1) return false;
					if (this.props.filterOption) return this.props.filterOption.call(this, op, filterValue);
					var valueTest = String(op[this.props.valueKey]);
					var labelTest = String(op[this.props.labelKey]);
					if (this.props.ignoreCase) {
						valueTest = valueTest.toLowerCase();
						labelTest = labelTest.toLowerCase();
						filterValue = filterValue.toLowerCase();
					}
					return !filterValue || this.props.matchPos === "start" ? this.props.matchProp !== "label" && valueTest.substr(0, filterValue.length) === filterValue || this.props.matchProp !== "value" && labelTest.substr(0, filterValue.length) === filterValue : this.props.matchProp !== "label" && valueTest.indexOf(filterValue) >= 0 || this.props.matchProp !== "value" && labelTest.indexOf(filterValue) >= 0;
				};
				return (options || []).filter(filterOption, this);
			}
		}
	}, {
		key: "selectFocusedOption",
		value: function selectFocusedOption() {
			if (this.props.allowCreate && !this.state.focusedOption) {
				var newOption = this.props.newOptionCreator ? this.props.newOptionCreator(this.state.inputValue) : {
					value: this.state.inputValue,
					label: this.state.inputValue,
					create: true
				};

				return this.selectValue(newOption);
			}

			if (this.state.focusedOption) {
				return this.selectValue(this.state.focusedOption);
			}
		}
	}, {
		key: "focusOption",
		value: function focusOption(op) {
			this.setState({
				focusedOption: op
			});
		}
	}, {
		key: "focusNextOption",
		value: function focusNextOption() {
			this.focusAdjacentOption("next");
		}
	}, {
		key: "focusPreviousOption",
		value: function focusPreviousOption() {
			this.focusAdjacentOption("previous");
		}
	}, {
		key: "focusAdjacentOption",
		value: function focusAdjacentOption(dir) {
			this._focusedOptionReveal = true;
			var ops = this.state.filteredOptions.filter(function (op) {
				return !op.disabled;
			});
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: "",
					focusedOption: this.state.focusedOption || ops[dir === "next" ? 0 : ops.length - 1]
				}, this._bindCloseMenuIfClickedOutside);
				return;
			}
			if (!ops.length) {
				return;
			}
			var focusedIndex = -1;
			for (var i = 0; i < ops.length; i++) {
				if (this.state.focusedOption === ops[i]) {
					focusedIndex = i;
					break;
				}
			}
			var focusedOption = ops[0];
			if (dir === "next" && focusedIndex > -1 && focusedIndex < ops.length - 1) {
				focusedOption = ops[focusedIndex + 1];
			} else if (dir === "previous") {
				if (focusedIndex > 0) {
					focusedOption = ops[focusedIndex - 1];
				} else {
					focusedOption = ops[ops.length - 1];
				}
			}
			this.setState({
				focusedOption: focusedOption
			});
		}
	}, {
		key: "unfocusOption",
		value: function unfocusOption(op) {
			if (this.state.focusedOption === op) {
				this.setState({
					focusedOption: null
				});
			}
		}
	}, {
		key: "renderOptionLabel",
		value: function renderOptionLabel(op) {
			return op[this.props.labelKey];
		}
	}, {
		key: "buildMenu",
		value: function buildMenu() {
			var focusedValue = this.state.focusedOption ? this.state.focusedOption[this.props.valueKey] : null;
			var renderLabel = this.props.optionRenderer || this.renderOptionLabel;
			if (this.state.filteredOptions.length > 0) {
				focusedValue = focusedValue == null ? this.state.filteredOptions[0] : focusedValue;
			}
			// Add the current value to the filtered options in last resort
			var options = this.state.filteredOptions;
			if (this.props.allowCreate && this.state.inputValue.trim()) {
				var inputValue = this.state.inputValue;
				options = options.slice();
				var newOption = this.props.newOptionCreator ? this.props.newOptionCreator(inputValue) : {
					value: inputValue,
					label: inputValue,
					create: true
				};
				options.unshift(newOption);
			}
			var ops = Object.keys(options).map(function (key) {
				var op = options[key];
				var isSelected = this.state.value === op[this.props.valueKey];
				var isFocused = focusedValue === op[this.props.valueKey];
				var optionClass = classes({
					"Select-option": true,
					"is-selected": isSelected,
					"is-focused": isFocused,
					"is-disabled": op.disabled
				});
				var ref = isFocused ? "focused" : null;
				var optionResult = React.createElement(this.props.optionComponent, {
					key: "option-" + op[this.props.valueKey],
					className: optionClass,
					renderFunc: renderLabel,
					mouseDown: this.selectValue,
					mouseEnter: this.focusOption,
					mouseLeave: this.unfocusOption,
					addLabelText: this.props.addLabelText,
					option: op,
					ref: ref
				});
				return optionResult;
			}, this);

			if (ops.length) {
				return ops;
			} else {
				var noResultsText, promptClass;
				if (this.isLoading()) {
					promptClass = "Select-searching";
					noResultsText = this.props.searchingText;
				} else if (this.state.inputValue || !this.props.asyncOptions) {
					promptClass = "Select-noresults";
					noResultsText = this.props.noResultsText;
				} else {
					promptClass = "Select-search-prompt";
					noResultsText = this.props.searchPromptText;
				}

				return React.createElement(
					"div",
					{ className: promptClass },
					noResultsText
				);
			}
		}
	}, {
		key: "handleOptionLabelClick",
		value: function handleOptionLabelClick(value, event) {
			if (this.props.onOptionLabelClick) {
				this.props.onOptionLabelClick(value, event);
			}
		}
	}, {
		key: "isLoading",
		value: function isLoading() {
			return this.props.isLoading || this.state.isLoading;
		}
	}, {
		key: "render",
		value: function render() {
			var selectClass = classes("Select", this.props.className, {
				"Select--multi": this.props.multi,
				"is-searchable": this.props.searchable,
				"is-open": this.state.isOpen,
				"is-focused": this.state.isFocused,
				"is-loading": this.isLoading(),
				"is-disabled": this.props.disabled,
				"has-value": this.state.value
			});
			var value = [];
			if (this.props.multi) {
				this.state.values.forEach(function (val) {
					var renderLabel = this.props.valueRenderer || this.renderOptionLabel;
					var onOptionLabelClick = this.handleOptionLabelClick.bind(this, val);
					var onRemove = this.removeValue.bind(this, val);
					var valueComponent = React.createElement(this.props.valueComponent, {
						key: val[this.props.valueKey],
						option: val,
						renderer: renderLabel,
						optionLabelClick: !!this.props.onOptionLabelClick,
						onOptionLabelClick: onOptionLabelClick,
						onRemove: onRemove,
						disabled: this.props.disabled
					});
					value.push(valueComponent);
				}, this);
			}

			if (!this.state.inputValue && (!this.props.multi || !value.length)) {
				var val = this.state.values[0] || null;
				if (this.props.valueRenderer && !!this.state.values.length) {
					value.push(React.createElement(Value, {
						key: 0,
						option: val,
						renderer: this.props.valueRenderer,
						disabled: this.props.disabled
					}));
				} else {
					var singleValueComponent = React.createElement(this.props.singleValueComponent, {
						key: "placeholder",
						value: val,
						placeholder: this.state.placeholder
					});
					value.push(singleValueComponent);
				}
			}

			// loading spinner
			var loading = this.isLoading() ? React.createElement(
				"span",
				{ className: "Select-loading-zone", "aria-hidden": "true" },
				React.createElement("span", { className: "Select-loading" })
			) : null;

			// clear "x" button
			var clear = this.props.clearable && this.state.value && !this.props.disabled && !this.isLoading() ? React.createElement(
				"span",
				{
					className: "Select-clear-zone",
					title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					"aria-label": this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					onMouseDown: this.clearValue,
					onTouchEnd: this.clearValue,
					onClick: this.clearValue
				},
				React.createElement("span", {
					className: "Select-clear",
					dangerouslySetInnerHTML: { __html: "&times;" }
				})
			) : null;

			// indicator arrow
			var arrow = React.createElement(
				"span",
				{
					className: "Select-arrow-zone",
					onMouseDown: this.handleMouseDownOnArrow
				},
				React.createElement("span", {
					className: "Select-arrow",
					onMouseDown: this.handleMouseDownOnArrow
				})
			);

			var menu;
			var menuProps;
			if (this.state.isOpen) {
				menuProps = {
					ref: "menu",
					className: "Select-menu",
					onMouseDown: this.handleMouseDownOnMenu
				};
				menu = React.createElement(
					"div",
					{ ref: "selectMenuContainer", className: "Select-menu-outer" },
					React.createElement(
						"div",
						menuProps,
						this.buildMenu()
					)
				);
			}

			var input;
			var inputProps = {
				ref: "input",
				className: "Select-input " + (this.props.inputProps.className || ""),
				tabIndex: this.props.tabIndex || 0,
				onFocus: this.handleInputFocus,
				onBlur: this.handleInputBlur
			};
			for (var key in this.props.inputProps) {
				if (this.props.inputProps.hasOwnProperty(key) && key !== "className") {
					inputProps[key] = this.props.inputProps[key];
				}
			}

			if (!this.props.disabled) {
				if (this.props.searchable) {
					input = React.createElement(Input, _extends({
						value: this.state.inputValue,
						onChange: this.handleInputChange,
						minWidth: "5"
					}, inputProps));
				} else {
					input = React.createElement(
						"div",
						inputProps,
						" "
					);
				}
			} else if (!this.props.multi || !this.state.values.length) {
				input = React.createElement(
					"div",
					{ className: "Select-input" },
					" "
				);
			}

			return React.createElement(
				"div",
				{ ref: "wrapper", className: selectClass },
				React.createElement("input", {
					type: "hidden",
					ref: "value",
					name: this.props.name,
					value: this.state.value,
					disabled: this.props.disabled
				}),
				React.createElement(
					"div",
					{
						className: "Select-control",
						ref: "control",
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleMouseDown
					},
					value,
					input,
					loading,
					clear,
					arrow
				),
				menu
			);
		}
	}]);

	return Select;
})(React.Component);

Select.defaultProps = {
	addLabelText: 'Add "{label}"?',
	allowCreate: false,
	asyncOptions: undefined,
	autoload: true,
	backspaceRemoves: true,
	cacheAsyncResults: true,
	className: undefined,
	clearAllText: "Clear all",
	clearValueText: "Clear value",
	clearable: true,
	delimiter: ",",
	disabled: false,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	labelKey: "label",
	matchPos: "any",
	matchProp: "any",
	name: undefined,
	newOptionCreator: undefined,
	noResultsText: "No results found",
	onChange: undefined,
	onInputChange: undefined,
	onOptionLabelClick: undefined,
	optionComponent: Option,
	options: undefined,
	placeholder: "Select...",
	searchable: true,
	searchingText: "Searching...",
	searchPromptText: "Type to search",
	singleValueComponent: SingleValue,
	value: undefined,
	valueComponent: Value,
	valueKey: "value"
};

module.exports = Select;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Option":1,"./SingleValue":3,"./Value":4,"react-dom":undefined}],3:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var classes = (typeof window !== "undefined" ? window['classNames'] : typeof global !== "undefined" ? global['classNames'] : null);

var SingleValue = (function (_React$Component) {
	_inherits(SingleValue, _React$Component);

	function SingleValue() {
		_classCallCheck(this, SingleValue);

		_get(Object.getPrototypeOf(SingleValue.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SingleValue, [{
		key: "render",
		value: function render() {
			var classNames = classes("Select-placeholder", this.props.value && this.props.value.className);
			return React.createElement(
				"div",
				{
					className: classNames,
					style: this.props.value && this.props.value.style,
					title: this.props.value && this.props.value.title
				},
				this.props.placeholder
			);
		}
	}]);

	return SingleValue;
})(React.Component);

module.exports = SingleValue;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var classes = (typeof window !== "undefined" ? window['classNames'] : typeof global !== "undefined" ? global['classNames'] : null);

var Value = (function (_React$Component) {
	_inherits(Value, _React$Component);

	function Value(props) {
		_classCallCheck(this, Value);

		_get(Object.getPrototypeOf(Value.prototype), "constructor", this).call(this, props);
		this.blockEvent = this.blockEvent.bind(this);
		this.handleOnRemove = this.handleOnRemove.bind(this);
	}

	_createClass(Value, [{
		key: "blockEvent",
		value: function blockEvent(event) {
			event.stopPropagation();
		}
	}, {
		key: "handleOnRemove",
		value: function handleOnRemove(event) {
			if (!this.props.disabled) {
				this.props.onRemove(event);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var label = this.props.option.label;
			if (this.props.renderer) {
				label = this.props.renderer(this.props.option);
			}

			if (!this.props.onRemove && !this.props.optionLabelClick) {
				return React.createElement(
					"div",
					{
						className: classes("Select-value", this.props.option.className),
						style: this.props.option.style,
						title: this.props.option.title
					},
					label
				);
			}

			if (this.props.optionLabelClick) {
				label = React.createElement(
					"a",
					{
						className: classes("Select-item-label__a", this.props.option.className),
						onMouseDown: this.blockEvent,
						onTouchEnd: this.props.onOptionLabelClick,
						onClick: this.props.onOptionLabelClick,
						style: this.props.option.style,
						title: this.props.option.title
					},
					label
				);
			}

			return React.createElement(
				"div",
				{
					className: classes("Select-item", this.props.option.className),
					style: this.props.option.style,
					title: this.props.option.title
				},
				React.createElement(
					"span",
					{
						className: "Select-item-icon",
						onMouseDown: this.blockEvent,
						onClick: this.handleOnRemove,
						onTouchEnd: this.handleOnRemove
					},
					"×"
				),
				React.createElement(
					"span",
					{ className: "Select-item-label" },
					label
				)
			);
		}
	}]);

	return Value;
})(React.Component);

module.exports = Value;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2])(2)
});
