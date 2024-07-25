USE CitizenConnect360;
GO

CREATE OR ALTER PROCEDURE addView
(
    @ViewId VARCHAR(255),
    @Image VARCHAR(1000), 
    @Title VARCHAR(255),
    @Description VARCHAR(255),
    @Date DATE,
    @UserId VARCHAR(255)
)
AS
BEGIN
    INSERT INTO CitizenViews (ViewId, Image, Title, Description, Date, UserId)
    VALUES (@ViewId, @Image, @Title, @Description, @Date, @UserId);
END;
GO
