CREATE OR ALTER PROCEDURE getUsers
AS
BEGIN
    SELECT * 
    FROM Conct360Users 
    WHERE isDeleted = 0;
END
