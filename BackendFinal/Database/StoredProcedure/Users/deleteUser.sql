CREATE OR ALTER PROCEDURE deleteUser
    @UserId VARCHAR(255)
AS
BEGIN
    UPDATE Conct360Users
    SET isDeleted = 1
    WHERE UserId = @UserId;
END
