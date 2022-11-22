create schema cinemateca;

create table cinemateca.filmes(
    id serial primary key,
    title varchar not null,
    director varchar not null,
    year int not null,
    genre varchar not null
);