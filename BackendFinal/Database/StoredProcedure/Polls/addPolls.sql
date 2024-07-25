USE CitizenConnect360;

CREATE OR ALTER PROCEDURE addPoll
(
    @PollId VARCHAR(255),
    @Question VARCHAR(255),
    @Options VARCHAR(MAX),
    @UserId VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Polls (PollId, Question, Options, UserId)
    VALUES (@PollId, @Question, @Options, @UserId);
END;
