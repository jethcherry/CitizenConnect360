USE CitizenConnect360;

CREATE OR ALTER PROCEDURE deletePoll
(
    @PollId VARCHAR(255)
)
AS
BEGIN
    DELETE FROM Polls WHERE PollId = @PollId;
END;
