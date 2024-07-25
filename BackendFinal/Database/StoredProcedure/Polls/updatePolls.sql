USE CitizenConnect360;

CREATE OR ALTER PROCEDURE updatePoll
(
    @PollId VARCHAR(255),
    @Question VARCHAR(255),
     @Options VARCHAR(MAX),
    @UserId VARCHAR(255)
)
AS
BEGIN
    UPDATE Polls
    SET Question = @Question,
        Options = @Options,
        UserId = @UserId
    WHERE PollId = @PollId;
END;
