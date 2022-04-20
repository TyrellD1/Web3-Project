This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Discord Test - don't merge - test again

# Getting Started

1. Navigate to root directory

2. Run npm install

3. npm run dev

## Happy Coding!

# File Tree

## public

Static files go here

## pages

Not needed to start. Pages are basically parent componenents you store
in the /pages directory. Ask for help here as needed.

## styles

Generally stores global styles.

Component styles can be found in a components directory.

It is very important to use global vars for things like colors
and fonts throughout the application.

That way if you decide to change a color or font later you can
change the global variable once and have every component change
dynamically, rather than having to go into each individual place
you use the color or font and change it manually.

This is essential for shipping front end code quickly.

## components

Components are where we store well, components.
They are then imported into a parent page or a parent component.

The beauty of React/Next.js is they help us create reusable
components we can customize very easily.

# Helpful Tools

We take advantage of <style> tags within our components.

Using the Styled JSX library.

To make this a much better dev experience, make sure to
install these two vscode extensions:

styled-jsx Language Server
https://marketplace.visualstudio.com/items?itemName=Divlo.vscode-styled-jsx-languageserver

styled-jsx Syntax Highlighting
https://marketplace.visualstudio.com/items?itemName=Divlo.vscode-styled-jsx-syntax

# Code Snippets

Code Snippets are very powerful in eliminating boilerplate and speeding up your
workflows. I've put together a set of snippets I've used with this workflow specifically
that help me immensely.

They are in a JSON document and are meant to be used with VS Code.

You can find them here: https://github.com/TyrellD1/nextjs-react-snippets

All you have to do is go to:

Windows: file => preferences => user snippets
Mac: Code => preferences => user snippets

and search react. The jsx file extension should come up.

Just paste what I have in the snippets.json file in here and
you will be set to go.

I encourage you to add to yours overtime as you see fit. I intend this to
be an evergrowing list - should you make your own and want to share them
let me know and we can think about adding them to the list!

# Styled JSX

## Global SCSS Variables

Put Global Variables in /styles/global-vars.scss

Global Variables can be imported effortlessly using the snippets I linked to above.

## Scope

Styles in style tags are scoped to the exact component they're defined it. 

They are not passed onto sub components or up to parent components. 

If you need to pass to sub components (this can come in handy) see
https://nextjs.org/blog/styling-next-with-styled-jsx#one-off-global-selectors
don't worry about learning this otherwise.

## Dynamic Styles

There are ways to change your css styles on variables changes in next.js.

Here's 2 main ways. 

1. Changes with props (not typically dynamic) this will allow you to make
your components modular to add different styles easily.

2. The truly dynamic way. This is when you need styles to change when
the end user interacts with an element. You can do it the normal inline way
or there's another way we'll see here. 

