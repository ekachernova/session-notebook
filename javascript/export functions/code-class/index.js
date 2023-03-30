/** Authors */
import { authors } from "./utilities/authors.js";
import { createHeader } from "./components/header/header.js";
import { createCard } from "./components/card/card.js";
// import kika from "./utilities/others.js";
import sayHello, { name } from "./utilities/others.js";
/**
 *
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */
// kika("Lucia");
/** Get root element */
sayHello();

const root = document.querySelector("#root");

const header = createHeader();

root.append(header);

/** Main: Author Cards */

authors.forEach((author) => {
  const card = createCard(author);
  root.append(card);
});
