USE CitizenConnect360;

CREATE OR ALTER PROCEDURE addIncident
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
    INSERT INTO Incident (IncidenceId, Image, Title, Location, Description, Date, Author, UserId)
    VALUES (@IncidenceId, @Image, @Title, @Location, @Description, @Date, @Author, @UserId);
END;
