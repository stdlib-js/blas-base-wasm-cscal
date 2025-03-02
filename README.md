<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cscal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scale a single-precision complex floating-point vector by a single-precision complex floating-point constant.



<section class="usage">

## Usage

```javascript
import cscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-wasm-cscal@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { Module } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-wasm-cscal@deno/mod.js';
```

#### cscal.main( N, ca, cx, strideX )

Scales values from `cx` by `ca`.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@deno/mod.js';

// Define a strided array:
var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Perform operation:
cscal.main( cx.length, ca, cx, 1 );

var v = cx.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns -2.0

var im = imagf( v );
// returns 6.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **ca**: scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **cx**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.

The `N` and stride parameters determine which elements in the input strided array are accessed at runtime. For example, to scale every other value in `cx` by `ca`,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@deno/mod.js';

// Define a strided array:
var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 0.0 );

// Perform operation:
cscal.main( 2, ca, cx, 2 );

var v = cx.get( 2 );
// returns <Complex64>

var re = realf( v );
// returns 10.0

var im = imagf( v );
// returns 12.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@deno/mod.js';

// Initial array:
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Create an offset view:
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `cx1` by `ca`...
cscal.main( 3, ca, cx1, 1 );

var z = cx0.get( 1 );
// returns <Complex64>

var re = realf( z );
// returns -2.0

var im = imagf( z );
// returns 14.0
```

#### dscal.ndarray( N, ca, cx, strideX, offsetX )

Scales values from `cx` by `ca` using alternative indexing semantics.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@deno/mod.js';

// Define a strided array:
var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Perform operation:
cscal.main( cx.length, ca, cx, 1 );

var v = cx.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns -2.0

var im = imagf( v );
// returns 6.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `cx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@deno/mod.js';

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var ca = new Complex64( 2.0, 2.0 );

cscal.ndarray( 2, ca, cx, 2, 1 );

var z = cx.get( 3 );
// returns <Complex64>

var re = realf( z );
// returns -2.0

var im = imagf( z );
// returns 30.0
```

* * *

### Module

#### cscal.Module( memory )

Returns a new WebAssembly [module wrapper][@stdlib/wasm/module-wrapper] instance which uses the provided WebAssembly [memory][@stdlib/wasm/memory] instance as its underlying memory.

<!-- eslint-disable node/no-sync -->

```javascript
import Memory from 'https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@deno/mod.js';

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### cscal.Module.prototype.main( N, cap, cxp, sx )

Scales values from `cx` by `ca` .

<!-- eslint-disable node/no-sync -->

```javascript
import Memory from 'https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@deno/mod.js';
import oneTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-one-to@deno/mod.js';
import ones from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-ones@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';
import bytesPerElement from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import reinterpretComplex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@deno/mod.js';
import cscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-wasm-cscal@deno/mod.js';

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer for storing a complex number:
var zptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

// Write a complex number to module memory:
mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );

// Perform computation:
mod.main( N, zptr, xptr, 1 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( xptr, view );

console.log( reinterpretComplex64( view, 0 ) );
// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cap**: pointer (i.e., byte offset) to a scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **cxp**: input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `cx`.

#### cscal.Module.prototype.ndarray( N, cap, cxp, sx, ox )

Scales values from `cx` by `ca`  using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
import Memory from 'https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@deno/mod.js';
import oneTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-one-to@deno/mod.js';
import ones from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-ones@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';
import bytesPerElement from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import reinterpretComplex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@deno/mod.js';
import cscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-wasm-cscal@deno/mod.js';

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer for storing a complex number:
var zptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

// Write a complex number to module memory:
mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );

// Perform computation:
mod.ndarray( N, zptr, xptr, 1, 0 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( xptr, view );

console.log( reinterpretComplex64( view, 0 ) );
// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `cx` is left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `cscal` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas-base/cscal`][@stdlib/blas/base/cscal]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/cscal`][@stdlib/blas/base/cscal]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `cscal()` corresponds to the [BLAS][blas] level 1 function [`cscal`][cscal].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import hasWebAssemblySupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-wasm-support@deno/mod.js';
import oneTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-one-to@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import reinterpretComplex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@deno/mod.js';
import cscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-wasm-cscal@deno/mod.js';

// Specify a vector length:
var N = 5;

// Create an input array:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );

// Create a complex number:
var z = new Complex64( 2.0, 2.0 );

// Perform computation:
cscal.ndarray( N, z, x, 1, 0 );

// Print the results:
console.log( reinterpretComplex64( x, 0 ) );
// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-wasm-cscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-wasm-cscal

[test-image]: https://github.com/stdlib-js/blas-base-wasm-cscal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-wasm-cscal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-wasm-cscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-wasm-cscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-wasm-cscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-wasm-cscal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-wasm-cscal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-wasm-cscal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-wasm-cscal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-wasm-cscal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-wasm-cscal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-wasm-cscal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-wasm-cscal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-wasm-cscal/main/LICENSE

[blas]: http://www.netlib.org/blas

[cscal]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor/tree/deno

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory/tree/deno

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper/tree/deno

[@stdlib/blas/base/cscal]: https://github.com/stdlib-js/blas-base-cscal/tree/deno

</section>

<!-- /.links -->
