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

function uppercase (target: any, propertyName: string, descriptor: PropertyDescriptor): void {
  const originalSetter = descriptor?.set

  if (originalSetter) {
    descriptor.set = function (value: string): void {
      if (typeof value === 'string') {
        value = value.toUpperCase()
      }
      originalSetter.call(this, value)
    }

    Object.defineProperty(target, propertyName, descriptor)
  }
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
