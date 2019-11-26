install:
	npm install
	
start:
	npx babel-node src/bin/brain-even.js

prepublish:
	npm publish --dry-run

lint:
	npx eslint

.PHONY: test