import { module, test } from 'qunit';
import { setupTest } from 'loket/tests/helpers';

module('Unit | Route | subsidies/active', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:subsidies/active');
    assert.ok(route);
  });
});
