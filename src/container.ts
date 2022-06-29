import { Target } from './target';

/**
 * Container
 *
 * Inversion of Control container
 */
export class Container {

    private bindings = new Map<string, Target>();

    /**
     * Entity injection
     *
     * @param serviceIdentifier
     * @param className
     */
    public bindToEntity(serviceIdentifier: string, className: any) {
        const target = Target.buildEntityTarget(className);
        this.bindings.set(serviceIdentifier, target);
    }

    /**
     * Constructor Injection
     *
     * @param serviceIdentifier
     * @param className
     * @param constructorParams
     */
    public bindToConstructor(serviceIdentifier: string, className: any, constructorParams: Array<any>) {
        const target = Target.buildConstructorTarget(className, constructorParams);
        this.bindings.set(serviceIdentifier, target)
    }

    /**
     * Setter Injection
     *
     * @param serviceIdentifier
     * @param className
     * @param functionName
     * @param functionParams
     */
    public bindToFunction(serviceIdentifier: string, className: any, functionName: string, functionParams: Array<any>) {
        const target = Target.buildFunctionTarget(className, functionName, functionParams);
        this.bindings.set(serviceIdentifier, target);
    }

    // TODO: Add other bindings such as Factory, Service, etc ..

    /**
     * Return instance from provided service identifier
     *
     * @param serviceIdentifier
     */
    public get<T>(serviceIdentifier: string): T {
        const target = this.bindings.get(serviceIdentifier);
        if(!target) {
            throw new Error("Can't find service identifier " + serviceIdentifier);
        }
        const instance = Reflect.construct(target.className, target.constructorParams);
        if (target.isFunctionTarget()) {
            instance[target.functionName](...target.functionParams);
        }
        return instance;
    }
}
