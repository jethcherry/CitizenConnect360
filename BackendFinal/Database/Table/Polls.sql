USE CitizenConnect360;

CREATE TABLE Polls
(
    PollId VARCHAR(255) PRIMARY KEY,
    Question TEXT NOT NULL,
    Options VARCHAR(255) NOT NULL,
    UserId VARCHAR(255),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);
