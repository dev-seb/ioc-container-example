import { Target } from '../src/target';

describe('target tests', () => {

    it('Should test target factory methods', () => {

        class Test {

        }

        // Entity target
        const entityTarget = Target.buildEntityTarget(Test);
        expect(entityTarget.isEntityTarget()).toBe(true);

        // Constructor target
        const constructorTarget = Target.buildConstructorTarget(Test, ["constructorParam1", "constructorParam2"]);
        expect(constructorTarget.isConstructorTarget()).toBe(true);

        // Function target
        const functionTarget = Target.buildFunctionTarget(Test, "MyFunction", ["functionParam1", "functionParam2"]);
        expect(functionTarget.isFunctionTarget()).toBe(true);

    });
});
