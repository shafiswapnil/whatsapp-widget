// src/index.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React, { useState } from "react";
import { Send, X } from "lucide-react";
function WhatsAppWidget(param) {
    var _param_phoneNumber = param.phoneNumber, phoneNumber = _param_phoneNumber === void 0 ? "1234567890" : _param_phoneNumber, _param_avatar = param.avatar, avatar = _param_avatar === void 0 ? "https://via.placeholder.com/60" : _param_avatar, _param_name = param.name, name = _param_name === void 0 ? "Customer Support" : _param_name, _param_position = param.position, position = _param_position === void 0 ? "Typically replies within an hour" : _param_position, _param_welcomeMessage = param.welcomeMessage, welcomeMessage = _param_welcomeMessage === void 0 ? "Hello! \uD83D\uDC4B How can we help you today?" : _param_welcomeMessage, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Type a message..." : _param_placeholder;
    var _useState = _sliced_to_array(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _sliced_to_array(useState(""), 2), inputText = _useState1[0], setInputText = _useState1[1];
    var handleSendMessage = function() {
        var formattedPhone = phoneNumber.replace(/\D/g, "");
        var messageToSend = inputText.trim() ? "I want to know: ".concat(inputText) : welcomeMessage;
        var whatsappUrl = "https://wa.me/".concat(formattedPhone, "?text=").concat(encodeURIComponent(messageToSend));
        window.open(whatsappUrl, "_blank");
        setInputText("");
    };
    var handleKeyPress = function(e) {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };
    return /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-fixed"
    }, isOpen && /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-container"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-header"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-header-content"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-avatar"
    }, /* @__PURE__ */ React.createElement("img", {
        src: avatar,
        alt: name,
        className: "wa-widget-avatar-img"
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
        className: "wa-widget-title"
    }, name), /* @__PURE__ */ React.createElement("p", {
        className: "wa-widget-subtitle"
    }, position))), /* @__PURE__ */ React.createElement("button", {
        onClick: function() {
            return setIsOpen(false);
        },
        className: "wa-widget-close"
    }, /* @__PURE__ */ React.createElement(X, {
        size: 20
    }))), /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-chat"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-message"
    }, /* @__PURE__ */ React.createElement("p", {
        className: "wa-widget-message-text"
    }, welcomeMessage), /* @__PURE__ */ React.createElement("span", {
        className: "wa-widget-message-time"
    }, /* @__PURE__ */ new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    })))), /* @__PURE__ */ React.createElement("div", {
        className: "wa-widget-footer"
    }, /* @__PURE__ */ React.createElement("input", {
        type: "text",
        placeholder: placeholder,
        value: inputText,
        onChange: function(e) {
            return setInputText(e.target.value);
        },
        onKeyPress: handleKeyPress,
        className: "wa-widget-input"
    }), /* @__PURE__ */ React.createElement("button", {
        onClick: handleSendMessage,
        className: "wa-widget-send"
    }, /* @__PURE__ */ React.createElement(Send, {
        size: 18
    })))), /* @__PURE__ */ React.createElement("button", {
        onClick: function() {
            return setIsOpen(!isOpen);
        },
        className: "wa-widget-button",
        "aria-label": isOpen ? "Close chat" : "Open chat"
    }, isOpen ? /* @__PURE__ */ React.createElement(X, {
        size: 24
    }) : /* @__PURE__ */ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        className: "wa-widget-whatsapp-icon"
    }, /* @__PURE__ */ React.createElement("path", {
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
    }))));
}
export { WhatsAppWidget };
