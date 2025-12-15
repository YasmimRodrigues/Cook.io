/**
 * @license MIT
 * @copyright 2025 yasmimrbm25
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { getTime } from "./module.js";

const /** {Array} */ savedRecipes = Object.keys(window.localStorage).filter(item => {
    return item.startsWith("cookio-recipe");
});

console.log(savedRecipes);