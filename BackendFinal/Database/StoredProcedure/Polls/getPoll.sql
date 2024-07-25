USE CitizenConnect360;

CREATE OR ALTER PROCEDURE getPoll
(
    @PollId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM Polls WHERE PollId = @PollId;
END;
