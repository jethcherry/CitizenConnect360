USE CitizenConnect360;

CREATE OR ALTER PROCEDURE getIncident
(
    @IncidenceId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM Incident WHERE IncidenceId = @IncidenceId;
END;
