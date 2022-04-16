This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run npm install

## File Tree

# public

Images & what not go here

# pages

Learn more about next.js to understand this

# styles

Generally stores global styles - for now

# components

Components are where we store well, components.
They are then imported into a parent page or a parent component.

## Helpful Tools

We take advantage of <style> tags within our components

Using the Styled JSX library

To make this a much better dev experience, make sure to
install these two vscode extensions:

styled-jsx Language Server
https://marketplace.visualstudio.com/items?itemName=Divlo.vscode-styled-jsx-languageserver

styled-jsx Syntax Highlighting
https://marketplace.visualstudio.com/items?itemName=Divlo.vscode-styled-jsx-syntax

We also take advantage of code snippets to speed up dev and eliminate boilerplate
in our normal workflow - you can download that here:

## Code Snippets

Code Snippets are very powerful in eliminating boilerplate and speeding up your
workflows. I've put together a set of snippets I used with this workflow specifically
that help me immensely.

They are in a JSON document and are meant to be used with VS Code.

You can find them here: https://github.com/TyrellD1/nextjs-react-snippets

All you have to do is go to:

Windows: file => preferences => user snippets
Mac: Code => preferences => user snippets

and search react. The jsx file extension should come up.

Just paste what I have in the snippets.json file in here and
you will be set to go.

I encourage you to add to yours overtime as you see fit.

## Styled JSX

# Global SCSS Variables

Put Global Variables in /styles/global-vars.scss

Global Variables can be imported effortlessly using the snippets I linked to above

# Scope

Styles are scoped to the exact component they're defined it. 

They are not passed onto sub components. 

If you need to pass to sub components (this can come in handy) see
https://nextjs.org/blog/styling-next-with-styled-jsx#one-off-global-selectors

# Dynamic Styles

There are ways to change your css styles on variables changes in next.js

Here's 2 main ways. 

1. Changes with props (not typically dynamic) this will allow you to make
your components modular to add different styles easily.

2. The truly dynamic way. This is when you need styles to change when
the end user interacts with an element. You can do it the normal inline way
or there's another way we'll see here. 

