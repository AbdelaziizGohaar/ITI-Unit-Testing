const it = require("ava").default;
const { expect } = require("chai");
const { getURL } = require("../index");

it("getURL: valid input 'fr-fr' returns '/home-fr'", (t) => {
  const result = getURL('fr-fr');
  expect(result).to.equal('/home-fr');
  t.pass();
});

it("getURL: default input '' returns '/home-en'", (t) => {
  const result = getURL('');
  expect(result).to.equal('/home-en');
  t.pass();
});

it("getURL: non-string input throws error", (t) => {
  const result = 42;
  expect(() => getURL(result)).to.throw("Input must be a string");
  t.pass();
});

it("getURL: undefined input throws 'Input must be a string not undefined'", (t) => {
  expect(() => getURL(undefined)).to.throw("Input must be a string not undefined");
  t.pass();
});

it("getURL: input without dash throws format error", (t) => {
  expect(() => getURL("english")).to.throw("Input must be in format 'xx-yy'");
  t.pass();
});