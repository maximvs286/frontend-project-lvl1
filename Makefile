install:
	npm install
	
start:
	npx babel-node src/bin/brain-gcd.js

prepublish:
	npm publish --dry-run

lint:
	npx eslint

.PHONY: test