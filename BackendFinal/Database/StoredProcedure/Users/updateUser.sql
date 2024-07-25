CREATE OR ALTER PROCEDURE updateUser
    @UserId VARCHAR(255),
    @Name VARCHAR(255),
    @Email VARCHAR(255),
    @Password VARCHAR(255),
    @Role VARCHAR(50)
AS
BEGIN
    DECLARE @RoleId INT;

    -- Get RoleId from Roles table
    SELECT @RoleId = RoleId
    FROM Roles
    WHERE RoleName = @Role;

    -- Check if the RoleId is null
    IF @RoleId IS NULL
    BEGIN
        RAISERROR('Invalid role name provided', 16, 1);
        RETURN;
    END

    -- Update user information
    UPDATE Conct360Users
    SET Name = @Name,
        Email = @Email,
        Password = @Password,
        Role = @Role, -- Update the Role field
        RoleId = @RoleId -- Update the RoleId field
    WHERE UserId = @UserId AND isDeleted = 0;
END;
