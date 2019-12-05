install:
	npm install
	
start:
	npx babel-node src/bin/brain-calc.js

prepublish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: test