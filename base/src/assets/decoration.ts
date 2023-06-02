function logClass<T extends new (...args: any[]) => any>(target: T): T {
  console.log(`Class ${target.name} has been decorated.`)
  return target
}

@logClass
export class DecorationTest {
    name = 0
    constructor (name: number) {
      console.log(name, '11')
      this.name = name
    }

    addName (val: number) {
      this.name += val
    }
}
