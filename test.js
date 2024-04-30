import {execa} from 'execa';
import test from 'ava';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
});
