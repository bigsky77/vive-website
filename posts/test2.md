
---
title: Cairo Builtins
date: '2022-07-18'
---Cairo Builtins
=========================

Ok!  Are you ready?  Cairo Builtins .... Take a deep breath, are you sure you're ready? Let's do it.

Cairo Builtins are one of the most interesting and confusing parts of the language.  Which is saying a lot becuase Cairo has many interesting and confusing parts.  Builtins are basically super low-level library functions that are built directly into the vm (at least this is how I understand it now).

Becuase Cairo memory is immutable, every time you use a Builtin you need to keep track of the pointer to that memory.  The need to keep track of builtin pointer is key to what is know as 'implicit arguments'.  These arguments are added to a function call using curly brackets like so `func foo{hash_ptr : HashBuiltin*}()`.  When added to a function implicit arguments add both an argument and a return value to the function so that the programmer does not need to keep track of the memory manually.  

There is a lot more to cover with Builtins and I will be updating this post all week!

This is a really good link for diving deeper into the cairo library https://perama-v.github.io/cairo/cairo-common-library/

I spent all day working on the `hash_chain()` builtin.  Once I started to think about the different builtins as Rust types they started to make a little more sense.  I still do not have a good intution for what is going on under the hood - especially with how memory is allocated.  Tomorrow I am going to re-set on the Builtins chapter and try and work through everything at the lowest possible level.  

Rust forced me to rethink everything I knew about programming, and Cairo is doing the same.  Just at a much much lower level.

# Types of Builtins

### Pedersen and Output

The pedersen hash is a basic type of hash used in cairo programs (and I'm sure lots of other places as well).  For example this code block will return the pedersen hash of two numbers.  Note the output pounter which can be thought of as somewhat analogeous to `console.log` in other programming languages.

		%builtins output pedersen

		from starkware.cairo.common.cairo_builtins import HashBuiltin
		from starkware.cairo.common.hash_chain import hash_chain
		from starkware.cairo.common.hash import hash2

		func main{output_ptr, pedersen_ptr : HashBuiltin*}():
		    let (res) = foo{hash_ptr=pedersen_ptr}(1, 2)
		    assert [output_ptr] = res
 
		    let output_ptr = output_ptr + 1
		    return()
		end

		func foo{hash_ptr : HashBuiltin*}(x, y) -> (z : felt):
		    let hash = hash_ptr
		    let hash_ptr = hash_ptr + HashBuiltin.SIZE

		    hash.x = x
		    hash.y = y

		    return (z=hash.result)
		end	

 A few important things to note from the code block above.  Note the HashBuiltin import.  This is a struct that contains three members of the type felt.  x, y, and result.  HashBuiltin.SIZE returns the of the memory used by the builtin (3 memory cells).  
