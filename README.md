<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# dlaset

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Set the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values.

<section class="installation">

## Installation

```bash
npm install @stdlib/lapack-base-dlaset
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dlaset = require( '@stdlib/lapack-base-dlaset' );
```

#### dlaset( order, uplo, M, N, alpha, beta, A, LDA )

Sets the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var A = new Float64Array( 4 );

dlaset( 'row-major', 'all', 2, 2, 2.0, 1.0, A, 2 );
// A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether to set the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **alpha**: value assigned to off-diagonal elements.
-   **beta**: value assigned to diagonal elements.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array:
var A0 = new Float64Array( 5 );

// Create offset view:
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dlaset( 'row-major', 'all', 2, 2, 2.0, 1.0, A1, 2 );
// A0 => <Float64Array>[ 0.0, 1.0, 2.0, 2.0, 1.0 ]
```

#### dlaset.ndarray( uplo, M, N, alpha, beta, A, sa1, sa2, oa )

Sets the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var A = new Float64Array( 4 );

dlaset.ndarray( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
// A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
```

The function has the following parameters:

-   **uplo**: specifies whether to set the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **alpha**: value assigned to off-diagonal elements.
-   **beta**: value assigned to diagonal elements.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var A = new Float64Array( 5 );

dlaset.ndarray( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 1 );
// A => <Float64Array>[ 0.0, 1.0, 2.0, 2.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlaset()` corresponds to the [LAPACK][lapack] routine [`dlaset`][lapack-dlaset].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var uniform = require( '@stdlib/random-array-discrete-uniform' );
var numel = require( '@stdlib/ndarray-base-numel' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var dlaset = require( '@stdlib/lapack-base-dlaset' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = uniform( N, -10, 10, {
    'dtype': 'float64'
});
console.log( ndarray2array( A, shape, strides, 0, order ) );

dlaset( order, 'all', shape[ 0 ], shape[ 1 ], 2.0, 3.0, A, strides[ 0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
TODO
```

#### TODO

TODO.

```c
TODO
```

TODO

```c
TODO
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-dlaset.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-dlaset

[test-image]: https://github.com/stdlib-js/lapack-base-dlaset/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/lapack-base-dlaset/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-dlaset/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-dlaset?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-dlaset.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-dlaset/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-dlaset/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-dlaset/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-dlaset/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-dlaset/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-dlaset/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-dlaset/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-dlaset/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-dlaset/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlaset]: https://www.netlib.org/lapack/explore-html-3.6.1/d7/d43/group__aux_o_t_h_e_rauxiliary_ga89e332374c7cd87e5db54bfe21550bc3.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
