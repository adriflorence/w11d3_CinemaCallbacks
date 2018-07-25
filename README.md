# Enumeration and Callbacks Homework: Cinema

## Brief

Model a `Cinema` and a `Film` class and their corresponding test files.

A Film has:

- a title
- a genre
- a year
- a length

A Cinema has:

- an array of `Film`s

### MVP

Cinema:

- should have a collection of films
- should be able to get a list of film titles
- should be able to find a film by title
- should be able to filter films by genre
- should be able to check whether there are some films from a particular year (`true`/`false`)
- should be able to check whether all films are over a particular length (`true`/`false`)
- should be able to calculate total running time of all films

### Extensions

Add a another test, `'Cinema should be able to filter films by year'`.

The task is get the final test to pass by to writing a new method called `filmsByProperty`, which takes two arguments:

1. the name of the property
2. the value being search for

Once the final test is passing, modify the test `'Cinema should be able to filter films by genre'` to use the new `filmsByProperty` method.
