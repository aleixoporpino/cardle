INSERT INTO make (id, name)
VALUES ('make_1', 'Honda'),
       ('make_2', 'Buick'),
       ('make_3', 'Acura'),
       ('make_4', 'Lotus');

INSERT INTO game (id, game_start, game_end, make_id, word_type)
VALUES ('game_1', '2022-05-27 00:00:00', '2022-05-28 00:00:00', 'make_1', 'MAKE');