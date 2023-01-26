install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

brain-calc:
	node bin/brain-calc.js