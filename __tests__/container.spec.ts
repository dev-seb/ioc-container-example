import { Container } from '../src/container';

describe('container tests', () => {

    it('Should test container bindings', () => {

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
        expect(entityTest.test()).toBe("test1");

        const constructorTest: ConstructorTest = container.get("constructorTest");
        expect(constructorTest.test()).toBe("test2");

        const functionTest: FunctionTest = container.get("functionTest");
        expect(functionTest.test()).toBe("test3");

    });

});
