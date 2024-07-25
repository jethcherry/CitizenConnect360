USE CitizenConnect360;

CREATE OR ALTER PROCEDURE deleteIncident
(
    @IncidenceId VARCHAR(255)
)
AS
BEGIN
    DELETE FROM Incident WHERE IncidenceId = @IncidenceId;
END;
