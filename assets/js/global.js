/**
 * @license MIT
 * @copyright 2025 yasmimrbm25
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventype Event type string
 * @param {Function} callback Callback function
 */

window.addEventOnElements = ($elements, eventype, callback) => {
    for (const $element of $elements) {
        $element.addEventListener(eventype, callback);
    }
}