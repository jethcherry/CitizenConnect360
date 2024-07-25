CREATE OR ALTER PROCEDURE getUser
    @Email VARCHAR(255)
AS
BEGIN
    SELECT * 
    FROM Conct360Users
    WHERE Email = @Email AND isDeleted = 0;
END
