# IoC Container Example

This is a simple project providing IoC container with 3 possible injections:

 - Entity: Provide a class 
 - Constructor: Provide a class with constructor parameters
 - Function: Provider a class with a setter function with parameters
 
## Example 

```typescript
import { Container } from 'ioc-container-example';

interface Test {
    test(): string;
}

class EntityTest implements Test {
    test() {
        return "test1";
    }
}

class ConstructorTest implements Test {

    private param: string;

    constructor(param: string) {
        this.param = param;
    }

    test() {
        return this.param;
    }
}

class FunctionTest implements Test {

    private param: string;

    constructor() {
        this.param = '';
    }

    setParam(param: string) {
        this.param = param;
    }

    test() {
        return this.param;
    }
}

const container = new Container();
container.bindToEntity("entityTest", EntityTest);
container.bindToConstructor("constructorTest", ConstructorTest, ["test2"]);
container.bindToFunction("functionTest", FunctionTest, "setParam", ["test3"]);

const entityTest: EntityTest = container.get("entityTest");
console.log(entityTest.test());

const constructorTest: ConstructorTest = container.get("constructorTest");
console.log(constructorTest.test());

const functionTest: FunctionTest = container.get("functionTest");
console.log(functionTest.test());
``` 

Result:
```
test1
test2
test3
```

 
## Install

Install npm dependencies:

```
npm install
```

## Test

To run unit tests:

```
npm run test
```

## Build

To build the library:

```
npm run build
```

## Documentation

Documentation can be found in doc/ directory.

To regenerate the documentation manually:

```
npm run build:doc
```
