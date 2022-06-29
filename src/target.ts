enum TargetType {
    ENTITY,
    CONSTRUCTOR,
    FUNCTION
};

/**
 * Target
 */
export class Target {

    public type: TargetType;
    public className: any;
    public constructorParams: Array<any>;
    public functionName: string;
    public functionParams: Array<any>;

    /**
     * Constructor
     */
    constructor() {
        this.type = TargetType.ENTITY;
        this.className = null;
        this.constructorParams = [];
        this.functionName = '';
        this.functionParams = [];
    }

    public isEntityTarget(): boolean {
        return this.type === TargetType.ENTITY;
    }

    public isConstructorTarget(): boolean {
        return this.type === TargetType.CONSTRUCTOR;
    }

    public isFunctionTarget(): boolean {
        return this.type === TargetType.FUNCTION;
    }

    /**
     * Factory method to build EntityTarget
     *
     * @param className
     */
    static buildEntityTarget(className: any): Target {
        let target = new Target();
        target.type = TargetType.ENTITY;
        target.className = className;
        return target;
    }

    /**
     * Factory method to build ConstructorTarget
     *
     * @param className
     * @param constructorParams
     */
    static buildConstructorTarget(className: any, constructorParams: Array<any>): Target {
        let target = new Target();
        target.type = TargetType.CONSTRUCTOR;
        target.className = className;
        target.constructorParams = constructorParams;
        return target;
    }

    /**
     * Factory method to build FunctionTarget
     *
     * @param className
     * @param functionName
     * @param functionParams
     */
    static buildFunctionTarget(className: any, functionName: string, functionParams: Array<any>): Target {
        let target = new Target();
        target.type = TargetType.FUNCTION;
        target.className = className;
        target.functionName = functionName;
        target.functionParams = functionParams;
        return target;
    }

}
