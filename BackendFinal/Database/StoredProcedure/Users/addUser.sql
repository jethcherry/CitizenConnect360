CREATE OR ALTER PROCEDURE addUser
    @UserId VARCHAR(255),
    @Name VARCHAR(255),
    @Email VARCHAR(255),
    @Password VARCHAR(255),
    @Role VARCHAR(50)
AS
BEGIN
    DECLARE @RoleId INT;
    DECLARE @isApproved INT;

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

    -- Determine isApproved based on role
    IF @Role = 'Admin' OR @Role = 'Citizen'
    BEGIN
        SET @isApproved = 1;
    END
    ELSE IF @Role = 'Government Official'
    BEGIN
        SET @isApproved = 0;
    END

    -- Insert new user
    INSERT INTO Conct360Users (UserId, Name, Email, Password, isApproved, Role, RoleId)
    VALUES (@UserId, @Name, @Email, @Password, @isApproved, @Role, @RoleId);
END;
