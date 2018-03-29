//Provides utilities for working with file and directory paths.
const path = require('path');

//Returns the last portion of a path, similar to the Unix basename command.
console.log("path.basename()",path.basename('/foo/bar/baz/asdf/quux.html'));

//Provides the platform-specific path delimiter
//; for Windows : for POSIX
console.log("path.delimiter",path.delimiter);

//Returns the directory name of a path, similar to the Unix dirname command.
console.log("path.dirname()",path.dirname("./local/dir"));

//Returns the extension of the path
console.log("path.extname()",path.extname("/local/text.txt"));

//Returns a path string from an object. 
console.log("path.format()",path.format({dir:"dir",root:"", base:"", name :"name",ext:".ext"}));

//Determines if path is an absolute path.
console.log("path.isAbsolute()",path.isAbsolute("/local/text.txt"));

//Joins all given path segments together using the platform specific separator as a delimiter
console.log("path.join()",path.join("/local","dir/dir2","/text.txt"));

//When multiple, sequential path segment separation characters are found , they are replaced by a single instance.
console.log("path.normalize()",path.normalize('/foo/bar//baz/asdf/quux/..'));

//Returns an object whose properties represent significant elements of the path
console.log("path.parse()",path.parse('/local/dir/text.txt'));

//Provides access to POSIX specific implementations of the path methods.(?)
console.log("path.posix",path.posix);

//Returns the relative path from from to to based on the current working directory. 
console.log("path.relative()",path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

//Resolves a sequence of paths or path segments into an absolute path.
console.log("path.resolve()",path.resolve('/foo/bar', './baz'));

//Provides the platform-specific path segment separator:\ on Windows / on POSIX
console.log("path.sep",path.sep);

//[Windows] Returns an equivalent namespace-prefixed path for the given path. 
//console.log("path.toNamespacedPath(path)",path.toNamespacedPath('/local/dir/text.txt'));

//[Windows] Provides access to Windows-specific implementations of the path methods.
console.log("path.win32",path.win32);

console.log("-END-")