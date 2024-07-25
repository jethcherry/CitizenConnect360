USE CitizenConnect360;

CREATE OR ALTER PROCEDURE updateView
(
    @ViewId VARCHAR(255),
    @Image VARCHAR(255),
    @Title VARCHAR(255),
    @Description VARCHAR(255),
    @Date DATE,
    @UserId VARCHAR(255)
)
AS
BEGIN
    UPDATE CitizenViews
    SET Image = @Image,
        Title = @Title,
        Description = @Description,
        Date = @Date,
        UserId = @UserId
    WHERE ViewId = @ViewId;
END;
