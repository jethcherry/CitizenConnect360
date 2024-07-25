USE CitizenConnect360;

CREATE OR ALTER PROCEDURE updateIncident
(
    @IncidenceId VARCHAR(255),
    @Image VARCHAR(255),
    @Title VARCHAR(255),
    @Location VARCHAR(255),
    @Description TEXT,
    @Date DATE,
    @Author VARCHAR(255),
    @UserId VARCHAR(255)
)
AS
BEGIN
    UPDATE Incident
    SET Image = @Image,
        Title = @Title,
        Location = @Location,
        Description = @Description,
        Date = @Date,
        Author = @Author,
        UserId = @UserId
    WHERE IncidenceId = @IncidenceId;
END;
