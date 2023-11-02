import { module, test } from 'qunit';
import { setupTest } from 'loket/tests/helpers';

module('Unit | Route | settings/newsletter', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:settings/newsletter');
    assert.ok(route);
  });
});
