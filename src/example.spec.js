const {
  createGroup,
  assert,
  spy,
  stub,
  mock,
  sinon,
  chai,
} = require("painless");
import { Example } from "./example";

const test = createGroup();

let o;

test.beforeEach(() => {
  o = new Example();
});

test("sync", () => {
  assert.equal(o.sync(), "sync");
});

test("asyncCallback", (done) => {
  o.asyncCallback((value) => {
    assert.equal(value, "asyncCallback");
    done();
  });
});

test("asyncPromise", async () => {
  const value = await o.asyncPromise();
  assert.equal(value, "asyncPromise");
});
