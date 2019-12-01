install:
	npm install
	
start:
	npx babel-node src/bin/brain-prime.js

prepublish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: test