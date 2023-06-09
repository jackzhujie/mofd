const arr = ['张三', '李四', '王五']

function checkAuthorization (name: string): boolean {
  return arr.includes(name)
}

function authorize (target: any, methodName: string, descriptor: PropertyDescriptor): void {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]): any {
    console.log(target, 'target')
    if (checkAuthorization(args[0])) {
      return originalMethod.apply(this, args)
    } else {
      throw new Error('Unauthorized access.')
    }
  }
}

class Dependency {
  constructor () {
    console.log('created')
  }

  doSomething () {
    console.log('Doing something...')
  }
}

function InjectDependency (target: any, propertyName: string) {
  console.log('inject', target, 'eeee')
  target[propertyName] = new Dependency()
}

function validateParam (target: any, methodName: string, parameterIndex: number) {
  const originalMethod = target[methodName]
  target[methodName] = function (...args: any[]) {
    console.log(methodName, 'value')
    const paramValue = args[parameterIndex]
    // 添加参数校验逻辑
    if (!checkAuthorization(paramValue)) {
      throw new Error(`Invalid value for parameter at index ${parameterIndex}.`)
    }
    return originalMethod.apply(this, args)
  }
}

function logClass<T extends new (...args: any[]) => any>(target: T): T {
  console.log(`Class ${target.name} has been decorated.`)
  return target
}

export class DecorationTest {
  // 装饰dependency属性，类创建时，将Dependency注入到当前属性中
  @InjectDependency
  dependency: Dependency | undefined;

  name: string;
  constructor (name: string) {
    this.name = name
    console.log(this.dependency, 'constructor')
  }

  useDependency () {
    console.log(this.dependency, 't111')
    this.dependency?.doSomething?.()
  }

  setName (@validateParam name: string) {
    this.name = name
  }

  // 方法装饰器，调用方法时会触发
  // @authorize
  sayName (name: string) {
    // 只会打印装饰器运行的name
    console.log(name)
  }
}
