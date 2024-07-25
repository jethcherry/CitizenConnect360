USE CitizenConnect360;

CREATE OR ALTER PROCEDURE getIncidents
AS
BEGIN
    SELECT * FROM Incident;
END;
