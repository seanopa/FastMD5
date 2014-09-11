FastMD5
=======

## JavaScript MD5 library

The goal of this project is to create an extremely fast MD5 implementation.<br>
It's based on a [Joseph Myers's high-performance md5](http://www.myersdaily.org/joseph/javascript/md5-text.html).

## Usage

Download the [library](https://raw.githubusercontent.com/iReal/FastMD5/master/lib/md5.js) and include it.

```html
<script src="path_to/md5.js"></script>
```

Then call it:

```js
var string, hash;

string = "abc";
hash = md5(string);

console.log(hash); // -> "900150983cd24fb0d6963f7d28e17f72"
```

#### Additional params

`md5`(`data`, `[arrayOutput]`, `[unicode]`);

- `arrayOutput` - if set to `true`, then result will be an array of chars (not a string)
- `unicode` - set `true` if there are any Unicode chars in your data to get a correct output

## License

(The MIT License)

Copyright (c) 2014 iReal

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
