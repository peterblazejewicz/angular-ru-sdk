// expect errors
import { B1 } from './module/b1';
import { A1 } from './module/a1';
import { C1 } from './module/c1';
import { Component, EventEmitter, Injectable, OnInit, Pipe, Directive, NgModule, forwardRef, OnChanges, DoCheck, Input, Output } from "@angular/core";
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExampleDeep } from './module/deep/deep/deep/deep/deep/deep/deeeeeeeeeeeeeeeeeeep/deeeeeeeeeeeeeeeeeeep/deeeeeeeeeeeeeeeeeeep/example-deep';

export class A {
    // expect errors
    public hi: number = 2;
    // expect errors
    hello = 1;
}

// eslint-disable-next-line no-console
console.log(new A().hello);
// eslint-disable-next-line no-console
console.log(new A().hi);

// expect errors
export enum foo {
    SECOND = 1000,
    VALUE_1 = 3,
    VALUE_2 = 4
}

// expect errors
export const enum HELLO {
    WORLD
}

console.error(foo.SECOND);
console.error(foo.VALUE_1);
console.error(foo.VALUE_2);
console.error(HELLO.WORLD);

// expect no errors
const helloWorld: Function = async function (): Promise<string> {
    return 'Hello world';
};

// expect no errors
helloWorld();

const helloWorldAsync: Function = async (): Promise<string> => 'Hello world';
await helloWorldAsync();

// expect no errors
function helloWorldNamed(): string {
    return 'Hello world';
}

// expect no errors
helloWorldNamed();

// expect errors
console.error(5 * 10);

// expect errors
export abstract class TestClass {}

// expect errors
console.log(TestClass);

console.warn(new A1());
console.warn(new B1().hello(1));
console.warn(new B1().hello('hello'));
console.warn(new C1());

/****
 * Test code
 * @typescript-eslint/no-useless-constructor
 */
class G {
    constructor(public value: string) {}
}

class D extends G {
    // expect errors
    constructor(value: string) {
        super(value);
    }
}

const dx: D = new D('123');

// eslint-disable-next-line no-console
console.log(dx.value);

// space before
// prettier-ignore
function f (): void {
    // hello
}

f();

// expect errors
class little {}

const little1: little = new little();
// eslint-disable-next-line no-console
console.log(little1);

// expect errors
class Little_Bar {}

const little2: little = new Little_Bar();
// eslint-disable-next-line no-console
console.log(little2);

// expect interface errors
interface myType {
    a: string;
}

const m1: myType = { a: 'ast' };
// eslint-disable-next-line no-console
console.log(m1);

// expect interface errors
type alist = { b: string } & { c: string };

const m2: alist = { b: '1', c: '2' };
// eslint-disable-next-line no-console
console.log(m2);

(function f1(a: number, b: number, c: number, d: number): void {
    console.error(a, b, c, d);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
})(1, 2, 3, 4);

(function f2(a: number, b: number): void {
    console.error(a, b);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
})(1, 2);

((a: number, b: number, c: number, d: number): void => {
    console.error(a, b, c, d);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
})(1, 2, 3, 4);

((a: number, b: number): void => {
    console.error(a, b);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
})(1, 2);

class TestMaxParams {
    public f3(a: number, b: number, c: number, d: number): void {
        console.error(a, b, c, d);
    }

    public f4(a: number, b: number): void {
        console.error(a, b);
    }
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
new TestMaxParams().f3(1, 2, 3, 4);

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
new TestMaxParams().f4(1, 2);

// except errors
// prettier-ignore
let someNum:number;

// except errors
// prettier-ignore
someNum=1+1;

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SomeInjectable implements OnInit {
    public ngOnInit(): void {
        // noop
    }
}

@Component({
    template: `
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    `,
    host: { '[class.app]': 'true' },
    inputs: ['inputVariable'],
    outputs: ['outputVariable']
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class AppComponent {
    public inputVariable: number = 1;
    public outputVariable: EventEmitter<number> = new EventEmitter<number>();
    public ngOnInit(): void {
        // noop
    }
}

@Pipe({
    name: 'somePipe'
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SomePipe {
    public transform(value: string, pool: string[]): boolean {
        return pool.includes(value);
    }
}

function log(something: any) {
    // eslint-disable-next-line no-console
    console.log(something);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function someComplexFunction(): void {
    const someVar: string = Math.random() + '';
    switch (someVar) {
        case '0':
            log('0');
            break;
        case '1':
            log('1');
            break;
        case '2':
            log('2');
            break;
        case '3':
            log('3');
            break;
        case '4':
            log('4');
            break;
        case '5':
            log('5');
            break;
        case '6':
            log('6');
            break;
        case '7':
            log('7');
            break;
        default:
            // eslint-disable-next-line no-console
            log('default');
            break;
    }
}

// expect error
function otherComplexFunction(): void {
    const someVar: number = Math.random();
    switch (someVar) {
        case 0:
            // noop
            break;
        case 1:
            // noop
            break;
        default:
            // noop
            break;
    }
}

const someBoolean: boolean = !(Math.random() > Date.now());
log(someBoolean);

switchMap(() => of(new ExampleDeep()));

document.addEventListener('click', function () {
    // hello
});

const fooZ: number[] = [].map((i: number) => i * i);
log(fooZ);

// expect mutate variable
(function a(variable: string): void {
    variable += 'world';
    console.error(variable);
})('hello');

// expect errors
export const enum HelloWorldNonCase {
    worldName
}

console.error(HelloWorldNonCase.worldName);

const promise: Promise<unknown> = Promise.resolve('value');

// expect error
if (promise) {
    // Do something
}

// expect error
@Component({
    selector: 'my-etc',
    template: '<my-etc [isEnabled]="false"></my-etc>'
})
// error: Declaring ngDoCheck and ngOnChanges method in a class is not recommended
export class MyEtc implements OnInit, OnChanges, DoCheck {
    @Input() public isEnabled: boolean = false;
    @Output() public resize: EventEmitter<void> = new EventEmitter();

    public ngDoCheck(): void {
        this.isEnabled = false;
    }

    public ngOnChanges(): void {
        this.isEnabled = true;
    }

    // error: Lifecycle methods should not be empty
    public ngOnInit(): void {}
}

// expect error
@Directive({
    selector: 'fooEtc'
})
export class FooEtc {
    @Output() public close: EventEmitter<void> = new EventEmitter();
}

@NgModule({
    imports: [],
    bootstrap: [MyEtc],
    declarations: [MyEtc, FooEtc],
    providers: [
        {
            provide: MyEtc,
            // error: Avoid using `forwardRef`
            useClass: forwardRef((): typeof FooEtc => FooEtc), // Unexpected trailing comma
        }
    ]
})
export class EtcModule {}

const etc: MyEtc = new MyEtc();

console.error(etc.ngOnInit());

const bool: boolean = true;

// Prefer named exports
export default bool;
