#!/usr/bin/env node
import meow from 'meow';
import superheroes, {randomSuperhero} from 'superheroes';

const cli = meow(`
	Examples
	  $ superheroes
	  Spider-Ham

	  $ superheroes --all
	  3-D Man
	  A-Bomb
	  ...

	Options
	  --all  Get all names instead of a random name
`, {
	importMeta: import.meta,
});

console.log(cli.flags.all ? superheroes.join('\n') : randomSuperhero());
