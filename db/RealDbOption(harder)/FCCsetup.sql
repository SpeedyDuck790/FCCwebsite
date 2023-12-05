
CREATE TABLE FccLeaderboard (
    Player VARCHAR(255),
    Points INT,
    Rating INT,
    WDL INT,
    Events INT,
    champs VARCHAR(255)
);

INSERT INTO FccLeaderboard (Player, Points, Rating, WDL, Events, champs)
VALUES ('John Doe', 100, 1500, 5, 10, 'Chess');


CREATE TABLE menu (
    Notice VARCHAR(255),
    Schedule VARCHAR(255)
);

INSERT INTO menu (Notice, Schedule)
VALUES ('Important notice', 'Monday: Chess Tournament');

CREATE TABLE Events (
    Title VARCHAR(255),
    Blurb VARCHAR(255),
    Date DATE,
    TimeControl VARCHAR(255),
    Rounds INT,
    RatingType VARCHAR(255)
);

INSERT INTO Events (Title, Blurb, Date, TimeControl, Rounds, RatingType)
VALUES ('Chess Tournament', 'Join us for a chess tournament!', '2022-01-01', 'Standard', 5, 'FIDE Rated');


