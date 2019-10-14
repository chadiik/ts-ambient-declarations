import * as MyNamespace from './MyNamespace';

declare module './MyNamespace'
{
  interface MyClass
  {
    Patch(): void;
  }
}

MyNamespace.MyClass.prototype.Patch = function()
{
  console.log('Patched');
};